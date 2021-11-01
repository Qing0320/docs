module.exports = {
  title: 'DMS系统文档',
  description: 'DMS系统文档',
  markdown: {
    lineNumbers: true
  },
  logo: '/img/zhiqin.png',
  themeConfig: {
    sidebar: {
      '/env_install/':[
          '',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        'FAQ'
      ],

    },
    nav: [
      { text: '首页', link: '/' },
      { text: '环境安装', link: '/env_install/' },
      { text: 'baidu', link: 'https://www.baidu.com/' },
    ]
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      title: {
        mode: "titlecase",
        map: {
          "/env_install/": "基础环境安装",
        }
      }
    }
  }
}
