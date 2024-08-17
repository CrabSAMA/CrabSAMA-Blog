---
title: 正则表达式运行多次结果不一样
date: 2023-10-19 14:18:20 +08:00
category:
  - 解决方案
tag:
  - 正则表达式
  - JavaScript
  - 踩坑
---

## 背景

```typescript
// 用于匹配是否被 i18n 块包裹
const i18nKeyPattern =
  /(?:i18n(?:-\w+)?[ (\n]\s*(?:key)?path=|v-t=['"`{]|(?:this\.|\$|i18n\.|[^\w\d])(?:t|tc|te)\()\s*['"`](.*?)['"`]/gm
const str = "$t('当有效期结束时间到了，是否直接下线？')"

// Array(2) ["$t('当有效期结束时间到了，是否直接下线？'", "当有效期结束时间到了，是否直接下线？"]
i18nKeyPattern.exec(value)
// null
i18nKeyPattern.exec(value)

// true
i18nKeyPattern.test(value)
// false
i18nKeyPattern.test(value)
```

在使用正则表达式判断时，会发现调用 `exec` 方法和 `test` 方法，每一次的调用结果并不一样。

## 原因

在 MDN 文档上，我们可以看到一个点：

> `exec()`：
>
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
>
> 在设置了 [`global`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) 或 [`sticky`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 标志位的情况下（如 `/foo/g` 或 `/foo/y`），JavaScript [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象是*有状态*的。它们会将上次成功匹配后的位置记录在 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配）
>
> `test()`：
>
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
>
> 如果正则表达式设置了全局标志，`test()` 的执行会改变正则表达式 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)属性。连续的执行`test()`方法，后续的执行将会从 lastIndex 处开始匹配字符串，([`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 同样改变正则本身的 `lastIndex 属性值`).

关键点其实在于，如果使用正则表达式时设置了全局标识，同时复用**同一个正则表达式对象**对多个字符串进行匹配时，就会出现这个问题。关键点在于 `lastIndex` 属性其实是正则表达式对象里面的一个属性。

## 解决方法

1. 使用 `String.prototype.match()` 或 `String.prototype.matchAll()` 方法代替

2. 重写一个方法，在每次匹配完成后手动地将 `lastIndex` 属性重置为 0

   ```typescript
   // 正则无记忆方法
   RegExp.prototype.TestNoRecord = function (str) {
     var ret = this.test(str)
     this.lastIndex = 0
     return ret
   }
   RegExp.prototype.ExecNoRecord = function (str) {
     var ret = this.exec(str)
     this.lastIndex = 0
     return ret
   }
   ```
