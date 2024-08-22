---
title: Vue Expose 原理
date: 2024-05-07 19:46:36 +08:00
category:
  - 学习笔记
tag:
  - Vue
---

# Vue Expose 原理

## 背景

在 Vue 中，我们经常会用到 $refs 去取组件的实例引用，同时去调用实例上的一些方法与访问一些属性。在 Vue2 中，默认所有的方法与属性都是可以直接被访问到的；而在 Vue3 中，多了一个 expose 的概念。

在使用选项式 API 或者没有使用 setup 语法的情况下，被引用的组件实例与该组件的 this 完全一致，可以访问到所有的方法和属性。但在使用了 `<script setup>` 语法的情况下，父组件无法访问到子组件内部的任何东西，除非通过 expose 显式暴露。

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b,
})
</script>
```

## 问题

在官方文档中，有写到一句话：

> `expose` 仅影响用户定义的属性——它不会过滤掉内置的组件实例属性。

看到这句话之后，我有点疑惑，这个 expose 的功能是怎么实现的呢？

将这个问题拆开，其实要实现的效果就是：如何能够让一个对象的某些属性可以被访问，其余属性无法被访问？

## 思路

leader 给过我们一个想问题的方法，就是先思考下如果自己是开发者，实现这种效果要怎么做。

在我看来，这个需求我可以使用 es6 的 proxy 功能实现，拦截指定对象的 get 操作，通过传入的 expose 数组去比对，在 expose 里面的就返回，不在的话就不作处理。在想完这个思路之后，我迫不及待地想去看下源码，对一下标准答案。

## 看源码

在仓库中我直接搜索 expose 关键词，结果不多，直接就找到了 `/package/runtime-core/src/component.ts` 里面，有一个 `getExposeProxy` 方法。

```typescript
export function getExposeProxy(instance: ComponentInternalInstance) {
  if (instance.exposed) {
    return (
      instance.exposeProxy ||
      (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key: string) {
          if (key in target) {
            return target[key]
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance)
          }
        },
        has(target, key: string) {
          return key in target || key in publicPropertiesMap
        },
      }))
    )
  }
}
```

这下答案直接就在眼前了，这个方法判断了组件配置中有没有 `exposed` 这个属性，如果有的话，返回一个处理过的 Proxy 对象，这个 Proxy 对象对 get 和 has 操作符进行了代理，只针对暴露出去的值和公共变量 map 的值做返回，其他情况一律不返回，简单高效地实现了 expose 想要的效果。

## 收获

本来我的想法是要针对所有的值都做校验，但没想到 Vue 的实现这么地简单高效，学习源码实现就是学习它的一些编程思路，理解后并化为己用，后续有这种类似的需求也可以想到用这种方法去解决。
