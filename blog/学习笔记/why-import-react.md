---
title: 为什么需要 import React
date: 2024-12-15 15:30:42 +08:00
category:
  - 学习笔记
tag:
  - React
---

# 为什么需要 import React

在 vscode 里面使用 snippet 时，`rfce` 是 react function component export 的快捷命令，在使用这个 snippet 时，我看到和 react 相关的 snippet 都会在最上方有一行 `import React from 'react'`，但其实这一行删掉了也能正常运行，不删掉每次 typescript 都会报 `unused import`，有点烦人。

去了解了一下，在 react 17 之前 react 解析 JSX 的方式都是将 JSX 转换成 `React.createElement`，在 React 17 之后采取了新的 JSX 解析方式，新的 JSX 转换方式不再依赖于 `React.createElement`，而是通过编译器自动引入必要的代码。这意味着你可以在不显式导入 `React` 的情况下使用 JSX。但其实本质上 import 语句还是需要的，只是换成了编译器帮你将这一行代码补上去。

这个其实跟 Vue 解析 JSX 的方式差不多，在 Vue 2 中的 JSX 解析也需要显式地引入 `h` / `createElement`，在后面的解析器逻辑中就将这些引入放到了编译器中处理，优化了用户体验。
