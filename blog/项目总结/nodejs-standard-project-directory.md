---
title: Node.js标准的工程目录
date: 2020-07-08 21:28:31
category:
  - 项目总结
tag:
  - node.js
  - 开发规范
---

```bash
- /home/user/workspace/node-echo/   # 工程目录
    - bin/                          # 存放命令行相关代码
        node-echo
    + doc/                          # 存放文档
    - lib/                          # 存放API相关代码
        echo.js
    - node_modules/                 # 存放三方包
        + argv/
    + tests/                        # 存放测试用例
    package.json                    # 元数据文件
    README.md                       # 说明文件
```



