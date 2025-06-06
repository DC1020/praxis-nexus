import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  // base: '/praxis-nexus/',
  cleanUrls: true,
  lang: 'zh-CN',

  title: "知行小栈",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/java/': [
        {
          items: [
            {
              text: '一、快速入门',
              collapsed: true,
              items: [
                {
                  text: '1.1 发展历史',
                  link: '/java/quick-start/history',
                  collapsed: true,
                },
                {
                  text: '1.2 搭建开发环境',
                  link: '/java/quick-start/build-dev-env',
                  collapsed: true,
                },
                {
                  text: 'Java 线程必须了解的哪些事儿',
                  link: '/java/misc/thread',
                  collapsed: true,
                }
              ]

            },
            {
              text: 'Java进阶',
              link: '/java/java-advanced',
              collapsed: true
            }
          ]
        }
      ],
      '/periodicals/': [
        {
          items: [
             {
              text: '【第三期】SpringBoot 的核心只有几张图',
              link: '/periodicals/2025/springboot',
            },
            {
              text: '【第二期】Redis 的几个热点知识',
              link: '/periodicals/2025/redis',
            },
            {
              text: '【第一期】Java 线程必须了解的哪些事儿',
              link: '/periodicals/2025/thread',
            }
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
