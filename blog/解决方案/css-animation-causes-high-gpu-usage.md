---
title: css 动画导致 gpu 占用高
date: 2022-12-02 16:15:00 +08:00
category:
  - 解决方案
tag:
  - CSS
  - 性能优化
---

## 背景

![image-20221202141652806](./img/image-20221202141652806.png)

有同学反映「权限申请」按钮的动画效果会导致 GPU 占用高的问题，在我的 m1 macbook pro 13 上表现为占用 20~25%，但是那位同学说在他电脑上占用率高达 130%，因此想搞明白为什么 animation 会导致 GPU 占用如此高。

```less
@keyframes flowlight {
  // 0% {
  //   background-position: 0 0;
  // }
  100% {
    background-position: -400% 0;
  }
}

// 按钮的类名
.permission-url {
  background-image: linear-gradient(
    -89deg,
    #fcab9b,
    #f1d3af,
    #afc9f1,
    #bb9cfc,
    #fcab9b
  );
  background-size: 400%;
  animation: flowlight 3.5s linear infinite;
}
```

## 思路

### 高性能动画

拿着 `css animation background gpu` 的关键词去 google 上搜会有很多结果，在其中我看到了一个如何实现高性能 CSS 动画的文章（[链接](https://web.dev/animations-guide/#triggers)）。在里面提到了要避免属性变更导致的重绘和回流，因此问题的思路就转变到我们动画变更的属性上了。

### 重绘和回流

在最初学习前端的时候，我们就会了解到涉及 DOM 的两种行为：重绘（repaint）和回流（reflow）。回流总会引发重绘，而重绘不一定导致回流，因此很明显重绘的开销是比回流少的。就是这一个「少」字，我们往往认为尽力避免回流即可，重绘的开销一般可以忽略不计。但事实真的如此吗？

要了解重绘和回流，我们首先要知道具体哪些 css 属性的变动会引发重绘和回流。有一个网站里面列出了常见的属性触发后的行为（[链接](https://csstriggers.com/)），由于代码里面用到了 `background-position` 属性，我们就直接看看这个属性会触发什么：

> ## background-position
>
> Changing `background-position` does not trigger any geometry changes, which is good. But since it is a visual property, it will cause **painting** to occur. Painting is typically a super expensive operation, so you should be cautious.
>
> Once any pixels have been painted the page will be **composited** together.

意思是这个属性不会触发回流，但是由于是一个视觉属性，所以会触发重绘，**重绘也是一项昂贵的操作**，所以我们应该注意。

这还是我第一次知道，重绘其实也是一项高开销的操作，而动画会定期改变属性，导致不断触发重绘，最终就会表现为 GPU 占用高。

## 解决方案

TODO...
