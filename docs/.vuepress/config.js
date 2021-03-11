const path = require('path');

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'CrabSAMA · 笔记',
  description: '记录程序狗的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: '/public/favicon.ico' }]
  ],
  base: '/CrabSAMA-Blog/',
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/logoa.png',
    subSidebar: 'auto'
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
    '@vuepress/medium-zoom',
    'permalink-pinyin', 
    [
      'autobar', 
      { 
        'pinyinNav': true,
        'setHomepage': 'hide'
      }
    ],
    ['rpurl', 
      [
        [/--nc,d2|--nc|--d2/gi, ''], 
        [/nav[\.\-_]*\d*[\.\-_]*/gi, ''], 
        [/\d+[\.\-_]*/gi, '']
      ]
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../assets/img')
      }
    }
  }
}
  
  