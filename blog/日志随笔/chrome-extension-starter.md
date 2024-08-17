---
title: 来写一个 chrome extension
date: 2022-08-12 17:58:40 +08:00
star: true
category:
  - 日志随笔
tag:
  - chrome extension
---

> 照惯例，先上篇参考文章：
>
> [关于 chrome 拓展开发的实践与思考(一) - 掘金 (juejin.cn)](https://juejin.cn/post/7115201075803586574)
>
> 这是一个作者写的系列文章，帮助了我很多，在此感谢~

## 背景

项目中新需求开发，往往会有接口的新增，然后我们一般要手动去 `UAC` 手动录资源，这个过程比较繁琐而且容易遗漏，再加上 `UAC` 越更新是越不好用了，因此我手动写了一个 `cli` 来处理这个事情，但发现 `cli` 还是不够智能和好用，最后想到的就是 `chrome extension`，可以取 `cookie`、发请求、获取 `DOM`，最重要的是它也在浏览器，会比较地一体化。

## 起步

在查阅了文章后，了解到拓展其实本质上也是一个 `js` 应用，提供了用户界面、状态管理、生命周期和 `chrome` 的一些 `api`。

首先要了解的是 `manifest.json`，这是拓展的一个描述文件，`chrome `通过读取该文件的内容来实现我们拓展的功能与展示。具体配置这里不赘述了，直接上一个比较简洁的版本：

```json
{
  "manifest_version": 2,
  "name": "UAC Extensions",
  "description": "自动识别 knife4j 接口文档，添加到 uac 资源中",
  "version": "1.0",
  "icons": {
    "16": "image/icon.png",
    "48": "image/icon.png",
    "128": "image/icon.png"
  },
  "browser_action": {
    "default_icon": "image/icon.png",
    "default_popup": "popup.html",
    "default_title": "🤖"
  }
}
```

这里面只包含基础的配置项，指定了图标的指向，还有一个 `html` 文件。这里这个 `html` 文件其实就是点击拓展弹窗的页面，因此我们的目录结构可以这样组织：

```js
├── image
│   └── icon.png
├── js
│   ├── main.js
├── manifest.json
├── popup.html
└── styles
```

**tips:** 更改 `popup.html` 和其引入的 `js` 代码后无需重新打包，只需要点击右上角插件 icon 再次开启关闭即可。（其他文件会有例外哦）

## 进阶

因为我的技术栈是 `Vue` ，很自然地我就想用 `Vue` 来写这个应用。那接下来我要引入 `Vue` 和 `ant-design-vue`，这里面有两种方法：一种就是像平时一样，通过 `webpack` 或者 `vite` 将应用打包，另一种就是直接编写原生 `js` 代码，通过 `CDN` 直接引入对应的文件。这里因为是刚起步，选择了较为简单的 `CDN` 引入。虽然是说简单，但是这其中也遇到了不少坑，这里我们来记录一下。

### 不支持行内 `script`

由于拓展的限制，拓展是不支持直接在 `html` 里面写行内 `script` 的，因此我们都需要将 `js` 代码写到一个独立的文件中，然后在 `html` 中通过 `script` 标签引入。

### 引入 `Vue`

直接引入 `js` 会报这个错误：`Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.`意思是你要声明引入的文件路径，因此我们需要在 `manifest.json` 里面添加这一行：

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

感觉是 `Vue` 有用到一些渲染的 `api`，被谷歌认为不安全，因此直接引入 `Vue` 使用后会报一个错误：`Uncaught EvalError: Refused to evaluate a string as JavaScript because ‘unsafe-eval’ is not an allow`。同样的，上面那一行可以解决这个问题，但是我更改后没有重新引入拓展，所以导致不生效。

需要注意的是：修改了 `manifest.json`，不是马上生效的，要删除拓展并重新引入后才会生效。

### 状态持久化

在 `Vue` 中声明了一些 `data` 并通过操作使数据变更了，但是拓展一开一关，哎发现数据没掉了，证明其实每次打开和关闭都等于销毁了整个 `html`，那很自然地我们会想到要将数据持久化，这样就涉及到下面的两个概念了：

**生命周期：** 拓展弹出的界面的完整周期只有它展示在界面的那段时间(有点废话)，也就是说，拓展在关闭重新打开后，它的函数也跟着重新刷新，页面也重新渲染，这也就是重新打开后数字变回了 0 以及控制台自动消失的原因，对于这点你也可以类比我们的`chrome`浏览器。当浏览器关闭时，控制台也会随之消失。那有没有即使插件关闭了，数据不丢失的方法？有的，`background.js`。

**`background.js`:** 你可以理解为会一直常驻的后台`JS`或后台页面，它的生命周期与拓展的`default_popup`（即拓展弹出页面）不同，只有当**浏览器彻底关闭**时，它的生命周期才会结束，我们可以利用该特性完成我们的需求。

在 `manifest.json` 中写入这一行：

```json
"background": {
  "scripts": ["js/background.js"] //注意引用路径
}
```

然后在 `background.js` 中写：

```js
const value = {}
```

因为我们用的是 `Vue` ，在 `mounted` 生命周期中做处理：

```js
mounted() {
  const bg = chrome.extension.getBackgroundPage()
  if (bg.value !== undefined) this.formState = bg.value
}
```

我们可以通过 `chrome.extension.getBackgroundPage()` 获取到 `bg` 对象，下面就是 `background.js` 中的所有属性，直接操作即可。

### 获取页面 `DOM`

拓展弹出页面是一个独立的实例，是没办法直接访问到页面中的数据的，因此我们需要去了解一下拓展与页面间的**通讯机制**。

在这里我们还需要了解一个概念：`content-script`。这个是直接插入到页面中的代码，可以在这里面对页面进行很多操作。

首先需要在 `manifest.json` 中添加下面的内容：

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["js/content.js"],
    "run_at": "document_end"
  }
]
```

上面需要解释的其实就只有 `matches` 和 `run_at` 两个属性，前者指代在什么页面中才会插入，后者指的是插入的时机，因为我们现在的需求是要获取 `DOM`，因此我们要在页面加载完成后插入，也就是 `document_end` 这个时机插入。

到现在我们会有三个 `js` 文件了，分别是 `popup.js` ——拓展弹窗页面的逻辑；`background.js`——拓展后台生命周期的逻辑；`content.js`——插入到页面中的逻辑。这三者之间就通过 `chrome` 提供的消息 `api` 进行通信。

接下来我们来说通讯机制，这里其实分成几种情况：

- `popup` 与 `background`

  `popup` -> `background`：上面已经说过这种情况了，我们直接通过 `chrome.extension.getBackgroundPage()` 获取到相应对象就可以进行操作啦~

  `background` -> `popup`：一般比较少这种情况，因此本文先省略。

  > **tips**:注意，V3 版本中`getBackgroundPage`方法不再适用，笔者在尝试中发现返回了`undefined`。相互通信建议使用`chrome.runtime.sendMessage` & `chrome.runtime.sendMessage`。笔者因为一直使用 V2 版本，结果今天尝试使用 V3 实践时遇到了很多坑点，且 V2 版本在 2023 年即将弃用，建议多看看官方文档。

- `popup` 与 `content`

  `popup` -> `content`：这就是这一段的重点，我们需要在 `popup` 中获取到 `DOM`，因此需要 `popup` 向 `content` 发送一个消息，告诉 `content` 去找对应的 `DOM`。

  下面直接上代码：

  ```js
  // popup.js
  // 因为 chrome 有很多个标签页，因此我们需要找到真正需要通信的 tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 找到之后，通过 sendMessage 发送消息
    chrome.tabs.sendMessage(tabs[0].id, 'getData', function (response) {
      // 接收返回的消息
      console.log('收到来自后台的回复：' + JSON.parse(response))
    })
  })
  ```

  ```js
  // content.js
  // 注册一个 listener 来接受消息
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request === 'getData') {
      console.log(request, sender) //request即为收到的消息，sender为发送源所在的页面，
      // 这下面就是心心念念的 DOM 操作啦
      const nameList = Array.from(
        document.querySelectorAll('.knife4j-api-title')
      ).map((val) => val.children[0].children[0].innerText)
      const keyList = Array.from(
        document.querySelectorAll('.knife4j-api-summary-path')
      ).map((val) => val.innerText)
      const selectList = nameList.map((val, index) => ({
        title: val,
        value: index,
      }))
      // 注意，通信只能传字符串，因此需要 stringify 后再传输
      sendResponse(
        JSON.stringify({
          nameList,
          keyList,
          selectList,
        })
      ) //sendResponse为收到消息后的回调函数
    }
  })
  ```

  全部完成之后就可以去浏览器查看结果啦~

- `background` 与 `content`

  本质上和上面的操作差不多，通过这两个 `API` 实现：`chrome.runtime.sendMessage` 和 `chrome.runtime.onMessage.addListener`。

### 获取页面 `cookie`

`cookie` 是一个敏感属性，因此我们需要在 `manifest.json` 中声明，告诉 `chrome` 我需要获取，不然直接获取到的 `cookie` 对象就是 `undefined`。

```json
"permissions": ["storage", "cookies"],
```

这里声明了我要获取页面中的 `storage` 和 `cookie` 。

可以了解一下相关的 `api` 再进行下一步操作~[chrome.cookies - Google Chrome 扩展程序开发文档（非官方中文版） (kkh86.com)](http://www.kkh86.com/it/chrome-extension-doc/extensions/cookies.html)

然后可以通过 `chrome.cookie.getAll` 来获取，具体代码如下：

```js
// 这里的对象是筛选条件，具体可以参考谷歌官方的 api 文档
chrome.cookies.getAll({ name: '_hll_identifier_stg' }, function (cookie) {
  // 这里拿到的 cookie 是一个数组，因为我调的是 getAll
  const found = cookie.find((val) => {
    return val.domain.indexOf('.domain.com') > -1
  })
  const uacCookie = found.value
})
```

这里可以提醒一下，`chrome` 提供的这些 `api` 基本都是通过回调的方式拿到结果的，默认的 `this` 指向不是 `Vue` 实例本身，因此在回调函数中如果想要获取 `Vue` 的 `this`，需要先在外层拿到并存起来，再在回调函数使用哟。

### 接口请求

同理，接口请求也是一个危险的操作，因此我们也需要在 `manifest.json` 中声明：

```json
"permissions": ["*://*/"]
```

这里直接使用通配符，告诉 `chrome` 我可以访问任何地址。

在声明了之后，可以通过原生的 `XMLHttpRequest` 来请求，也可以引入 `axios` 来进行网络请求，接下来就看开发者自由发挥啦~
