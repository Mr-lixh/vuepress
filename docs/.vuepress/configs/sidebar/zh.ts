import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/VuePress/guide/': [
        {
            text: '指南',
            children: [
                '/VuePress/guide/README.md',
                '/VuePress/guide/getting-started.md',
            ],
        },
    ],
    '/VuePress/advanced/': [
        {
            text: '进阶',
            children: [
                '/VuePress/advanced/theme.md',
            ],
        },
        {
            text: 'Cookbook',
            children: [
                '/VuePress/advanced/cookbook/README.md',
            ],
        },
    ],
    '/Vue/guide': [
        {
            text: '指南',
            children: [
                '/Vue/guide/README.md',
                '/Vue/guide/getting-started.md',
            ],
        },
    ],
    '/Vue/advanced': [
        {
            text: '进阶',
            children: [
                '/Vue/advanced/README.md',
                '/Vue/advanced/advanced.md',
            ],
        },
    ],
}
