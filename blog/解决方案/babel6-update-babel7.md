---
title: babel6升级到babel7
date: 2020-12-29 14:58:51 +08:00
category:
  - 解决方案
tag:
  - babel
---

## Babel 7 库的作用域 (scope)

1. Babel 7 用了 npm 的 private scope，把全部的包都挂在在 @babel 下，类似的有 typescript 的 @type。

2. Babel 7 提供多种配置

   `.babelrc`
   `babel.config.js`
   `webpack babel loader`

## 升级步骤

1. `babel-core`卸载掉，重新安装 `@babel/core`

   ```bash
   npm uninstall babel-core
   npm install -D @babel/core
   # 调用 babel-upgrade 这个工具将对 package.json 进行一次扫描
   # 将旧版本的 plugin 自动替换成 babel7 的作用域 plugin
   npx babel-upgrade --write --install 
   ```

2. `.babelrc`引入解析

   ```json
   // babel7 以上的 plugin 都变成了 @babel 作用域下的包 需要在这里填写以便解析
   {
     "plugins": [
       "@babel/plugin-proposal-class-properties",
       "@babel/plugin-proposal-optional-chaining",
       "@babel/plugin-proposal-json-strings",
       "@babel/plugin-syntax-dynamic-import",
       "@babel/plugin-syntax-import-meta"
     ]
   }
   ```

3. 在 `package.json` 文件中删除 `babel6` 相关的依赖

   简单的来说，就是不以 `@babel` 开头的（除了 babel-loader）都删掉即可，或者看后面版本号写 6.XX.XX 的都删掉。

4. 删除文件夹 `node_modules` 然后重新安装

   ```bash
   rm -rf node_modules
   npm install
   ```

   