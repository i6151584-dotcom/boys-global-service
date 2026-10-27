# 男童招商运营服务站（侧边栏改版）

## 文件
- `index.html`：页面结构与栏目内容
- `style.css`：桌面端左侧固定导航、响应式布局与视觉样式
- `script.js`：移动端导航、搜索、热销款筛选、营销日历筛选、复制按钮与尺码清单
- `data/`：原有区域与营销日历数据参考文件

## 更新到 GitHub Pages
1. 解压 ZIP。
2. 打开现有仓库 `boys-global-service`。
3. 将解压后 `boy-kids-global-service` 文件夹里的 `index.html`、`style.css`、`script.js` 上传并覆盖同名文件。
4. 如果网页端不方便覆盖，可进入同名文件后点铅笔编辑，或删除旧文件后重新上传。
5. `data` 文件夹和 `README.md` 可以保留；本版日历数据由 `script.js` 内置驱动，旧 CSV 不影响显示。
6. 等待 GitHub Pages 自动部署，再刷新原网址；如显示旧页面，可强制刷新（Windows：Ctrl+F5）。

## 内容维护提示
- 联系微信目前显示为 `Miqianyaya`，如需更换，编辑 `index.html` 搜索该字符串。
- 热销款、趋势元素和视觉参考里的图形是示意占位。请替换为有使用权限、并已核实的真实商品图和数据。
- 资质与税务模块仅为核对框架，不构成法律、税务或认证意见。正式使用前请按目标市场、商品和主体情况核实最新要求。
- 如需补充近期咨询，在 `index.html` 的 `#faq` 区域复制一个 `<details class="faq-item">...</details>` 模块即可。
