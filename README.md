# dynamic-display

一个面向自动化日报的静态弹幕展示页。

当前结构：

- `index.html`：封面页和“观看今日弹幕”入口
- `app.js`：弹幕播放、详情联动、手动打开逻辑
- `styles.css`：页面与弹幕样式
- `daily-briefing-data.js`：自动化每日生成的数据快照

使用方式：

1. 自动化先更新 `daily-briefing-data.js`
2. 打开 `index.html`
3. 点击页面主按钮“观看今日弹幕”

补充说明：

- 默认不会自动弹出弹幕
- 如果确实需要直接开播，可在地址后追加 `?autoplay=1` 或使用 `#live`
- 自动化通常只需要改 `daily-briefing-data.js`，展示页主体无需每天改动
