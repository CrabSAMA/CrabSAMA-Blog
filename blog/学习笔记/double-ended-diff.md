---
title: 双端 Diff 算法
date: 2024-10-24 20:23:42 +08:00
category:
  - 学习笔记
tag:
  - 算法
  - diff算法
---

# 双端 Diff 算法

在使用简单 diff 算法的过程中，我们其实可以发现，它对 DOM 的移动操作不是最优的，有些时候它会产生较多无必要的 DOM 移动操作。此时双端 diff 算法出来了，它是一种同时对新旧两组子节点的两个端点进行比较的算法。

Vue2 中使用的就是双端 diff 算法。

- [ ] TODO 是谁提出的双端 diff 算法？https://www.zhihu.com/question/65824137/answer/235159117 看这篇文章里面提到应该是 cito.js 这个库首先提出了双端 diff 算法，让虚拟 DOM 这个领域的性能提升了一大截。

## 怎么做

下方判断相同节点的方式依然是与简单 diff 一样，判断 VNode 的 `type` 和 `key` 是否相同。

双端 diff 的过程是：

1. 找到新旧节点列表的头节点和尾节点，分别记录他们的顺序与虚拟节点引用
2. 旧头节点指针小于等于旧尾节点指针，且新头节点指针小于等于新尾节点指针，则循环
   1. 旧头节点 与 新头节点 进行对比
      1. 相同则直接打补丁，新旧头节点指针都向后走一步
      2. 不相同则到 2
   2. 旧尾节点 与 新尾节点 进行对比
      1. 相同则直接打补丁，新旧尾节点指针都向前走一步
      2. 不相同则到 3
   3. 旧头节点 与 新尾节点 进行对比
      1. 相同则打补丁，证明*当时* **旧的节点列表中的头节点**，现在处于**新的节点列表的最尾部**，因此将这个节点移动到旧节点列表的最后一个节点的后面，在移动完成后就是预期想要的效果
      2. 不相同则到 4
   4. 旧尾节点 与 新头节点 进行对比
      1. 相同则打补丁，证明*当时* **旧的节点列表中的尾节点**，现在处于**新的节点列表的最头部**，因此将这个节点移动到旧节点列表的第一个节点的前面，在移动完成后就是预期想要的效果
      2. 不相同则到 5
   5. 上面四种情况都不满足，属于非理想情况了，我们需要造出一种理想情况来。具体做法是在旧节点列表中找新的头节点。
      1. 找得到证明有可以复用的节点，此时这个节点在新的节点列表里面是第一个节点，而在旧的节点列表里面不是，需要将这个节点移到旧的节点列表的头节点之前，在移动完成之后它就是第一个节点了。同时我们需要将旧节点列表里面的节点置为 `undefined`，以证明我们已经处理过了
      2. 找不到证明这个节点不存在于旧节点列表中，属于是新的节点，因此需要进行挂载。挂载的位置就是节点列表的头部，因此挂载到旧节点列表中的头部节点前即可
3. 在循环结束后，旧节点列表或新节点列表中都有可能存在没有处理的节点
   1. 如果新节点列表中存在没有处理的节点，证明这个节点需要挂载，挂载的位置也是旧节点列表中的头部节点前方
   2. 如果旧节点列表中存在没有处理的节点，证明这个节点需要卸载，直接卸载即可

## 总结

双端 diff 的优势在于，对于同样的更新场景，执行的 DOM 移动操作次数更少。

时间复杂度？空间复杂度？

这里需要更多的指针去记录位置，是不是属于用空间换时间了呢？