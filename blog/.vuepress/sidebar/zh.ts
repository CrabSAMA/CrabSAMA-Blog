import { sidebar } from 'vuepress-theme-hope'
import type { SidebarOptions } from 'vuepress-theme-hope'

const folderList = [
  '笔试题',
  '计算机网络',
  '开发规范',
  '前端工程化',
  '实际项目',
  'git',
  'HTML',
  'JavaScript',
  'Node.js',
  'TypeScript',
  'Webpack',
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
