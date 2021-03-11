---
title: js类型转换
sidebar: 'auto'
categories:
 - 笔试题
 - JavaScript
---
```javascript
console.log((\[\])?true:false); 
console.log((\[\]==false?true:false)); 
console.log(({}==false)?true:false) 
```



* * *

得到的结果： 
true true false

此题考察类型转换，三元运算符先**“分清是非”**，再决定今后该走哪条路，“==”运算符比较**“喜欢”**Number类型。（我就不严谨地这么一说，若要刨根问底，请看《JavaScript权威指南》）

下面是题目的类型转换结果：

```js
Boolean(\[\]); //true
Number(\[\]); //0
Number({}); // NaN
Number(false); //0
```

因此：

```js
console.log((\[\])?true:fasle);// => console.log((true)?true:false);
console.log(\[\]==false?true:false); // => console.log(0==0?true:false);
console.log(({}==false)?true:false); // => console.log((NaN==0)?true:false);
```



## 《JavaScript权威指南》的部分相关知识点

* * *

**“==”运算符（两个操作数的类型不相同时）**

*   如果一个值是**_null_**，另一个值是**_undefined_**，则它们**相等**
*   如果一个值是**数字**，另一个值是**字符串**，先将**字符串转换为数字**，然后使用转换后的值进行比较。
*   如果其中一个值是**true**，则将其**转换为1**再进行比较。如果其中的一个值是**false**，则将其**转换为0**再进行比较。
*   如果一个值是**对象**，另一个值是**数字**或**字符串**，则将**对象转换为原始值**，再进行比较。


**对象到数字的转换**

*   如果对象具有valueOf()方法，后者返回一个原始值，则JavaScript将这个原始值转换为数字（如果需要的话）并返回一个数字。
*   否则，如果对象具有toString()方法，后者返回一个原始值，则JavaScript将其转换并返回。（对象的toString()方法返回一个字符串直接量（作者所说的原始值），JavaScript将这个字符串转换为数字类型，并返回这个数字）。
*   否则，JavaScript抛出一个类型错误异常。


**空数组转换为数字0**

*   数组继承了默认的valueOf()方法，这个方法返回一个对象而不是一个原始值，因此，数组到数字的转换则调用toString()方法。空数组转换为空字符串，空字符串转换为数字0。`（Number.valueOf(Array.toString()) => 0）`