import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文章列表", icon: "discover", link: "/article/" },
  { text: "分类", icon: "discover", link: "/category/" },
]);
