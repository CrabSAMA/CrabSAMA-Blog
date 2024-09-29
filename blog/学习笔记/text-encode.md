---
title: 文本编码
date: 2020-07-09 10:15:04 +08:00
category:
  - 学习笔记
tag:
  - Node.js
---

使用`NodeJS`编写前端工具时，操作得最多的是文本文件，因此也就涉及到了文件编码的处理问题。我们常用的文本编码有`UTF8`和`GBK`两种，并且`UTF8`文件还可能带有`BOM`。在读取不同编码的文本文件时，需要将文件内容转换为`JS`使用的`UTF8`编码字符串后才能正常处理。

## BOM 的移除

`BOM`用于标记一个文本文件使用`Unicode`编码，其本身是一个`Unicode`字符`（"\\uFEFF"）`，位于文本文件头部。在不同的`Unicode`编码下，`BOM`字符对应的二进制字节如下：

| Bytes    | Encoding |
| -------- | -------- |
| FE FF    | UTF16BE  |
| FF FF    | UTF16LE  |
| EF BB BF | UTF8     |

因此，我们可以根据文本文件头几个字节等于啥来判断文件是否包含`BOM`，以及使用哪种`Unicode`编码。但是，BOM`字符`虽然起到了标记文件编码的作用，其本身却不属于文件内容的一部分，如果读取文本文件时不去掉`BOM`，在某些使用场景下就会有问题。例如我们把几个`JS`文件合并成一个文件后，如果文件中间含有`BOM`字符，就会导致浏览器`JS`语法错误。因此，使用`NodeJS`读取文本文件时，一般需要去掉`BOM`。例如，以下代码实现了识别和去除`UTF8 BOM`的功能。

```js
function readText(pathname) {
  var bin = fs.readFileSync(pathname)

  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3)
  }
  return bin.toString('utf-8')
}
```

## GBK 转 UTF8

`NodeJS`支持在读取文本文件时，或者在`Buffer`转换为字符串时指定文本编码，但遗憾的是，`GBK`编码不在`NodeJS`自身支持范围内。因此，一般我们借助`iconv-lite`这个三方包来转换编码。使用`NPM`下载该包后，我们可以按下边方式编写一个读取`GBK`文本文件的函数。

```js
var iconv = require('iconv-lite')

function readGBKText(pathname) {
  var bin = fs.readFileSync(pathname)

  return iconv.decode(bin, 'gbk')
}
```
