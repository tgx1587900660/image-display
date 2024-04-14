import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'moshanxin',
  description: '莫善欣的日志',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '照片墙', link: '/imgs' },
    ],

    sidebar: [
      {
        text: 'image',
        items: [
          { text: '照片墙~', link: '/imgs' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
