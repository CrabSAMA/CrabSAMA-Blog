---
title: Vue Template AST
date: 2024-04-26 17:38:09 +08:00
category:
  - 学习笔记
tag:
  - Vue
  - AST
---

# Vue Template AST

```typescript
export enum NodeTypes {
  // 0 根节点 最顶层那个节点
  ROOT,
  // 1 元素节点 <Comp></Comp>
  ELEMENT,
  // 2 普通文本节点
  TEXT,
  // 3 注释节点
  COMMENT,
  // 4 表达式节点 :total="pageInfo.total" 中 pageInfo.total 就是表达式
  SIMPLE_EXPRESSION,
  // 5 插值表达式节点 {{ something }} 这种就是插值表达式
  INTERPOLATION,
  // 6 普通属性节点 style="xx" 这种不是v-bind的就会被当成普通属性节点处理
  ATTRIBUTE,
  // 7 指令节点 v-on :total .prop @on-change #a v-slot v-pre 还有自定义指令等
  // 可以看测试用例去找到指定的case vuejs/core/packages/compiler-core/__tests__/parse.spec.ts v-if v-show v-for v-bind 这种都是
  DIRECTIVE,
  // containers
  // 8 复合表达式 看测试用例的结果丢到 ast explorer 中无法解析成这个类型 看起来是 ast explorer 中版本太旧了
  COMPOUND_EXPRESSION,
  // 9 v-if 表达式
  IF,
  // 10 v-if 的节点下面会有 branches 属性
  IF_BRANCH,
  // 11 v-for 表达式 举个例子：<div v-for="item of []"></div>的父子关系是：root -> v-for -> div
  FOR,
  // 12 <div/>{{ foo }} bar {{ baz }}<div/> 中间的 bar 即是 TEXT_CALL 有点不明所以
  TEXT_CALL,
  // codegen
  // codegen 即根据template块生成代码的节点类型
  // 13
  VNODE_CALL,
  // 14
  JS_CALL_EXPRESSION,
  // 15
  JS_OBJECT_EXPRESSION,
  // 16
  JS_PROPERTY,
  // 17
  JS_ARRAY_EXPRESSION,
  // 18
  JS_FUNCTION_EXPRESSION,
  // 19
  JS_CONDITIONAL_EXPRESSION,
  // 20
  JS_CACHE_EXPRESSION,

  // ssr codegen
  JS_BLOCK_STATEMENT,
  JS_TEMPLATE_LITERAL,
  JS_IF_STATEMENT,
  JS_ASSIGNMENT_EXPRESSION,
  JS_SEQUENCE_EXPRESSION,
  JS_RETURN_STATEMENT,
}
```
