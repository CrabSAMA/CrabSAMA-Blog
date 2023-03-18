---
title: 多人协作
date: 2020-06-09T21:59:19.0000000+08:00
category:
  - 实际项目
  - 经验
tag:
  - git
---

多人协作的工作模式通常是这样：
1.  首先，可以试图用`git push origin <branch-name>`推送自己的修改；
2.  如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
3.  如果合并有冲突，则解决冲突，并在本地提交；
4.  没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功！
如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。

## 个人做法（大学时期）

一般我会先`commit`自己的代码，将代码放进暂存区，保证安全；

然后`git pull`获取最新的代码，如果有冲突则进行合并；

最后进行`git push origin <branch-name>`，将代码推送到远程分支。
