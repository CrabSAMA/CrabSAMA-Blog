import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,i}from"./app-CfhW4omD.js";const s={},h=i('<p><strong>官方文档：</strong><a href="http://nodejs.org/api/path.html" target="_blank" rel="noopener noreferrer">http://nodejs.org/api/path.html</a><br> 操作文件时难免不与文件路径打交道。<code>NodeJS</code>提供了<code>path</code>内置模块来简化路径相关操作，并提升代码可读性。以下分别介绍几个常用的<code>API</code>。</p><h2 id="path-normalize" tabindex="-1"><a class="header-anchor" href="#path-normalize"><span><code>path.normalize</code></span></a></h2><p>将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作为某些数据的索引，但又允许用户随意输入路径时，就需要使用该方法保证路径的唯一性。</p><p>**坑出没注意：**标准化之后的路径里的斜杠在Windows系统下是\\，而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用<code>.replace(/\\\\\\\\/g, &#39;/&#39;)</code>再替换一下标准路径。</p><h2 id="path-join" tabindex="-1"><a class="header-anchor" href="#path-join"><span><code>path.join</code></span></a></h2><p>将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;foo/&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;baz/&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;../bar&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// =&gt; &quot;foo/bar&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="path-extname" tabindex="-1"><a class="header-anchor" href="#path-extname"><span><code>path.extname</code></span></a></h2><p>当我们需要根据不同文件扩展名做不同操作时，该方法就显得很好用。以下是一个例子：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">extname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;foo/bar.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// =&gt; &quot;.js&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',10),n=[h];function o(r,p){return a(),e("div",null,n)}const c=t(s,[["render",o],["__file","path.html.vue"]]),k=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/path.html","title":"Path路径","lang":"zh-CN","frontmatter":{"title":"Path路径","date":"2020-07-09T01:28:55.000Z","category":["学习笔记"],"tag":["node.js"],"description":"官方文档：http://nodejs.org/api/path.html 操作文件时难免不与文件路径打交道。NodeJS提供了path内置模块来简化路径相关操作，并提升代码可读性。以下分别介绍几个常用的API。 path.normalize 将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/path.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Path路径"}],["meta",{"property":"og:description","content":"官方文档：http://nodejs.org/api/path.html 操作文件时难免不与文件路径打交道。NodeJS提供了path内置模块来简化路径相关操作，并提升代码可读性。以下分别介绍几个常用的API。 path.normalize 将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"node.js"}],["meta",{"property":"article:published_time","content":"2020-07-09T01:28:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Path路径\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-09T01:28:55.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"path.normalize","slug":"path-normalize","link":"#path-normalize","children":[]},{"level":2,"title":"path.join","slug":"path-join","link":"#path-join","children":[]},{"level":2,"title":"path.extname","slug":"path-extname","link":"#path-extname","children":[]}],"git":{"createdTime":1655211700000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"学习笔记/path.md","localizedDate":"2020年7月9日","excerpt":"<p><strong>官方文档：</strong><a href=\\"http://nodejs.org/api/path.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://nodejs.org/api/path.html</a><br>\\n操作文件时难免不与文件路径打交道。<code>NodeJS</code>提供了<code>path</code>内置模块来简化路径相关操作，并提升代码可读性。以下分别介绍几个常用的<code>API</code>。</p>\\n<h2><code>path.normalize</code></h2>\\n<p>将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作为某些数据的索引，但又允许用户随意输入路径时，就需要使用该方法保证路径的唯一性。</p>","autoDesc":true}');export{c as comp,k as data};
