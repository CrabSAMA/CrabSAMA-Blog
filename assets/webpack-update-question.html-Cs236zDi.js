import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,i as o}from"./app-CfhW4omD.js";const t={},r=o(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>由于项目中 lock 文件被删，重新安装依赖后发现许多依赖都自动升级到最新版本了，因此想着干脆对项目中的依赖进行一次统一升级。在升级了 <code>webpack</code> 后，顺便将一些 loader 也进行升级，升级后出现了一系列的问题。</p><h2 id="mini-css-extract-plugin-导致-url-引入报错" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin-导致-url-引入报错"><span><code>mini-css-extract-plugin</code> 导致 <code>url()</code> 引入报错</span></a></h2><p>今天在 1.3.9 版本时，发现 <code>publicPath</code> 设成 <code>&#39;../&#39;</code> 时，引入的字体文件链接变成了这样：<code>src:url([file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf](file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf))</code></p><p>这里列出的堆栈涉及了 <code>css-loader</code>、<code>less-loader</code>，查看 <code>webpack</code> 配置中可以猜测是进入到了 less 的 rule 中，这里面用到的除了上面两个 loader，还有就是 <code>MiniCssExtractPlugin.loader</code> 了，通过比对旧版本和新版本，最终定位到就是 <code>MiniCssExtractPlugin.loader</code> 导致的问题。同时查看 <code>mini-css-extract-plugin</code> 的 changelog 发现，里面确实提到了在 2.0 版本解决了许多 <code>publicPath </code> 导致的 <code>url()</code> 解析问题。</p><p>在项目中建议升到 1.6.2 以上版本，有条件可以升到 ^2，其中修复了许多由于 <code>publicPath</code> 导致的问题，这个问题有可能会导致 <code>url()</code> 引入方式的样式出问题。</p><h2 id="vue-loader-与-vue2-的兼容问题" tabindex="-1"><a class="header-anchor" href="#vue-loader-与-vue2-的兼容问题"><span>vue-loader 与 vue2 的兼容问题</span></a></h2><p>在升级了 vue-loader 到最新后报错：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Module build failed (from ./node_modules/vue-loader/dist/index.js):</span></span>
<span class="line"><span>TypeError: Cannot read properties of undefined (reading &#39;styles&#39;)</span></span>
<span class="line"><span>    at Object.loader (/Users/daniel.bachnov/docker/qhs3-admin/frontend/node_modules/vue-loader/dist/index.js:70:34)</span></span>
<span class="line"><span> @ ./main.js 1:0-29 14:8-11</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><a href="https://stackoverflow.com/questions/74115950/vue-loader-17-0-0-webpack-5-74-0-module-build-failed" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/74115950/vue-loader-17-0-0-webpack-5-74-0-module-build-failed</a></p></blockquote><p>原因是 vue-loader 16+ 与 vue 2.x 不适配，因此在 vue2.x 版本里我们需要使用 vue-loader 15.x 版本。</p><h2 id="devserver-环境样式丢失" tabindex="-1"><a class="header-anchor" href="#devserver-环境样式丢失"><span>devServer 环境样式丢失</span></a></h2><p>问题是在 devServer 环境样式丢失，也没有报错，只是样式没有写入到 inline 中。</p><p>因为在 dev 环境中，样式是由 <code>vue-style-loader</code> 处理的，这个包是依赖 <code>style-loader</code> 的，查看项目中依赖版本，发现 <code>style-loader</code> 版本过低，在升级 webpack 时，需要将许多 loader 和 plugin 统一进行配套升级，很坑的点是在遇到此类不匹配的情况时，有时并不会报错，所以排查成本很高，只能去和旧版本对比，这就是经验之谈。</p>`,14),c=[r];function l(d,n){return s(),a("div",null,c)}const u=e(t,[["render",l],["__file","webpack-update-question.html.vue"]]),b=JSON.parse(`{"path":"/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/webpack-update-question.html","title":"webpack 升级踩坑","lang":"zh-CN","frontmatter":{"title":"webpack 升级踩坑","date":"2023-03-31T07:23:12.000Z","category":["解决方案"],"tag":["webpack"],"description":"背景 由于项目中 lock 文件被删，重新安装依赖后发现许多依赖都自动升级到最新版本了，因此想着干脆对项目中的依赖进行一次统一升级。在升级了 webpack 后，顺便将一些 loader 也进行升级，升级后出现了一系列的问题。 mini-css-extract-plugin 导致 url() 引入报错 今天在 1.3.9 版本时，发现 publicPa...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/webpack-update-question.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"webpack 升级踩坑"}],["meta",{"property":"og:description","content":"背景 由于项目中 lock 文件被删，重新安装依赖后发现许多依赖都自动升级到最新版本了，因此想着干脆对项目中的依赖进行一次统一升级。在升级了 webpack 后，顺便将一些 loader 也进行升级，升级后出现了一系列的问题。 mini-css-extract-plugin 导致 url() 引入报错 今天在 1.3.9 版本时，发现 publicPa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:published_time","content":"2023-03-31T07:23:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack 升级踩坑\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-31T07:23:12.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"mini-css-extract-plugin 导致 url() 引入报错","slug":"mini-css-extract-plugin-导致-url-引入报错","link":"#mini-css-extract-plugin-导致-url-引入报错","children":[]},{"level":2,"title":"vue-loader 与 vue2 的兼容问题","slug":"vue-loader-与-vue2-的兼容问题","link":"#vue-loader-与-vue2-的兼容问题","children":[]},{"level":2,"title":"devServer 环境样式丢失","slug":"devserver-环境样式丢失","link":"#devserver-环境样式丢失","children":[]}],"git":{"createdTime":1680248813000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"解决方案/webpack-update-question.md","localizedDate":"2023年3月31日","excerpt":"<h2>背景</h2>\\n<p>由于项目中 lock 文件被删，重新安装依赖后发现许多依赖都自动升级到最新版本了，因此想着干脆对项目中的依赖进行一次统一升级。在升级了 <code>webpack</code> 后，顺便将一些 loader 也进行升级，升级后出现了一系列的问题。</p>\\n<h2><code>mini-css-extract-plugin</code> 导致 <code>url()</code> 引入报错</h2>\\n<p>今天在 1.3.9 版本时，发现 <code>publicPath</code> 设成 <code>'../'</code> 时，引入的字体文件链接变成了这样：<code>src:url([file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf](file:///Users/crab.huang/Project/abtest.web/node_modules/.pnpm/css-loader@6.7.3_webpack@5.77.0/node_modules/css-loader/dist/cjs.js!/Users/crab.huang/Project/abtest.web/node_modules/.pnpm/less-loader@3.0.0_less@2.7.0/node_modules/less-loader/lib/loader.js!/Users/crab.huang/Project/abtest.web/src/common/font/element-icons.ttf))</code></p>","autoDesc":true}`);export{u as comp,b as data};
