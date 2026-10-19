---
title: 网站架构总结
category: 工作
summary: 个人网站的技术选型、文件结构、布局系统、组件设计与部署流程的完整记录。
order: 10
---

## 技术选型

- **框架**：Astro 6（静态站点生成器，零 JS 运行时，构建后纯 HTML/CSS）
- **内容管理**：Astro Content Collections（`src/content.config.ts` 定义集合结构）
- **部署**：GitHub Pages + GitHub Actions（自动构建部署）
- **样式**：原生 CSS（无 Tailwind/UnoCSS，保持极简）
- **字体**：思源黑体（Noto Sans SC）为主，思源宋体、微软雅黑备选

## 文件结构

```
src/
├── layouts/
│   └── BaseLayout.astro      # 唯一页面骨架（html/head/body）
├── components/
│   ├── Nav.astro             # 顶部导航（含移动端折叠）
│   ├── ArticleBody.astro     # 文章正文容器（Markdown 渲染样式）
│   ├── ArticleList.astro     # 知识库左栏：文章列表（按分组）
│   ├── Toc.astro             # 知识库右栏：目录（从 headings 生成）
│   └── VideoBili.astro       # B 站视频 Facade 组件（点击加载）
├── pages/
│   ├── index.astro           # 首页（极简欢迎页）
│   ├── about.astro           # 关于（自我介绍/经历/技能）
│   ├── reflections.astro     # 感悟（日记式记录）
│   ├── plan.astro            # 计划（短期/中期/长期）
│   ├── items.astro           # 物品（财务看板+物品清单）
│   ├── kb/
│   │   ├── index.astro       # 知识库首页（三栏：列表/导读/目录）
│   │   └── [...slug].astro   # 知识库文章详情（三栏：列表/正文/目录）
│   └── posts/
│       ├── index.astro       # 文章首页（博客列表）
│       └── [...slug].astro   # 文章详情
└── content/
    ├── kb/                   # 知识库 Markdown（生活/学校/工作三个分组）
    └── posts/                # 文章 Markdown（博客模式，按日期排序）
```

## 布局系统

全站只有一个 `BaseLayout.astro`，负责：
- `<html><head><body>` 骨架
- 全局 CSS 变量（`--text`、`--muted`、`--line`、`--content-width`）
- 全局字体、h1 基线样式
- 导航栏 + 页脚渲染

**单栏 vs 三栏**：不单独抽离布局文件，只在内容区通过 CSS 实现差异。
- 单栏页面：`.container` 默认 `max-width: 720px`（正文阅读宽度）
- 三栏知识库：页面内覆盖 `--content-width: 1200px`，`.kb-layout` 用 `grid-template-columns: 220px 1fr 200px`

## 组件设计

| 组件 | 职责 | 样式特点 |
|------|------|----------|
| Nav | 导航链接渲染、当前页高亮、移动端折叠 | 纯白背景、sticky 顶部 |
| ArticleBody | Markdown 正文样式（标题层级、段落、列表、代码块） | `:global()` 作用域，命中动态渲染 DOM |
| ArticleList | 按分组列出全部知识库文章，当前篇高亮 | 暖灰背景 `#f0ece5`、细滚动条 |
| Toc | 从 Markdown headings 生成目录，支持二三四级缩进 | 透明背景、隐藏滚动条 |
| VideoBili | B 站视频 Facade 模式：封面占位，点击加载 iframe | 避免页面初始加载第三方资源 |

## 内容管理

**知识库**（`src/content/kb/`）：
- 每篇文章一个 `.md` 文件
- frontmatter 必填：`title`、`category`（生活/学校/工作）、`summary`、`order`（分组内排序）
- 可选：`video`（B 站 BV 号）、`cover`（自定义封面）

**文章**（`src/content/posts/`）：
- 博客模式，按 `date` 倒序排列
- frontmatter 必填：`title`、`summary`、`date`

## 部署流程

1. 本地 `git push` 到 `main` 分支
2. GitHub Actions 自动触发（`.github/workflows/deploy.yml`）
3. 构建：`npm run build` → 生成 `dist/` 静态文件
4. 部署：推送 `dist/` 到 GitHub Pages
5. 特性：npm 依赖缓存、新推送自动取消旧任务

## 设计规范

- **配色**：内容区 `#faf8f5` 暖纸白，页脚/侧栏 `#f0ece5` 暖灰，导航纯白
- **宽度**：正文子页面 720px，首页 1100px，知识库 1200px（中栏 680px 对齐子页面行宽）
- **标题层级**：h1 28px / h2 20px / h3 15px / h4 14px，全站统一
- **间距**：h1 下间距 32px（无摘要）或 8px→摘要→24px（带摘要），数值只在 BaseLayout 声明一次

## 后续扩展方向

- 搜索：接入 `pagefind` 静态搜索（零后端）
- RSS：`@astrojs/rss` 生成订阅源
- 阅读时间：正文字数 ÷ 400 估算
- 标签：frontmatter 加 `tags` 字段，支持筛选
