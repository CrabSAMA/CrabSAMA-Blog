import{_ as n,X as o,Y as r,Z as e,$ as t,a1 as l,a2 as a,C as d}from"./framework-43a12551.js";const c={},p=a(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>有一天发现线上打包平台报代码使用了 esnext 语法，因此感觉可能是 babel 没配置好，在探索 babel 的过程中又重新梳理了一次 webpack 相关的规则。</p><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><p>loader 的配置中如果 exclude、include、test 都出现在同一个 loader 的配置中时，优先级是 exclude &gt; include &gt; test。</p><p>loader 本质上是一个数组，里面有不同的 rules 匹配规则。接受到一个文件时，会<strong>从上到下</strong>找到匹配的 rules，当匹配到对应的规则时会按顺序将代码传输到 use 下面的 loader 中，此时统一规则的 loader 则是按照<strong>从下到上</strong>的顺序执行的。</p><p>举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue-style-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;postcss-loader&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个配置下，css 文件会先传入到 <code>postcss-loader</code>，处理完成后交给<code>css-loader</code>，最后交到<code>vue-style-loader</code>中处理完成。</p><h3 id="vue-loader" tabindex="-1"><a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a> vue-loader</h3>`,9),i={href:"https://vue-loader.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u=a('<p>因为是 vue 开发者的缘故，在 webpack 中必须用到 vue-loader。这次也顺便了解了一下 vue-loader 是怎么将 sfc 分块并交给对应 loader 处理的逻辑。</p><p><code>.vue</code> 文件是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 <code>.vue</code> 文件包含三种类型的顶级语言块 <code>&lt;tempalte&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;style&gt;</code>。vue-loader 会将上述的语言块分别解析，并且根据对应的 <code>lang</code> 属性判断出是什么类型，然后交到对应规则下的 loader 进行处理。同时 vue-loader 也支持自定义语言块，也是通过 <code>lang</code> 属性自己配置对应的 loader 来处理。</p><h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h2><p>plugins 一般是事件驱动类型的，自己会去绑定对应的事件，在接收到对应事件时即触发，因此不需太关注 plugin 的执行顺序。</p>',4);function v(h,g){const s=d("ExternalLinkIcon");return o(),r("div",null,[p,e("blockquote",null,[e("p",null,[e("a",i,[t("https://vue-loader.vuejs.org/zh/"),l(s)])])]),u])}const b=n(c,[["render",v],["__file","webpack-rule-order.html.vue"]]);export{b as default};