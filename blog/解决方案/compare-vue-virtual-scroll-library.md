---
title: 比较 Vue 虚拟滚动库
date: 2025-08-21 10:18:10 +08:00
category:
  - 解决方案
tag:
  - Vue
---

# 比较 Vue 虚拟滚动库

## vue-virtual-scroller

> star 数：10346
>
> npm 下载量：260944
>
> npm 上次更新时间：2022-10-18
>
> npm：[vue-virtual-scroller](https://www.npmjs.com/package/vue-virtual-scroller)
>
> GitHub：[Akryum/vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)

应该是 star 数最多的一个 Vue 虚拟滚动库，支持的功能也挺多，支持定高和动态高度的虚拟滚动，`@vueuse/core` 也推荐在复杂情况下使用这个库，证明这个库应该是比较老牌的一个库。

这个库也有一些问题，更新时间比较久远了，上次更新还是三年前，发布的支持 Vue3 的版本还处于 beta，不过可能因为是这种类型的库在实现完成后，只要不出 bug 也没有一些新的功能需要维护了，因此更新频率比较低。还有就是这个库没有类型定义文件，第三方的类型定义文件有两份，都有一些问题，因此用的时候可能需要将 ts ignore 一下。

## vue-virtual-scroll-list

> star 数：4512
>
> npm 下载量：52118
>
> npm 上次更新时间：2023-05-29
>
> npm：[vue-virtual-scroll-list](https://www.npmjs.com/package/vue-virtual-scroll-list)
>
> GitHub：[tangbc/vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)

这个库相对来说接触比较少，看 demo 也还挺 ok 的，但是就是 star 数和下载量都比不上上面那个，同时就是也两年没更新了，同样没有类型定义文件。

## @tanstack/vue-virtual

> star 数：6275
>
> npm 下载量：667478
>
> npm 上次更新时间：2025-06-27
>
> npm：[@tanstack/vue-virtual](https://www.npmjs.com/package/@tanstack/vue-virtual)
>
> GitHub：[TanStack/virtual](https://github.com/TanStack/virtual)

大名鼎鼎的 tanstack 工具链下面的一块，以前这个是做 react 技术栈上面的工具的，比如路由和接口请求等工具，现在它将很多核心工具抽成了 core，然后去做适配器层，因此现在也有 vue 技术栈相关的工具了，`@tanstack/vue-virutal` 就是其中的一个。

它是通过 hook 的方式来计算出样式，因此这个库的灵活性会比较高一点，可以用在自己定义的一些 dom 结构上，就不限定 dom 层级结构了。举个例子，如果 table 本身是使用原生 `<table>` 标签的话，这个会比较方便。但它也需要结合它下面的 table hook 去使用，才能得到最好的效果。本质上就是要捆绑销售了，引入更多的包，带来一些维护成本和学习成本，这块就见仁见智了。

它的优势应该就是在于比较新，也有庞大的开源社区在维护，一些新功能的接入会比较快。

## @vueuse/core -> useVirtualList

> star 数：21532
>
> npm 下载量：3050324
>
> npm 上次更新时间：2025-08-18
>
> npm：[@vueuse/core](https://www.npmjs.com/package/@vueuse/core)
>
> GitHub：[vueuse/vueuse](https://github.com/vueuse/vueuse)

类似上面的库，用 hook 的方式提供的虚拟滚动，同样是计算元素宽高，提供动态的样式来实现虚拟滚动。

这个用起来比较简单，但由于它比较简单，因此它是不支持动态高度的，它自己也说动态高度建议使用 `vue-virtual-scroller` 这个库去实现更复杂的功能，一些比较简单的需求就可以用它来实现。
