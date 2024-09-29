import{_ as s,c as e,i as t,o as a}from"./app-BS7W8Gul.js";const n={};function h(l,i){return a(),e("div",null,i[0]||(i[0]=[t(`<blockquote><p>TypeScript 高级类型<a href="https://www.tslang.cn/docs/handbook/advanced-types.html" target="_blank" rel="noopener noreferrer">官方文档</a></p></blockquote><h1 id="索引类型-index-types" tabindex="-1"><a class="header-anchor" href="#索引类型-index-types"><span>索引类型（Index types）</span></a></h1><p>在项目中时常有通过传入对象 <code>key</code> 值获取对象中其中一个值的需求，现在有一个想法，想通过动态传入的 <code>key</code> 值获取到对应的类型。在 <code>TypeScript</code> 中想要取得一个 <code>interface</code> 其中的一个属性，可以使用这种写法：</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> something</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Interface</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;key&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> interfaceObj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;key&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的代码就是取 <code>Interface</code> 中名为 <code>key</code> 的类型。</p><p>在方法中我们经常是这样写：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 动态地取某个对象中的一个属性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在 <code>typescript</code> 中要怎样写呢？下面是一个例子：</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> K</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// obj[key] is of type T[K]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里取到的类型就是 <code>T[&#39;K&#39;]</code>，正合我意！</p><h2 id="索引访问操作符" tabindex="-1"><a class="header-anchor" href="#索引访问操作符"><span>索引访问操作符</span></a></h2><p><code>K</code> 指代一个动态类型</p><p>在这里，类型语法反映了表达式语法。 这意味着 <code>person[&#39;name&#39;]</code>具有类型 <code>Person[&#39;name&#39;]</code> — 在我们的例子里则为 <code>string</code>类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 <code>T[K]</code>，这正是它的强大所在。 你只要确保类型变量 <code>K extends keyof T</code>就可以了。</p>`,13)]))}const k=s(n,[["render",h],["__file","index-types.html.vue"]]),r=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/index-types.html","title":"索引类型","lang":"zh-CN","frontmatter":{"title":"索引类型","category":["学习笔记"],"tag":["TypeScript"],"description":"TypeScript 高级类型官方文档 索引类型（Index types） 在项目中时常有通过传入对象 key 值获取对象中其中一个值的需求，现在有一个想法，想通过动态传入的 key 值获取到对应的类型。在 TypeScript 中想要取得一个 interface 其中的一个属性，可以使用这种写法： 上面的代码就是取 Interface 中名为 key...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/index-types.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"索引类型"}],["meta",{"property":"og:description","content":"TypeScript 高级类型官方文档 索引类型（Index types） 在项目中时常有通过传入对象 key 值获取对象中其中一个值的需求，现在有一个想法，想通过动态传入的 key 值获取到对应的类型。在 TypeScript 中想要取得一个 interface 其中的一个属性，可以使用这种写法： 上面的代码就是取 Interface 中名为 key..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:09:11.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"TypeScript"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:09:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-05T09:09:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"索引访问操作符","slug":"索引访问操作符","link":"#索引访问操作符","children":[]}],"git":{"createdTime":1642216165000,"updatedTime":1722848951000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"学习笔记/index-types.md","localizedDate":"2022年1月15日","excerpt":"<blockquote>\\n<p>TypeScript 高级类型<a href=\\"https://www.tslang.cn/docs/handbook/advanced-types.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n</blockquote>\\n<h1>索引类型（Index types）</h1>\\n<p>在项目中时常有通过传入对象 <code>key</code> 值获取对象中其中一个值的需求，现在有一个想法，想通过动态传入的 <code>key</code> 值获取到对应的类型。在 <code>TypeScript</code> 中想要取得一个 <code>interface</code> 其中的一个属性，可以使用这种写法：</p>","autoDesc":true}');export{k as comp,r as data};
