---
title: 工作基础概念
category: 工作
summary: 与工作相关的基础概念与实践笔记，包括产业与职业分类、职业发展、招聘信息，以及系统安装、Linux 网络、Git、Astro 等技术内容。
order: -3
tags: [工作, 经济, 概念, 系统, 网络, Git, Astro]
---

## 经济与产业

### GDP

国内生产总值（Gross Domestic Product），指一个国家或地区在一定时期内（通常为一年）生产的全部最终产品和服务的市场价值总和。是衡量国家经济规模的核心指标。

### 第一产业

农林牧渔业，包括农业、林业、畜牧业、渔业和农、林、牧、渔专业及辅助性活动。直接从自然界获取产品的产业。

### 第二产业

工业和建筑业。包括采矿业、制造业、电力/热力/燃气及水生产和供应业、建筑业。对自然资源进行加工和再加工的产业。

### 第三产业

服务业，包括批发和零售业、交通运输/仓储和邮政业、住宿和餐饮业、信息传输/软件和信息技术服务业、金融业、房地产业、租赁和商务服务业、教育、卫生和社会工作、文化/体育和娱乐业等。不直接生产物质产品，而是提供各类服务的产业。

## 职业分类

### 中国国家职业分类大典

由人力资源和社会保障部、国家市场监督管理总局、国家统计局联合发布，是我国职业分类的权威标准。现行版本为 2022 年修订版，将职业分为八大类：

1. 党的机关、国家机关、群众团体和社会组织、企事业单位负责人
2. 专业技术人员
3. 办事人员和有关人员
4. 社会生产服务和生活服务人员
5. 农、林、牧、渔业生产及辅助人员
6. 生产制造及有关人员
7. 军人
8. 其他从业人员

每个大类下再划分中类、小类和细类（职业），构成完整的职业分类体系。

## 职业发展

### 招聘信息

#### AI / 新兴科技公司

- [DeepSeek 运维工程师（社会招聘）](https://app.mokahr.com/social-recruitment/high-flyer/140576#/job/27f0675d-5ffd-48d9-a36c-f340a443dc8b) — 全球知名 AI 公司，与当前运维岗位直接相关，收藏备用。
- [OpenAI Careers](https://openai.com/careers) — 官方招聘入口，搜索 SRE / Operations / Infrastructure 相关岗位。

#### 一线互联网大厂

- [腾讯招聘](https://careers.tencent.com) — 搜索「运维工程师」「SRE」「系统工程师」。
- [字节跳动招聘](https://jobs.bytedance.com) — 抖音/今日头条母公司，搜索「运维」「SRE」「基础架构」。
- [美团招聘](https://zhaopin.meituan.com) — 搜索「运维工程师」「系统运维」。
- [滴滴招聘](https://campus.didiglobal.com) — 搜索「运维」「SRE」「基础设施」。
- [百度招聘](https://talent.baidu.com) — 搜索「运维工程师」「系统工程师」。
- [网易招聘](https://hr.163.com) — 搜索「运维」「系统运维」「游戏运维」。
- [京东招聘](https://zhaopin.jd.com) — 搜索「运维工程师」「SRE」。

#### 硬件 / 通信 / 综合科技

- [华为招聘](https://career.huawei.com) — 搜索「运维」「网络工程师」「系统工程师」。
- [小米招聘](https://hr.xiaomi.com) — 搜索「运维工程师」「SRE」「系统运维」。

#### 外企 / 全球化公司

- [微软招聘](https://careers.microsoft.com) — 搜索「Site Reliability Engineer」「Operations」「Infrastructure」。

### 求职技巧

待补充。

## 技术笔记

### 系统安装

#### BIOS 与 UEFI

BIOS 是传统固件接口，UEFI 是新一代替代方案，支持更大磁盘、图形界面、安全启动。

开机按 Delete/F2 进入 BIOS，在 Boot 菜单设置启动顺序，选择 U 盘或光驱优先。

#### 磁盘分区

MBR 最大支持 2TB 磁盘、4 个主分区；GPT 支持更大磁盘、更多分区，推荐使用。

常见方案：系统盘(C:)、数据盘(D:)，Linux 下分 /、/home、swap。

#### 准备启动盘

用 Rufus 或 Ventoy 将 ISO 镜像写入 U 盘。

#### 安装系统

从 U 盘启动，按向导选择分区、设置用户名密码、等待安装完成。

#### 驱动安装

安装完成后检查设备管理器，安装显卡、网卡、声卡等驱动。

### Linux 网络

#### 查看 IP 地址

`ifconfig` 或 `ip addr` 查看网卡 IP 地址信息。

#### 查看路由

`route -n` 或 `ip route` 查看路由表。

#### ping 测试连通性

`ping 目标IP` 测试与目标主机的网络连通性。

#### 端口测试

`telnet 目标IP 端口` 或 `nc -zv 目标IP 端口` 测试端口是否开放。

#### 查看 DNS

`nslookup 域名` 或 `dig 域名` 查询域名解析结果。

#### 修改 DNS

编辑 `/etc/resolv.conf` 添加 `nameserver 8.8.8.8`。

#### 防火墙

`iptables -L -n` 查看当前防火墙规则。

`iptables -A INPUT -p tcp --dport 80 -j ACCEPT` 开放 80 端口。

### Git

Git 是一个分布式版本控制系统，用于跟踪文件变更、协作开发、回滚历史版本。

#### 初始化仓库

`git init` 在当前目录创建一个 Git 仓库。

#### 添加文件

`git add 文件名` 将文件加入暂存区，`git add .` 添加所有变更。

#### 提交变更

`git commit -m "描述信息"` 将暂存区的变更提交到仓库。

#### 分支管理

`git branch` 列出所有本地分支。

`git checkout 分支名` 切换到指定分支。

`git merge 分支名` 将指定分支合并到当前分支。

#### 远程仓库

`git clone 仓库地址` 从远程克隆仓库到本地。

`git push origin 分支名` 将本地提交推送到远程。

`git pull` 从远程拉取最新变更并合并。

### Astro

Astro 是一个面向内容的静态站点生成器，核心特点是"零 JavaScript 默认"——页面只加载必要的 HTML 和 CSS，交互按需引入。

#### 组件

`.astro` 文件是 Astro 的基本单元，由三部分组成：frontmatter（代码栅栏）、HTML 模板、style 标签。

#### 路由

`src/pages/` 目录下的文件自动成为路由：`index.astro` → `/`，`about.astro` → `/about`。

#### 布局

布局组件放在 `src/layouts/` 下，通过 `<slot />` 接收页面内容，实现多页面共用外壳。

#### 常用命令

`npm run dev` 启动开发服务器，支持热更新。

`npm run build` 生成静态文件到 `dist/` 目录。

`npm run preview` 本地预览构建产物。
