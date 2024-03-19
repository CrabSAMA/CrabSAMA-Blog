import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,a as n,b as e,d as i,e as s}from"./app-CzTMLA3i.js";const c={},u=s(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。</p><p>由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。</p><p>依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">//package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm:vue@2.7.15&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题复现" tabindex="-1"><a class="header-anchor" href="#问题复现"><span>问题复现</span></a></h2><p>在 packages 下面新增一个 vue2-docs 的目录，初始化 Vuepress1.x。运行<code>vuepress dev</code>后，发现报错：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; vuepress dev

/Users/crab.huang/Project/xx-components/node_modules/.pnpm/vue-server-renderer@2.7.15/node_modules/vue-server-renderer/index.js:8
  throw new Error(
  ^

Error:

Vue packages version mismatch:

- vue@3.3.4
- vue-server-renderer@2.7.15

This may cause things to work incorrectly. Make sure to use the same version for both.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里报错的意思是 vue 与 vue-server-renderer 的版本不匹配，vue-server-renderer 是 vue 的 ssr 组件，其硬性依赖 vue 且要求两者版本一致才能运行。令人疑惑的是，为什么它可以直接找到 3.x 的 vue 版本呢？</p><h2 id="尝试解决" tabindex="-1"><a class="header-anchor" href="#尝试解决"><span>尝试解决</span></a></h2><p>查看源码后发现，vue-server-renderer 这个库引入 vue 的方式十分简单：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vueVersion <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> packageName <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name
<span class="token keyword">var</span> packageVersion <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version
<span class="token keyword">if</span> <span class="token punctuation">(</span>vueVersion <span class="token operator">&amp;&amp;</span> vueVersion <span class="token operator">!==</span> packageVersion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
    <span class="token string">&#39;\\n\\nVue packages version mismatch:\\n\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;- vue@&#39;</span> <span class="token operator">+</span>
      vueVersion <span class="token operator">+</span>
      <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;- &#39;</span> <span class="token operator">+</span>
      packageName <span class="token operator">+</span>
      <span class="token string">&#39;@&#39;</span> <span class="token operator">+</span>
      packageVersion <span class="token operator">+</span>
      <span class="token string">&#39;\\n\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;This may cause things to work incorrectly. Make sure to use the same version for both.\\n&#39;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里直接通过 cjs 的方式引入了 vue，而又因为 pnpm 的默认行为会将所有的依赖包都提取到最外层的<code>node_modules/.pnpm</code>下，结合前文提到的 package.json 中以 vue3 作为主版本，因此这里的<code>require(&#39;vue&#39;)</code>直接找到的就是 vue3。可以预想的是，当时该库的作者并没有考虑到后续 vue2 与 vue3 共存的情况，其设想引入的必定是同版本的 vue。</p>`,13),l={href:"https://github.com/vuejs/vue/issues/11828",target:"_blank",rel:"noopener noreferrer"},d=s("<ol><li>给上述的两个库提 issue，使其支持自定义指定引入 vue 的地址；通过 npm patcher 的方式，给本地包打补丁，将<code>require(&#39;vue&#39;)</code>都改成<code>require(&#39;vue2&#39;)</code>。</li><li>运行时先变更 package.json 中 vue 的指向，令其指向 vue2，运行结束后改回来。</li></ol><p>方法一要求去了解上述两个包的内部实现，方法二更改完后都需要重新 install 才能生效，成本都比较大，最终我们<strong>放弃了集成 vue2 版的文档在 monorepo 库中的方案</strong>，在后续的组件库开发过程中尽量同步实现 vue2 与 vue3 的组件，同时以 vue3 版的文档为主。</p><p>如果后续实际确实有 vue2 版文档的需求，也会<strong>新增一个 repo</strong>去存储，这样就解决了依赖冲突的问题。</p>",3);function v(m,k){const a=o("ExternalLinkIcon");return p(),r("div",null,[u,n("p",null,[e("显而易见的，上面的逻辑只是运行前的前置判断，实际代码逻辑内部是如何引入与使用 vue 的我们还不得而知，同时我们发现还有另外一个包 vue-template-compiler 也有同样的行为（"),n("a",l,[e("issue 链接"),i(a)]),e("），此时放在我们面前的只有两条路可选：")]),d])}const h=t(c,[["render",v],["__file","vue2-vue3-monorepo-vuepress1-error.html.vue"]]),V=JSON.parse('{"path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vue2-vue3-monorepo-vuepress1-error.html","title":"Vue2/Vue3共存Monorepo组件库引入VuePress报错","lang":"zh-CN","frontmatter":{"title":"Vue2/Vue3共存Monorepo组件库引入VuePress报错","date":"2023-11-10T03:19:20.000Z","category":["实际项目","经验","前端开发"],"tag":["monorepo","组件库"],"description":"背景 项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。 由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。 依赖这块，package....","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vue2-vue3-monorepo-vuepress1-error.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Vue2/Vue3共存Monorepo组件库引入VuePress报错"}],["meta",{"property":"og:description","content":"背景 项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。 由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。 依赖这块，package...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-10T03:24:04.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"monorepo"}],["meta",{"property":"article:tag","content":"组件库"}],["meta",{"property":"article:published_time","content":"2023-11-10T03:19:20.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T03:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2/Vue3共存Monorepo组件库引入VuePress报错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-10T03:19:20.000Z\\",\\"dateModified\\":\\"2023-11-10T03:24:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题复现","slug":"问题复现","link":"#问题复现","children":[]},{"level":2,"title":"尝试解决","slug":"尝试解决","link":"#尝试解决","children":[]}],"git":{"createdTime":1699586644000,"updatedTime":1699586644000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":775},"filePathRelative":"实际项目/vue2-vue3-monorepo-vuepress1-error.md","localizedDate":"2023年11月10日","excerpt":"<h2>背景</h2>\\n<p>项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。</p>\\n<p>由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。</p>\\n<p>依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。</p>\\n<div class=\\"language-json\\" data-ext=\\"json\\" data-title=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token comment\\">//package.json</span>\\n<span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"devDependencies\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"vue\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^3.3.4\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"vue2\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"npm:vue@2.7.15\\"</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{h as comp,V as data};