import{_ as s,c as a,i as n,o as e}from"./app-BS7W8Gul.js";const l="/CrabSAMA-Blog/assets/image-20221202141652806-DksH2eoW.png",t={};function h(p,i){return e(),a("div",null,i[0]||(i[0]=[n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><figure><img src="'+l+`" alt="image-20221202141652806" tabindex="0" loading="lazy"><figcaption>image-20221202141652806</figcaption></figure><p>有同学反映「权限申请」按钮的动画效果会导致 GPU 占用高的问题，在我的 m1 macbook pro 13 上表现为占用 20~25%，但是那位同学说在他电脑上占用率高达 130%，因此想搞明白为什么 animation 会导致 GPU 占用如此高。</p><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@keyframes</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> flowlight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 0% {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  //   background-position: 0 0;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-position: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 按钮的类名</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.permission-url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-image: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">linear-gradient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    -89</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">deg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">    #fcab9b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">    #f1d3af</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">    #afc9f1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">    #bb9cfc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">    #fcab9b</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background-size: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  animation: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">flowlight</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> linear</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> infinite</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><h3 id="高性能动画" tabindex="-1"><a class="header-anchor" href="#高性能动画"><span>高性能动画</span></a></h3><p>拿着 <code>css animation background gpu</code> 的关键词去 google 上搜会有很多结果，在其中我看到了一个如何实现高性能 CSS 动画的文章（<a href="https://web.dev/animations-guide/#triggers" target="_blank" rel="noopener noreferrer">链接</a>）。在里面提到了要避免属性变更导致的重绘和回流，因此问题的思路就转变到我们动画变更的属性上了。</p><h3 id="重绘和回流" tabindex="-1"><a class="header-anchor" href="#重绘和回流"><span>重绘和回流</span></a></h3><p>在最初学习前端的时候，我们就会了解到涉及 DOM 的两种行为：重绘（repaint）和回流（reflow）。回流总会引发重绘，而重绘不一定导致回流，因此很明显重绘的开销是比回流少的。就是这一个「少」字，我们往往认为尽力避免回流即可，重绘的开销一般可以忽略不计。但事实真的如此吗？</p><p>要了解重绘和回流，我们首先要知道具体哪些 css 属性的变动会引发重绘和回流。有一个网站里面列出了常见的属性触发后的行为（<a href="https://csstriggers.com/" target="_blank" rel="noopener noreferrer">链接</a>），由于代码里面用到了 <code>background-position</code> 属性，我们就直接看看这个属性会触发什么：</p><blockquote><h2 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position"><span>background-position</span></a></h2><p>Changing <code>background-position</code> does not trigger any geometry changes, which is good. But since it is a visual property, it will cause <strong>painting</strong> to occur. Painting is typically a super expensive operation, so you should be cautious.</p><p>Once any pixels have been painted the page will be <strong>composited</strong> together.</p></blockquote><p>意思是这个属性不会触发回流，但是由于是一个视觉属性，所以会触发重绘，<strong>重绘也是一项昂贵的操作</strong>，所以我们应该注意。</p><p>这还是我第一次知道，重绘其实也是一项高开销的操作，而动画会定期改变属性，导致不断触发重绘，最终就会表现为 GPU 占用高。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>TODO...</p>`,15)]))}const r=s(t,[["render",h],["__file","css-animation-causes-high-gpu-usage.html.vue"]]),d=JSON.parse('{"path":"/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/css-animation-causes-high-gpu-usage.html","title":"css 动画导致 gpu 占用高","lang":"zh-CN","frontmatter":{"title":"css 动画导致 gpu 占用高","date":"2022-12-02T08:15:00.000Z","category":["解决方案"],"tag":["CSS","性能优化"],"description":"背景 image-20221202141652806image-20221202141652806 有同学反映「权限申请」按钮的动画效果会导致 GPU 占用高的问题，在我的 m1 macbook pro 13 上表现为占用 20~25%，但是那位同学说在他电脑上占用率高达 130%，因此想搞明白为什么 animation 会导致 GPU 占用如此高。 ...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/css-animation-causes-high-gpu-usage.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"css 动画导致 gpu 占用高"}],["meta",{"property":"og:description","content":"背景 image-20221202141652806image-20221202141652806 有同学反映「权限申请」按钮的动画效果会导致 GPU 占用高的问题，在我的 m1 macbook pro 13 上表现为占用 20~25%，但是那位同学说在他电脑上占用率高达 130%，因此想搞明白为什么 animation 会导致 GPU 占用如此高。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T07:33:27.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:tag","content":"性能优化"}],["meta",{"property":"article:published_time","content":"2022-12-02T08:15:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T07:33:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css 动画导致 gpu 占用高\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-02T08:15:00.000Z\\",\\"dateModified\\":\\"2024-09-29T07:33:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[{"level":3,"title":"高性能动画","slug":"高性能动画","link":"#高性能动画","children":[]},{"level":3,"title":"重绘和回流","slug":"重绘和回流","link":"#重绘和回流","children":[]}]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1679047229000,"updatedTime":1727595207000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":4}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"解决方案/css-animation-causes-high-gpu-usage.md","localizedDate":"2022年12月2日","excerpt":"<h2>背景</h2>\\n<figure><figcaption>image-20221202141652806</figcaption></figure>\\n<p>有同学反映「权限申请」按钮的动画效果会导致 GPU 占用高的问题，在我的 m1 macbook pro 13 上表现为占用 20~25%，但是那位同学说在他电脑上占用率高达 130%，因此想搞明白为什么 animation 会导致 GPU 占用如此高。</p>\\n<div class=\\"language-less line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"less\\" data-title=\\"less\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">@keyframes</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> flowlight</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  // 0% {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  //   background-position: 0 0;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  // }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">  100</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">%</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    background-position: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">-400</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">%</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 按钮的类名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">.permission-url</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  background-image: </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">linear-gradient</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">    -89</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">deg</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">    #fcab9b</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">    #f1d3af</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">    #afc9f1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">    #bb9cfc</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#D19A66\\">    #fcab9b</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  background-size: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">400</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">%</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  animation: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">flowlight</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 3.5</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E06C75\\">s</span><span style=\\"--shiki-light:#986801;--shiki-dark:#ABB2BF\\"> linear</span><span style=\\"--shiki-light:#986801;--shiki-dark:#ABB2BF\\"> infinite</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
