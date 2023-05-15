import{_ as n,X as s,Y as a,a2 as t}from"./framework-43a12551.js";const e={},p=t(`<p>对象的 <code>set get</code> 是es5的中对象的特性，使用示例：</p><p>在初始化对象的时候这样使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> val <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>  <span class="token comment">// b.x 被赋值，同时进入set函数对值进行处理</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// b.x = 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","set-and-get.html.vue"]]);export{r as default};