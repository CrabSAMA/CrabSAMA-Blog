import{_ as a,X as n,Y as e,a2 as s}from"./framework-43a12551.js";const l={},i=s(`<h2 id="babel-7-库的作用域-scope" tabindex="-1"><a class="header-anchor" href="#babel-7-库的作用域-scope" aria-hidden="true">#</a> Babel 7 库的作用域 (scope)</h2><ol><li><p>Babel 7 用了 npm 的 private scope，把全部的包都挂在在 @babel 下，类似的有 typescript 的 @type。</p></li><li><p>Babel 7 提供多种配置</p><p><code>.babelrc</code><code>babel.config.js</code><code>webpack babel loader</code></p></li></ol><h2 id="升级步骤" tabindex="-1"><a class="header-anchor" href="#升级步骤" aria-hidden="true">#</a> 升级步骤</h2><ol><li><p><code>babel-core</code>卸载掉，重新安装 <code>@babel/core</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> uninstall babel-core
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @babel/core
<span class="token comment"># 调用 babel-upgrade 这个工具将对 package.json 进行一次扫描</span>
<span class="token comment"># 将旧版本的 plugin 自动替换成 babel7 的作用域 plugin</span>
npx babel-upgrade <span class="token parameter variable">--write</span> <span class="token parameter variable">--install</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>.babelrc</code>引入解析</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// babel7 以上的 plugin 都变成了 @babel 作用域下的包 需要在这里填写以便解析</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/plugin-proposal-optional-chaining&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/plugin-proposal-json-strings&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/plugin-syntax-dynamic-import&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/plugin-syntax-import-meta&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>package.json</code> 文件中删除 <code>babel6</code> 相关的依赖</p><p>简单的来说，就是不以 <code>@babel</code> 开头的（除了 babel-loader）都删掉即可，或者看后面版本号写 6.XX.XX 的都删掉。</p></li><li><p>删除文件夹 <code>node_modules</code> 然后重新安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),o=[i];function p(c,t){return n(),e("div",null,o)}const r=a(l,[["render",p],["__file","babel6-update-babel7.html.vue"]]);export{r as default};