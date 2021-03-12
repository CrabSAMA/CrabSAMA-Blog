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
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  base: '/CrabSAMA-Blog/',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: '/assets/img/logoa.png',
    subSidebar: 'auto',
    authorAvatar: '/assets/img/logoa.png'
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
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-reco-content :not(a) > img'
      }
    ],
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
  
  