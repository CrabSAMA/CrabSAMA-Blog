import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
import unocss from 'unocss/vite'
import theme from "./theme";
import { themeColorPlugin } from './plugins/vuepress-plugin-theme-color'
const __dirname = getDirname(import.meta.url)

const InfoPanel = path.resolve(__dirname, './components/InfoPanel/index.vue')

export default defineUserConfig({
  base: "/CrabSAMA-Blog/",

  head: [
    ['meta', { name: 'algolia-site-verification', content: '5AD02DE471FBAEB7' }]
  ],

  lang: "zh-CN",
  title: "CrabSAMA · 笔记",
  description: '记录程序狗的点点滴滴',

  theme,

  alias: {
    '@theme-hope/components/blog/InfoPanel': InfoPanel,
    '@theme-hope': path.resolve(
      __dirname,
      '../../node_modules/vuepress-theme-hope/lib/client'
    ),
  },

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        unocss()
      ]
    },
    vuePluginOptions: {},
  }),

  plugins: [
    themeColorPlugin()
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
