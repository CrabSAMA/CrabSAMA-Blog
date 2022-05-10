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
    subSidebar: 'auto',
    authorAvatar: '/assets/img/logoa.png',
    navbar:[
      { text: '首页', link: '/' },
      { text: '分类', link: '/categories/JavaScript/1/' },
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
  plugins: [
    // [
    //   '@vuepress/medium-zoom',
    //   {
    //     selector: '.theme-reco-content :not(a) > img'
    //   }
    // ],
    // 'permalink-pinyin', 
    // [
    //   'autobar', 
    //   { 
    //     'pinyinNav': true,
    //     'setHomepage': 'hide'
    //   }
    // ],
    // ['rpurl', 
    //   [
    //     [/--nc,d2|--nc|--d2/gi, ''], 
    //     [/nav[\.\-_]*\d*[\.\-_]*/gi, ''], 
    //     [/\d+[\.\-_]*/gi, '']
    //   ]
    // ]
  ],
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    configureWebpack: (config) => {
      config.resolve.alias['@img'] = resolve(__dirname, '../assets/img')
    },
    chainWebpack: (config, isServer) => {
      const inlineLimit = 10000
      config.module.rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: inlineLimit,
            name: `assets/img/[name].[hash:8].[ext]`
          })
    }
  }
})
