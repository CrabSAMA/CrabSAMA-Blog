---
title: webpack规则探索
date: 2023-03-17 17:57:52 +08:00
category:
  - 学习笔记
tag:
  - webpack
  - 前端工程化
---

## 背景

有一天发现线上打包平台报代码使用了 esnext 语法，因此感觉可能是 babel 没配置好，在探索 babel 的过程中又重新梳理了一次 webpack 相关的规则。

## loader

loader 的配置中如果 exclude、include、test 都出现在同一个 loader 的配置中时，优先级是 exclude > include > test。

loader 本质上是一个数组，里面有不同的 rules 匹配规则。接受到一个文件时，会**从上到下**找到匹配的 rules，当匹配到对应的规则时会按顺序将代码传输到 use 下面的 loader 中，此时统一规则的 loader 则是按照**从下到上**的顺序执行的。

举个例子：

```js
{
  test: /\.css$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'postcss-loader'
  ]
}
```

在这个配置下，css 文件会先传入到 `postcss-loader`，处理完成后交给`css-loader`，最后交到`vue-style-loader`中处理完成。

### vue-loader

> https://vue-loader.vuejs.org/zh/

因为是 vue 开发者的缘故，在 webpack 中必须用到 vue-loader。这次也顺便了解了一下 vue-loader 是怎么将 sfc 分块并交给对应 loader 处理的逻辑。

`.vue` 文件是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 `.vue` 文件包含三种类型的顶级语言块 `<tempalte>`、`<script>`、`<style>`。vue-loader 会将上述的语言块分别解析，并且根据对应的 `lang` 属性判断出是什么类型，然后交到对应规则下的 loader 进行处理。同时 vue-loader 也支持自定义语言块，也是通过 `lang` 属性自己配置对应的 loader 来处理。

## plugin

plugins 一般是事件驱动类型的，自己会去绑定对应的事件，在接收到对应事件时即触发，因此不需太关注 plugin 的执行顺序。
