const activities = [
  {id:"dingwei-cupping",icon:"☕",title:"咖啡杯測體驗課",cat:"飲食",status:"常駐活動",desc:"在丁威咖啡完成一套完整、適合親子參與的杯測體驗：認識杯測流程、聞香瓶、風味描述與杯測表，並附贈一支杯測專用湯匙。",task:"杯測流程 → 聞香瓶體驗 → 建立風味詞彙 → 實際杯測 → 寫杯測表。活動中的咖啡液以口腔感受為主，之後吐入杯中，不以吞飲為活動目的。",partner:"丁威咖啡｜固定據點",area:"丁威咖啡",age:"親子參與｜依現場安全安排",date:"常駐活動｜報名後協調日期",price:"一組 NT$1,000",duration:"2 小時",meaning:"透過嗅覺辨識、風味比較與語言描述練習，幫助孩子把感官經驗和詞彙建立更細緻的連結，練習更精準地描述自己聞到與感受到的差異。",note:"杯測時不以吞飲咖啡為目的，咖啡液入口感受後會吐入杯中；家長如對咖啡因、過敏或其他健康因素有疑慮，可在報名前先與主辦方確認。",tags:["固定據點","2HR","一組1000","附杯測湯匙"]},
  {id:"wood",icon:"🪵",title:"小小木工職人體驗",cat:"手作",status:"招募職人",desc:"從木材、工具與打磨開始，讓孩子看見一件木作如何從材料變成可以使用的作品。",task:"在安全工具與成人協助下，完成一件簡單木作或木料加工小任務。",partner:"木工師傅／木作工作室",area:"台中｜合作地點待確認",age:"年齡依內容調整",date:"媒合後公告",price:"合作確認後公告",tags:["工具","材料","作品"]},
  {id:"coffee",icon:"☕",title:"一杯咖啡怎麼來",cat:"飲食",status:"招募職人",desc:"從咖啡豆、香氣、研磨到沖煮，理解咖啡師每天其實在做哪些判斷。",task:"聞不同咖啡香氣、觀察研磨與沖煮，完成一個適齡的感官體驗。",partner:"咖啡師／咖啡店",area:"台中｜合作地點待確認",age:"親子陪同較適合",date:"媒合後公告",price:"合作確認後公告",tags:["感官","風味","沖煮"]},
  {id:"auto",icon:"🔧",title:"汽車裡面到底有什麼",cat:"技術",status:"招募職人",desc:"打開引擎室、看輪胎與基本零件，讓孩子第一次理解每天坐的車怎麼工作。",task:"由技師帶領辨識安全可接觸的零件，完成一張『我的第一張汽車檢查表』。",partner:"汽修技師／保養廠",area:"台中｜合作地點待確認",age:"年齡依場地調整",date:"媒合後公告",price:"合作確認後公告",tags:["機械","觀察","安全"]},
  {id:"pottery",icon:"🏺",title:"泥土變成一個器物",cat:"手作",status:"招募職人",desc:"摸土、塑形、修整，認識一團泥如何透過手感、時間與火成為可以留下來的器物。",task:"完成一件小型手捏作品，燒製方式與取件流程依合作工作室安排。",partner:"陶藝師／陶藝工作室",area:"台中｜合作地點待確認",age:"親子適齡",date:"媒合後公告",price:"材料與燒製費待確認",tags:["泥土","手感","作品"]},
  {id:"baking",icon:"🍪",title:"把食材變成點心",cat:"飲食",status:"招募職人",desc:"秤重、混合、整形與烘烤，讓孩子理解烘焙不是魔法，而是一連串精準又有趣的變化。",task:"完成一份可帶回家的簡單點心，依場地調整熱源與工具操作方式。",partner:"烘焙師／甜點店",area:"台中｜合作地點待確認",age:"親子陪同較適合",date:"媒合後公告",price:"材料費待確認",tags:["秤重","烘焙","分享"]},
  {id:"photo",icon:"📷",title:"孩子的第一堂觀察課",cat:"創作",status:"招募職人",desc:"攝影不只是按快門，而是學會找光、選畫面、決定什麼值得留下來。",task:"完成一組有主題的 3–5 張照片，並讓孩子說出自己為什麼這樣拍。",partner:"攝影師／影像創作者",area:"台中｜室內外皆可規劃",age:"親子適齡",date:"媒合後公告",price:"合作確認後公告",tags:["觀察","構圖","故事"]},
  {id:"farm",icon:"🌱",title:"食物從哪裡來",cat:"自然",status:"招募職人",desc:"走進產地，看季節、土壤與作物，知道一份食物在出現在餐桌以前發生了什麼。",task:"依農場季節完成採摘、播種、辨識作物或簡單田間任務。",partner:"農夫／農場／食農工作者",area:"台中｜產地待媒合",age:"親子適齡",date:"依產季安排",price:"依場地與材料確認",tags:["土地","作物","食農"]},
  {id:"open",icon:"🔨",title:"你很會做的那件事",cat:"開放提案",status:"開放提案",desc:"修鞋、花藝、金工、樂器、印刷、縫紉、植栽、電器、設計……只要是真實技能，都可能成為一場好體驗。",task:"先告訴我們你最想讓孩子『親手做一次』的是什麼，再一起把流程做得安全、簡單、真實。",partner:"任何有真實專長的人",area:"台中",age:"共同評估",date:"提案後討論",price:"提案後討論",tags:["不限領域","一起設計","職人募集"]}
];

const grid=document.querySelector("#experienceGrid");
const filters=document.querySelector("#filters");
const search=document.querySelector("#activitySearch");
const count=document.querySelector("#activityCount");
const empty=document.querySelector("#emptyState");
const cats=["全部",...new Set(activities.map(x=>x.cat))];
let currentCat="全部";

function renderFilters(){
  filters.innerHTML=cats.map((cat,i)=>`<button class="filter-btn ${i===0?"active":""}" data-cat="${cat}">${cat}</button>`).join("");
  filters.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
    currentCat=btn.dataset.cat;
    filters.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===btn));
    renderActivities();
  }));
}

function renderActivities(){
  const q=search.value.trim().toLowerCase();
  const data=activities.filter(item=>{
    const matchCat=currentCat==="全部"||item.cat===currentCat;
    const hay=[item.title,item.cat,item.desc,item.partner,...item.tags].join(" ").toLowerCase();
    return matchCat&&(!q||hay.includes(q));
  });
  count.textContent=`顯示 ${data.length} 個活動 · 點「立即報名」進入家長報名頁`;
  empty.hidden=data.length!==0;
  grid.innerHTML=data.map(item=>`
    <article class="exp-card" tabindex="0" data-id="${item.id}" aria-label="查看 ${item.title} 詳情">
      <div class="exp-top"><span class="exp-status">${item.status}</span><span>↗</span></div>
      <div class="exp-icon">${item.icon}</div>
      <div class="exp-cat">${item.cat.toUpperCase()} / EXPERIENCE</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="exp-tags">${item.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <div class="exp-bottom"><span>${item.partner}</span><a class="card-register" href="./register.html?activity=${item.id}" onclick="event.stopPropagation()">立即報名 →</a></div>
    </article>`).join("");
  grid.querySelectorAll(".exp-card").forEach(card=>{
    card.addEventListener("click",()=>openActivity(card.dataset.id));
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openActivity(card.dataset.id)}});
  });
}
search.addEventListener("input",renderActivities);
renderFilters();renderActivities();

const activityDialog=document.querySelector("#activityDialog");
const activityContent=document.querySelector("#activityDialogContent");
function openActivity(id){
  const item=activities.find(x=>x.id===id); if(!item)return;
  activityContent.innerHTML=`
    <div class="detail-icon">${item.icon}</div>
    <div class="detail-kicker">${item.status} · ${item.cat}</div>
    <h3>${item.title}</h3>
    <p class="detail-desc">${item.desc}</p>
    <div class="detail-grid">
      <div><small>合作對象</small><b>${item.partner}</b></div>
      <div><small>地點</small><b>${item.area}</b></div>
      <div><small>建議年齡</small><b>${item.age}</b></div>
      <div><small>日期</small><b>${item.date}</b></div>
      <div><small>費用</small><b>${item.price}</b></div>
      <div><small>目前狀態</small><b>${item.status}</b></div>
      ${item.duration?`<div><small>時長</small><b>${item.duration}</b></div>`:""}
    </div>
    <div class="detail-task"><small>體驗內容</small><p>${item.task}</p></div>
    ${item.meaning?`<div class="detail-meaning"><small>這堂體驗想帶給孩子什麼</small><p>${item.meaning}</p></div>`:""}
    ${item.note?`<div class="detail-note"><small>家長提醒</small><p>${item.note}</p></div>`:""}
    <p class="detail-safety">${item.status==="常駐活動"?"此活動為固定據點常駐體驗，實際日期依報名後協調為準。":"正式活動只會在合作職人、場地、工具、適齡條件與必要安全事項確認後公開。這張卡目前是體驗提案，不是正式開課資訊。"}</p>
    <a class="btn primary wide" href="./register.html?activity=${item.id}">立即進入家長報名 →</a>`;
  activityDialog.showModal();
}

document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>btn.closest("dialog").close()));

const roleTabs=document.querySelectorAll(".role-tab");
roleTabs.forEach(tab=>tab.addEventListener("click",()=>{
  const role=tab.dataset.role;
  roleTabs.forEach(x=>x.classList.toggle("active",x===tab));
  document.querySelectorAll(".role-copy").forEach(x=>x.classList.toggle("active",x.dataset.roleCopy===role));
  document.querySelectorAll(".join-form").forEach(x=>x.classList.toggle("active",x.dataset.formRole===role));
}));

const messageDialog=document.querySelector("#messageDialog");
const generated=document.querySelector("#generatedMessage");
async function copyText(text){
  try{await navigator.clipboard.writeText(text)}
  catch{generated.focus();generated.select();document.execCommand("copy")}
}
function showMessage(text){generated.value=text;copyText(text);messageDialog.showModal()}

document.querySelector("#makerForm").addEventListener("submit",e=>{
  e.preventDefault();const d=new FormData(e.currentTarget);
  const name=d.get("name").trim(),skill=d.get("skill").trim(),area=d.get("area").trim()||"台中",idea=d.get("idea").trim()||"想先聊聊有哪些適合孩子參與的方式";
  showMessage(`嗨，我看到「小小職人體驗｜台中親子體驗實驗」的職人募集

我是 ${name}
我擅長：${skill}
地點／區域：${area}

我覺得孩子可以體驗：
${idea}

目前想先了解這個計畫，也願意一起討論適合年齡、場地、安全與活動方式。`);
});

document.querySelector("#parentForm").addEventListener("submit",e=>{
  e.preventDefault();const d=new FormData(e.currentTarget);
  const name=d.get("name").trim(),age=d.get("age").trim()||"未填",interest=d.get("interest").trim(),note=d.get("note").trim()||"沒有其他補充";
  showMessage(`嗨，我看到「小小職人體驗｜台中親子體驗實驗」

我是 ${name}
孩子年齡：${age}
最想體驗：${interest}

其他期待：
${note}

我知道目前還在第一階段媒合，想先收到未來正式場次的資訊。`);
});

document.querySelector("#copyAgain").addEventListener("click",async e=>{
  await copyText(generated.value);const old=e.currentTarget.textContent;e.currentTarget.textContent="已複製 ✓";setTimeout(()=>e.currentTarget.textContent=old,1200);
});

document.querySelector("#shareBtn").addEventListener("click",async()=>{
  const payload={title:"小小職人體驗｜台中親子體驗實驗",text:"台中有沒有一群很會做某件事，但平常沒有機會教小朋友的人？",url:location.href};
  if(navigator.share){try{await navigator.share(payload)}catch{}}
  else{await copyText(location.href);alert("網址已複製")}
});
