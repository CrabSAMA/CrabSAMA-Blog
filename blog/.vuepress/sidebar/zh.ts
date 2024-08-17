import { sidebar } from 'vuepress-theme-hope'
import type { SidebarOptions } from 'vuepress-theme-hope'

const folderList = [
  '学习笔记',
  '开发规范',
  '日志随笔',
  '解决方案',
  '项目总结'
]

const genSidebarConfig = () => {
  const config: SidebarOptions = {}
  folderList.forEach((folder) => {
    config[`/${folder}/`] = [
      '/',
      {
        text: folder,
        children: 'structure',
      },
    ]
  })
  return config
}

export const zhSidebar = sidebar({
  '/': [
    '',
    {
      text: '文章列表',
      icon: 'article',
      link: '/article/',
    },
    'intro',
    // 幻灯片
    // "slides",
  ],
  ...genSidebarConfig()
})
