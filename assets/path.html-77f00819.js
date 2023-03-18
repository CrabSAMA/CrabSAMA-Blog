import{_ as s,X as t,Y as o,Z as a,$ as n,a1 as c,a2 as p,C as i}from"./framework-43a12551.js";const r={},l=a("strong",null,"官方文档：",-1),d={href:"http://nodejs.org/api/path.html",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"NodeJS",-1),h=a("code",null,"path",-1),m=a("code",null,"API",-1),_=p(`<h2 id="path-normalize" tabindex="-1"><a class="header-anchor" href="#path-normalize" aria-hidden="true">#</a> <code>path.normalize</code></h2><p>将传入的路径转换为标准路径，具体讲的话，除了解析路径中的.与..外，还能去掉多余的斜杠。如果有程序需要使用路径作为某些数据的索引，但又允许用户随意输入路径时，就需要使用该方法保证路径的唯一性。</p><p>**坑出没注意：**标准化之后的路径里的斜杠在Windows系统下是\\，而在Linux系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用<code>.replace(/\\\\\\\\/g, &#39;/&#39;)</code>再替换一下标准路径。</p><h2 id="path-join" tabindex="-1"><a class="header-anchor" href="#path-join" aria-hidden="true">#</a> <code>path.join</code></h2><p>将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;foo/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; &quot;foo/bar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="path-extname" tabindex="-1"><a class="header-anchor" href="#path-extname" aria-hidden="true">#</a> <code>path.extname</code></h2><p>当我们需要根据不同文件扩展名做不同操作时，该方法就显得很好用。以下是一个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;foo/bar.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; &quot;.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function k(g,v){const e=i("ExternalLinkIcon");return t(),o("div",null,[a("p",null,[l,a("a",d,[n("http://nodejs.org/api/path.html"),c(e)]),n(" 操作文件时难免不与文件路径打交道。"),u,n("提供了"),h,n("内置模块来简化路径相关操作，并提升代码可读性。以下分别介绍几个常用的"),m,n("。")]),_])}const x=s(r,[["render",k],["__file","path.html.vue"]]);export{x as default};