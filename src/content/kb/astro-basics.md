---
title: Astro 笔记
category: 工作
summary: Astro 是现代静态站点生成器，适合博客、文档和个人主页。
order: 1
video: BV1GJ411x7h7
tags: [Astro, 教程]
---

## 什么是 Astro

Astro 是一个面向内容的静态站点生成器，核心特点是"零 JavaScript 默认"——页面只加载必要的 HTML 和 CSS，交互按需引入。

## 核心概念

### 组件

`.astro` 文件是 Astro 的基本单元，由三部分组成：frontmatter（代码栅栏）、HTML 模板、style 标签。

### 路由

`src/pages/` 目录下的文件自动成为路由：`index.astro` → `/`，`about.astro` → `/about`。

### 布局

布局组件放在 `src/layouts/` 下，通过 `<slot />` 接收页面内容，实现多页面共用外壳。

## 常用命令

### 开发

`npm run dev` 启动开发服务器，支持热更新。

### 构建

`npm run build` 生成静态文件到 `dist/` 目录。

### 预览

`npm run preview` 本地预览构建产物。
