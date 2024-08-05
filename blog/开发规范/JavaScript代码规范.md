---
title: JavaScript 代码规范
date: 2021-11-03 17:58:40
category:
  - 开发规范
tag:
  - 开发规范
  - 前端工程化
---

_一种写 JavaScript 更合理的代码风格。_

## 命名规范

- 避免单字母的名字。用你的命名来描述功能。 eslint: [`id-length`](https://eslint.org/docs/rules/id-length)

  ```javascript
  // bad
  function q() {
    // ...
  }

  // good
  function query() {
    // ...
  }
  ```

- 在命名对象、函数和实例时使用驼峰命名法（camelCase）。 eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html)

  ```javascript
  // bad
  const OBJEcttsssss = {}
  const this_is_my_object = {}
  function c() {}

  // good
  const thisIsMyObject = {}
  function thisIsMyFunction() {}
  ```

- 缩略词和缩写都必须是全部大写或者全部小写。

  > 为什么？因为名字是为了可读性，不是为了满足计算机算法。

  ```javascript
  // bad
  import SmsContainer from './containers/SmsContainer'

  // bad
  const HttpRequests = [
    // ...
  ]

  // good
  import SMSContainer from './containers/SMSContainer'

  // good
  const HTTPRequests = [
    // ...
  ]

  // also good
  const httpRequests = [
    // ...
  ]

  // best
  import TextMessageContainer from './containers/TextMessageContainer'

  // best
  const requests = [
    // ...
  ]
  ```

## 引用与变量

- 使用 `let` 定义变量，`const` 定义常量

  ```javascript
  // bad
  var a = 1
  var b = 2

  // good
  let a = 1
  const b = 2
  ```

- 注意，`let` 和 `const` 都是块级范围的

  ```js
  // const 和 let 只存在于他们定义的块中。
  {
    let a = 1
    const b = 1
  }
  console.log(a) // ReferenceError
  console.log(b) // ReferenceError
  ```

  - 把 `const` 声明的放在一起，把 `let` 声明的放在一起。.

    > 为什么? 这在后边如果需要根据前边的赋值变量指定一个变量时很有用。

    ```javascript
    // bad
    let i,
      len,
      dragonball,
      items = getItems(),
      goSportsTeam = true

    // bad
    let i
    const items = getItems()
    let dragonball
    const goSportsTeam = true
    let len

    // good
    const goSportsTeam = true
    const items = getItems()
    let dragonball
    let i
    let length
    ```

  <a name="variables--define-where-used"></a><a name="13.4"></a>

## 对象

- 使用字面语法来创建对象。（eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)）

  ```javascript
  // bad
  const item = new Object()

  // good
  const item = {}
  ```

- 在对象里定义方法，可以使用对象方法的缩写。eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

  ```javascript
  // bad
  const atom = {
    value: 1,

    addValue: function (value) {
      return atom.value + value
    },
  }

  // good
  const atom = {
    value: 1,

    addValue(value) {
      return atom.value + value
    },
  }
  ```

- 使用属性值的缩写。 eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

  > 为什么? 因为它的写法和描述较短。

  ```javascript
  const lukeSkywalker = 'Luke Skywalker'

  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  }

  // good
  const obj = {
    lukeSkywalker,
  }
  ```

- 在对象声明的时候将简写的属性进行分组。

  > 为什么? 因为这样更容易的判断哪些属性使用的简写。

  ```javascript
  const anakinSkywalker = 'Anakin Skywalker'
  const lukeSkywalker = 'Luke Skywalker'

  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  }

  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  }
  ```

- 更喜欢对象扩展操作符，而不是用 [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 浅拷贝一个对象。 使用对象的 rest 操作符来获得一个具有某些属性的新对象。

  ```javascript
  // very bad
  const original = { a: 1, b: 2 }
  const copy = Object.assign(original, { c: 3 }) // 变异的 `original` ಠ_ಠ
  delete copy.a // 这....

  // bad
  const original = { a: 1, b: 2 }
  const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

  // good
  const original = { a: 1, b: 2 }
  const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

  const { a, ...noA } = copy // noA => { b: 2, c: 3 }
  ```

## 数组

- 使用字面语法创建数组。 eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

  ```javascript
  // bad
  const items = new Array()

  // good
  const items = []
  ```

- 使用 [Array.push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 取代直接赋值来给数组添加项。

  ```javascript
  const someStack = []

  // bad
  someStack[someStack.length] = 'abracadabra'

  // good
  someStack.push('abracadabra')
  ```

- 使用数组展开方法 `...` 来拷贝数组。

  ```javascript
  // bad
  const len = items.length
  const itemsCopy = []
  let i

  for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i]
  }

  // good
  const itemsCopy = [...items]
  ```

- 如果数组有多行，则在开始的时候换行，然后在结束的时候换行。

  ```javascript
  // bad
  const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
  ]

  const objectInArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  const numberInArray = [1, 2]

  // good
  const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
  ]

  const objectInArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]

  const numberInArray = [1, 2]
  ```

## 解构

- 在访问和使用对象的多个属性的时候使用**对象解构**。 eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

  > 为什么? 因为解构可以避免为这些属性创建临时引用。

  ```javascript
  // bad
  function getFullName(user) {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
  }

  // good
  function getFullName(user) {
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
  }

  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }
  ```

- 使用**数组解构**。 eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

  ```javascript
  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr
  ```

- 对于多个返回值使用**对象解构**，而不是数组解构。

  > 为什么? 因为你可以随时添加新的属性或者改变属性的顺序，而不用修改调用方。

  ```javascript
  // bad
  function processInput(input) {
    // 处理代码...
    return [left, right, top, bottom]
  }

  // 调用者需要考虑返回数据的顺序。
  const [left, __, top] = processInput(input)

  // good
  function processInput(input) {
    // 处理代码...
    return { left, right, top, bottom }
  }

  // 调用者只选择他们需要的数据。
  const { left, top } = processInput(input)
  ```

## 字符串

- 使用单引号 `''` 定义字符串。 eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

  ```javascript
  // bad
  const name = 'Capt. Janeway'

  // bad - 模板文字应该包含插值或换行。
  const name = `Capt. Janeway`

  // good
  const name = 'Capt. Janeway'
  ```

- 当以编程模式构建字符串时，使用字符串模板代替字符串拼接。 eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

  > 为什么? 字符串模板为您提供了一种可读的、简洁的语法，具有正确的换行和字符串插值特性。

  ```javascript
  // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?'
  }

  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join()
  }

  // bad
  function sayHi(name) {
    return `How are you, ${name}?`
  }

  // good
  function sayHi(name) {
    return `How are you, ${name}?`
  }
  ```

## 函数

- 总是把默认参数放在最后。

  ```javascript
  // bad
  function handleThings(opts = {}, name) {
    // ...
  }

  // good
  function handleThings(name, opts = {}) {
    // ...
  }
  ```

- 函数签名中的间距。 eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

  > 为什么? 一致性很好，在删除或添加名称时不需要添加或删除空格。

  ```javascript
  // bad
  const f = function () {}
  const g = function () {}
  const h = function () {}

  // good
  const x = function () {}
  const y = function a() {}
  ```

## 箭头函数

- 当你必须使用**匿名函数**时 (当传递内联函数时)， 使用箭头函数。 eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

  > 为什么? 它创建了一个在 `this` 上下文中执行的函数版本，它通常是你想要的，并且是一个更简洁的语法。

  > 为什么不? 如果你有一个相当复杂的函数，你可以把这个逻辑转移到它自己的命名函数表达式中。

  ```javascript
  // bad
  ;[1, 2, 3].map(function (x) {
    const y = x + 1
    return x * y
  })

  // good
  ;[1, 2, 3].map((x) => {
    const y = x + 1
    return x * y
  })
  ```

- 如果函数体包含一个单独的语句，返回一个没有副作用的 [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) ， 省略括号并使用隐式返回。否则，保留括号并使用 `return` 语句。 eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

  > 为什么? 语法糖。 多个函数被链接在一起时，提高可读性。

  ```javascript
  // bad
  ;[1, 2, 3].map((number) => {
    const nextNumber = number + 1
    ;`A string containing the ${nextNumber}.`
  })

  // good
  ;[1, 2, 3].map((number) => `A string containing the ${number}.`)

  // good
  ;[1, 2, 3].map((number) => {
    const nextNumber = number + 1
    return `A string containing the ${nextNumber}.`
  })

  // good
  ;[1, 2, 3].map((number, index) => ({
    [index]: number,
  }))

  // 没有副作用的隐式返回
  function foo(callback) {
    const val = callback()
    if (val === true) {
      // 如果回调返回 true 执行
    }
  }

  let bool = false

  // bad
  foo(() => (bool = true))

  // good
  foo(() => {
    bool = true
  })
  ```

- 如果你的函数接收**一个参数**，则可以**省略括号**。 否则，为了保证清晰和一致性，需要在参数周围加上括号。 注意：总是使用括号是可以接受的，在这种情况下，我们使用 [“always” option](https://eslint.org/docs/rules/arrow-parens#always) 来配置 eslint. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html)

  > 为什么? 减少视觉上的混乱。

  ```javascript
  // bad
  ;[1, 2, 3].map((x) => x * x)

  // good
  ;[1, 2, 3].map((x) => x * x)

  // good
  ;[1, 2, 3].map(
    (number) =>
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
  )

  // bad
  ;[1, 2, 3].map((x) => {
    const y = x + 1
    return x * y
  })

  // good
  ;[1, 2, 3].map((x) => {
    const y = x + 1
    return x * y
  })
  ```

## 模块（ES Module）

- 你可能经常使用模块 (`import`/`export`) 在一些**非标准模块的系统**上。 你也可以在你喜欢的模块系统上相互转换。

  > 为什么? 模块是未来的趋势，让我们拥抱未来。

  ```javascript
  // bad
  const AirbnbStyleGuide = require('./AirbnbStyleGuide');
  module.exports = AirbnbStyleGuide.es6;

  // ok
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  export default AirbnbStyleGuide.es6;

  // best
  import { es6 } from './AirbnbStyleGuide';
  export default es6;
  ```

- 不要导出可变的引用。eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

  > 为什么? 在一般情况下，应该避免发生突变，但是在导出可变引用时及其容易发生突变。虽然在某些特殊情况下，可能需要这样，但是一般情况下只需要导出常量引用。

  ```javascript
  // bad
  let foo = 3
  export { foo }

  // good
  const foo = 3
  export { foo }
  ```

- 在**单个**导出的模块中，选择默认模块而不是指定的导出。eslint: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

  > 为什么? 为了鼓励更多的文件只导出一件东西，这样可读性和可维护性更好。

  ```javascript
  // bad
  export function foo() {}

  // good
  export default function foo() {}
  ```

- 将所有的 `import`s 语句放在所有非导入语句的**上边**。eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

  > 为什么? 由于所有的 `import`s 都被提前，保持他们在顶部是为了防止意外发生。

  ```javascript
  // bad
  import foo from 'foo'
  foo.init()

  import bar from 'bar'

  // good
  import foo from 'foo'
  import bar from 'bar'

  foo.init()
  ```

- 多行导入应该像多行数组和对象一样缩进。

  > 为什么? 花括号和其他规范一样，遵循相同的缩进规则，后边的都好一样。

  ```javascript
  // bad
  import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path'

  // good
  import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path'
  ```

## 属性

- 访问属性时使用点符号。 eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

  ```javascript
  const luke = {
    jedi: true,
    age: 28,
  }

  // bad
  const isJedi = luke['jedi']

  // good
  const isJedi = luke.jedi
  ```

- 使用变量访问属性时，使用 `[]`表示法。

  ```javascript
  const luke = {
    jedi: true,
    age: 28,
  }

  function getProp(prop) {
    return luke[prop]
  }

  const isJedi = getProp('jedi')
  ```

## 比较运算符和等号

- 使用 `===` 和 `!==` 而不是 `==` 和 `!=`。 eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

- 条件语句，例如 `if` 语句使用 `ToBoolean` 的抽象方法来计算表达式的结果，并始终遵循以下简单的规则：

  - **Objects** 的取值为： **true**
  - **Undefined** 的取值为： **false**
  - **Null** 的取值为： **false**
  - **Booleans** 的取值为： **布尔值的取值**
  - **Numbers** 的取值为：如果为 **+0, -0, or NaN** 值为 **false** 否则为 **true**
  - **Strings** 的取值为: 如果是一个空字符串 `''` 值为 **false** 否则为 **true**

  ```javascript
  if ([0] && []) {
    // true
    // 一个数组（即使是空的）是一个对象，对象的取值为 true
  }
  ```

- 对于布尔值使用简写，但是对于字符串和数字进行显式比较。

  ```javascript
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
  ```

- 在 `case` 和 `default` 的子句中，如果存在声明 (例如. `let`, `const`, `function`, 和 `class`)，使用大括号来创建块 。 eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

  > 为什么? 语法声明在整个 `switch` 块中都是可见的，但是只有在赋值的时候才会被初始化，这种情况只有在 `case` 条件达到才会发生。 当多个 `case` 语句定义相同的东西是，这会导致问题问题。

  ```javascript
  // bad
  switch (foo) {
    case 1:
      let x = 1
      break
    case 2:
      const y = 2
      break
    case 3:
      function f() {
        // ...
      }
      break
    default:
      class C {}
  }

  // good
  switch (foo) {
    case 1: {
      let x = 1
      break
    }
    case 2: {
      const y = 2
      break
    }
    case 3: {
      function f() {
        // ...
      }
      break
    }
    case 4:
      bar()
      break
    default: {
      class C {}
    }
  }
  ```

- 三目表达式不应该嵌套，通常是单行表达式。 eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

  ```javascript
  // bad
  const foo = maybe1 > maybe2 ? 'bar' : value1 > value2 ? 'baz' : null

  // 分离为两个三目表达式
  const maybeNull = value1 > value2 ? 'baz' : null

  // better
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull

  // best
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull
  ```

- 避免不必要的三目表达式。 eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

  ```javascript
  // bad
  const foo = a ? a : b
  const bar = c ? true : false
  const baz = c ? false : true

  // good
  const foo = a || b
  const bar = !!c
  const baz = !c
  ```

## 控制语句

- 如果你的控制语句 (`if`, `while` 等) 太长或者超过了一行最大长度的限制，则可以将每个条件（或组）放入一个**新的行**。 **逻辑运算符**应该在**行的开始**。

  > 为什么? 要求操作符在行的开始保持对齐并遵循类似方法衔接的模式。 这提高了可读性，并且使更复杂的逻辑更容易直观的被理解。

  ```javascript
  // bad
  if (
    (foo === 123 || bar === 'abc') &&
    doesItLookGoodWhenItBecomesThatLong() &&
    isThisReallyHappening()
  ) {
    thing1()
  }

  // bad
  if (foo === 123 && bar === 'abc') {
    thing1()
  }

  // bad
  if (foo === 123 && bar === 'abc') {
    thing1()
  }

  // bad
  if (foo === 123 && bar === 'abc') {
    thing1()
  }

  // good
  if (foo === 123 && bar === 'abc') {
    thing1()
  }

  // good
  if (
    (foo === 123 || bar === 'abc') &&
    doesItLookGoodWhenItBecomesThatLong() &&
    isThisReallyHappening()
  ) {
    thing1()
  }

  // good
  if (foo === 123 && bar === 'abc') {
    thing1()
  }
  ```

- 不要使用选择操作符代替控制语句。

  ```javascript
  // bad
  !isRunning && startRunning()

  // good
  if (!isRunning) {
    startRunning()
  }
  ```

## 注释

- 使用 `/** ... */` 来进行多行注释。（IDE 中输入 `/**` 然后回车就可以自动补全代码块）

  ```javascript
  // bad
  // make() returns a new element
  // based on the passed in tag name
  //
  // @param {String} tag
  // @return {Element} element
  function make(tag) {
    // ...

    return element
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element
  }
  ```

- 使用 `//` 进行单行注释。 将单行注释放在需要注释的**行的上方**新行。 在注释之前**放一个空行**，除非它在块的第一行。

  ```javascript
  // bad
  const active = true // is current tab

  // good
  // is current tab
  const active = true

  // bad
  function getType() {
    console.log('fetching type...')
    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }

  // good
  function getType() {
    console.log('fetching type...')

    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }

  // also good
  function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }
  ```

- 用**一个空格开始**所有的注释，使它更容易阅读。 eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

  ```javascript
  // bad
  //is current tab
  const active = true

  // good
  // is current tab
  const active = true

  // bad
  /**
   *make() returns a new element
   *based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element
  }
  ```

- 使用 `FIXME` 或者 `TODO` 开始你的注释可以帮助其他开发人员快速了解，如果你提出了一个需要重新审视的问题，或者你对需要实现的问题提出的解决方案。 这些不同于其他评论，因为他们是可操作的。 这些行为是 `FIXME: -- 需要解决这个问题` 或者 `TODO: -- 需要被实现`。（在 IDE 中可以快速定位到具体位置，方便记录与定位问题）

- 使用 `// FIXME:` 注释一个问题。

  ```javascript
  class Calculator extends Abacus {
    constructor() {
      super()

      // FIXME: 这里不应该使用全局变量
      total = 0
    }
  }
  ```

- 使用 `// TODO:` 注释解决问题的方法。

  ```javascript
  class Calculator extends Abacus {
    constructor() {
      super()

      // TODO: total 应该由一个 param 的选项配置
      this.total = 0
    }
  }
  ```

## 空白

- 使用 tabs (空格字符) 设置为 2 个空格。 eslint: [`indent`](https://eslint.org/docs/rules/indent.html)

  ```javascript
  // bad
  function foo() {
  ∙∙∙∙let name;
  }

  // bad
  function bar() {
  ∙let name;
  }

  // good
  function baz() {
  ∙∙let name;
  }
  ```

- 在主体前放置一个空格。 eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html)

  ```javascript
  // bad
  function test() {
    console.log('test')
  }

  // good
  function test() {
    console.log('test')
  }

  // bad
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  })

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  })
  ```

- 在控制语句（`if`, `while` 等）开始括号之前放置一个空格。 在**函数调用和声明**中，在参数列表和函数名之间**没有空格**。 eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html)

  ```javascript
  // bad
  if (isJedi) {
    fight()
  }

  // good
  if (isJedi) {
    fight()
  }

  // bad
  function fight() {
    console.log('Swooosh!')
  }

  // good
  function fight() {
    console.log('Swooosh!')
  }
  ```

- 用空格分隔操作符。 eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)

  ```javascript
  // bad
  const x = y + 5

  // good
  const x = y + 5
  ```

- 不要在块的开头使用空白行。 eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html)

  ```javascript
  // bad
  function bar() {
    console.log(foo)
  }

  // bad
  if (baz) {
    console.log(qux)
  } else {
    console.log(foo)
  }

  // bad
  class Foo {
    constructor(bar) {
      this.bar = bar
    }
  }

  // good
  function bar() {
    console.log(foo)
  }

  // good
  if (baz) {
    console.log(qux)
  } else {
    console.log(foo)
  }
  ```

- 不要在括号内添加空格。 eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html)

  ```javascript
  // bad
  function bar(foo) {
    return foo
  }

  // good
  function bar(foo) {
    return foo
  }

  // bad
  if (foo) {
    console.log(foo)
  }

  // good
  if (foo) {
    console.log(foo)
  }
  ```

- 不要在中括号中添加空格。 eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html)

  ```javascript
  // bad
  const foo = [1, 2, 3]
  console.log(foo[0])

  // good
  const foo = [1, 2, 3]
  console.log(foo[0])
  ```

- 在花括号内添加空格。 eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html)

  ```javascript
  // bad
  const foo = { clark: 'kent' }

  // good
  const foo = { clark: 'kent' }
  ```

- 逗号之前避免使用空格，逗号之后需要使用空格。eslint: [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

  ```javascript
  // bad
  var foo = 1,
    bar = 2
  var arr = [1, 2]

  // good
  var foo = 1,
    bar = 2
  var arr = [1, 2]
  ```

## 分号

- 应该在语句后添加分号。eslint: [`semi`](https://eslint.org/docs/rules/semi.html)

  > 为什么? 当 JavaScript 遇见一个没有分号的换行符时，它会使用一个叫做 [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) 的规则来确定是否应该以换行符视为语句的结束，并且如果认为如此，会在代码中断前插入一个分号到代码中。 但是，ASI 包含了一些奇怪的行为，如果 JavaScript 错误的解释了你的换行符，你的代码将会中断。 随着新特性成为 JavaScript 的一部分，这些规则将变得更加复杂。 明确地终止你的语句，并配置你的 linter 以捕获缺少的分号将有助于防止你遇到的问题。

  ```javascript
  // bad - 可能异常
  const luke = {}
  const leia = {}[(luke, leia)].forEach((jedi) => (jedi.father = 'vader'))

  // bad - 可能异常
  const reaction = "No! That's impossible!"(
    (async function meanwhileOnTheFalcon() {
      // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
      // ...
    })()
  )

  // bad - 返回 `undefined` 而不是下一行的值 - 当 `return` 单独一行的时候 ASI 总是会发生
  function foo() {
    return
    ;('search your feelings, you know it to be foo')
  }

  // good
  const luke = {}
  const leia = {}
  ;[luke, leia].forEach((jedi) => {
    jedi.father = 'vader'
  })

  // good
  const reaction = "No! That's impossible!"
  ;(async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  })()

  // good
  function foo() {
    return 'search your feelings, you know it to be foo'
  }
  ```
