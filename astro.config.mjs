// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zzdabendan.github.io',
  markdown: {
    // 代码块使用浅色主题，与全站暖纸白风格一致（默认 github-dark 是深色，会突兀）
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
