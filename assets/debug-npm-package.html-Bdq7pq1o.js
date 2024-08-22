import{_ as e,c as o,o as c,i as d}from"./app-HKRI5wrG.js";const t="/CrabSAMA-Blog/assets/image-20220527170639933-BkcAmZuV.png",a={},r=d('<h2 id="前提场景" tabindex="-1"><a class="header-anchor" href="#前提场景"><span>前提场景</span></a></h2><p>使用 <code>webpack_dev_server</code> 的 <code>Vue</code> 项目</p><h2 id="调试步骤" tabindex="-1"><a class="header-anchor" href="#调试步骤"><span>调试步骤</span></a></h2><p>假设有一种需求，想要对引入的 <code>npm</code> 包进行调试，找出它里面的问题或者了解其运行的原理，我们就会涉及到对引入的包进行调试的需求，要解决的思路也比较简单。</p><ol><li><p>使用 <code>Chrome Dev Tool</code></p><p>我们可以直接运行项目，然后到 <code>Chrome</code> 中按 F12 打开 <code>Dev Tool</code>，切换到 <code>Source</code> 标签页。在这里面我们找到通过 <code>Webpack</code> 引入的包：</p><figure><img src="'+t+'" alt="image-20220527170639933" tabindex="0" loading="lazy"><figcaption>image-20220527170639933</figcaption></figure><p>在找到后，以 <code>iview</code> 这个包为例，我们可以看到它的打包方式是将很多个模块打包成一个 <code>js</code> 文件的形式，我们可以通过搜索找到对应的模块，直接打上断点即可调试。</p></li><li><p>使用 IDE</p><p>我们需要知道的一点是，其实我们直接 <code>import XXX from &#39;xxx&#39;</code> 进来的包，本质上是指向了 <code>node_module</code> 下对应的文件夹。在每个标准的 <code>npm</code> 包中，都会有一个 <code>package.json</code> 文件，其中的 <code>main</code> 属性指向了以上述方式引入直接指向的 <code>js</code> 文件，所以其实我们 <code>import</code> 进来的就是这个 <code>js</code> 文件。</p><p>因此我们可以直接杀到他家，在这个 <code>js</code> 文件中打上断点（<code>debugger</code>），在运行过程中就可以直接通过 <code>Dev Tool</code> 看到调试界面啦~（虽然这样还是要用到 <code>Chrome</code> 的 <code>Dev Tool</code>，但是在 <code>IDE</code> 中查看一些东西相对于 <code>Chrome</code> 还是更方便滴）</p></li></ol>',5),p=[r];function n(i,l){return c(),o("div",null,p)}const s=e(a,[["render",n],["__file","debug-npm-package.html.vue"]]),g=JSON.parse(`{"path":"/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/debug-npm-package.html","title":"调试 node_module 中的包","lang":"zh-CN","frontmatter":{"title":"调试 node_module 中的包","date":"2022-05-27T09:05:36.000Z","category":["解决方案"],"tag":["node.js","debug"],"description":"前提场景 使用 webpack_dev_server 的 Vue 项目 调试步骤 假设有一种需求，想要对引入的 npm 包进行调试，找出它里面的问题或者了解其运行的原理，我们就会涉及到对引入的包进行调试的需求，要解决的思路也比较简单。 使用 Chrome Dev Tool 我们可以直接运行项目，然后到 Chrome 中按 F12 打开 Dev Tool...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/debug-npm-package.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"调试 node_module 中的包"}],["meta",{"property":"og:description","content":"前提场景 使用 webpack_dev_server 的 Vue 项目 调试步骤 假设有一种需求，想要对引入的 npm 包进行调试，找出它里面的问题或者了解其运行的原理，我们就会涉及到对引入的包进行调试的需求，要解决的思路也比较简单。 使用 Chrome Dev Tool 我们可以直接运行项目，然后到 Chrome 中按 F12 打开 Dev Tool..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T14:39:40.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"node.js"}],["meta",{"property":"article:tag","content":"debug"}],["meta",{"property":"article:published_time","content":"2022-05-27T09:05:36.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-17T14:39:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试 node_module 中的包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-27T09:05:36.000Z\\",\\"dateModified\\":\\"2024-08-17T14:39:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"前提场景","slug":"前提场景","link":"#前提场景","children":[]},{"level":2,"title":"调试步骤","slug":"调试步骤","link":"#调试步骤","children":[]}],"git":{"createdTime":1653648648000,"updatedTime":1723905580000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":4}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"解决方案/debug-npm-package.md","localizedDate":"2022年5月27日","excerpt":"<h2>前提场景</h2>\\n<p>使用 <code>webpack_dev_server</code> 的 <code>Vue</code> 项目</p>\\n<h2>调试步骤</h2>\\n<p>假设有一种需求，想要对引入的 <code>npm</code> 包进行调试，找出它里面的问题或者了解其运行的原理，我们就会涉及到对引入的包进行调试的需求，要解决的思路也比较简单。</p>\\n<ol>\\n<li>\\n<p>使用 <code>Chrome Dev Tool</code></p>\\n<p>我们可以直接运行项目，然后到 <code>Chrome</code> 中按 F12 打开 <code>Dev Tool</code>，切换到 <code>Source</code> 标签页。在这里面我们找到通过 <code>Webpack</code> 引入的包：</p>\\n<figure><figcaption>image-20220527170639933</figcaption></figure>\\n<p>在找到后，以 <code>iview</code> 这个包为例，我们可以看到它的打包方式是将很多个模块打包成一个 <code>js</code> 文件的形式，我们可以通过搜索找到对应的模块，直接打上断点即可调试。</p>\\n</li>\\n<li>\\n<p>使用 IDE</p>\\n<p>我们需要知道的一点是，其实我们直接 <code>import XXX from 'xxx'</code> 进来的包，本质上是指向了 <code>node_module</code> 下对应的文件夹。在每个标准的 <code>npm</code> 包中，都会有一个 <code>package.json</code> 文件，其中的 <code>main</code> 属性指向了以上述方式引入直接指向的 <code>js</code> 文件，所以其实我们 <code>import</code> 进来的就是这个 <code>js</code> 文件。</p>\\n<p>因此我们可以直接杀到他家，在这个 <code>js</code> 文件中打上断点（<code>debugger</code>），在运行过程中就可以直接通过 <code>Dev Tool</code> 看到调试界面啦~（虽然这样还是要用到 <code>Chrome</code> 的 <code>Dev Tool</code>，但是在 <code>IDE</code> 中查看一些东西相对于 <code>Chrome</code> 还是更方便滴）</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as comp,g as data};