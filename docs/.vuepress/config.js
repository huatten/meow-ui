module.exports = {
  // 仓库名，表示部署到哪里
  base: '/meow/',
  // 网页左上角标题名，也是主页标题
  title: 'meow-ui',
  // 页面描述 是主页副标题
  description: '喵呜～个人练练手',
  // 设置输出目录
  dest: './dist',
  // 设置站点根路径   
  base: '/meow-ui/',
  // 添加 github 链接
  repo: 'https://github.com/MrTenger/meow-ui',
  // 每个文档展示最近更新时间
  lastUpdated: 'Last Updated',
  // 主题配置
  themeConfig:{
    // 添加导航栏
    nav: [
      {
        text: 'github',
        link: 'https://github.com/MrTenger/meow-ui'
      }
    ],
    // 侧边栏层级
    sidebarDepth: 0,
    // 侧边栏
    sidebar:[
      {
        title: "开始",
        collapsable: false,  // 当前分组是否展开
        children: ['/guide/', '/install/']
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          '/components/button',
          '/components/icon',
          '/components/cell',
          '/components/loading',
          '/components/noticebar',
          '/components/switch',
          '/components/transition',
          '/components/marquee',
        ]
      }
    ]
  }
}