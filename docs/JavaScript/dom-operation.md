---
title: DOM操作
sidebar: 'auto'
categories:
 - JavaScript
---

HTML文档被浏览器解析后是一颗DOM树，要改变HTML的结果，可以通过JavaScript来操作DOM。 
DOM是一个属性结构，操作DOM就是这几个操作：

*   更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
*   遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
*   添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
*   删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。


## DOM获取

在操作一个DOM节点前，我们需要通过各种方式先拿到这个DOM节点。最常用的方法是`document.getElementById()`和`document.getElementsByTagName()`，以及CSS选择器`document.getElementsByClassName()`。

由于ID在HTML文档中是唯一的，所以`document.getElementById()`可以直接定位唯一的一个DOM节点。`document.getElementsByTagName()`和`document.getElementsByClassName()`总是返回一组DOM节点。要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

例如：

```js
// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;
```

第二种方法是使用`querySelector()`和`querySelectorAll()`，需要了解selector语法（了解CSS选择器），然后使用条件来获取节点，更加方便：

```js
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');
```

注意：低版本的IE<8不支持`querySelector`和`querySelectorAll`。IE8仅有限支持。

严格地讲，我们这里的DOM节点是指`Element`，但是DOM节点实际上是`Node`，在HTML中，`Node`包括`Element`、`Comment`、`CDATA_SECTION`等很多种，以及根节点`Document`类型，但是，绝大多数时候我们只关心`Element`，也就是实际控制页面结构的`Node`，其他类型的`Node`忽略即可。根节点`Document`已经自动绑定为全局变量`document`。  
注意：通过**DOM.children**获取回来的，都是属于Element类型的节点；通过**DOM.childNodes**获取回来的，则都是Node（包括TextNode等等）。  
[牛客面试题](https://www.nowcoder.com/profile/233908451/test/33947066/369131#summary)

* * *

## 测试题

<!-- HTML结构 -->

```html
<div id="test-div">
  <div class="c-red">
    <p id="test-p">JavaScript</p>
    <p>Java</p>
  </div>
  <div class="c-red c-green">
    <p>Python</p>
    <p>Ruby</p>
    <p>Swift</p>
  </div>
  <div class="c-green">
    <p>Scheme</p>
    <p>Haskell</p>
  </div>
</div>
```


请选择出指定条件的节点：

```js
// 选择<p>JavaScript</p>:
var js = document.getElementById('test-p');
// 因为在结构里面，该节点拥有ID，可以唯一指定，所以直接通过ID获取DOM节点

// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.querySelector(".c-red.c-green").children;
// 首先，这三个节点都是p标签，没有其他标识，只能从父标签下手。父标签也是一个没有ID的div，但是父标签有两个Class，这就是特点，可以通过querySelector下手，通过两个连接的类选择器唯一获取到父标签DOM，然后通过children则可以获取到其下的三个p标签

// 选择<p>Haskell</p>:
var haskell = document.getElementById("test-div").lastElementChild.lastElementChild;
// 这一个是比较难的，暂时我只能通过DOM结构看出，这个div是在id=test-div的主div下的最后一个子节点，而haskell的p标签也是其父标签下的最后一个子节点，因此这里通过获取id=test-div的div，然后通过两个lastElementDiv来获取到该标签
```

```js
// 测试代码
if (!js  js.innerText !== 'JavaScript') {
    alert('选择JavaScript失败!');
} else if (!arr  arr.length !== 3  !arr\[0\]  !arr\[1\]  !arr\[2\]  arr\[0\].innerText !== 'Python'  arr\[1\].innerText !== 'Ruby'  arr\[2\].innerText !== 'Swift') {
    console.log('选择Python,Ruby,Swift失败!');
} else if (!haskell  haskell.innerText !== 'Haskell') {
    console.log('选择Haskell失败!');
} else {
    console.log('测试通过!');
}
```



* * *

## 更新DOM

拿到一个DOM节点后，我们可以对它进行更新。

可以直接修改节点的文本，方法有两种：

一种是修改`innerHTML`属性，这个方式非常强大，不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树：

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```

用`innerHTML`时要注意，是否需要写入HTML。**如果写入的字符串是通过网络拿到了，要注意对字符编码来避免XSS攻击。**

第二种是修改`innerText`或`textContent`属性，这样可以**自动对字符串进行HTML编码**，保证无法设置任何HTML标签：

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id"><script>alert("Hi")</script></p>
```

两者的区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本。另外注意IE<9不支持`textContent`。

修改CSS也是经常需要的操作。DOM节点的`style`属性对应所有的CSS，可以直接获取或设置。因为CSS允许`font-size`这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为**驼峰式命名**`fontSize`：

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```

* * *

## 插入DOM

当我们获得了某个DOM节点，想在这个DOM节点内插入新的DOM，应该如何做？

如果这个DOM节点是空的，例如，`<div></div>`，那么，直接使用`innerHTML = '<span>child</span>'`就可以修改DOM节点的内容，相当于“插入”了新的DOM节点。

**innerHTML 【_HTML_】是大写！**

如果这个DOM节点不是空的，那就不能这么做，因为`innerHTML`会直接替换掉原来的所有子节点。

有两个办法可以插入新的节点。一个是使用`appendChild`，把一个子节点**添加到父节点的最后一个子节点**。例如：

```html
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```


把`<p id="js">JavaScript</p>`添加到`<div id="list">`的最后一项：

```js
let js = document.getElementById('js');
let list = document.getElementById('list');
list.appendChild(js);
```

现在，HTML结构变成了这样：

```html
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>
```


因为我们插入的`js`节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。

更多的时候我们会从零创建一个新的节点，然后插入到指定位置：

```js
let list = document.getElementById('list');
// 创建一个 p 标签
let haskell = document.createElement('p');
// 设定 id 属性
haskell.id = 'haskell';
// 编辑 p 标签内部文字
haskell.innerText = 'Haskell';
// 通过 appendChild 插入到 list 的尾部
list.appendChild(haskell);
```

这样我们就动态添加了一个新的节点：

```html
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>
```


动态创建一个节点然后添加到DOM树中，可以实现很多功能。举个例子，下面的代码动态创建了一个`<style>`节点，然后把它添加到`<head>`节点的末尾，这样就动态地给文档添加了新的CSS定义：

```js
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);
```

可以在Chrome的控制台执行上述代码，观察页面样式的变化。

### insertBefore

如果我们要把子节点**插入到指定的位置**怎么办？可以使用`parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到`referenceElement`之前。

还是以上面的HTML为例，假定我们要把`Haskell`插入到`Python`之前：

```html
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```


可以这么写：

```js
let list = document.getElementById('list');
let ref = document.getElementById('python');
let haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
// 在 list 里面，在 ref 之前插入 haskell 节点
list.insertBefore(haskell, ref);
```

新的HTML结构如下：

```html
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```


可见，使用`insertBefore`重点是要**拿到一个“参考子节点”的引用**。很多时候，需要循环一个父节点的所有子节点，可以通过迭代`children`属性实现：

```js
var
    i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children\[i\]; // 拿到第i个子节点
}
```



* * *

## 删除DOM

删除一个DOM节点就比插入要容易得多。

要删除一个节点，首先要获得该**节点本身**以及**它的父节点**，然后，调用父节点的`removeChild`把自己删掉：

```js
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```

注意到删除后的节点虽然不在文档树中了，但其实它**还在内存中**，可以随时再次被添加到别的位置。

当你遍历一个父节点的子节点并进行删除操作时，要注意，`children`属性是一个只读属性，并且**它在子节点变化时会实时更新**。

例如，对于如下HTML结构：

```html
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>
```


当我们用如下代码删除子节点时：

```js
var parent = document.getElementById('parent');
parent.removeChild(parent.children\[0\]);
parent.removeChild(parent.children\[1\]); // <-- 浏览器报错
```

浏览器报错：`parent.children[1]`不是一个有效的节点。原因就在于，当`<p>First</p>`节点被删除后，`parent.children`的节点数量已经从2变为了1，索引`[1]`已经不存在了。

因此，删除多个节点时，要注意`children`属性**时刻都在变化**。