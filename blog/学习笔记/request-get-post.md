---
title: Get 和 Post 请求的区别
date: 2022-05-27 18:48:34 +08:00
category:
  - 学习笔记
tag:
  - HTTP
  - 计算机网络
---

## Get 请求和 Post 请求的区别

- 在浏览器进行回退操作时，`get` 请求是无害的，而 `post` 请求则会重新请求一次

- `get` 请求参数是连接在 `url` 后面的，而 `post` 请求参数是存放在 `request body` 内的

- `get` 请求因为浏览器对 `url` 长度有限制（不同浏览器长度限制不一样），所以对传参数量有限制；而 `post` 请求因为参数存放在 request body 内，所以参数数量没有限制。（事实上，`get` 请求也能在 `request body` 携带参数，只是不符合规定，有的浏览器能够获取到数据，而有的不能）

- 因为 `get` 请求参数暴露在 `url` 上，所以安全方面 `post` 比 `get` 更加安全

- `get` 请求浏览器会主动 `cache`，除非主动设置否则 `post` 并不会

- `get` 请求只能进行 `url` 编码，而 `post` 请求可以支持多种编码方式

- `get` 请求产生一个 `tcp` 数据包，`post` 请求产生两个 `tcp` 数据包

  浏览器在发送 `get` 请求时会将 `header` 和 `data` 一起发送给服务器，服务器返回 `200` 状态码；而在发送 `post` 请求时，会先将 `header` 发送给服务器，服务器返回 `100`，之后再将 `data` 发送给服务器，服务器返回 `200 OK`。
