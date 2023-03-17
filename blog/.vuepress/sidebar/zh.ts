import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章列表",
      icon: "creative",
      // prefix: "demo/",
      link: "/article/"
    },
    "intro",
    "slides",
  ],
});
