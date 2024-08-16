import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as l,i}from"./app-CfhW4omD.js";const s={},t=i(`<blockquote><p>参考链接：</p><p><a href="https://www.jiangruitao.com/babel/" target="_blank" rel="noopener noreferrer">姜瑞涛的 babel 教程</a></p><p><a href="https://babeljs.io/docs/" target="_blank" rel="noopener noreferrer">babel 官方文档</a></p><p><a href="https://www.babeljs.cn/" target="_blank" rel="noopener noreferrer">babel 中文文档</a></p></blockquote><h2 id="babel-是什么" tabindex="-1"><a class="header-anchor" href="#babel-是什么"><span>babel 是什么</span></a></h2><p>Babel 是一个 JavaScript 编译器。在开发过程中，由于浏览器的兼容问题，ES6 版本的代码在低版本浏览器和其他环境上有可能会有兼容性问题。Babel 就在其中做了转译的一个工作，将 ES6 版本的代码转换为 ES5 等向后兼容的 JS 代码。有了 babel 后，我们就可以在工作中使用最新的 ES 规范写代码，最后用 babel 将代码转换为 ES5 的代码，这样就不用担心运行环境是否支持了。</p><p>下面说到的都是以最新的 babel 7 版本为例，babel 6 相关的包名等不一致，要尽快升级到新版本~</p><p>在开始之前，列一下我们常用到的工具链与库：</p><ul><li>@babel/cli</li><li>@babel/core</li><li>@babel/preset-env</li><li>@babel/runtime</li><li>@babel/plugin-transform-runtime</li><li>babel-loader(webpack)</li></ul><h2 id="babel-配置文件" tabindex="-1"><a class="header-anchor" href="#babel-配置文件"><span>babel 配置文件</span></a></h2><p>babel 支持 <code>.babelrc</code> / <code>.babelr.json</code>/ <code>babel.config.json</code> / <code>babel.config.js</code> / <code>package.json</code> 等多种格式的配置文件，格式基本上都是如下：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;presets&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;plugins&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里面会有一个小坑，官方明确表达了如果需要编译 <code>node_modules</code> 时，需要用 <code>babel.config.json</code> 来作为配置文件，同时该类型的配置文件仅在 babel7 下支持！在没什么特殊情况下，我们都建议使用 <code>babel.config.json</code> 来作为配置文件。</p><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h2><h3 id="babel-cli" tabindex="-1"><a class="header-anchor" href="#babel-cli"><span>@babel/cli</span></a></h3><p>顾名思义，这是一个 cli 工具，在 npm 安装后我们可以直接使用 <code>npx babel input.js</code> 来编译传入的代码。工具会自动按顺序读取配置文件，根据对应的配置来进行代码转译。</p><h3 id="babel-core" tabindex="-1"><a class="header-anchor" href="#babel-core"><span>@babel/core</span></a></h3><p>core 指的是核心，这个包里面包含了 babel 的一些核心 api。它提供了一系列与编译相关的 api，我们可以通过代码引入这个包，手动进行一些代码的 transform 与 parse。</p><h3 id="babel-runtime" tabindex="-1"><a class="header-anchor" href="#babel-runtime"><span>@babel/runtime</span></a></h3><p><strong>babel 的工具包</strong></p><p>在我们用 babel 做语法转换的时候，需要 babel 在转换后的代码里注入一些函数才能正常工作，这些就是辅助函数。@babel/preset-env 在做语法转换的时候，注入了这些函数声明，以便语法转换后使用。</p><p>但这也存在着一些问题，在开发过程中，js 文件多则上千个，如果每个文件里都用到了新语法，那么就会导致每个转换后的文件都会加上相同的函数声明，会导致打包出来的包特别大，而且有很多重复的内容。</p><p>有一种思路就是，我们把这些函数声明都放到公共的 npm 包中，需要使用的时候直接从这个包里引入。这样即使很多地方用到了这些函数，都是从同一个地方引入的，在打包时只会将 npm 包中的函数引入一次，这样就做到了代码的复用。</p><p>@babel/runtime 就是这样的一个 npm 包，这个包将所有语法转换会用到的辅助函数都集成在了一起。</p><p>在安装 @babel/preset-env 的时候，其实已经自动安装了 @babel/runtime，不过在项目开发的时候，我们一般都会再单独 install 一遍 @babel/runtime。</p><p>需要注意的是，其他 @babel 包一般安装在 <code>devDependencies</code> 中，但是 @babel/runtime 是个例外，它一般安装在 <code>dependencies</code> 中。</p><h3 id="babel-loader" tabindex="-1"><a class="header-anchor" href="#babel-loader"><span>babel-loader</span></a></h3><p>babel-loader 是一个 webpack loader，在 webpack + babel 的开发流程中经常用到，以便 webpack 在构建的时候用 babel 对 JS 代码进行转译，这样我们就不用再通过命令行手动转译了。</p><p>我们一般会将 <code>mjs/js</code> 文件给到 babel-loader 进行处理，babel-loader 会自动找到 babel 的配置文件，并根据配置对传入的代码进行转换。</p><h2 id="预设" tabindex="-1"><a class="header-anchor" href="#预设"><span>预设</span></a></h2><h3 id="babel-preset-env" tabindex="-1"><a class="header-anchor" href="#babel-preset-env"><span>@babel/preset-env</span></a></h3><p><strong>babel 的控制者</strong></p><p>preset 指的是预设。在 babel6 的时代，常见的 preset 有 babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2 等。这些预设多得眼花缭乱，同时对我们开发者选择时也容易造成误解，因此在 babel7 版本中，@babel/preset-env 包含了 babel-preset-latest 的功能，并对其进行增强，现在 @babel/preset-env 完全可以替代 babel-preset-latest。</p><p>@babel/preset-env 是构建在其它优秀的开源项目之上的，它会根据 <code>browserslist</code> 等配置，智能地选择转译的规则。在没配置 polyfill 时，一般 @babel/preset-env 只会负责<strong>词法的转换</strong>，也就是 <code>const</code> 、箭头函数等<strong>静态</strong>的语法转译，对于 <code>Promise</code> 等运行时逻辑不会做任何处理。</p><h3 id="babel-preset-react" tabindex="-1"><a class="header-anchor" href="#babel-preset-react"><span>@babel/preset-react</span></a></h3><p>babel 可以对 react 中用到的 jsx 语法进行转译，转换为对应的 <code>React.createElement</code> 函数。</p><h2 id="集成工具包" tabindex="-1"><a class="header-anchor" href="#集成工具包"><span>集成工具包</span></a></h2><h3 id="babel-polyfill" tabindex="-1"><a class="header-anchor" href="#babel-polyfill"><span>@babel/polyfill</span></a></h3><p><strong>运行时的转换器</strong></p><p>上面说到一些运行时逻辑是无法直接处理的，因此 @babel/polyfill 就做了这样的事情。polyfill 直译过来就是“垫片”，就是通过一些巧妙的方法<strong>将新语法通过旧语法实现</strong>。</p><p>从 babel7.4 开始，官方不推荐再使用 @babel/polyfill 了，因为 @babel/polyfill 本身其实就是两个 npm 包的集合：core-js 与 regenerator-runtime。官方推荐直接使用这两个包，因为 @babel/polyfill 使用的 core-js 包为 2.x.x 版本，而 core-js 这个包本身已经发布到 3.x.x 版本了，@babel/polyfill 以后也不会使用 3.x.x 版本的包了，想要使用新版本的 core-js 就需要手动去安装 core-js。</p><p>总体来说，babel 官方的 polyfill 使用方法主要有以下几种：</p><ol><li>直接在 html 文件引入 Babel 官方的 polyfill.js 脚本文件；</li><li>在前端工程的入口文件里引入 polyfill.js；</li><li>在前端工程的入口文件里引入 @babel/polyfill；</li><li>在前端工程的入口文件里引入 core-js/stable 与 regenerator-runtime/runtime；</li><li>在前端工程构建工具的配置文件入口项引入 polyfill.js；</li><li>在前端工程构建工具的配置文件入口项引入 @babel/polyfill；</li><li>在前端工程构建工具的配置文件入口项引入 core-js/stable 与 regenerator-runtime/runtime；</li></ol><p>1 就是直接通过 script 标签引入；</p><p>2-4 一般都是在 webpack / rollup / vite 的入口文件中直接 <code>import &#39;@babel/polyfill&#39; </code>；</p><p>5-7 不同的构建工具不一样，举个例子，在 webpack 下就是直接在 <code>entry</code> 属性配置为：<code>[&#39;@babel/polyfill&#39;, &#39;entry.js&#39;]</code>。</p><h3 id="babel-plugin-transform-runtime" tabindex="-1"><a class="header-anchor" href="#babel-plugin-transform-runtime"><span>@babel/plugin-transform-runtime</span></a></h3><p><strong>babel 的自动路由器</strong></p><p>有了 @babel/runtime 这个包后，我们就可以在每个用到辅助函数的地方都引入一下，这样是解决了问题，但是又引入了新的问题：这么多函数我们要一个个记住，用到再引入，十分地繁琐，一般人做不到的同时也会觉得很烦。这个时候，@babel/plugin-transform-runtime 的出现就是解决这个问题的。</p><p>@babel/plugin-transform-runtime 有三大作用：</p><ol><li>自动移除语法转换后内联的辅助函数（inline babel helpers），使用 @babel/runtime/helpers 里的辅助函数来替代；</li><li>当代码里使用了 core-js 的 API，自动引入 @babel/runtime-corejs3/core-js-stable/，以此来替代全局引入的 core-js/stable;</li><li>当代码里使用了 Generator/async 函数，自动引入 @babel/runtime/regenerator，以此来替代全局引入的 regenerator-runtime/runtime。</li></ol><p>作用 1 很容易理解，它会自动识别并引入 @babel/runtime 中的辅助函数，省得手动引入的麻烦，而且都从 @babel/runtime 中引入，减少了重复的代码占用。</p><p>作用 2、3 其实说的是同一个事情，之前我们说到了手动引入 @babel/polyfill 来实现全局 API 的补齐，但这也会有一个问题，那就是对运行时的环境进行了污染，例如 <code>Promise</code>，在 polyfill 中是直接对浏览器的全局对象 window 进行了重新赋值，用我们自己实现的 <code>Promise</code> 来重写了浏览器的对象与原型链。</p><p>我们并不想要这种副作用，因此使用 @babel/plugin-transform-runtime 将代码中用到的 API 进行转换，举个例子：</p><p>babel 转换前的代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>若使用了 @babel/polyfill 或 core-js/stable 与 regenerator-runtime/runtime 来做全局的 API 补齐，那么 babel 转换后的代码仍然是</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>polyfill 只是补齐了浏览器的 window.Promise 对象。</p><p>若我们不使用 polyfill，而开启 @babel/plugin-transform-runtime 的 API 转换功能。那么 babel 转换后的代码将是</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> _interopRequireDefault</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;@babel/runtime-corejs3/helpers/interopRequireDefault&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> _promise</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _interopRequireDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;@babel/runtime-corejs3/core-js-stable/promise&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> _promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;default&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@babel/plugin-transform-runtime 把我们代码里的 Promise 变成了 _promise[&quot;default&quot;]，而 _promise[&quot;default&quot;] 拥有 ES 标准里 Promise 所有的功能。现在，即使浏览器没有 Promise，我们的代码也能正常运行。</p><p>我们到现在有两种方式可以解决问题，一是直接通过 polyfill 转换，二是通过 API 转换。API 转换一般是给开发库的人来使用的，前端工程中一般仍然使用 polyfill 来补齐 API（但如果你有更高的体积需求也可以用 API 转换）。</p><p>可以想象，如果开发 JS 库的人使用 polyfill 补齐 API，我们自己前端工程也是用 polyfill 补全 API，但是两个库的 polyfill 版本并不一致，那么我们引入这个库之后很可能会导致前端工程出问题，因此开发库的人会用到 API 转换功能。</p><p>上面用的是 <code>Promise</code> 来作例子，属于作用 2，即使用 core-js 来进行转换，作用 3 说的是 Generator/async，也就是 async 函数的转译。在默认情况下，@babel/plugin-transform-runtime 对 Generator/async 进行 API 转换功能，默认是开启的，不需要我们设置。</p>`,62),r=[t];function n(b,p){return l(),a("div",null,r)}const d=e(s,[["render",n],["__file","babel.html.vue"]]),c=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/babel.html","title":"探索 babel","lang":"zh-CN","frontmatter":{"title":"探索 babel","date":"2023-03-17T09:55:51.000Z","category":["学习笔记"],"tag":["babel","前端工程化"],"description":"参考链接： 姜瑞涛的 babel 教程 babel 官方文档 babel 中文文档 babel 是什么 Babel 是一个 JavaScript 编译器。在开发过程中，由于浏览器的兼容问题，ES6 版本的代码在低版本浏览器和其他环境上有可能会有兼容性问题。Babel 就在其中做了转译的一个工作，将 ES6 版本的代码转换为 ES5 等向后兼容的 JS ...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/babel.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"探索 babel"}],["meta",{"property":"og:description","content":"参考链接： 姜瑞涛的 babel 教程 babel 官方文档 babel 中文文档 babel 是什么 Babel 是一个 JavaScript 编译器。在开发过程中，由于浏览器的兼容问题，ES6 版本的代码在低版本浏览器和其他环境上有可能会有兼容性问题。Babel 就在其中做了转译的一个工作，将 ES6 版本的代码转换为 ES5 等向后兼容的 JS ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"babel"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2023-03-17T09:55:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"探索 babel\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-17T09:55:51.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"babel 是什么","slug":"babel-是什么","link":"#babel-是什么","children":[]},{"level":2,"title":"babel 配置文件","slug":"babel-配置文件","link":"#babel-配置文件","children":[]},{"level":2,"title":"工具","slug":"工具","link":"#工具","children":[{"level":3,"title":"@babel/cli","slug":"babel-cli","link":"#babel-cli","children":[]},{"level":3,"title":"@babel/core","slug":"babel-core","link":"#babel-core","children":[]},{"level":3,"title":"@babel/runtime","slug":"babel-runtime","link":"#babel-runtime","children":[]},{"level":3,"title":"babel-loader","slug":"babel-loader","link":"#babel-loader","children":[]}]},{"level":2,"title":"预设","slug":"预设","link":"#预设","children":[{"level":3,"title":"@babel/preset-env","slug":"babel-preset-env","link":"#babel-preset-env","children":[]},{"level":3,"title":"@babel/preset-react","slug":"babel-preset-react","link":"#babel-preset-react","children":[]}]},{"level":2,"title":"集成工具包","slug":"集成工具包","link":"#集成工具包","children":[{"level":3,"title":"@babel/polyfill","slug":"babel-polyfill","link":"#babel-polyfill","children":[]},{"level":3,"title":"@babel/plugin-transform-runtime","slug":"babel-plugin-transform-runtime","link":"#babel-plugin-transform-runtime","children":[]}]}],"git":{"createdTime":1679047229000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":8.07,"words":2421},"filePathRelative":"学习笔记/babel.md","localizedDate":"2023年3月17日","excerpt":"<blockquote>\\n<p>参考链接：</p>\\n<p><a href=\\"https://www.jiangruitao.com/babel/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">姜瑞涛的 babel 教程</a></p>\\n<p><a href=\\"https://babeljs.io/docs/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">babel 官方文档</a></p>\\n<p><a href=\\"https://www.babeljs.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">babel 中文文档</a></p>\\n</blockquote>","autoDesc":true}');export{d as comp,c as data};
