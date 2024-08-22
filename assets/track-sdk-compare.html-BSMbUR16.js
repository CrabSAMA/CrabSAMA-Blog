import{_ as s,c as i,o as t,i as a}from"./app-HKRI5wrG.js";const e={},n=a(`<blockquote><p>惯例先上链接——<a href="https://mp.weixin.qq.com/s/-eEMSn2WpDiMbNSBgY3-pg" target="_blank" rel="noopener noreferrer">字节的前端监控 SDK 是怎样设计的</a></p></blockquote><h2 id="比较异同" tabindex="-1"><a class="header-anchor" href="#比较异同"><span>比较异同</span></a></h2><h3 id="不同-不如点" tabindex="-1"><a class="header-anchor" href="#不同-不如点"><span>不同/不如点</span></a></h3><table><thead><tr><th>字节</th><th>内部</th></tr></thead><tbody><tr><td><strong>监控</strong>，代表着不仅仅是埋点，包括了众多类型的信息上报</td><td><strong>埋点</strong>，只针对于页面一些特定行为的信息上报</td></tr><tr><td>环境多样（ Web 应用、小程序、Electron 应用、跨端应用等等）</td><td>仅针对 Web 应用，针对 Vue 做了特性提供</td></tr><tr><td><a href="#%E9%80%BB%E8%BE%91%E8%A7%A3%E8%80%A6">逻辑解耦</a>，分独立模块</td><td>逻辑一体化，采集、上报都在内部</td></tr><tr><td>实现插件化，支持业务自行拓展</td><td>不支持拓展、插件化</td></tr><tr><td>上报量大，QPS 高，批量上报</td><td>上报量一般，基于神策 SDK 只支持单条上报</td></tr></tbody></table><h3 id="勉强能跟得上的点" tabindex="-1"><a class="header-anchor" href="#勉强能跟得上的点"><span>勉强能跟得上的点</span></a></h3><ul><li>通过错误处理，保证减少对业务的影响</li><li>写好单测，确保自身稳定性</li></ul><h2 id="来学其精华" tabindex="-1"><a class="header-anchor" href="#来学其精华"><span>来学其精华</span></a></h2><h3 id="逻辑解耦" tabindex="-1"><a class="header-anchor" href="#逻辑解耦"><span>逻辑解耦</span></a></h3><p>前端环境众多，所以前端监控不能局限在浏览器环境，需要同时解决其他环境的监控需求。不同环境之间差异巨大，从提供的配置项，到监控的功能、上报的方式都会不一样。因此设计之初的目标应该就是同一套设计组装成不同的 SDK，第一步就是要<strong>逻辑解耦</strong>。</p><p>多环境下差异很大，但是主要做的事情是一样的：配置、采集数据、组装数据、上报数据。字节的 SDK 拆分成了以下几个模块：</p><h4 id="monitor" tabindex="-1"><a class="header-anchor" href="#monitor"><span>Monitor</span></a></h4><p><strong>收集器，主动或被动地采集特定环境下的原始数据，组装为平台无关事件。</strong></p><h4 id="builder" tabindex="-1"><a class="header-anchor" href="#builder"><span>Builder</span></a></h4><p><strong>组装器，负责将收集器上报的平台无关事件转换为特定平台的上报格式。</strong></p><h4 id="sender" tabindex="-1"><a class="header-anchor" href="#sender"><span>Sender</span></a></h4><p><strong>发送器，负责发送逻辑，比如批量，重试等功能。</strong></p><p>字节 SDK 都是 batchSender，批量发送，这样可以减少请求数，但是需要考虑一些发送的边缘情况，比如页面关闭前需要通过 <code>sendBeacon</code> 将未发送的事件都发送出去。</p><p>Sender 这块，学习到了一个新的 API：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon" target="_blank" rel="noopener noreferrer">Navigator.sendBeacon() - Web API 接口参考 | MDN (mozilla.org)</a></p><h4 id="configmanager" tabindex="-1"><a class="header-anchor" href="#configmanager"><span>ConfigManager</span></a></h4><p><strong>配置管理器，负责配置逻辑，比如合并初始配置和用户配置、拉取远端配置等功能。</strong></p><h4 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>Client</span></a></h4><p><strong>实例主体，负责串联配置管理器、收集器、组装器和发送器，串通整个流程，同时提供生命周期监听以供扩展 SDK 功能。</strong></p><p>角色之间足够抽象，互相独立、各司其职。比如 Monitor 只负责收集，并不知道最终上报的具体格式；Builder 只做组装，组装完成后交给实例主体 Client ，由 Client 交给 Sender ；Sender 不知道收到的具体事件格式，只负责完成发送。</p><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3><p>监控做的事情就像一条单纯的流水线：初始化 =&gt; 采集数据 =&gt; 组装数据 =&gt; 上报数据，我们希望能在不同阶段执行各种操作，但又不希望直接将逻辑耦合在代码，这样不利于后期的迭代维护，也会导致体积一步步增加，走向重构的必然结果。</p><p>可以参考的一个思路是，抽象出来一条规范的生命周期，所有的功能借助生命周期的监听来实现，解决了体积不断膨胀的问题，也让 SDK 易于拓展。</p><p>生命周期钩子也分为两类：</p><ul><li>回调类：只执行回调，不影响流程继续执行。</li><li>处理类：执行并返回修改后的有效值，如果返回无效值，将不再往下执行，终止上报。</li></ul><h3 id="保证原有业务的正确性" tabindex="-1"><a class="header-anchor" href="#保证原有业务的正确性"><span>保证原有业务的正确性</span></a></h3><p>接入监控 SDK 的目的是为了发现问题，如果监控 SDK 的问题导致业务受到了影响，不免本末倒置。因此保证原有业务的正确性远远比监控本身更重要。</p><p>SDK 要将对业务有影响的<strong>敏感代码</strong>用 <strong>try catch</strong> 包裹起来，保证出了错误也不影响业务，比如 hook 类的操作， hook XHR 和 Fetch 等等。这个操作要胆大心细，同时 try catch 的范围能小则小。</p><p>其次是监控 SDK 自身的错误。我们也会将 SDK 自身的 <strong>关键代码</strong> 包裹 try catch ，确保一个错误不会影响整个监控流程。单纯的 try catch 将错误吞掉解决不了问题，这些错误可能导致某些监控数据没有收集完全，影响监控的完整性。因此 SDK 实现了一个 ObserveSelfErrorPlugin ，用于收集 SDK 自身的错误并上报。</p><h3 id="如何减少对业务的影响" tabindex="-1"><a class="header-anchor" href="#如何减少对业务的影响"><span>如何减少对业务的影响</span></a></h3><p>字节的 SDK 隐含着对监控 SDK 最基本的要求：<strong>不能带来性能问题</strong>。而我们自己的场景下往往还没到这种程度，因此可以学习一下大厂的思维。</p><p>字节 SDK 不能影响业务的首屏渲染，因此将插件分成两类，一类需要立即监听的就先加载，例如路由变化等的监听，这种延后了会导致数据遗漏；另一类不需要立即监听的就延后加载，例如静态资源性能监控这样晚点也没所谓的，延后也没问题。</p><p>同时字节 SDK 本身会有性能评估，单个插件的执行耗时多少，带来的副作用的耗时又是多少，这些都是需要评估的点。他们内部有基于开源的 Benchmark 性能测试来保证 SDK 自身的性能，这一块有需要到也可以深入研究。</p><h3 id="如何尽早开始监听" tabindex="-1"><a class="header-anchor" href="#如何尽早开始监听"><span>如何尽早开始监听</span></a></h3><p>监听不遗漏的前提是<strong>事件发生在开始监控之后</strong>。有一些超高优先级的事件，比如 JS 错误，发生的时机可能非常靠前，等不到监控脚本加载完成。字节 SDK 提供的方案是针对 script 接入的方式提供一个简短的脚本，内联在页面中。作用就是<strong>提前开始监听，保证高优的事件不被遗漏。</strong></p><p>另外它还有一个作用：<strong>缓存调用命令</strong>。</p><p>监控脚本是异步加载的，因此会先挂载一个空函数，确保调用不报错；同时把对实例主体 Client 的调用命令缓存下来，记录下调用的时间和页面地址，确保能正确组装数据；等到监控脚本加载完成时再顺序执行，以此确保调用不遗漏。示例如下：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">globalName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> onceArguments</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [].</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">call</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">arguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  onceArguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">now</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">globalName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">precolletArguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">onceArguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">globalName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">precolletArguments</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> []</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果使用 npm 包接入的话，依然会有预收集的逻辑，因为 npm 包不会挂全局变量，所以逻辑稍微有一些不同，同时受限于引入的顺序，执行的时机会稍晚一些。</p>`,42),r=[n];function l(h,p){return t(),i("div",null,r)}const o=s(e,[["render",l],["__file","track-sdk-compare.html.vue"]]),k=JSON.parse('{"path":"/%E6%97%A5%E5%BF%97%E9%9A%8F%E7%AC%94/track-sdk-compare.html","title":"比较下内部埋点 SDK 与字节前端监控 SDK","lang":"zh-CN","frontmatter":{"title":"比较下内部埋点 SDK 与字节前端监控 SDK","date":"2022-08-17T06:40:40.000Z","category":["日志随笔"],"tag":["埋点"],"description":"惯例先上链接——字节的前端监控 SDK 是怎样设计的 比较异同 不同/不如点 勉强能跟得上的点 通过错误处理，保证减少对业务的影响 写好单测，确保自身稳定性 来学其精华 逻辑解耦 前端环境众多，所以前端监控不能局限在浏览器环境，需要同时解决其他环境的监控需求。不同环境之间差异巨大，从提供的配置项，到监控的功能、上报的方式都会不一样。因此设计之初的目标应...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E6%97%A5%E5%BF%97%E9%9A%8F%E7%AC%94/track-sdk-compare.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"比较下内部埋点 SDK 与字节前端监控 SDK"}],["meta",{"property":"og:description","content":"惯例先上链接——字节的前端监控 SDK 是怎样设计的 比较异同 不同/不如点 勉强能跟得上的点 通过错误处理，保证减少对业务的影响 写好单测，确保自身稳定性 来学其精华 逻辑解耦 前端环境众多，所以前端监控不能局限在浏览器环境，需要同时解决其他环境的监控需求。不同环境之间差异巨大，从提供的配置项，到监控的功能、上报的方式都会不一样。因此设计之初的目标应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"埋点"}],["meta",{"property":"article:published_time","content":"2022-08-17T06:40:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"比较下内部埋点 SDK 与字节前端监控 SDK\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-17T06:40:40.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"比较异同","slug":"比较异同","link":"#比较异同","children":[{"level":3,"title":"不同/不如点","slug":"不同-不如点","link":"#不同-不如点","children":[]},{"level":3,"title":"勉强能跟得上的点","slug":"勉强能跟得上的点","link":"#勉强能跟得上的点","children":[]}]},{"level":2,"title":"来学其精华","slug":"来学其精华","link":"#来学其精华","children":[{"level":3,"title":"逻辑解耦","slug":"逻辑解耦","link":"#逻辑解耦","children":[]},{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"保证原有业务的正确性","slug":"保证原有业务的正确性","link":"#保证原有业务的正确性","children":[]},{"level":3,"title":"如何减少对业务的影响","slug":"如何减少对业务的影响","link":"#如何减少对业务的影响","children":[]},{"level":3,"title":"如何尽早开始监听","slug":"如何尽早开始监听","link":"#如何尽早开始监听","children":[]}]}],"git":{"createdTime":1679047229000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":5.9,"words":1770},"filePathRelative":"日志随笔/track-sdk-compare.md","localizedDate":"2022年8月17日","excerpt":"<blockquote>\\n<p>惯例先上链接——<a href=\\"https://mp.weixin.qq.com/s/-eEMSn2WpDiMbNSBgY3-pg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字节的前端监控 SDK 是怎样设计的</a></p>\\n</blockquote>\\n<h2>比较异同</h2>\\n<h3>不同/不如点</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>字节</th>\\n<th>内部</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><strong>监控</strong>，代表着不仅仅是埋点，包括了众多类型的信息上报</td>\\n<td><strong>埋点</strong>，只针对于页面一些特定行为的信息上报</td>\\n</tr>\\n<tr>\\n<td>环境多样（ Web 应用、小程序、Electron 应用、跨端应用等等）</td>\\n<td>仅针对 Web 应用，针对 Vue 做了特性提供</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#%E9%80%BB%E8%BE%91%E8%A7%A3%E8%80%A6\\">逻辑解耦</a>，分独立模块</td>\\n<td>逻辑一体化，采集、上报都在内部</td>\\n</tr>\\n<tr>\\n<td>实现插件化，支持业务自行拓展</td>\\n<td>不支持拓展、插件化</td>\\n</tr>\\n<tr>\\n<td>上报量大，QPS 高，批量上报</td>\\n<td>上报量一般，基于神策 SDK 只支持单条上报</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{o as comp,k as data};
