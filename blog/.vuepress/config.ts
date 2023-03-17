import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "CrabSAMA · 笔记",
  description: '记录程序狗的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
