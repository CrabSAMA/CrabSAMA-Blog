---
title: 聊聊unplugin
date: 2022-08-03 10:38:40 +08:00
category:
  - 学习笔记
tag:
  - 前端工程化
  - rollup
  - vite
  - webpack
---

> 先上一个 github 地址 https://github.com/unjs/unplugin

## 前言

前端工具链生态是日新月异，很多人 `webpack` 都还没玩熟悉呢，新的 `vite` 都要出到 3.0 了，再说 `vite` 是基于 `rollup` 和 `esbuild` 的吧，这些个工具都各有优劣，都是要学习的东西。但在我看来，这些工具都有一个共同的特点：都是**打包工具**。打包工具需要做的事情就很简单，接收输入的文件，输出成我们想要的东西，这其中还包含了可以通过不同的插件实现对输入文件的处理，以实现混淆、注入等功能；同时打包工具大多都提供了许多**钩子**（`hook`），贯穿整个打包流程，也方便了我们对打包过程的关注和额外处理。百变不离其宗，`webpack` 有 `loader` 和 `plugin`，`vite` 扩展了设计出色的 `Rollup` 接口，还带了一些 `vite` 独特的配置项，因此有人就有了写一次代码，适配多个 `bundler` 的想法，`unplugin` 就是这样一个存在。

## `unplugin`

由于 `contributors` 大多是 `vite` 团队出身，因此 `unplugin` 也是继承了 `rollup` 的 `plugin api`作为基础，通过在它提供的 `hook` 上实现具体的代码逻辑，`unplugin` 会帮你做一层转换以适配各个 `bundler`，本质上我理解还是一个**适配器模式**的思想。

来个官方的 README 中的表格，具体支持的 `hook` 如下。

| Hook                                                        | Rollup | Vite | Webpack 4 | Webpack 5 | esbuild |
| ----------------------------------------------------------- | ------ | ---- | --------- | --------- | ------- |
| [`buildStart`](https://rollupjs.org/guide/en/#buildstart)   | ✅     | ✅   | ✅        | ✅        | ✅      |
| [`buildEnd`](https://rollupjs.org/guide/en/#buildend)       | ✅     | ✅   | ✅        | ✅        | ✅      |
| `transformInclude`1                                         | ✅     | ✅   | ✅        | ✅        | ✅      |
| [`transform`](https://rollupjs.org/guide/en/#transformers)  | ✅     | ✅   | ✅        | ✅        | ✅ 3    |
| [`enforce`](https://rollupjs.org/guide/en/#enforce)         | ❌ 2   | ✅   | ✅        | ✅        | ❌ 2    |
| [`resolveId`](https://rollupjs.org/guide/en/#resolveid)     | ✅     | ✅   | ✅        | ✅        | ✅      |
| [`load`](https://rollupjs.org/guide/en/#load)               | ✅     | ✅   | ✅        | ✅        | ✅ 3    |
| [`watchChange`](https://rollupjs.org/guide/en/#watchchange) | ✅     | ✅   | ✅        | ✅        | ✅      |

基于这么一个框架，方便了许多人去写 `bundler` 的二次开发，有许多新的插件基于 `unplugin` 实现，我觉得这是一个十分方便的东西，并且也没有特别复杂，所以可以来看看它的具体实现。

## 具体实现

`unplugin` 提供了一个 `createUnplugin` 的工厂函数，这个工厂函数接收一个入参为 `options` 的方法：

```typescript
export function createUnplugin<UserOptions = {}>(
  factory: UnpluginFactory<UserOptions>
): UnpluginInstance<UserOptions> {
  return {
    get esbuild() {
      return getEsbuildPlugin(factory)
    },
    get rollup() {
      return getRollupPlugin(factory)
    },
    get vite() {
      return getVitePlugin(factory)
    },
    get webpack() {
      return getWebpackPlugin(factory)
    },
    get raw() {
      return factory
    },
  }
}
```

我们以熟悉的 `vite` 为例，定位到 `getVitePlugin` 函数内，发现这个函数实现的功能很简单，就只是将 `factory` 函数返回的东西传给 `toRollupPlugin`，而 `toRollupPlugin` 也仅仅是将 `transform` 这个 `hook` 调用了一遍，同时合并了一些配置，这其实也很容易理解，因为本质上 `vite` 是对 `rollup` 的上层封装，而正好 `unplugin` 也是基于 `rollup` 的 `api` 往外提供公共的 `hook`，因此这其中不用做什么转换，直接调用就好了。

那这样说的话，感觉 `webpack` 处理会比较复杂，可以接下来看看 `webpack` 的处理方案。
