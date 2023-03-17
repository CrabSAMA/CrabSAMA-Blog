import{_ as o,W as i,X as r,Y as n,Z as s,a0 as a,a1 as t,C as c}from"./framework-474f8844.js";const p="/assets/image-20220614202420009-ed48c52e.png",l={},d=n("strong",null,"官方文档：",-1),u={href:"http://nodejs.cn/api/url.html",target:"_blank",rel:"noopener noreferrer"},m=t('<p>完整的<code>URL</code>的各组成部分：</p><figure><img src="'+p+`" alt="image-20220614202420009" tabindex="0" loading="lazy"><figcaption>image-20220614202420009</figcaption></figure><h2 id="parse方法" tabindex="-1"><a class="header-anchor" href="#parse方法" aria-hidden="true">#</a> parse方法</h2><p>我们可以使用<code>.parse</code>方法来将一个<code>URL</code>字符串转换为<code>URL</code>对象，示例如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;http://user:pass@host.com:8080/p/a/t/h?query=string#hash&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/* =&gt;
{ protocol: &#39;http:&#39;,
  auth: &#39;user:pass&#39;,
  host: &#39;host.com:8080&#39;,
  port: &#39;8080&#39;,
  hostname: &#39;host.com&#39;,
  hash: &#39;#hash&#39;,
  search: &#39;?query=string&#39;,
  query: &#39;query=string&#39;,
  pathname: &#39;/p/a/t/h&#39;,
  path: &#39;/p/a/t/h?query=string&#39;,
  href: &#39;http://user:pass@host.com:8080/p/a/t/h?query=string#hash&#39; }
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=n("code",null,".parse",-1),h=n("code",null,"true",-1),b=n("code",null,"URL",-1),g=n("code",null,"query",-1),k=n("code",null,"querystring",-1),_=n("code",null,"true",-1),f={href:"http://xn--www-uc0ep96b.example.com/foo/bar%E3%80%82",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="format方法" tabindex="-1"><a class="header-anchor" href="#format方法" aria-hidden="true">#</a> format方法</h2><p><code>format</code>方法允许将一个<code>URL</code>对象转换为<code>URL</code>字符串，示例如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;www.example.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/p/a/t/h&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;query=string&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* =&gt;
&#39;http://www.example.com/p/a/t/h?query=string&#39;
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolve方法" tabindex="-1"><a class="header-anchor" href="#resolve方法" aria-hidden="true">#</a> resolve方法</h2><p><code>.resolve</code>方法可以用于拼接<code>URL</code>，示例如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../baz&#39;</span><span class="token punctuation">)</span>
<span class="token comment">/* =&gt;
http://www.example.com/baz
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(w,L){const e=c("ExternalLinkIcon");return i(),r("div",null,[n("p",null,[d,n("a",u,[s("http://nodejs.cn/api/url.html"),a(e)])]),m,n("p",null,[v,s("方法还支持第二个和第三个布尔类型可选参数。 第二个参数等于"),h,s("时，该方法返回的"),b,s("对象中，"),g,s("字段不再是一个字符串，而是一个经过"),k,s("模块转换后的参数对象。 第三个参数等于"),_,s("时，该方法可以正确解析不带协议头的URL，"),n("a",f,[s("例如www.example.com/foo/bar。"),a(e)])]),x])}const q=o(l,[["render",y],["__file","URL.html.vue"]]);export{q as default};
