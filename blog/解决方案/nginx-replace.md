---
title: 使用 nginx 实现内容替换
date: 2022-07-28 17:19:53
category:
  - 解决方案
tag:
  - nginx
---

## 背景

公司大前端提供的平台里看到了一个功能，在代码中写特定的链接，例如 `__REPLACE__`，在实际访问时会替换成指定内容，来实现 `CDN` 的功能。在看到这个功能后，对它具体是怎么实现的比较好奇，因此看看具体是怎么操作的。

## 实操

`nginx` 提供了 `sub_filter` 模块来实现重写 content 的功能。

我们需要找到 `nginx` 的安装目录，进入其 `conf` 文件夹，打开 `nginx.conf` 配置文件。

找到 `location / { … }` 这一行，这里是代理默认请求到 `index.html` ：

```nginx
location / {
    proxy_set_header Accept-Encoding "";
    sub_filter '__NGINX_REPLACE__' 'Replace Content';
    sub_filter_types text/html;
    sub_filter_once off;
    root html;
    index index.html index.htm;
}
```

来解释一下具体的配置内容：

`sub_filter '__NGINX_REPLACE__' 'Replace Content';`   —— 这个实际将 `index.html` 中 `__NGINX_REPLACE__` 替换成 `Replace Content` 。

注意只有在新版本 `nginx` 中才支持多 `sub_filter`。

`sub_filter_types *;`  -- 只对 `text/html` 响应类型做`sub_filter` 指定的替换。

`sub_filter_once off;` -- `sub_filter` 会执行**多次**而不是一次. 效果类似于 `java` 中的 `string.replaceAll` 而不是 `replace`。

`proxy_set_header Accept-Encoding "";`  -- 设置这个得原因是告诉后端不要进行 `gzip` 压缩。如果是 `gzip` 压缩流, 那么我们就没法进行替换了。

## 进阶

`nginx` 有一个增强模块 `ngx_http_substitutions_filter_module`，可以支持更多高级功能：

1. 支持多次替换
2. 支持正则替换
3. 支持中文替换

具体使用方法可以直接看文档，此处不多赘述。