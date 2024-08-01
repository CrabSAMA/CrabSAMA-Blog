---
title: Vue3 中 :deep() 选择器的坑
date: 2022-11-29 18:09:00 +8
category:
  - 实际项目
  - 前端开发
tag:
  - Vue
  - css
---

举个例子，我们在 `.container` 类下面有一个 `iView` 的 `poptip` 组件，按往常我们的写法，都套一层 `:deep` 比较稳妥。

但这里由于 `.ivu-poptip` 和 `.ivu-poptip-rel` 是同一个组件，组件内层并没有使用 `scoped` 作用域的 css，因此我们只需要加一层 `:deep` 到组件的第一级，后续的子类选择器就会选择到对应父类下的子类。

```vue
<!-- Vue Template -->
<div class="container">
  <Poptip transfer width="300" trigger="hover" placement="right">
    <Range class="range" />
  </Poptip>
</div>

<!-- 编译后的HTML -->
<!-- 组件最外层 使用了 scoped -->
<div data-v-3c0f0b26 class="container">
  <!-- poptip 组件 没使用 scoped -->
  <div data-v-3c0f0b26 class="ivu-poptip">
    <div class="ivu-poptip-rel">
      <!-- 另一个组件 因此多了一个 data-v-7914d71a -->
      <div data-v-7914d71a data-v-3c0f0b26 class="range">
        <!-- data-v-7914d71a 组件内层 -->
        <div data-v-7914d71a>
        </div>
      </div>
    </div>
  </div>
</div>
```

```less
// 错误
.container {
  :deep(.ivu-poptip) {
    width: 100%;
    :deep(.ivu-poptip-rel) {
      width: 100%;
    }
  }
}

// 正确
.container {
  :deep(.ivu-poptip) {
    width: 100%;
    .ivu-poptip-rel {
      width: 100%;
    }
  }
}
```
