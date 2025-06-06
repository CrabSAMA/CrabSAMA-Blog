---
title: Vue3 中无法获取组件的事件监听函数
date: 2025-06-06 20:43:32 +08:00
category:
  - 解决方案
tag:
  - Vue
---

## 背景

在 Vue 3 中，有一个需求，想要通过判断用户是否传入事件处理函数，如果传入事件处理函数证明点击事件需要被处理，来决定是否给元素添加 pointer 的样式，因此我们需要有一种方式能访问到传入的事件处理函数。

## 思路

在看 Vue 源码的时候我们知道其实本质上事件处理函数也是挂载在 `props` 上的，因此我尝试直接通过 `$props` 去获取，结果发现并无法获取，结合之前看的源码，`props` 本质上也是一个 Proxy，在这个 Proxy `get` 的时候会去判断这个属性是否显式地在 `props` 上定义，如果是的话才会返回，否则就不返回，直观的表现就是无法访问到这个属性。很明显我们是通过 `defineEmits` 去定义的事件，因此 `props` 这个 Proxy `get` 的时候并不会将事件处理函数返回。

在 Vue 2 中我们可以通过 `$listener` 去访问到这个事件处理函数

> ### [vm.$listeners](https://v2.cn.vuejs.org/v2/api/#vm-listeners)
>
> > 2.4.0 新增
>
> - **类型**：`{ [key: string]: Function | Array<Function> }`
>
> - **只读**
>
> - **详细**：
>
>   包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件——在创建更高层次的组件时非常有用。

但目前看在 Vue 3 中我们没有途径去获取到组件传入的事件处理函数，看官方的 rfc 讨论似乎也没有结果。

https://github.com/vuejs/rfcs/discussions/397

Vue 源码关于 props Proxy 取值相关的代码：

https://github.com/vuejs/core/blob/cdffaf6b9efce2c52635714e8e2d7480737c6b50/packages/runtime-core/src/compat/props.ts#L25-L28

## 解决方法

目前暂时的解法是在 `props` 中显式地去定义一个 `onXXX` 的 prop，这不会影响 emit 定义的事件，也不会影响子组件中使用 `@xxx` 去绑定事件处理函数，我们要通过这种 hack 的方式去让 Vue 能在 `$props` 中返回对应的事件处理函数。
