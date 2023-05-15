import{_ as a,X as l,Y as c,Z as n,$ as t,a1 as e,a2 as o,C as d}from"./framework-43a12551.js";const p={},u={href:"https://github.com/unjs/unplugin",target:"_blank",rel:"noopener noreferrer"},i=o('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>前端工具链生态是日新月异，很多人 <code>webpack</code> 都还没玩熟悉呢，新的 <code>vite</code> 都要出到 3.0 了，再说 <code>vite</code> 是基于 <code>rollup</code> 和 <code>esbuild</code> 的吧，这些个工具都各有优劣，都是要学习的东西。但在我看来，这些工具都有一个共同的特点：都是<strong>打包工具</strong>。打包工具需要做的事情就很简单，接收输入的文件，输出成我们想要的东西，这其中还包含了可以通过不同的插件实现对输入文件的处理，以实现混淆、注入等功能；同时打包工具大多都提供了许多<strong>钩子</strong>（<code>hook</code>），贯穿整个打包流程，也方便了我们对打包过程的关注和额外处理。百变不离其宗，<code>webpack</code> 有 <code>loader</code> 和 <code>plugin</code>，<code>vite</code> 扩展了设计出色的 <code>Rollup</code> 接口，还带了一些 <code>vite</code> 独特的配置项，因此有人就有了写一次代码，适配多个 <code>bundler</code> 的想法，<code>unplugin</code> 就是这样一个存在。</p><h2 id="unplugin" tabindex="-1"><a class="header-anchor" href="#unplugin" aria-hidden="true">#</a> <code>unplugin</code></h2><p>由于 <code>contributors</code> 大多是 <code>vite</code> 团队出身，因此 <code>unplugin</code> 也是继承了 <code>rollup</code> 的 <code>plugin api</code>作为基础，通过在它提供的 <code>hook</code> 上实现具体的代码逻辑，<code>unplugin</code> 会帮你做一层转换以适配各个 <code>bundler</code>，本质上我理解还是一个<strong>适配器模式</strong>的思想。</p><p>来个官方的 README 中的表格，具体支持的 <code>hook</code> 如下。</p>',5),r=n("thead",null,[n("tr",null,[n("th",null,"Hook"),n("th",null,"Rollup"),n("th",null,"Vite"),n("th",null,"Webpack 4"),n("th",null,"Webpack 5"),n("th",null,"esbuild")])],-1),_={href:"https://rollupjs.org/guide/en/#buildstart",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"buildStart",-1),h=n("td",null,"✅",-1),g=n("td",null,"✅",-1),b=n("td",null,"✅",-1),v=n("td",null,"✅",-1),f=n("td",null,"✅",-1),m={href:"https://rollupjs.org/guide/en/#buildend",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"buildEnd",-1),w=n("td",null,"✅",-1),x=n("td",null,"✅",-1),j=n("td",null,"✅",-1),E=n("td",null,"✅",-1),P=n("td",null,"✅",-1),U=n("tr",null,[n("td",null,[n("code",null,"transformInclude"),t("1")]),n("td",null,"✅"),n("td",null,"✅"),n("td",null,"✅"),n("td",null,"✅"),n("td",null,"✅")],-1),V={href:"https://rollupjs.org/guide/en/#transformers",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"transform",-1),I=n("td",null,"✅",-1),N=n("td",null,"✅",-1),B=n("td",null,"✅",-1),C=n("td",null,"✅",-1),O=n("td",null,"✅ 3",-1),W={href:"https://rollupjs.org/guide/en/#enforce",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"enforce",-1),S=n("td",null,"❌ 2",-1),q=n("td",null,"✅",-1),A=n("td",null,"✅",-1),D=n("td",null,"✅",-1),F=n("td",null,"❌ 2",-1),H={href:"https://rollupjs.org/guide/en/#resolveid",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"resolveId",-1),T=n("td",null,"✅",-1),X=n("td",null,"✅",-1),Y=n("td",null,"✅",-1),Z=n("td",null,"✅",-1),$=n("td",null,"✅",-1),z={href:"https://rollupjs.org/guide/en/#load",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"load",-1),J=n("td",null,"✅",-1),K=n("td",null,"✅",-1),Q=n("td",null,"✅",-1),nn=n("td",null,"✅",-1),sn=n("td",null,"✅ 3",-1),en={href:"https://rollupjs.org/guide/en/#watchchange",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"watchChange",-1),on=n("td",null,"✅",-1),an=n("td",null,"✅",-1),ln=n("td",null,"✅",-1),cn=n("td",null,"✅",-1),dn=n("td",null,"✅",-1),pn=o(`<p>基于这么一个框架，方便了许多人去写 <code>bundler</code> 的二次开发，有许多新的插件基于 <code>unplugin</code> 实现，我觉得这是一个十分方便的东西，并且也没有特别复杂，所以可以来看看它的具体实现。</p><h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h2><p><code>unplugin</code> 提供了一个 <code>createUnplugin</code> 的工厂函数，这个工厂函数接收一个入参为 <code>options</code> 的方法：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createUnplugin</span><span class="token generic class-name"><span class="token operator">&lt;</span>UserOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  factory<span class="token operator">:</span> UnpluginFactory<span class="token operator">&lt;</span>UserOptions<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> UnpluginInstance<span class="token operator">&lt;</span>UserOptions<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">esbuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getEsbuildPlugin</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">rollup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getRollupPlugin</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">vite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getVitePlugin</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getWebpackPlugin</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">raw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> factory
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们以熟悉的 <code>vite</code> 为例，定位到 <code>getVitePlugin</code> 函数内，发现这个函数实现的功能很简单，就只是将 <code>factory</code> 函数返回的东西传给 <code>toRollupPlugin</code>，而 <code>toRollupPlugin</code> 也仅仅是将 <code>transform</code> 这个 <code>hook</code> 调用了一遍，同时合并了一些配置，这其实也很容易理解，因为本质上 <code>vite</code> 是对 <code>rollup</code> 的上层封装，而正好 <code>unplugin</code> 也是基于 <code>rollup</code> 的 <code>api</code> 往外提供公共的 <code>hook</code>，因此这其中不用做什么转换，直接调用就好了。</p><p>那这样说的话，感觉 <code>webpack</code> 处理会比较复杂，可以接下来看看 <code>webpack</code> 的处理方案。</p>`,6);function un(rn,_n){const s=d("ExternalLinkIcon");return l(),c("div",null,[n("blockquote",null,[n("p",null,[t("先上一个 github 地址 "),n("a",u,[t("https://github.com/unjs/unplugin"),e(s)])])]),i,n("table",null,[r,n("tbody",null,[n("tr",null,[n("td",null,[n("a",_,[k,e(s)])]),h,g,b,v,f]),n("tr",null,[n("td",null,[n("a",m,[y,e(s)])]),w,x,j,E,P]),U,n("tr",null,[n("td",null,[n("a",V,[R,e(s)])]),I,N,B,C,O]),n("tr",null,[n("td",null,[n("a",W,[L,e(s)])]),S,q,A,D,F]),n("tr",null,[n("td",null,[n("a",H,[M,e(s)])]),T,X,Y,Z,$]),n("tr",null,[n("td",null,[n("a",z,[G,e(s)])]),J,K,Q,nn,sn]),n("tr",null,[n("td",null,[n("a",en,[tn,e(s)])]),on,an,ln,cn,dn])])]),pn])}const hn=a(p,[["render",un],["__file","unplugin.html.vue"]]);export{hn as default};