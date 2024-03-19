import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,e as d}from"./app-CzTMLA3i.js";const c="/CrabSAMA-Blog/assets/image-20220527183136920-BeBVgcrZ.png",r="/CrabSAMA-Blog/assets/image-20220527183859392-BN-YsDnv.png",p="/CrabSAMA-Blog/assets/image-20220527183931558-D5lv8vP9.png",n={},i=d('<p>计算机与网络设备要相互通信，双方就必须基于相同的方法。这种规则就称之为协议。</p><p><strong><code>TCP/IP</code></strong> 是互联网相关的各类协议族的总称，比如：<code>TCP</code>、<code>UDP</code>、<code>IP</code>、<code>FTP</code>、<code>HTTP</code>、<code>ICMP</code>、<code>SMTP</code> 都属于 <code>TCP/IP</code> 族内的协议。</p><p><strong><code>TCP/IP</code></strong> 模型是互联网的基础，它是一系列网络协议的总称。这些协议可以划分为四层，分别为链路层、网络层、传输层和应用层。</p><ul><li><strong>链路层</strong>：负责封装和解封装 <code>IP</code> 报文，发送和接受 <code>ARP/RARP</code> 报文等</li><li><strong>网络层</strong>：负责路由以及把分组报文发送给目标网络或主机</li><li><strong>传输层</strong>：负责对报文进行分组和重组，并以 <code>TCP</code> 或 <code>UDP</code> 协议格式封装报文</li><li><strong>应用层</strong>：负责向用户提供应用程序，比如 <code>HTTP</code>、<code>FTP</code>、<code>Telnet</code>、<code>DNS</code>、<code>SMTP</code> 等</li></ul><figure><img src="'+c+'" alt="image-20220527183136920" tabindex="0" loading="lazy"><figcaption>image-20220527183136920</figcaption></figure><h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp"><span>UDP</span></a></h2><p><code>UDP</code> 协议全称是用户数据报协议，在网络中它与 <code>TCP</code> 协议一样用于处理数据包，是一种无连接的协议。在 <code>OSI</code> 模型中，在第四层——传输层，处于 <code>IP</code> 协议的上一层。<code>UDP</code> 有不提供数据包分组、组装和不能对数据包进行排序的缺点，也就是说，当报文发送之后，是无法得知其<strong>是否安全完整到达</strong>的。</p><ol><li><p><strong>面向无连接</strong></p><p><code>UDP</code> 是不需要和 <code>TCP</code> 一样在发送数据前进行三次握手建立连接的，<strong>想发数据就可以开始发送了</strong>。并且也只是数据报文的<strong>搬运工</strong>，不会对数据报文进行任何拆分和拼接操作。</p><p>在发送端，应用层将数据传递给传输层的 <code>UDP</code> 协议，<code>UDP</code> 只会给数据增加一个 <code>UDP</code> 头标识下是 <code>UDP</code> 协议，然后就传递给网络层了；在接收端，网络层将数据传递给传输层，<code>UDP</code> 只去除 <code>IP</code> 报文头就传递给应用层，不会任何拼接操作。</p></li><li><p><strong>有单播，多播，广播的功能</strong></p><p><code>UDP</code> 不止支持一对一的传输方式，同时支持一对多，多对多，多对一的方式。</p></li><li><p><strong>UDP 是面向报文的</strong></p><p>发送方的 <code>UDP</code> 对应用程序交下来的报文，在添加首部后就向下交付 <code>IP</code> 层。<code>UDP</code> 对应用层交下来的报文，<strong>既不合并，也不拆分</strong>，而是保留这些报文的边界。因此，应用程序必须选择<strong>合适大小</strong>的报文。</p></li><li><p><strong>不可靠性</strong></p><p>首先不可靠性体现在<strong>无连接</strong>上，通信都不需要建立连接，想发就发，这样的情况肯定不可靠。</p><p>并且收到什么数据就传递什么数据，并且也不会备份数据，发送数据也不会关心对方是否已经正确接收到数据了。</p></li><li><p><strong>头部开销小，传输数据报文时是很高效的</strong></p><p><code>UDP</code> 头部包含了：</p><ul><li>两个十六位的端口号，分别为源端口（可选字段）和目标端口</li><li>整个数据报文的长度</li><li>整个数据报文的检验和（IPv4 可选字段），该字段用于发现头部信息和数据中的错误</li></ul><p>因此 <code>UDP</code> 的头部开销小，只有八字节，相比 <code>TCP</code> 的至少二十字节要少得多</p></li></ol><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp"><span>TCP</span></a></h2><p>当一台计算机想要与另一台计算机通讯时，两台计算机之间的通讯需要<strong>畅通且可靠</strong>，这样才能保证正确收发数据。</p><p><code>TCP</code> 协议全称是传输控制协议，是一种<strong>面向连接</strong>、<strong>可靠</strong>的、<strong>基于字节流</strong>的传输通信协议。</p><ol><li><p><strong><code>TCP</code> 连接过程</strong></p><figure><img src="'+r+'" alt="image-20220527183859392" tabindex="0" loading="lazy"><figcaption>image-20220527183859392</figcaption></figure><ul><li>第一次握手</li></ul><p>客户端想服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 <code>SYN-SENT</code> 状态。</p><ul><li>第二次握手</li></ul><p>服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答也会包含自身的数据通讯初始序号，发送完成后便进入 <code>SYN-RECEIVED</code> 状态</p><ul><li>第三次握手</li></ul><p>当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段就进入 <code>ESTABLISHED</code> 状态，服务端收到这个应答后也进入 <code>ESTABLISHED</code> 状态，此时连接建立成功。</p></li><li><p><strong>TCP 断开连接</strong></p><p><code>TCP</code> 是全双工的，在断开连接时两端都需要发送 <code>FIN</code> 和 <code>ACK</code>。</p><figure><img src="'+p+'" alt="image-20220527183931558" tabindex="0" loading="lazy"><figcaption>image-20220527183931558</figcaption></figure><ul><li><p>第一次握手</p><p>若客户端 A 认为数据发送完成，则它需要向服务端 B 发送连接释放请求。</p></li><li><p>第二次握手</p><p>B 收到连接释放请求后，会告诉应用层要释放 <code>TCP</code> 链接。然后会发送 <code>ACK</code> 包，并进入 CLOSE_WAIT 状态，此时表明 A 到 B 的连接已经释放，不再接收 A 发的数据了。但是因为 <code>TCP</code> 连接是双向的，所以 B 仍旧可以发送数据给 A。</p></li><li><p>第三次握手</p><p>B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 <code>LAST-ACK</code> 状态。</p></li><li><p>第四层握手</p><p>A 收到释放请求后，向 B 发送确认应答，此时 A 进入 <code>TIME-WAIT</code> 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有 B 的重发请求的话，就进入 <code>CLOSED</code> 状态。当 B 收到确认应答后，也便进入 <code>CLOSED</code> 状态。</p></li></ul></li><li><p><strong><code>TCP</code> 协议的特点</strong></p><ul><li><p>面向连接</p><p>面向连接，是指发送数据之前必须在两端<strong>建立可靠的连接</strong>。建立连接，是为数据的可靠性打下了基础。</p></li><li><p>仅支持单播</p><p>每条 <code>TCP</code> 传输连接只能有两个端点，只能进行<strong>点对点</strong>的数据传输，不支持多播和广播。</p></li><li><p>面向字节流</p><p><code>TCP</code> 不像 <code>UDP</code> 那样一个个报文独立地传输，而是在不保留报文边界的情况下以<strong>字节流方式</strong>进行传输。</p></li><li><p>可靠传输</p><p>对于可靠传输，判断丢包、误码靠的是 <code>TCP</code> 的<strong>段编号</strong>以及<strong>确认号</strong>。<code>TCP</code> 为了保证报文传输的可靠，就给每个包一个序号，同时序号也保证了传送到接收端实体的包的<strong>按序接收</strong>。</p></li><li><p>提供拥塞控制</p><p>当网络出现拥塞的时候，<code>TCP</code> 能够减少向网络注入数据的速率和数量，缓解拥塞。</p></li><li><p><code>TCP</code> 提供全双工通信</p><p><code>TCP</code> 允许通信双方的应用程序在任何时候都能发送数据。</p></li></ul></li></ol><h2 id="tcp-和-udp-的比较" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的比较"><span><code>TCP</code> 和 <code>UDP</code> 的比较</span></a></h2><table><thead><tr><th></th><th><strong><code>UDP</code></strong></th><th><strong><code>TCP</code></strong></th></tr></thead><tbody><tr><td><strong>是否连接</strong></td><td>无连接</td><td>面向连接</td></tr><tr><td><strong>是否可靠</strong></td><td>不可靠传输，不使用流量控制和拥塞控制</td><td>可靠传输，使用流量控制和拥塞控制</td></tr><tr><td><strong>连接对象个数</strong></td><td>支持一对一，一对多，多对一和多对多交互通信</td><td>只能是一对一通信</td></tr><tr><td><strong>传输方式</strong></td><td>面向报文</td><td>面向字节流</td></tr><tr><td><strong>首部开销</strong></td><td>首部开销小，仅 8 字节</td><td>首部最小 20 字节，最大 60 字节</td></tr><tr><td><strong>适用场景</strong></td><td>适用于实时应用（IP 电话、视频会议、直播等）</td><td>适用于要求可靠传输的应用，例如文件传输</td></tr></tbody></table>',14),s=[i];function l(a,g){return e(),t("div",null,s)}const C=o(n,[["render",l],["__file","tcp-and-udp.html.vue"]]),m=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/tcp-and-udp.html","title":"TCP 与 UDP 的区别","lang":"zh-CN","frontmatter":{"title":"TCP 与 UDP 的区别","date":"2022-05-27T10:48:29.000Z","category":["计算机网络"],"tag":["HTTP"],"description":"计算机与网络设备要相互通信，双方就必须基于相同的方法。这种规则就称之为协议。 TCP/IP 是互联网相关的各类协议族的总称，比如：TCP、UDP、IP、FTP、HTTP、ICMP、SMTP 都属于 TCP/IP 族内的协议。 TCP/IP 模型是互联网的基础，它是一系列网络协议的总称。这些协议可以划分为四层，分别为链路层、网络层、传输层和应用层。 链路...","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/tcp-and-udp.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"TCP 与 UDP 的区别"}],["meta",{"property":"og:description","content":"计算机与网络设备要相互通信，双方就必须基于相同的方法。这种规则就称之为协议。 TCP/IP 是互联网相关的各类协议族的总称，比如：TCP、UDP、IP、FTP、HTTP、ICMP、SMTP 都属于 TCP/IP 族内的协议。 TCP/IP 模型是互联网的基础，它是一系列网络协议的总称。这些协议可以划分为四层，分别为链路层、网络层、传输层和应用层。 链路..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:published_time","content":"2022-05-27T10:48:29.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP 与 UDP 的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-27T10:48:29.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CrabSAMA\\",\\"url\\":\\"https://crabsama.github.io/CrabSAMA-Blog\\"}]}"]]},"headers":[{"level":2,"title":"UDP","slug":"udp","link":"#udp","children":[]},{"level":2,"title":"TCP","slug":"tcp","link":"#tcp","children":[]},{"level":2,"title":"TCP 和 UDP 的比较","slug":"tcp-和-udp-的比较","link":"#tcp-和-udp-的比较","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":6.26,"words":1878},"filePathRelative":"计算机网络/tcp-and-udp.md","localizedDate":"2022年5月27日","excerpt":"<p>计算机与网络设备要相互通信，双方就必须基于相同的方法。这种规则就称之为协议。</p>\\n<p><strong><code>TCP/IP</code></strong> 是互联网相关的各类协议族的总称，比如：<code>TCP</code>、<code>UDP</code>、<code>IP</code>、<code>FTP</code>、<code>HTTP</code>、<code>ICMP</code>、<code>SMTP</code> 都属于 <code>TCP/IP</code> 族内的协议。</p>\\n<p><strong><code>TCP/IP</code></strong> 模型是互联网的基础，它是一系列网络协议的总称。这些协议可以划分为四层，分别为链路层、网络层、传输层和应用层。</p>","autoDesc":true}');export{C as comp,m as data};
