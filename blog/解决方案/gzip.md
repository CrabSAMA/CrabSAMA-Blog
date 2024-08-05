---
title: 开启 gzip
date: 2022-05-27 17:22:57 +08:00
category:
  - 解决方案
tag:
  - HTTP
---

有两种 gzip 压缩的方式：

1. 打包的时候通过 `webpack` 配置生成对应的 `.gz` 文件，浏览器请求 `xx.js/css` 等文件时，服务器返回对应的 `xxx.js.gz` 文件；
2. 浏览器请求 `xx.js` 文件时，服务器对 `xx.js` 文件进行 `gzip` 压缩后传输给浏览器。 

## `webpack` 打包生成 `gz` 文件

- 安装插件（`compression-webpack-plugin`）：

```bash
npm install compression-webpack-plugin --save-dev
```

- `vue.config.js` 文件进行 webpack 配置：

```js
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip', // 使用gzip压缩
      test: /\.js$|\.html$|\.css$/, // 匹配文件名
      filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
      minRatio: 1, // 压缩率小于1才会压缩
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
    }),
  ],
};

```

这里对`js`、`html`、`css`文件进行了压缩处理，并没有进行图片压缩，因为**图片压缩并不能实际减少文件大小**，反而会导致打包后生成很多同大小的gz文件，得不偿失。

- 当然了，上文提到过，浏览器请求 `xx.js/css` 等文件时，服务器返回对应的 `xxx.js.gz` 文件，所以还需要在服务器配置一个属性，以期望它能正常返回我们需要的 `gz` 文件。

这里拿 `nginx` 举例（`nginx.conf`文件）：

```nginx
http {
	# 静态加载本地的 gz 文件
	gzip_static on;
}
```

`gzip` 压缩比率在5-6倍，`nginx` 配置了静态 `gz` 加载后，浏览器也返回的是 `gz` 文件，这样就会请求小文件而不会导致请求卡线程，并且，因为保留了源文件，所以当我们删除 `gz` 后，浏览器会自动去请求原始文件，而不会导致界面出现任何问题。 

## 服务器在线 `gzip` 压缩

前端不用进行任何配置，也不用 `webpack` 生成 `gz` 文件，服务器进行处理，拿 `nginx` 举例： 

```nginx
http {
  # 开启gzip
  gzip on;
  # 设置缓冲区大小
  gzip_buffers 4 16k;
  #压缩级别官网建议是6
  gzip_comp_level 6;
  #压缩的类型
  gzip_types text/plain application/javascript text/css application/xml text/javascript application;
}
```

响应头中会携带 `gzip` 压缩配置，每次请求 `xx.js` 文件，服务器都会进行实时压缩。

##  比较

两种方案的优缺点：

1. `webpack` 打包，然后直接使用**静态**的 `gz`，缺点就是**打包后文件体积太大**，但是**不耗服务器性能**；
2. 使用 `nginx` **在线** `gzip`，缺点就是**耗性能**，需要实时压缩，但是 **`vue` 打包后的文件体积小**。

## 最佳实践

我想在有`gz`文件的时候进行静态压缩，不存在 `gz` 文件的时候进行在线压缩而不是加载源文件，要怎么做呢？

简单，两种配置都写上即可。

```nginx
gzip on;
gzip_static on;
gzip_comp_level 2;
gzip_types text/plain text/html text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript; 
```

首先，`gzip_static`的优先级高，会先加载静态 `gz` 文件，当同目录下不存在此文件的时候，会执行在线压缩的命令。

有些小伙伴就会纳闷，既然都开启的情况下，我们怎么区分使用了静态加载还是在线压缩呢？

响应头的 `Content-Edcoding:gzip` 表示 `gzip` 压缩已经生效，而 `Etag` 中**只有简单字符**表示**静态资源加载**，而前面**带 `W/`** 表示启动了**在线压缩**。