import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: 'VuePress',
        children: [
            {
                text: '指南',
                children: [
                    '/VuePress/guide/getting-started.md',
                ],
            },
            {
                text: '进阶',
                children: [
                    '/VuePress/advanced/theme.md',
                ],
            },
            {
                text: '参考',
                children: [
                    {
                        text: '官方文档',
                        link: 'https://v2.vuepress.vuejs.org/zh/',
                    }
                ],
            },
        ],
    },
    {
        text: 'Vue',
        children: [
            {
                text: '基础',
                children: [
                    '/Vue/guide/getting-started.md',
                ],
            },
            {
                text: '进阶',
                children: [
                    '/Vue/advanced/advanced.md',
                ],
            },
            {
                text: '参考',
                children: [
                    {
                        text: '官方文档',
                        link: 'https://cn.vuejs.org/v2/guide/',
                    },
                ],
            },
        ],
    },
]
