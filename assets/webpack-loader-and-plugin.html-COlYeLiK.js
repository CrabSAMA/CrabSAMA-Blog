import{_ as s,c as a,i as e,o as l}from"./app-CNzJ7I-c.js";const n={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<p><a href="https://juejin.cn/post/7067051380803895310" target="_blank" rel="noopener noreferrer">掘金参考文章</a></p><h2 id="webpack简介" tabindex="-1"><a class="header-anchor" href="#webpack简介"><span>Webpack简介</span></a></h2><p><code>Webpack</code> 是一个用于现代 <code>JavaScript</code> 应用程序的<strong>静态模块打包工具</strong>。当 <code>Webpack</code> 处理应用程序时，它会在内部从一个或多个入口点构建一个<strong>依赖图</strong>，然后将项目中所需的每一个模块组合成一个或多个 <code>bundles</code>，它们均为静态资源，用于展示你的内容。</p><h3 id="webpack的一些核心概念" tabindex="-1"><a class="header-anchor" href="#webpack的一些核心概念"><span>Webpack的一些核心概念</span></a></h3><ul><li>Entry：入口，指示 <code>Webpack</code> 应该使用哪个模块，来作为构建其内部 依赖图(<code>dependency graph</code>) 的开始。</li><li>Output：输出结果，告诉 <code>Webpack</code> 在哪里输出它所创建的 bundle，以及如何命名这些文件。</li><li>Module：模块，在 <code>Webpack</code> 里一切皆模块，一个模块对应着一个文件。<code>Webpack</code> 会从配置的 <code>Entry</code> 开始递归找出所有依赖的模块。</li><li>Chunk：代码块，一个 <code>Chunk</code> 由多个模块组合而成，用于代码合并与分割。</li><li>Loader：模块代码转换器，让<code>webpack</code>能够去处理除了JS、JSON之外的其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。</li><li>Plugin：扩展插件。在<code>webpack</code>运行的生命周期中会广播出许多事件，<code>plugin</code>可以监听这些事件，在合适的时机通过<code>webpack</code>提供的api改变输出结果。常见的有：打包优化，资源管理，注入环境变量。</li><li>Mode：模式，告知 <code>webpack</code> 使用相应模式的内置优化</li><li>Browser Compatibility：浏览器兼容性，<code>Webpack</code> 支持所有符合 <code>ES5</code> 标准 的浏览器（IE8以上版本）</li></ul><h2 id="回归正题-loader-和-plugin-究竟是什么" tabindex="-1"><a class="header-anchor" href="#回归正题-loader-和-plugin-究竟是什么"><span>回归正题，loader 和 plugin 究竟是什么？</span></a></h2><p>我们可以通过<code>loader</code>和<code>plugin</code>机制去进一步扩展能力，按照项目需要去实现个性化的功能。</p><p><code>Webpack</code> 是由<code>nodejs</code>编写的前端资源加载/打包工具，由<code>nodejs</code>提供了强大的文件处理，IO能力。</p><p><code>Loader</code> 和 <code>Plugin</code> 在 <code>Webpack</code> 里是支柱能力。在整个构建流程中，<code>Loader</code> 和 <code>Plugin</code> 对编译结果起着决定性的作用。</p><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader"><span>Loader</span></a></h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p><code>Webpack</code> 中提供了一种处理多种文件格式的机制，这就是 <code>Loader</code>，我们可以把<code>Loader</code>当成一个转换器，它可以将某种格式的文件转换成<code>Webpack</code>支持打包的模块。平时在 <code>webpack.config.js</code> 里经常会看见 <code>rules</code> 这个字段，其实就是通过正则匹配的方式来找到 <code>Loader</code> 需要处理的文件，并通过 <code>Loader</code> 对文件进行处理。</p><p>在<code>Webpack</code>中，一切皆模块，我们常见的<code>Javascript</code>、<code>CSS</code>、<code>Less</code>、<code>Typescript</code>、<code>Jsx</code>、图片等文件都是模块，不同模块的加载是通过<strong>模块加载器</strong>来统一管理的，这里的模块加载器指的就是 <code>Loader</code> 。当我们需要使用不同的 <code>Loader</code> 来解析不同类型的文件时，我们可以在<code>module.rules</code>字段下配置相关规则。</p><h3 id="loader特点" tabindex="-1"><a class="header-anchor" href="#loader特点"><span>Loader特点</span></a></h3><ul><li><code>loader</code> 本质上是一个函数，<code>output=loader(input)</code> ；<code>input</code>可为工程源文件的字符串，也可是上一个<code>loader</code>转化后的结果；</li><li>第一个 <code>loader</code> 的传入参数只有一个：资源文件(<code>resource file</code>)的内容；</li><li><code>loader</code>支持<strong>链式调用</strong>，<code>webpack</code>打包时是按照数组<strong>从后往前</strong>的顺序将资源交给<code>loader</code>处理的。</li><li>支持同步或异步函数。</li></ul><h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构"><span>代码结构</span></a></h3><p>代码结构通常如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// source：资源输入，对于第一个执行的 loader 为资源文件的内容；后续执行的 loader 则为前一个 loader 的执行结果</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// sourceMap: 可选参数，代码的 sourcemap 结构</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// data: 可选参数，其它需要在 Loader 链中传递的信息，比如 posthtml/posthtml-loader 就会通过这个参数传递参数的 AST 对象</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> loaderUtils</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;loader-utils&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sourceMap</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 获取到用户给当前 Loader 传入的 options</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> options</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> loaderUtils</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // TODO： 此处为转换source的逻辑</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我自己写了一个loader" tabindex="-1"><a class="header-anchor" href="#我自己写了一个loader"><span>我自己写了一个Loader……</span></a></h3><p>目标是匹配到项目中 i18n 方法（<code>$t(&#39;&#39;)</code>）中的 <code>key</code> 值并打印出来：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 此处拿到的 source，就是文件内容</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 此处正则用于匹配 $t(xxx)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> reg</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;"> /</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\$</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">t</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\(</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">*?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\)</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">g</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  source</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> source</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">word</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 有可能是 $t(&#39;&#39;)/$t(&quot;&quot;)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ([</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&#39;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">word</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 假设字符串内容是test，此处 str = &#39;test&#39;/&quot;test&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> word</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 切割掉引号，得到实际的内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      str</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> word</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 将内容打印出来</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 此处没做处理，直接返回，因此不会对源文件做任何影响</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> word</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 此处没做处理，直接返回，因此不会对源文件做任何影响</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> source</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的loader" tabindex="-1"><a class="header-anchor" href="#常用的loader"><span>常用的Loader</span></a></h3><ol><li><p>babel-loader</p><p>输入：<code>javascript</code> -&gt; 处理：<code>babel</code> -&gt; 输出：浏览器支持的低版本语法</p></li><li><p>ts-loader</p><p>输入：<code>TypeScript</code> -&gt; 处理：<code>tsc</code> -&gt; 输出：<code>javascript</code> 代码</p></li><li><p>markdown-loader</p><p>输入：<code>markdown</code>文件 -&gt; 处理：<code>markdown-loader</code> -&gt; 输出：<code>webpack</code> 支持的模块</p></li><li><p>...more than</p></li></ol><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p><code>Loader</code> 其实就是一个<strong>加载、处理器</strong>，通过规则加载指定的文件，处理后输出成符合需求的内容。</p><h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin"><span>Plugin</span></a></h2><h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1"><span>简介</span></a></h3><blockquote><p><code>Webpack</code> 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。</p><p><code>Webpack</code> 通过 <code>Tapable</code> 来组织这条复杂的生产线。 <code>Webpack</code> 在运行过程中会广播事件，插件只需要<strong>监听它所关心的事件</strong>，就能加入到这条生产线中，去改变生产线的运作。 <code>Webpack</code> 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。</p><p>——「深入浅出 Webpack」</p></blockquote><h3 id="理解" tabindex="-1"><a class="header-anchor" href="#理解"><span>理解</span></a></h3><p>我们都知道 <code>node.js</code> 有一个引以为傲的机制，就是它的事件驱动。<code>node.js</code>，包括 <code>JavaScript</code>，本质上都是一个单线程的语言，通过一条流水线从上至下地运行代码。但当我们需要异步的时候，问题就来了：要怎样才能在对应的时间做对应的事呢？<code>node.js</code> 给出的答案正是事件驱动，通过触发事件，执行回调函数，即可实现这种需求。</p><p><code>Webpack</code> 本质上也是基于 <code>node.js</code> 写的，因此它的 <code>plugin</code> 也采用了事件的机制，我们写的 <code>plugin</code> 只需要关心 <code>Webpack</code> 广播出的众多事件中所需的那些，并传递我们的处理函数，<code>Webpack</code> 就会在指定的事件触发时，执行我们传入的函数，以实现<strong>流水线的拓展</strong>。</p><p>简而言之,<code>plugin</code>可以在<code>webpack</code>运行到某个时刻帮你做一些事情。 <code>plugin</code>会在<code>webpack</code>初始化时,给相应的生命周期函数绑定监听事件,直至<code>webpack</code>执行到对应的那个生命周期函数,<code>plugin</code>绑定的事件就会触发。</p><h3 id="代码结构-1" tabindex="-1"><a class="header-anchor" href="#代码结构-1"><span>代码结构</span></a></h3><p>以下是一个例子，用来说明 <code>plugin</code> 的代码结构。</p><p><code>plugin</code>本质上是一个对外导出的<code>class</code>，类中包含一个固定方法名<code>apply</code>。</p><p><code>apply</code>函数的第一个参数就是<code>compiler</code>，我们编写的插件逻辑就是在<code>apply</code>函数下面进行编写.</p><p>既然程序中已经获取了<code>compiler</code>参数，理论上我们就可以在<code>compiler</code>的各个钩子函数中绑定监听事件。比如下面代码会在<code>emit</code>阶段绑定一个监听事件。</p><p>主程序一旦执行到<code>emit</code>阶段，绑定的回调函数就会触发。通过上面的介绍可知,主程序处于<code>emit</code>阶段时，<code>compilation</code>已经将代码编译构建完了，下一步会将内容输出到文件系统。</p><p>此时<code>compilation.assets</code>存放着即将输出到文件系统的内容，如果这时候我们操作<code>compilation.assets</code>数据，势必会影响最终打包的结果。</p><p>下面代码直接在<code>compilation.assets</code>上新增一个属性名<code>copyright.txt</code>，并定义好了文件内容和长度。</p><p>这里需要引起注意,由于程序中使用<code>tapAsync</code>(异步序列)绑定监听事件，那么回调函数的最后一个参数会是<code>next</code>，异步任务执行完成后需要调用<code>next</code>，主程序才能进入到下一个任务队列。</p><p>最终打包后的目标文件夹下会多出一个<code>copyright.txt</code>文件，里面存放着字符串<code>this is my copyright</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//copyRight.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 导出一个 class</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> CopyRightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 固定 apply 方法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">compiler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    	// 处于 emit 阶段时，代码已经编译构建完</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      compiler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">hooks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">emit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tapAsync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;CopyRightPlugin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">compilation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       	// 下一步将内容输出到文件系统</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 模拟ajax获取版权信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          	// 此时 compilation.assets 存放着即将输出到文件系统的内容</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          	// 操作这个属性，会影响最终打包的结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">            compilation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">assets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;copyright.txt&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                source</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    return</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;this is my copyright&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 文件内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                size</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 文件大小</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          	// 因为是异步序列，因此要调用 next 方法才会进入到下一个任务队列</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> CopyRightPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43)]))}const d=s(n,[["render",t],["__file","webpack-loader-and-plugin.html.vue"]]),k=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/webpack-loader-and-plugin.html","title":"Webpack Loader 与 Plugin","lang":"zh-CN","frontmatter":{"title":"Webpack Loader 与 Plugin","date":"2022-06-27T08:43:39.000Z","category":["学习笔记"],"tag":["webpack","前端工程化"],"description":"掘金参考文章 Webpack简介 Webpack 是一个用于现代 JavaScript 应用程序的静态模块打包工具。当 Webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个依赖图，然后将项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。 Webpack的一些核心概念 Entry：入口，指示 We...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/webpack-loader-and-plugin.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Webpack Loader 与 Plugin"}],["meta",{"property":"og:description","content":"掘金参考文章 Webpack简介 Webpack 是一个用于现代 JavaScript 应用程序的静态模块打包工具。当 Webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个依赖图，然后将项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。 Webpack的一些核心概念 Entry：入口，指示 We..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2022-06-27T08:43:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack Loader 与 Plugin\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-27T08:43:39.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"Webpack简介","slug":"webpack简介","link":"#webpack简介","children":[{"level":3,"title":"Webpack的一些核心概念","slug":"webpack的一些核心概念","link":"#webpack的一些核心概念","children":[]}]},{"level":2,"title":"回归正题，loader 和 plugin 究竟是什么？","slug":"回归正题-loader-和-plugin-究竟是什么","link":"#回归正题-loader-和-plugin-究竟是什么","children":[]},{"level":2,"title":"Loader","slug":"loader","link":"#loader","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"Loader特点","slug":"loader特点","link":"#loader特点","children":[]},{"level":3,"title":"代码结构","slug":"代码结构","link":"#代码结构","children":[]},{"level":3,"title":"我自己写了一个Loader……","slug":"我自己写了一个loader","link":"#我自己写了一个loader","children":[]},{"level":3,"title":"常用的Loader","slug":"常用的loader","link":"#常用的loader","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"Plugin","slug":"plugin","link":"#plugin","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"理解","slug":"理解","link":"#理解","children":[]},{"level":3,"title":"代码结构","slug":"代码结构-1","link":"#代码结构-1","children":[]}]}],"git":{"createdTime":1656329396000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":7.74,"words":2321},"filePathRelative":"学习笔记/webpack-loader-and-plugin.md","localizedDate":"2022年6月27日","excerpt":"<p><a href=\\"https://juejin.cn/post/7067051380803895310\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">掘金参考文章</a></p>\\n<h2>Webpack简介</h2>\\n<p><code>Webpack</code> 是一个用于现代 <code>JavaScript</code> 应用程序的<strong>静态模块打包工具</strong>。当 <code>Webpack</code> 处理应用程序时，它会在内部从一个或多个入口点构建一个<strong>依赖图</strong>，然后将项目中所需的每一个模块组合成一个或多个 <code>bundles</code>，它们均为静态资源，用于展示你的内容。</p>","autoDesc":true}');export{d as comp,k as data};