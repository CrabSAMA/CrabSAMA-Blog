const e=JSON.parse('{"key":"v-387be4d4","path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/nginx-reverse-proxy.html","title":"使用 nginx 实现反向代理","lang":"zh-CN","frontmatter":{"title":"使用 nginx 实现反向代理","date":"2022-05-27T09:12:22.000Z","category":["实际项目"],"tag":["nginx"],"description":"背景 在日常开发中，一般 Vue 有两种方式解决跨域问题，一是使用 Vue dev server 中的 proxyTable 选项，搭建本地的反向代理服务器，解决跨域；二是与后端小伙伴沟通，让其允许跨域。 但是这是在开发过程中，如果后端小伙伴不想开放跨域，然而我们确实是前后端分离部署会触发到同源策略的话，这下就需要我们搭建基于服务器上的反向代理。 在此之前，我们需要先搞明白一个概念，跨域安全策略是浏览器的一种安全策略，它会将不属于同一个源下的请求 block 掉，其实可以理解成，请求已经发送出去并且服务器已经做出响应，只是被浏览器这个中间人拦截下来了，因为它觉得这是不安全的请求。","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/nginx-reverse-proxy.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"使用 nginx 实现反向代理"}],["meta",{"property":"og:description","content":"背景 在日常开发中，一般 Vue 有两种方式解决跨域问题，一是使用 Vue dev server 中的 proxyTable 选项，搭建本地的反向代理服务器，解决跨域；二是与后端小伙伴沟通，让其允许跨域。 但是这是在开发过程中，如果后端小伙伴不想开放跨域，然而我们确实是前后端分离部署会触发到同源策略的话，这下就需要我们搭建基于服务器上的反向代理。 在此之前，我们需要先搞明白一个概念，跨域安全策略是浏览器的一种安全策略，它会将不属于同一个源下的请求 block 掉，其实可以理解成，请求已经发送出去并且服务器已经做出响应，只是被浏览器这个中间人拦截下来了，因为它觉得这是不安全的请求。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2022-05-27T09:12:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 nginx 实现反向代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-27T09:12:22.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"实操","slug":"实操","link":"#实操","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":2.63,"words":790},"filePathRelative":"实际项目/nginx-reverse-proxy.md","localizedDate":"2022年5月27日","excerpt":"<h2> 背景</h2>\\n<p>在日常开发中，一般 <code>Vue</code> 有两种方式解决跨域问题，一是使用 <code>Vue dev server</code> 中的 <code>proxyTable</code> 选项，搭建本地的反向代理服务器，解决跨域；二是与后端小伙伴沟通，让其允许跨域。</p>\\n<p>但是这是在开发过程中，如果后端小伙伴不想开放跨域，然而我们确实是前后端分离部署会触发到同源策略的话，这下就需要我们搭建基于服务器上的反向代理。</p>\\n<p>在此之前，我们需要先搞明白一个概念，跨域安全策略是浏览器的一种安全策略，它会将不属于同一个源下的请求 block 掉，其实可以理解成，请求已经发送出去并且服务器已经做出响应，只是被浏览器这个中间人拦截下来了，因为它觉得这是不安全的请求。</p>","autoDesc":true}');export{e as data};
