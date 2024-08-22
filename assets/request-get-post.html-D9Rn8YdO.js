import{_ as e,c as o,o as t,i as c}from"./app-HKRI5wrG.js";const d={},p=c('<h2 id="get-请求和-post-请求的区别" tabindex="-1"><a class="header-anchor" href="#get-请求和-post-请求的区别"><span>Get 请求和 Post 请求的区别</span></a></h2><ul><li><p>在浏览器进行回退操作时，<code>get</code> 请求是无害的，而 <code>post</code> 请求则会重新请求一次</p></li><li><p><code>get</code> 请求参数是连接在 <code>url</code> 后面的，而 <code>post</code> 请求参数是存放在 <code>request body</code> 内的</p></li><li><p><code>get</code> 请求因为浏览器对 <code>url</code> 长度有限制（不同浏览器长度限制不一样），所以对传参数量有限制；而 <code>post</code> 请求因为参数存放在 request body 内，所以参数数量没有限制。（事实上，<code>get</code> 请求也能在 <code>request body</code> 携带参数，只是不符合规定，有的浏览器能够获取到数据，而有的不能）</p></li><li><p>因为 <code>get</code> 请求参数暴露在 <code>url</code> 上，所以安全方面 <code>post</code> 比 <code>get</code> 更加安全</p></li><li><p><code>get</code> 请求浏览器会主动 <code>cache</code>，除非主动设置否则 <code>post</code> 并不会</p></li><li><p><code>get</code> 请求只能进行 <code>url</code> 编码，而 <code>post</code> 请求可以支持多种编码方式</p></li><li><p><code>get</code> 请求产生一个 <code>tcp</code> 数据包，<code>post</code> 请求产生两个 <code>tcp</code> 数据包</p><p>浏览器在发送 <code>get</code> 请求时会将 <code>header</code> 和 <code>data</code> 一起发送给服务器，服务器返回 <code>200</code> 状态码；而在发送 <code>post</code> 请求时，会先将 <code>header</code> 发送给服务器，服务器返回 <code>100</code>，之后再将 <code>data</code> 发送给服务器，服务器返回 <code>200 OK</code>。</p></li></ul>',2),r=[p];function a(s,l){return t(),o("div",null,r)}const n=e(d,[["render",a],["__file","request-get-post.html.vue"]]),g=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/request-get-post.html","title":"Get 和 Post 请求的区别","lang":"zh-CN","frontmatter":{"title":"Get 和 Post 请求的区别","date":"2022-05-27T10:48:34.000Z","category":["学习笔记"],"tag":["HTTP","计算机网络"],"description":"Get 请求和 Post 请求的区别 在浏览器进行回退操作时，get 请求是无害的，而 post 请求则会重新请求一次 get 请求参数是连接在 url 后面的，而 post 请求参数是存放在 request body 内的 get 请求因为浏览器对 url 长度有限制（不同浏览器长度限制不一样），所以对传参数量有限制；而 post 请求因为参数存放在...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/request-get-post.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Get 和 Post 请求的区别"}],["meta",{"property":"og:description","content":"Get 请求和 Post 请求的区别 在浏览器进行回退操作时，get 请求是无害的，而 post 请求则会重新请求一次 get 请求参数是连接在 url 后面的，而 post 请求参数是存放在 request body 内的 get 请求因为浏览器对 url 长度有限制（不同浏览器长度限制不一样），所以对传参数量有限制；而 post 请求因为参数存放在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T14:39:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2022-05-27T10:48:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-17T14:39:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get 和 Post 请求的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-27T10:48:34.000Z\\",\\"dateModified\\":\\"2024-08-17T14:39:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"Get 请求和 Post 请求的区别","slug":"get-请求和-post-请求的区别","link":"#get-请求和-post-请求的区别","children":[]}],"git":{"createdTime":1653648648000,"updatedTime":1723905566000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":4}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"学习笔记/request-get-post.md","localizedDate":"2022年5月27日","excerpt":"<h2>Get 请求和 Post 请求的区别</h2>\\n<ul>\\n<li>\\n<p>在浏览器进行回退操作时，<code>get</code> 请求是无害的，而 <code>post</code> 请求则会重新请求一次</p>\\n</li>\\n<li>\\n<p><code>get</code> 请求参数是连接在 <code>url</code> 后面的，而 <code>post</code> 请求参数是存放在 <code>request body</code> 内的</p>\\n</li>\\n<li>\\n<p><code>get</code> 请求因为浏览器对 <code>url</code> 长度有限制（不同浏览器长度限制不一样），所以对传参数量有限制；而 <code>post</code> 请求因为参数存放在 request body 内，所以参数数量没有限制。（事实上，<code>get</code> 请求也能在 <code>request body</code> 携带参数，只是不符合规定，有的浏览器能够获取到数据，而有的不能）</p>\\n</li>\\n<li>\\n<p>因为 <code>get</code> 请求参数暴露在 <code>url</code> 上，所以安全方面 <code>post</code> 比 <code>get</code> 更加安全</p>\\n</li>\\n<li>\\n<p><code>get</code> 请求浏览器会主动 <code>cache</code>，除非主动设置否则 <code>post</code> 并不会</p>\\n</li>\\n<li>\\n<p><code>get</code> 请求只能进行 <code>url</code> 编码，而 <code>post</code> 请求可以支持多种编码方式</p>\\n</li>\\n<li>\\n<p><code>get</code> 请求产生一个 <code>tcp</code> 数据包，<code>post</code> 请求产生两个 <code>tcp</code> 数据包</p>\\n<p>浏览器在发送 <code>get</code> 请求时会将 <code>header</code> 和 <code>data</code> 一起发送给服务器，服务器返回 <code>200</code> 状态码；而在发送 <code>post</code> 请求时，会先将 <code>header</code> 发送给服务器，服务器返回 <code>100</code>，之后再将 <code>data</code> 发送给服务器，服务器返回 <code>200 OK</code>。</p>\\n</li>\\n</ul>","autoDesc":true}');export{n as comp,g as data};