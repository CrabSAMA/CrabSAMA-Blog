import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as p}from"./app-CzTMLA3i.js";const c={},r=p('<h2 id="现象" tabindex="-1"><a class="header-anchor" href="#现象"><span>现象</span></a></h2><p>在我们写 Vue 组件时，经常会遇到自定义 v-model 或 prop.sync 的需求。一般来说，我们有两种方法实现这种需求：</p><ol><li>组件内部定义一个变量，使用两个 <code>watch</code> 分别监听 props 和 内部变量的变更，前者初始化内部变量，后者在内部变量变更时 <code>emit</code> 一个 <code>input </code>/ <code>update:prop</code> 事件使外部变量同步变更。</li><li>组件内部使用一个 <code>computed</code> 变量，定义它的 <code>get</code> 方法为获取 props 值，set 方法为 <code>emit</code> 事件。</li></ol><p>在很久一段时间，我都是使用方法一实现的，但在了解到可变<code>computed</code>值这个属性后，我开始逐渐使用方法二来实现这个需求了。但在最近的一个 bug 中，遇到了 <code>emit</code> 后属性没有更新的问题。</p><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h2><p>原因也很简单，父组件并没有将这个 prop 传入到组件内部，因此方法二 <code>emit</code> 后并没有令外部变量成功更新，<code>computed</code> 也自然 <code>get</code> 不到对应的值了。但这个情况比较隐蔽，加上之前印象中不传 prop 也可以实现，我就开始思考为什么会发生这种情况。</p><p>在之前我一般使用方法一来实现这个需求，方法一的一个特点是它在组件内部定义了一个内部变量，外部变量仅做一个初始化与同步的作用，我们实际操作的还是内部变量的变更，因此在不传入外部变量时，并不会影响内部变量的正常变更，在传入外部变量时也会同步进行更新。但在方法二中，没有了内部变量，<code>computed</code> 属性完全依赖外部变量的值，在父组件不传入 prop 的情况很自然就无法正常工作了。</p><p>经过了分析后，可以了解到两种实现方法之间的利弊，在后续的开发中可以按需选择更好的方案来实现此类需求。</p>',8),a=[r];function d(i,n){return t(),o("div",null,a)}const m=e(c,[["render",d],["__file","props-not-update.html.vue"]]),u=JSON.parse('{"path":"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/props-not-update.html","title":"Props(v-model)变更不生效问题","lang":"zh-CN","frontmatter":{"title":"Props(v-model)变更不生效问题","date":"2023-08-15T03:14:30.000Z","category":["实际项目"],"tag":["vue"],"description":"现象 在我们写 Vue 组件时，经常会遇到自定义 v-model 或 prop.sync 的需求。一般来说，我们有两种方法实现这种需求： 组件内部定义一个变量，使用两个 watch 分别监听 props 和 内部变量的变更，前者初始化内部变量，后者在内部变量变更时 emit 一个 input / update:prop 事件使外部变量同步变更。 组件内...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/props-not-update.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Props(v-model)变更不生效问题"}],["meta",{"property":"og:description","content":"现象 在我们写 Vue 组件时，经常会遇到自定义 v-model 或 prop.sync 的需求。一般来说，我们有两种方法实现这种需求： 组件内部定义一个变量，使用两个 watch 分别监听 props 和 内部变量的变更，前者初始化内部变量，后者在内部变量变更时 emit 一个 input / update:prop 事件使外部变量同步变更。 组件内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T03:15:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:published_time","content":"2023-08-15T03:14:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T03:15:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Props(v-model)变更不生效问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-15T03:14:30.000Z\\",\\"dateModified\\":\\"2023-08-15T03:15:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"现象","slug":"现象","link":"#现象","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]}],"git":{"createdTime":1692069326000,"updatedTime":1692069326000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"实际项目/props-not-update.md","localizedDate":"2023年8月15日","excerpt":"<h2>现象</h2>\\n<p>在我们写 Vue 组件时，经常会遇到自定义 v-model 或 prop.sync 的需求。一般来说，我们有两种方法实现这种需求：</p>\\n<ol>\\n<li>组件内部定义一个变量，使用两个 <code>watch</code> 分别监听 props 和 内部变量的变更，前者初始化内部变量，后者在内部变量变更时 <code>emit</code> 一个 <code>input </code>/ <code>update:prop</code> 事件使外部变量同步变更。</li>\\n<li>组件内部使用一个 <code>computed</code> 变量，定义它的 <code>get</code> 方法为获取 props 值，set 方法为 <code>emit</code> 事件。</li>\\n</ol>","autoDesc":true}');export{m as comp,u as data};
