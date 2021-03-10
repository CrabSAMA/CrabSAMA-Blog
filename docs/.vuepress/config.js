module.exports = {
    themeConfig: {
    //   logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '开发规范', link: '/developStandard/' }
      ],
      sidebarDepth: 2,
      sidebar: {
        '/developStandard/': [{
          title: '开发规范',
          collapsable: false,
          children: [
            '',
            'eslint',
            'JavaScript'
          ]
        }]
      }
    }
  }
  
  