const experiences = [
  { icon:"🪵", title:"木工體驗", cat:"手作", desc:"從木頭、工具與打磨開始，理解一件木作怎麼從材料變成作品。", meta:"作品導向", age:"親子適齡", status:"徵集中" },
  { icon:"☕", title:"咖啡職人體驗", cat:"飲食", desc:"聞香、看豆、認識沖煮，從一杯咖啡理解風味與職人的判斷。", meta:"感官體驗", age:"親子適齡", status:"徵集中" },
  { icon:"🔧", title:"汽車職人體驗", cat:"技術", desc:"從輪胎、引擎室到基本保養，認識每天坐的車到底怎麼工作。", meta:"機械觀察", age:"親子適齡", status:"徵集中" },
  { icon:"🏺", title:"陶藝體驗", cat:"手作", desc:"摸土、塑形、留下手的痕跡，理解泥土如何經過時間與火變成器物。", meta:"材料體驗", age:"親子適齡", status:"徵集中" },
  { icon:"🍪", title:"烘焙體驗", cat:"飲食", desc:"秤重、混合、整形與烘烤，把食材變成可以分享的一份點心。", meta:"流程體驗", age:"親子適齡", status:"徵集中" },
  { icon:"📷", title:"攝影體驗", cat:"創作", desc:"用構圖、光線與觀察練習「怎麼看」，完成一組屬於自己的照片。", meta:"創作任務", age:"親子適齡", status:"徵集中" },
  { icon:"🌱", title:"農事體驗", cat:"自然", desc:"從土地、季節與作物開始，讓孩子知道每天吃的東西是怎麼來的。", meta:"產地觀察", age:"親子適齡", status:"徵集中" },
  { icon:"🔨", title:"職人手作", cat:"手作", desc:"不限媒材。只要是一項真實技藝，都可能變成孩子值得做一次的體驗。", meta:"開放提案", age:"共同規劃", status:"募集提案" }
];

const grid = document.querySelector("#experienceGrid");
const filters = document.querySelector("#filters");
const cats = ["全部", ...new Set(experiences.map(x=>x.cat))];

function renderFilters(){
  filters.innerHTML = cats.map((cat,i)=>`<button class="filter-btn ${i===0?"active":""}" data-cat="${cat}">${cat}</button>`).join("");
  filters.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      filters.querySelectorAll("button").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.cat);
    });
  });
}
function renderCards(cat="全部"){
  const data = cat==="全部" ? experiences : experiences.filter(x=>x.cat===cat);
  grid.innerHTML = data.map(item=>`
    <article class="exp-card">
      <span class="exp-status">${item.status}</span>
      <div class="exp-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="exp-meta"><span>${item.meta}</span><span>${item.age}</span></div>
    </article>
  `).join("");
}

renderFilters();
renderCards();

const form = document.querySelector("#joinForm");
const dialog = document.querySelector("#messageDialog");
const generated = document.querySelector("#generatedMessage");

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
  }catch{
    generated.focus();
    generated.select();
    document.execCommand("copy");
  }
}

form.addEventListener("submit", async (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.trim();
  const skill = data.get("skill")?.trim();
  const idea = data.get("idea")?.trim() || "想先聊聊有哪些適合孩子參與的方式";
  const area = data.get("area")?.trim() || "台中";
  const message = `嗨，我看到「台中小小職人體驗」的職人募集

我是 ${name}
我擅長：${skill}
地點／區域：${area}

我覺得孩子可以體驗：
${idea}

目前想先了解這個親子體驗實驗，也可以一起討論安全、年齡與活動方式 🙂`;

  generated.value = message;
  await copyText(message);
  dialog.showModal();
});

document.querySelector("#dialogClose").addEventListener("click",()=>dialog.close());
document.querySelector("#copyAgain").addEventListener("click",async ()=>{
  await copyText(generated.value);
  const btn = document.querySelector("#copyAgain");
  const old = btn.textContent;
  btn.textContent = "已複製 ✓";
  setTimeout(()=>btn.textContent=old,1200);
});

document.querySelector("#shareBtn").addEventListener("click", async ()=>{
  const payload = {
    title:"台中小小職人體驗",
    text:"台中有沒有一群很會做某件事，但平常沒有機會教小朋友的人？",
    url:location.href
  };
  if(navigator.share){
    try{ await navigator.share(payload); }catch{}
  }else{
    await copyText(location.href);
    alert("網址已複製");
  }
});