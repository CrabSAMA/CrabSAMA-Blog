"use strict";(self.webpackChunkcrabsama_blog=self.webpackChunkcrabsama_blog||[]).push([[7156],{9465:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-a170c1fa",path:"/%E5%AE%9E%E9%99%85%E9%A1%B9%E7%9B%AE/nginx-replace.html",title:"使用 nginx 实现内容替换",lang:"zh-CN",frontmatter:{title:"使用 nginx 实现内容替换",date:"2022-07-28T09:19:53.000Z",lastUpdated:!0,categories:["实际项目"]},excerpt:"",headers:[{level:2,title:"背景",slug:"背景",children:[]},{level:2,title:"实操",slug:"实操",children:[]},{level:2,title:"进阶",slug:"进阶",children:[]}],git:{createdTime:165900072e4,updatedTime:165900072e4,contributors:[{name:"CrabSAMA",email:"71915282@qq.com",commits:1}]},filePathRelative:"实际项目/nginx-replace.md"}},7558:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});const a=(0,s(6252).uE)('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>公司大前端提供的平台里看到了一个功能，在代码中写特定的链接，例如 <code>__REPLACE__</code>，在实际访问时会替换成指定内容，来实现 <code>CDN</code> 的功能。在看到这个功能后，对它具体是怎么实现的比较好奇，因此看看具体是怎么操作的。</p><h2 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h2><p><code>nginx</code> 提供了 <code>sub_filter</code> 模块来实现重写 content 的功能。</p><p>我们需要找到 <code>nginx</code> 的安装目录，进入其 <code>conf</code> 文件夹，打开 <code>nginx.conf</code> 配置文件。</p><p>找到 <code>location / { … }</code> 这一行，这里是代理默认请求到 <code>index.html</code> ：</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> Accept-Encoding <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">sub_filter</span> <span class="token string">&#39;__NGINX_REPLACE__&#39;</span> <span class="token string">&#39;Replace Content&#39;</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">sub_filter_types</span> text/html</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">sub_filter_once</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>来解释一下具体的配置内容：</p><p><code>sub_filter &#39;__NGINX_REPLACE__&#39; &#39;Replace Content&#39;;</code> —— 这个实际将 <code>index.html</code> 中 <code>__NGINX_REPLACE__</code> 替换成 <code>Replace Content</code> 。</p><p>注意只有在新版本 <code>nginx</code> 中才支持多 <code>sub_filter</code>。</p><p><code>sub_filter_types *;</code> -- 只对 <code>text/html</code> 响应类型做<code>sub_filter</code> 指定的替换。</p><p><code>sub_filter_once off;</code> -- <code>sub_filter</code> 会执行<strong>多次</strong>而不是一次. 效果类似于 <code>java</code> 中的 <code>string.replaceAll</code> 而不是 <code>replace</code>。</p><p><code>proxy_set_header Accept-Encoding &quot;&quot;;</code> -- 设置这个得原因是告诉后端不要进行 <code>gzip</code> 压缩。如果是 <code>gzip</code> 压缩流, 那么我们就没法进行替换了。</p><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><p><code>nginx</code> 有一个增强模块 <code>ngx_http_substitutions_filter_module</code>，可以支持更多高级功能：</p><ol><li>支持多次替换</li><li>支持正则替换</li><li>支持中文替换</li></ol><p>具体使用方法可以直接看文档，此处不多赘述。</p>',17),c={},t=(0,s(3744).Z)(c,[["render",function(e,n){return a}]])}}]);