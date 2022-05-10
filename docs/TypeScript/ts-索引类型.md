---
title: TypeScript——索引类型
sidebar: 'auto'
categories:
 - TypeScript

---

> TypeScript 高级类型[官方文档](https://www.tslang.cn/docs/handbook/advanced-types.html)

# 索引类型（Index types）

在项目中时常有通过传入对象 `key` 值获取对象中其中一个值的需求，现在有一个想法，想通过动态传入的 `key` 值获取到对应的类型。在 `TypeScript` 中想要取得一个 `interface` 其中的一个属性，可以使用这种写法：

```typescript
const something: Interface['key'] = interfaceObj['key']
```

上面的代码就是取 `Interface` 中名为 `key` 的类型。

在方法中我们经常是这样写：

```javascript
function getProperty(obj, key) {
    return obj[key]; // 动态地取某个对象中的一个属性
}
```

而在 `typescript` 中要怎样写呢？下面是一个例子：

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]; // obj[key] is of type T[K]
}
```

这里取到的类型就是 `T['K']`，正合我意！

## 索引访问操作符

`K` 指代一个动态类型

在这里，类型语法反映了表达式语法。 这意味着 `person['name']`具有类型 `Person['name']` — 在我们的例子里则为 `string`类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 `T[K]`，这正是它的强大所在。 你只要确保类型变量 `K extends keyof T`就可以了。