import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,a as n,b as s,d as i,e as a}from"./app-CzTMLA3i.js";const c="/CrabSAMA-Blog/assets/image-20230919152008988-BdjCsG1A.png",l={},d=a(`<h2 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h2><p>在 <code>Vitepress</code> 中引入组件与样式时，报找不到路径的问题。</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@***/bdi-component&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@***/bdi-component/dist/style.css&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="image-20230919152008988" tabindex="0" loading="lazy"><figcaption>image-20230919152008988</figcaption></figure><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h2>',5),u={href:"https://github.com/vitejs/vite/issues/1505#issuecomment-758824346",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"exports",-1),k=n("code",null,"exports",-1),g=a(`<p>检查当前项目的 package.json，发现确实定义了 <code>exports</code> 这个属性：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@***/bdi-component&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0-alpha.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/cjs/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/es/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/es/index.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;types/index.d.ts&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，这里 <code>.</code> 指向的是 <code>./dist/es/index.js</code>，因此直接 import 时会直接找到 dist 下面的构建产物，但由于 style 等文件没有被显式声明，因此我们没有办法通过路径引入包中的其他内容。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p><code>exports</code> 这个字段其实并不适用于我们这种场景，我们通过定义 <code>main</code> 、<code>module</code> 等字段就可以保证直接 import 找到对应的构建产物。因此我们将 <code>exports</code> 这个属性去掉，就可以正常运行了。</p>`,5);function v(h,b){const e=o("ExternalLinkIcon");return p(),r("div",null,[d,n("p",null,[s("将错误内容在谷歌上搜索，搜到了一条类似的 "),n("a",u,[s("issue"),i(e)]),s("，这里面提到了 package.json 内的一个属性："),m,s("。这个属性会在 bundlers 和 Node.js 中被使用，用于寻找导出的内容，如果没有在 "),k,s(" 中指定的内容，是不会被导出并被寻找到的。")]),g])}const _=t(l,[["render",v],["__file","vite-monorepo-path-error.html.vue"]]),x=JSON.parse(`{"path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vite-monorepo-path-error.html","title":"Vite 引入 monorepo 文件找不到路径","lang":"zh-CN","frontmatter":{"title":"Vite 引入 monorepo 文件找不到路径","date":"2023-09-19T07:36:11.000Z","category":["实际项目","经验","前端开发"],"tag":["monorepo","组件库"],"description":"问题现象 在 Vitepress 中引入组件与样式时，报找不到路径的问题。 image-20230919152008988image-20230919152008988 原因 将错误内容在谷歌上搜索，搜到了一条类似的 issue，这里面提到了 package.json 内的一个属性：exports。这个属性会在 bundlers 和 Node.js 中...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vite-monorepo-path-error.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Vite 引入 monorepo 文件找不到路径"}],["meta",{"property":"og:description","content":"问题现象 在 Vitepress 中引入组件与样式时，报找不到路径的问题。 image-20230919152008988image-20230919152008988 原因 将错误内容在谷歌上搜索，搜到了一条类似的 issue，这里面提到了 package.json 内的一个属性：exports。这个属性会在 bundlers 和 Node.js 中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-10T03:24:04.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"monorepo"}],["meta",{"property":"article:tag","content":"组件库"}],["meta",{"property":"article:published_time","content":"2023-09-19T07:36:11.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T03:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vite 引入 monorepo 文件找不到路径\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-19T07:36:11.000Z\\",\\"dateModified\\":\\"2023-11-10T03:24:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1699586644000,"updatedTime":1699586644000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"实际项目/vite-monorepo-path-error.md","localizedDate":"2023年9月19日","excerpt":"<h2>问题现象</h2>\\n<p>在 <code>Vitepress</code> 中引入组件与样式时，报找不到路径的问题。</p>\\n<div class=\\"language-vue\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> SearchUser <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@***/bdi-component'</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token string\\">'@***/bdi-component/dist/style.css'</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}`);export{_ as comp,x as data};
