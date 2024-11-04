---
title: 快速 Diff 算法
date: 2024-11-04 16:54:56 +08:00
category:
  - 学习笔记
tag:
  - 算法
  - diff算法
---

# 快速 Diff 算法

快速 Diff 算法实测下来是性能最优的。本质上它包含了预处理的行为，借鉴了文本 Diff 中的预处理思路。

在最开始的时候，快速 Diff 先从新旧节点序列的头部和尾部分别进行比较，找到头部和尾部有哪些节点是不需要移动的，直接更新即可。在做完了这一步之后，新旧节点序列都会剩下一部分节点，这部分节点有可能可以通过直接新增节点或者卸载节点进行处理。

在做完上述处理后，剩下的节点都需要进一步的处理。无论是简单 Diff 算法、快速 Diff 算法，还是快速 Diff 算法，处理规则都是：

- 判断是否有节点需要移动，以及应该如何移动；
- 找出那些需要被添加和移除的节点。

剩下的这一部分节点就需要我们根据节点的索引关系去判断：哪些节点需要移动、它们需要怎么移动。

在这之前我们需要构建一个数组 source，这个数组用于存储**新的一组子节点在旧的一组子节点中的位置索引**。在构建的过程中我们一开始通过双层循环来构建，这样时间复杂度会比较高 `O(n^2)`，因此我们可以用空间换时间，构建一个**索引表**，key 值是新节点列表中节点的 key，value 值是新节点列表中节点的索引，在遍历旧节点列表时就可以直接通过索引表，借助 key 值找到这个节点在新节点列表中的索引。在完成后时间复杂度会降为 `O(n)`。

判断哪些节点需要移动和前面学到的简单 Diff 算法类似，通过一个新节点序列中的**最大索引值**来判断是否有节点需要移动。当判断到有节点需要移动的时候，我们需要知道它需要移动到哪里。

此时我们需要引入一个**最长递增子序列**的概念，最长递增子序列是指：给定一个数值序列，找到它的一个子序列，并且这个序列中的值是递增的，这个子序列不需要是连续的。举个例子，[ 0, 8, 4, 12 ] 这个序列，[ 0, 8, 12 ] 是递增子序列，[ 0, 4, 12 ] 也是子序列，但 [ 0, 8, 12 ] 就是最长递增子序列。

最长递增子序列有一个很重要的意义：在新的一组子节点中，最长递增子序列的这些节点的前后顺序没有发生变化。换句话说，最长递增子序列的这些节点不需要移动。

在上面构建的 `source` 数组中找到最长递增子序列后，我们就可以确定下来具体是哪些节点需要移动。为了完成节点的移动，我们定义两个指针，一个指针 i 指向「新的节点列表中未处理节点列表」中的最后一个节点；一个指针 s 指向最长递增子序列中的最后一个元素。随后使用 for 循环令 i 向前移动，以便能够逐个访问新的一组子节点中的节点。

在 for 循环中我们会判断 `source[i]` 是否为 -1，如果是 -1 的话证明这个节点在旧节点列中不存在，因此直接插入即可，插入的位置通过 i 计算出来，然后通过 `patch` 更新插入；然后再判断 `seq[s]` 是否等于 i，如果等于的话证明当前处理到的节点不需要移动，将 s 向前移动一步，如果不等于的话证明当前处理到的节点需要移动，这里移动的方法和上面插入节点逻辑是差不多的，唯一的不同就是这里使用 `insert` 进行插入，同样是通过 i 计算出插入位置，借助锚点插入。

在完成上述操作之后，Diff 过程结束，更新完成。

其实我理解在计算最长递归子序列之后的步骤就没有用到旧的节点序列了，旧的节点序列是用来和新的节点序列对比判断哪些节点需要移动，具体移动到哪里，我们借助新的节点序列能直接找到位置，新节点序列中的节点 VNode 对象也有对应的 el 指向 DOM 引用，此时使用 DOM 操作将 DOM 移动到新的位置即可。

## 计算最长递归子序列

https://juejin.cn/post/7324862242335834164?searchId=202411011021051910494AD535A5E9B9AA

```typescript
function getSequence(arr) {
  const len = arr.length
  const result = [0]
  // 结果集中最后元素的索引
  let resultLastIndex

  // 回溯列表，记录每个节点的前驱节点的索引
  const p = new Array(len).fill(0)
  // 贪心算法，找到局部最优解
  for (let i = 0; i < len; i++) {
    let current = arr[i]
    // 0 代表创建新元素，无需进行位置移动操作
    if (current !== 0) {
      resultLastIndex = result[result.length - 1]
      // 当前这一项比最后一项大则直接放到末尾
      if (current > arr[resultLastIndex]) {
        // 记录索引
        result.push(i)
        // 因为这个是在后面的位置插入，所以前置节点就是 resultLastIndex
        p[i] = resultLastIndex
        continue
      }
      // 否则就需要通过二分查找法找到需要替换的位置
      // 递增序列中二分查找法是最快的
      let start = 0
      let end = result.length - 1
      let middle
      while (start < end) {
        // 按位或运算会将小数截断
        middle = ((start + end) / 2) | 0
        // result[middle] 是索引，拿索引去 arr 中取值
        if (current > arr[result[middle]]) {
          start = middle + 1
        } else {
          end = middle
        }
      }
      // 找到了需要替换的位置 start / end，此时 start 和 end 一般都是指向同一个位置
      // 再次判断 current 是否满足条件，满足条件则直接进行换位
      if (current < arr[result[start]]) {
        result[start] = i
        // 记录交换完之后，节点的前置节点的索引值
        p[i] = result[start - 1]
      }
    }
  }
  // 在上面的步骤执行完成后，得到的 result 最长递归子序列长度是没问题的
  // 但是有可能具体的节点顺序有问题，因此我们需要纠正过来
  // 通过记录的前置节点回溯列表，替换掉错误的节点
  let i = result.length
  // 从 result 的最后一项开始向前回溯
  let last = result[i - 1]
  while (i > 0) {
    i--
    // 倒序追溯
    result[i] = last
    // last 指向当前节点的前驱节点
    last = p[last]
  }
  return result
}
```

总体来说用到了**贪心算法**+**二分查找**，最后使用**前驱节点追溯**替换掉错误的节点。

首先通过贪心算法对传入节点数组进行遍历，如果找到的节点大于当前节点序列最后一项的值，则直接进行插入；否则就需要通过二分查找法找到当前值需要替换的位置。

在处理完成之后，得到的一条序列不一定是正确的最长递增子序列，但是可以保证长度是正确的，即是最长的。

这时我们需要通过前驱节点追溯的方式对序列进行处理，首先我们需要在节点序列操作时记录当前操作节点的前驱节点，即在节点序列 `result` 插入值和替换值时都需要进行记录。在最后我们会对这个序列从后向前进行回溯，最终找到正确的最长递增子序列。

---

Vue 3 的源代码：https://github.com/vuejs/core/blob/76c43c6040518c93b41f60a28b224f967c007fdf/packages/runtime-core/src/renderer.ts#L2491

```typescript
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr: number[]): number[] {
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
```
