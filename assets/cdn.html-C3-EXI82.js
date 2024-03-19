import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as a}from"./app-CzTMLA3i.js";const c="/CrabSAMA-Blog/assets/image-20220527182211038-50dqQVJP.png",i="/CrabSAMA-Blog/assets/image-20220527182227107-BeyXuw5b.png",r={},n=a('<p><code>Content Delivery Network</code>，即内容分发网络，通过各地部署的多套 <code>cache</code> 的静态镜像服务节点，通过空间来换取时间。用户向源站域名发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点直接快速响应，有效降低用户访问延迟，提升可用性。</p><p>未使用 <code>CDN</code>：</p><figure><img src="'+c+'" alt="image-20220527182211038" tabindex="0" loading="lazy"><figcaption>image-20220527182211038</figcaption></figure><p>使用了 <code>CDN</code>：</p><figure><img src="'+i+'" alt="image-20220527182227107" tabindex="0" loading="lazy"><figcaption>image-20220527182227107</figcaption></figure><p>使用 <code>CDN</code> 访问：用户发送请求 -&gt; 智能 <code>DNS</code> 的解析（根据 IP 判断地理位置、接入网类型、选择路由最短和负载最轻的服务器） -&gt; 取得缓存服务器 IP -&gt; 把内容返回给用户（如果缓存中有） -&gt; 向目标站发起请求 -&gt; 将结果返回给用户 -&gt; 将结果存入缓存服务器</p><p>优势：</p><ul><li>本地 <code>Cache</code> 加速</li><li>跨运营商的网络加速，保证不同网络的用户都能得到良好的访问质量</li><li>远程访问用户根据 <code>DNS</code> 负载均衡技术智能自动选择 <code>Cache</code> 服务器</li><li>自动生成服务器的远程 Mirror（镜像）cache 服务器，远程用户访问时从 cache 服务器上读取数据，减少远程访问的带宽、分担网络流量、减轻原站点 web 服务器负载等功能</li><li>广泛分布的 <code>CDN</code> 节点加上节点之间的智能冗余机制，可以有效地防止黑客入侵</li></ul>',8),p=[n];function d(g,l){return t(),o("div",null,p)}const C=e(r,[["render",d],["__file","cdn.html.vue"]]),h=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/cdn.html","title":"CDN入门","lang":"zh-CN","frontmatter":{"title":"CDN入门","date":"2022-05-27T10:21:55.000Z","category":["计算机网络"],"tag":["CDN"],"description":"Content Delivery Network，即内容分发网络，通过各地部署的多套 cache 的静态镜像服务节点，通过空间来换取时间。用户向源站域名发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点直接快速响应，有效降低用户访问延迟，提升可用性。 未使用 CDN： image-20220527182211038image-2022052...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/cdn.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"CDN入门"}],["meta",{"property":"og:description","content":"Content Delivery Network，即内容分发网络，通过各地部署的多套 cache 的静态镜像服务节点，通过空间来换取时间。用户向源站域名发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点直接快速响应，有效降低用户访问延迟，提升可用性。 未使用 CDN： image-20220527182211038image-2022052..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"CDN"}],["meta",{"property":"article:published_time","content":"2022-05-27T10:21:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CDN入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-27T10:21:55.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":1.27,"words":381},"filePathRelative":"计算机网络/cdn.md","localizedDate":"2022年5月27日","excerpt":"<p><code>Content Delivery Network</code>，即内容分发网络，通过各地部署的多套 <code>cache</code> 的静态镜像服务节点，通过空间来换取时间。用户向源站域名发起请求时，请求会被调度至最接近用户的服务节点，直接由服务节点直接快速响应，有效降低用户访问延迟，提升可用性。</p>\\n<p>未使用 <code>CDN</code>：</p>\\n<figure><figcaption>image-20220527182211038</figcaption></figure>\\n<p>使用了 <code>CDN</code>：</p>\\n<figure><figcaption>image-20220527182227107</figcaption></figure>","autoDesc":true}');export{C as comp,h as data};
