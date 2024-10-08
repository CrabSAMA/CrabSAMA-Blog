---
title: 比较 electron 和 tauri
date: 2023-03-20 10:22:37 +08:00
category:
  - 日志随笔
tag:
  - Electron
  - Tauri
---

# 比较 electron 和 tauri

## 背景

### Electron

Electron 是一个使用 JavaScript、HTML 和 CSS 等 Web 技术创建原生应用程序的框架。它负责处理困难的部分，因此您可以专注于应用程序的核心。如果您可以构建网站，则可以构建桌面应用程序。

### Tauri

Tauri 是一个框架，用于为所有主要桌面平台构建微小、极快的二进制文件。开发人员可以集成任何可编译为 HTML、JS 和 CSS 的前端框架来构建他们的用户界面。应用程序的后端是一个来自 rust 的二进制文件，带有一个前端可以与之交互的 API。

## 安装包 / 打包

由于 tauri 基于 rust，打包后不包含 chromium 而使用系统自带的 webview，同时会将代码文件打成二进制字节码，因此在这块 tauri 直接完全胜利，同一套代码打包出来的文件，tauri 安装程序约为 6.8MB（抄的），electron 安装程序约 200MB 以上，基本上都是 30 倍的差异。

## 应用后端

在 electron 中，与系统相关的后端逻辑（也就是指 fs、path 等底层能力）可以直接使用 node.js 写，因为 electron 使用的就是 node.js 运行时；但在 tauri 中，它是基于 rust 编写的，虽然它提供了 `@tauri-apps/api` 暴露出去大多数 api，可以直接通过 JavaScript 调用，但实际使用下来，由于部分安全策略和其他限制，涉及到更底层的逻辑就需要使用 rust 去编写了。

这一块，如果你很熟悉 rust，那我觉得不是问题，但如果你更熟悉 node.js，学习 rust 和使用 electron 就任君选择了~

## 渲染层

electron 使用 chromium 渲染，基本上可以保证在 Windows、Linux、macOS 上看到的内容相同，而 tauri 使用系统 webview 渲染：Windows 上的 Edge Webview2 (Chromium)、Linux 上的 WebKitGTK 和 macOS 上的 WebKit。Safari 在现在这个时代就像旧时代的 IE，它总有一些这样那样的问题。在兼容性上，electron 获胜，代价是更大的包体积。

## 安全性

相对来说，我认为 tauri 是更安全的，它启用了一系列的安全配置去维护软件的权限，并且需要显式地公开 rust 函数才能在渲染层去调用。而使用 electron，我们可以直接完全使用 node.js api，高度灵活性带来的就是安全性的削弱。

## 上手难度

electron 上手难度会简单点，现在大多数的前端开发工程师更熟悉的是 node.js，它开箱即用的 node.js api 可以更灵活地编写一些后端逻辑；而在 tauri 中，如果它提供的 api 并不能让你满意，你就要被迫去编写 rust 代码，rust 是一种类型完善的语言，你需要去重新学习 rust 相关的知识。虽然能力强大，但是成本也大。

## 其他对比

- 同样使用 vite + react 作为渲染层，pnpm 作为包管理器的情况下，electron 需要一个 vite plugin 来支持，同时 `package.json` 中 type 不能设置为 `module`，并且由于 electron 打包的限制，我们需要将 pnpm 设置为非链接模式，这会导致 pnpm 在空间上的优势荡然无存；而 tauri 不存在上述的问题，因为它不影响渲染层的打包，后端层将直接使用 rust 进行打包。
