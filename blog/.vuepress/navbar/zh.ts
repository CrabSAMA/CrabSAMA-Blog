import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文章列表", icon: "article", link: "/article/" },
  { text: "分类", icon: "categoryselected", link: "/category/" },
  { text: "标签", icon: "tag", link: "/tag/" },
]);
