---
title: URL
date: 2020-07-09T15:01:49.0000000+08:00
lastUpdated: true
categories:
 - Node.js
---

**官方文档：**<http://nodejs.cn/api/url.html>

完整的`URL`的各组成部分：

![image-20220614202420009](./img/image-20220614202420009.png)

## parse方法

我们可以使用`.parse`方法来将一个`URL`字符串转换为`URL`对象，示例如下。

```js
url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
/* =>
{ protocol: 'http:',
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/
```

`.parse`方法还支持第二个和第三个布尔类型可选参数。
第二个参数等于`true`时，该方法返回的`URL`对象中，`query`字段不再是一个字符串，而是一个经过`querystring`模块转换后的参数对象。
第三个参数等于`true`时，该方法可以正确解析不带协议头的URL，例如www.example.com/foo/bar。

## format方法

`format`方法允许将一个`URL`对象转换为`URL`字符串，示例如下。

```js
url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/
```

## resolve方法

`.resolve`方法可以用于拼接`URL`，示例如下。

```js
url.resolve('http://www.example.com/foo/bar', '../baz')
/* =>
http://www.example.com/baz
*/
```
