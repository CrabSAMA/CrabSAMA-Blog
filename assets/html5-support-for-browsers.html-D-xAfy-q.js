import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as a}from"./app-CzTMLA3i.js";const e={},o=a(`<h2 id="internet-explorer-的问题" tabindex="-1"><a class="header-anchor" href="#internet-explorer-的问题"><span><strong>Internet Explorer 的问题</strong></span></a></h2><p>上述方案可用于所有新的 <code>HTML5</code> 元素，但是：<br><strong>注意：<strong>Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。<br> 幸运的是，Sjoerd Visscher 创造了 &quot;HTML5 Enabling JavaScript&quot;,</strong>&quot;the shiv&quot;</strong>：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!--[if lt IE 9]&gt;
  &lt;script src=&quot;http://html5shiv.googlecode.com/svn/trunk/html5.js&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码是一段注释，但是 IE9 的早期版本会读取它（并理解它）。</p><h2 id="完整的-shiv-解决方案" tabindex="-1"><a class="header-anchor" href="#完整的-shiv-解决方案"><span><strong>完整的 Shiv 解决方案</strong></span></a></h2><p><strong>实例</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Styling HTML5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--[if lt IE 9]&gt;
  &lt;script src=&quot;http://html5shiv.googlecode.com/svn/trunk/html5.js&quot;&gt;&lt;/script&gt;
  &lt;![endif]--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My First Article<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
London is the capital city of England. 
It is the most populous city in the United Kingdom, 
with a metropolitan area of over 13 million inhabitants.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用 <code>shiv</code> 代码的链接必须位于 <code>&lt;head&gt;</code> 元素中，因为 Internet Explorer 需要在读取之前认识所有新元素。</p>`,8),l=[o];function p(i,r){return n(),s("div",null,l)}const u=t(e,[["render",p],["__file","html5-support-for-browsers.html.vue"]]),g=JSON.parse('{"path":"/HTML/html5-support-for-browsers.html","title":"HTML5对浏览器的支持","lang":"zh-CN","frontmatter":{"title":"HTML5对浏览器的支持","date":"2018-12-13T02:59:58.000Z","category":["前端开发"],"tag":["HTML"],"description":"Internet Explorer 的问题 上述方案可用于所有新的 HTML5 元素，但是： 注意：Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。 幸运的是，Sjoerd Visscher 创造了 \\"HTML5 Enabling JavaScript\\",\\"the shiv\\"： 以上代码是一段注释，但是 IE9 的早期...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/HTML/html5-support-for-browsers.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"HTML5对浏览器的支持"}],["meta",{"property":"og:description","content":"Internet Explorer 的问题 上述方案可用于所有新的 HTML5 元素，但是： 注意：Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。 幸运的是，Sjoerd Visscher 创造了 \\"HTML5 Enabling JavaScript\\",\\"the shiv\\"： 以上代码是一段注释，但是 IE9 的早期..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:published_time","content":"2018-12-13T02:59:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML5对浏览器的支持\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-13T02:59:58.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"Internet Explorer 的问题","slug":"internet-explorer-的问题","link":"#internet-explorer-的问题","children":[]},{"level":2,"title":"完整的 Shiv 解决方案","slug":"完整的-shiv-解决方案","link":"#完整的-shiv-解决方案","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":0.73,"words":219},"filePathRelative":"HTML/html5-support-for-browsers.md","localizedDate":"2018年12月13日","excerpt":"<h2><strong>Internet Explorer 的问题</strong></h2>\\n<p>上述方案可用于所有新的 <code>HTML5</code> 元素，但是：<br>\\n<strong>注意：<strong>Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。<br>\\n幸运的是，Sjoerd Visscher 创造了 \\"HTML5 Enabling JavaScript\\",</strong>\\"the shiv\\"</strong>：</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token comment\\">&lt;!--[if lt IE 9]&gt;\\n  &lt;script src=\\"http://html5shiv.googlecode.com/svn/trunk/html5.js\\"&gt;&lt;/script&gt;\\n&lt;![endif]--&gt;</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,g as data};
