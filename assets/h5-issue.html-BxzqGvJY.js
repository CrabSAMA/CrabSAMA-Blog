import{_ as e,c as s,i as a,o as t}from"./app-DTipyKC7.js";const n={};function l(r,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="h5-开发遇到的问题" tabindex="-1"><a class="header-anchor" href="#h5-开发遇到的问题"><span>H5 开发遇到的问题</span></a></h1><h2 id="ios-头部、底部安全区域" tabindex="-1"><a class="header-anchor" href="#ios-头部、底部安全区域"><span>ios 头部、底部安全区域</span></a></h2><ol><li>通过 env + css 属性实现</li><li>飞书小程序中，通过 api 获取到安全区域，自行设置 padding</li></ol><h2 id="ios-禁止滚动溢出效果-橡皮筋效果" tabindex="-1"><a class="header-anchor" href="#ios-禁止滚动溢出效果-橡皮筋效果"><span>ios 禁止滚动溢出效果/橡皮筋效果</span></a></h2><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /* 需要滚动的容器再添加 overflow: scroll */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  overflow: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="touch-事件-preventdefault-问题" tabindex="-1"><a class="header-anchor" href="#touch-事件-preventdefault-问题"><span>touch 事件 preventDefault 问题</span></a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善滚屏性能</a></p><h2 id="ios-input-focus-放大效果禁止" tabindex="-1"><a class="header-anchor" href="#ios-input-focus-放大效果禁止"><span>ios input focus 放大效果禁止</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewport&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;maximum-scale=1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ios-虚拟键盘问题-visualviewport" tabindex="-1"><a class="header-anchor" href="#ios-虚拟键盘问题-visualviewport"><span>ios 虚拟键盘问题（VisualViewport）</span></a></h2><p><a href="https://juejin.cn/post/6844904078842019848?searchId=20240710173958156D696AE0B56F0F43E0" target="_blank" rel="noopener noreferrer">iOS 键盘难题与可见视口（VisualViewport）API</a></p><h2 id="audio-api-在-ios-17-有问题" tabindex="-1"><a class="header-anchor" href="#audio-api-在-ios-17-有问题"><span><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API" target="_blank" rel="noopener noreferrer">Audio API</a> 在 ios &lt; 17 有问题</span></a></h2><p>audio API 在 ios 15 16 左右使用会有<strong>编解码成功但无法发声的问题</strong>，这块目前没看到有好的解法，应该就是一个 webkit 的兼容性问题</p><h2 id="ios-getusermedia-每次都要重新申请权限" tabindex="-1"><a class="header-anchor" href="#ios-getusermedia-每次都要重新申请权限"><span>ios <code>getUserMedia</code> 每次都要重新申请权限</span></a></h2><p>在 iOS 中 safari 每次使用 getUserMedia 都要重新申请权限，这块也没有避开的方法，如果是自己开发的 iOS app （iOS 15+）可以在 xcode 里面设置 permission plist 设置一个静默授权，就可以一次授权一直使用了。</p><p><a href="https://github.com/xiangyuecn/Recorder/issues/218" target="_blank" rel="noopener noreferrer">issue 链接</a></p>`,16)]))}const h=e(n,[["render",l],["__file","h5-issue.html.vue"]]),p=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/h5-issue.html","title":"H5开发遇到的问题","lang":"zh-CN","frontmatter":{"title":"H5开发遇到的问题","date":"2024-07-10T10:03:09.000Z","category":["项目总结"],"tag":["H5","iOS","音视频"],"description":"H5 开发遇到的问题 ios 头部、底部安全区域 通过 env + css 属性实现 飞书小程序中，通过 api 获取到安全区域，自行设置 padding ios 禁止滚动溢出效果/橡皮筋效果 touch 事件 preventDefault 问题 https://developer.mozilla.org/zh-CN/docs/Web/API/Even...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/h5-issue.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"H5开发遇到的问题"}],["meta",{"property":"og:description","content":"H5 开发遇到的问题 ios 头部、底部安全区域 通过 env + css 属性实现 飞书小程序中，通过 api 获取到安全区域，自行设置 padding ios 禁止滚动溢出效果/橡皮筋效果 touch 事件 preventDefault 问题 https://developer.mozilla.org/zh-CN/docs/Web/API/Even..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-15T07:58:29.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"H5"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:tag","content":"音视频"}],["meta",{"property":"article:published_time","content":"2024-07-10T10:03:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-15T07:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"H5开发遇到的问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-10T10:03:09.000Z\\",\\"dateModified\\":\\"2024-12-15T07:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"ios 头部、底部安全区域","slug":"ios-头部、底部安全区域","link":"#ios-头部、底部安全区域","children":[]},{"level":2,"title":"ios 禁止滚动溢出效果/橡皮筋效果","slug":"ios-禁止滚动溢出效果-橡皮筋效果","link":"#ios-禁止滚动溢出效果-橡皮筋效果","children":[]},{"level":2,"title":"touch 事件 preventDefault 问题","slug":"touch-事件-preventdefault-问题","link":"#touch-事件-preventdefault-问题","children":[]},{"level":2,"title":"ios input focus 放大效果禁止","slug":"ios-input-focus-放大效果禁止","link":"#ios-input-focus-放大效果禁止","children":[]},{"level":2,"title":"ios 虚拟键盘问题（VisualViewport）","slug":"ios-虚拟键盘问题-visualviewport","link":"#ios-虚拟键盘问题-visualviewport","children":[]},{"level":2,"title":"Audio API 在 ios < 17 有问题","slug":"audio-api-在-ios-17-有问题","link":"#audio-api-在-ios-17-有问题","children":[]},{"level":2,"title":"ios getUserMedia 每次都要重新申请权限","slug":"ios-getusermedia-每次都要重新申请权限","link":"#ios-getusermedia-每次都要重新申请权限","children":[]}],"git":{"createdTime":1724313559000,"updatedTime":1734249509000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.11,"words":332},"filePathRelative":"项目总结/h5-issue.md","localizedDate":"2024年7月10日","excerpt":"\\n<h2>ios 头部、底部安全区域</h2>\\n<ol>\\n<li>通过 env + css 属性实现</li>\\n<li>飞书小程序中，通过 api 获取到安全区域，自行设置 padding</li>\\n</ol>\\n<h2>ios 禁止滚动溢出效果/橡皮筋效果</h2>\\n<div class=\\"language-css line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"css\\" data-title=\\"css\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">body</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  /* 需要滚动的容器再添加 overflow: scroll */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  overflow: </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">hidden</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{h as comp,p as data};
