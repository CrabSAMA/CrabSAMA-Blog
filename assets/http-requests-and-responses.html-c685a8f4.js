const e=JSON.parse(`{"key":"v-b520f0d8","path":"/Node.js/http-requests-and-responses.html","title":"操作HTTP请求和响应的常见问题","lang":"zh-CN","frontmatter":{"title":"操作HTTP请求和响应的常见问题","date":"2020-07-09T07:53:34.000Z","lastUpdated":true,"category":["Node.js"],"description":"问： 为什么通过headers对象访问到的HTTP请求头或响应头字段不是驼峰的？ 答： 从规范上讲，HTTP请求头和响应头字段都应该是驼峰的。但现实是残酷的，不是每个HTTP服务端或客户端程序都严格遵循规范，所以NodeJS在处理从别的客户端或服务端收到的头字段时，都统一地转换为了小写字母格式，以便开发者能使用统一的方式来访问头字段，例如headers['content-length']。 问： 为什么http模块创建的HTTP服务器返回的响应是chunked传输方式的？ 答： 因为默认情况下，使用.writeHead方法写入响应头后，允许使用.write方法写入任意长度的响应体数据，并使用.end方法结束一个响应。由于响应体数据长度不确定，因此NodeJS自动在响应头里添加了Transfer-Encoding: chunked字段，并采用chunked传输方式。但是当响应体数据长度确定时，可使用.writeHead方法在响应头里加上Content-Length字段，这样做之后NodeJS就不会自动添加Transfer-Encoding字段和使用chunked传输方式。 问： 为什么使用http模块发起HTTP客户端请求时，有时候会发生socket hang up错误？ 答： 发起客户端HTTP请求前需要先创建一个客户端。http模块提供了一个全局客户端http.globalAgent，可以让我们使用.request或.get方法时不用手动创建客户端。但是全局客户端默认只允许5个并发Socket连接，当某一个时刻HTTP客户端请求创建过多，超过这个数字时，就会发生socket hang up错误。解决方法也很简单，通过http.globalAgent.maxSockets属性把这个数字改大些即可。另外，https模块遇到这个问题时也一样通过https.globalAgent.maxSockets属性来处理。","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/Node.js/http-requests-and-responses.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"操作HTTP请求和响应的常见问题"}],["meta",{"property":"og:description","content":"问： 为什么通过headers对象访问到的HTTP请求头或响应头字段不是驼峰的？ 答： 从规范上讲，HTTP请求头和响应头字段都应该是驼峰的。但现实是残酷的，不是每个HTTP服务端或客户端程序都严格遵循规范，所以NodeJS在处理从别的客户端或服务端收到的头字段时，都统一地转换为了小写字母格式，以便开发者能使用统一的方式来访问头字段，例如headers['content-length']。 问： 为什么http模块创建的HTTP服务器返回的响应是chunked传输方式的？ 答： 因为默认情况下，使用.writeHead方法写入响应头后，允许使用.write方法写入任意长度的响应体数据，并使用.end方法结束一个响应。由于响应体数据长度不确定，因此NodeJS自动在响应头里添加了Transfer-Encoding: chunked字段，并采用chunked传输方式。但是当响应体数据长度确定时，可使用.writeHead方法在响应头里加上Content-Length字段，这样做之后NodeJS就不会自动添加Transfer-Encoding字段和使用chunked传输方式。 问： 为什么使用http模块发起HTTP客户端请求时，有时候会发生socket hang up错误？ 答： 发起客户端HTTP请求前需要先创建一个客户端。http模块提供了一个全局客户端http.globalAgent，可以让我们使用.request或.get方法时不用手动创建客户端。但是全局客户端默认只允许5个并发Socket连接，当某一个时刻HTTP客户端请求创建过多，超过这个数字时，就会发生socket hang up错误。解决方法也很简单，通过http.globalAgent.maxSockets属性把这个数字改大些即可。另外，https模块遇到这个问题时也一样通过https.globalAgent.maxSockets属性来处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-17T16:52:03.000Z"}],["meta",{"property":"article:published_time","content":"2020-07-09T07:53:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-17T16:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作HTTP请求和响应的常见问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-09T07:53:34.000Z\\",\\"dateModified\\":\\"2023-03-17T16:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1679071923000,"updatedTime":1679071923000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.72,"words":517},"filePathRelative":"Node.js/http-requests-and-responses.md","localizedDate":"2020年7月9日","excerpt":"<ul>\\n<li>\\n<p>问： 为什么通过<code>headers</code>对象访问到的<code>HTTP</code>请求头或响应头字段不是驼峰的？\\n答： 从规范上讲，HTTP<code>请求</code>头和响应头字段都应该是驼峰的。但现实是残酷的，不是每个HTTP<code>服务</code>端或客户端程序都严格遵循规范，所以<code>NodeJS</code>在处理从别的客户端或服务端收到的头字段时，都统一地转换为了小写字母格式，以便开发者能使用统一的方式来访问头字段，例如<code>headers['content-length']</code>。</p>\\n</li>\\n<li>\\n<p>问： 为什么<code>http</code>模块创建的<code>HTTP</code>服务器返回的响应是<code>chunked</code>传输方式的？\\n答： 因为默认情况下，使用<code>.writeHead</code>方法写入响应头后，允许使用<code>.write</code>方法写入任意长度的响应体数据，并使用.end方法结束一个响应。由于响应体数据长度不确定，因此<code>NodeJS</code>自动在响应头里添加了<code>Transfer-Encoding: chunked</code>字段，并采用<code>chunked</code>传输方式。但是当响应体数据长度确定时，可使用<code>.writeHead</code>方法在响应头里加上<code>Content-Length</code>字段，这样做之后<code>NodeJS</code>就不会自动添加<code>Transfer-Encoding</code>字段和使用<code>chunked</code>传输方式。</p>\\n</li>\\n<li>\\n<p>问： 为什么使用<code>http</code>模块发起<code>HTTP</code>客户端请求时，有时候会发生<code>socket hang up</code>错误？\\n答： 发起客户端<code>HTTP</code>请求前需要先创建一个客户端。<code>http</code>模块提供了一个全局客户端<code>http.globalAgent</code>，可以让我们使用<code>.request</code>或<code>.get</code>方法时不用手动创建客户端。但是全局客户端默认只允许5个并发<code>Socket</code>连接，当某一个时刻<code>HTTP</code>客户端请求创建过多，超过这个数字时，就会发生<code>socket hang up</code>错误。解决方法也很简单，通过<code>http.globalAgent.maxSockets</code>属性把这个数字改大些即可。另外，<code>https</code>模块遇到这个问题时也一样通过https.globalAgent.maxSockets属性来处理。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{e as data};
