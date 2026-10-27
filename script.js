const regionDetails = {
  "欧区": "首轮可从基础 T 恤、卫衣、长裤、季节外套与节庆主题切入。欧区各国气候、尺码习惯、标签和合规要求存在差异，建议按国家拆分商品计划并逐项核对。",
  "澳新": "结合南半球季节安排上新节奏，可重点评估轻薄 T 恤、短裤、户外休闲款及防晒相关需求。澳大利亚与新西兰仍需分别核对消费偏好、季节与适用要求。",
  "拉美": "先按国家拆分市场，不宜将拉美视为完全一致的单一市场。可测试印花 T 恤、短袖套装、休闲短裤等轻薄品类，并用实际点击、转化与价格带表现验证机会。",
  "东南亚": "热带气候下可关注轻薄、透气、易打理的短袖、短裤和薄款套装；同时结合各国电商成熟度、当地节庆与平台数据调整品类结构。"
};
const calendarEvents = [
  {month:1,date:"1月",name:"新年 / 暑期穿搭",regions:["澳新","拉美","东南亚"],products:"轻薄上装、短裤、日常套装",action:"结合当地天气测试轻薄款"},
  {month:2,date:"2月",name:"开学季（部分市场）",regions:["澳新","拉美","东南亚"],products:"基础 T 恤、长裤、日常套装",action:"按当地开学时间规划上新"},
  {month:4,date:"4月",name:"春夏换季 / 复活节（部分市场）",regions:["欧区","澳新"],products:"春季外套、主题上装、套装",action:"核对当地节日日期与需求"},
  {month:6,date:"6月",name:"夏季 / 户外活动",regions:["欧区","拉美","东南亚"],products:"T 恤、短裤、轻薄运动款",action:"突出舒适、透气与搭配性"},
  {month:7,date:"7月",name:"暑期 / 夏季促销",regions:["欧区","澳新","拉美","东南亚"],products:"基础款、多件装、休闲套装",action:"观察站点活动与历史销售数据"},
  {month:8,date:"8月",name:"返校季（部分市场）",regions:["欧区","拉美","东南亚"],products:"基础上装、长裤、外套",action:"按国家校历提前准备货盘"},
  {month:10,date:"10月",name:"万圣节",regions:["欧区"],products:"主题印花、派对服饰、配件搭配",action:"提前准备主题设计并核对知识产权"},
  {month:11,date:"11月",name:"黑五 / 网购促销季",regions:["欧区","澳新","拉美","东南亚"],products:"基础款、多件装、礼赠型商品",action:"核对平台活动节奏、库存与价格"},
  {month:12,date:"12月",name:"圣诞节 / 年末礼赠",regions:["欧区","澳新","拉美","东南亚"],products:"节庆图案、套装、礼赠方向",action:"按国家气候区分厚薄款并提前备货"}
];
const regionColors = {"欧区":"#246cf5","澳新":"#16865e","拉美":"#e87325","东南亚":"#7554e8"};
const calendarBody = document.getElementById("calendarBody");
const calendarRegion = document.getElementById("calendarRegion");
const calendarMonth = document.getElementById("calendarMonth");
const calendarCount = document.getElementById("calendarCount");

function renderCalendar(){
  const r = calendarRegion.value, m = calendarMonth.value;
  const rows = calendarEvents.filter(e => (r === "全部" || e.regions.includes(r)) && (m === "全部" || String(e.month) === m));
  calendarCount.textContent = `共 ${rows.length} 个节点`;
  calendarBody.innerHTML = rows.length ? rows.map(e => `<tr>
    <td>${e.date}</td><td><span class="event-pill">${e.name}</span></td>
    <td>${e.regions.map(x=>`<span style="color:${regionColors[x]};font-weight:800;margin-right:7px">${x}</span>`).join("")}</td>
    <td>${e.products}</td><td>${e.action}</td></tr>`).join("") : `<tr><td colspan="5">该筛选条件下暂无节点，可切换区域或月份查看。</td></tr>`;
}
renderCalendar();
calendarRegion.addEventListener("change", renderCalendar);
calendarMonth.addEventListener("change", renderCalendar);

document.querySelectorAll(".text-link[data-region]").forEach(link => {
  link.addEventListener("click", () => {
    const region = link.dataset.region;
    document.getElementById("detailTitle").textContent = `${region}｜首轮招商切入建议`;
    document.getElementById("detailText").textContent = regionDetails[region];
  });
});

document.querySelectorAll(".category-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category-chip").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.category;
    document.querySelectorAll(".product-tile").forEach(tile => {
      tile.classList.toggle("is-hidden", category !== "全部" && tile.dataset.category !== category);
    });
  });
});

const search = document.getElementById("siteSearch");
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"), 2400);
}
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  let matches = 0;
  document.querySelectorAll(".searchable").forEach(item => {
    const text = ((item.dataset.search || "") + " " + item.textContent).toLowerCase();
    const hit = !q || text.includes(q);
    item.classList.toggle("is-hidden", !hit);
    if(hit) matches++;
  });
  if(q && matches === 0) showToast("暂未找到相关内容，试试国家、品类或节日关键词。");
});
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click",()=>{
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
