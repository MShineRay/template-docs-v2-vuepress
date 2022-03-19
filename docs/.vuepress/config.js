module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'V2 Express',
  description: '这是我的第一个 VuePress 站点',
  logo: 'https://vuejs.org/images/logo.png',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // navbar: [
    //   // NavbarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //   },
    //   // NavbarGroup
    //   {
    //     text: 'Group',
    //     children: ['/group/foo.md', '/group/bar.md'],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    // 侧边栏数组 demo1
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],

    // 侧边栏对象 demo2 TODO 不好使？
    // 不同子路径下的页面会使用不同的侧边栏
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       children: ['/guide/README.md', '/guide/getting-started.md'],
    //     },
    //   ],
    //   '/reference/': [
    //     {
    //       text: 'Reference',
    //       children: ['/reference/cli.md', '/reference/config.md'],
    //     },
    //   ],
    // },

    // 可折叠的侧边栏 demo3 TODO 不好使？
    // sidebar: {
    //   '/reference/': [
    //     {
    //       text: 'VuePress Reference',
    //       collapsible: true,
    //       children: ['/reference/cli.md', '/reference/config.md'],
    //     },
    //     {
    //       text: 'Bundlers Reference',
    //       collapsible: true,
    //       children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    //     },
    //   ],
    // },
  },
}
