import { searchPlugin } from '@vuepress/plugin-search';
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/CrabSAMA-Blog/",

  lang: "zh-CN",
  title: "CrabSAMA · 笔记",
  description: '记录程序狗的点点滴滴',

  theme,

  plugins: [
    searchPlugin()
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
