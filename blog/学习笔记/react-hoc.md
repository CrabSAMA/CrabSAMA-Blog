---
title: React 高阶组件
date: 2024-10-21 10:50:38 +08:00
category:
  - 学习笔记
tag:
  - React
---

# React 高阶组件

> React 官方文档：
>
> 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
>
> 具体而言，**高阶组件是参数为组件，返回值为新组件的函数。**

## 场景

在项目中，我们会遇到一些权限管控相关的需求，比如根据用户有无权限来决定按钮是否展示、路由是否允许访问。在 Vue 中我们要么通过自定义指令去实现，要么自行封装组件去统一管控的逻辑，再或者可以通过 Vue Router 的一些钩子来进行处理。

作为一个先学习了 Vue 的开发者，使用 React 开发时自然下意识地去寻找有没有此类的 API，但比较可惜的是，React 确实较为地原生态，这类功能需要自己去实现，这个时候我便发现了高阶组件这个概念。

## 是什么

高阶组件一般来说其实就是一个函数，它接受组件作为参数，返回值也是一个组件。我们经常用高阶组件去对普通组件进行包装，实现一些逻辑封装，同时也可以根据传入不同的参数，返回不同类型的组件。

高阶组件函数中，我们不能修改原始组件，而应该对组件进行包装，贸然修改了组件有可能会导致意想不到的后果，同时高阶组件函数也会变得不可信任。

高阶组件的命名我们一般叫 `with...`，举个例子，管控权限的组件我们可以命名为 `WithAuth`。

## 怎么做

还是以上面说的权限管控组件作为例子，实现起来很简单：

```tsx
import userStore from '@/store/userStore'

export default function WithAuth({ auth, ...props }) {
  return userStore.accessList.includes(auth) ? <>{props.children}</> : null
}

// 使用
<WithAuth auth="/some-auth">
  <SvgIcon
    icon="icon-xx"
    onClick={() => handle()}
  />
</WithAuth>
```

这个组件接收 `auth` 权限标志符来标识需要的权限，然后会在 store 里面的权限列表进行查找，判断有无权限，有权限则直接返回高阶组件的 slot，反之返回 `null` 不进行渲染。

很简单吧？这就是高阶组件最基础的应用。

还有一个例子，我写的另外一个高阶组件，用于对页面路由变化时进行曝光埋点：

```tsx
import { useLocation } from 'react-router-dom'

const WithTrack = (props) => {
  const location = useLocation()
  // 类似 afterEach 的功能
  useEffect(() => {
    if (Object.keys(trackMap).includes(location.pathname)) {
      track('page_expo', {
        page_name: trackMap[location.pathname]
      })
    }
  }, [location])
  return <>{ props.children }</>
}

// 使用
<WithTrack>
  <Page />
</WithTrack>
```

这个高阶组件通过 `useLocation` API 获取到当前页面的 `pathname`，然后通过 `useEffect` 对 `location` 进行监听，当 `location` 发生变化时会自动执行埋点逻辑。

这样封装的好处是，在这个高阶组件下方包裹的组件都能实现埋点的功能，而不用将埋点逻辑分布在各个路由的页面组件上。