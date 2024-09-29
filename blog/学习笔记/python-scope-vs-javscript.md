---
title: Python作用域与Javascript对比
date: 2024-08-01 16:31:27 +08:00
category:
  - 学习笔记
tag:
  - Python
  - JavaScript
---

# Python 作用域与 Javascript 对比

![img](./img/1418490-20180906153626089-1835444372.png)

Python 中的也存在作用域的概念，但与 JavaScript 不同，它只存在闭包函数作用域。

> Python 中只有模块（module），类（class）以及函数（def、lambda）才会引入新的作用域，其它的代码块（如 if/elif/else/、try/except、for/while 等）是不会引入新的作用域的，也就是说这些语句内定义的变量，外部也可以访问，如下代码：

```python
if __name__=='__main__':
    lst = [1, 2, 3]
    for i in lst:
        print(i)
    print(i)
```

这段代码就是在 for 循环中定义了新变量 i，在 python 中不会引入新的作用域，因此在 for 循环外部也可以访问到 i 这个变量。

而在 JavaScript 中，es6 新引入的块级作用域概念，使得在 for 循环这个大括号包裹的块中存在一个新的块级作用域，因此这段代码在 JavaScript 中，外部就无法访问到 i 这个内部定义的变量。
