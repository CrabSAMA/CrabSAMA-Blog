const t=JSON.parse('{"key":"v-3e584e80","path":"/JavaScript/prototype.html","title":"Prototype","lang":"zh-CN","frontmatter":{"title":"Prototype","category":["JavaScript"],"description":"帮你彻底搞懂JS中的PROTOTYPE、__PROTO__与CONSTRUCTOR（图解） CSDN链接 我们需要牢记两点：①_proto_和_constructor_属性是对象所独有的；② _prototype_属性是函数所独有的，因为函数也是一种对象，所以函数也拥有_proto_和_constructor_属性。 _proto_属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的_proto_属性所指向的那个对象（父对象）里找，一直找，直到_proto_属性的终点null，再往上找就相当于在null上取值，会报错。通过_proto_属性将对象连接起来的这条链路即我们所谓的原型链。 _prototype_属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，即f1.proto === Foo.prototype。 _constructor_属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向Function。","head":[["meta",{"property":"og:url","content":"https://crabsama.github.io/CrabSAMA-Blog/CrabSAMA-Blog/JavaScript/prototype.html"}],["meta",{"property":"og:site_name","content":"CrabSAMA · 笔记"}],["meta",{"property":"og:title","content":"Prototype"}],["meta",{"property":"og:description","content":"帮你彻底搞懂JS中的PROTOTYPE、__PROTO__与CONSTRUCTOR（图解） CSDN链接 我们需要牢记两点：①_proto_和_constructor_属性是对象所独有的；② _prototype_属性是函数所独有的，因为函数也是一种对象，所以函数也拥有_proto_和_constructor_属性。 _proto_属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的_proto_属性所指向的那个对象（父对象）里找，一直找，直到_proto_属性的终点null，再往上找就相当于在null上取值，会报错。通过_proto_属性将对象连接起来的这条链路即我们所谓的原型链。 _prototype_属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，即f1.proto === Foo.prototype。 _constructor_属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向Function。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-17T16:52:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-17T16:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prototype\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-17T16:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"方便理解的代码","slug":"方便理解的代码","link":"#方便理解的代码","children":[]}],"git":{"createdTime":1679071923000,"updatedTime":1679071923000,"contributors":[{"name":"CrabSAMA","email":"71915282@qq.com","commits":1}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"JavaScript/prototype.md","localizedDate":"2023年3月17日","excerpt":"<blockquote>\\n<p>帮你彻底搞懂JS中的PROTOTYPE、__PROTO__与CONSTRUCTOR（图解）</p>\\n<p><a href=\\"https://blog.csdn.net/cc18868876837/article/details/81211729\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CSDN链接</a></p>\\n</blockquote>\\n<ol>\\n<li>我们需要牢记两点：①_proto_和_constructor_属性是<strong>对象</strong>所独有的；② _prototype_属性是<strong>函数</strong>所独有的，因为函数也是一种对象，所以函数也拥有_proto_和_constructor_属性。</li>\\n<li>_proto_属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的_proto_属性所指向的那个对象（父对象）里找，一直找，直到_proto_属性的终点null，再往上找就相当于在null上取值，会报错。通过_proto_属性将对象连接起来的这条链路即我们所谓的<strong>原型链</strong>。</li>\\n<li>_prototype_属性的作用就是让该<strong>函数所实例化的对象</strong>们都可以找到<strong>公用的属性和方法</strong>，即f1.<em>proto</em> === Foo.<em>prototype</em>。</li>\\n<li>_constructor_属性的含义就是指向<strong>该对象的构造函数</strong>，所有函数（此时看成对象了）最终的构造函数都指向Function。</li>\\n</ol>","autoDesc":true}');export{t as data};
