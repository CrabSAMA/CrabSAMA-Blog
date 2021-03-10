## 浏览器对象BOM

#### window——不但充当全局作用域，而且表示浏览器窗口

innerWidth/innerHeight  
获取浏览器窗口内部宽高。  
内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于**显示网页**的净宽高。

outerWidth/outerHeight  
获取浏览器窗口的整个宽高。

* * *

#### navigator——表示浏览器的信息

常见属性：

*   navigator.appName：浏览器名称；
*   navigator.appVersion：浏览器版本；
*   navigator.language：浏览器设置的语言；
*   navigator.platform：操作系统类型；
*   navigator.userAgent：浏览器设定的`User-Agent`字符串。

_请注意_，`navigator`的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。

* * *

#### screen——表示屏幕的信息

常见属性：

*   screen.width：屏幕宽度，以像素为单位；
*   screen.height：屏幕高度，以像素为单位；
*   screen.colorDepth：返回颜色位数，如8、16、24。

* * *

#### location——表示当前页面的URL信息

http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用`location.href`获取。  
其余属性可以通过以下方式获取：

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2' ?后的部分（包括?） 查询字符串
location.hash; // 'TOP' #后的部门 锚点

* * *

#### document——表示当前页面

由于HTML在浏览器中以DOM形式表示为树形结构，`document`对象就是整个DOM树的根节点。要查找DOM树的某个节点，需要从`document`对象开始查找。最常用的查找是根据ID和Tag Name。

<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>

getElementById()——通过标签ID获取DOM  
getElementsByTagName()——通过标签名获取DOM  
getElementsByClassName()——通过标签Class获取DOM

document对象还有一个cookie属性

JavaScript可以通过`document.cookie`读取到当前页面的Cookie：（以键值对name=value格式存储 ;作为分隔）

document.cookie; // 'v=123; remember=true; prefer=zh'

服务器在设置Cookie时可以使用`httpOnly`，设定了`httpOnly`的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持`httpOnly`选项，IE从IE6 SP1开始支持。

为了确保安全，服务器端在设置Cookie时，应该始终坚持使用`httpOnly`。