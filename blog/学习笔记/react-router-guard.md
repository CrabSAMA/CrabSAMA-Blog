---
title: react中实现路由守卫
date: 2024-08-01 16:57:45 +08:00
category:
  - 学习笔记
tag:
  - React
---

# react 中实现路由守卫

在 Vue Router 中我们经常使用其提供的路由守卫功能来实现一些业务逻辑，比如在进入路由之前进行鉴权，在进入路由后进行页面曝光埋点等。而在使用 React Router 时，发现其并没有开箱即用的路由守卫功能，因此去搜了一些材料，使用 react 的思想来间接实现了路由守卫的功能。

## beforeEach

通过一个路由的顶层 path 设置成权限管控组件实现：

```tsx
// router.tsx
const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <GuardRoute />,
    children: [],
  },
])
```

```tsx
// GuardRoute.tsx
function GuardRoute() {
  const navigate = useNavigate()
  const routerLocation = useLocation()

  const goPage = () => {
    if (routerLocation.pathname === '/') {
      if (userStore.showMenuList?.length) {
        navigate(userStore.showMenuList[0], {
          replace: true,
        })
      } else {
        navigate('/noPermission')
      }
    } else if (!userStore.accessList.includes(routerLocation.pathname)) {
      navigate('/noPermission')
    }
  }

  useMount(async () => {
    const token = getToken()
    if (!token) {
      // 跳转登录
      Toast.show('请登录')
      await logout()
      const { data, ret }: { data: string; ret: number } = await login()
      if (ret === 0) {
        location.href = data
      }
    } else {
      if (!userStore?.hasGetMenu) {
        const res = await getMenu()
        if (res?.ret === 0) {
          userStore.setUser(res.data.user, res.data.is_admin)
          userStore.setMenu(res.data.features)
          goPage()
        }
      } else {
        goPage()
      }
    }
  })
  return userStore?.hasGetMenu ? <Outlet></Outlet> : <Loading />
}
```

在这里我们使用了一个组件作为根目录的 layout 组件，在它的初始化过程中，进行一些鉴权的逻辑，如果判断到没有 token 或者没有获取到用户权限，则跳转到无权限的路由，否则跳转到指定的页面。这个组件的实现有点类似高阶组件，它并没有自己的状态，而是实现了一些逻辑，并直接将子组件渲染出来。和高阶组件不同的点是，高阶组件是包裹一个普通组件，并将其返回，这里是直接将其子组件渲染出来即可。

## afterEach

我们一般使用 afterEach 实现一些跳转后的逻辑，afterEach 使用 HOC 来模拟实现：

```tsx
import { useLocation } from 'react-router-dom'
const WithTrack = (props) => {
  const location = useLocation()
  // 类似 afterEach 的功能
  useEffect(() => {
    if (Object.keys(trackMap).includes(location.pathname)) {
      track('page_expo', {
        page_name: trackMap[location.pathname],
      })
    }
  }, [location])
  return <>{props.children}</>
}
```

在这里面我们利用了 react-router 提供的 `useLocation` hook，同时使用 `useEffect` hook 对 `location` 进行一个监听，在它发生变更的时候，执行一些业务逻辑，此处执行的是埋点的相关逻辑。

需要注意的是，这里使用了 `useEffect`，会在开发环境中执行两次，因此我的埋点上报逻辑会执行两次，目前这个是可以接受的，上线后不影响生产环境正常数据上报即可。如果有这方面顾虑的可能需要在开发环境中禁止严格模式。

## 总结

在这个事情上，也发现了 react 的开发思想与 vue 是不一样的，react 有许多东西都并没有提供开箱即用的实现，而是需要自己去根据自己的业务逻辑，使用 hoc 或者 hook 去自行实现。
