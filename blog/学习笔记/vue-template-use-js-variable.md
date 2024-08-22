---
title: Vue 模版使用常量的渲染问题
date: 2024-08-22 15:53:11 +08:00
category:
  - 学习笔记
tag:
  - Vue
---

# Vue 模版使用常量的渲染问题

## Setup 语法

[playground](https://play.vuejs.org/#eNp9Uk1v00AQ/SvDXpoqVawITpUTAaUHkKAIetyL66wdN+v1aj9CkOUjXBESQkjc4QZIcOL3tFH7Lzqzq6RJVeXmnffezJvnadkTrQdzL9ghS52otcycGHMFkJ555xoFj3NZ5bMRZ/k0U6U4FQvH2ThvlHXQH6ZJpO2SIN2IAryeYO/dgrPM5dOjlSq87tVNqjnMxHtUDJHXtuDQFnRdmiCyphBQyKzcArhKk41F8WlzU2kHVjivQeJsbOss9uWqqnVjHLRAC3RQmKaGPUxrj6uYQGg/IrhXZNKKfa6kcNHOCIbUPxJjFFjr7cNoDC1ZIfFgnklP9Qe3L666u0KKfVtMI/r9LepGetvc2KOH5lbf1I/eQZ0kcPnh7/WXX8tvv69+/rj89Pni/0d4dvISlt//Lb/+ochiSGN2gNHgtKIqB+e2UXg2YQL+66bWlRTmRLsK3XB2GGcTlknZvHsRas54cbCq51ORz+6pn9sF1Th7bYQVZo7HsMZcZkqBJ0jw8dtX4RzXYN1MvET2DvCNsI305DHSnno1QdsbvOD2efjzlSpP7fHCCWVXS5FRYnaBzxlew9GO1W/tPhw8CjoMnXU3Ql0yGA==)

```vue
<template>
  <button @click="changeText">const +1</button>
  <button @click="change">ref update</button>
  <button @click="batchChange">batch update</button>
  <div key="1">{{ text }}</div>
  <div>{{ flag }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const flag = ref(false)
let text = 1

const change = () => {
  flag.value = !flag.value
}

const changeText = () => {
  text++
}

const batchChange = () => {
  change()
  changeText()
}
</script>
```

- `flag` 和 `text` 都能在模版上渲染出来
- 执行 `changeText` 方法，`text` 的值会更新，但不渲染
- 执行 `change` 方法，`flag` 的值会更新并渲染
- 先执行 `changeText` 方法，再执行 `change` 方法，`flag` 和 `text` 的值都会更新并渲染
- 执行 `batchChange` 方法，`flag` 和 `text` 的值都会更新并渲染

### 分析

```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "flag": "setup-ref",
  "text": "setup-let",
  "change": "setup-const",
  "changeText": "setup-const",
  "batchChange": "setup-const"
} */
import { defineComponent as _defineComponent } from 'vue'
import { ref } from 'vue'

const __sfc__ = /*#__PURE__*/ _defineComponent({
  __name: 'App',
  setup(__props, { expose: __expose }) {
    __expose()

    const flag = ref(false)
    let text = 1

    const change = () => {
      flag.value = !flag.value
    }

    const changeText = () => {
      text++
    }

    const batchChange = () => {
      change()
      changeText()
    }

    const __returned__ = {
      flag,
      get text() {
        return text
      },
      set text(v) {
        text = v
      },
      change,
      changeText,
      batchChange,
    }
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true,
    })
    return __returned__
  },
})
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from 'vue'

const _hoisted_1 = { key: '1' }
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createElementVNode(
          'button',
          { onClick: $setup.changeText },
          'const +1'
        ),
        _createElementVNode('button', { onClick: $setup.change }, 'ref update'),
        _createElementVNode(
          'button',
          { onClick: $setup.batchChange },
          'batch update'
        ),
        _createElementVNode(
          'div',
          _hoisted_1,
          _toDisplayString($setup.text),
          1 /* TEXT */
        ),
        _createElementVNode(
          'div',
          null,
          _toDisplayString($setup.flag),
          1 /* TEXT */
        ),
      ],
      64 /* STABLE_FRAGMENT */
    )
  )
}
__sfc__.render = render
__sfc__.__file = 'src/App.vue'
export default __sfc__
```

查看 Vue SFC 编译后的代码，可以看到 `text` 和 `flag` 用于渲染显示的值是从 `$setup` 这个对象上面取的，因此我们可以推断，在使用 setup 语法糖的时候，所有在 setup script 块里面的变量都会被导出并绑定在 `$setup` 这个对象上。同时我们还看到我们定义的 js 变量被进行了处理，使用 get / set 修饰符进行了包裹。

直接更新 ref 时值和模版都能被正常渲染，这个是毋庸置疑的，我们需要去思考的是 js 变量的现象。可以看到，在单独更新 js 变量时，值能被更新但不会渲染，而当再次触发 ref 更新的时候，会顺带将 js 变量当前的值渲染出来，证明了值是有在正常更新的，只不过由于是普通的变量，因此它的变更不会被响应式收集副作用，但在 Vue 重新渲染的时候，就会正常地被渲染出来。

## Option API + setup 写法

[playground](https://play.vuejs.org/#eNp9U01v2zAM/SucLk2RIEGwnQon2Fb0sB22YetRF9WmXTWKZOgjy2D4v4+Sasdt01xskHx8fPxQx7607fIQkN2wwuO+VcLjlmuA4iF4bzR8LpUsdxvOykehG7zHo+dsWxrtPMzXxSrDLqUQ3GINoa2I+3LCg/Dl4+2QlayzeZU8wA7/UcaacF0HnmRB3xcrioyQGKiVaF4EuC5Wk0bJdKWVrQdFVYnQO2LkWu5bYz10QNIXUGEtNd4acmrUVAlqa/ZwRYO74hqPCUsgEVT6T8GzLpZ16EM7u4ZkAOT5JXGbWGJWC+XwOgcV+tzQBtZR4SkhD5T8xLTZDmSQiJYHoUKMfThZOd6fI4mLfEsUy87nZ9Mmu3mblzlnzw0Mdqwx+Igt/izNweqXyhfT6qORKV6ZkXF0Ta/lVIM+PdUsVnmvW7agnVILtWyWT85ouvRUnc6TViQV2p+tl9QiZzeDLs6EUubv9+TzNgwy4kljuTvjf3LH6OPsl0WH9kD3O8a8sA3Sq4nhuz8/0gsag3tTBUXoC8Hf6IwKUWOGfQ26ItkTXFL7LZ2s1M29uzt61G5oKgpNk0l4zuhq43W+1/pJ7sflp2GirP8PGwtZAQ==)

```vue
<template>
  <button @click="changeText">const +1</button>
  <button @click="change">ref update</button>
  <button @click="batchChange">batch update</button>
  <div key="1">{{ text }}</div>
  <div>{{ flag }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const flag = ref(false)
    let text = 1

    const change = () => {
      flag.value = !flag.value
    }

    const changeText = () => {
      text++
    }

    const batchChange = () => {
      change()
      changeText()
    }
    return {
      flag,
      text,
      change,
      changeText,
      batchChange,
    }
  },
})
</script>
```

- `flag` 和 `text` 都能在模版上渲染出来
- 执行 `changeText` 方法，`text` 的值会更新，但不会渲染
- 执行 `change` 方法，`flag` 的值会更新并渲染
- 先执行 `changeText` 方法，再执行 `change` 方法，`text` 和 `flag` 的值都会更新，但只有 `flag` 的值渲染
- 执行 `batchChange` 方法，`text` 和 `flag` 的值都会更新，但只有 `flag` 的值渲染

### 分析

```js
/* Analyzed bindings: {} */

import { ref, defineComponent } from 'vue'
const __sfc__ = defineComponent({
  setup() {
    const flag = ref(false)
    let text = 1

    const change = () => {
      flag.value = !flag.value
    }

    const changeText = () => {
      text++
    }

    const batchChange = () => {
      change()
      changeText()
    }
    return {
      flag,
      text,
      change,
      changeText,
      batchChange,
    }
  },
})
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from 'vue'

const _hoisted_1 = { key: '1' }
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createElementVNode(
          'button',
          {
            onClick:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.changeText && _ctx.changeText(...args)),
          },
          'const +1'
        ),
        _createElementVNode(
          'button',
          {
            onClick:
              _cache[1] ||
              (_cache[1] = (...args) => _ctx.change && _ctx.change(...args)),
          },
          'ref update'
        ),
        _createElementVNode(
          'button',
          {
            onClick:
              _cache[2] ||
              (_cache[2] = (...args) =>
                _ctx.batchChange && _ctx.batchChange(...args)),
          },
          'batch update'
        ),
        _createElementVNode(
          'div',
          _hoisted_1,
          _toDisplayString(_ctx.text),
          1 /* TEXT */
        ),
        _createElementVNode(
          'div',
          null,
          _toDisplayString(_ctx.flag),
          1 /* TEXT */
        ),
      ],
      64 /* STABLE_FRAGMENT */
    )
  )
}
__sfc__.render = render
__sfc__.__file = 'src/App.vue'
export default __sfc__
```

查看 Vue SFC 编译后的代码，可以发现在使用 Option API + setup 写法的时候，针对变量展示时的取值不一样了，这个时候是从 `_ctx` 这个对象上面取的。`_ctx` 这个对象我们在研究后发现，这个就是我们使用 Option API 时常用的 `this`。当使用 Option API + setup 写法时，setup 函数中导出的变量会被绑定到 `_ctx` 下，也就是 `this` 下。

那为什么在使用这种写法的时候，值有更新，但是不会被渲染呢？第一时间我想到的是，setup 导出的值绑定到 `_ctx` 的这个过程用的是引用传参。这种传参方式在对待普通变量时，就等于直接将字面值进行赋值，而对待复杂变量（例如对象、数组等）时，是将它的地址进行赋值。要验证这个猜想也很简单，我们只需要将 `text` 这个普通变量改为对象，然后尝试更改它里面的属性看看是否符合预期即可。

测试代码如下：

```vue
<template>
  <button @click="changeText">const +1</button>
  <button @click="change">ref update</button>
  <button @click="batchChange">batch update</button>
  <div key="1">{{ obj.text }}</div>
  <div>{{ flag }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const flag = ref(false)
    let text = 1
    let obj = { text: 1 }

    const change = () => {
      flag.value = !flag.value
    }

    const changeText = () => {
      obj.text++
    }
    return {
      flag,
      text,
      change,
      changeText,
      batchChange,
    }
  },
})
</script>
```

这段代码的执行情况正如我们所想的那样，与上面 setup 语法糖的执行效果一致：`obj.text` 的值有在更新，但不会被响应式收集，需要借助 ref 值变更时的副作用进行渲染。到这里我们基本可以定论：**setup 导出的值绑定到 `_ctx` 的这个过程用的就是引用传参**。

借助这段代码更好理解：

```vue
<template>
  <button @click="changeText">const +1</button>
  <button @click="change">ref update</button>
  <button @click="batchChange">batch update</button>
  <button @click="show">show</button>
  <div key="1">{{ text }}</div>
  <div>{{ flag }}</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  methods: {
    show() {
      alert(this.text)
    },
  },
  setup() {
    const flag = ref(false)
    let text = 1

    const change = () => {
      flag.value = !flag.value
    }

    const changeText = () => {
      text++
      alert(text)
    }

    const batchChange = () => {
      change()
      changeText()
    }
    return {
      flag,
      text,
      change,
      changeText,
      batchChange,
    }
  },
})
</script>
```

可以发现，`changeText` 这里面的 `text` 确实有在变更，但其实这个 `text` 和绑定到 `_ctx` 上面的 `text` 已经不是一个东西了，触发 `show` 方法可以看到 `this.text` 一直没有变更。我们执行 `changeText` 的时候是通过闭包的特性引用了在 setup 函数中定义的 `text` 变量，修改的是这个闭包变量值。

### 为什么 setup 语法糖下变量能被正常更新？

在使用 setup 语法糖时，编译器会对常量进行包裹，同时生成一个新的闭包 `$setup`。因此在执行代码的过程中，变更的一直是 `$setup` 里面的值，同时模版中也是直接取 `$setup` 中的同一个值，因此变量能正常更新。

## Option API 写法

[playground](https://play.vuejs.org/#eNp9Uj1v4zAM/Ss8LW2RIkFwNwVOcB/ocDdci7ajFtemHTWyZEhUmsLwfy8l104CtF0sk3wkH/nYiV9tO98HFCuRETatzgk30gBkT4HIGvhZaFXs1lIU29zU+IgHkmJTWOMJZstsMcC+SmG4wwpCW3Lt84RS7WGHrwxdMqrrgLg89H224MgEiYFK5/VZQJpscUKYTV841RJo7skFyXNFaVTTWkfQQYmVMvjHsm3QcBOonG3ggme/kEYjDb3XsJQGDymJU/Kg03uaetnF/jxMfnkF6R/AIQVnRgsS3RVUufY4uPr49Nfx2yBtbelXI3rY0rEWAG2Vn6eJ1/BtMt4LpRpjVpTjLJPt2ey0pTT9VdzVsJ2NuObNsHqVqufP3hrWPSWzWDyf0uhuW1KsrhQTQSlyre3Lv+QjF/CdQhQYi90H/md/iD4p7hx6dHu+gSlGuauRbyiGbx7+p3uago0tg2b0F8F79FaHyHGA/Q6mZNonuMT2bxJemfrR3xwIjR+HikSPYkjBBxCl/Wz0I93v8x/jRkX/BhXfDz8=)

```vue
<template>
  <button @click="changeText">const +1</button>
  <button @click="change">ref update</button>
  <button @click="batchChange">batch update</button>
  <div key="1">{{ text }}</div>
  <div>{{ flag }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
let text = 1
export default defineComponent({
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    change() {
      this.flag = !this.flag
    },
    changeText() {
      text++
    },
    batchChange() {
      this.change()
      this.changeText()
    },
  },
})
</script>
```

- `flag` 能在模版上渲染出来，`text` 无法在模版上渲染出来
- 执行 `change` 方法，`flag` 的值会更新
- 执行 `batchChange` 方法，`flag` 和 `text` 的值都会更新

### 分析

最后一种情况，单纯使用 Option API 的写法，其实在编译过程中编译器已经会提示我们：

> Property "text" was accessed during render but is not defined on instance.
> at \<Repl\>

在看完上面的分析后，我们很容易就知道是什么原因：`text` 这个变量并没有被绑定到 `_ctx` 下。那自然是没有办法在模版中使用。

这种写法与上面的第二种情况类似，此处就不做过多赘述。

## 总结

在对 Vue 模版中使用常量的渲染问题进行分析后，我们发现 setup 语法糖并不是简单的语法变化，它里面还存在一些隐藏的逻辑，比如上面提到的对常量的包裹。同时我们也会发现，使用 setup 语法糖时的一些行为是和使用 setup 函数不一样的。因此我们在后续的使用过程中，要尽量避免踩到这两者差异导致的坑。

同时我们需要了解的是，在 Vue 模版中使用 js 常量并不是好的习惯，我们需要在模版中实现响应式更新的效果，就需要将对应的值处理成 ref，这个才是避免问题出现的根本解决方案。但有些时候我们会有这种需求，那此时我们就需要结合这篇文章里面提到的知识点，尽量避免踩坑。
