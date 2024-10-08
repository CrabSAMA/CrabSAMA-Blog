---
title: 使用 nginx 实现反向代理
date: 2022-05-27 17:12:22 +08:00
category:
  - 解决方案
tag:
  - nginx
  - 计算机网络
---

## 背景

在日常开发中，一般 `Vue` 有两种方式解决跨域问题，一是使用 `Vue dev server` 中的 `proxyTable` 选项，搭建本地的反向代理服务器，解决跨域；二是与后端小伙伴沟通，让其允许跨域。

但是这是在开发过程中，如果后端小伙伴不想开放跨域，然而我们确实是前后端分离部署会触发到同源策略的话，这下就需要我们搭建基于服务器上的反向代理。

在此之前，我们需要先搞明白一个概念，跨域安全策略是浏览器的一种安全策略，它会将不属于同一个源下的请求 block 掉，其实可以理解成，请求已经发送出去并且服务器已经做出响应，只是被浏览器这个中间人拦截下来了，因为它觉得这是不安全的请求。

既然知道了这是浏览器的一种策略，那么在之前疑惑的一个问题也顺理成章地得到回答了：**为什么使用** **`postman`** **等工具请求接口不会触发跨域？**很明显，因为这些工具不是浏览器环境，只有在浏览器环境下才会触发跨域，服务器与服务器之间请求是不会触发跨域的。

现在流行的 `html` 服务器有 `apache`、`nginx` 等，这次就以 `nginx` 为例，说明一下如何搭建反向代理，可以解决跨域问题、由于 `chrome` 更新后安全策略提高导致的 same-site: Lax 问题等。

## 实操

我们需要找到 `nginx` 的安装目录，进入其 `conf` 文件夹，打开 `nginx.conf` 配置文件。

找到 `location / { … }` 这一行，这里是代理默认请求到 `index.html` ，很符合 `Vue` 打包出来的 `SPA` 项目逻辑（一切请求指向 `index.html`，剩下路由等问题由 `Vue` 进行处理）。那么我们想要做的是，将 api 请求重定向到后端的服务器，因此这个代理是应该在最上层的，所以我们需要在刚刚的那一行上面，添加这样的配置：

```nginx
location /api {
   proxy_pass http://xxx:8080;  #node api server 即需要代理的IP地址
}
```

这里的配置意思是，将请求到 `localhost/api/…` 的所有请求，转发到 `proxy_pass` 这个地址去，并且由 `nginx` 获取到响应后的结果进行返回。在做完这个之后，其实反向代理已经搭建完成了。还有其他一系列的一些其他配置，可以给请求头 / 响应头添加一些便于交流的属性，这个可以在 `nginx` 的配置文档中看到，此处就不做描述，有兴趣可以了解一下。

前端在搭建完成后，还需要将原本项目中的绝对地址的请求（eg: http://xxx:8080/api/login） 转换为相对地址的请求（即 `/api/login`，请求到 `localhost/api/login`），这样 `nginx` 就会成功代理到我们的请求并转发到后端服务器。