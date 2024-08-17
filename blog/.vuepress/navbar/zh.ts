import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "tabler:home", link: "/" },
  { text: "文章列表", icon: "ri:article-line", link: "/article/" },
  {
    text: "分类",
    icon: "tabler:category",
    link: "/category/",
    children: [
      { text: '学习笔记', icon: 'memory:book', link: '/category/学习笔记/' },
      { text: '解决方案', icon: 'flowbite:lightbulb-outline', link: '/category/解决方案/' },
      { text: '日志随笔', icon: 'hugeicons:task-daily-01', link: '/category/日志随笔/' },
      { text: '开发规范', icon: 'material-symbols:rule-folder-outline', link: '/category/开发规范/' },
      { text: '项目总结', icon: 'ant-design:project-outlined', link: '/category/项目总结/' },
    ]
  },
  { text: "标签", icon: "mdi:tag-outline", link: "/tag/" },
  { text: "时间轴", icon: "ic:twotone-timeline", link: "/timeline/" },
  { text: "历程", icon: "gravity-ui:list-timeline", link: "/myself/" },
]);
