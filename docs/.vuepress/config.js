const { navbar, sidebar } = require('./configs')

module.exports = {
  lang: 'zh-CN',
  title: 'xhli 的文档集',
  description: '这是我的 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    docsDir: 'docs',
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebarDepth: 3,
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  },
  markdown: {
    extractHeaders: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
        },
        hotKeys: ['/'],
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      },
    ],
  ],
}
