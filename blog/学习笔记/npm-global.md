---
title: NPM 包全局安装
date: 2024-10-29 18:01:28 +08:00
category:
  - 学习笔记
tag:
  - Node.js
  - npm
---

# NPM 包全局安装

## NPM

`npm install -g` 只做了一个事情：复制 bin 下面的文件到 xx 目录，因此需要自己配置运行环境或者提供可执行文件

[npm install -g 文档](https://docs.npmjs.com/cli/v10/commands/npm-install#global)

因此网上的教程一般让我们加上：`#!/usr/bin/env node` ，这样我们在 shell 中直接运行这个文件的时候，会告诉 shell 使用 node 作为运行环境帮我们运行这个文件的内容。

https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line

## yarn

`yarn global` 已经在最新版本中被删除，官方的说法是：Yarn 专注于*项目管理*，管理系统范围的包被认为超出了我们的范围。

在 yarn 中我们需要使用 `yarn dlx` 直接运行 cli，它预期的行为是直接运行二进制脚本，因此它也需要我们在 js 文件前面加上环境注释，否则 js 文件无法被当做二进制文件直接运行。

## pnpm

`pnpm global add` 行为不太一样，它帮忙封装了一个可执行 shell 脚本，帮我们将 bin 中的 js 文件封装起来了：

```shell
#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -z "$NODE_PATH" ]; then
  export NODE_PATH="/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules/commit-and-tag-version/bin/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules/commit-and-tag-version/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/node_modules"
else
  export NODE_PATH="/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules/commit-and-tag-version/bin/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules/commit-and-tag-version/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/commit-and-tag-version@12.4.4/node_modules:/Users/crab.huang/Library/pnpm/global/5/.pnpm/node_modules:$NODE_PATH"
fi
if [ -x "$basedir/node" ]; then
  exec "$basedir/node"  "$basedir/global/5/node_modules/commit-and-tag-version/bin/cli.js" "$@"
else
  exec node  "$basedir/global/5/node_modules/commit-and-tag-version/bin/cli.js" "$@"
fi
```

看不懂上面的代码没关系，简单来说就是帮我们整理了 node 的 path，让 shell 能自动地找到 node 运行环境，然后拿到对应的目录，使用 node 作为运行环境执行源代码。

pnpm 更为智能化地帮我们做了一层包装，因此我们可以不在 js 文件的头部加入那一行运行环境注释，也可以正常运行。

