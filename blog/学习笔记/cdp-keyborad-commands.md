---
title: Chrome Devtool Protocol 模拟组合键
date: 2024-12-15 15:49:29 +08:00
category:
  - 学习笔记
tag:
  - Chrome Extension
  - RPA
---

# Chrome Devtool Protocol 模拟组合键

使用 CDP 模拟键盘操作时，涉及到一些组合键的 case 时，需要关注 `Input.dispatchKeyEvent` 中的 `commands` 属性。

最开始的时候我是直接通过 CDP 发送指定的组合键，并没有传 `commands` 属性，然后发现按键事件是成功发送了，但是并没有触发全选、复制、粘贴等操作，但我使用 playwright 去测试的时候，却发现 playwright 的模拟按键操作可以实现。我们知道 playwright 也是基于 CDP 实现的模拟操作，因此我去查看了 playwright 的源码，发现了 `commands` 属性是解决问题的关键。

比如在发送 Command + A 这种组合键时，它意味着全选，所以我们需要在 `a` 键 `keydown` 时发出 `selectAll` 的 command，就可以实现发送组合键实现全选的行为，如果不带上这个 command 浏览器将不会执行全选这个行为。

参考 playwright 中有这个映射表：
https://github.com/microsoft/playwright/blob/d4ad520a9bf0fea78b610c065af0b0c896229666/packages/playwright-core/src/server/macEditingCommands.ts

这里面列出来了组合键对应的浏览器 editor 行为。

全部行为可以在 CDP 文档中提供的这个链接看到：
https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h。

同时在查看 playwright 源码的时候也有额外的收获：

通过看 playwright 源码发现它的实现是一个 client server 模型，client 是跑测试代码的地方，然后 client 给 server 发信息通信，告诉 server 发 CDP 命令给到浏览器。所以我直接在 client 打断点看不到对应的 CDP 命令，我跑到了 server 端那里打断点和 log 最后才看到关键点在 commands 这个属性上。

playwirght 键盘映射：
https://github.com/microsoft/playwright/blob/d4ad520a9bf0fea78b610c065af0b0c896229666/packages/playwright-core/src/server/usKeyboardLayout.ts

上面这个键盘映射的 map 可以用到自己的项目中，就不用每次都要通过 event 反推具体某个键的 `keyCode` 和 `key` 了。
