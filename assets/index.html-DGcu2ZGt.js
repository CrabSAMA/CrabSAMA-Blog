import{d as b,b as p,r as k,o as s,e as f,w as A,c as d,F as h,a,n as m,f as g,t as u,g as y,h as v}from"./app-CkQAPpyV.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";const C=b({__name:"IconLabelItem",props:{label:{}},setup(i,{expose:n}){n();const e=i,t=p(()=>!e.label.match(/^\!/)),r=p(()=>t.value?e.label:e.label.slice(1)),l={props:e,hasIcon:t,text:r};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),I="_divider_ldn4x_24",T={"icon-label-item":"_icon-label-item_ldn4x_10",divider:I},V=["src"];function $(i,n,e,t,r,l){const o=k("Badge");return s(),f(o,{class:m(i.$style["icon-label-item"]),type:"note"},{default:A(()=>[t.hasIcon?(s(),d(h,{key:0},[a("img",{height:"16",width:"16",style:{cursor:"none","pointer-events":"none"},src:`https://cdn.simpleicons.org/${e.label.replace(/\s/g,"").toLowerCase()}`},null,8,V),a("i",{style:{margin:".25rem"},class:m(i.$style.divider)},null,2)],64)):g("",!0),a("span",null,u(t.text),1)]),_:1},8,["class"])}const x={$style:T},B=_(C,[["render",$],["__cssModules",x],["__file","IconLabelItem.vue"]]),P=b({__name:"TimelineBlockItem",props:{data:{}},setup(i,{expose:n}){n();const e={IconLabelItem:B};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),j="_divider_zak1o_17",D={"timeline-block-content-item":"_timeline-block-content-item_zak1o_2","icon-label-list":"_icon-label-list_zak1o_6","icon-label-item":"_icon-label-item_zak1o_11",divider:j},L={class:"card__header"},E={class:"card__body"};function w(i,n,e,t,r,l){var o;return s(),d("div",{class:m(["card",i.$style["timeline-block-content-item"]])},[a("div",L,[a("h4",null,u(e.data.title),1)]),a("div",E,[a("p",null,u(e.data.description),1)]),(o=e.data.labels)!=null&&o.length?(s(),d("div",{key:0,class:m(["card__footer",i.$style["icon-label-list"]])},[(s(!0),d(h,null,y(e.data.labels,c=>(s(),f(t.IconLabelItem,{key:c,label:c},null,8,["label"]))),128))],2)):g("",!0)],2)}const M={$style:D},W=_(P,[["render",w],["__cssModules",M],["__scopeId","data-v-6e3ddd0e"],["__file","TimelineBlockItem.vue"]]),R=b({__name:"TimelineBlock",props:{date:{},items:{}},setup(i,{expose:n}){n();const e=i,t=p(()=>new Date(e.date).getFullYear()),r=p(()=>String(new Date(e.date).getMonth()+1).padStart(2,"0")),l={props:e,year:t,month:r,TimelineBlockItem:W};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),J="_title_snf8j_25",O={"timeline-block":"_timeline-block_snf8j_10","timeline-block-content":"_timeline-block-content_snf8j_15",title:J,"timeline-block-line":"_timeline-block-line_snf8j_46"};function z(i,n,e,t,r,l){return s(),d("div",{class:m(i.$style["timeline-block"])},[a("i",{class:m(i.$style["timeline-block-line"])},null,2),a("div",{class:m(i.$style["timeline-block-content"])},[a("p",{class:m(i.$style.title)},u(t.year)+"."+u(t.month),3),(s(!0),d(h,null,y(e.items,(o,c)=>(s(),f(t.TimelineBlockItem,{key:c,data:o},null,8,["data"]))),128))],2)],2)}const F={$style:O},N=_(R,[["render",z],["__cssModules",F],["__file","TimelineBlock.vue"]]),U=b({__name:"Timeline",props:{data:{}},setup(i,{expose:n}){n();const e=i,t=p(()=>{var l;return Object.keys(((l=e.data)==null?void 0:l.events)||{}).slice().sort((o,c)=>new Date(c).getTime()-new Date(o).getTime())}),r={props:e,sortedDates:t,TimelineBlock:N};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),G={style:{"margin-top":"2rem"}},q={class:"container"};function H(i,n,e,t,r,l){return s(),d("section",null,[a("div",G,[a("div",q,[(s(!0),d(h,null,y(t.sortedDates,o=>{var c,S;return s(),f(t.TimelineBlock,{key:o,date:o,items:((S=(c=e.data)==null?void 0:c.events)==null?void 0:S[o])||[]},null,8,["date","items"])}),128))])])])}const K=_(U,[["render",H],["__file","Timeline.vue"]]),Q={"2024-03-01":[{title:"大模型在人才招聘领域应用落地",description:"年初的时候，公司内部孵化出了人才招聘领域相关的需求，在当时我提供了一套基于 chrome extension 的技术方案实现。在后续的开发过程中，项目结合了大模型、LangChain、Agent、知识库、Prompt 工程、RPA 自动化等技术方案，最终实现了一个基于大模型的招聘智能助手，并已经在公司内部成功落地应用。我也在其中学习到了大模型的 Prompt 工程、Prompt 调优等知识，算是第一次深入了解大模型应用相关的内容。",labels:["!AI","!Agent","LangChain","!人才招聘"]}],"2024-01-01":[{title:"前端工程化日日新",description:"前端工程化这个方向可以说是日新月异，新的框架层出不穷。在过完了2023年后，我的前端工程化框架已经由 Vite + Tailwind CSS 更新为了 VSCode + Vite + pnpm monorepo + unocss。",labels:["!前端工程化","!Visual Studio Code","Vite","pnpm","!monorepo","UnoCSS"]}],"2023-11-01":[{title:"探索前端低代码平台",description:"我了解低代码平台与前端低代码大致框架，有需要的话我也可以参与到其中，一些概念（例如物料、simulator这块）我也有了解。但是在我的实际工作经验中，感觉低代码这个方向有一定的局限性，它面向的用户不够清晰，针对开发人员来说，想完全上手低代码平台需要自己去编写部分前端代码；而针对一般用户拖拉拽实现一些页面，提供的定制程度又不够高。因此在我们这边并没有大规模推开低代码平台这种提效方式，但是有其他相对应的提效方式（模版，代码片段等）。",labels:["!前端工程化","!低代码"]}],"2023-07-01":[{title:"Chrome Extension 开发，上手 React",description:"最初是自己发掘了部门内部的一个提效需求，想利用接口文档（Swagger / Knife4j）实现一些代码生成与接口权限录入，第一版用 CLI 的方式实现，但由于无法直接获取 token 使得较为低效，当时就想到是不是可以借助 extension 来做，也是从这里开始接触到了 extension 开发。在这个过程中，尝试了使用 React 来编写 extension，这个插件也成功的在部门内部推广开，使得大家繁复的流程效率有了提升。",labels:["Google Chrome","!Chrome Extension","React"]}],"2023-06-15":[{title:"框架无关组件库实践",description:"在 Vue3 出来一年后，组内的 Vue2 与 Vue3 项目数量逐渐对等，许多以前 Vue2 时代写的公共组件没有办法直接在 Vue3 中使用，我便开始寻找一个合适的方案来实现框架无关的组件库，此时就接触到了 Web Component 这个概念。最初使用的是腾讯开源的 Omi 框架，但由于当时存在不少问题，加上文档写得一般，同时打包大小也没有优势，最终转向使用了谷歌开源的 Lit 框架，并使用 Lit 重构了之前的通知中心 SDK。",labels:["!Omi","Lit","Webcomponentsdotorg"]}],"2023-05-01":[{title:"探索 AIGC 与数字人",description:"在 ChatGPT 大火的当下，业内都在尝试 AI 与业务如何结合进行提效，公司内部有不少 AIGC 相关方面的探索，如文本生成 SQL、提示词生成图表等。我在其中接到了 AI 数字人的需求，从离线数字人（模型生成视频）做到实时数字人（UE），对数字人这个行业有了基础的了解，同时也入门了音视频相关的基础知识，学习了 ffmpeg 的一些基础使用，也了解了直播推流相关的知识。",labels:["!AI","OpenAI","!ChatGPT","!数字人","Unreal Engine","FFmpeg"]},{title:"第一次成功的 PR",description:"2020年11月，我提交了一个 Vite 的翻译文档 PR，但后续由于有官方翻译，我的 PR 没能被成功合并到主分支中。2023年5月一个平凡的周末，发现 axios 文档的中文文档已经隔了几个版本没有更新了，一些新的 API 没有中文翻译，因此一时兴起，花了一天时间将中文文档进行了翻译，并提交了 PR，希望可以帮助到更多人。",labels:["GitHub","Axios"]}],"2023-03-20":[{title:"探索 Electron 与 Tauri",description:"除了移动端的开发，前端技术也可以用来开发客户端应用。在工作之余，尝试使用了 electron 编写了一个 markdown frontmatter 编辑器，同时也尝试了 tauri 框架，比较了两者的差异，同时掌握了两个框架的基础使用。",labels:["Electron","Tauri","Rust"]}],"2023-01-01":[{title:"探索前端工程化",description:"前端工程化一直是我十分感兴趣的一个方向，2022年整年除了业务开发以外，在前端工程化方向我也进行了一些探索，包括 Vue2 迁移 Vue3，微前端的技术选型（Wujie 与 Qiankun）、探索与落地，Webpack、Vite插件开发（unplugin）等。",labels:["!前端工程化","Vue.js","!微前端","!wujie","!qiankun","Webpack","Vite","!unplugin"]}],"2022-08-24":[{title:"初识 Flutter",description:"我理解的前端开发一直是大前端的概念，并不局限在 Web 端，加上自己最初也是学习 Android 出身，因此在工作之余也有尝试去学习一些 Flutter 的知识。在初步学习后，利用 Flutter 写了一个短信转发器，将备用机收到的短信以微信推送的方式推送到我的微信。",labels:["Flutter"]}],"2022-07-01":[{title:"接触并探索 A/B Test",description:"由于同事的离职，我接手了公司内部 A/B 实验平台的开发工作。在项目开发的过程中，与后端同学边做需求边学习 A/B 实验相关的知识，了解到这是一个很复杂的业务。随着开发的深入，也深入地去了解到了 A/B 实验的一些基础知识与业务逻辑。",labels:["!A/B Test"]}],"2022-01-01":[{title:"尝试在公司私有库发布并维护一些 npm 包",description:"在入职的半年里，对业务已经比较熟悉了，做了不少项目的需求，而且一些常用的技术栈也基本上掌握的比较熟练，此时接到了一个部门内部的公共需求，对我来说正好是个机会。我尝试用 rollup.js 工具链构建 JavaScript 库的开发与发布模板，独立开发了通知中心和埋点SDK，理解到开发公共包和普通业务开发还是和很不一样的，需要注重易用性和容错性；我也通过自动开通权限和入参检查来优化用户体验，减少了开发者的接入成本和常见问题；最后以 npm 包的形式发布。",labels:["NPM","rollup.js","typescript","!埋点"]}],"2021-11-01":[{title:"接触数据可视化开发",description:"由于公司内部使用的 tableau 可视化工具是 license 付费，日益增加的成本以及较低的定制性一直是难以解决的问题，因此部门内部有开发一个自研的数据可视化 BI 平台的需求。在这个项目里，我负责了工作台模块的开发，实现了数据的可视化拖拉拽功能；同时在这个过程中将项目由 Vue-cli 升级到 Vite，这个项目也是部门内部第一个使用 Vue3 + TypeScript + Vite 开发的项目；此外还探索了原子类 css 库的使用，引入了 tailwindcss，是当时较为早期使用原子类 css 库的用户。",labels:["!数据可视化","Apache ECharts","Vite","Tailwind CSS"]}],"2021-06-01":[{title:"毕业设计",description:"本科的最后一门课是毕业设计，我选择了疫情时代十分流行的一个方向：社区团购。这是我第一个前后端全干的项目，前端 Vue3 / uni-app + 后端 Node.js，整个项目使用 docker 进行部署，结合 Jenkins + Gitee WebHook 实现 CI/CD 工作流，将整个工程部署在阿里云的 Ubuntu 云服务器上。",labels:["Ubuntu","Docker","Node.JS","MySQL","Vue.js","Ant Design","!uni-app"]}],"2020-12-01":[{title:"校招offer",description:"作为一个普通本科的大学生，工作是真的不好找，当时海投了44家公司，50+岗位，最终得到的面试机会都寥寥无几。也还算幸运地拿到了两个offer，最终入职了一家货运行业的独角兽企业，正式开始了前端开发的职业之旅。",labels:["!求职"]}],"2020-07-27":[{title:"第一份实习工作",description:"投递大厂的实习，由于学历与没有实习经验的原因，大多都石沉大海了。借助家里的关系，在本地的一家小公司找到了前端开发的实习岗位。公司虽小，但总体来说项目还是比较成熟的，也是在这里我第一次接触到了 CI/CD 的概念，学到了前端模块化开发的思维，也积累了许多项目经验。",labels:["Gitee","Jenkins"]}],"2020-04-01":[{title:"确定 Web 前端开发为职业目标",description:"确定毕业后从事 Web 前端开发岗位工作，开始通过借阅图书馆相关书籍、网络社区教程等途径以较为系统化的方式学习相关技术知识，同时开始总结项目经历，准备简历寻找实习工作。",labels:["HTML5","CSS3","JavaScript","Mdn Web Docs"]}],"2020-01-01":[{title:"人生的第一笔巨款",description:"在完成了第一个校内的项目后，朋友接到了外面的单子，是一个传统行业的企业需要做一个流程管理系统。在这个过程中，和后端朋友一起合作（Battle），历时半年拿到了人生的第一笔巨款收入——1.5w。虽然项目最后由于某些原因没有正式投入上线，但这个项目的经验给我在前端开发这个方向提供了很多宝贵的项目经验。",labels:["Vue.js","!Vue Router","!Vuex","!Element-UI","!cube-ui"]}],"2019-03-10":[{title:"学习前端",description:"大二下学期，有了之前软件开发比赛的经验，也有了和同学一起开发项目的想法。此时接到了学校部门的一个教务管理系统的开发需求，最初是考虑 Web + 安卓双端，最后敲定只使用 Web 方案。在敲定方案后，我通过 Bilibili 开始学习前端，一周速成 Vue2 框架与 Element-UI 组件库，并开始上手尝试进行开发。",labels:["HTML5","CSS3","JavaScript","Vue.js","!Element-UI"]},{title:"构建个人开发环境",description:"由于 Web 前端开发不像服务端开发、客户端开发一样有现成完整的开发环境工具链，所以积极了解社区的发展情况和尝试一些其它的选择，先是基于 Sublime Text 编辑器进行开发，后续由于之前 Java 使用的是 IDEA，出于对 Jetbrains 的信任，选择了使用 WebStorm 作为开发工具。",labels:["Sublime Text","WebStorm"]}],"2018-12-01":[{title:"2018 迪浪杯",description:"在学习安卓半年后，校内举办了迪浪杯软件设计大赛，我借助自己学习到的安卓知识（当时还不会后端，使用的 Bmob 后端云服务，现在已经倒闭啦），和同学一起开发了一个叫 ELife 的应用，也是比较幸运地进入了决赛，获得了三等奖的成绩，这对我继续深入学习技术这个方向提供了很大的信心。",labels:["Android","Android Studio"]}],"2018-05-23":[{title:"加入工作室，学习安卓",description:"大一下学期的时候，通过学长介绍，加入了校内的计算机学院工作室，开始学习 Java 语言，并开始学习 Android 开发。",labels:["!Java","Eclipse IDE","Android","Android Studio"]}],"2017-10-01":[{title:"加入校团委宣传部网络宣传模块",description:"大学期间选择了加入校团委，在这里面学会了制作公众号推文，基础的 PS、LR、PR、AE 操作。",labels:["WeChat","Adobe Photoshop","Adobe Lightroom","Adobe Premiere Pro","Adobe After Effects"]}],"2017-09-01":[{title:"学习 C 语言",description:"大学开学，虽然没能进入自己喜欢的计算机专业，但是也提前在大一就开始学习 C 语言，在这个过程中被 C 语言的指针搞得头晕目眩。",labels:["C","!dev-c++"]}],"2011-07-30":[{title:"易语言编写辅助",description:"童年的记忆，小时候就很喜欢玩游戏，打不过别人的时候就喜欢开挂，也是在 qqtz 这个论坛下面看到了有人分享辅助的 dll 文件，借助它通过易语言写了一些简单的外挂。",labels:["!易语言"]}]},Z={events:Q},Y={__name:"index.html",setup(i,{expose:n}){n();const e={Timeline:K,get timelineData(){return Z}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function X(i,n,e,t,r,l){return s(),d("div",null,[v(t.Timeline,{data:t.timelineData},null,8,["data"])])}const ie=_(Y,[["render",X],["__file","index.html.vue"]]),ne=JSON.parse('{"path":"/myself/","title":"","lang":"zh-CN","frontmatter":{"sidebar":false,"pageInfo":false,"comment":false,"editLink":false,"contributors":false,"breadcrumb":false,"lastUpdated":false,"photoswipe":false,"toc":false,"article":false,"timeline":false,"containerClass":"myself-container","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/myself/"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T08:09:22.000Z"}],["meta",{"property":"article:author","content":"CrabSAMA"}],["meta",{"property":"article:modified_time","content":"2024-08-19T08:09:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"\\"}"]]},"headers":[],"git":{"createdTime":1723451220000,"updatedTime":1724054962000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":3}]},"readingTime":{"minutes":0.13,"words":40},"filePathRelative":"myself/README.md","localizedDate":"2024年8月12日","excerpt":""}');export{ie as comp,ne as data};
