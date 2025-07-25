---
title: 初识MCP
date: 2025-03-21 16:28:52 +08:00
category:
  - 日志随笔
tag:
  - AI
  - MCP
  - 大模型
---

# 初识 MCP

最近组内掀起了学习 AI 相关知识的风潮，大家都在分享自己看到的 AI 相关内容。

[Vue Hook Optimizer + AI: 探索 Vue 组件代码优化的新境界](https://juejin.cn/post/7481463851298603059)

[Vite 成为首个接入 AI 的构建工具！](https://mp.weixin.qq.com/s/LU3lUHtZGRyGoNgVZyAyfA)

这两篇文章都是周内大家分享出来的内容，里面都提到了一个概念：MCP（Model Context Protocol）。

> [MCP 终极指南](https://guangzhengli.com/blog/zh/model-context-protocol/)
>
> [一文看懂：MCP(大模型上下文)](https://zhuanlan.zhihu.com/p/27327515233)
>
> 借助这两篇文章开始了解 MCP 是什么。

MCP(Model Context Protocol 模型上下文协议)，本质上其实就是一种约定的协议，开发者都可以根据这个协议去实现自己的 SDK。这个协议是由 Anthropic 推出的，旨在统一 LLM 与外部数据源和工具之间的通信协议。

最简单的场景是，我们平时看到一段报错的代码，想要借助大模型搞明白为什么报错和如何修复，现在的工作流程是：复制报错代码，粘贴到大模型聊天窗口与大模型进行聊天，大模型返回回答结果，复制修复的代码，粘贴回项目，运行项目查看修复结果，推送到 Git 打包上线。这里面充斥着复制粘贴的操作，还有与 Git 相关的操作，最理想的情况肯定是我们看到错误，点一下就直接能看到修复结果，再点一下就能推送到 Git，岂不美哉？

MCP 的出现使这样的愿景有了可能。借助 MCP 我们可以实现自己的 MCP Server，打通大模型与外部系统和资源。在之前我们与大模型的交互都来自复制粘贴，MCP 提供了一种协议，我们只需要按照这种协议去实现代码，大模型就能通过 MCP 获取到输入内容。以上面的例子为例，大模型就可以直接通过 MCP 获取到浏览器的报错，然后通过 MCP 将修复后的代码回填到项目中，再通过 MCP 触发本地开发服务的启动并打开浏览器，这一切都能自动化地实现。（当然我觉得这十分美好，可能真正实现起来没有这么顺利 😂）

MCP 本质上是大模型与数据（这里的数据是一个宽泛的概念，本地的数据库是数据，代码是数据，报错信息是数据，具体业务服务也可以是数据）之间的一条桥梁，通过这条桥梁，大家都遵守协议，就能实现万物互联。

- [ ] 对比 MCP、Function Calling、AI Agent 是件难事，我自己也还没搞明白，这里就先留个 TODO 了。

---

和同事交流了一下，有了个清晰点的概念：

首先 AI Agent 是一个大宽泛的概念，AI Agent 是一个有自我意识、自驱力实现需求的概念，那要如何实现呢？MCP、Function Calling 这些就是它的工具。

MCP 是一个协议，本质上有点像 HTTP 协议，Function Call 就是具体的实现，要类比的话我觉得 MCP Server 和 Function Call 更像是同一个概念的东西，都是根据协议实现的成品。

![mcp protocol](https://storage.guangzhengli.com/images/MCP.png)

这里是 MCP 官方的架构图，总共分成了五个部分：

- MCP Host：Host 指的是启动 LLM 连接的应用程序，举个例子我们通过 cursor 去调用大模型，那 cursor 就是 host。
- MCP Client：客户端用于在 Host 内部维护一个与 Server 的 1:1 连接。
- MCP Server：Server 就是实际提供服务的地方，通过 MCP 协议，为 Client 端提供上下文、工具和资源等。
- Local Data Source：本地的文件、数据库和服务等。
- Remote Service：外部（远端）的文件、数据库和服务等。

在我看来，这就是一个经典的 C/S 架构，Client 作为桥梁，在 Host 和 Server 之间通信。Server 层对 Client 层屏蔽具体实现，只是通过 MCP 协议告诉 Server 我要什么，然后 Server 根据 MCP 协议返回指定的内容到 Client，Client 再与 Host 交互。

如果我们使用 Function Calling，那么需要通过代码给 LLM 提供一组 functions，并且提供清晰的函数描述、函数输入和输出，那么 LLM 就可以根据清晰的结构化数据进行推理，执行函数。

而我们使用 MCP，MCP Server 会注册到注册中心上，通过向量将 description 等建立索引，LLM 会根据分类索引判断是否需要外部工具（我个人觉得跟 RAG 的原理相似），再从注册中心中取得工具并使用。

无论是 Function Calling 还是 MCP Server，LLM 要知道何时使用哪个 tool，都得益于它自身的意图识别与语义理解功能，或者我们也可以通过指定 prompt 的方式让 LLM 确定去用指定的 tool？

---

2025-06-06 update：

部门内部有在尝试使用 MCP 去实践做一些业务场景，但是还是只停留在使用 MCP Server 去调用接口获取数据的层面。

和 leader 聊了下，如果是这种 case 的话，MCP Server 目前还没看到有十分明确的必要性，在场景固定的情况下，其实直接使用 HTTP 请求去获取到数据然后跟大模型进行交互，在大模型开发落地情况下还会更加快速，leader 认为**快速落地验证**才是大模型开发的要点。

但 MCP 在 agent 场景还是很有用的，因为 agent 需要分步骤去做很多件事情，MCP 提供出来的 tools 能被大模型识别并判断什么时候该去调用什么工具，这是有利用到大模型的语义识别能力的，继续走下去到 agent to agent 的路线的话就更需要 MCP 的存在，目前来看我们公司的场景走得还没够深，还没用到这些技术，自然 MCP 看起来就没有那么必要了。
