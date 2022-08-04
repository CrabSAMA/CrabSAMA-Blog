---
title: Git Hook 插件——husky4.x升级到5.+指南
sidebar: 'auto'
categories:
 - 前端工程化
---

由于 `husky` 这个插件在升级到 5.+ 的版本后有一个配置上的更新，因此需要对现有项目中的配置文件进行重新配置。如果现在有项目使用 4.x 版本想升级的也可以进行升级。

附上[官方文档](https://typicode.github.io/husky/#/?id=migrate-from-v4-to-v7)，有什么问题可以先自己看一下官方文档~

1. 升级`husky`版本（如果不需要可以跳过）

   更改 package.json 里面的版本号为最新，然后` sudo lnpm install `即可。

2. 初始化新版 `husky`

   新版 `husky` 需要有一个 `install` 的操作，安装新版后需要执行` husky install `命令，**刚 `clone` 下来的项目也需要进行 `install` 操作**，同理。

3. 根据之前的配置文件重新配置

   一般来说，现有项目的 `husky` 配置都在 `package.json` 中，可以看到有 `husky` 的相关配置，例如：

```JSON
// package.json
{
    ...
    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "pre-commit": "lint-staged"
      }
    },
}
```

这里其实就是定义了两个 `hook`，在新版 `husky` 中定义 `hook` 的方式更改为了命令行，如果想要新增 `hook`，需要执行：

```Shell
npx husky add .husky/pre-commit "lint-staged"
git add .husky/pre-commit
```

以上面的配置为例，我们需要在新版 `husky` 中添加两个钩子：`commit-msg` 和 `pre-commit`，那就执行两次上面的命令即可。但是在新版 `husky` 中还有一些变化，一个比较重要的点就是 `HUSKY_GIT_PARAMS` 这个环境变量不在了，要使用 $1、$2 这种方式替代（[文档](https://typicode.github.io/husky/#/?id=husky_git_params-ie-commitlint-)），因此添加 `commlint` 的命令应该是：

```Shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
git add .husky/commit-msg
```

**在上述配置完成后，就可以重试 `commit` 操作，看看是否 `husky` 是否正常运行啦！**