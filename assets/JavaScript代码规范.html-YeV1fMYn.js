import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e as a}from"./app-DMXpJ-m3.js";const i={},u=n("p",null,[n("em",null,"一种写 JavaScript 更合理的代码风格。")],-1),r=n("h2",{id:"命名规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#命名规范"},[n("span",null,"命名规范")])],-1),d={href:"https://eslint.org/docs/rules/id-length",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"id-length",-1),v=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://eslint.org/docs/rules/camelcase.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"camelcase",-1),g=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> OBJEcttsssss <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> this_is_my_object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> thisIsMyObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">thisIsMyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=a(`<li><p>缩略词和缩写都必须是全部大写或者全部小写。</p><blockquote><p>为什么？因为名字是为了可读性，不是为了满足计算机算法。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> SmsContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SmsContainer&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> HttpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> SMSContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/SMSContainer&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> HTTPRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// also good</span>
<span class="token keyword">const</span> httpRequests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> TextMessageContainer <span class="token keyword">from</span> <span class="token string">&#39;./containers/TextMessageContainer&#39;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),y=a(`<h2 id="引用与变量" tabindex="-1"><a class="header-anchor" href="#引用与变量"><span>引用与变量</span></a></h2><ul><li><p>使用 <code>let</code> 定义变量，<code>const</code> 定义常量</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注意，<code>let</code> 和 <code>const</code> 都是块级范围的</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// const 和 let 只存在于他们定义的块中。</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// ReferenceError</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>把 <code>const</code> 声明的放在一起，把 <code>let</code> 声明的放在一起。.</p><blockquote><p>为什么? 这在后边如果需要根据前边的赋值变量指定一个变量时很有用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> i<span class="token punctuation">,</span>
  len<span class="token punctuation">,</span>
  dragonball<span class="token punctuation">,</span>
  items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token keyword">let</span> i
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> len

<span class="token comment">// good</span>
<span class="token keyword">const</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> dragonball
<span class="token keyword">let</span> i
<span class="token keyword">let</span> length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><a name="variables--define-where-used"></a><a name="13.4"></a></p></li></ul><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h2>`,3),f={href:"https://eslint.org/docs/rules/no-new-object.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"no-new-object",-1),w=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j={href:"https://eslint.org/docs/rules/object-shorthand.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"object-shorthand",-1),S=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function-variable function">addValue</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

  <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> atom<span class="token punctuation">.</span>value <span class="token operator">+</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q={href:"https://eslint.org/docs/rules/object-shorthand.html",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"object-shorthand",-1),N=a(`<blockquote><p>为什么? 因为它的写法和描述较短。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&#39;Luke Skywalker&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lukeSkywalker</span><span class="token operator">:</span> lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C=a(`<li><p>在对象声明的时候将简写的属性进行分组。</p><blockquote><p>为什么? 因为这样更容易的判断哪些属性使用的简写。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> anakinSkywalker <span class="token operator">=</span> <span class="token string">&#39;Anakin Skywalker&#39;</span>
<span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&#39;Luke Skywalker&#39;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  lukeSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),T={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"Object.assign",-1),I=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// very bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 变异的 \`original\` ಠ_ಠ</span>
<span class="token keyword">delete</span> copy<span class="token punctuation">.</span>a <span class="token comment">// 这....</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>original<span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>noA <span class="token punctuation">}</span> <span class="token operator">=</span> copy <span class="token comment">// noA =&gt; { b: 2, c: 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J=n("h2",{id:"数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组"},[n("span",null,"数组")])],-1),M={href:"https://eslint.org/docs/rules/no-array-constructor.html",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"no-array-constructor",-1),B=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push",target:"_blank",rel:"noopener noreferrer"},F=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abracadabra&#39;</span>

<span class="token comment">// good</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H=a(`<li><p>使用数组展开方法 <code>...</code> 来拷贝数组。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> i

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果数组有多行，则在开始的时候换行，然后在结束的时候换行。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> objectInArray <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> numberInArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),z=n("h2",{id:"解构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解构"},[n("span",null,"解构")])],-1),D=n("strong",null,"对象解构",-1),G={href:"https://eslint.org/docs/rules/prefer-destructuring",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"prefer-destructuring",-1),L=a(`<blockquote><p>为什么? 因为解构可以避免为这些属性创建临时引用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> user
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V=n("strong",null,"数组解构",-1),P={href:"https://eslint.org/docs/rules/prefer-destructuring",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"prefer-destructuring",-1),Z=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),X=a(`<li><p>对于多个返回值使用<strong>对象解构</strong>，而不是数组解构。</p><blockquote><p>为什么? 因为你可以随时添加新的属性或者改变属性的顺序，而不用修改调用方。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理代码...</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者需要考虑返回数据的顺序。</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> __<span class="token punctuation">,</span> top<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">processInput</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理代码...</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> top<span class="token punctuation">,</span> bottom <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用者只选择他们需要的数据。</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> top <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">processInput</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),U=n("h2",{id:"字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字符串"},[n("span",null,"字符串")])],-1),K=n("code",null,"''",-1),Q={href:"https://eslint.org/docs/rules/quotes.html",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"quotes",-1),nn=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Capt. Janeway&#39;</span>

<span class="token comment">// bad - 模板文字应该包含插值或换行。</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Capt. Janeway</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Capt. Janeway&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),sn={href:"https://eslint.org/docs/rules/prefer-template.html",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"prefer-template",-1),en={href:"https://eslint.org/docs/rules/template-curly-spacing",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"template-curly-spacing",-1),pn=a(`<blockquote><p>为什么? 字符串模板为您提供了一种可读的、简洁的语法，具有正确的换行和字符串插值特性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;How are you, &#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;How are you, &#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),on=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数"},[n("span",null,"函数")])],-1),cn=a(`<li><p>总是把默认参数放在最后。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">handleThings</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),ln={href:"https://eslint.org/docs/rules/space-before-function-paren",target:"_blank",rel:"noopener noreferrer"},un=n("code",null,"space-before-function-paren",-1),rn={href:"https://eslint.org/docs/rules/space-before-blocks",target:"_blank",rel:"noopener noreferrer"},dn=n("code",null,"space-before-blocks",-1),kn=a(`<blockquote><p>为什么? 一致性很好，在删除或添加名称时不需要添加或删除空格。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">h</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vn=n("h2",{id:"箭头函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#箭头函数"},[n("span",null,"箭头函数")])],-1),mn=n("strong",null,"匿名函数",-1),bn={href:"https://eslint.org/docs/rules/prefer-arrow-callback.html",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"prefer-arrow-callback",-1),hn={href:"https://eslint.org/docs/rules/arrow-spacing.html",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"arrow-spacing",-1),fn=a(`<blockquote><p>为什么? 它创建了一个在 <code>this</code> 上下文中执行的函数版本，它通常是你想要的，并且是一个更简洁的语法。</p></blockquote><blockquote><p>为什么不? 如果你有一个相当复杂的函数，你可以把这个逻辑转移到它自己的命名函数表达式中。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_n={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"},wn=n("code",null,"return",-1),jn={href:"https://eslint.org/docs/rules/arrow-parens.html",target:"_blank",rel:"noopener noreferrer"},xn=n("code",null,"arrow-parens",-1),Sn={href:"https://eslint.org/docs/rules/arrow-body-style.html",target:"_blank",rel:"noopener noreferrer"},qn=n("code",null,"arrow-body-style",-1),An=a(`<blockquote><p>为什么? 语法糖。 多个函数被链接在一起时，提高可读性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextNumber <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A string containing the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nextNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 没有副作用的隐式返回</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果回调返回 true 执行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// bad</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  bool <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Nn=n("strong",null,"一个参数",-1),Cn=n("strong",null,"省略括号",-1),Tn={href:"https://eslint.org/docs/rules/arrow-parens#always",target:"_blank",rel:"noopener noreferrer"},En={href:"https://eslint.org/docs/rules/arrow-parens.html",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"arrow-parens",-1),Jn=a(`<blockquote><p>为什么? 减少视觉上的混乱。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A long string with the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. It’s so long that we don’t want it to take up space on the .map line!</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>

<span class="token comment">// bad</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Mn=n("h2",{id:"模块-es-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模块-es-module"},[n("span",null,"模块（ES Module）")])],-1),On=a(`<li><p>你可能经常使用模块 (<code>import</code>/<code>export</code>) 在一些<strong>非标准模块的系统</strong>上。 你也可以在你喜欢的模块系统上相互转换。</p><blockquote><p>为什么? 模块是未来的趋势，让我们拥抱未来。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> AirbnbStyleGuide <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// ok</span>
<span class="token keyword">import</span> AirbnbStyleGuide <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> AirbnbStyleGuide<span class="token punctuation">.</span>es6<span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> es6 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AirbnbStyleGuide&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> es6<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),Bn={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md",target:"_blank",rel:"noopener noreferrer"},Rn=n("code",null,"import/no-mutable-exports",-1),Fn=a(`<blockquote><p>为什么? 在一般情况下，应该避免发生突变，但是在导出可变引用时及其容易发生突变。虽然在某些特殊情况下，可能需要这样，但是一般情况下只需要导出常量引用。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Hn=n("strong",null,"单个",-1),zn={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md",target:"_blank",rel:"noopener noreferrer"},Dn=n("code",null,"import/prefer-default-export",-1),Gn=a(`<blockquote><p>为什么? 为了鼓励更多的文件只导出一件东西，这样可读性和可维护性更好。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$n=n("code",null,"import",-1),Ln=n("strong",null,"上边",-1),Vn={href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md",target:"_blank",rel:"noopener noreferrer"},Pn=n("code",null,"import/first",-1),Wn=a(`<blockquote><p>为什么? 由于所有的 <code>import</code>s 都被提前，保持他们在顶部是为了防止意外发生。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span>
<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">&#39;bar&#39;</span>

foo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Zn=a(`<li><p>多行导入应该像多行数组和对象一样缩进。</p><blockquote><p>为什么? 花括号和其他规范一样，遵循相同的缩进规则，后边的都好一样。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> longNameA<span class="token punctuation">,</span> longNameB<span class="token punctuation">,</span> longNameC<span class="token punctuation">,</span> longNameD<span class="token punctuation">,</span> longNameE <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> longNameA<span class="token punctuation">,</span> longNameB<span class="token punctuation">,</span> longNameC<span class="token punctuation">,</span> longNameD<span class="token punctuation">,</span> longNameE <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),Xn=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性"},[n("span",null,"属性")])],-1),Un={href:"https://eslint.org/docs/rules/dot-notation.html",target:"_blank",rel:"noopener noreferrer"},Kn=n("code",null,"dot-notation",-1),Qn=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">[</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">.</span>jedi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Yn=a(`<li><p>使用变量访问属性时，使用 <code>[]</code>表示法。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> luke<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isJedi <span class="token operator">=</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),ns=n("h2",{id:"比较运算符和等号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#比较运算符和等号"},[n("span",null,"比较运算符和等号")])],-1),ss=n("code",null,"===",-1),as=n("code",null,"!==",-1),es=n("code",null,"==",-1),ts=n("code",null,"!=",-1),ps={href:"https://eslint.org/docs/rules/eqeqeq.html",target:"_blank",rel:"noopener noreferrer"},os=n("code",null,"eqeqeq",-1),cs=a(`<li><p>条件语句，例如 <code>if</code> 语句使用 <code>ToBoolean</code> 的抽象方法来计算表达式的结果，并始终遵循以下简单的规则：</p><ul><li><strong>Objects</strong> 的取值为： <strong>true</strong></li><li><strong>Undefined</strong> 的取值为： <strong>false</strong></li><li><strong>Null</strong> 的取值为： <strong>false</strong></li><li><strong>Booleans</strong> 的取值为： <strong>布尔值的取值</strong></li><li><strong>Numbers</strong> 的取值为：如果为 <strong>+0, -0, or NaN</strong> 值为 <strong>false</strong> 否则为 <strong>true</strong></li><li><strong>Strings</strong> 的取值为: 如果是一个空字符串 <code>&#39;&#39;</code> 值为 <strong>false</strong> 否则为 <strong>true</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// true</span>
  <span class="token comment">// 一个数组（即使是空的）是一个对象，对象的取值为 true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对于布尔值使用简写，但是对于字符串和数字进行显式比较。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),ls=n("code",null,"case",-1),is=n("code",null,"default",-1),us=n("code",null,"let",-1),rs=n("code",null,"const",-1),ds=n("code",null,"function",-1),ks=n("code",null,"class",-1),vs={href:"https://eslint.org/docs/rules/no-case-declarations.html",target:"_blank",rel:"noopener noreferrer"},ms=n("code",null,"no-case-declarations",-1),bs=a(`<blockquote><p>为什么? 语法声明在整个 <code>switch</code> 块中都是可见的，但是只有在赋值的时候才会被初始化，这种情况只有在 <code>case</code> 条件达到才会发生。 当多个 <code>case</code> 语句定义相同的东西是，这会导致问题问题。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),gs={href:"https://eslint.org/docs/rules/no-nested-ternary.html",target:"_blank",rel:"noopener noreferrer"},hs=n("code",null,"no-nested-ternary",-1),ys=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>

<span class="token comment">// 分离为两个三目表达式</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span>

<span class="token comment">// better</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull

<span class="token comment">// best</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),fs={href:"https://eslint.org/docs/rules/no-unneeded-ternary.html",target:"_blank",rel:"noopener noreferrer"},_s=n("code",null,"no-unneeded-ternary",-1),ws=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">?</span> a <span class="token operator">:</span> b
<span class="token keyword">const</span> bar <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">||</span> b
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>c
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token operator">!</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),js=a(`<h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句"><span>控制语句</span></a></h2><ul><li><p>如果你的控制语句 (<code>if</code>, <code>while</code> 等) 太长或者超过了一行最大长度的限制，则可以将每个条件（或组）放入一个<strong>新的行</strong>。 <strong>逻辑运算符</strong>应该在<strong>行的开始</strong>。</p><blockquote><p>为什么? 要求操作符在行的开始保持对齐并遵循类似方法衔接的模式。 这提高了可读性，并且使更复杂的逻辑更容易直观的被理解。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">||</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">doesItLookGoodWhenItBecomesThatLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">isThisReallyHappening</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo <span class="token operator">===</span> <span class="token number">123</span> <span class="token operator">&amp;&amp;</span> bar <span class="token operator">===</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不要使用选择操作符代替控制语句。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token operator">!</span>isRunning <span class="token operator">&amp;&amp;</span> <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRunning<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">startRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>`,3),xs=a(`<li><p>使用 <code>/** ... */</code> 来进行多行注释。（IDE 中输入 <code>/**</code> 然后回车就可以自动补全代码块）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// make() returns a new element</span>
<span class="token comment">// based on the passed in tag name</span>
<span class="token comment">//</span>
<span class="token comment">// @param {String} tag</span>
<span class="token comment">// @return {Element} element</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>//</code> 进行单行注释。 将单行注释放在需要注释的<strong>行的上方</strong>新行。 在注释之前<strong>放一个空行</strong>，除非它在块的第一行。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// is current tab</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>

<span class="token comment">// also good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span>

  <span class="token keyword">return</span> type
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),Ss=n("strong",null,"一个空格开始",-1),qs={href:"https://eslint.org/docs/rules/spaced-comment",target:"_blank",rel:"noopener noreferrer"},As=n("code",null,"spaced-comment",-1),Ns=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">//is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// bad</span>
<span class="token doc-comment comment">/**
 *make() returns a new element
 *based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed-in tag name
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Cs=a(`<li><p>使用 <code>FIXME</code> 或者 <code>TODO</code> 开始你的注释可以帮助其他开发人员快速了解，如果你提出了一个需要重新审视的问题，或者你对需要实现的问题提出的解决方案。 这些不同于其他评论，因为他们是可操作的。 这些行为是 <code>FIXME: -- 需要解决这个问题</code> 或者 <code>TODO: -- 需要被实现</code>。（在 IDE 中可以快速定位到具体位置，方便记录与定位问题）</p></li><li><p>使用 <code>// FIXME:</code> 注释一个问题。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// FIXME: 这里不应该使用全局变量</span>
    total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>// TODO:</code> 注释解决问题的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token keyword">extends</span> <span class="token class-name">Abacus</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// TODO: total 应该由一个 param 的选项配置</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),Ts=n("h2",{id:"空白",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#空白"},[n("span",null,"空白")])],-1),Es={href:"https://eslint.org/docs/rules/indent.html",target:"_blank",rel:"noopener noreferrer"},Is=n("code",null,"indent",-1),Js=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙∙∙<span class="token keyword">let</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙<span class="token keyword">let</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
∙∙<span class="token keyword">let</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ms={href:"https://eslint.org/docs/rules/space-before-blocks.html",target:"_blank",rel:"noopener noreferrer"},Os=n("code",null,"space-before-blocks",-1),Bs=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Rs=n("code",null,"if",-1),Fs=n("code",null,"while",-1),Hs=n("strong",null,"函数调用和声明",-1),zs=n("strong",null,"没有空格",-1),Ds={href:"https://eslint.org/docs/rules/keyword-spacing.html",target:"_blank",rel:"noopener noreferrer"},Gs=n("code",null,"keyword-spacing",-1),$s=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ls={href:"https://eslint.org/docs/rules/space-infix-ops.html",target:"_blank",rel:"noopener noreferrer"},Vs=n("code",null,"space-infix-ops",-1),Ps=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ws={href:"https://eslint.org/docs/rules/padded-blocks.html",target:"_blank",rel:"noopener noreferrer"},Zs=n("code",null,"padded-blocks",-1),Xs=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> bar
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>baz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qux<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Us={href:"https://eslint.org/docs/rules/space-in-parens.html",target:"_blank",rel:"noopener noreferrer"},Ks=n("code",null,"space-in-parens",-1),Qs=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ys={href:"https://eslint.org/docs/rules/array-bracket-spacing.html",target:"_blank",rel:"noopener noreferrer"},na=n("code",null,"array-bracket-spacing",-1),sa=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),aa={href:"https://eslint.org/docs/rules/object-curly-spacing.html",target:"_blank",rel:"noopener noreferrer"},ea=n("code",null,"object-curly-spacing",-1),ta=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pa={href:"https://eslint.org/docs/rules/comma-spacing",target:"_blank",rel:"noopener noreferrer"},oa=n("code",null,"comma-spacing",-1),ca=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  bar <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  bar <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),la=n("h2",{id:"分号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分号"},[n("span",null,"分号")])],-1),ia={href:"https://eslint.org/docs/rules/semi.html",target:"_blank",rel:"noopener noreferrer"},ua=n("code",null,"semi",-1),ra={href:"https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion",target:"_blank",rel:"noopener noreferrer"},da=a(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// bad - 可能异常</span>
<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">(</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&#39;vader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// bad - 可能异常</span>
<span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token string">&quot;No! That&#39;s impossible!&quot;</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">meanwhileOnTheFalcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle \`leia\`, \`lando\`, \`chewie\`, \`r2\`, \`c3p0\`</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// bad - 返回 \`undefined\` 而不是下一行的值 - 当 \`return\` 单独一行的时候 ASI 总是会发生</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token string">&#39;search your feelings, you know it to be foo&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> leia <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span>luke<span class="token punctuation">,</span> leia<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jedi</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  jedi<span class="token punctuation">.</span>father <span class="token operator">=</span> <span class="token string">&#39;vader&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> reaction <span class="token operator">=</span> <span class="token string">&quot;No! That&#39;s impossible!&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">meanwhileOnTheFalcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle \`leia\`, \`lando\`, \`chewie\`, \`r2\`, \`c3p0\`</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;search your feelings, you know it to be foo&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function ka(va,ma){const e=o("ExternalLinkIcon");return c(),l("div",null,[u,r,n("ul",null,[n("li",null,[n("p",null,[s("避免单字母的名字。用你的命名来描述功能。 eslint: "),n("a",d,[k,t(e)])]),v]),n("li",null,[n("p",null,[s("在命名对象、函数和实例时使用驼峰命名法（camelCase）。 eslint: "),n("a",m,[b,t(e)])]),g]),h]),y,n("ul",null,[n("li",null,[n("p",null,[s("使用字面语法来创建对象。（eslint: "),n("a",f,[_,t(e)]),s("）")]),w]),n("li",null,[n("p",null,[s("在对象里定义方法，可以使用对象方法的缩写。eslint: "),n("a",j,[x,t(e)])]),S]),n("li",null,[n("p",null,[s("使用属性值的缩写。 eslint: "),n("a",q,[A,t(e)])]),N]),C,n("li",null,[n("p",null,[s("更喜欢对象扩展操作符，而不是用 "),n("a",T,[E,t(e)]),s(" 浅拷贝一个对象。 使用对象的 rest 操作符来获得一个具有某些属性的新对象。")]),I])]),J,n("ul",null,[n("li",null,[n("p",null,[s("使用字面语法创建数组。 eslint: "),n("a",M,[O,t(e)])]),B]),n("li",null,[n("p",null,[s("使用 "),n("a",R,[s("Array.push"),t(e)]),s(" 取代直接赋值来给数组添加项。")]),F]),H]),z,n("ul",null,[n("li",null,[n("p",null,[s("在访问和使用对象的多个属性的时候使用"),D,s("。 eslint: "),n("a",G,[$,t(e)])]),L]),n("li",null,[n("p",null,[s("使用"),V,s("。 eslint: "),n("a",P,[W,t(e)])]),Z]),X]),U,n("ul",null,[n("li",null,[n("p",null,[s("使用单引号 "),K,s(" 定义字符串。 eslint: "),n("a",Q,[Y,t(e)])]),nn]),n("li",null,[n("p",null,[s("当以编程模式构建字符串时，使用字符串模板代替字符串拼接。 eslint: "),n("a",sn,[an,t(e)]),s(),n("a",en,[tn,t(e)])]),pn])]),on,n("ul",null,[cn,n("li",null,[n("p",null,[s("函数签名中的间距。 eslint: "),n("a",ln,[un,t(e)]),s(),n("a",rn,[dn,t(e)])]),kn])]),vn,n("ul",null,[n("li",null,[n("p",null,[s("当你必须使用"),mn,s("时 (当传递内联函数时)， 使用箭头函数。 eslint: "),n("a",bn,[gn,t(e)]),s(", "),n("a",hn,[yn,t(e)])]),fn]),n("li",null,[n("p",null,[s("如果函数体包含一个单独的语句，返回一个没有副作用的 "),n("a",_n,[s("expression"),t(e)]),s(" ， 省略括号并使用隐式返回。否则，保留括号并使用 "),wn,s(" 语句。 eslint: "),n("a",jn,[xn,t(e)]),s(", "),n("a",Sn,[qn,t(e)])]),An]),n("li",null,[n("p",null,[s("如果你的函数接收"),Nn,s("，则可以"),Cn,s("。 否则，为了保证清晰和一致性，需要在参数周围加上括号。 注意：总是使用括号是可以接受的，在这种情况下，我们使用 "),n("a",Tn,[s("“always” option"),t(e)]),s(" 来配置 eslint. eslint: "),n("a",En,[In,t(e)])]),Jn])]),Mn,n("ul",null,[On,n("li",null,[n("p",null,[s("不要导出可变的引用。eslint: "),n("a",Bn,[Rn,t(e)])]),Fn]),n("li",null,[n("p",null,[s("在"),Hn,s("导出的模块中，选择默认模块而不是指定的导出。eslint: "),n("a",zn,[Dn,t(e)])]),Gn]),n("li",null,[n("p",null,[s("将所有的 "),$n,s("s 语句放在所有非导入语句的"),Ln,s("。eslint: "),n("a",Vn,[Pn,t(e)])]),Wn]),Zn]),Xn,n("ul",null,[n("li",null,[n("p",null,[s("访问属性时使用点符号。 eslint: "),n("a",Un,[Kn,t(e)])]),Qn]),Yn]),ns,n("ul",null,[n("li",null,[n("p",null,[s("使用 "),ss,s(" 和 "),as,s(" 而不是 "),es,s(" 和 "),ts,s("。 eslint: "),n("a",ps,[os,t(e)])])]),cs,n("li",null,[n("p",null,[s("在 "),ls,s(" 和 "),is,s(" 的子句中，如果存在声明 (例如. "),us,s(", "),rs,s(", "),ds,s(", 和 "),ks,s(")，使用大括号来创建块 。 eslint: "),n("a",vs,[ms,t(e)])]),bs]),n("li",null,[n("p",null,[s("三目表达式不应该嵌套，通常是单行表达式。 eslint: "),n("a",gs,[hs,t(e)])]),ys]),n("li",null,[n("p",null,[s("避免不必要的三目表达式。 eslint: "),n("a",fs,[_s,t(e)])]),ws])]),js,n("ul",null,[xs,n("li",null,[n("p",null,[s("用"),Ss,s("所有的注释，使它更容易阅读。 eslint: "),n("a",qs,[As,t(e)])]),Ns]),Cs]),Ts,n("ul",null,[n("li",null,[n("p",null,[s("使用 tabs (空格字符) 设置为 2 个空格。 eslint: "),n("a",Es,[Is,t(e)])]),Js]),n("li",null,[n("p",null,[s("在主体前放置一个空格。 eslint: "),n("a",Ms,[Os,t(e)])]),Bs]),n("li",null,[n("p",null,[s("在控制语句（"),Rs,s(", "),Fs,s(" 等）开始括号之前放置一个空格。 在"),Hs,s("中，在参数列表和函数名之间"),zs,s("。 eslint: "),n("a",Ds,[Gs,t(e)])]),$s]),n("li",null,[n("p",null,[s("用空格分隔操作符。 eslint: "),n("a",Ls,[Vs,t(e)])]),Ps]),n("li",null,[n("p",null,[s("不要在块的开头使用空白行。 eslint: "),n("a",Ws,[Zs,t(e)])]),Xs]),n("li",null,[n("p",null,[s("不要在括号内添加空格。 eslint: "),n("a",Us,[Ks,t(e)])]),Qs]),n("li",null,[n("p",null,[s("不要在中括号中添加空格。 eslint: "),n("a",Ys,[na,t(e)])]),sa]),n("li",null,[n("p",null,[s("在花括号内添加空格。 eslint: "),n("a",aa,[ea,t(e)])]),ta]),n("li",null,[n("p",null,[s("逗号之前避免使用空格，逗号之后需要使用空格。eslint: "),n("a",pa,[oa,t(e)])]),ca])]),la,n("ul",null,[n("li",null,[n("p",null,[s("应该在语句后添加分号。eslint: "),n("a",ia,[ua,t(e)])]),n("blockquote",null,[n("p",null,[s("为什么? 当 JavaScript 遇见一个没有分号的换行符时，它会使用一个叫做 "),n("a",ra,[s("Automatic Semicolon Insertion"),t(e)]),s(" 的规则来确定是否应该以换行符视为语句的结束，并且如果认为如此，会在代码中断前插入一个分号到代码中。 但是，ASI 包含了一些奇怪的行为，如果 JavaScript 错误的解释了你的换行符，你的代码将会中断。 随着新特性成为 JavaScript 的一部分，这些规则将变得更加复杂。 明确地终止你的语句，并配置你的 linter 以捕获缺少的分号将有助于防止你遇到的问题。")])]),da])])])}const ha=p(i,[["render",ka],["__file","JavaScript代码规范.html.vue"]]),ya=JSON.parse(`{"path":"/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/JavaScript%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html","title":"JavaScript 代码规范","lang":"zh-CN","frontmatter":{"title":"JavaScript 代码规范","date":"2021-11-03T09:58:40.000Z","category":["开发规范"],"tag":["开发规范","前端工程化"],"description":"一种写 JavaScript 更合理的代码风格。 命名规范 避免单字母的名字。用你的命名来描述功能。 eslint: id-length 在命名对象、函数和实例时使用驼峰命名法（camelCase）。 eslint: camelcase 缩略词和缩写都必须是全部大写或者全部小写。 为什么？因为名字是为了可读性，不是为了满足计算机算法。 引用与变量 使用...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/JavaScript%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"JavaScript 代码规范"}],["meta",{"property":"og:description","content":"一种写 JavaScript 更合理的代码风格。 命名规范 避免单字母的名字。用你的命名来描述功能。 eslint: id-length 在命名对象、函数和实例时使用驼峰命名法（camelCase）。 eslint: camelcase 缩略词和缩写都必须是全部大写或者全部小写。 为什么？因为名字是为了可读性，不是为了满足计算机算法。 引用与变量 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"开发规范"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2021-11-03T09:58:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 代码规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-03T09:58:40.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":2,"title":"引用与变量","slug":"引用与变量","link":"#引用与变量","children":[]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"解构","slug":"解构","link":"#解构","children":[]},{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"模块（ES Module）","slug":"模块-es-module","link":"#模块-es-module","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"比较运算符和等号","slug":"比较运算符和等号","link":"#比较运算符和等号","children":[]},{"level":2,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"空白","slug":"空白","link":"#空白","children":[]},{"level":2,"title":"分号","slug":"分号","link":"#分号","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":4}]},"readingTime":{"minutes":14.45,"words":4336},"filePathRelative":"开发规范/JavaScript代码规范.md","localizedDate":"2021年11月3日","excerpt":"<p><em>一种写 JavaScript 更合理的代码风格。</em></p>\\n<h2>命名规范</h2>\\n<ul>\\n<li>\\n<p>避免单字母的名字。用你的命名来描述功能。 eslint: <a href=\\"https://eslint.org/docs/rules/id-length\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>id-length</code></a></p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// bad</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">q</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// good</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">query</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div></li>\\n<li>\\n<p>在命名对象、函数和实例时使用驼峰命名法（camelCase）。 eslint: <a href=\\"https://eslint.org/docs/rules/camelcase.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>camelcase</code></a></p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// bad</span>\\n<span class=\\"token keyword\\">const</span> OBJEcttsssss <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> this_is_my_object <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">c</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// good</span>\\n<span class=\\"token keyword\\">const</span> thisIsMyObject <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">thisIsMyFunction</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre></div></li>\\n<li>\\n<p>缩略词和缩写都必须是全部大写或者全部小写。</p>\\n<blockquote>\\n<p>为什么？因为名字是为了可读性，不是为了满足计算机算法。</p>\\n</blockquote>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// bad</span>\\n<span class=\\"token keyword\\">import</span> SmsContainer <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./containers/SmsContainer'</span>\\n\\n<span class=\\"token comment\\">// bad</span>\\n<span class=\\"token keyword\\">const</span> HttpRequests <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\">// good</span>\\n<span class=\\"token keyword\\">import</span> SMSContainer <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./containers/SMSContainer'</span>\\n\\n<span class=\\"token comment\\">// good</span>\\n<span class=\\"token keyword\\">const</span> HTTPRequests <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\">// also good</span>\\n<span class=\\"token keyword\\">const</span> httpRequests <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\">// best</span>\\n<span class=\\"token keyword\\">import</span> TextMessageContainer <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./containers/TextMessageContainer'</span>\\n\\n<span class=\\"token comment\\">// best</span>\\n<span class=\\"token keyword\\">const</span> requests <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">]</span>\\n</code></pre></div></li>\\n</ul>","autoDesc":true}`);export{ha as comp,ya as data};
