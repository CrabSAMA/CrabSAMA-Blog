---
title: Set和Get
category:
  - 学习笔记
tag:
  - JavaScript
---

对象的 `set get` 是es5的中对象的特性，使用示例：

在初始化对象的时候这样使用

```js
let b = {
    get x() {
        return x;
    },
    set x(val) {
        x = val + 2;
    }
};
b.x = 6;  // b.x 被赋值，同时进入set函数对值进行处理
console.log(b.x);  // b.x = 8
```

