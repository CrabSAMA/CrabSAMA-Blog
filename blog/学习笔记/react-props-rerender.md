---
title: React Props 变更导致额外 re-render
date: 2025-08-12 16:26:16 +08:00
category:
  - 学习笔记
tag:
  - React
  - 踩坑
---

# React Props 变更导致额外 re-render

React 中真的处处都是~~坑~~（重点）

最初是发现 props 变更时会导致许多不应该发生的 re-render

```tsx
function App() {
  return (
    <div>
      <Chat class="p-4" messages={messages}></Chat>
      <Button
        type="primary"
        onClick={() => {
          setMessages([
            ...messages,
            {
              id: `${Date.now()}`,
              content: '测试消息',
              role: 'user',
              loading: false,
            },
          ])
        }}
      >
        test add
      </Button>
    </div>
  )
}

const Chat: React.FC<ChatProps> = ({
  difyAPIUrl,
  difyAPIKey,
  messages,
}: ChatProps) => {
  const memoMessages = React.useMemo(() => messages, [messages])

  return (
    <>
      <XProvider theme={theme}>
        <DifyContext value={{ difyAPIUrl, difyAPIKey }}>
          <ChatList messages={memoMessages}></ChatList>
        </DifyContext>
      </XProvider>
    </>
  )
}

function ChatList({ messages }: ChatListProps) {
  const rolesAsObject: GetProp<typeof Bubble.List, 'roles'> = {
    assistant: {
      placement: 'start',
      avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
      typing: { step: 5, interval: 20 },
      styles: {
        content: {
          backgroundColor: 'white',
        },
      },
      variant: 'shadow',
      shape: 'corner',
      messageRender: renderMarkdown,
      classNames: {
        header: 'w-full',
      },
    },
    user: {
      placement: 'end',
      // avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
      shape: 'corner',
    },
  }

  const renderMessages = useMemo(() => {
    return messages.map((item) => ({
      key: item.id,
      role: item.role,
      content: item.content,
      header: renderWorkflow(item.workflowProcess),
      loading: item.loading ?? false,
    }))
  }, [messages])

  return (
    <>
      <Bubble.List
        items={renderMessages}
        roles={rolesAsObject}
        className="h-full"
      ></Bubble.List>
    </>
  )
}
```

简单来说，就是上面的一个结构，App -> Chat -> ChatList，三个组件架构，从最外层将 messages 往里传。

最初的时候，发现 messages 发生变更的时候，整个 ChatList 组件都会 re-render，但预期应该是只有 ChatList 中新增 message 那部分进行渲染，其余部分没发生变化则不进行 re-render。在使用 React Devtool 去排查问题的时候，发现罪魁祸首在 createContext。由于我**将 `createContext` 放在了组件内部去使用**，导致每次 re-render 执行组件函数时，都会重新建立一个新的 Context 组件，从而导致其内部的子组件被重新渲染。

总结：**这个问题其实从 React 的渲染机制去出发就很好理解了，React 的 functional component 每次重新渲染都会重新执行函数，因此一些只需要建立一次的 context、或者是定义一次的变量，就不应该放在组件函数内部。函数内部只应该去放内部变量。**

在解决了 context 导致的 re-render 问题后，上面还有一个 `rolesAsObject` 这个对象，这个对象作为 props 去使用，但这个对象又是在组件函数内定义的，因此每次触发 re-render 的时候，都会重新去定义这个对象，因此就会导致 prop 进行变更，导致组件进行 re-render，但其实这些 re-render 是不必要的，去看了组件库文档的示例也是将这个对象写在组件外部去当成一个 immutable 值去使用。

排查 re-render 的问题可以借助 React Devtool 去做，打开设置里面的 General - Highlight updates when components render 可以很直观地看到哪些组件发生了 render，然后结合 Profiler 功能可以看到触发操作之后是哪些发生变更导致的 re-render，这样排查起来就比较简单直观了。

[React 重新渲染：最佳实践](https://zhuanlan.zhihu.com/p/554118692)
