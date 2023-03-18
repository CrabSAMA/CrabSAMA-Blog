const e=JSON.parse('{"key":"v-6d946d17","path":"/HTML/browser-loading-mechanism-and-fouc.html","title":"浏览器的加载机制与白屏现象","lang":"zh-CN","frontmatter":{"title":"浏览器的加载机制与白屏现象","date":"2020-08-19T08:07:44.000Z","category":["前端开发","浏览器"],"tag":["浏览器","性能优化"],"description":"从资源请求完成到页面的显示： 解析HTML字符串构建DOM树 解析CSS样式，产生CSSOM树 执行js脚本文件，js加载完成，通过DOM API 和 CSSOM API 来操作DOM树和CSSOM树 浏览器根据DOM树和CSSOM树构建渲染树（rendering tree），渲染树包括显示的节点和节点显示的样式信息，如果某个节点设置了样式 display: none，那么就不会在渲染树中显示，如果设置visibility:hidden渲染树中存在该节点，但不显示。 根据渲染树对每一个节点在页面上进行布局。（reflow） 遍历渲染树，为每一个节点绘制对应的样式，显示到屏幕。(repaint)","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/HTML/browser-loading-mechanism-and-fouc.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"浏览器的加载机制与白屏现象"}],["meta",{"property":"og:description","content":"从资源请求完成到页面的显示： 解析HTML字符串构建DOM树 解析CSS样式，产生CSSOM树 执行js脚本文件，js加载完成，通过DOM API 和 CSSOM API 来操作DOM树和CSSOM树 浏览器根据DOM树和CSSOM树构建渲染树（rendering tree），渲染树包括显示的节点和节点显示的样式信息，如果某个节点设置了样式 display: none，那么就不会在渲染树中显示，如果设置visibility:hidden渲染树中存在该节点，但不显示。 根据渲染树对每一个节点在页面上进行布局。（reflow） 遍历渲染树，为每一个节点绘制对应的样式，显示到屏幕。(repaint)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"浏览器的加载机制与白屏现象"}],["meta",{"property":"article:tag","content":"浏览器"}],["meta",{"property":"article:tag","content":"性能优化"}],["meta",{"property":"article:published_time","content":"2020-08-19T08:07:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浏览器的加载机制与白屏现象\\",\\"image\\":[\\"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/\\"],\\"datePublished\\":\\"2020-08-19T08:07:44.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":2.95,"words":886},"filePathRelative":"HTML/browser-loading-mechanism-and-fouc.md","localizedDate":"2020年8月19日","excerpt":"<p><strong>从资源请求完成到页面的显示：</strong></p>\\n<ol>\\n<li>解析<code>HTML</code>字符串构建<code>DOM</code>树</li>\\n<li>解析<code>CSS</code>样式，产生<code>CSSOM</code>树</li>\\n<li>执行<code>js</code>脚本文件，<code>js</code>加载完成，通过<code>DOM API</code> 和 <code>CSSOM API</code> 来操作<code>DOM</code>树和<code>CSSOM</code>树</li>\\n<li>浏览器根据<code>DOM</code>树和<code>CSSOM</code>树构建渲染树（rendering tree），渲染树包括显示的节点和节点显示的样式信息，如果某个节点设置了样式 <code>display: none</code>，那么就不会在渲染树中显示，如果设置<code>visibility:hidden</code>渲染树中存在该节点，但不显示。</li>\\n<li>根据渲染树对每一个节点在页面上进行布局。（<code>reflow</code>）</li>\\n<li>遍历渲染树，为每一个节点绘制对应的样式，显示到屏幕。(<code>repaint</code>)</li>\\n</ol>","autoDesc":true}');export{e as data};
