---
title: 同源策略
date: 2022-05-27 18:20:15 +08:00
category:
  - 学习笔记
tag:
  - 浏览器
  - CORS
  - 面试题
---

## 一个源的定义

如果两个页面的**协议，端口**（如果有指定）**和域名**的相同，则两个页面具有相同的源。

举个例子：

下表给出了相对http://a.xyz.com/dir/page.html同源检测的示例:

| **URL**                                 | **结果** | **原因**                     |
| --------------------------------------- | -------- | ---------------------------- |
| http://a.xyz.com/dir2/other.html        | 成功     |                              |
| http://a.xyz.com/dir/inner/another.html | 成功     |                              |
| https://a.xyz.com/secure.html           | 失败     | 不同协议 ( https 和 http )   |
| http://a.xyz.com:81/dir/etc.html        | 失败     | 不同端口 ( 81 和 80)         |
| http://a.opq.com/dir/other.html         | 失败     | 不同域名 ( xyz 和 opq)       |
| http://www.xyz.com/dir/other.html       | 失败     | 不同域名（www.xyz 和 a.xyz） |

（.com 是一级域名，剩下的部分是二级域名）

同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

## 不受同源策略限制的

1. 页面中的**链接，重定向以及表单提交**是不会受到同源策略限制的。

2. **跨域资源的引入**是可以的。但是 js**不能读写加载的内容**。如嵌入到页面中的`<script src="..."></script>`，`<img>`，`<link>`，`<iframe>`等。
