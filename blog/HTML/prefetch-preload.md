---
title: prefetch和preload
date: 2020-08-13T11:33:02.0000000+08:00
lastUpdated: true
categories:
 - HTTP
---

[牛客真题](https://www.nowcoder.com/test/question/done?tid=35895019&qid=643152#summary)
[知乎解析](https://zhuanlan.zhihu.com/p/48521680)

## **preload 提前加载**

`preload`顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用时立即执行，无需等待网络的消耗。
**当浏览器解析到这行代码就会去加载 href 中对应的资源**，但不执行，待到真正使用到的时候再执行。

```html
<!-- 使用 link 标签静态标记需要预加载的资源 -->
<link rel="preload" href="/path/to/style.css" as="style">
```

## **prefetch 预判加载**

`prefetch` 跟 `preload` 不同，它的作用是告诉浏览器未来可能会使用到的某个资源，**浏览器就会在闲时去加载对应的资源**，若能预测到用户端的行为，比如懒加载，点击到其他页面等则相当于提前预加载了需要的资源。

```html
<!-- link 模式 -->
<link rel="prefetch" href="/path/to/style.css" as="style">
```

## **更多细节点**

当一个资源被 `preload` 或者 `prefetch` 获取后，它将被放在内存缓存中等待被使用，如果资源位存在有效的缓存击中（如 `cache-control` 或 `max-age`），它将被存储在 `HTTP` 缓存中可以被不同页面所使用。
正确使用 `preload`/`prefetch` 不会造成二次下载，也就说：**当页面上使用到这个资源时候 `preload` 资源还没下载完，这时候不会造成二次下载，会等待第一次下载并执行脚本**。
**对于 `preload` 来说，一旦页面关闭了，它就会立即停止 `preload` 获取资源，而对于 `prefetch` 资源，即使页面关闭，`prefetch` 发起的请求仍会进行不会中断。**

**preload** 是告诉浏览器页面必定需要的资源，浏览器**一定会加载**这些资源，而 **`prefetch`** 是告诉浏览器页面可能需要的资源，浏览器**不一定会加载**这些资源。所以建议：对于当前页面很有必要的资源使用 `preload`，对于可能在将来的页面中使用的资源使用 `prefetch`。
