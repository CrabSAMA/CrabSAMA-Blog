---
title: electron 初体验
date: 2023-03-20 10:49:55 +08:00
category:
  - 日志随笔
tag:
  - Electron
---

# electron 初体验

## 背景

在搭建基于 vuepress 的博客时，由于框架是基于 markdown 中的 frontmatter 来获取元数据，现在文章数量大，杂糅着不规范的 frontmatter，有些甚至没有写 frontmatter，因此下意识就想写一个可视化的 frontmatter 编辑器。

由于这里面需要文件读写等操作系统权限，使用 web 应用会捉襟见肘，因此第一时间想到的就是使用 electron 来实现，顺便也可以实践一下 electron。

## 架构模型

### 主进程

每个 electron 应用都有一个单一的主进程，作为整个应用程序的入口。主进程运行在 node.js 环境中，意味着它具有 `require` 模块和使用所有 node.js api 的能力。

主进程一般做的事情就是使用 `BrowserWidnow` 模块创建和管理应用程序窗口，这里面一般放着我们实际的 Web 应用。

### 渲染器进程

每个 electron 应用都会为打开的 `BrowserWindow` 生成一个单独的渲染器进程。由于渲染器的性质，导致了它无权访问 node.js 环境相关的 api，如果渲染器进程想与 node.js 和 electron 的原生桌面功能进行交互的话，就需要用到**进程间通信**的知识了。

### Preload 脚本

预加载（preload）脚本包含了那些执行于渲染器进程中，且先于网页内容开始加载的代码 。 这些脚本虽运行于渲染器的环境中，却因能访问 Node.js API 而拥有了更多的权限。

Preload 脚本与渲染器共享着一个全局 `window` 对象，但我们不能直接从中附加任何变动到 `window` 上，因为这默认存在语境隔离（Context Isolation）的限制，这避免泄露任何特权相关的 API 到网页内容代码中。

取而代之，我们要使用 `contextBridge` 模块来交互：

```typescript
// preload.ts
import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  // something...
})
```

```typescript
// renderer.ts
console.log(window.electronAPI)
// => { something... }
```

一般来说，我们会通过在这里面注入一些方法，使渲染层可以通过消息通信的方式调用主进程的方法。

### 效率进程

类似 webworker 的概念，可以 fork 一些子线程来做一些计算密集型的任务。

## 进程间通信

进程间通信（IPC）是 electron 中重要的一个概念，由于 electron 的多进程机制，导致各进程间的通信必须依赖 IPC，例如渲染器进程想调用 electron api 或者主进程触发页面上的一些变更，都需要 IPC 帮忙。

electron 的 IPC 通过 `ipcMain` 和 `ipcRender` 模块作为通信的通道。一般我们的通信分成单向和双向，单向一般指不要求返回信息，双向一般指调用后需要等待返回的信息。

### 渲染器进程到主进程（单向）

1. 主进程 `ipcMain.on` 监听事件
2. 通过 preload 脚本暴露 `ipcRenderer.send`

### 渲染器进程到主进程（双向）

1. 主进程 `ipcMain.handler` 监听事件
2. 通过 preload 脚本暴露 `ipcRenderer.invoke`

### 主进程到渲染器进程

1. 主进程使用 `webContents` 模块发送消息
2. 通过 preload 脚本暴露 `ipcRenderer.on` 
3. 渲染器进程使用 `ipcRenderer.on` 监听消息
4. （可选）在渲染器进程中，使用 event 参数的 sender 对象将回复发送回主进程，此时主进程需要监听对应的事件

## 经验

### vite 在 electron 中的使用

使用 plugin：`vite-plugin-electron`

- electron 尚未支持 `"type": "module"`，因此需要将 vite 默认的 module 去掉。
- 默认会报找不到 "path" 模块，安装一个 `@types/node` 即可。

### electron 选择文件/文件夹

使用 electron 原生的 `dialog` 模块。

### typescript 扩展 window 全局对象

创建一个 `renderer.d.ts` 类型声明文件，并且全局扩展 `Window` 接口。

```typescript
interface electronAPI {
  openSelectDirDialog: () => Promise<void>
  getFrontMatter: (markdownPath: string) => Promise<matter.GrayMatterFile<string>>
}


interface Window {
  electronAPI: electronAPI;
}
```

这样就可以保证我们在编写渲染进程的代码时，typescript 编译器将会判断出来正确的类型。

### electron + pnpm 打包报错

> [github issue](https://github.com/electron-userland/electron-builder/issues/6289#issuecomment-1042620422)

如果要在 pnpm 下打包 electron 应用，需要在 .npmrc 中进行配置，使 pnpm 不使用软链接的方式进行包管理，才能使 electron 获取到对应的 npm 包。

### react 更改数组中某一项

使用 ... 拓展运算符将原来的值拷贝一份，然后在新数据上操作，操作完成后调用 setState 更新状态。

### typescript 索引类型

TODO

### 文本标签遇到 /n 换行

css 属性 `white-space: pre-line`

### Windows 下隐藏菜单栏

`win.removeMenu()`