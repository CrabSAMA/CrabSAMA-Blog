---
title: Stream数据流
date: 2020-07-09T09:21:04.0000000+08:00
category:
  - node.js
tag:
  - node.js
---

**官方文档：**<http://nodejs.org/api/stream.html>
当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，我们就需要用到数据流。`NodeJS`中通过各种`Stream`来提供对数据流的操作。

以文件拷贝为例，我们可以为数据来源创建一个只读数据流：

```js
var rs = fs.createReadStream(pathname);

rs.on('data', function (chunk) {
    doSomething(chunk);
});

rs.on('end', function () {
    cleanUp();
});
```

上边的代码中`data`事件会源源不断地被触发，不管`doSomething`函数是否处理得过来。代码可以继续做如下改造，以解决这个问题。

```js
var rs = fs.createReadStream(src);

rs.on('data', function (chunk) {
    rs.pause();
    doSomething(chunk, function () {
        rs.resume();
    });
});

rs.on('end', function () {
    cleanUp();
});
```

以上代码给`doSomething`函数加上了回调，因此我们可以在处理数据前暂停数据读取，并在处理数据后继续读取数据。

我们也可以为数据目标创建一个只写数据流，示例如下：

```js
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    ws.write(chunk);
});

rs.on('end', function () {
    ws.end();
});
```

我们把`doSomething`换成了往只写数据流里写入数据后，以上代码看起来就像是一个文件拷贝程序了。
但是以上代码存在上边提到的问题，如果写入速度跟不上读取速度的话，只写数据流内部的缓存会爆仓。我们可以根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，并根据`drain`事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了。因此代码可以改造如下：

```js
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false) {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {
    rs.resume();
});

```

以上代码实现了数据从只读数据流到只写数据流的搬运，并包括了防爆仓控制。因为这种使用场景很多，例如上边的大文件拷贝程序，`NodeJS`直接提供了`.pipe`方法来做这件事情，其内部实现方式与上边的代码类似。
