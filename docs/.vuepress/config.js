module.exports = {
    base:"/docs/",
    title: '执勤管理系统参考文档',

    description: '帮助文档',
    markdown: {
        lineNumbers: true
    },

    themeConfig: {
        smoothScroll: true,
        sidebar: {
            '/manual/':[
                {
                    title:'一.安装指南 ',
                    children:['anzhuang']
                },
                {
                    title:'二.使用指南 ',
                    children:['caozuo']
                },
                {
                    title:'三.维护指南 ',
                    children:['weihu']
                }
            ],

        },
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/manual/anzhuang.html' },
            { text: 'baidu', link: 'https://www.baidu.com/' },
        ]
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            title: {
                mode: "titlecase",
                map: {
                    "/manual/anzhuang.html": "文档",
                }
            }
        }
    }
}
