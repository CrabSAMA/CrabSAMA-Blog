import{_ as p,X as o,Y as c,Z as n,$ as a,a1 as e,a2 as t,C as i}from"./framework-43a12551.js";const l={},r=t(`<h2 id="vite-vue3-typescript" tabindex="-1"><a class="header-anchor" href="#vite-vue3-typescript" aria-hidden="true">#</a> vite + vue3 + typescript</h2><p>直接查看 <code>vite</code> 官方文档，通过官方提供的创建项目命令创建一个空项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> create vite my-vue-app <span class="token parameter variable">--template</span> vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-router-5" tabindex="-1"><a class="header-anchor" href="#vue-router-5" aria-hidden="true">#</a> vue-router 5</h2><p>路由方面相对 <code>vue2</code> 版本没有大改动，支持了 <code>composition api</code>，在项目中通过 <code>createRouter</code> 创建路由实例并 <code>use</code>。</p><h2 id="vuex-pinia" tabindex="-1"><a class="header-anchor" href="#vuex-pinia" aria-hidden="true">#</a> vuex -&gt; pinia</h2><p><code>pinia</code> 作为新一代状态管理工具，去除了 <code>mutation</code> 的概念，统一使用 <code>action</code> 来操作 <code>state</code>。</p><p>和 <code>vuex</code> 创建多个 <code>module</code> 然后通过 <code>namespace</code> 访问不同，<code>pinia</code> 是直接创建多个 <code>state</code> 然后在使用时按需引用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pinia</span>
├── store
│   ├── app<span class="token punctuation">.</span>ts <span class="token comment">// 等同于 modules/app</span>
│   ├── common<span class="token punctuation">.</span>ts
│   └── user<span class="token punctuation">.</span>ts

<span class="token comment">// vuex</span>
├── store
│   ├── getters<span class="token punctuation">.</span>js
│   ├── index<span class="token punctuation">.</span>js
│   └── modules
│       ├── app<span class="token punctuation">.</span>js
│       ├── common<span class="token punctuation">.</span>js
│       └── user<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拿 <code>common</code> 这个 <code>state</code> 做个例子看看：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">,</span> acceptHMRUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> draft_getDraftList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/notification&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CommonState</span> <span class="token punctuation">{</span>
  draftNum<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCommonStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CommonState <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    draftNum<span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getDraftNum</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>draftNum
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setDraftNum</span><span class="token punctuation">(</span>pload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>draftNum <span class="token operator">=</span> pload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">getDraftList</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">draft_getDraftList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        limit<span class="token operator">:</span> payload<span class="token operator">?.</span>limit <span class="token operator">||</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        page<span class="token operator">:</span> payload<span class="token operator">?.</span>page <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">,</span>
        draft_type<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>ret <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setDraftNum</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>total<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token function">acceptHMRUpdate</span><span class="token punctuation">(</span>useCommonStore<span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里面有几个点可以说一下：</p><ul><li><code>state</code> 接受一个返回对象的方法，可以类比 <code>vue2</code> 推荐的 <code>data</code> 写法，保证返回的 <code>state</code> 不会出现引用改变的问题。</li><li><code>getter</code> 没有大改动，但由于都绑定在同一个 <code>this</code> 下面了，因此 <code>getter</code> 的命名不可以与 <code>state</code> 命名重复，同理 <code>action</code> 命名也不能重复。</li><li><code>actions</code> 等同于 <code>vuex</code> 中的 <code>mutation + action</code>，可以在里面写同步和异步的方法。同时现在 <code>actions</code> 的方法入参不包含 <code>state</code> 了，如果要去 <code>state</code> 下面的值或想调用另外的 <code>action</code> 可以直接通过 <code>this</code> 取到。需要注意的是，<code>actions</code> 中最好不要写箭头函数的形式，会导致 <code>this</code> 指向不正确的问题。</li><li>想要支持 <code>vite</code> 中的 <code>HMR</code> 的话，使用 <code>acceptHMRUpdate</code> 即可。</li></ul><p>接下来可以看看如何在组件中使用这个 <code>state</code>：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCommonStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stores/common&#39;</span>
  
<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">useCommonStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 直接取 state</span>
common<span class="token punctuation">.</span>draftNum
<span class="token comment">// getter</span>
common<span class="token punctuation">.</span><span class="token function">getDraftNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// action</span>
common<span class="token punctuation">.</span><span class="token function">setDraftNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ant-design-vue" tabindex="-1"><a class="header-anchor" href="#ant-design-vue" aria-hidden="true">#</a> ant-design-vue</h2><p><code>antd</code> 也没什么好说的，组件库这个事情在部门内部讨论了十分久的按需引入和全局引入，最终得出的结论是如果项目中有用到组件库中相对较大的组件，例如 <code>form</code> 和 <code>table</code> 等，那其实按不按需对实际的打包大小不会有特别大的影响，反而用按需引入对后续换 <code>CDN</code> 、 <code>vite</code> 依赖预打包和第三方包引用这些方面会有影响，算下来不如直接使用全局引入来的性价比高，因此在这版迁移中直接使用了全局引入。</p><p>全局引入在 <code>volar</code> 下想要 <code>typescript</code> 提示的话，在根目录下的 <code>d.ts</code> 文件中写一行这个即可：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference types=&quot;ant-design-vue/typings/global&quot; /&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-i18n" tabindex="-1"><a class="header-anchor" href="#vue-i18n" aria-hidden="true">#</a> vue-i18n</h2><p><code>vue-i18n</code> 也提供了支持 <code>vue3</code> 的版本，自然也是需要做一些<strong>微小的工作</strong>。</p><p>直接上代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">import</span> contentEn <span class="token keyword">from</span> <span class="token string">&#39;@/langs/en.json&#39;</span>
<span class="token keyword">import</span> contentZh <span class="token keyword">from</span> <span class="token string">&#39;@/langs/zh.json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils&#39;</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> contentEn<span class="token punctuation">,</span>
  zh<span class="token operator">:</span> contentZh
<span class="token punctuation">}</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locale<span class="token operator">:</span> <span class="token function">getLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置语言,如果本地存储了则用本地的,没有则默认 &#39;en&#39;</span>
  messages
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最大的变化其实就是通过 <code>createI18n</code> 来创建实例了，然后在 <code>app.use</code> 后就可以直接在模板中使用 <code>$t</code> 方法去读国际化了~</p><h2 id="eslint-prettier" tabindex="-1"><a class="header-anchor" href="#eslint-prettier" aria-hidden="true">#</a> eslint + prettier</h2><p>其实后续已经不建议 <code>eslint</code> 配合 <code>preitter</code> 来用了，基本上很多开发者都推荐只使用 <code>eslint</code> 来规范代码，但现在我们既然还在用，那就来配置下吧~</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># eslint prettier 基础</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> eslint eslint-plugin-vue vite-plugin-eslint prettier eslint-plugin-prettier
<span class="token comment"># typescript 支持</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @typescript-eslint/eslint-plugin @typescript-eslint/parser
<span class="token comment"># vue sfc parse 没有了这个会导致 sfc 不能被正确解析并通过 eslint</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vue-eslint-parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于用 <code>vite</code> 的原因，<code>package.json</code> 中 <code>type</code> 被设为了 <code>module</code>，因此 <code>eslint</code> 配置文件改名为 <code>.eslintrc.cjs</code>，具体配置如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 只要 extend 了这个，就可以与 preitter 共存</span>
    <span class="token comment">// 记得这个一定要放在最后哦</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一些自定义规则</span>
    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-non-null-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理配置一下 <code>.prettierrc</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;quoteProps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vueIndentScriptAndStyle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-typescript" tabindex="-1"><a class="header-anchor" href="#axios-typescript" aria-hidden="true">#</a> axios + typescript</h2>`,32),u=n("p",null,"来两篇文章：",-1),d={href:"https://docs.shanyuhai.top/frontend/typescript/change-axios-response-type.html#typescript-%E9%94%99%E8%AF%AF%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%8F%90%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/axios/axios/issues/1510",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>我们经常会在 <code>interceptors</code> 或 <code>transformResponse</code> 中修改响应体返回的内容，因为后端一般返回一个带有 <code>ret</code> <code>msg</code> <code>data</code> 的对象，我们一般需要的就是这个对象，而 <code>axios</code> 默认的响应体要通过 <code>res.data</code> 才能取到，一般我们会修改成直接返回 <code>res.data</code>，但当 <code>axios</code> 配合 <code>typescript</code> 的时候，就会导致类型提示不正确的问题。</p><p>这个项目中采取了文章中的第一个方法，也就是直接改全局类型，因为后端都是一个后端，返回体都是统一的，这样修改没问题：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ResponseData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  ret<span class="token operator">:</span> <span class="token builtin">number</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  data<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;axios&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosInstance</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里改的是直接调用实例时的方法</span>
    <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token generic-function"><span class="token function">Promise</span><span class="token generic class-name"><span class="token operator">&lt;</span>ResponseData<span class="token operator">&gt;</span></span></span>
    <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResponseData<span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span><span class="token punctuation">(</span>
      url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">head</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
      url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
      config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
      url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
      config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> ResponseData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
      url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
      config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
    <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大功告成~</p>`,4);function m(b,g){const s=i("ExternalLinkIcon");return o(),c("div",null,[r,n("blockquote",null,[u,n("p",null,[n("a",d,[a("修改 axios response 返回类型 | 飞跃高山与大洋的鱼 (shanyuhai.top)"),e(s)])]),n("p",null,[n("a",k,[a("How to use Axios with TypeScript when using response interceptors (AxiosResponse issue) · Issue #1510 · axios/axios (github.com)"),e(s)])])]),v])}const f=p(l,[["render",m],["__file","vue2-update-vue3.html.vue"]]);export{f as default};