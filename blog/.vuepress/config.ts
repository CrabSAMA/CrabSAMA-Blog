import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme";

export default defineUserConfig({
  base: "/CrabSAMA-Blog/",

  lang: "zh-CN",
  title: "CrabSAMA · 笔记",
  description: '记录程序狗的点点滴滴',

  theme,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
