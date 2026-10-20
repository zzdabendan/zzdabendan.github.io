---
title: 写作排版规范
category: 生活
summary: 写作中重复性内容的标准格式：布局、标题、段落、列表、链接、代码、图片、视频的统一写法。
order: 2
tags: [排版, 规范]
---

## 页面布局

页面布局决定文章在浏览器窗口中的位置和宽度，常见有三种。

### 基本结构

一个网页最基础的骨架是四个语义标签：`<header>` 放标题和导航，`<nav>` 放菜单链接，`<main>` 放正文内容，`<footer>` 放版权和备案信息。所有页面都遵循这个骨架，只是 main 内部布局不同。

<div class="demo"><div class="demo-layout">
	<div class="dl-row dl-dark">header 标题导航</div>
	<div class="dl-row dl-dark">nav 菜单链接</div>
	<div class="dl-row" style="height:30px">main 正文内容</div>
	<div class="dl-row dl-dark">footer 版权备案</div>
</div></div>

### 空白布局

不设宽度限制，内容紧贴浏览器左上角依次向下排列。适合极简笔记、草稿，对读者视线引导弱，阅读长文时行宽会随屏幕拉伸，不太舒服。

<div class="demo"><div class="demo-layout">
	<div class="dl-row" style="width:100%">正文内容占满整行</div>
	<div class="dl-row" style="width:100%">继续向下排列</div>
</div></div>

### 单栏布局

给内容区设置最大宽度（例如 720px），然后水平居中。文章始终在屏幕中间，两边留白。大多数博客、文档都用的这个，阅读体验稳定，不随屏幕宽度变化。

<div class="demo"><div class="demo-layout">
	<div class="dl-row" style="width:50%;margin:0 auto">内容居中，两边留白</div>
	<div class="dl-row" style="width:50%;margin:0 auto">宽度固定不随屏幕变</div>
</div></div>

### 多栏布局

页面分成两栏或三栏，通常是左侧导航、中间正文、右侧目录。适合知识库、文档站。三栏需要更宽（例如 1100px），在小屏幕上改为单列堆叠。

<div class="demo"><div class="demo-layout dl-flex">
	<div class="dl-col" style="width:20%">导航</div>
	<div class="dl-col" style="width:55%">正文内容区</div>
	<div class="dl-col" style="width:20%">目录</div>
</div></div>

### 博客布局

博客是单栏布局的典型应用：header 放博客名和菜单，main 中间是一条一条的文章卡片或文章列表，宽度 600-800px，footer 放版权。侧边栏可选，常见放标签云或最近文章。

<div class="demo"><div class="demo-layout">
	<div class="dl-row dl-dark">header</div>
	<div class="dl-row" style="width:65%;margin:0 auto">文章卡片 1</div>
	<div class="dl-row" style="width:65%;margin:0 auto">文章卡片 2</div>
	<div class="dl-row dl-dark">footer</div>
</div></div>

### 知识库布局

知识库是多栏布局的典型应用：header 放站点名，main 内部分三栏——左栏文章列表、中栏正文、右栏目录。宽度 1000-1200px，让三栏都能放得下。小屏幕时自动改为单列，导航在上、目录在下。

<div class="demo"><div class="demo-layout">
	<div class="dl-row dl-dark">header</div>
	<div class="dl-flex">
		<div class="dl-col" style="width:18%">文章列表</div>
		<div class="dl-col" style="width:58%">正文内容</div>
		<div class="dl-col" style="width:18%">目录</div>
	</div>
</div></div>

### 全屏英雄布局

首屏被一张大图或色块占满，中间只有一句大标题和少量文字，滚动后才出现正文。视觉冲击力强，适合作品集、产品页。缺点是首屏信息量低，读者要滚动才能看到内容。

<div class="demo"><div class="demo-layout">
	<div class="dl-row" style="height:44px;background:#d1d5db;display:flex;align-items:center;justify-content:center">大图 + 标题</div>
	<div class="dl-row">滚动后的正文</div>
</div></div>

### 卡片网格布局

内容切成一个个等宽卡片，按网格排列，每行 2-4 个。适合作品集、导航页、功能入口。卡片之间留空隙，鼠标悬停可以有轻微变化。小屏幕时自动减少每行数量。

<div class="demo"><div class="demo-layout">
	<div class="dl-flex" style="gap:4px">
		<div class="dl-col" style="flex:1">卡片</div>
		<div class="dl-col" style="flex:1">卡片</div>
		<div class="dl-col" style="flex:1">卡片</div>
	</div>
	<div class="dl-flex" style="gap:4px;margin-top:4px">
		<div class="dl-col" style="flex:1">卡片</div>
		<div class="dl-col" style="flex:1">卡片</div>
		<div class="dl-col" style="flex:1">卡片</div>
	</div>
</div></div>

### 时间轴布局

内容按时间顺序纵向排列，中间或一侧有一条竖线，每个节点是一个事件。适合经历、日志、项目里程碑。读者一眼看出先后顺序。

<div class="demo"><div class="demo-layout" style="position:relative;padding-left:20px">
	<div style="position:absolute;left:6px;top:0;bottom:0;width:2px;background:#111"></div>
	<div class="dl-row">● 事件一</div>
	<div class="dl-row">● 事件二</div>
	<div class="dl-row">● 事件三</div>
</div></div>

### 仪表盘布局

页面分成多个数据面板，每个面板独立显示一组信息（数字、图表、列表）。面板大小可以不同，重要的大、次要的小。适合数据展示、个人统计。

<div class="demo"><div class="demo-layout">
	<div class="dl-flex" style="gap:4px">
		<div class="dl-col" style="flex:2;height:24px">大面板</div>
		<div class="dl-col" style="flex:1;height:24px">小面板</div>
	</div>
	<div class="dl-flex" style="gap:4px;margin-top:4px">
		<div class="dl-col" style="flex:1;height:24px">小面板</div>
		<div class="dl-col" style="flex:2;height:24px">大面板</div>
	</div>
</div></div>

## 标题层级

### 一级标题

每篇文章只有一个一级标题，即文章标题本身，由页面自动渲染，正文里不再手写。

<div class="demo"><div class="demo-h1">文章标题示例</div></div>

### 二级标题

用 `##` 划分大章节，下方带一条细灰线。一篇文章 3-6 个为宜，标题用短语，不用句号结尾。

<div class="demo"><div class="demo-h2">章节标题示例</div></div>

### 三级标题

用 `###` 划分章节内的小节，带浅灰圆角背景。连续两个三级标题之间至少要有一段正文。

<div class="demo"><div class="demo-h3">小节标题示例</div></div>

### 四级标题

用 `####` 划分小节内的子项，下方带一条细灰线，字号小于三级标题。

<div class="demo"><div class="demo-h4">子项标题示例</div></div>

## 字体

本站全局使用思源黑体作为默认字体，标题、正文、列表、代码均统一。提供三种字体供选用。

### 思源黑体（默认）

无衬线黑体，笔画均匀，屏幕显示清晰，适合正文和标题。全站默认。

<div class="demo"><p class="demo-p" style="font-family:'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif">思源黑体：这是正文示例，Ag 123。字体清晰易读，适合屏幕显示。</p></div>

### 思源宋体

衬线宋体，笔画有粗细变化，适合大段文字阅读、印刷风格页面。

<div class="demo"><p class="demo-p" style="font-family:'Noto Serif SC','SimSun',serif">思源宋体：这是正文示例，Ag 123。衬线字体更有书卷气。</p></div>

### 微软雅黑

Windows 系统自带字体，无需加载网络字体，兼容性最好。

<div class="demo"><p class="demo-p" style="font-family:'Microsoft YaHei',sans-serif">微软雅黑：这是正文示例，Ag 123。系统自带，无需额外加载。</p></div>

## 文字大小

全站字号统一，各级元素有固定值，不需要自己调整。下表是实际渲染的数值，按从大到小排列。

### 一级标题 28px

文章最顶部的标题，由页面自动渲染，正文里不会出现。

<div class="demo"><div class="demo-h1">文章标题 28px</div></div>

### 二级标题 20px

用 `##` 写的大章节标题，下方带 2px 深灰线。

<div class="demo"><div class="demo-h2">二级标题 20px</div></div>

### 三级标题 15px

用 `###` 写的小节标题，浅灰圆角背景。字号和正文一样大，靠背景色区分层级。

<div class="demo"><div class="demo-h3">三级标题 15px</div></div>

### 四级标题 14px

用 `####` 写的子项标题，下方带 1px 浅灰线。

<div class="demo"><div class="demo-h4">四级标题 14px</div></div>

### 正文 15px

段落正文，行高 1.9，保证长段落阅读舒适。

<div class="demo"><p class="demo-p">正文 15px，行高 1.9。这是一段示例文字，展示正文字号和行距的实际效果。</p></div>

### 列表 15px

有序列表和无序列表的字号与正文一致，行高略紧（1.8）。

<div class="demo"><ul class="demo-ul"><li>列表项 15px</li><li>列表第二项</li></ul></div>

### 行内代码 13px

反引号包裹的代码片段，比正文小 2px，浅灰底衬托。

<div class="demo"><p class="demo-p">正文里的 <code>行内代码 13px</code> 和正文形成对比。</p></div>

### 小字说明 12px

用于布局示意图、占位框内的标注文字，最小字号，仅做辅助。

<div class="demo"><div class="demo-layout"><div class="dl-row">小字说明 12px</div></div></div>

### 字号差距逻辑

相邻层级的字号差控制在 1-5px 之间，避免跳级太大造成视觉断层：标题之间 4-8px 递进，正文与三级标题同号（靠背景区分），行内代码比正文小 2px。阅读时视线从上到下自然过渡。

## 正文与段落

正文直接写文字段落，一段只讲一个意思。段落之间空行分隔，段内不换行。句末用句号，列举停顿用顿号，分句用逗号。

行内的命令、文件名、代码片段用反引号包裹，例如 `npm run build`、`src/pages/`。

<div class="demo">
	<p class="demo-p">这是一段正文示例。每段只讲一个意思，段落之间空行分隔，句末用句号，读起来清楚明白。</p>
	<p class="demo-p">这是第二段。行内可以插入代码，例如 <code>git add .</code>、<code>npm run dev</code>。</p>
</div>

## 列表

### 无序列表

并列的要点用 `-` 列表，每条一个完整短句：

- 要点一：格式统一，标点齐全
- 要点二：每条长度尽量接近
- 要点三：不超过七条，多了就分组

<div class="demo">
	<ul class="demo-ul">
		<li>列表项一</li>
		<li>列表项二</li>
		<li>列表项三</li>
	</ul>
</div>

### 有序列表

有先后顺序的步骤用 `1.` 有序列表：

1. 先确定结构，再填内容
2. 写完通读一遍，删多余的词
3. 检查标题层级和图片链接

<div class="demo">
	<ol class="demo-ol">
		<li>第一步</li>
		<li>第二步</li>
		<li>第三步</li>
	</ol>
</div>

## 链接

### 基本写法

用 Markdown 语法 `[链接文字](URL)` 插入链接。链接文字直接描述指向的内容，不写「点击这里」，也不贴裸网址，读者看文字就知道要去哪。

<div class="demo">
	<p class="demo-p">正文中的<a href="https://example.com" target="_blank" rel="noopener">站外链接示例</a>，链接文字说明指向的内容。</p>
	<p class="demo-p">跳转到站内页面，例如<a href="/about">关于页</a>或<a href="/kb">知识库</a>。</p>
</div>

### 站内链接

地址用相对路径，以 `/` 开头，例如 `[关于页](/about)`、`[Astro 笔记](/kb/astro-basics)`。站内链接保持在当前窗口打开，不额外设置属性。

### 站外链接

地址写完整 URL。站外跳转会离开文章，统一用 HTML 写法并新窗口打开：

`<a href="https://example.com" target="_blank" rel="noopener">链接文字</a>`

`target="_blank"` 负责新窗口打开，`rel="noopener"` 必须带上，防止新页面拿到原页面控制权，是安全要求。

### 链接样式

全站链接不做蓝色高亮：文字颜色与正文一致，下方一条 1px 浅灰下划线（#9ca3af），偏移 2px，悬停不变色。白纸黑字风格下，链接靠下划线识别，不靠颜色跳脱。

<div class="demo"><p class="demo-p">链接<a href="https://example.com" target="_blank" rel="noopener">样式示例</a>：颜色同正文，浅灰细下划线。</p></div>

## 图片

图片文件统一放在 `public/images/kb/` 目录，命名为 `文章id-序号.jpg`，例如 `writing-style-1.jpg`。

正文中这样插入：`![图片说明](/images/kb/writing-style-1.jpg)`

`图片说明` 必须写，用一句话说明图片内容。图片下方可紧跟一段小字说明。

<div class="demo"><div class="demo-img">图片示例区域</div></div>

## 视频

B 站视频不用手写 iframe，在文章 frontmatter 里加一行 `video: 'BV号'` 即可，视频板块自动出现在文章最顶部，默认只显示封面，点击后才加载播放器。

不需要视频的文章不写这个字段。封面可选：加 `cover: '/images/kb/xxx.jpg'` 用自定义封面，不加则用默认占位图。

<div class="demo"><div class="demo-video">▶ 视频封面示例（点击后加载播放器）</div></div>
