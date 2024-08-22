---
title: React严格模式
date: 2024-08-01 16:41:55 +08:00
category:
  - 学习笔记
tag:
  - react
---

# React 严格模式

在刚开始使用 react 开发应用时，会发现 react 有一个奇怪的现象，就是 useEffect 等 api 会在开发环境执行两次。我们一般习惯在将 useEffect 类比成 Vue 里面的 mounted 生命周期函数，在里面进行一些初始化操作，例如接口请求等。此时就会发现，在开发环境中，接口会被调用两次。在参考了官方文档和询问了 gpt 后，才知道这是 react 的严格模式导致的。

## 官方文档

https://zh-hans.react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development

## 示例代码

```tsx
export default function index() {
  console.log(1)
  return <div></div>
}
```

react 中这种情况会打印两个 1，是因为在开发环境中开启了严格模式

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## GPT 回答

在 React 组件中，出现打印两次 `console.log(1)` 的情况，通常是因为 React 的严格模式（Strict Mode）导致的。React 的严格模式会在开发环境中对某些生命周期方法进行额外的调用，以帮助开发者发现潜在的问题。

具体来说，React 的严格模式会在开发环境中对以下方法进行额外的调用：

1. `constructor`
2. `render`
3. `shouldComponentUpdate`
4. `getDerivedStateFromProps`
5. `getSnapshotBeforeUpdate`
6. 以及函数组件的主体部分

严格模式会在初次渲染时调用这些方法两次，以确保这些方法是纯函数（即不产生副作用）。这意味着在严格模式下，函数组件的主体部分（包括你在其中的 `console.log(1)`）会被调用两次。

你可以通过检查你的应用是否在严格模式下运行来验证这一点。严格模式通常是通过在应用的根组件中使用 `<React.StrictMode>` 包裹组件来启用的。例如：

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

如果你移除 `<React.StrictMode>`，你会发现 `console.log(1)` 只会被调用一次：

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

请注意，严格模式只在开发环境中生效，在生产环境中不会有任何影响。因此，在生产环境中，`console.log(1)` 只会被调用一次。严格模式的目的是帮助你在开发过程中发现潜在的问题和不纯的副作用。

## 注意事项

除了 useEffect 这个 api，在 react 中有一系列的场景都会在开发环境下的严格模式中执行两次：

- 组件函数体（仅限顶层逻辑，不包括事件处理程序内的代码）
- 传递给 [`useState`](https://zh-hans.react.dev/reference/react/useState)、[`set` 函数](https://zh-hans.react.dev/reference/react/useState#setstate)、[`useMemo`](https://zh-hans.react.dev/reference/react/useMemo) 或 [`useReducer`](https://zh-hans.react.dev/reference/react/useReducer) 的函数。
- 部分类组件的方法，例如 [`constructor`](https://zh-hans.react.dev/reference/react/Component#constructor)、[`render`](https://zh-hans.react.dev/reference/react/Component#render)、[`shouldComponentUpdate`](https://zh-hans.react.dev/reference/react/Component#shouldcomponentupdate) 等（[请参阅完整列表](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)）。

因此在遇到此类问题的时候，可以先往这个方向思考，同时对函数进行改造，改造为没有副作用的纯函数。
