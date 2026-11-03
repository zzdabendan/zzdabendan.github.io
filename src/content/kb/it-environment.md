---
title: IT 环境搭建笔记
category: 生活
summary: 个人电脑硬件、驱动、系统、软件、用户配置与环境搭建记录，含网站架构和地图嵌入方案。
order: 14
---

## 1-硬件安装

### 工具种类

- 思考
- 身体行动
- 口头语言
- 印刷
- 电报
- 广播
- 电视
- 数字媒体
- 互联网
- 人工智能 AI
- 文档 WPS、表格 Excel、演示 PPT、思维导图、流程图、图像处理 PS、视频剪辑 PR、AE、达芬奇
- Web1.0：HTML、CSS、科研人员共享资料、极客个人博客网站、论坛网站、教育网站、电商网站、搜索引擎
- Web2.0：权威单位网站、娱乐网站、社交网站、工具网站、自媒体平台
- Web3.0：

### 电脑安装教程

- 硬件茶谈装机视频：https://www.bilibili.com/video/BV1BG4y137mG/
- 喵喵折 2025 年故障视频：https://www.bilibili.com/video/BV17WZ4YsEiX
- 无法进行磁盘分区：关闭 BitLocker 正在等待激活：https://www.cnblogs.com/bupang/p/18748328
- Win10/Win11 系统 BitLocker 正在等待激活如何解决：https://zhuanlan.zhihu.com/p/684331145

### 我的设备

- CPU
- 内存
- SSD 系统盘
- HDD 资料盘
- HDD 娱乐盘
- HDD 备份盘
- HDD 冷备盘
- USB 盘 1
- USB 盘 2
- USB 盘 3
- 主板
- 电源
- 显卡
- 网卡
- 声卡
- 摄像头
- 显示器
- 麦克风
- 扬声器
- 耳机音箱
- 键盘鼠标

### 我的存储

- 手机内存 1
- 手机内存 2
- 大疆内存

### 我的虚拟机列表

- 路由器
- 宿主机 VMWARE
- 虚拟服务器：部署 WDS MDT
- 虚拟服务器：更新 WSUS
- 虚拟服务器：域控 ADDC
- 虚拟客户机：WORK1_HTML（DHCP）
- 虚拟客户机：WORK2_SSXHC（DHCP）
- 虚拟客户机：WORK3_ENSP（DHCP）
- 虚拟客户机：TEST1_Win10（DHCP）
- 虚拟客户机：TEST2_Win11（DHCP）
- 虚拟客户机：Redhat Linux（DHCP）
- 虚拟客户机：Centos Linux（DHCP）
- 虚拟客户机：Rocky Linux（DHCP）
- 虚拟客户机：Fedora Linux（DHCP）
- 虚拟客户机：Ubuntu Linux（DHCP）
- 虚拟客户机：Debian Linux（DHCP）
- 虚拟服务器：网站 APACHE
- 虚拟服务器：堡垒机 JUMPSERVER
- 虚拟服务器：监控 ZABBIX
- 虚拟服务器：博客 WORDPRESS
- 虚拟服务器：博客 ASTRO
- 虚拟服务器：知识库 WIKIJS
- 虚拟服务器：存储 FNOS2
- 虚拟服务器：存储 FNOS1
- 虚拟服务器：虚拟机 PVE

### 我的云主机列表

- 阿里云 ECS 云主机
- Github zzdabendan
- Github danbendada
- Gitee danbendada
- Gitee zzdabendan

## 2-硬件驱动

- 驱动安装
- Windows 系统更新
- 安全补丁更新
- 驱动自动更新
- 可选更新

- 硬件品牌官网安装驱动
- 芯片：AMD 驱动
- 显卡：NVIDIA 驱动
- 品牌：七彩虹
- 品牌：微星主板 B450I 微星小飞机
- 品牌：华硕 B650M 重炮手

- 第三方驱动
- 360 驱动
- 驱动总裁
- 等等

## 3-系统安装

- 系统安装方式
- 第 1 种：微软官方 U 盘制作工具 + 刻录制作工具
- 第 2 种：Ventoy 工具 / PE 工具 / 克隆（https://www.bilibili.com/video/BV1DJ411D79y）
- 第 3 种：PXE 网络安装，WDS + MDT 安装
- 第 4 种：封装系统，应答文本自动化安装

## 4-系统配置

- Windows11 家用电脑配置
- 初始化密钥
- 允许协议
- 添加密码 password
- 网络配置 IP 地址
- 系统激活（使用官方许可）
- 修改计算机名
- 壁纸
- 桌面快捷方式：回收站、此电脑、网络、用户文件、控制面板
- 文件管理器快捷方式
- 配置任务栏
- 修改多窗口设置
- 修改多显示器布局
- 设置显示超时时间
- 设置电源睡眠时间
- 任务计划程序自动关机设置
- 修改鼠标设置：精确指向、滚轮速度、移动速度
- 安装微软运行库 Microsoft Visual C++ Redistributable：https://aka.ms/vc14/vc_redist.x64.exe
- 清理 C 盘空间：https://cloud.tencent.com/developer/article/2006519
- 重装初始化配置：https://cloud.tencent.com/developer/article/2006558

## 5-软件安装

- 部分软件静默安装命令
- `app.exe /S`
- `7z2601-x64.msi`
- `WPS_Setup.exe /s /v/qn`
- `W.P.S.14252.20.2871.exe /S -agreelicense`
- `Chrome /silent /install`
- 常用软件静默安装参数：https://cloud.tencent.com/developer/article/1538138
- WPS 静默安装参数：https://www.bilibili.com/read/cv33291303/?opus_fallback=1
- 未知命令：`start /wait wps.exe /S -agreelicense "/D=D:\WPS"`

### Chrome 组策略模板

Chrome 的组策略配置项不是独立软件，而是 ADMX/ADML 模板文件，导入 Windows 组策略编辑器后才会出现 Chrome 选项。

- 下载：Google 官方策略模板直链 https://dl.google.com/dl/edgedl/chrome/policy/policy_templates.zip
- 版本验证：解压后查看包内 `VERSION` 文件，确认版本号与当前 Chrome 稳定版一致
- 备用入口：直链失效时前往 Chrome 企业版下载页 https://chromeenterprise.google/browser/download/ ，文件类型选 Policy Templates
- 解压后进入 `windows\admx` 目录
- 复制 `chrome.admx`、`google.admx` 到 `C:\Windows\PolicyDefinitions\`
- 复制语言文件 `chrome.adml`（`zh-CN` 或 `en-US` 文件夹内）到 `C:\Windows\PolicyDefinitions\zh-CN\`
- 生效：打开 `gpedit.msc`，「计算机配置」→「管理模板」→ Google / Google Chrome

注意事项

- 优先用 ADMX 模板（Win7 及以上、域环境），不要与旧的 ADM 模板同时混用
- 域环境统一部署时，文件放入中央存储 `\\域名\SYSVOL\域名\Policies\PolicyDefinitions`

## 6-用户配置

### 我的文件

- 1-硬件
- 2-驱动
- 3-系统
- 4-软件
- 5-配置
- 6-数据
- 1-临时文件
- 0-归档文件
- 生活 1-地图
- 生活 2-时间
- 任务-1-作息
- 任务-2-身体
- 任务-3-家务
- 任务-4-娱乐
- 任务-5-学识
- 任务-6-职业

### 我的作品

- 记事本
- 画图
- 云笔记
- WPS
- HTML
- 思路格式化 1～14
- Astro
- TikkyWiki
- WordPress
- Wiki.Js
- Obsidian

## 7-网站部署

本地构建完成后，用 scp 把 `dist` 目录同步到云主机的网站根目录。

```bash
scp -r C:\Users\WORK2\Desktop\astro-homepage\dist\* root@服务器IP:/var/www/html/
```

- 本地侧为 Astro 构建输出目录 `dist`，远端侧为 Nginx 站点根目录 `/var/www/html/`
- `-r` 递归传输，`*` 表示传输目录内的全部内容而非目录本身

### 手动同步流程

目前没有接入自动部署，线上阿里云 ECS 的站点文件靠手动四步同步。顺序不要打乱：先确认源码，再构建，再清空旧文件，最后上传并修正权限。

**1. 确认源码完整**

在虚拟机 work2 上打开项目文件夹，确认本次要展示的内容都已经写进源码：

- 页面与组件：`src/pages/`、`src/components/`
- 文章数据：`src/content/`
- 静态资源：`public/`
- 配置：`astro.config.mjs`、`src/content.config.ts`

改完先本地预览，确认页面、导航、文章链接都正常，再进入构建。源码没确认就构建，等于把问题直接推到线上。

**2. 用 astro 构建 dist**

打开 cmd，进入项目文件夹后执行构建：

```bat
cd /d C:\Users\WORK2\Desktop\astro-homepage
npx astro build
```

构建成功后项目根目录会生成 `dist`，里面是可直接部署的静态文件。构建报错时不要继续后面的步骤，先修错误。

**3. SSH 登录 ECS 并删除旧文件**

用 SSH 工具登录阿里云 ECS，进入网站根目录，清掉上一次的旧产物，避免旧文章和旧资源残留：

```bash
ssh root@121.199.57.184
cd /var/www/html
ls
rm -rf ./*
```

删除前一定先 `ls` 确认当前目录确实是 `/var/www/html`。不要在根目录或其他目录执行 `rm -rf`。如果只想清空内容但保留目录本身，用 `rm -rf ./*`；不要删除 `/var/www/html` 这个目录。

**4. 上传 dist 并修正权限**

回到 Windows，在 cmd 里把本地产物上传到网站根目录：

```bat
scp -r C:\Users\WORK2\Desktop\astro-homepage\dist\* root@121.199.57.184:/var/www/html/
```

上传完成后浏览器访问 `http://121.199.57.184` 验证。如果出现 403、白屏或样式缺失，多半是权限或属主不对，登录服务器执行：

```bash
chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \;
find /var/www/html -type f -exec chmod 644 {} \;
```

- `chown` 的用户按实际 Web 服务决定：Debian/Ubuntu 常见 `www-data`，CentOS 常见 `nginx` 或 `apache`
- 目录必须是可进入权限（755），文件只需可读（644）
- 若系统启用了 SELinux，还需执行 `restorecon -Rv /var/www/html`

最后刷新页面确认首页、文章页和静态资源都能正常加载，这一轮同步才算完成。

## 8-网站架构

### 技术选型

- **框架**：Astro 6（静态站点生成器，零 JS 运行时，构建后纯 HTML/CSS）
- **内容管理**：Astro Content Collections（`src/content.config.ts` 定义集合结构）
- **部署**：GitHub Pages + GitHub Actions（自动构建部署）
- **样式**：原生 CSS（无 Tailwind/UnoCSS，保持极简）
- **字体**：思源黑体（Noto Sans SC）为主，思源宋体、微软雅黑备选

### 文件结构

```
src/
├── layouts/
│   └── BaseLayout.astro      # 唯一页面骨架（html/head/body）
├── components/
│   ├── Nav.astro             # 顶部导航（两级菜单 + 移动端折叠）
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

### 布局系统

全站只有一个 `BaseLayout.astro`，负责：

- `<html><head><body>` 骨架
- 全局 CSS 变量（`--text`、`--muted`、`--line`、`--content-width`）
- 全局字体、h1 基线样式
- 导航栏 + 页脚渲染

**单栏 vs 三栏**：不单独抽离布局文件，只在内容区通过 CSS 实现差异。

- 单栏页面：`.container` 默认 `max-width: 720px`（正文阅读宽度）
- 三栏知识库：页面内覆盖 `--content-width: 1200px`，`.kb-layout` 用 `grid-template-columns: 220px 1fr 200px`

### 组件设计

| 组件 | 职责 | 样式特点 |
|------|------|----------|
| Nav | 导航链接渲染、当前页高亮、移动端折叠 | 纯白背景、sticky 顶部 |
| ArticleBody | Markdown 正文样式（标题层级、段落、列表、代码块） | `:global()` 作用域，命中动态渲染 DOM |
| ArticleList | 按分组列出全部知识库文章，当前篇高亮 | 浅灰背景 `#f2f2f2`、细滚动条 |
| Toc | 从 Markdown headings 生成目录，支持二三四级缩进 | 透明背景、隐藏滚动条 |
| VideoBili | B 站视频 Facade 模式：封面占位，点击加载 iframe | 避免页面初始加载第三方资源 |

### 内容管理

**知识库**（`src/content/kb/`）：

- 每篇文章一个 `.md` 文件
- frontmatter 必填：`title`、`category`（生活/学校/工作）、`summary`、`order`（分组内排序）
- 可选：`video`（B 站 BV 号）、`cover`（自定义封面）

**文章**（`src/content/posts/`）：

- 博客模式，按 `date` 倒序排列
- frontmatter 必填：`title`、`summary`、`date`

### 部署流程

1. 本地 `git push` 到 `main` 分支
2. GitHub Actions 自动触发（`.github/workflows/deploy.yml`）
3. 构建：`npm run build` → 生成 `dist/` 静态文件
4. 部署：推送 `dist/` 到 GitHub Pages
5. 特性：npm 依赖缓存、新推送自动取消旧任务

阿里云 ECS 不在这条自动链路里，仍按上一节的手动同步流程更新。

### 设计规范

- **配色**：内容区纯白 `#ffffff`，页脚/侧栏浅灰 `#f2f2f2`，导航纯白，整体黑白灰
- **宽度**：正文子页面 720px，首页 1100px，知识库 1200px（中栏 680px 对齐子页面行宽）
- **标题层级**：h1 28px / h2 20px / h3 15px / h4 14px，全站统一
- **间距**：h1 下间距 32px（无摘要）或 8px→摘要→24px（带摘要），数值只在 BaseLayout 声明一次

### 后续扩展方向

- 搜索：接入 `pagefind` 静态搜索（零后端）
- RSS：`@astrojs/rss` 生成订阅源
- 阅读时间：正文字数 ÷ 400 估算
- 标签：frontmatter 加 `tags` 字段，支持筛选

## 9-地图嵌入

### 1-静态地图图片

向地图服务商请求一张带标记的图片，前端只用一个 `<img>` 展示，零 JavaScript。

**请求规则**

高德静态地图接口的参数拼在 URL 上：

| 参数 | 含义 | 示例 |
|------|------|------|
| location | 中心点经纬度 | 115.858200,28.682800 |
| zoom | 缩放级别 3~17 | 14 |
| size | 图片尺寸，宽\*高 | 600\*400 |
| markers | 标记点，格式 样式,,编号:经纬度 | mid,,A:115.858200,28.682800 |
| key | 控制台申请的 Web 服务 Key | 你的Key |

**代码样例**

```html
<img
  src="https://restapi.amap.com/v3/staticmap?location=115.858200,28.682800&zoom=14&size=600*400&markers=mid,,A:115.858200,28.682800&key=你的Key"
  alt="南昌位置"
  width="600"
  height="400"
  loading="lazy"
/>
```

图片外包一层链接，点击可跳到高德网页版看详情：

```markdown
[![南昌位置](地图URL)](https://uri.amap.com/marker?position=115.858200,28.682800&name=南昌)
```

**适用场景**

- 只要「看一眼位置」，不需要拖拽缩放
- 追求首屏速度，不想加载任何第三方脚本
- 缺点：每次换位置要改 URL，缩放也只能改参数

### 2-iframe 嵌入

把地图服务商的网页整页嵌进来，不需要申请 Key。

**代码样例**

```html
<iframe
  src="https://uri.amap.com/marker?position=115.858200,28.682800&name=南昌&src=mypage&coordinate=gaode&callnative=0"
  width="600"
  height="400"
  style="border:0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

**懒加载改造**

iframe 会加载对方完整的页面资源，直接用会拖慢首屏。可以先渲染占位块，点击后再插入 iframe：

```html
<div class="map-facade" data-src="https://uri.amap.com/marker?position=115.858200,28.682800&name=南昌">
  <button type="button">点击加载地图</button>
</div>

<script is:inline>
  document.querySelectorAll('.map-facade').forEach((box) => {
    box.querySelector('button').addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = box.dataset.src;
      frame.width = '600';
      frame.height = '400';
      frame.style.border = '0';
      frame.loading = 'lazy';
      box.replaceChildren(frame);
    });
  });
</script>
```

注意在 Astro 里内联脚本必须加 `is:inline`，否则会被打包成模块导致作用域隔离、点击无响应。

**适用场景**

- 不想申请 Key，复制粘贴就能用
- 能接受样式不可定制（对方页面自带边框、按钮、底栏）

### 3-Leaflet 交互地图

开源库 + 开放地图数据，可拖拽缩放、加多个标记、画路线，不需要商业 Key。

**代码样例**

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<div id="map" style="height:400px;border:1px solid #e5e7eb;border-radius:3px"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script is:inline>
  const map = L.map('map').setView([28.6828, 115.8582], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);
  L.marker([28.6828, 115.8582]).addTo(map).bindPopup('南昌');
</script>
```

多个标记依次 `L.marker([纬度, 经度]).addTo(map).bindPopup('名称')` 追加即可；连线用 `L.polyline([...])`。

**适用场景**

- 需要标记若干地点、显示路线、点击交互
- 体积约 40KB，比高德 JS SDK 轻
- 缺点：OSM 瓦片服务器在国外，国内首屏偏慢；换天地图瓦片需另申请 Key

### 4-三种方法对比

| 方法 | 是否需要 Key | 交互能力 | 首屏成本 | 样式可控 |
|------|-------------|---------|---------|---------|
| 静态图片 | 需要（Web 服务 Key） | 无，只能看 | 最低，一张图 | 只能选图片尺寸 |
| iframe 嵌入 | 不需要 | 有，但受对方页面限制 | 较高，加载整页 | 低 |
| Leaflet | 不需要（OSM）/ 需要（天地图） | 完整 | 中等，40KB 脚本 | 完全可控 |

### 5-注意事项

- **坐标系**：高德、腾讯用 GCJ-02，OSM、Leaflet 默认 WGS-84。把手机 GPS 拿到的坐标直接喂给高德会偏移几百米，反之亦然。混用前先做坐标转换。
- **Key 保管**：前端暴露的 Key 请在高德控制台限制域名白名单，否则容易被盗刷配额。
- **懒加载**：除静态图片外，其余两种都建议加 `loading="lazy"` 或 Facade 点击加载。
- **备案**：iframe 引入境内地图服务本身不需要额外备案，但自建瓦片服务需要。

