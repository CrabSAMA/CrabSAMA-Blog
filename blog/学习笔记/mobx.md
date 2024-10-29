---
title: React 状态管理库 / Mobx
date: 2024-10-23 17:42:07 +08:00
category:
  - 学习笔记
tag:
  - React
  - Mobx
---

# React 状态管理库 / Mobx

React 项目开发的初期，在较为简单的业务场景中我们都直接使用 `useState` 局部管理数据状态，这是没什么问题的。

在项目变得复杂，需要涉及跨层级跨组件、全局保持状态的时候，我最开始使用了 `context` + `reducer` 去做状态管理，在一些比较简单的场景下也能实现我们的需求。

直到我需要在 `dispatch` 后马上获取变更后的状态（具体场景是设置了列表数据后要获取最新的列表数据进行操作），发现不太好实现了，这下就要将目光转向到专业的状态管理工具库了。

在最开始的时候，我也有去对比各类方案，此处附上我当时看的一个[链接](https://juejin.cn/post/7299741943441408040?searchId=20241023113626C8701A2EF41B0250CDB8)。redux 是 star 数最多的库，同时也是比较老牌的一个库，但了解到它有许多的模版代码需要写，在使用体验上并不是特别好；mobx 主打的是一个响应式编程，上手比较简单，在我看来 Vue 开发给我带来的经验可以帮我更快地上手这个库，但需要注意的是 mobx 风格比较自由，如果代码习惯较差有可能后人会有阅读成本。

## 是什么

Mobx 通过运用函数式响应编程来实现数据的管理，它将数据存放在一个个 store 中的 `state` 里，通过 `action` 来进行数据的变更。只要在 `action` 中对 `state` 执行简单的赋值操作，在取值的地方就会自动响应式变更为新数据。

## 怎么用

在代码中我们可以新建一个 stores 文件夹来存放 store，一般我们习惯通过业务维度来划分 store。举个例子，我们定义了一个用户信息的 store：

```tsx
import { makeObservable, observable, action } from 'mobx'
import dayjs from 'dayjs'

interface Feature {
  id: number;
  unique_key: string;
  is_report: number;
  icon: string;
  order_by: number;
  remark: string;
  type: number;
  url: string;
  parent_id: number;
  is_show: number;
  open_type: number;
  name: string;
  sensitivity: number;
  state: number;
  created_at: number;
  children: Feature[];
}

interface User {
  job_name: string;
  entry_date: number;
  name_zh: string;
  sex: number;
  job_level: string | null;
  id: string;
  depart_path: string | null;
  depart_id: number;
  state: number;
  account: string;
  email: string;
}

class UserStore {
  userInfo: User | undefined = {} as User
  isAdmin: boolean = false
  menuList: Feature[] = []
  accessList: string[] = []
  showMenuList: string[] = []
  hasGetMenu:boolean = false
  
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      isAdmin: observable,
      menuList: observable,
      accessList: observable,
      showMenuList: observable,
      hasGetMenu: observable,
      setUser: action,
      setMenu: action
    })
  }

  setUser(userInfo: User, isAdmin: boolean) {
    this.userInfo = userInfo
    this.isAdmin = isAdmin
  }

  setMenu(menuList: Feature[]) {
    const accessList: string[] = []
    const showMenuList: string[] = []
    const getAccessList = (data) => {
      // do something...
    }
    this.menuList = menuList
    this.accessList = accessList
    this.showMenuList = showMenuList
    this.hasGetMenu = true
  }
}

export default new UserStore()
```

可以看到的是，定义 store 其实就是新建一个 class，然后通过 `constructor` 中调用 `makeObservable` 或者 `makeAutoObservable` 来将这个类中的属性与方法赋予响应式能力。需要注意的是，一般情况下我们调用 `makeAutoObservable` 即可，但针对一些无法正常推断的情况我们也可以使用 `makeObservable` 进行手动操作。

赋值操作比较简单，直接通过类中的 `this.xxx` 进行赋值即可。而取值操作我们可以在引入 store 后直接使用：

```tsx
import userStore from '@/store/userStore'
import { observer } from 'mobx-react-lite'

function WithAuth({ auth, ...props }) {
  return userStore.accessList.includes(auth) ? <>{props.children}</> : null
}

export default observer(WithAuth)
```

这里我们引入了对应的 store，并使用 mobx 提供的 `observer` 方法将需要触发响应式变更的组件进行包裹，然后直接就可以使用到 store 下面的值了，如果在其他地方通过 `action` 修改了值，组件也会随之更新，十分简单！

## 遇到的坑

当然事情不可能都一帆风顺，在一开始我们就遇到了响应式不更新的问题，在这里可以提醒大家，遇到问题的时候可以先根据官方的这几个点进行排查（[链接](https://zh.mobx.js.org/react-integration.html#%E7%96%91%E9%9A%BE%E8%A7%A3%E7%AD%94)）：

1. 请确保你没有遗漏 `observer` (是的，这是最常见的错误)。
2. 请检查你传入的对象确定是可观察对象. 可以使用 [`isObservable`](https://zh.mobx.js.org/api.html#isobservable)这个工具函数, 如果需要在运行时检查可以使用这个工具函数[`isObservableProp`](https://zh.mobx.js.org/api.html#isobservableprop)。
3. 请检查在浏览器控制台中的任何错误或者警告。
4. 请确保你大体上是理解Mobx的调用栈. 详细请阅读 [理解响应式（Understanding reactivity）](https://zh.mobx.js.org/understanding-reactivity.html) 这篇文章。
5. 请阅读上面小贴士中提及的常见错误。
6. [配置（Configure）](https://zh.mobx.js.org/configuration.html#linting-options) MobX 如何警告你的机制和输出日志。
7. 使用 [追踪（trace）](https://zh.mobx.js.org/analyzing-reactivity.html) 来确保你传递给Mobx了正确的东西，或者是否正确使用了Mobx的 [spy](https://zh.mobx.js.org/analyzing-reactivity.html#spy) / [mobx-logger](https://github.com/winterbe/mobx-logger) 包。

### `observer` 的位置

在一开始学习使用 mobx 时，看网上的教程写得都很简单，让我产生了我可以**通过 `observer` 最外层组件**就能够实现全局响应式的错觉。一开始我以为这样是可行的，只是会让项目的性能变差，但在我实际测试下来发现这种方式没办法正常触发响应式生效，因此我们的最佳实践还是在单个需要触发响应式的组件上进行包裹并使用，这样可以最大程度优化 mobx 的性能，毕竟我们都知道响应式原理的订阅/发布模式是比较消耗性能的。

### mobx 不能解构

在代码编写时，每次都要通过 `store.foo` 去取值有点繁琐，因此我尝试着通过 `const { foo } = store` 的方式去利用 ES6 的解构赋值能力对值进行解构。但需要注意的是，这样写是不行的！这种写法在第一次获取值的时候是没问题的，但如果你变更了值，它并不能正确地响应式更新。

我们可以去看官方文档中的这一节：[理解响应式](https://gitlab.huolala.cn/group-da/ai-recruit/-/merge_requests/15)。

原理是 Mobx 会对跟踪函数执行时读取的任何 *存在的* **可观测的** *属性* 做出响应。用自己的话来总结一下就是：mobx 只对**读取**这个行为负责，在解构出来之后不是直接对 store 的读取，因此失去了响应式。因此我们确实需要通过点访问或者方括号访问的方式去读取属性，才能保证响应式正常生效。

这是我这个 React 小白的见解，不好说有没有更方便的方法可以实现取值，如果有新的方法我会更新到这篇文章中。

