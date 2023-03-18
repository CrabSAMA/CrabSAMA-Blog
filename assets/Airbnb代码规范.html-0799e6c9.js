const e=JSON.parse('{"key":"v-abb7e7a2","path":"/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/Airbnb%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html","title":"Airbnb JavaScript 代码规范","lang":"zh-CN","frontmatter":{"title":"Airbnb JavaScript 代码规范","date":"2021-11-03T07:33:40.000Z","category":["前端开发"],"tag":["开发规范"],"description":"Airbnb JavaScript 代码规范() { 一种写JavaScript更合理的代码风格。 Note: 本指南假设你使用了 Babel, 并且要求你使用 babel-preset-airbnb 或者其他同等资源。 并且假设你在你的应用中安装了 shims/polyfills ，使用airbnb-browser-shims 或者相同功能。","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/Airbnb%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Airbnb JavaScript 代码规范"}],["meta",{"property":"og:description","content":"Airbnb JavaScript 代码规范() { 一种写JavaScript更合理的代码风格。 Note: 本指南假设你使用了 Babel, 并且要求你使用 babel-preset-airbnb 或者其他同等资源。 并且假设你在你的应用中安装了 shims/polyfills ，使用airbnb-browser-shims 或者相同功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-18T04:29:56.000Z"}],["meta",{"property":"article:tag","content":"开发规范"}],["meta",{"property":"article:published_time","content":"2021-11-03T07:33:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-18T04:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Airbnb JavaScript 代码规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-03T07:33:40.000Z\\",\\"dateModified\\":\\"2023-03-18T04:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"解构","slug":"解构","link":"#解构","children":[]},{"level":2,"title":"字符","slug":"字符","link":"#字符","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"类和构造器","slug":"类和构造器","link":"#类和构造器","children":[]},{"level":2,"title":"模块","slug":"模块","link":"#模块","children":[]},{"level":2,"title":"迭代器和发生器","slug":"迭代器和发生器","link":"#迭代器和发生器","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"提升","slug":"提升","link":"#提升","children":[]},{"level":2,"title":"比较运算符和等号","slug":"比较运算符和等号","link":"#比较运算符和等号","children":[]},{"level":2,"title":"块","slug":"块","link":"#块","children":[]},{"level":2,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"空白","slug":"空白","link":"#空白","children":[]},{"level":2,"title":"逗号","slug":"逗号","link":"#逗号","children":[]},{"level":2,"title":"分号","slug":"分号","link":"#分号","children":[]},{"level":2,"title":"类型转换和强制类型转换","slug":"类型转换和强制类型转换","link":"#类型转换和强制类型转换","children":[]},{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":2,"title":"存取器","slug":"存取器","link":"#存取器","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"jQuery","slug":"jquery","link":"#jquery","children":[]},{"level":2,"title":"ECMAScript 5 兼容性","slug":"ecmascript-5-兼容性","link":"#ecmascript-5-兼容性","children":[]},{"level":2,"title":"ECMAScript 6+ (ES 2015+) Styles","slug":"ecmascript-6-es-2015-styles","link":"#ecmascript-6-es-2015-styles","children":[]},{"level":2,"title":"标准库","slug":"标准库","link":"#标准库","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[]},{"level":2,"title":"资源","slug":"资源","link":"#资源","children":[]},{"level":2,"title":"JavaScript风格指南的指南","slug":"javascript风格指南的指南","link":"#javascript风格指南的指南","children":[]},{"level":2,"title":"许可证","slug":"许可证","link":"#许可证","children":[]},{"level":2,"title":"修正案","slug":"修正案","link":"#修正案","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679113796000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":2}]},"readingTime":{"minutes":53.62,"words":16087},"filePathRelative":"开发规范/Airbnb代码规范.md","localizedDate":"2021年11月3日","excerpt":"<h1> Airbnb JavaScript 代码规范() {</h1>\\n<p><em>一种写JavaScript更合理的代码风格。</em></p>\\n<blockquote>\\n<p><strong>Note</strong>: 本指南假设你使用了 <a href=\\"https://babeljs.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Babel</a>, 并且要求你使用 <a href=\\"https://npmjs.com/babel-preset-airbnb\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">babel-preset-airbnb</a> 或者其他同等资源。 并且假设你在你的应用中安装了 shims/polyfills ，使用<a href=\\"https://npmjs.com/airbnb-browser-shims\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">airbnb-browser-shims</a> 或者相同功能。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
