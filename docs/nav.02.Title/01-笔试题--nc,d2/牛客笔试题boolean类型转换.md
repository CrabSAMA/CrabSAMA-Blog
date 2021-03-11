# 牛客笔试题——boolean类型转换

```html
<html>
	<body>

  <script type="text/javascript">
  var test=new Boolean();
    document.write(test);
    document.write("<br />");

    var test=new Boolean(0);
    document.write(test);
    document.write("<br />");

    var test=new Boolean(null);
    document.write(test);
    document.write("<br />");

    var test=new Boolean("");
    document.write(test);
    document.write("<br />");

    var test=new Boolean(NaN);
    document.write(test);
    document.write("<br />");
  </script>

	</body>
</html>
```

上述代码的输出结果为（      ）

* * *

这里涉及到数据类型转换

*   没有内容就是undefined,这个就是false
*   0就是false,1是true
*   null跟undefined一样,都是false
*   字符串里面有内容的话才是true,没有内容就是false
*   NaN是一种数值类型,已经是false了,只是为了让程序继续往下面走

其他解析: 
数值只要不是0,都是**true** 
对象object永远都是**true**