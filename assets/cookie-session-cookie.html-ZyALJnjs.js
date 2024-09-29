import{_ as e,c,i as d,o as i}from"./app-BS7W8Gul.js";const s="/CrabSAMA-Blog/assets/image-20220627104652214-2SXAk_Y_.png",n="/CrabSAMA-Blog/assets/image-20220627104724151-Bq5EM10b.png",t="/CrabSAMA-Blog/assets/image-20220627104828914-CMzv_VoM.png",r={};function a(l,o){return i(),c("div",null,o[0]||(o[0]=[d('<p>知乎链接：<a href="https://zhuanlan.zhihu.com/p/152224669" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/152224669</a></p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2><p><code>Cookie</code>是一个具体的东西，指的就是浏览器里面能永久存储的一种数据，仅仅是浏览器实现的一种数据存储功能。<br><code>Cookie</code>由服务器生成，发送给浏览器，浏览器把<code>Cookie</code>以<code>key-value</code>形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该<code>Cookie</code>发送给服务器。<br> 由于<code>cookie</code>是存在客户端上的，所以浏览器加入了一些限制确保<code>Cookie</code>不会被恶意使用，同时不会占据太多磁盘空间，所以每个域的<code>Cookie</code>数量是有限的。<br><code>Cookie</code>是不可跨域的：每个 <code>cookie</code> 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 <code>domain</code>）。<br> 重要属性：</p><ul><li><code>maxAge</code>：<code>cookie</code>失效的时间，单位秒。如果为<strong>整数</strong>，则该 <code>cookie</code> 在 <code>maxAge</code> 秒后失效。如果为<strong>负数</strong>，该 <code>cookie</code> 为临时 <code>cookie</code> ，<strong>关闭浏览器即失效</strong>，浏览器也不会以任何形式保存该 <code>cookie</code> 。如果为 <strong>0</strong>，表示<strong>删除</strong>该 <code>cookie</code> 。默认为 -1。</li><li><code>secure</code>：该 <code>cookie</code> 是否仅被使用安全协议传输。安全协议有 <code>HTTPS</code>，<code>SSL</code>等，在网络上传输数据之前先将数据加密。默认为<code>false</code>。当 <code>secure</code> 值为 <code>true</code> 时，<code>cookie</code> 在 <code>HTTP</code> 中是无效，在 <code>HTTPS</code> 中才有效。</li><li><code>httpOnly</code>：如果给某个 <code>cookie</code> 设置了 <code>httpOnly</code> 属性，则无法通过 <strong><code>JS</code> 脚本</strong> 读取到该 <code>cookie</code> 的信息，但还是能通过 <strong><code>Application</code></strong> 中手动修改 <code>cookie</code>，所以只是在一定程度上可以防止 <code>XSS</code> 攻击，不是绝对的安全。<br><img src="'+s+'" alt="image-20220627104652214" loading="lazy"></li></ul><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span><strong>Session</strong></span></a></h2><p><code>session</code> 是基于 <code>cookie</code> 实现的，<code>session</code> 存储在服务器端，<code>sessionId</code> 会被存储到客户端的<code>cookie</code> 中。<br><code>session</code> 认证流程：</p><ol><li>用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的 <code>Session</code></li><li>请求返回时将此 <code>Session</code> 的唯一标识信息 <code>SessionID</code> 返回给浏览器</li><li>浏览器接收到服务器返回的 <code>SessionID</code> 信息后，会将此信息存入到 <code>Cookie</code> 中，同时 <code>Cookie</code> 记录此 <code>SessionID</code> 属于哪个域名</li><li>当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 <code>Cookie</code> 信息，如果存在**（浏览器）**自动将 <strong>（同一个主域下的）</strong><code>Cookie</code> 信息也发送给服务端，服务端会从 <code>Cookie</code> 中获取 <code>SessionID</code>，再根据 <code>SessionID</code> 查找对应的 <code>Session</code> 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 <code>Session</code> 证明用户已经登录可执行后面操作。<br><img src="'+n+'" alt="image-20220627104724151" loading="lazy"></li></ol><h2 id="cookie-和-session-的区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-的区别"><span><strong><code>Cookie</code> 和 <code>Session</code> 的区别</strong></span></a></h2><ul><li>安全性： <code>Session</code> 比 <code>Cookie</code> 安全，<code>Session</code> 是存储在<strong>服务器端</strong>的，<code>Cookie</code> 是存储在<strong>客户端</strong>的。</li><li>存取值的类型不同：<code>Cookie</code> 只支持存<strong>字符串</strong>数据，想要设置其他类型的数据，需要将其转换成字符串，<code>Session</code> 可以存<strong>任意数据</strong>类型。</li><li>有效期不同： <code>Cookie</code> 可设置为长时间保持，比如我们经常使用的默认登录功能，<code>Session</code> 一般失效时间较短，客户端关闭（默认情况下）或者 <code>Session</code> 超时都会失效。</li><li>存储大小不同： 单个 <code>Cookie</code> 保存的数据不能超过 4K，<code>Session</code> 可存储数据远高于 <code>Cookie</code>，但是当访问量过多，会<strong>占用过多的服务器资源</strong>。</li></ul><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><strong>Token</strong></span></a></h2><p><code>Token</code>是用户身份的验证方式。最简单的<code>token</code>组成：uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由<code>token</code>的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接<code>token</code>请求服务器)。还可以把不变的参数也放进<code>Token</code>，避免多次查库。<br><code>Token</code>验证流程：</p><ol><li>客户端使用用户名跟密码请求登录</li><li>服务端收到请求，去验证用户名与密码</li><li>验证成功后，服务端会签发一个 <code>token</code> 并把这个 <code>token</code> 发送给客户端</li><li>客户端收到 <code>token</code> 以后，会把它存储起来，比如放在 <code>cookie</code> 里或者 <code>localStorage</code> 里</li><li>客户端每次向服务端请求资源的时候需要带着服务端签发的 <code>token</code></li><li>服务端收到请求，然后去验证客户端请求里面带着的 <code>token</code> ，如果验证成功，就向客户端返回请求的数据</li></ol><ul><li>每一次请求都需要携带 <code>token</code>，需要把 <strong><code>token</code> 放到 <code>HTTP</code> 的 <code>Header</code></strong> 里。</li><li>基于 <code>token</code> 的用户认证是一种服务端无状态的认证方式，服务端不用存放 <code>token</code> 数据。用解析 <code>token</code> 的计算时间换取 <code>session</code> 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库。</li><li><code>token</code> 完全由应用管理，所以它可以避开同源策略。</li></ul><figure><img src="'+t+'" alt="image-20220627104828914" tabindex="0" loading="lazy"><figcaption>image-20220627104828914</figcaption></figure><h2 id="token-和-session-的区别" tabindex="-1"><a class="header-anchor" href="#token-和-session-的区别"><span><strong><code>Token</code> 和 <code>Session</code> 的区别</strong></span></a></h2><ul><li><code>Session</code> 是一种记录服务器和客户端会话状态的机制，使服务端有状态化，可以记录会话信息。而 <code>Token</code> 是令牌，访问资源接口（<code>API</code>）时所需要的资源凭证。<code>Token</code> 使服务端无状态化，不会存储会话信息。</li><li><code>Session</code> 和 <code>Token</code> 并不矛盾，作为身份认证 <code>Token</code> 安全性比 <code>Session</code> 好，因为每一个请求<strong>都有签名还能防止监听以及重放攻击</strong>，而 <code>Session</code> 就必须依赖链路层来保障通讯安全了。如果你需要实现有状态的会话，仍然可以增加 <code>Session</code> 来在服务器端保存一些状态。</li><li>所谓 <code>Session</code> 认证只是简单的把 <code>User</code> 信息存储到 <code>Session</code> 里，因为 <code>SessionID</code> 的不可预测性，暂且认为是安全的。而 <code>Token</code> ，如果指的是 <code>OAuth Token</code> 或类似的机制的话，提供的是 <strong>认证</strong> 和 <strong>授权</strong> ，认证是针对用户，授权是针对 App 。其目的是让某 App 有权利访问某用户的信息。这里的 <code>Token</code> 是唯一的。不可以转移到其它 App上，也不可以转到其它用户上。<code>Session</code> 只提供一种简单的认证，即只要有此 <code>SessionID</code> ，即认为有此 User 的全部权利。是需要严格保密的，这个数据应该只保存在站方，不应该共享给其它网站或者第三方 App。</li><li>所以简单来说：如果你的用户数据可能<strong>需要和第三方共享</strong>，或者<strong>允许第三方调用 API 接口</strong>，用 <code>Token</code> 。如果永远只是自己的网站，自己的 App，用什么就无所谓了。</li></ul><h2 id="cookie、session、token三者关系" tabindex="-1"><a class="header-anchor" href="#cookie、session、token三者关系"><span><strong>Cookie、Session、Token三者关系</strong></span></a></h2><p><code>Token</code>就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件；<br><code>cookie</code>就是写在客户端的一个txt文件，里面包括你登录信息之类的，这样你下次在登录某个网站，就会自动调用<code>cookie</code>自动登录用户名；<br><code>session</code>和<code>cookie</code>差不多，只是<code>session</code>是写在服务器端的文件，也需要在客户端写入<code>cookie</code>文件，但是文件里是你的浏览器编号。<br><code>Session</code>的状态是存储在服务器端，客户端只有<code>session id</code>（通过<code>cookie</code>的方式储存）；而<code>Token</code>的状态是存储在客户端（通过<code>cookie</code>或者<code>localstorage</code>）。</p>',18)]))}const g=e(r,[["render",a],["__file","cookie-session-cookie.html.vue"]]),p=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/cookie-session-cookie.html","title":"Cookie、Session、Token","lang":"zh-CN","frontmatter":{"title":"Cookie、Session、Token","date":"2020-08-05T03:54:45.000Z","category":["学习笔记"],"tag":["浏览器"],"description":"知乎链接：https://zhuanlan.zhihu.com/p/152224669 Cookie Cookie是一个具体的东西，指的就是浏览器里面能永久存储的一种数据，仅仅是浏览器实现的一种数据存储功能。 Cookie由服务器生成，发送给浏览器，浏览器把Cookie以key-value形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该Co...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/cookie-session-cookie.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Cookie、Session、Token"}],["meta",{"property":"og:description","content":"知乎链接：https://zhuanlan.zhihu.com/p/152224669 Cookie Cookie是一个具体的东西，指的就是浏览器里面能永久存储的一种数据，仅仅是浏览器实现的一种数据存储功能。 Cookie由服务器生成，发送给浏览器，浏览器把Cookie以key-value形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该Co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T09:14:26.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"浏览器"}],["meta",{"property":"article:published_time","content":"2020-08-05T03:54:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T09:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cookie、Session、Token\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-05T03:54:45.000Z\\",\\"dateModified\\":\\"2024-08-05T09:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":2,"title":"Session","slug":"session","link":"#session","children":[]},{"level":2,"title":"Cookie 和 Session 的区别","slug":"cookie-和-session-的区别","link":"#cookie-和-session-的区别","children":[]},{"level":2,"title":"Token","slug":"token","link":"#token","children":[]},{"level":2,"title":"Token 和 Session 的区别","slug":"token-和-session-的区别","link":"#token-和-session-的区别","children":[]},{"level":2,"title":"Cookie、Session、Token三者关系","slug":"cookie、session、token三者关系","link":"#cookie、session、token三者关系","children":[]}],"git":{"createdTime":1656301166000,"updatedTime":1722849266000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":6.25,"words":1875},"filePathRelative":"学习笔记/cookie-session-cookie.md","localizedDate":"2020年8月5日","excerpt":"<p>知乎链接：<a href=\\"https://zhuanlan.zhihu.com/p/152224669\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://zhuanlan.zhihu.com/p/152224669</a></p>\\n<h2><strong>Cookie</strong></h2>\\n<p><code>Cookie</code>是一个具体的东西，指的就是浏览器里面能永久存储的一种数据，仅仅是浏览器实现的一种数据存储功能。<br>\\n<code>Cookie</code>由服务器生成，发送给浏览器，浏览器把<code>Cookie</code>以<code>key-value</code>形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该<code>Cookie</code>发送给服务器。<br>\\n由于<code>cookie</code>是存在客户端上的，所以浏览器加入了一些限制确保<code>Cookie</code>不会被恶意使用，同时不会占据太多磁盘空间，所以每个域的<code>Cookie</code>数量是有限的。<br>\\n<code>Cookie</code>是不可跨域的：每个 <code>cookie</code> 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 <code>domain</code>）。<br>\\n重要属性：</p>","autoDesc":true}');export{g as comp,p as data};
