---
title: 地图嵌入网站
category: 工作
summary: 静态地图、iframe 嵌入、Leaflet 交互地图三种做法，含可直接复制的代码样例与选型对比。
order: 7
tags: ['地图', '前端']
---

## 1-静态地图图片

向地图服务商请求一张带标记的图片，前端只用一个 `<img>` 展示，零 JavaScript。

### 请求规则

高德静态地图接口的参数拼在 URL 上：

| 参数 | 含义 | 示例 |
|------|------|------|
| location | 中心点经纬度 | 115.858200,28.682800 |
| zoom | 缩放级别 3~17 | 14 |
| size | 图片尺寸，宽\*高 | 600\*400 |
| markers | 标记点，格式 样式,,编号:经纬度 | mid,,A:115.858200,28.682800 |
| key | 控制台申请的 Web 服务 Key | 你的Key |

### 代码样例

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

### 适用场景

- 只要「看一眼位置」，不需要拖拽缩放
- 追求首屏速度，不想加载任何第三方脚本
- 缺点：每次换位置要改 URL，缩放也只能改参数

## 2-iframe 嵌入

把地图服务商的网页整页嵌进来，不需要申请 Key。

### 代码样例

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

### 懒加载改造

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

### 适用场景

- 不想申请 Key，复制粘贴就能用
- 能接受样式不可定制（对方页面自带边框、按钮、底栏）

## 3-Leaflet 交互地图

开源库 + 开放地图数据，可拖拽缩放、加多个标记、画路线，不需要商业 Key。

### 代码样例

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

### 适用场景

- 需要标记若干地点、显示路线、点击交互
- 体积约 40KB，比高德 JS SDK 轻
- 缺点：OSM 瓦片服务器在国外，国内首屏偏慢；换天地图瓦片需另申请 Key

## 4-三种方法对比

| 方法 | 是否需要 Key | 交互能力 | 首屏成本 | 样式可控 |
|------|-------------|---------|---------|---------|
| 静态图片 | 需要（Web 服务 Key） | 无，只能看 | 最低，一张图 | 只能选图片尺寸 |
| iframe 嵌入 | 不需要 | 有，但受对方页面限制 | 较高，加载整页 | 低 |
| Leaflet | 不需要（OSM）/ 需要（天地图） | 完整 | 中等，40KB 脚本 | 完全可控 |

## 5-注意事项

- **坐标系**：高德、腾讯用 GCJ-02，OSM、Leaflet 默认 WGS-84。把手机 GPS 拿到的坐标直接喂给高德会偏移几百米，反之亦然。混用前先做坐标转换。
- **Key 保管**：前端暴露的 Key 请在高德控制台限制域名白名单，否则容易被盗刷配额。
- **懒加载**：除静态图片外，其余两种都建议加 `loading="lazy"` 或 Facade 点击加载。
- **备案**：iframe 引入境内地图服务本身不需要额外备案，但自建瓦片服务需要。
