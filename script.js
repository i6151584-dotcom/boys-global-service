const calendarEvents = [
 {month:1,date:"1月",name:"新年 / 暑期穿搭",regions:["澳新","拉美","东南亚"],products:"轻薄上装、短裤、日常套装",action:"结合当地天气测试轻薄款"},
 {month:2,date:"2月",name:"开学季（部分市场）",regions:["澳新","拉美","东南亚"],products:"基础 T 恤、长裤、日常套装",action:"按当地开学时间规划上新"},
 {month:3,date:"3月",name:"换季 / 春季主题",regions:["欧区"],products:"长袖上装、薄外套、长裤",action:"按国家气候和站点数据细分"},
 {month:4,date:"4月",name:"复活节（部分市场）",regions:["欧区","澳新"],products:"主题上装、日常套装",action:"核对当地节日日期与需求"},
 {month:6,date:"6月",name:"夏季 / 户外活动",regions:["欧区","拉美","东南亚"],products:"T 恤、短裤、轻薄运动款",action:"突出舒适、透气与搭配性"},
 {month:7,date:"7月",name:"暑期 / 夏季促销",regions:["欧区","澳新","拉美","东南亚"],products:"基础款、多件装、休闲套装",action:"观察站点活动与历史销售数据"},
 {month:8,date:"8月",name:"返校季（部分市场）",regions:["欧区","拉美","东南亚"],products:"基础上装、长裤、外套",action:"按国家校历提前准备货盘"},
 {month:10,date:"10月",name:"万圣节",regions:["欧区","拉美"],products:"主题印花、派对服饰、配件搭配",action:"提前准备主题设计并核对知识产权"},
 {month:11,date:"11月",name:"黑五 / 网购促销季",regions:["欧区","澳新","拉美","东南亚"],products:"基础款、多件装、礼赠型商品",action:"核对平台活动节奏、库存与价格"},
 {month:12,date:"12月",name:"圣诞节 / 年末礼赠",regions:["欧区","澳新","拉美","东南亚"],products:"节庆图案、套装、礼赠方向",action:"按国家气候区分厚薄款并提前备货"}
];
const regionColors = {"欧区":"#246cf5","澳新":"#16865e","拉美":"#e87325","东南亚":"#7554e8"};
const calendarBody = document.getElementById("calendarBody");
const calendarRegion = document.getElementById("calendarRegion");
const calendarMonth = document.getElementById("calendarMonth");
const calendarCount = document.getElementById("calendarCount");
function renderCalendar(){
 if(!calendarBody) return;
 const r = calendarRegion.value, m = calendarMonth.value;
 const rows = calendarEvents.filter(e => (r === "全部" || e.regions.includes(r)) && (m === "全部" || String(e.month) === m));
 calendarCount.textContent = `共 ${rows.length} 个节点`;
 calendarBody.innerHTML = rows.length ? rows.map(e => `<tr><td>${e.date}</td><td><span class="event-pill">${e.name}</span></td><td>${e.regions.map(x=>`<span style="color:${regionColors[x]};font-weight:800;margin-right:7px">${x}</span>`).join("")}</td><td>${e.products}</td><td>${e.action}</td></tr>`).join("") : `<tr><td colspan="5">该筛选条件下暂无节点，可切换区域或月份查看。</td></tr>`;
}
renderCalendar();
calendarRegion?.addEventListener("change",renderCalendar);
calendarMonth?.addEventListener("change",renderCalendar);

document.querySelectorAll('[data-filter-group="best"]').forEach(button => {
 if(button.tagName !== "BUTTON") return;
 button.addEventListener("click",()=>{
  document.querySelectorAll('button[data-filter-group="best"]').forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  const category=button.dataset.category;
  document.querySelectorAll('.reference-card[data-filter-group="best"]').forEach(card=>card.classList.toggle("is-hidden",category!=="全部"&&card.dataset.category!==category));
 });
});

const search = document.getElementById("siteSearch");
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){
 if(!toast) return;
 toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>toast.classList.remove("show"),2400);
}
search?.addEventListener("input",()=>{
 const q=search.value.trim().toLowerCase();let matches=0;
 document.querySelectorAll(".searchable").forEach(item=>{
  const text=((item.dataset.search||"")+" "+item.textContent).toLowerCase();
  const hit=!q||text.includes(q);item.classList.toggle("is-hidden",!hit);if(hit)matches++;
 });
 if(q&&matches===0)showToast("暂未找到相关内容，试试国家、品类、资质或节日关键词。");
});

document.getElementById("menuToggle")?.addEventListener("click",()=>{
 const sidebar=document.getElementById("sidebar");
 const open=sidebar.classList.toggle("mobile-open");
 document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".side-link").forEach(a=>a.addEventListener("click",()=>{
 document.querySelectorAll(".side-link").forEach(link=>link.classList.remove("active"));
 a.classList.add("active");
 document.getElementById("sidebar").classList.remove("mobile-open");
 document.getElementById("menuToggle")?.setAttribute("aria-expanded","false");
}));
const sections=[...document.querySelectorAll(".workspace-main section[id]")];
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){
    const id=entry.target.id;
    document.querySelectorAll(".side-link").forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+id || (id==="contact"&&link.getAttribute("href")==="#overview")));
   }
  });
 },{rootMargin:"-20% 0px -65% 0px"});
 sections.forEach(section=>observer.observe(section));
}
document.querySelectorAll("[data-copy]").forEach(button=>button.addEventListener("click",async()=>{
 const value=button.dataset.copy;
 try{
  await navigator.clipboard.writeText(value);showToast("已复制到剪贴板");
 }catch(e){
  const area=document.createElement("textarea");area.value=value;document.body.appendChild(area);area.select();
  try{document.execCommand("copy");showToast("已复制到剪贴板");}catch(err){showToast("复制失败，请手动复制");}
  area.remove();
 }
}));
document.getElementById("resetSizeChecks")?.addEventListener("click",()=>document.querySelectorAll(".size-checks input").forEach(input=>input.checked=false));
