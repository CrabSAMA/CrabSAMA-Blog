import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "tabler:home", link: "/" },
  { text: "文章列表", icon: "ri:article-line", link: "/article/" },
  { text: "分类", icon: "tabler:category", link: "/category/" },
  { text: "标签", icon: "mdi:tag-outline", link: "/tag/" },
  { text: "时间轴", icon: "ic:twotone-timeline", link: "/timeline/" },
  { text: "经历", icon: "gravity-ui:list-timeline", link: "/myself/" },
]);
