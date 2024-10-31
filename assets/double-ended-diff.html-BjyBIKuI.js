import{_ as t,c as i,i as l,o as a}from"./app-CNzJ7I-c.js";const o={};function r(s,e){return a(),i("div",null,e[0]||(e[0]=[l('<h1 id="双端-diff-算法" tabindex="-1"><a class="header-anchor" href="#双端-diff-算法"><span>双端 Diff 算法</span></a></h1><p>在使用简单 diff 算法的过程中，我们其实可以发现，它对 DOM 的移动操作不是最优的，有些时候它会产生较多无必要的 DOM 移动操作。此时双端 diff 算法出来了，它是一种同时对新旧两组子节点的两个端点进行比较的算法。</p><p>Vue2 中使用的就是双端 diff 算法。</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> TODO 是谁提出的双端 diff 算法？<a href="https://www.zhihu.com/question/65824137/answer/235159117" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/65824137/answer/235159117</a> 看这篇文章里面提到应该是 cito.js 这个库首先提出了双端 diff 算法，让虚拟 DOM 这个领域的性能提升了一大截。</label></li></ul><h2 id="怎么做" tabindex="-1"><a class="header-anchor" href="#怎么做"><span>怎么做</span></a></h2><p>下方判断相同节点的方式依然是与简单 diff 一样，判断 VNode 的 <code>type</code> 和 <code>key</code> 是否相同。</p><p>双端 diff 的过程是：</p><ol><li>找到新旧节点列表的头节点和尾节点，分别记录他们的顺序与虚拟节点引用</li><li>旧头节点指针小于等于旧尾节点指针，且新头节点指针小于等于新尾节点指针，则循环 <ol><li>旧头节点 与 新头节点 进行对比 <ol><li>相同则直接打补丁，新旧头节点指针都向后走一步</li><li>不相同则到 2</li></ol></li><li>旧尾节点 与 新尾节点 进行对比 <ol><li>相同则直接打补丁，新旧尾节点指针都向前走一步</li><li>不相同则到 3</li></ol></li><li>旧头节点 与 新尾节点 进行对比 <ol><li>相同则打补丁，证明<em>当时</em> <strong>旧的节点列表中的头节点</strong>，现在处于<strong>新的节点列表的最尾部</strong>，因此将这个节点移动到旧节点列表的最后一个节点的后面，在移动完成后就是预期想要的效果</li><li>不相同则到 4</li></ol></li><li>旧尾节点 与 新头节点 进行对比 <ol><li>相同则打补丁，证明<em>当时</em> <strong>旧的节点列表中的尾节点</strong>，现在处于<strong>新的节点列表的最头部</strong>，因此将这个节点移动到旧节点列表的第一个节点的前面，在移动完成后就是预期想要的效果</li><li>不相同则到 5</li></ol></li><li>上面四种情况都不满足，属于非理想情况了，我们需要造出一种理想情况来。具体做法是在旧节点列表中找新的头节点。 <ol><li>找得到证明有可以复用的节点，此时这个节点在新的节点列表里面是第一个节点，而在旧的节点列表里面不是，需要将这个节点移到旧的节点列表的头节点之前，在移动完成之后它就是第一个节点了。同时我们需要将旧节点列表里面的节点置为 <code>undefined</code>，以证明我们已经处理过了</li><li>找不到证明这个节点不存在于旧节点列表中，属于是新的节点，因此需要进行挂载。挂载的位置就是节点列表的头部，因此挂载到旧节点列表中的头部节点前即可</li></ol></li></ol></li><li>在循环结束后，旧节点列表或新节点列表中都有可能存在没有处理的节点 <ol><li>如果新节点列表中存在没有处理的节点，证明这个节点需要挂载，挂载的位置也是旧节点列表中的头部节点前方</li><li>如果旧节点列表中存在没有处理的节点，证明这个节点需要卸载，直接卸载即可</li></ol></li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>双端 diff 的优势在于，对于同样的更新场景，执行的 DOM 移动操作次数更少。</p><p>时间复杂度？空间复杂度？</p><p>这里需要更多的指针去记录位置，是不是属于用空间换时间了呢？</p>',12)]))}const d=t(o,[["render",r],["__file","double-ended-diff.html.vue"]]),f=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/double-ended-diff.html","title":"双端 Diff 算法","lang":"zh-CN","frontmatter":{"title":"双端 Diff 算法","date":"2024-10-24T12:23:42.000Z","category":["学习笔记"],"tag":["算法","diff算法"],"description":"双端 Diff 算法 在使用简单 diff 算法的过程中，我们其实可以发现，它对 DOM 的移动操作不是最优的，有些时候它会产生较多无必要的 DOM 移动操作。此时双端 diff 算法出来了，它是一种同时对新旧两组子节点的两个端点进行比较的算法。 Vue2 中使用的就是双端 diff 算法。 TODO 是谁提出的双端 diff 算法？https://w...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/double-ended-diff.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"双端 Diff 算法"}],["meta",{"property":"og:description","content":"双端 Diff 算法 在使用简单 diff 算法的过程中，我们其实可以发现，它对 DOM 的移动操作不是最优的，有些时候它会产生较多无必要的 DOM 移动操作。此时双端 diff 算法出来了，它是一种同时对新旧两组子节点的两个端点进行比较的算法。 Vue2 中使用的就是双端 diff 算法。 TODO 是谁提出的双端 diff 算法？https://w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T10:05:03.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"diff算法"}],["meta",{"property":"article:published_time","content":"2024-10-24T12:23:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T10:05:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双端 Diff 算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-24T12:23:42.000Z\\",\\"dateModified\\":\\"2024-10-29T10:05:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"怎么做","slug":"怎么做","link":"#怎么做","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1730196303000,"updatedTime":1730196303000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"学习笔记/double-ended-diff.md","localizedDate":"2024年10月24日","excerpt":"\\n<p>在使用简单 diff 算法的过程中，我们其实可以发现，它对 DOM 的移动操作不是最优的，有些时候它会产生较多无必要的 DOM 移动操作。此时双端 diff 算法出来了，它是一种同时对新旧两组子节点的两个端点进行比较的算法。</p>\\n<p>Vue2 中使用的就是双端 diff 算法。</p>\\n<ul class=\\"task-list-container\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-0\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-0\\"> TODO 是谁提出的双端 diff 算法？<a href=\\"https://www.zhihu.com/question/65824137/answer/235159117\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.zhihu.com/question/65824137/answer/235159117</a> 看这篇文章里面提到应该是 cito.js 这个库首先提出了双端 diff 算法，让虚拟 DOM 这个领域的性能提升了一大截。</label></li>\\n</ul>","autoDesc":true}');export{d as comp,f as data};