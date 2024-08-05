---
title: 探索 babel
date: 2023-03-17 17:55:51 +08:00
category:
  - 学习笔记
tag:
  - babel
  - 前端工程化
---

> 参考链接：
>
> [姜瑞涛的 babel 教程](https://www.jiangruitao.com/babel/)
>
> [babel 官方文档](https://babeljs.io/docs/)
>
> [babel 中文文档](https://www.babeljs.cn/)

## babel 是什么

Babel 是一个 JavaScript 编译器。在开发过程中，由于浏览器的兼容问题，ES6 版本的代码在低版本浏览器和其他环境上有可能会有兼容性问题。Babel 就在其中做了转译的一个工作，将 ES6 版本的代码转换为 ES5 等向后兼容的 JS 代码。有了 babel 后，我们就可以在工作中使用最新的 ES 规范写代码，最后用 babel 将代码转换为 ES5 的代码，这样就不用担心运行环境是否支持了。

下面说到的都是以最新的 babel 7 版本为例，babel 6 相关的包名等不一致，要尽快升级到新版本~

在开始之前，列一下我们常用到的工具链与库：

- @babel/cli
- @babel/core
- @babel/preset-env
- @babel/runtime
- @babel/plugin-transform-runtime
- babel-loader(webpack)

## babel 配置文件

babel 支持 `.babelrc` / `.babelr.json`/ `babel.config.json` / `babel.config.js` / `package.json` 等多种格式的配置文件，格式基本上都是如下：

```json
{
  "presets": [...],
  "plugins": [...]
}
```

在这里面会有一个小坑，官方明确表达了如果需要编译 `node_modules` 时，需要用 `babel.config.json` 来作为配置文件，同时该类型的配置文件仅在 babel7 下支持！在没什么特殊情况下，我们都建议使用 `babel.config.json` 来作为配置文件。

## 工具

### @babel/cli

顾名思义，这是一个 cli 工具，在 npm 安装后我们可以直接使用 `npx babel input.js` 来编译传入的代码。工具会自动按顺序读取配置文件，根据对应的配置来进行代码转译。

### @babel/core

core 指的是核心，这个包里面包含了 babel 的一些核心 api。它提供了一系列与编译相关的 api，我们可以通过代码引入这个包，手动进行一些代码的 transform 与 parse。

### @babel/runtime

**babel 的工具包**

在我们用 babel 做语法转换的时候，需要 babel 在转换后的代码里注入一些函数才能正常工作，这些就是辅助函数。@babel/preset-env 在做语法转换的时候，注入了这些函数声明，以便语法转换后使用。

但这也存在着一些问题，在开发过程中，js 文件多则上千个，如果每个文件里都用到了新语法，那么就会导致每个转换后的文件都会加上相同的函数声明，会导致打包出来的包特别大，而且有很多重复的内容。

有一种思路就是，我们把这些函数声明都放到公共的 npm 包中，需要使用的时候直接从这个包里引入。这样即使很多地方用到了这些函数，都是从同一个地方引入的，在打包时只会将 npm 包中的函数引入一次，这样就做到了代码的复用。

@babel/runtime 就是这样的一个 npm 包，这个包将所有语法转换会用到的辅助函数都集成在了一起。

在安装 @babel/preset-env 的时候，其实已经自动安装了 @babel/runtime，不过在项目开发的时候，我们一般都会再单独 install 一遍 @babel/runtime。

需要注意的是，其他 @babel 包一般安装在 `devDependencies` 中，但是 @babel/runtime 是个例外，它一般安装在 `dependencies` 中。

### babel-loader

babel-loader 是一个 webpack loader，在 webpack + babel 的开发流程中经常用到，以便 webpack 在构建的时候用 babel 对 JS 代码进行转译，这样我们就不用再通过命令行手动转译了。

我们一般会将 `mjs/js` 文件给到 babel-loader 进行处理，babel-loader 会自动找到 babel 的配置文件，并根据配置对传入的代码进行转换。

## 预设

### @babel/preset-env

**babel 的控制者**

preset 指的是预设。在 babel6 的时代，常见的 preset 有 babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2 等。这些预设多得眼花缭乱，同时对我们开发者选择时也容易造成误解，因此在 babel7 版本中，@babel/preset-env 包含了 babel-preset-latest 的功能，并对其进行增强，现在 @babel/preset-env 完全可以替代 babel-preset-latest。

@babel/preset-env 是构建在其它优秀的开源项目之上的，它会根据 `browserslist` 等配置，智能地选择转译的规则。在没配置 polyfill 时，一般 @babel/preset-env 只会负责**词法的转换**，也就是 `const` 、箭头函数等**静态**的语法转译，对于 `Promise` 等运行时逻辑不会做任何处理。

### @babel/preset-react

babel 可以对 react 中用到的 jsx 语法进行转译，转换为对应的 `React.createElement` 函数。

## 集成工具包

### @babel/polyfill

**运行时的转换器**

上面说到一些运行时逻辑是无法直接处理的，因此 @babel/polyfill 就做了这样的事情。polyfill 直译过来就是“垫片”，就是通过一些巧妙的方法**将新语法通过旧语法实现**。

从 babel7.4 开始，官方不推荐再使用 @babel/polyfill 了，因为 @babel/polyfill 本身其实就是两个 npm 包的集合：core-js 与 regenerator-runtime。官方推荐直接使用这两个包，因为 @babel/polyfill 使用的 core-js 包为 2.x.x 版本，而 core-js 这个包本身已经发布到 3.x.x 版本了，@babel/polyfill 以后也不会使用 3.x.x 版本的包了，想要使用新版本的 core-js 就需要手动去安装 core-js。

总体来说，babel 官方的 polyfill 使用方法主要有以下几种：

1. 直接在 html 文件引入 Babel 官方的 polyfill.js 脚本文件；
2. 在前端工程的入口文件里引入 polyfill.js；
3. 在前端工程的入口文件里引入 @babel/polyfill；
4. 在前端工程的入口文件里引入 core-js/stable 与 regenerator-runtime/runtime；
5. 在前端工程构建工具的配置文件入口项引入 polyfill.js；
6. 在前端工程构建工具的配置文件入口项引入 @babel/polyfill；
7. 在前端工程构建工具的配置文件入口项引入 core-js/stable 与 regenerator-runtime/runtime；

1 就是直接通过 script 标签引入；

2-4 一般都是在 webpack / rollup / vite 的入口文件中直接 `import '@babel/polyfill' `；

5-7 不同的构建工具不一样，举个例子，在 webpack 下就是直接在 `entry` 属性配置为：`['@babel/polyfill', 'entry.js']`。

### @babel/plugin-transform-runtime

**babel 的自动路由器**

有了 @babel/runtime 这个包后，我们就可以在每个用到辅助函数的地方都引入一下，这样是解决了问题，但是又引入了新的问题：这么多函数我们要一个个记住，用到再引入，十分地繁琐，一般人做不到的同时也会觉得很烦。这个时候，@babel/plugin-transform-runtime 的出现就是解决这个问题的。

@babel/plugin-transform-runtime 有三大作用：

1. 自动移除语法转换后内联的辅助函数（inline babel helpers），使用 @babel/runtime/helpers 里的辅助函数来替代；
2. 当代码里使用了 core-js 的 API，自动引入 @babel/runtime-corejs3/core-js-stable/，以此来替代全局引入的 core-js/stable;
3. 当代码里使用了 Generator/async 函数，自动引入 @babel/runtime/regenerator，以此来替代全局引入的 regenerator-runtime/runtime。

作用 1 很容易理解，它会自动识别并引入 @babel/runtime 中的辅助函数，省得手动引入的麻烦，而且都从 @babel/runtime 中引入，减少了重复的代码占用。

作用 2、3 其实说的是同一个事情，之前我们说到了手动引入 @babel/polyfill 来实现全局 API 的补齐，但这也会有一个问题，那就是对运行时的环境进行了污染，例如 `Promise`，在 polyfill 中是直接对浏览器的全局对象 window 进行了重新赋值，用我们自己实现的 `Promise` 来重写了浏览器的对象与原型链。

我们并不想要这种副作用，因此使用 @babel/plugin-transform-runtime 将代码中用到的 API 进行转换，举个例子：

babel 转换前的代码

```js
var obj = Promise.resolve()
```

若使用了 @babel/polyfill 或 core-js/stable 与 regenerator-runtime/runtime 来做全局的 API 补齐，那么 babel 转换后的代码仍然是

```js
var obj = Promise.resolve()
```

polyfill 只是补齐了浏览器的 window.Promise 对象。

若我们不使用 polyfill，而开启 @babel/plugin-transform-runtime 的 API 转换功能。那么 babel 转换后的代码将是

```js
var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault')
var _promise = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/promise')
)
var obj = _promise['default'].resolve()
```

@babel/plugin-transform-runtime 把我们代码里的 Promise 变成了 \_promise["default"]，而 \_promise["default"] 拥有 ES 标准里 Promise 所有的功能。现在，即使浏览器没有 Promise，我们的代码也能正常运行。

我们到现在有两种方式可以解决问题，一是直接通过 polyfill 转换，二是通过 API 转换。API 转换一般是给开发库的人来使用的，前端工程中一般仍然使用 polyfill 来补齐 API（但如果你有更高的体积需求也可以用 API 转换）。

可以想象，如果开发 JS 库的人使用 polyfill 补齐 API，我们自己前端工程也是用 polyfill 补全 API，但是两个库的 polyfill 版本并不一致，那么我们引入这个库之后很可能会导致前端工程出问题，因此开发库的人会用到 API 转换功能。

上面用的是 `Promise` 来作例子，属于作用 2，即使用 core-js 来进行转换，作用 3 说的是 Generator/async，也就是 async 函数的转译。在默认情况下，@babel/plugin-transform-runtime 对 Generator/async 进行 API 转换功能，默认是开启的，不需要我们设置。
