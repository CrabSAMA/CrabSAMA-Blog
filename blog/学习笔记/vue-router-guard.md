---
title: Vue Router 路由守卫探秘
date: 2025-03-18 15:55:50 +08:00
category:
  - 学习笔记
tag:
  - Vue
  - Vue Router
---

# Vue Router 路由守卫探秘

## hash 模式

hash 模式本质上就是对 history 模式的上层封装

```typescript
export function createWebHashHistory(base?: string): RouterHistory {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : ''
  // allow the user to provide a `#` in the middle: `/base/#/app`
  if (!base.includes('#')) base += '#'

  if (__DEV__ && !base.endsWith('#/') && !base.endsWith('#')) {
    warn(
      `A hash base must end with a "#":\n"${base}" should be "${base.replace(
        /#.*$/,
        '#'
      )}".`
    )
  }
  return createWebHistory(base)
}
```

只是对 base 进行了一些处理之后去调用的 `createWebHistory`。

- 初次进入页面

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1333)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1333)
  对guards.reduce 的匿名回调 (router.ts:1332)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  pushWithRedirect (router.ts:730) --- 初始化的时候会将当前路径 push 到 history 中
  push (router.ts:625)
  对push(routerHistory.location).catch 的匿名回调 (router.ts:1289)
  use (runtime-core.esm-bundler.js:3863) --- Vue.use(router)
  [全局代码: "http://localhost:5173/src/main.ts"] (main.ts:30)
  ```

- 更改地址栏 url 跳转

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1335)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1335)
  对guards.reduce 的匿名回调 (router.ts:1334)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  对routerHistory.listen 的匿名回调 (router.ts:1052) --- 此处执行 listener 的逻辑，调用 navigate 函数
  对listeners.forEach 的匿名回调 (html5.ts:100)
  对listeners.forEach 的匿名回调 (html5.ts:99)
  ```

  由于 hash 模式更改的是 `/#/` 后面的内容，对于浏览器来说更改 hash 后面的内容等于更改参数，不需要刷新页面，因此还会停留在当前页面。那具体的页面路由跳转就肯定是交由代码去实现的了。

  初始化的时候注册了一个 `removeHistoryListener`，更改地址栏 url 跳转时触发了这个 listener，因为此时属于离开一个页面跳转到下一个页面了。

  这个 listener 做的事情其实就是进行 navigate，即变更地址栏 url 的时候会执行 navigate 的逻辑。

- 编程式跳转

  编程式跳转就更简单了，直接调用了 navigate 的方法。

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1335)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1335)
  对guards.reduce 的匿名回调 (router.ts:1334)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  pushWithRedirect (router.ts:730)
  push (router.ts:625)
  navigate (RouterLink.ts:228) --- 此处直接调用了 navigate 的逻辑
  callWithErrorHandling (runtime-core.esm-bundler.js:199)
  callWithAsyncErrorHandling (runtime-core.esm-bundler.js:206)
  invoker (runtime-dom.esm-bundler.js:729)
  ```

## history 模式

- 初次进入页面

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1335)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1335)
  对guards.reduce 的匿名回调 (router.ts:1334)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  pushWithRedirect (router.ts:730)
  push (router.ts:625)
  对push(routerHistory.location).catch 的匿名回调 (router.ts:1291)
  use (runtime-core.esm-bundler.js:3863)
  [全局代码: "http://localhost:5173/src/main.ts"] (main.ts:30)
  ```

	对比了一下，和 hash 模式没有区别，都是利用了初始化时的那次 push 来触发的路由守卫。

- 更改地址栏 url 跳转

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1335)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1335)
  对guards.reduce 的匿名回调 (router.ts:1334)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  pushWithRedirect (router.ts:730)
  push (router.ts:625)
  对push(routerHistory.location).catch 的匿名回调 (router.ts:1291)
  use (runtime-core.esm-bundler.js:3863)
  [全局代码: "http://localhost:5173/src/main.ts"] (main.ts:30)
  ```

  这个和上面的初次进入页面其实就是同一种 case 了，在 history 模式下，更改地址栏 url 就等于刷新页面进入一个全新的页面，因此和上面的是同一种情况。

- 编程式跳转

  ```
  对router.beforeEach 的匿名回调 (router.ts:202)
  对runWithContext 的匿名回调 (navigationGuards.ts:181)
  (匿名函数) (navigationGuards.ts:129)
  对new Promise 的匿名回调 (navigationGuards.ts:180)
  (匿名函数) (navigationGuards.ts:138)
  runWithContext (runtime-core.esm-bundler.js:3996)
  runWithContext (router.ts:825)
  对promise.then 的匿名回调 (router.ts:1335)
  ---Promise.then---
  对promise.then 的匿名回调 (router.ts:1335)
  对guards.reduce 的匿名回调 (router.ts:1334)
  对runGuardQueue(guards).then 的匿名回调 (router.ts:881)
  ---Promise.then---
  对runGuardQueue(guards).then 的匿名回调 (router.ts:872)
  pushWithRedirect (router.ts:730)
  push (router.ts:625)
  navigate (RouterLink.ts:228)
  callWithErrorHandling (runtime-core.esm-bundler.js:199)
  callWithAsyncErrorHandling (runtime-core.esm-bundler.js:206)
  invoker (runtime-dom.esm-bundler.js:729)
  ```
  
  和上面 hash 模式一样。

## 总结

`navigate` -> `runGuardQueue` -> `Promise.then`

路由守卫的注册其实就是将函数放到一个数组中保存下来，触发的时机是调用 `navigate` 方法，在不同的 case 下所有涉及到变更路由的操作最终都是调用 `navigate` 方法，只是调用路线不一样而已。

路由守卫函数的注册都使用了 Promise 进行了封装，转成了微任务函数，然后使用 JavaScript 的事件循环机制，通过微任务进行 queue 的任务调度。在每次调用 `navigate` 方法的时候，按照指定的顺序（先全局，再组件）将守卫函数取出来，然后依次调度执行。在 `beforeEach` 相关的路由守卫中支持**重定向**和**取消路由**，这种情况下会抛出一个 reject 的 Promise 去处理。