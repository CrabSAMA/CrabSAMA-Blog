const e=JSON.parse('{"key":"v-aeda6150","path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vue2-vue3-monorepo-vuepress1-error.html","title":"Vue2/Vue3共存Monorepo组件库引入VuePress报错","lang":"zh-CN","frontmatter":{"title":"Vue2/Vue3共存Monorepo组件库引入VuePress报错","date":"2023-11-10T03:19:20.000Z","category":["实际项目","经验","前端开发"],"tag":["monorepo","组件库"],"description":"背景 项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。 由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。 依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。 //package.json { \\"devDependencies\\": { \\"vue\\": \\"^3.3.4\\", \\"vue2\\": \\"npm:vue@2.7.15\\" } }","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/vue2-vue3-monorepo-vuepress1-error.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Vue2/Vue3共存Monorepo组件库引入VuePress报错"}],["meta",{"property":"og:description","content":"背景 项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。 由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。 依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。 //package.json { \\"devDependencies\\": { \\"vue\\": \\"^3.3.4\\", \\"vue2\\": \\"npm:vue@2.7.15\\" } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-10T03:24:04.000Z"}],["meta",{"property":"article:tag","content":"monorepo"}],["meta",{"property":"article:tag","content":"组件库"}],["meta",{"property":"article:published_time","content":"2023-11-10T03:19:20.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T03:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2/Vue3共存Monorepo组件库引入VuePress报错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-10T03:19:20.000Z\\",\\"dateModified\\":\\"2023-11-10T03:24:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题复现","slug":"问题复现","link":"#问题复现","children":[]},{"level":2,"title":"尝试解决","slug":"尝试解决","link":"#尝试解决","children":[]}],"git":{"createdTime":1699586644000,"updatedTime":1699586644000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":2.65,"words":796},"filePathRelative":"实际项目/vue2-vue3-monorepo-vuepress1-error.md","localizedDate":"2023年11月10日","excerpt":"<h2> 背景</h2>\\n<p>项目结构：Vue2 与 Vue3 共存的组件库，采用 pnpm workspace Monorepo 方式组织仓库。</p>\\n<p>由于项目中有 Vue2 与 Vue3 的组件，因此需要搭两套文档，Vitepress 与 Vuepress2+只支持 Vue3 的宿主环境，Vue2 的组件库文档只能使用 Vuepress1.x 搭建。</p>\\n<p>依赖这块，package.json 中以 vue3 为主，vue2 通过别名的方式安装与引用。</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token comment\\">//package.json</span>\\n<span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"devDependencies\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"vue\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^3.3.4\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"vue2\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"npm:vue@2.7.15\\"</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
