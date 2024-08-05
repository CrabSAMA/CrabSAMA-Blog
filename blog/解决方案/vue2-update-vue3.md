---
title: Vue2 项目迁移 Vue3
date: 2022-08-04 15:52:40 +08:00
category:
  - 解决方案
tag:
  - Vue
---
## vite + vue3 + typescript

直接查看 `vite` 官方文档，通过官方提供的创建项目命令创建一个空项目：

```bash
yarn create vite my-vue-app --template vue
```

## vue-router 5

路由方面相对 `vue2` 版本没有大改动，支持了 `composition api`，在项目中通过 `createRouter` 创建路由实例并 `use`。

## vuex -> pinia

`pinia` 作为新一代状态管理工具，去除了 `mutation` 的概念，统一使用 `action` 来操作 `state`。

和 `vuex` 创建多个 `module` 然后通过 `namespace` 访问不同，`pinia` 是直接创建多个 `state` 然后在使用时按需引用。

```js
// pinia
├── store
│   ├── app.ts // 等同于 modules/app
│   ├── common.ts
│   └── user.ts

// vuex
├── store
│   ├── getters.js
│   ├── index.js
│   └── modules
│       ├── app.js
│       ├── common.js
│       └── user.js
```

拿 `common` 这个 `state` 做个例子看看：

```typescript
import { defineStore, acceptHMRUpdate } from 'pinia'
import { draft_getDraftList } from '@/api/notification'

interface CommonState {
  draftNum: number
}

export const useCommonStore = defineStore('common', {
  state: (): CommonState => ({
    draftNum: 0
  }),
  getters: {
    getDraftNum: (state) => state.draftNum
  },
  actions: {
    setDraftNum(pload) {
      this.draftNum = pload
    },
    async getDraftList(payload) {
      draft_getDraftList({
        limit: payload?.limit || 10000,
        page: payload?.page || 1,
        draft_type: ''
      }).then((res: any) => {
        if (res.ret === 0) {
          this.setDraftNum(res.total)
        }
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
```

这里面有几个点可以说一下：

- `state` 接受一个返回对象的方法，可以类比 `vue2` 推荐的 `data` 写法，保证返回的 `state` 不会出现引用改变的问题。
- `getter` 没有大改动，但由于都绑定在同一个 `this` 下面了，因此 `getter` 的命名不可以与 `state` 命名重复，同理 `action` 命名也不能重复。
- `actions` 等同于 `vuex` 中的 `mutation + action`，可以在里面写同步和异步的方法。同时现在 `actions` 的方法入参不包含 `state` 了，如果要去 `state` 下面的值或想调用另外的 `action` 可以直接通过 `this` 取到。需要注意的是，`actions` 中最好不要写箭头函数的形式，会导致 `this` 指向不正确的问题。
- 想要支持 `vite` 中的 `HMR` 的话，使用 `acceptHMRUpdate` 即可。

接下来可以看看如何在组件中使用这个 `state`：

```vue
<template>
...
</template>

<script setup lang="ts">
import { useCommonStore } from './stores/common'
  
const common = useCommonStore()
// 直接取 state
common.draftNum
// getter
common.getDraftNum()
// action
common.setDraftNum()
</script>
```

## ant-design-vue

`antd` 也没什么好说的，组件库这个事情在部门内部讨论了十分久的按需引入和全局引入，最终得出的结论是如果项目中有用到组件库中相对较大的组件，例如 `form` 和 `table` 等，那其实按不按需对实际的打包大小不会有特别大的影响，反而用按需引入对后续换 `CDN` 、 `vite` 依赖预打包和第三方包引用这些方面会有影响，算下来不如直接使用全局引入来的性价比高，因此在这版迁移中直接使用了全局引入。

全局引入在 `volar` 下想要 `typescript` 提示的话，在根目录下的 `d.ts` 文件中写一行这个即可：

```typescript
/// <reference types="ant-design-vue/typings/global" />
```

## vue-i18n

`vue-i18n` 也提供了支持 `vue3` 的版本，自然也是需要做一些**微小的工作**。

直接上代码：

```typescript
import { createI18n } from 'vue-i18n'
import contentEn from '@/langs/en.json'
import contentZh from '@/langs/zh.json'
import { getLang } from '@/utils'

const messages = {
  en: contentEn,
  zh: contentZh
}

const i18n = createI18n({
  locale: getLang(), // 设置语言,如果本地存储了则用本地的,没有则默认 'en'
  messages
})

export default i18n
```

最大的变化其实就是通过 `createI18n` 来创建实例了，然后在 `app.use` 后就可以直接在模板中使用 `$t` 方法去读国际化了~

## eslint + prettier

其实后续已经不建议 `eslint` 配合 `preitter` 来用了，基本上很多开发者都推荐只使用 `eslint` 来规范代码，但现在我们既然还在用，那就来配置下吧~

```bash
# eslint prettier 基础
yarn add -D eslint eslint-plugin-vue vite-plugin-eslint prettier eslint-plugin-prettier
# typescript 支持
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
# vue sfc parse 没有了这个会导致 sfc 不能被正确解析并通过 eslint
yarn add -D vue-eslint-parser
```

由于用 `vite` 的原因，`package.json` 中 `type` 被设为了 `module`，因此 `eslint` 配置文件改名为 `.eslintrc.cjs`，具体配置如下：

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 只要 extend 了这个，就可以与 preitter 共存
    // 记得这个一定要放在最后哦
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 一些自定义规则
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
```

同理配置一下 `.prettierrc`：

```json
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2,
    "vueIndentScriptAndStyle": false,
    "trailingComma": "none"
}
```

## axios + typescript

> 来两篇文章：
>
> [修改 axios response 返回类型 | 飞跃高山与大洋的鱼 (shanyuhai.top)](https://docs.shanyuhai.top/frontend/typescript/change-axios-response-type.html#typescript-错误的类型提示)
>
> [How to use Axios with TypeScript when using response interceptors (AxiosResponse issue) · Issue #1510 · axios/axios (github.com)](https://github.com/axios/axios/issues/1510)

我们经常会在 `interceptors` 或 `transformResponse` 中修改响应体返回的内容，因为后端一般返回一个带有 `ret` `msg` `data` 的对象，我们一般需要的就是这个对象，而 `axios` 默认的响应体要通过 `res.data` 才能取到，一般我们会修改成直接返回 `res.data`，但当 `axios` 配合 `typescript` 的时候，就会导致类型提示不正确的问题。

这个项目中采取了文章中的第一个方法，也就是直接改全局类型，因为后端都是一个后端，返回体都是统一的，这样修改没问题：

```typescript
import axios from 'axios'

interface ResponseData<T = any> {
  ret: number
  msg?: string | null
  data: T
}

declare module 'axios' {
  export interface AxiosInstance {
    // 这里改的是直接调用实例时的方法
    (config: AxiosRequestConfig): Promise<ResponseData>
    (url: string, config?: AxiosRequestConfig): Promise<ResponseData>
    request<T = ResponseData>(config: AxiosRequestConfig): Promise<T>
    get<T = ResponseData>(url: string, config?: AxiosRequestConfig): Promise<T>
    delete<T = ResponseData>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<T>
    head<T = ResponseData>(url: string, config?: AxiosRequestConfig): Promise<T>
    post<T = ResponseData>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
    put<T = ResponseData>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
    patch<T = ResponseData>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>
  }
}
```

大功告成~