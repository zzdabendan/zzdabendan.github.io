// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://zzdabendan.github.io',
  // 关于页与物品页已合并，旧地址 301 到关于页
  redirects: {
    '/items': '/about',
  },
  // 启用 MDX：知识库文章正文可直接使用 VideoBili 组件嵌入视频
  integrations: [mdx()],
  markdown: {
    // 代码块使用浅色主题，与全站暖纸白风格一致（默认 github-dark 是深色，会突兀）
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
