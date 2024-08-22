---
title: H5开发遇到的问题
date: 2024-07-10 18:03:53 +08:00
category:
  - 解决方案
tag:
  - H5
  - iOS
---

# H5 开发遇到的问题

## ios 头部、底部安全区域

1. 通过 env + css 属性实现
2. 飞书小程序中，通过 api 获取到安全区域，自行设置 padding

## ios 禁止滚动溢出效果/橡皮筋效果

```css
body {
  /* 需要滚动的容器再添加 overflow: scroll */
  overflow: hidden;
}
```

## touch 事件 preventDefault 问题

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD

## ios input focus 放大效果禁止

```html
<meta name="viewport" content="maximum-scale=1" />
```

## ios 虚拟键盘问题（VisualViewport）

[iOS 键盘难题与可见视口（VisualViewport）API](https://juejin.cn/post/6844904078842019848?searchId=20240710173958156D696AE0B56F0F43E0)
