import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as n,a as e,b as t,d as i,e as p}from"./app-CzTMLA3i.js";const l="/CrabSAMA-Blog/assets/img_v2_8b88e2c1-cd52-4198-a284-9a75dbac7c1g-1YG1Icc9.jpg",d={},m={href:"https://www.youtube.com/watch?v=c39vdC7jloo&ab_channel=AzielArts",target:"_blank",rel:"noopener noreferrer"},s=p('<p>在 UE 中，我们可以通过关卡序列导出为视频，但在渲染时，我们只能选择 .jpg 序列，最后渲染出来的其实是十分多的图片，每一帧一张图片，实际上我们的视频就是由无数张图片组成的。另外，音频也会生成一个单独的文件，需要我们手动做合并。</p><p>此刻我们自然会去想，如果可以直接导出一个带音频的视频文件，这个视频就直接可用了。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>使用 UE5 中的一个 plugin：<code>Movie Pipeline CLI Encoder</code> 可以解决这个问题。与它的名字一样，这个插件的作用就是在输出视频的时候，执行一些命令行的操作，因此我们就可以通过这个插件，引入 <code>ffmpeg</code> 来在导出后自动合成视频与音频，实现这个需求。</p><p>我们首先需要在电脑上安装 <code>ffmpeg</code>，这一步就略过了。</p><p>然后我们需要在插件配置里指定 <code>ffmpeg</code> 的路径，同时指定音频与视频的编码器、输出文件类型。</p><p>最后在渲染队列中，在 .jpg 序列后添加 <code>Command Line Encoder</code> 导出选项，执行后生成的就是合成好的视频。</p><figure><img src="'+l+'" alt="img_v2_8b88e2c1-cd52-4198-a284-9a75dbac7c1g" tabindex="0" loading="lazy"><figcaption>img_v2_8b88e2c1-cd52-4198-a284-9a75dbac7c1g</figcaption></figure>',8);function h(b,g){const o=c("ExternalLinkIcon");return r(),n("div",null,[e("blockquote",null,[e("p",null,[t("参考视频："),e("a",m,[t("https://www.youtube.com/watch?v=c39vdC7jloo&ab_channel=AzielArts"),i(o)])])]),s])}const A=a(d,[["render",h],["__file","ue5-movie-render-combind.html.vue"]]),f=JSON.parse('{"path":"/%E9%9F%B3%E8%A7%86%E9%A2%91/ue5-movie-render-combind.html","title":"UE5 直接导出视频","lang":"zh-CN","frontmatter":{"title":"UE5 直接导出视频","date":"2023-08-31T09:49:16.000Z","category":["实际项目","经验","音视频"],"tag":["UE5"],"description":"参考视频：https://www.youtube.com/watch?v=c39vdC7jloo&ab_channel=AzielArts 在 UE 中，我们可以通过关卡序列导出为视频，但在渲染时，我们只能选择 .jpg 序列，最后渲染出来的其实是十分多的图片，每一帧一张图片，实际上我们的视频就是由无数张图片组成的。另外，音频也会生成一个单独的文件，需...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E9%9F%B3%E8%A7%86%E9%A2%91/ue5-movie-render-combind.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"UE5 直接导出视频"}],["meta",{"property":"og:description","content":"参考视频：https://www.youtube.com/watch?v=c39vdC7jloo&ab_channel=AzielArts 在 UE 中，我们可以通过关卡序列导出为视频，但在渲染时，我们只能选择 .jpg 序列，最后渲染出来的其实是十分多的图片，每一帧一张图片，实际上我们的视频就是由无数张图片组成的。另外，音频也会生成一个单独的文件，需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T09:57:22.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:published_time","content":"2023-08-31T09:49:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-31T09:57:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5 直接导出视频\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-31T09:49:16.000Z\\",\\"dateModified\\":\\"2023-08-31T09:57:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1693475842000,"updatedTime":1693475842000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"音视频/ue5-movie-render-combind.md","localizedDate":"2023年8月31日","excerpt":"<blockquote>\\n<p>参考视频：<a href=\\"https://www.youtube.com/watch?v=c39vdC7jloo&amp;ab_channel=AzielArts\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.youtube.com/watch?v=c39vdC7jloo&amp;ab_channel=AzielArts</a></p>\\n</blockquote>\\n<p>在 UE 中，我们可以通过关卡序列导出为视频，但在渲染时，我们只能选择 .jpg 序列，最后渲染出来的其实是十分多的图片，每一帧一张图片，实际上我们的视频就是由无数张图片组成的。另外，音频也会生成一个单独的文件，需要我们手动做合并。</p>","autoDesc":true}');export{A as comp,f as data};
