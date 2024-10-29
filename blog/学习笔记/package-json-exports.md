---
title: package.json exports 字段
date: 2024-09-03 15:02:34 +08:00
category:
  - 学习笔记
tag:
  - 前端工程化
  - npm
---

# package.json exports 字段

[阮一峰ES6链接](https://es6.ruanyifeng.com/#docs/module-loader#package-json-%E7%9A%84-exports-%E5%AD%97%E6%AE%B5)

我们平时经常看到一种引入方式：`import UnoCSS from 'unocss/vite'`，这种带斜杠的引入其实就是 `exports` 字段发挥的作用。

我们如果不配置 `exports` 字段的话，直接斜杠进入到的是包下面的路径，比如我们平时也会这样引入：`import bar from 'foo/index.js'`。

`exports` 字段的作用就是帮助我们使用别名的方式指定特殊的引入地址，在我们需要导出一些子模块时十分有用。

比如在最近部门有一个新业务线的需求，它要求把原先的一些敏感词去掉，因此我直接在原有包的基础上剔除了一些引用，通过 rollup 打包出来一个新的入口文件，通过 `exports` 字段定义一个新的导出，这样用户就可以一次性将原来的引入定义修改成新的引入地址，这就是 `exports` 字段的作用。

## exports with typescript

在直接使用了 `exports` 之后，我们会发现 typescript 会报类型找不到的异常：

> There are types at '/Users/crab/Project/xxx/node_modules/some-package/dist/types/src/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'xxx' library may need to update its package.json or typings.ts(7016)

字面意思来说，就是 typescript 无法找到对应的类型定义文件，但其实我已经在 `package.json` 下的 `types` 字段中输入了。

后面我发现，这个是在 typescript 4.7+ 后才实现的新特性，我们需要在 `exports` 对象下面针对不同的导出也定义不同的 `types`，这样 typescript 才能找到对应的定义文件。

```json
{
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "default": "./dist/cjs/index.js",
      "types": "./dist/types/src/index.d.ts"
    },
    "./foo": {
      "import": "./dist/esm/foo.js",
      "require": "./dist/cjs/foo.js",
      "default": "./dist/cjs/foo.js",
      "types": "./dist/types/src/foo-entry.d.ts"
    }
  }
}
```

### 2024-08-28 更新

组内同事反馈引入会报错误：

> Cannot find module 'package' or its corresponding type declarations.
> There are types at '/Users/xxx/Project/xxx/node_modules/package/dist/types/src/entry.d.ts', but this result could not be resolved under your current 'moduleResolution' setting. Consider updating to 'node16', 'nodenext', or 'bundler'.

字面意思来说，其实 typescript 已经找到了你的类型定义文件，但由于项目 tsconfig 中的 `moduleResolution` 字段限制了无法读取这个类型文件，建议我们更新成后面的几种类型。在 `moduleResolution` 设为 `Node` 的时候会报这个错误。

https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#moduleresolution-bundler

需要注意的是，`bunlder` 这个类型需要 typescript > 5.0 才能生效，而设置为 `node16` 或者 `nodenext` 也有弊端，就是无法通过省略文件类型名来引入对应的模块，这是非常反人类的，因此在不升级 typescript 版本的情况下，可以先使用 `@ts-ignore` 来暂时禁用引入的报错使其编译通过。

### 隐式的 any 类型错误

在导出 js 文件的时候遇到了错误：

> Could not find a declaration file for module 'xxx/dist/theme/ant-design.js'. '/Users/xxx/Project/xxx/node_modules/package/dist/theme/ant-design.js' implicitly has an 'any' type.  If the 'xxx' package actually exposes this module, try adding a new declaration (.d.ts) file containing `declare module 'package/dist/theme/ant-design.js';`ts-plugin(7016)

```typescript
import theme from 'package/dist/theme/ant-design.ts'
```

```json
"exports": {
  "./dist/theme/ant-design.js": {
    "default": "./dist/theme/ant-design.js",
    "types": "./dist/types/src/theme/ant-design.d.ts"
  }
}
```

错误的大概意思是引入的 js 文件没找到类型定义，因此具有隐式的 `any` 类型。但可以看到上面 `exports` 语句中我已经指定了对应的 `d.ts` 类型文件了，所以问题应该是 typescript 没有找到类型定义文件或者识别不出来。

在尝试解决问题的过程中，我发现调整 `moduleResolution` 会有不同的情况，当 `moduleResolution` 设为 `node16` 或者 `nodenext` 的时候，引入 js 文件是没有问题的，而当 `moduleResolution` 设为 `bundler` 的时候就会报错。但上面说到如果设置成前者，会引入更多的问题，因此我们的 `moduleResolution` 属性是不能变的。因此我们再去深入了解 `moduleResolution` 这个属性做了什么事情。（[pr link](https://github.com/microsoft/TypeScript/pull/51669)）

查找网上的资料，发现大家提供了许多在包不支持或未更新的情况下也能使用 `bundler` 的方法（[链接](https://zenn.dev/drop_table_user/articles/710c34c9f7c4b0)），虽然我不是这种情况，但是这给我提供了思路。这篇文章中提到我们可以设置 `resolvePackageJsonExports` 为 `false`，禁止 typescript 去读取 `package.json` 中的 `exports` 字段。我回头一看我的 `tsconfig.json` 文件，不知道什么时候我将 `resolvePackageJsonExports` 设为 `false` 了，这和我的预期是不符的。在将这一行去掉了之后，引入 js 文件的代码一切正常。

因此后续大家在遇到此类的问题的时候，可以按照以下的步骤去排查：

1. `Ctrl + Shift + P` (Windows) / `Command + Shift + P` (macos)，`Reload Window`，先将 VSCode 重载查看是否 ts server 卡顿
2. 检查 typescript 版本
3. 检查 `tsconfig.json` 中 `allowJS` 属性是否为 `true`
4. 检查 `tsconfig.json` 中 `moduleResolution` 属性是否为 `bundler`
5. 检查 `tsconfig.json` 中 `resolvePackageJsonExports` 属性是否为 `false`

如果上述步骤排查完成还是不能解决，请到 stackoverflow 或者 typescript github 库下方提 issue，他们会更专业地帮助你解决问题！

TODO 还有个很奇怪的点，我把文件扩展名由 js 改成 ts 后，又能正常导入导出了。我猜测是不是 ts 文件会自动触发类型推断，而 js 不会，因此出现了行为上的差异？

## exports with webpack4

组内仍有部分老项目用的还是 webpack4，很遗憾的是，在搜相关的 issue 时，发现官方提到 webpack4 并不会支持 `exports` 字段。（[issue链接](https://github.com/webpack/webpack/issues/9509)）

因此要么将 webpack 版本升级到 5 以上，或者更换为 Vite，否则并不能直接通过 `exports` 字段实现具名引入。解决方法也是有的，`exports` 字段的目的是让打包器找到对应的文件，那我们直接通过指定路径引入指定的文件，也可以实现引入的效果，但是就不是特别优雅了。我个人觉得还可以结合 webpack 里面的 `alias` 属性去使用，相对来说会看起来比较舒服一点。

## exports with other files

`exports` 这个属性只要使用了，就等于显式地告诉打包器我这个包只有标出来的东西被导出了，其余的内容直接引入是会报错的，因此在使用了 `exports` 属性后，就没办法通过绝对路径或相对路径的方式引入包下面的其余内容了。

当然也是有解决办法的：

https://juejin.cn/post/7212436135287504954#heading-4

```json
{
  "exports": {
    // 原本的内容...
    "./*": [
      "./*",
      "./*.d.ts"
    ]
  }
}
```

在最后面加入一个通配符 `exports`，将其余的东西都导出即可。但个人还是建议按需导出，这样编写的 npm 包会更加规范。
