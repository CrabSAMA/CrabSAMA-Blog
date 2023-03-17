---
title: Webpack Loader 与 Plugin
date: 2022-06-27 16:43:39+08:00
lastUpdated: true
categories:
 - Webpack
---

[掘金参考文章](https://juejin.cn/post/7067051380803895310)

## Webpack简介

`Webpack` 是一个用于现代 `JavaScript` 应用程序的**静态模块打包工具**。当 `Webpack` 处理应用程序时，它会在内部从一个或多个入口点构建一个**依赖图**，然后将项目中所需的每一个模块组合成一个或多个 `bundles`，它们均为静态资源，用于展示你的内容。

### Webpack的一些核心概念

- Entry：入口，指示 `Webpack` 应该使用哪个模块，来作为构建其内部 依赖图(`dependency graph`) 的开始。
- Output：输出结果，告诉 `Webpack` 在哪里输出它所创建的 bundle，以及如何命名这些文件。
- Module：模块，在 `Webpack` 里一切皆模块，一个模块对应着一个文件。`Webpack` 会从配置的 `Entry` 开始递归找出所有依赖的模块。
- Chunk：代码块，一个 `Chunk` 由多个模块组合而成，用于代码合并与分割。
- Loader：模块代码转换器，让`webpack`能够去处理除了JS、JSON之外的其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
- Plugin：扩展插件。在`webpack`运行的生命周期中会广播出许多事件，`plugin`可以监听这些事件，在合适的时机通过`webpack`提供的api改变输出结果。常见的有：打包优化，资源管理，注入环境变量。
- Mode：模式，告知 `webpack` 使用相应模式的内置优化
- Browser Compatibility：浏览器兼容性，`Webpack` 支持所有符合 `ES5` 标准 的浏览器（IE8以上版本）

## 回归正题，loader 和 plugin 究竟是什么？

我们可以通过`loader`和`plugin`机制去进一步扩展能力，按照项目需要去实现个性化的功能。

`Webpack` 是由`nodejs`编写的前端资源加载/打包工具，由`nodejs`提供了强大的文件处理，IO能力。

`Loader` 和 `Plugin` 在 `Webpack` 里是支柱能力。在整个构建流程中，`Loader` 和 `Plugin` 对编译结果起着决定性的作用。

## Loader

### 简介

`Webpack` 中提供了一种处理多种文件格式的机制，这就是 `Loader`，我们可以把`Loader`当成一个转换器，它可以将某种格式的文件转换成`Webpack`支持打包的模块。平时在 `webpack.config.js` 里经常会看见 `rules` 这个字段，其实就是通过正则匹配的方式来找到 `Loader` 需要处理的文件，并通过 `Loader` 对文件进行处理。

在`Webpack`中，一切皆模块，我们常见的`Javascript`、`CSS`、`Less`、`Typescript`、`Jsx`、图片等文件都是模块，不同模块的加载是通过**模块加载器**来统一管理的，这里的模块加载器指的就是 `Loader` 。当我们需要使用不同的 `Loader` 来解析不同类型的文件时，我们可以在`module.rules`字段下配置相关规则。

### Loader特点

- `loader` 本质上是一个函数，`output=loader(input)` ；`input`可为工程源文件的字符串，也可是上一个`loader`转化后的结果；
- 第一个 `loader` 的传入参数只有一个：资源文件(`resource file`)的内容；
- `loader`支持**链式调用**，`webpack`打包时是按照数组**从后往前**的顺序将资源交给`loader`处理的。
- 支持同步或异步函数。

### 代码结构

代码结构通常如下：

```javascript
// source：资源输入，对于第一个执行的 loader 为资源文件的内容；后续执行的 loader 则为前一个 loader 的执行结果
// sourceMap: 可选参数，代码的 sourcemap 结构
// data: 可选参数，其它需要在 Loader 链中传递的信息，比如 posthtml/posthtml-loader 就会通过这个参数传递参数的 AST 对象
const loaderUtils = require('loader-utils');

module.exports = function(source, sourceMap?, data?) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this);
  // TODO： 此处为转换source的逻辑
  return source;
};
```

### 我自己写了一个Loader……

目标是匹配到项目中 i18n 方法（`$t('')`）中的 `key` 值并打印出来：

```js
module.exports = function (source) {
  // 此处拿到的 source，就是文件内容
  // 此处正则用于匹配 $t(xxx)
  const reg = /\$t\(.*?\)/g
  source = source.replace(reg, word => {
    // 有可能是 $t('')/$t("")
    if (["'", '"'].includes(word[3])) {
      // 假设字符串内容是test，此处 str = 'test'/"test"
      let str = word
      // 切割掉引号，得到实际的内容
      str = word.slice(4).slice(0, -2)
      // 将内容打印出来
      console.log(str);
    }
    // 此处没做处理，直接返回，因此不会对源文件做任何影响
    return word
  })
  // 此处没做处理，直接返回，因此不会对源文件做任何影响
  return source
}
```

### 常用的Loader

1. babel-loader

   输入：`javascript` -> 处理：`babel` -> 输出：浏览器支持的低版本语法

2. ts-loader

   输入：`TypeScript` -> 处理：`tsc` -> 输出：`javascript` 代码

3. markdown-loader

   输入：`markdown`文件 -> 处理：`markdown-loader` -> 输出：`webpack` 支持的模块

4. ...more than

### 总结

`Loader` 其实就是一个**加载、处理器**，通过规则加载指定的文件，处理后输出成符合需求的内容。

## Plugin

### 简介

> `Webpack` 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。
>
> `Webpack` 通过 `Tapable` 来组织这条复杂的生产线。 `Webpack` 在运行过程中会广播事件，插件只需要**监听它所关心的事件**，就能加入到这条生产线中，去改变生产线的运作。 `Webpack` 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。
>
> ——「深入浅出 Webpack」

### 理解

我们都知道 `node.js` 有一个引以为傲的机制，就是它的事件驱动。`node.js`，包括 `JavaScript`，本质上都是一个单线程的语言，通过一条流水线从上至下地运行代码。但当我们需要异步的时候，问题就来了：要怎样才能在对应的时间做对应的事呢？`node.js` 给出的答案正是事件驱动，通过触发事件，执行回调函数，即可实现这种需求。

`Webpack` 本质上也是基于 `node.js` 写的，因此它的 `plugin` 也采用了事件的机制，我们写的 `plugin` 只需要关心 `Webpack` 广播出的众多事件中所需的那些，并传递我们的处理函数，`Webpack` 就会在指定的事件触发时，执行我们传入的函数，以实现**流水线的拓展**。

简而言之,`plugin`可以在`webpack`运行到某个时刻帮你做一些事情。 `plugin`会在`webpack`初始化时,给相应的生命周期函数绑定监听事件,直至`webpack`执行到对应的那个生命周期函数,`plugin`绑定的事件就会触发。

### 代码结构

以下是一个例子，用来说明 `plugin` 的代码结构。

`plugin`本质上是一个对外导出的`class`，类中包含一个固定方法名`apply`。

`apply`函数的第一个参数就是`compiler`，我们编写的插件逻辑就是在`apply`函数下面进行编写.

既然程序中已经获取了`compiler`参数，理论上我们就可以在`compiler`的各个钩子函数中绑定监听事件。比如下面代码会在`emit`阶段绑定一个监听事件。

主程序一旦执行到`emit`阶段，绑定的回调函数就会触发。通过上面的介绍可知,主程序处于`emit`阶段时，`compilation`已经将代码编译构建完了，下一步会将内容输出到文件系统。

此时`compilation.assets`存放着即将输出到文件系统的内容，如果这时候我们操作`compilation.assets`数据，势必会影响最终打包的结果。

下面代码直接在`compilation.assets`上新增一个属性名`copyright.txt`，并定义好了文件内容和长度。

这里需要引起注意,由于程序中使用`tapAsync`(异步序列)绑定监听事件，那么回调函数的最后一个参数会是`next`，异步任务执行完成后需要调用`next`，主程序才能进入到下一个任务队列。

最终打包后的目标文件夹下会多出一个`copyright.txt`文件，里面存放着字符串`this is my copyright`。

```javascript
//copyRight.js

// 导出一个 class
class CopyRightPlugin {
  // 固定 apply 方法
  apply(compiler){
    	// 处于 emit 阶段时，代码已经编译构建完
      compiler.hooks.emit.tapAsync("CopyRightPlugin",(compilation, next) => {
       	// 下一步将内容输出到文件系统
        setTimeout(() => { // 模拟ajax获取版权信息
          	// 此时 compilation.assets 存放着即将输出到文件系统的内容
          	// 操作这个属性，会影响最终打包的结果
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return "this is my copyright"; // 文件内容
                },
                size: function() {
                    return 20;  // 文件大小
                }
            }
          	// 因为是异步序列，因此要调用 next 方法才会进入到下一个任务队列
            next();
        },1000)
        
      })

  }

}

module.exports = CopyRightPlugin;
```

