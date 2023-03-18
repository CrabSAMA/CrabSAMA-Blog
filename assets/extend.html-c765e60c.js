const n=JSON.parse(`{"key":"v-3b657254","path":"/JavaScript/extend.html","title":"JavaScript语言精粹：继承","lang":"zh-CN","frontmatter":{"title":"JavaScript语言精粹：继承","category":["JavaScript"],"description":"两种实现方式： 伪类 函数化 伪类 通过定义一个构造器，并扩充它的原型实现继承效果。 var Manmmal = function (name) { \\tthis.name = name; } Manmmal.prototype.get\\\\_name = function() { \\treturn this.name; } Manmmal.prototype.says = function() { \\treturn this.saying ''; } // 现在我们可以构造一个实例 var myMammal = new Mammal('Herb the Mammal'); var name = myMammal.get\\\\_name(); // 'Herb the Mammal'","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/JavaScript/extend.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"JavaScript语言精粹：继承"}],["meta",{"property":"og:description","content":"两种实现方式： 伪类 函数化 伪类 通过定义一个构造器，并扩充它的原型实现继承效果。 var Manmmal = function (name) { \\tthis.name = name; } Manmmal.prototype.get\\\\_name = function() { \\treturn this.name; } Manmmal.prototype.says = function() { \\treturn this.saying ''; } // 现在我们可以构造一个实例 var myMammal = new Mammal('Herb the Mammal'); var name = myMammal.get\\\\_name(); // 'Herb the Mammal'"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-17T16:52:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-17T16:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript语言精粹：继承\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-17T16:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"伪类","slug":"伪类","link":"#伪类","children":[]},{"level":2,"title":"函数化","slug":"函数化","link":"#函数化","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679071923000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":2.44,"words":733},"filePathRelative":"JavaScript/extend.md","localizedDate":"2023年3月17日","excerpt":"<p>两种实现方式：</p>\\n<ul>\\n<li>伪类</li>\\n<li>函数化</li>\\n</ul>\\n<h2> 伪类</h2>\\n<p>通过定义一个构造器，并扩充它的原型实现继承效果。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">Manmmal</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token class-name\\">Manmmal</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span>get\\\\<span class=\\"token function-variable function\\">_name</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token class-name\\">Manmmal</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">says</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>saying  <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 现在我们可以构造一个实例</span>\\n\\n<span class=\\"token keyword\\">var</span> myMammal <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Mammal</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Herb the Mammal'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> name <span class=\\"token operator\\">=</span> myMammal<span class=\\"token punctuation\\">.</span>get\\\\<span class=\\"token function\\">_name</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 'Herb the Mammal'</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
