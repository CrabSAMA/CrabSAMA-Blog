const e=JSON.parse('{"key":"v-a170c1fa","path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/nginx-replace.html","title":"使用 nginx 实现内容替换","lang":"zh-CN","frontmatter":{"title":"使用 nginx 实现内容替换","date":"2022-07-28T09:19:53.000Z","lastUpdated":true,"category":["实际项目"],"description":"背景 公司大前端提供的平台里看到了一个功能，在代码中写特定的链接，例如 __REPLACE__，在实际访问时会替换成指定内容，来实现 CDN 的功能。在看到这个功能后，对它具体是怎么实现的比较好奇，因此看看具体是怎么操作的。 实操 nginx 提供了 sub_filter 模块来实现重写 content 的功能。 我们需要找到 nginx 的安装目录，进入其 conf 文件夹，打开 nginx.conf 配置文件。","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/nginx-replace.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"使用 nginx 实现内容替换"}],["meta",{"property":"og:description","content":"背景 公司大前端提供的平台里看到了一个功能，在代码中写特定的链接，例如 __REPLACE__，在实际访问时会替换成指定内容，来实现 CDN 的功能。在看到这个功能后，对它具体是怎么实现的比较好奇，因此看看具体是怎么操作的。 实操 nginx 提供了 sub_filter 模块来实现重写 content 的功能。 我们需要找到 nginx 的安装目录，进入其 conf 文件夹，打开 nginx.conf 配置文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-17T16:52:03.000Z"}],["meta",{"property":"article:published_time","content":"2022-07-28T09:19:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-17T16:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 nginx 实现内容替换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-28T09:19:53.000Z\\",\\"dateModified\\":\\"2023-03-17T16:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"实操","slug":"实操","link":"#实操","children":[]},{"level":2,"title":"进阶","slug":"进阶","link":"#进阶","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679071923000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"实际项目/nginx-replace.md","localizedDate":"2022年7月28日","excerpt":"<h2> 背景</h2>\\n<p>公司大前端提供的平台里看到了一个功能，在代码中写特定的链接，例如 <code>__REPLACE__</code>，在实际访问时会替换成指定内容，来实现 <code>CDN</code> 的功能。在看到这个功能后，对它具体是怎么实现的比较好奇，因此看看具体是怎么操作的。</p>\\n<h2> 实操</h2>\\n<p><code>nginx</code> 提供了 <code>sub_filter</code> 模块来实现重写 content 的功能。</p>\\n<p>我们需要找到 <code>nginx</code> 的安装目录，进入其 <code>conf</code> 文件夹，打开 <code>nginx.conf</code> 配置文件。</p>","autoDesc":true}');export{e as data};
