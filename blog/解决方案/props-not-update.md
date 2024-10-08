---
title: Props(v-model)变更不生效问题
date: 2023-08-15 11:14:30 +08:00
category:
  - 解决方案
tag:
  - Vue
  - 踩坑
---

## 现象

在我们写 Vue 组件时，经常会遇到自定义 v-model 或 prop.sync 的需求。一般来说，我们有两种方法实现这种需求：

1. 组件内部定义一个变量，使用两个 `watch` 分别监听 props 和 内部变量的变更，前者初始化内部变量，后者在内部变量变更时 `emit` 一个 `input `/ `update:prop` 事件使外部变量同步变更。
2. 组件内部使用一个 `computed` 变量，定义它的 `get` 方法为获取 props 值，set 方法为 `emit` 事件。

在很久一段时间，我都是使用方法一实现的，但在了解到可变`computed`值这个属性后，我开始逐渐使用方法二来实现这个需求了。但在最近的一个 bug 中，遇到了 `emit` 后属性没有更新的问题。

## 原因

原因也很简单，父组件并没有将这个 prop 传入到组件内部，因此方法二 `emit` 后并没有令外部变量成功更新，`computed` 也自然 `get` 不到对应的值了。但这个情况比较隐蔽，加上之前印象中不传 prop 也可以实现，我就开始思考为什么会发生这种情况。

在之前我一般使用方法一来实现这个需求，方法一的一个特点是它在组件内部定义了一个内部变量，外部变量仅做一个初始化与同步的作用，我们实际操作的还是内部变量的变更，因此在不传入外部变量时，并不会影响内部变量的正常变更，在传入外部变量时也会同步进行更新。但在方法二中，没有了内部变量，`computed` 属性完全依赖外部变量的值，在父组件不传入 prop 的情况很自然就无法正常工作了。

经过了分析后，可以了解到两种实现方法之间的利弊，在后续的开发中可以按需选择更好的方案来实现此类需求。
