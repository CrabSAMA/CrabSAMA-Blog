import{_ as e,c as o,i,o as a}from"./app-BS7W8Gul.js";const n={};function r(c,t){return a(),o("div",null,t[0]||(t[0]=[i('<p>多人协作的工作模式通常是这样：</p><ol><li>首先，可以试图用<code>git push origin &lt;branch-name&gt;</code>推送自己的修改；</li><li>如果推送失败，则因为远程分支比你的本地更新，需要先用<code>git pull</code>试图合并；</li><li>如果合并有冲突，则解决冲突，并在本地提交；</li><li>没有冲突或者解决掉冲突后，再用<code>git push origin &lt;branch-name&gt;</code>推送就能成功！<br> 如果<code>git pull</code>提示<code>no tracking information</code>，则说明本地分支和远程分支的链接关系没有创建，用命令<code>git branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;</code>。</li></ol><p>这就是多人协作的工作模式，一旦熟悉了，就非常简单。</p><h2 id="个人做法-大学时期" tabindex="-1"><a class="header-anchor" href="#个人做法-大学时期"><span>个人做法（大学时期）</span></a></h2><p>一般我会先<code>commit</code>自己的代码，将代码放进暂存区，保证安全；</p><p>然后<code>git pull</code>获取最新的代码，如果有冲突则进行合并；</p><p>最后进行<code>git push origin &lt;branch-name&gt;</code>，将代码推送到远程分支。</p>',7)]))}const p=e(n,[["render",r],["__file","multi-person-collaboration.html.vue"]]),m=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/multi-person-collaboration.html","title":"多人协作","lang":"zh-CN","frontmatter":{"title":"多人协作","date":"2020-06-09T13:59:19.000Z","category":["学习笔记"],"tag":["Git"],"description":"多人协作的工作模式通常是这样： 首先，可以试图用git push origin <branch-name>推送自己的修改； 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并； 如果合并有冲突，则解决冲突，并在本地提交； 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！ 如...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/multi-person-collaboration.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"多人协作"}],["meta",{"property":"og:description","content":"多人协作的工作模式通常是这样： 首先，可以试图用git push origin <branch-name>推送自己的修改； 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并； 如果合并有冲突，则解决冲突，并在本地提交； 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！ 如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-29T07:33:27.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:published_time","content":"2020-06-09T13:59:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-29T07:33:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多人协作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-09T13:59:19.000Z\\",\\"dateModified\\":\\"2024-09-29T07:33:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"个人做法（大学时期）","slug":"个人做法-大学时期","link":"#个人做法-大学时期","children":[]}],"git":{"createdTime":1655281638000,"updatedTime":1727595207000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":4}]},"readingTime":{"minutes":0.89,"words":267},"filePathRelative":"学习笔记/multi-person-collaboration.md","localizedDate":"2020年6月9日","excerpt":"<p>多人协作的工作模式通常是这样：</p>\\n<ol>\\n<li>首先，可以试图用<code>git push origin &lt;branch-name&gt;</code>推送自己的修改；</li>\\n<li>如果推送失败，则因为远程分支比你的本地更新，需要先用<code>git pull</code>试图合并；</li>\\n<li>如果合并有冲突，则解决冲突，并在本地提交；</li>\\n<li>没有冲突或者解决掉冲突后，再用<code>git push origin &lt;branch-name&gt;</code>推送就能成功！<br>\\n如果<code>git pull</code>提示<code>no tracking information</code>，则说明本地分支和远程分支的链接关系没有创建，用命令<code>git branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;</code>。</li>\\n</ol>","autoDesc":true}');export{p as comp,m as data};
