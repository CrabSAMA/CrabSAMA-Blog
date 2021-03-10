const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.join(__dirname, '../assets/img')
      }
    }
  },
    themeConfig: {
    //   logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '博客', link: '/blog/' },
        { text: '开发规范', link: '/developStandard/' }
      ],
      sidebarDepth: 2,
      sidebar: {
        '/blog/': [{
          title: '博客',
          collapsable: false,
          children: [
            '/',
            'prototype'
          ]
        }]
      }
      // sidebar: 'auto'
    }
  }
  
  