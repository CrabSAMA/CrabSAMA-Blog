---
title: TypeScript Enum 导致 treeshaking 失败
date: 2025-08-12 16:28:28 +08:00
category:
  - 学习笔记
tag:
  - TypeScript
  - 踩坑
---

typescript enum 会被编译为 IIFE，因此无法被正常的 treeshaking 掉，如果有 treeshaking 的需求，建议不要使用 typescript 中的 enum

https://juejin.cn/post/7317704485056348211

https://stackoverflow.com/questions/68720866/why-does-webpack-5-include-my-unused-typescript-enum-exports-even-when-tree-sha?newreg=31a9c50b5b8b4fa399d6a8fa847ccd9c

解决方法无非就是使用对象去当 enum 使用。

```typescript
enum EnumType {
  A = 'A',
}

// 编译为 module-b.js
var EnumType
;(function (EnumType) {
  EnumType['A'] = 'A'
})(EnumType)

export { EnumType }
```

默认情况下，typescript 编译器会将 enum 编译为上述代码，对于 rollup 等 bundler 来说，`EnumType` 这个值有被通过 IIFE 调用，自然就存在了副作用，不能进行 treeshaking，但这就和我们想要的不符了。

这是修改后的代码：

```typescript
export const Business = {
  UD: 'ud',
  DE: 'de',
  UNKNOWN: '',
} as const

// 同名类型本质上也是可以的，但是由于 tslint 报错，我没有采用这种写法
export type Business = (typeof Business)[keyof typeof Business]
// 而是定义了另外一个变量作为类型，export 到外部去使用
export type BusinessEnum = (typeof Business)[keyof typeof Business]
```

通过这种方法改写之后，我们使用 `Business` 作为值去使用，`BusinessEnum` 作为类型去使用，在项目中可以实现 90% 左右的效果，唯一有点问题的就是这个类型在使用时要重新适配一下，但最重要的是，这种写法它终于支持 treeshaking 了！
