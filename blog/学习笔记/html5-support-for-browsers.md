---
title: HTML5对浏览器的支持
date: 2018-12-13 10:59:58
category:
  - 学习笔记
tag:
  - HTML
---

## **Internet Explorer 的问题**

上述方案可用于所有新的 `HTML5` 元素，但是：
**注意：**Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。
幸运的是，Sjoerd Visscher 创造了 "HTML5 Enabling JavaScript",**"the shiv"**：

```html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

以上代码是一段注释，但是 IE9 的早期版本会读取它（并理解它）。

## **完整的 Shiv 解决方案**

**实例**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Styling HTML5</title>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body>
<h1>My First Article</h1>
<article>
London is the capital city of England. 
It is the most populous city in the United Kingdom, 
with a metropolitan area of over 13 million inhabitants.
</article>
</body>
</html>
```

引用 `shiv` 代码的链接必须位于 `<head>` 元素中，因为 Internet Explorer 需要在读取之前认识所有新元素。
