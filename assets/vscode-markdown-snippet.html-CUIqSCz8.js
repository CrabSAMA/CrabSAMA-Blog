import{_ as i,c as a,i as n,o as e}from"./app-DTipyKC7.js";const t={};function l(p,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="vscode-snippet-生成-markdown-snippet" tabindex="-1"><a class="header-anchor" href="#vscode-snippet-生成-markdown-snippet"><span>vscode snippet 生成 markdown snippet</span></a></h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在使用类似 vuepress 等静态站点生成库时，我们经常需要通过编写 markdown 文件中的 frontmatter 来标识一些功能与文章的属性。每次需要手动编写 frontmatter，或者从旧的文档 cv 过来，是比较低效的行为。因此是否可以通过一些方法来提升写文章的体验，更加高效开搞？</p><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法"><span>解法</span></a></h2><p>针对在平时开发工作中这种重复 cv 的情况，我们的解法一般都是使用代码片段来提效。我将这个思维也复制到了 markdown frontmatter 上。我可以通过编写一个 snippet 来快速地生成所需的 frontmatter。</p><p>首先我们要分析需求，即 frontmatter 里面需要有什么。来分析一个常见的 yaml frontmatter：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Composition API 编程思想</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2023-02-07 14:46:40 +08:00</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">star</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">category</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">学习笔记</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">前端工程化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Vue</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般常见的文章属性类的 frontmatter 就是上面的内容，字段包括：title——标题，date——日期，star——是否星标文章，category——分类，tag——标签。那我们每次需要输入的内容一般只有标题和标签，日期可以直接获取当前时间，分类直接取当前文件夹名称即可，就可以减少输入的内容，十分安逸。</p><p>vscode snippet 有提供相关的预定义变量（<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables" target="_blank" rel="noopener noreferrer">链接</a>）来实现这些功能，但直接使用是不太行的，需要经过一些处理。</p><p>我们想直接取当前文件夹的名称，但是 vscode 只提供了这个变量：<code>TM_DIRECTORY</code> The directory of the current document。这个变量获取出来的是当前文件所处的文件夹路径，而不是文件夹名称，因此我们需要借助 vscode snippets 支持特定的正则这一功能来实现。具体可以参考这个链接：<a href="https://stackoverflow.com/questions/48366014/how-to-get-the-base-directory-in-visual-studio-code-snippet" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/48366014/how-to-get-the-base-directory-in-visual-studio-code-snippet</a></p><p>最终我们可以得到一个可用的 snippet：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;Insert Markdown Frontmatter&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;fm&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;body&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;---&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;title: $1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +08:00&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;category:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;  - \${TM_DIRECTORY/^.+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/(.*)$/$1/}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;tag:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;  - $2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;---&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Insert Markdown Frontmatter&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>光标会先后落在 title、tag 上，date 和 category 将会自动根据当前目录与时间生成。</p><h2 id="为什么我的-markdown-文件中-snippet-不生效" tabindex="-1"><a class="header-anchor" href="#为什么我的-markdown-文件中-snippet-不生效"><span>为什么我的 markdown 文件中 snippet 不生效？</span></a></h2><p><a href="https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code</a></p><p><a href="https://github.com/Microsoft/vscode/issues/1617#issuecomment-166999086" target="_blank" rel="noopener noreferrer">https://github.com/Microsoft/vscode/issues/1617#issuecomment-166999086</a></p><p>markdown 文件在默认情况下不会像代码文件一样输入内容触发自动补全，因此需要在输入完 snippet prefix 之后按快捷键触发 intellisense，在 windows 系统下默认快捷键是 <code>ctrl + space</code>，在 macos 系统下默认快捷键是 <code>option + esc</code>。</p><h2 id="进阶需求" tabindex="-1"><a class="header-anchor" href="#进阶需求"><span>进阶需求</span></a></h2><p>我个人有先写原始文档，再 copy 到 vuepress blog 的习惯，原始文档上是没有 frontmatter 的，之前的 snippet 仅做了插入 frontmatter 的功能，我想在插入 frontmatter 的时候将剪贴板的 markdown 内容也粘贴下来，这里就会用到 <code>$CLIPBOARD</code> 这个变量。</p><p>具体实现如下：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;Paste Markdown Content With Auto Generate Frontmatter&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pmd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;body&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;---&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;title: $1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +08:00&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;category:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;  - \${TM_DIRECTORY/^.+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/(.*)$/$1/}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;tag:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;  - $2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;---&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;$CLIPBOARD&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Paste Markdown Content With Auto Generate Frontmatter&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在复制完原始文档后，新建 markdown 文件，输入 pmd 并触发 snippet，就会结合上面自动生成 frontmatter 的同时将文档内容也复制过来了，效率提升一大截！</p>`,22)]))}const h=i(t,[["render",l],["__file","vscode-markdown-snippet.html.vue"]]),d=JSON.parse('{"path":"/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/vscode-markdown-snippet.html","title":"vscode snippet 生成 markdown snippet","lang":"zh-CN","frontmatter":{"title":"vscode snippet 生成 markdown snippet","date":"2024-09-04T09:36:46.000Z","category":["解决方案"],"tag":["VSCode Snippet","Markdown"],"description":"vscode snippet 生成 markdown snippet 背景 在使用类似 vuepress 等静态站点生成库时，我们经常需要通过编写 markdown 文件中的 frontmatter 来标识一些功能与文章的属性。每次需要手动编写 frontmatter，或者从旧的文档 cv 过来，是比较低效的行为。因此是否可以通过一些方法来提升写文章的...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/vscode-markdown-snippet.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"vscode snippet 生成 markdown snippet"}],["meta",{"property":"og:description","content":"vscode snippet 生成 markdown snippet 背景 在使用类似 vuepress 等静态站点生成库时，我们经常需要通过编写 markdown 文件中的 frontmatter 来标识一些功能与文章的属性。每次需要手动编写 frontmatter，或者从旧的文档 cv 过来，是比较低效的行为。因此是否可以通过一些方法来提升写文章的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T07:33:27.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"VSCode Snippet"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:published_time","content":"2024-09-04T09:36:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T07:33:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscode snippet 生成 markdown snippet\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-04T09:36:46.000Z\\",\\"dateModified\\":\\"2024-09-29T07:33:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"解法","slug":"解法","link":"#解法","children":[]},{"level":2,"title":"为什么我的 markdown 文件中 snippet 不生效？","slug":"为什么我的-markdown-文件中-snippet-不生效","link":"#为什么我的-markdown-文件中-snippet-不生效","children":[]},{"level":2,"title":"进阶需求","slug":"进阶需求","link":"#进阶需求","children":[]}],"git":{"createdTime":1727594324000,"updatedTime":1727595207000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"解决方案/vscode-markdown-snippet.md","localizedDate":"2024年9月4日","excerpt":"\\n<h2>背景</h2>\\n<p>在使用类似 vuepress 等静态站点生成库时，我们经常需要通过编写 markdown 文件中的 frontmatter 来标识一些功能与文章的属性。每次需要手动编写 frontmatter，或者从旧的文档 cv 过来，是比较低效的行为。因此是否可以通过一些方法来提升写文章的体验，更加高效开搞？</p>\\n<h2>解法</h2>\\n<p>针对在平时开发工作中这种重复 cv 的情况，我们的解法一般都是使用代码片段来提效。我将这个思维也复制到了 markdown frontmatter 上。我可以通过编写一个 snippet 来快速地生成所需的 frontmatter。</p>","autoDesc":true}');export{h as comp,d as data};