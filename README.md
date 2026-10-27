# 男童全球招商运营服务站

一个面向商家的静态网站首版，覆盖欧区、澳新、拉美、东南亚。采用 HTML + CSS + JavaScript，可直接部署到 GitHub Pages，无需安装构建工具或服务器。

## 文件结构

```text
boy-kids-global-service/
├── index.html
├── style.css
├── script.js
├── README.md
└── data/
    ├── regions.json
    └── marketing-calendar.csv
```

## 本地预览

直接双击 `index.html` 即可查看大部分页面功能。也可以使用 VS Code 的 Live Server 扩展进行本地预览。

## 部署到 GitHub Pages

1. 登录 GitHub，点击右上角 `+` → `New repository`。
2. Repository name 填写 `boys-global-service`（或其他未被占用的名称）。
3. 选择 `Public`，点击 `Create repository`。
4. 在仓库页面点击 `Add file` → `Upload files`。
5. 将 ZIP 解压，把 `index.html`、`style.css`、`script.js`、`README.md` 和 `data` 文件夹里的文件上传到仓库根目录。**不要只上传 ZIP 文件。**
6. 点击 `Commit changes` 保存。
7. 打开仓库 `Settings` → `Pages`。
8. 在 `Build and deployment` 中，`Source` 选择 `Deploy from a branch`；`Branch` 选择 `main`，目录选择 `/ (root)`，点击 `Save`。
9. 等待部署完成，通常几分钟内可在 Pages 页面看到访问链接，格式一般为 `https://你的用户名.github.io/boys-global-service/`。
10. 打开链接检查手机和电脑显示。后续修改文件并提交后，网站会自动重新部署。

## 后续维护建议

- 修改页面文字：编辑 `index.html`。
- 修改配色、字号和布局：编辑 `style.css`。
- 修改筛选、区域说明、日历数据：编辑 `script.js`。
- 维护原始资料：编辑 `data/regions.json` 和 `data/marketing-calendar.csv`。
- 网站当前不连接数据库，访客搜索与筛选在浏览器端完成；页面中内容是可编辑的初始框架，不应视为实时平台数据或法律意见。

## 重要说明

区域趋势、营销节点和品类建议为首版运营框架。上线对外使用前，请按目标国家、站点数据、平台规则及最新法规逐项核实。儿童产品资质要求取决于销售市场、产品类型与适用年龄。
