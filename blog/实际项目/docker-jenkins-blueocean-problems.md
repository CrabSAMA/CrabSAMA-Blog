---
title: docker 方式部署的 jenkins 使用 blueocean 方式持续部署并打包回传宿主机遇到的坑一览
date: 2022-05-10 19:30:32 +8
lastUpdated: true
categories:
 - 实际项目
---
- `docker` 方式部署 `jenkins`，若需要使用 `blueocean` 请务必在启动容器时带上 `-v /var/run/docker.sock:/var/run/docker.sock` 命令，否则将会导致找不到 `docker` 进程。
- 由于使用的是 `gitee`，`blueocean` 方式下需要通过 `ssh` 模式连接仓库，涉及到 `ssh` 公钥和私钥生成的问题。在 `jenkins` 中配置 `ssh` 的私钥时切记！要将私钥文件中的**所有内容**（包括开始的第一行和最后一行）复制进去。
- 由于使用 `docker` 方式部署 `jenkins`，本身 `jenkins` 和实际运行环境（宿主机）是相互隔离的，因此打包好的文件要想办法回传到宿主机并运行起来。这里采用了 `jenkins` 的一个插件 `publish over ssh`。由于 `blueocean` 仍然不够完善的原因，在 `GUI` 选择     `ssh` 时没有可以配置的选项，因此我们需要查看[这个文档](https://www.jenkins.io/doc/pipeline/steps/publish-over-ssh/#publish-over-ssh)，通过自行编辑 `Jenkinsfile` 文件来进行配置。
- 在系统配置中配置 `ssh` 时，要知道如何访问到宿主机，换句话说就是要知道宿主机的地址。我们可以通过通过 `ifconfig` 找到 `docker0` 这张网卡的 ip 地址，通过 ip 地址就可以访问到宿主机啦。（在 `docker` 网络模式是默认 bridge 模式下是可行的，其他模式还需要探索）
- `publish over ssh` 插件中的 `sourceFiles` 配置是基于 `workspace` 目录下的，而推送到的主机因此如果需要将目录下的所有文件推过去，要使用 `**`。