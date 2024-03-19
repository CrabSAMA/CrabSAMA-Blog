import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as s}from"./app-CzTMLA3i.js";const a="/CrabSAMA-Blog/assets/image-20201215152650015-BMHA4Ln_.png",i={},l=s('<ol><li>是什么？ <ol><li>一个 npm 包，可以对代码风格和基础语法作检查，实时报错提示</li></ol></li><li>好处 <ol><li>解决代码风格不统一的问题</li><li>还可以检测到一些基础语法错误</li></ol></li></ol><h2 id="先看效果" tabindex="-1"><a class="header-anchor" href="#先看效果"><span>先看效果</span></a></h2><figure><img src="'+a+`" alt="image-20201215152650015" tabindex="0" loading="lazy"><figcaption>image-20201215152650015</figcaption></figure><p>以这个为例，在代码中我们定义了一个 This 的常量，但是在代码中并没有使用到它，这是违反 eslint 规则的，因此这里马上就被 IDE 识别出来并且标红提示。平时使用过 eslint 的小伙伴应该知道，如果是一些小问题（例如<strong>字符串</strong>应该用单引号而不是双引号）这种问题，在保存代码时可以被 auto fix 掉，但是上面例子的这个问题，因为涉及到一个变量/常量，eslint 是不会擅自将其删掉来修改这个问题的。所以如果我们使用 <code>eslint --fix</code> 修复的话，eslint 会报错让我们自行修改。我们可以利用这个错误，来防止没有通过 eslint 的代码被 commit。</p><p><strong>总结一下： 在我们提交代码时，先自动使用 eslint 检查代码，并自动修复错误，在修复不了的时候，报错给我们。并且报错后此次的 commit 不会提交。</strong></p><p>下面来看看如何进行配置。</p><h2 id="使用到的工具" tabindex="-1"><a class="header-anchor" href="#使用到的工具"><span>使用到的工具</span></a></h2><ul><li>husky。一个 git 钩子工具，在这个需求中我们主要使用到了 pre-commit 钩子。通俗点来说，就是 husky 可以在你 commit 之前帮你做一些事情。</li><li>eslint。代码检查工具，负责代码的错误检查与修复。</li><li>lint-staged。在你<strong>提交的文件</strong>中，执行自定义的指令。（如果不想每次都检查目录下的所有文件，用这个准没错 😋）</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>安装 husky，lint-staged</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm i -D husky lint-staged pretty-quick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="husky-钩子-pre-commit-配置" tabindex="-1"><a class="header-anchor" href="#husky-钩子-pre-commit-配置"><span>husky 钩子 pre-commit 配置</span></a></h2><p>在 package.json 中：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     	.......
      <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>  <span class="token comment">// pre-commit，提交前的钩子</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处可以配置文件夹和文件类型的范围</span>
    <span class="token property">&quot;src/**/*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 先使用 eslint 进行自动修复</span>
      <span class="token string">&quot;git add&quot;</span>  <span class="token comment">// 通过的话执行 git</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>husky 会在你提交前，调用 pre-commit 钩子，执行 lint-staged，用 eslint 的规则进行检查，如果有不符合规则且无法自动修复的，就会停止此次提交。如果都通过了就会将代码添加到 stage，然后 commit。</p>`,15),o=[l];function p(r,c){return e(),n("div",null,o)}const u=t(i,[["render",p],["__file","eslint提交时拦截.html.vue"]]),g=JSON.parse('{"path":"/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/eslint%E6%8F%90%E4%BA%A4%E6%97%B6%E6%8B%A6%E6%88%AA.html","title":"eslint 提交时拦截","lang":"zh-CN","frontmatter":{"title":"eslint 提交时拦截","date":"2021-11-03T07:33:40.000Z","category":["前端开发","前端工程化"],"tag":["开发规范","前端工程化"],"description":"是什么？ 一个 npm 包，可以对代码风格和基础语法作检查，实时报错提示 好处 解决代码风格不统一的问题 还可以检测到一些基础语法错误 先看效果 image-20201215152650015image-20201215152650015 以这个为例，在代码中我们定义了一个 This 的常量，但是在代码中并没有使用到它，这是违反 eslint 规则的，...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/eslint%E6%8F%90%E4%BA%A4%E6%97%B6%E6%8B%A6%E6%88%AA.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"eslint 提交时拦截"}],["meta",{"property":"og:description","content":"是什么？ 一个 npm 包，可以对代码风格和基础语法作检查，实时报错提示 好处 解决代码风格不统一的问题 还可以检测到一些基础语法错误 先看效果 image-20201215152650015image-20201215152650015 以这个为例，在代码中我们定义了一个 This 的常量，但是在代码中并没有使用到它，这是违反 eslint 规则的，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"开发规范"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2021-11-03T07:33:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"eslint 提交时拦截\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-03T07:33:40.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"先看效果","slug":"先看效果","link":"#先看效果","children":[]},{"level":2,"title":"使用到的工具","slug":"使用到的工具","link":"#使用到的工具","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"husky 钩子 pre-commit 配置","slug":"husky-钩子-pre-commit-配置","link":"#husky-钩子-pre-commit-配置","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"开发规范/eslint提交时拦截.md","localizedDate":"2021年11月3日","excerpt":"<ol>\\n<li>是什么？\\n<ol>\\n<li>一个 npm 包，可以对代码风格和基础语法作检查，实时报错提示</li>\\n</ol>\\n</li>\\n<li>好处\\n<ol>\\n<li>解决代码风格不统一的问题</li>\\n<li>还可以检测到一些基础语法错误</li>\\n</ol>\\n</li>\\n</ol>\\n<h2>先看效果</h2>\\n<figure><figcaption>image-20201215152650015</figcaption></figure>\\n<p>以这个为例，在代码中我们定义了一个 This 的常量，但是在代码中并没有使用到它，这是违反 eslint 规则的，因此这里马上就被 IDE 识别出来并且标红提示。平时使用过 eslint 的小伙伴应该知道，如果是一些小问题（例如<strong>字符串</strong>应该用单引号而不是双引号）这种问题，在保存代码时可以被 auto fix 掉，但是上面例子的这个问题，因为涉及到一个变量/常量，eslint 是不会擅自将其删掉来修改这个问题的。所以如果我们使用 <code>eslint --fix</code> 修复的话，eslint 会报错让我们自行修改。我们可以利用这个错误，来防止没有通过 eslint 的代码被 commit。</p>","autoDesc":true}');export{u as comp,g as data};
