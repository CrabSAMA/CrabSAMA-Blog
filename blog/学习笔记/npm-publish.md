---
title: 发布一个 npm 包
date: 2024-10-31 16:04:55 +08:00
category:
  - 学习笔记
tag:
  - npm
---

# 发布一个 npm 包

1. `npm init`
2. 编写代码
3. 使用 `npm link` 功能先在本地测试包代码是否正常可引入、可运行
4. 是否为 bin 包（可执行文件包）
   1. 是，则需要在 `package.json` 中添加 `bin` 字段，并指向可执行文件的路径
   2. 否，则无需额外操作
5. 在 npm 上注册自己的账号 https://www.npmjs.com/signup
6. 许多同学都有用国内的镜像源或者公司内部源，这些源是无法发布 npm 包的，因此我们可以使用 `nrm` 这个库来管理我们的 npm registry，在发布 npm 包之前我们需要切换 npm registry 为 https://registry.npmjs.org/
7. `npm login`，输入自己的用户名和密码，登录时可能需要二次验证码，输入即可。登录成功后调用 `npm whoami` 有自己的用户名输出即证明登录成功
8. 建议的流程是通过 `commit-and-tag-version` 这个包来管理版本，这个包可以帮助我们生成 CHANGELOG 和 commit log，同时生成 git tag 方便直接定位到某个版本。
   1. `commit-and-tag-version --release-as major` 下一个版本是主版本时使用（1.0.0 -> 2.0.0）
   2. `commit-and-tag-version --release-as minor` 下一个版本是次版本时使用（1.0.0 -> 1.1.0）
   3. `commit-and-tag-version --release-as patch` 下一个版本是小版本时使用（1.0.0 -> 1.0.1）
   4. `commit-and-tag-version --prerelease rc` 下一个版本是预发布版本（rc）时使用（1.0.0 -> 1.0.1.rc.1）
   5. 个人建议在每次版本发布之前，先发 rc 版本自测，通过测试后再发布正式版本，防止发布正式版本后出现不可用的情况还需要重新发版修复。**我们应该保证我们的每个正式版本包都是可用的**。
9. 在更新完版本号后，我们可以使用 `npm publish` 命令进行包发布操作，`npm publish --tag` 用于指定当前要发布包的 tag，例如我们上面提到的发 rc 包，就可以使用 `npm publish --tag rc` 命令。注意，直接调用命令之前，建议先调用一次 dry-run，也就是**预运行**一次，检查我们的操作是否有问题，方法也很简单，在命令后面加上 `--dry-run` 即可，即 `npm publish --dry-run`。在运行 dry-run 时，会看到运行完命令后 npm 会做什么事情，我们只需要检查操作是否正确符合预期，没问题的话最终执行实际的发布命令即可。

