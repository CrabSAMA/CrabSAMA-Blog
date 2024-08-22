---
title: boolean类型转换
date: 2020-10-04 15:38:04 +08:00
category:
  - 学习笔记
tag:
  - JavaScript
  - 面试题
---

```html
<html>
  <body>
    <script type="text/javascript">
      var test = new Boolean()
      document.write(test)
      document.write('<br />')

      var test = new Boolean(0)
      document.write(test)
      document.write('<br />')

      var test = new Boolean(null)
      document.write(test)
      document.write('<br />')

      var test = new Boolean('')
      document.write(test)
      document.write('<br />')

      var test = new Boolean(NaN)
      document.write(test)
      document.write('<br />')
    </script>
  </body>
</html>
```

上述代码的输出结果为（      ）

---

这里涉及到数据类型转换

- 没有内容就是 undefined,这个就是 false
- 0 就是 false,1 是 true
- null 跟 undefined 一样,都是 false
- 字符串里面有内容的话才是 true,没有内容就是 false
- NaN 是一种数值类型,已经是 false 了,只是为了让程序继续往下面走

其他解析:
数值只要不是 0,都是**true**
对象 object 永远都是**true**
