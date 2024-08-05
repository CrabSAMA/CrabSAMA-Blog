---
title: webpack 升级踩坑
date: 2023-03-31 15:23:12
category:
  - 解决方案
tag:
  - webpack
---

## 背景

由于项目中 lock 文件被删，重新安装依赖后发现许多依赖都自动升级到最新版本了，因此想着干脆对项目中的依赖进行一次统一升级。在升级了 `webpack` 后，顺便将一些 loader 也进行升级，升级后出现了一系列的问题。

## `mini-css-extract-plugin` 导致 `url()` 引入报错

今天在 1.3.9 版本时，发现 `publicPath` 设成 `'../'` 时，引入的字体文件链接变成了这样：`src:url([file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf](file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf))`

这里列出的堆栈涉及了 `css-loader`、`less-loader`，查看 `webpack` 配置中可以猜测是进入到了 less 的 rule 中，这里面用到的除了上面两个 loader，还有就是 `MiniCssExtractPlugin.loader` 了，通过比对旧版本和新版本，最终定位到就是 `MiniCssExtractPlugin.loader` 导致的问题。同时查看 `mini-css-extract-plugin` 的 changelog 发现，里面确实提到了在 2.0 版本解决了许多 `publicPath ` 导致的 `url()` 解析问题。

在项目中建议升到 1.6.2 以上版本，有条件可以升到 ^2，其中修复了许多由于 `publicPath` 导致的问题，这个问题有可能会导致 `url()` 引入方式的样式出问题。

## vue-loader 与 vue2 的兼容问题

在升级了 vue-loader 到最新后报错：

```
Module build failed (from ./node_modules/vue-loader/dist/index.js):
TypeError: Cannot read properties of undefined (reading 'styles')
    at Object.loader (/Users/daniel.bachnov/docker/qhs3-admin/frontend/node_modules/vue-loader/dist/index.js:70:34)
 @ ./main.js 1:0-29 14:8-11
```

> [https://stackoverflow.com/questions/74115950/vue-loader-17-0-0-webpack-5-74-0-module-build-failed](https://stackoverflow.com/questions/74115950/vue-loader-17-0-0-webpack-5-74-0-module-build-failed)

原因是 vue-loader 16+ 与 vue 2.x 不适配，因此在 vue2.x 版本里我们需要使用 vue-loader 15.x 版本。

## devServer 环境样式丢失

问题是在 devServer 环境样式丢失，也没有报错，只是样式没有写入到 inline 中。

因为在 dev 环境中，样式是由 `vue-style-loader` 处理的，这个包是依赖 `style-loader` 的，查看项目中依赖版本，发现 `style-loader` 版本过低，在升级 webpack 时，需要将许多 loader 和 plugin 统一进行配套升级，很坑的点是在遇到此类不匹配的情况时，有时并不会报错，所以排查成本很高，只能去和旧版本对比，这就是经验之谈。
