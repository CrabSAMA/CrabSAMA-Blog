---
title: Vue2/Vue3共存Monorepo组件库引入VuePress报错
date: 2023-11-10 11:19:20 +08:00
category:
  - 解决方案
tag:
  - monorepo
  - 组件库
  - Vue
  - VuePress
---

## 背景

项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。

由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。

依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。

```json
//package.json
{
  "devDependencies": {
    "vue": "^3.3.4",
    "vue2": "npm:vue@2.7.15"
  }
}
```

## 问题复现

在 packages 下面新增一个 vue2-docs 的目录，初始化 Vuepress1.x。运行`vuepress dev`后，发现报错：

```
> vuepress dev

/Users/crab.huang/Project/xx-components/node_modules/.pnpm/vue-server-renderer@2.7.15/node_modules/vue-server-renderer/index.js:8
  throw new Error(
  ^

Error:

Vue packages version mismatch:

- vue@3.3.4
- vue-server-renderer@2.7.15

This may cause things to work incorrectly. Make sure to use the same version for both.
```

这里报错的意思是 vue 与 vue-server-renderer 的版本不匹配，vue-server-renderer 是 vue 的 ssr 组件，其硬性依赖 vue 且要求两者版本一致才能运行。令人疑惑的是，为什么它可以直接找到 3.x 的 vue 版本呢？

## 尝试解决

查看源码后发现，vue-server-renderer 这个库引入 vue 的方式十分简单：

```javascript
try {
  var vueVersion = require('vue').version
} catch (e) {}

var packageName = require('./package.json').name
var packageVersion = require('./package.json').version
if (vueVersion && vueVersion !== packageVersion) {
  throw new Error(
    '\n\nVue packages version mismatch:\n\n' +
      '- vue@' +
      vueVersion +
      '\n' +
      '- ' +
      packageName +
      '@' +
      packageVersion +
      '\n\n' +
      'This may cause things to work incorrectly. Make sure to use the same version for both.\n'
  )
}
```

这里直接通过 cjs 的方式引入了 vue，而又因为 pnpm 的默认行为会将所有的依赖包都提取到最外层的`node_modules/.pnpm`下，结合前文提到的 package.json 中以 vue3 作为主版本，因此这里的`require('vue')`直接找到的就是 vue3。可以预想的是，当时该库的作者并没有考虑到后续 vue2 与 vue3 共存的情况，其设想引入的必定是同版本的 vue。

显而易见的，上面的逻辑只是运行前的前置判断，实际代码逻辑内部是如何引入与使用 vue 的我们还不得而知，同时我们发现还有另外一个包 vue-template-compiler 也有同样的行为（[issue 链接](https://github.com/vuejs/vue/issues/11828)），此时放在我们面前的只有两条路可选：

1. 给上述的两个库提 issue，使其支持自定义指定引入 vue 的地址；通过 npm patcher 的方式，给本地包打补丁，将`require('vue')`都改成`require('vue2')`。
2. 运行时先变更 package.json 中 vue 的指向，令其指向 vue2，运行结束后改回来。

方法一要求去了解上述两个包的内部实现，方法二更改完后都需要重新 install 才能生效，成本都比较大，最终我们**放弃了集成 vue2 版的文档在 monorepo 库中的方案**，在后续的组件库开发过程中尽量同步实现 vue2 与 vue3 的组件，同时以 vue3 版的文档为主。

如果后续实际确实有 vue2 版文档的需求，也会**新增一个 repo**去存储，这样就解决了依赖冲突的问题。
