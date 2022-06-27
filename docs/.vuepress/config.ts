import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
// import type { ViteBundlerOptions } from '@vuepress/bundler-vite';
import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack';
import { resolve } from 'path' // 主要用于alias文件路径别名

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'CrabSAMA · 笔记',
  description: '记录程序狗的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  base: '/CrabSAMA-Blog/',
  theme: 'reco',
  themeConfig: {
    // 自动设置分类
    autoSetCategory: true,
    // 自动将首页、分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: true,
    style: '@vuepress-reco/style-default',
    logo: '/assets/img/logoa.png',
    authorAvatar: '/assets/img/logoa.png',
    navbar:[
      { text: 'CrabLoveWelcome', link: '/' },
      { text: '分类',
        children: [
          { text: 'JavaScript', link: '/categories/JavaScript/1/' },
          { text: 'TypeScript', link: '/categories/TypeScript/1/' },
          { text: '前端工程化', link: '/categories/qianduangongchenghua/1/' },
          { text: '笔试题', link: '/categories/bishiti/1/' },
          { text: '开发规范', link: '/categories/kaifaguifan/1/' },
          { text: '实际项目', link: '/categories/shijixiangmu/1/' },
          { text: '计算机网络', link: '/categories/jisuanjiwangluo/1/' },
          { text: 'Node.js', link: '/categories/Node.js/1/' },
          { text: 'Git', link: '/categories/git/1/' },
          { text: 'HTML', link: '/categories/HTML/1/' }
        ]
      },
    ],
  },
  // themeConfig: {
  //   logo: '/assets/img/logo.png',
  //   // nav: [
  //   //   { text: '博客', link: '/blog/' },
  //   //   { text: '开发规范', link: '/developStandard/' }
  //   // ],
  //   docsDir: '/',
  //   lastUpdated: 'Last Updated',
  //   sidebarDepth: 2
  // },
  plugins: [],
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    configureWebpack: (config) => {
      config.resolve.alias['@img'] = resolve(__dirname, '../assets/img')
    }
  }
})
