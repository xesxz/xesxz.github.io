import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";
const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
import { nextSearchPlugin } from "vuepress-plugin-next-search";
const navbar = [
  {
    text: "前端",
    children: [
      {
        text: "前端基础",
        children: [
          { text: "JavaScript", link: "/frontend/javascript" },
          { text: "CSS", link: "/frontend/css" },
        ],
      },

      {
        text: "工程化",
        children: [
          { text: "Vue", link: "/frontend/vue" },
          { text: "Git", link: "/frontend/git" },
        ],
      },

      {
        text: "可视化",
        children: [
          { text: "浏览器原生绘图", link: "/frontend/浏览器原生绘图.html" },
          { text: "Apache Echarts", link: "/frontend/echarts" },
        ],
      },
    ],
  },
  {
    text: "Gis",
    children: [
      {
        text: "Gis框架",
        children: [
          { text: "Cesium", link: "/gis/gisFrame/cesium" },
          { text: "Openlayers", link: "/gis/gisFrame/openlayers" },
          { text: "Mapbox", link: "/gis/gisFrame/mapbox" },
        ],
      },
      {
        text: "gis知识",
        children: [{ text: "openlayers", link: "/gis/openlayers" }],
      },
    ],
  },

  {
    text: "后端",
    children: [
      {
        text: "Python",
        children: [{ text: "Python核心语法", link: "/backend/Python" }],
      },
      {
        text: "Go",
        children: [
          { text: "Go核心语法", link: "/backend/Go" },
          { text: "Go Web开发", link: "/backend/Web-for-Go" },
        ],
      },
    ],
  },

  {
    text: "容器",
    children: [
      {
        text: "容器基础",
        children: [{ text: "容器核心技术", link: "/container/container" }],
      },
      {
        text: "容器编排工具",
        children: [
          { text: "使用kubespray部署k8s", link: "/container/kubespray" },
        ],
      },
    ],
  },

  {
    text: "算法",
    children: [
      {
        text: "通用算法",
        children: [{ text: "双指针", link: "/algorithm/double-pointer" }],
      },
    ],
  },

  // Github
  { text: "Github", link: "https://github.com/vvfock3r/note" },
];

export default defineUserConfig({
  theme: localTheme({
    sidebar: "auto",
    sidebarDepth: 3,
    navbar: navbar,
  }),
  //   theme: "vdoing",
  lang: "zh-CN",
  title: "xesxz's blog",
  description: "打怪升级之旅~",
  markdown: {
    code: {
      // 不显示行号
      lineNumbers: false,
    },
    extractHeaders: {
      // 提取哪些子标题
      level: [2, 3, 4, 5],
    },
  },
  // 插件配置
  plugins: [
    //          docsearchPlugin({
    //
    //             }),
    //             registerComponentsPlugin({
    //                 components: {
    //                     Home: path.resolve(__dirname, './components/Home.vue'),
    //                 }
    //             }),
  ],
});
