---
title: React实现类似nextTick功能
date: 2024-08-01 17:46:35 +08:00
category:
  - 学习笔记
tag:
  - react
---

# React 实现类似 nextTick 功能

作为一个 Vue 开发，在学习与使用 React 进行开发的时候，很自然地就会代入一些 Vue 的思想。在 Vue 和 React 中更新状态都是异步的，即更新完状态 DOM 并不会马上进行更新，而是在之后的某个时机才会进行状态更新并更新 DOM。

在 Vue 里面，我们有 nextTick 这种方法，可以保证在状态更新完成后执行一些业务逻辑。但在使用 React 的初期，我并没有发现有这种类似的 API。

react 如何实现类似 nexttick 这种方法？就是保证 setState 执行完成后才执行，举例：赋值完成后滚动到底部。

## 最初的解法：使用 useEffect

在 useEffect 中，当状态发生更新时会执行对应的回调函数。在这里面我们可以保证状态已经更新完成，因此我们可以将滚动到底部的逻辑放在里面执行。

但很快我就遇到了难题：nextTick 是自由的，我们可以在需要执行业务逻辑的时候调用 nextTick，但是将逻辑放在了 useEffect 中，每次状态更新都会触发我们的业务逻辑。在这个时候，参考了 gpt 提供的一些方案，使用了一个 flag 来控制业务逻辑的执行。

```tsx
// 只有在第一次请求数据的时候需要滚动到底部
let scrollFlag = true

useEffect(() => {
  if (scrollFlag && chatHistory.length > 0) {
    scrollFlag = false
    scrollToBottom()
  }
}, [chatHistory])

const setScrollFlag = (flag: boolean) => (scrollFlag = flag)
```

这种方法可以实现到类似的效果，但是并不优雅，并且在使用过程中经常遇到 flag 忘记更新的情况，使用起来心智负担也比较大，因此我也在找寻更加高效优雅的方案。

## 官方正解：flushSync

[情景演示](https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs#flushing-state-updates-synchronously-with-flush-sync)

https://zh-hans.react.dev/reference/react-dom/flushSync

使用 flushSync，在 flushSync 回调函数中执行的代码会马上更新视图。

```tsx
const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([])

const flushSetChatHistory = (...args) => {
  flushSync(() => {
    // @ts-ignore
    setChatHistory(...args)
  })
}
const setChatHistoryAndScroll = (...args) => {
  flushSetChatHistory(...args)
  scrollToBottom()
}
```

由于需要更新状态后视图更新才能滚动到底部，因此这里做了一个 `flushSetChatHistory` 的封装，实际运行效果没问题。

最终我们实现了对应的效果：在需要实时更新状态的情况下，我们使用 `flushSetChatHistory` 函数，而在不需要实时更新状态的情况下，我们使用默认的 `setChatHistory` 函数即可。
