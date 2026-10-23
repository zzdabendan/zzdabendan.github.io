---
title: IT 环境搭建笔记
category: 工作
summary: 个人电脑硬件、驱动、系统、软件、用户配置的搭建记录与设备清单。
order: 6
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

- 下载：Google 官方策略模板压缩包 `policy_templates.zip`，或 Chrome 企业版捆绑包
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
