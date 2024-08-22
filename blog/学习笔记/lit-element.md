---
title: Lit Element
date: 2024-08-22 16:36:58 +08:00
category:
  - 学习笔记
tag:
  - Lit
---

# Lit Element

## Vue 中使用 Web Componment 传参

> [在 Vue 中使用自定义元素](https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)

针对基础非响应变量，一般可以直接通过 v-bind 方式传入；但如果是复杂数据类型或者响应变量，直接传入会导致响应式更新失效、数据传入失败等问题。建议始终使用 `.prop` 修饰符来进行传参，保证数据可以正确传入到组件中。

```vue
<my-element :user.prop="{ name: 'jack' }"></my-element>

<!-- 等价简写 -->
<my-element .user="{ name: 'jack' }"></my-element>
```

## @property 和 @state 的区别

`@property` 用于标识这个属性是支持外部传入的，使用 `@property` 修饰的变量在接受到传参时会进行处理，因此需要在 `@property` 修饰器中定义正确的数据类型。同时在 `lit` 中使用时，`@property` 修饰的变量需要使用 `.foo = ${this.foo}` 的方式传入。

`@state` 定义的同样是响应式变量，即变更时会自动触发 DOM 更新的变量，但 `@state` 修饰符修饰的变量是一个类中的内部变量，可以类比 Vue 中的 data 数据。

两个修饰符修饰的变量都是响应式变量。

## watch 变量变更

重写类下的 `updated` 方法，`updated` 方法的第一个参数是一个 map，记录着变更的值，key 为变更的变量名，value 为变更前的值，因此如果要实现类似 Vue 中的 watch 功能，可以这样写：

```javascript
protected override updated(
  _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
): void {
  if (_changedProperties.has('data')) {
    // 旧数据
    const oldData = _changedProperties.get('data')
    // 变更后的数据
    const newData = this.data
  }
}
```

## 生命周期

> 面向 React 开发者的 Lit
>
> [状态与生命周期](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?hl=zh-cn#5)

| Lit                    | Vue                 | React                  | 描述                                                                                    |
| ---------------------- | ------------------- | ---------------------- | --------------------------------------------------------------------------------------- |
| `constructor`          | `setup` / `created` | `constructor`          | 类组件中 `constructor` 是最初调用的方法，如果是 functional component 中，则就是 `setup` |
| `firstUpdated`         | `beforeMount`       | `componentDidMount`    | 首次将组件的模板渲染到组件的根节点中时调用                                              |
| `connectedCallback`    | `mounted`           | `componentDidMount`    | 每当将元素插入 DOM 树中时调用                                                           |
| `updated`              | `updated`           | `componentDidUpdate`   | 数据更新时调用                                                                          |
| `disconnectedCallback` | `unmounted`         | `componentWillUnmount` | 与 `componentWillUnmount` 不同，`disconnectedCallback` 在元素从树中移除**之后**调用     |

## lit 中使用 unocss

`unocss`是一个原子类框架。在 lit 中使用时，由于 `web component` 的 `shadow dom` 将样式都隔离开了，因此在需要生成样式的地方要配置一个占位符，`unocss` 引擎才知道需要将 css 生成在何处。比如我们可以这样写：

```typescript
class MyElement extends LitElement {
  render() {
    return html`
      <style>
        @unocss-placeholed;
      </style>
    `
  }

  static styles = css`
    @unocss-placeholed;
  `
}
```

这两种写法都是可以被识别的，在实际使用中按需使用即可。

## Ref 引用

在开发时我们会有获取到 DOM 元素对象的需求，在 lit 中可以使用 `@query` 修饰器来获取。

```typescript
@query('#seamless-scroll-wrap')
wrapRef!: HTMLElement

// get offsetWidth
this.slotListRef.offsetWidth
```

如果想要获取 slot 下面的 DOM 元素对象，lit 也提供了 `@queryAssignedElements` 修饰器。通过这个修饰器获取回来的是一个数组，里面存着 slot 下面的所有 DOM 节点。

```typescript
@queryAssignedElements()
slotItemList!: Array<HTMLElement>

// get outerHTML and join it
this.slotItemList.map((slot) => slot.outerHTML).join('')
```

## 直接渲染 html 字符串

类似 Vue 中的 v-html，lit 提供了 `unsafeHTML` 方法来渲染 html 字符串，但与 Vue 一样的是，我们需要保证 html 字符串的安全性，防止被 XSS 攻击。

## Computed 计算属性

在 Vue 中我们经常会使用 `computed` 来实现一些数据需求，在 lit 中由于一个组件就是一个类，而 ES5 类中提供了 `get`/`set` 方法，可以实现到一个值的 getter/setter，因此直接在类中写属性值的 get 方法即可实现类似 `computed` 的效果。

```typescript
class MyElement extends LitElement {
  get canRender() {
    return (this.requiredProps = true)
  }
}
```

## 样式问题

在 web component 中，样式其实是遇到问题最多的地方，由于 shadow dom 的存在，使得样式做了隔离，它将组件的内部结构、样式和行为与页面的其他部分隔离开来。

一般来说，我们在类下的 `styles` 属性中定义的样式，只会在**当前组件**下生效，在 `render` 方法里去写一个 `style` 标签效果是一样的。如果想在组件里更改外部样式，就要用到 `:host` 和 `:root` 两个伪类选择器

- `:host` 选择器：当前自定义元素的根元素，仅在组件的 shadow dom 内部生效，不会影响到组件外部的元素
- `:root` 选择器：`:root` 选择器在整个文档中生效。在 Web Components 的上下文中，它选择到的就是 Shadow DOM 的根元素，但在组件外部，它也可以用于定位整个文档的根元素（如 `<html>` 标签）

在 Web Components 中，样式的继承关系可以分为以下几个层次：

1. 全局样式：在主文档中定义的全局样式，例如使用`<style>`标签或外部样式表。这些样式会应用到整个页面，但不会直接影响到 Web Components 的 Shadow DOM 内部。
2. 组件样式：在组件的 Shadow DOM 中定义的样式。这些样式只会应用到组件内部，不会影响到页面的其他部分。组件样式可以通过`<style>`标签或外部样式表来定义。
3. 继承样式：在 Web Components 中，某些 CSS 属性是可以继承的，例如字体、颜色等。这意味着，如果在主文档中为一个元素设置了这些属性，它们会被组件内部的相应元素继承。但是，其他非继承属性（如边距、背景等）不会被组件内部的元素继承。
4. CSS 自定义属性（CSS Variables）：CSS 自定义属性是一种可以跨越 Shadow DOM 边界的样式。通过在主文档中定义自定义属性，然后在组件内部使用这些属性，可以实现对组件样式的定制。例如，可以在主文档中定义一个自定义颜色属性，然后在组件内部使用这个颜色属性来设置元素的颜色。但需要注意的是，自定义组件内无法修改主文档中的自定义属性，只能在内部定义一个属性将其内部覆盖。

## 与 omi 框架对比
