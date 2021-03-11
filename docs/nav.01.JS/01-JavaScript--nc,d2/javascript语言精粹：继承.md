# JavaScript语言精粹：继承

两种实现方式：

*   伪类
*   函数化

## 伪类

通过定义一个构造器，并扩充它的原型实现继承效果。

```js
var Manmmal = function (name) {
	this.name = name;
}

Manmmal.prototype.get\_name = function() {
	return this.name;
}

Manmmal.prototype.says = function() {
	return this.saying  '';
}

// 现在我们可以构造一个实例

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get\_name();  // 'Herb the Mammal'
```

我们现在可以通过构造另一个伪类来继承Mammal，这是通过定义另一个伪类的constructor函数并替换它的prototype为另一个Mammal的实例来实现的：

```js
var Cat = function(name) {
	this.name = name;
	this.saying = 'meow';
}

// 替换 Cat.prototype 为一个新的 Mammal 实例
Cat.prototype = new Mammal();

// 扩充新原型对象，增加方法

Cat.prototype.purr = function(n) {
	// ...
}

Cat.prototype.get\_name = function() {
	// return ...
}

var myCat = new Cat('Hello');
// 继承到了 Mammal 中的 says 方法
var says = myCat.says();  // 'meow'
// 扩充了原型，定义的新 purr 方法
var purr = myCat.purr();  // '...'
// 重写了原型，定义的新的 get\_name 方法
var name = myCat.get\_name();  // '...'
```

需要注意的是，在调用构造器函数时，需要牢记在前面加上 **new** 前缀，否则 this 将不会被绑定到一个新对象上，而是会绑定到**全局对象**上！

* * *

## 函数化

1.  创建一个对象
2.  有选择地定义私有实例变量和方法
3.  给这个新对象扩充方法
4.  返回那个新对象

```js
var mammal = function(spec) {
  var that = {};
  that.get\_name = function() {
    return spec.name;
  }
  that.says = function() {
  return spec.saying  '';
}

return that;
}

var myMammal = mammal({name: 'Herb'});
```

现在 name 和 saying 属性是**完全私有**的，只能通过 get\_name 和 says 两个特权方法才可以访问到他们。

```js
var cat = function(spec) {
  spec.saying = spec.saying  'meow';
  // 以 mammal 为基类创建对象
  var that = mammal(spec);
  // 扩充对象中的方法
  that.purr = function() {
  	// ...
  }
  that.get\_name = function() {
  	// return ...
  }
}

var myCat = cat({name: 'Henrietta'});
```

现在我们通过函数化模式，在构造器 Cat 中调用了 构造器 Mammal，Cat 只需关心自身的差异，进行修改即可。

函数化模式还给我们提供了一个处理父类方法的方法：

```js
Object.method('superior', function(name) {
  var that = this;
  var method = that\[name\];
  return function() {
  	return method.apply(that, arguments);
  }
})

// 让我们在 coolcat 上实验一下

var coolcat = function(spec) {
  var that = cat(spec);
  // 先保存 cat 中的 get\_name 函数
  var super\_get\_name = that.superior('get\_name');
  // 再重新定义 get\_name 函数
  that.get\_name = function() {
    // ...
  }
  return that;
}

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get\_name();  // 'after modify...'
```

因为相较于伪类直接修改prototype的方法，使用函数化模式是等于加了一层构造器，然后对新的实例进行修改，**并没有修改父类的prototype**，因此可以通过一级一级往上找到对应的父类方法，并在修改之前先获取下来，则可以实现到获取父类方法的需求。

> 函数化模式有很大的灵活性，相比伪类模式不仅带来的工作更少，还让我们得到更好的封装和信息隐藏，以及访问父类方法的能力。