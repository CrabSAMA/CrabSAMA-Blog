const n=JSON.parse('{"key":"v-753163d3","path":"/%E7%AC%94%E8%AF%95%E9%A2%98/boolean-type-changed.html","title":"boolean类型转换","lang":"zh-CN","frontmatter":{"title":"boolean类型转换","category":["前端开发","笔试题"],"tag":["JavaScript"],"description":"&lt;html&gt; \\t&lt;body&gt; &lt;script type=\\"text/javascript\\"&gt; var test=new Boolean(); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(0); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(null); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(\\"\\"); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(NaN); document.write(test); document.write(\\"&lt;br /&gt;\\"); &lt;/script&gt; \\t&lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E7%AC%94%E8%AF%95%E9%A2%98/boolean-type-changed.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"boolean类型转换"}],["meta",{"property":"og:description","content":"&lt;html&gt; \\t&lt;body&gt; &lt;script type=\\"text/javascript\\"&gt; var test=new Boolean(); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(0); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(null); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(\\"\\"); document.write(test); document.write(\\"&lt;br /&gt;\\"); var test=new Boolean(NaN); document.write(test); document.write(\\"&lt;br /&gt;\\"); &lt;/script&gt; \\t&lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"boolean类型转换\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"笔试题/boolean-type-changed.md","localizedDate":"2023年3月17日","excerpt":"<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token keyword\\">var</span> test<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Boolean</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"&lt;br /&gt;\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">var</span> test<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Boolean</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"&lt;br /&gt;\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">var</span> test<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Boolean</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"&lt;br /&gt;\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">var</span> test<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Boolean</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"&lt;br /&gt;\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">var</span> test<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Boolean</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">NaN</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>test<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"&lt;br /&gt;\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
