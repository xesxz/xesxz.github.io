import {defineUserConfig} from 'vuepress'
import {localTheme} from './theme'
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const navbar = [
    {
        text: '运维',
        children: [
            {
                text: 'Linux基础',
                children: [
                    {text: 'Bash', link: '/ops/Bash'},
                ]
            },
        ]
    },

    {
        text: '前端',
        children: [
            {
                text: '前端基础',
                children: [
                    {text: 'CSS', link: '/frontend/css'},
                    {text: 'JavaScript', link: '/frontend/javascript'},
                ]
            },

            {
                text: '工程化',
                children: [
                    {text: 'Vue', link: '/frontend/vue'},
                ]
            },

            {
                text: '可视化',
                children: [
                    {text: '浏览器原生绘图', link: '/frontend/浏览器原生绘图.html'},
                    {text: 'Apache Echarts', link: '/frontend/echarts'},
                ]
            },
        ]
    },

    {
        text: '后端',
        children: [
            {
                text: 'Python',
                children: [
                    {text: 'Python核心语法', link: '/backend/Python'},
                ]
            },
            {
                text: 'Go',
                children: [
                    {text: 'Go核心语法', link: '/backend/Go'},
                    {text: 'Go Web开发', link: '/backend/Web-for-Go'},
                ]
            },
        ]
    },

    {
        text: '容器',
        children: [
            {
                text: '容器基础',
                children: [
                    {text: '容器核心技术', link: '/container/container'},
                ]
            },
            {
                text: '容器编排工具',
                children: [
                    {text: '使用kubespray部署k8s', link: '/container/kubespray'},
                ]
            },
        ]
    },

    {
        text: '算法',
        children: [
            {
                text: '通用算法',
                children: [
                    {text: '双指针', link: '/algorithm/double-pointer'},
                ]
            },
        ]
    },

    // Github
    {text: 'Github', link: 'https://github.com/vvfock3r/note'},
]



export default defineUserConfig({
    theme: localTheme({
        navbar: navbar,
            // 侧边栏配置，默认为auto
                // 文档：https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
                sidebar: 'auto',

                // 侧边栏显示所有标题的深度，默认为2
                // 最大值取决于你通过 markdown.extractHeaders.level 提取了哪些级别的标题
                // 文档：https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebardepth
                sidebarDepth: 3,
    }),
    lang: 'zh-CN',
    title: 'note',
    description: '打怪升级之旅~',
       markdown: {
            code: {
                // 不显示行号
                lineNumbers: false,
            },
            extractHeaders: {
                // 提取哪些子标题
                level: [2, 3, 4, 5],
            }
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
})
