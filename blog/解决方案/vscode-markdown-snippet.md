---
title: vscode snippet 生成 markdown snippet
date: 2024-09-04 17:36:46 +08:00
category:
  - 解决方案
tag:
  - vscode snippet
  - Markdown
---

# vscode snippet 生成 markdown snippet

## 背景

在使用类似 vuepress 等静态站点生成库时，我们经常需要通过编写 markdown 文件中的 frontmatter 来标识一些功能与文章的属性。每次需要手动编写 frontmatter，或者从旧的文档 cv 过来，是比较低效的行为。因此是否可以通过一些方法来提升写文章的体验，更加高效开搞？

## 解法

针对在平时开发工作中这种重复 cv 的情况，我们的解法一般都是使用代码片段来提效。我将这个思维也复制到了 markdown frontmatter 上。我可以通过编写一个 snippet 来快速地生成所需的 frontmatter。

首先我们要分析需求，即 frontmatter 里面需要有什么。来分析一个常见的 yaml frontmatter：

```yaml
---
title: Composition API 编程思想
date: 2023-02-07 14:46:40 +08:00
star: true
category:
  - 学习笔记
tag:
  - 前端工程化
  - Vue
---
```

一般常见的文章属性类的 frontmatter 就是上面的内容，字段包括：title——标题，date——日期，star——是否星标文章，category——分类，tag——标签。那我们每次需要输入的内容一般只有标题和标签，日期可以直接获取当前时间，分类直接取当前文件夹名称即可，就可以减少输入的内容，十分安逸。

vscode snippet 有提供相关的预定义变量（[链接](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)）来实现这些功能，但直接使用是不太行的，需要经过一些处理。

我们想直接取当前文件夹的名称，但是 vscode 只提供了这个变量：`TM_DIRECTORY` The directory of the current document。这个变量获取出来的是当前文件所处的文件夹路径，而不是文件夹名称，因此我们需要借助 vscode snippets 支持特定的正则这一功能来实现。具体可以参考这个链接：https://stackoverflow.com/questions/48366014/how-to-get-the-base-directory-in-visual-studio-code-snippet

最终我们可以得到一个可用的 snippet：

```json
{
  "Insert Markdown Frontmatter": {
    "prefix": "fm",
    "body": [
      "---",
      "title: $1",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +08:00",
      "category:",
      "  - ${TM_DIRECTORY/^.+\\\\/(.*)$/$1/}",
      "tag:",
      "  - $2",
      "---",
      ""
    ],
    "description": "Insert Markdown Frontmatter"
  }
}
```

光标会先后落在 title、tag 上，date 和 category 将会自动根据当前目录与时间生成。

## 为什么我的 markdown 文件中 snippet 不生效？

https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code

https://github.com/Microsoft/vscode/issues/1617#issuecomment-166999086

markdown 文件在默认情况下不会像代码文件一样输入内容触发自动补全，因此需要在输入完 snippet prefix 之后按快捷键触发 intellisense，在 windows 系统下默认快捷键是 `ctrl + space`，在 macos 系统下默认快捷键是 `option + esc`。

## 进阶需求

我个人有先写原始文档，再 copy 到 vuepress blog 的习惯，原始文档上是没有 frontmatter 的，之前的 snippet 仅做了插入 frontmatter 的功能，我想在插入 frontmatter 的时候将剪贴板的 markdown 内容也粘贴下来，这里就会用到 `$CLIPBOARD` 这个变量。

具体实现如下：

```json
{
  "Paste Markdown Content With Auto Generate Frontmatter": {
    "prefix": "pmd",
    "body": [
      "---",
      "title: $1",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND +08:00",
      "category:",
      "  - ${TM_DIRECTORY/^.+\\\\/(.*)$/$1/}",
      "tag:",
      "  - $2",
      "---",
      "",
      "$CLIPBOARD"
    ],
    "description": "Paste Markdown Content With Auto Generate Frontmatter"
  }
}
```

在复制完原始文档后，新建 markdown 文件，输入 pmd 并触发 snippet，就会结合上面自动生成 frontmatter 的同时将文档内容也复制过来了，效率提升一大截！
