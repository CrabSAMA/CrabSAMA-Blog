---
title: 常用命令
date: 2020-06-09T20:34:44.0000000+08:00
lastUpdated: true
categories:
 - git
 - 实际项目
 - 经验
---

## 创建仓库

`git init`——初始化一个 `git` 仓库
`git clone [*.git]`——将远程库中的内容克隆到本地

## 本地仓库改动

`git add [filename]`——把文件添加（提交的修改）放进修改暂存区
`git add` 只关注你当前对文件的修改 在 `add` 之后再对文件进行修改 不会被 `commit`
`git commit -m "commit message"`——提交一次修改 将暂存区的所有修改提交到分支
`git status`——查看当前仓库状态
`git diff`——查看当前仓库发生变化文件的详情
`git rm`——在版本库中删除改文件 完成后需要进行 `commit`

## 查看提交历史

`git log`——查看最近到最远的提交日志（`--pretty=oneline` 可以令日志在一行内输出 方便查看）
`git log --graph`——以图形格式查看分支合并
`git reflog`——查看在本仓库中执行的每一次命令

## 回退提交

`git reset [commit]`——将仓库回退到某个版本 `commit`可以是16进制版本号，也可以用HEAD代替
`git reset [commit] [filename]`——将该文件在暂存区的修改撤销掉，重新放回工作区
`git checkout -- [filename]`——令该文件回到最近一次 `commit` 或者 `add` 时的状态

## 标签相关

`git tag`——查看所有标签
`git tag -a [tag name] -m [description] [commit]`——新建一个标签 默认绑定在HEAD上 也可以指定一个 `commit id`（`-a` 指定标签名 `-m`指定说明文字）
`git tag -d [tag name]`——删除一个本地标签

## 远程仓库相关

`ssh-keygen -t rsa -C "youremail@example.com"`——生成`SSH Key`
`git remote add origin git@github.com:[github username]/[github repository name.git]`——将本地仓库与`github`上的仓库关联 在添加后 远程库的名字就是 `origin`
`git remote rm origin`——删除与当前绑定的远程库的关联
`git push -u origin [branch name]`——将本地库 `branch name` 分支的内容推送到远程库（`-u`参数 用于将本地`master`分支和远程`master`分支关联起来，在以后 `push` 和 `pull` 时可以简化命令）
`git pull`——将当前分支与服务器绑定的分支的最新的提交抓下来
`git push origin [tag name]`——推送一个本地标签
`git push origin --tags`——推送全部未推送过的本地标签
`git push origin :refs/tags/[tag name]`——删除一个远程标签（要删除已经推送上去的远程标签，需要先删除本地标签，再删除远程标签）

## 分支相关

`git checkout -b [branch name]` ——表示创建并切换到某分支
`git checkout -b [branch name] origin/[branch name]`——在本地创建和远程分支对应的分支 本地和远程分支的名称最好一致
`git rebase`——将本地未 `push` 的分叉提交历史整理成直线
`git branch`——查看当前分支
`git branch [branch name]`——创建一条分支
`git branch -d [branch name]`——删除一条分支
`git branch -D [branch name]`——强行删除一条分支 用于丢弃一个没有被合并过的分支
`git branch --set-upstream [branch name] origin/[branch name]`——建立本地分支与远程分支的关联
`git merge [branch name]`——将目的分支合并到当前分支上（默认是“快进模式”，还有其他方式）
`git merge --no-ff -m "message" [branch name]`——禁用`Faster forward`模式进行合并 由于不使用`Fast forward`模式时，在`merge`时`git`会生成一个新的`commit`，因此需要在后面打上`commit`的信息
`git switch [branch name]`——切换到某一条分支
`git switch -c [branch name]`——创建并切换到某一条分支
`git cherry-pick [commit]`——将一个特定的 `commit` 提交到当前分支（等于**复制**一个 `commit` 所做的修改到本分支）
`cat [filename]`——查看某文件

## stash暂存区相关

`git stash`——将工作现场“储藏”起来
`git stash list`——查看 stash 列表
`git stash apply`——恢复第一个 stash 恢复后 stash 内容不删除
`git stash apply stash@{0}` 恢复指定的 stash
`git stash drop`——删除 stash
`git stash pop`——恢复工作现场 同时将 stash 内容删除

## something else

在`Git`中，用`HEAD`表示当前版本，也就是最新的提交，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成`HEAD~100`。

### git撤销修改

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。
场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。
场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考[版本回退](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)一节，不过前提是没有推送到远程库。

### 禁用Fast forward模式

通常，合并分支时，如果可能，`Git`会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。
如果要强制禁用`Fast forward`模式，`Git`就会在`merge`时**生成一个新的`commit`**，这样，从分支历史上就可以看出分支信息。

### 标签默认都只存储在本地
