const activities = [
  {id:"dingwei-cupping",icon:"coffee",title:"咖啡杯測體驗課",cat:"飲食",status:"常駐活動",desc:"在丁威咖啡完成一套完整、適合親子參與的杯測體驗：認識杯測流程、聞香瓶、風味描述與杯測表，並附贈一支杯測專用湯匙。",task:"杯測流程 → 聞香瓶體驗 → 建立風味詞彙 → 實際杯測 → 寫杯測表。活動中的咖啡液以口腔感受為主，之後吐入杯中，不以吞飲為活動目的。",partner:"丁威咖啡｜固定據點",area:"丁威咖啡",age:"親子參與｜依現場安全安排",date:"常駐活動｜報名後協調日期",price:"一組 NT$1,000",duration:"2 小時",meaning:"透過嗅覺辨識、風味比較與語言描述練習，幫助孩子把感官經驗和詞彙建立更細緻的連結，練習更精準地描述自己聞到與感受到的差異。",note:"杯測時不以吞飲咖啡為目的，咖啡液入口感受後會吐入杯中；家長如對咖啡因、過敏或其他健康因素有疑慮，可在報名前先與主辦方確認。",tags:["固定據點","2HR","一組1000","附杯測湯匙"]},
  {id:"dingwei-glass",icon:"glass",title:"玻璃拼貼藝術課",cat:"手作",status:"常駐活動",desc:"在丁威咖啡進行 3 小時的玻璃拼貼藝術體驗，從色彩配置、造型安排到作品組裝，完成一件能和光線互動的玻璃作品。",task:"認識玻璃材質與光線效果 → 配色設計 → 在成人與職人帶領下進行適齡剪裁與組裝 → 由職人示範或協助高溫焊接與特殊技法 → 完成作品。",partner:"丁威咖啡｜固定據點",area:"丁威咖啡",age:"親子參與｜依工具與安全條件安排",date:"常駐活動｜報名後協調日期",price:"一組 NT$2,000",duration:"3 小時",meaning:"光線是生活中不可缺少的元素，而不同色彩、透明度與排列方式會改變玻璃對光線的呈現。孩子可以在設計與組合過程中觀察色彩比例、平衡與協調，練習建立自己的美感判斷，最後把作品變成生活中真正能留下來的一盞光。",note:"活動包含玻璃剪裁與焊接等具風險步驟，現場會依年齡使用適合的工具與防護裝備；高溫、尖銳或其他高風險操作由職人示範、協助或代為完成，不安排兒童自行進行危險操作。",tags:["固定據點","3HR","一組2000","玻璃藝術","配色設計"]},
  {id:"wood",icon:"wood",title:"小小木工職人體驗",cat:"手作",status:"招募職人",desc:"從木材、工具與打磨開始，讓孩子看見一件木作如何從材料變成可以使用的作品。",task:"在安全工具與成人協助下，完成一件簡單木作或木料加工小任務。",partner:"木工師傅／木作工作室",area:"台中｜合作地點待確認",age:"年齡依內容調整",date:"媒合後公告",price:"合作確認後公告",tags:["工具","材料","作品"]},
  {id:"coffee",icon:"coffee",title:"一杯咖啡怎麼來",cat:"飲食",status:"招募職人",desc:"從咖啡豆、香氣、研磨到沖煮，理解咖啡師每天其實在做哪些判斷。",task:"聞不同咖啡香氣、觀察研磨與沖煮，完成一個適齡的感官體驗。",partner:"咖啡師／咖啡店",area:"台中｜合作地點待確認",age:"親子陪同較適合",date:"媒合後公告",price:"合作確認後公告",tags:["感官","風味","沖煮"]},
  {id:"auto",icon:"wrench",title:"汽車裡面到底有什麼",cat:"技術",status:"招募職人",desc:"打開引擎室、看輪胎與基本零件，讓孩子第一次理解每天坐的車怎麼工作。",task:"由技師帶領辨識安全可接觸的零件，完成一張『我的第一張汽車檢查表』。",partner:"汽修技師／保養廠",area:"台中｜合作地點待確認",age:"年齡依場地調整",date:"媒合後公告",price:"合作確認後公告",tags:["機械","觀察","安全"]},
  {id:"pottery",icon:"pottery",title:"泥土變成一個器物",cat:"手作",status:"招募職人",desc:"摸土、塑形、修整，認識一團泥如何透過手感、時間與火成為可以留下來的器物。",task:"完成一件小型手捏作品，燒製方式與取件流程依合作工作室安排。",partner:"陶藝師／陶藝工作室",area:"台中｜合作地點待確認",age:"親子適齡",date:"媒合後公告",price:"材料與燒製費待確認",tags:["泥土","手感","作品"]},
  {id:"baking",icon:"baking",title:"把食材變成點心",cat:"飲食",status:"招募職人",desc:"秤重、混合、整形與烘烤，讓孩子理解烘焙不是魔法，而是一連串精準又有趣的變化。",task:"完成一份可帶回家的簡單點心，依場地調整熱源與工具操作方式。",partner:"烘焙師／甜點店",area:"台中｜合作地點待確認",age:"親子陪同較適合",date:"媒合後公告",price:"材料費待確認",tags:["秤重","烘焙","分享"]},
  {id:"photo",icon:"camera",title:"孩子的第一堂觀察課",cat:"創作",status:"招募職人",desc:"攝影不只是按快門，而是學會找光、選畫面、決定什麼值得留下來。",task:"完成一組有主題的 3–5 張照片，並讓孩子說出自己為什麼這樣拍。",partner:"攝影師／影像創作者",area:"台中｜室內外皆可規劃",age:"親子適齡",date:"媒合後公告",price:"合作確認後公告",tags:["觀察","構圖","故事"]},
  {id:"farm",icon:"sprout",title:"食物從哪裡來",cat:"自然",status:"招募職人",desc:"走進產地，看季節、土壤與作物，知道一份食物在出現在餐桌以前發生了什麼。",task:"依農場季節完成採摘、播種、辨識作物或簡單田間任務。",partner:"農夫／農場／食農工作者",area:"台中｜產地待媒合",age:"親子適齡",date:"依產季安排",price:"依場地與材料確認",tags:["土地","作物","食農"]},
  {id:"open",icon:"tools",title:"你很會做的那件事",cat:"開放提案",status:"開放提案",desc:"修鞋、花藝、金工、樂器、印刷、縫紉、植栽、電器、設計……只要是真實技能，都可能成為一場好體驗。",task:"先告訴我們你最想讓孩子『親手做一次』的是什麼，再一起把流程做得安全、簡單、真實。",partner:"任何有真實專長的人",area:"台中",age:"共同評估",date:"提案後討論",price:"提案後討論",tags:["不限領域","一起設計","職人募集"]}
];

const grid=document.querySelector("#experienceGrid"),filters=document.querySelector("#filters"),search=document.querySelector("#activitySearch"),count=document.querySelector("#activityCount"),empty=document.querySelector("#emptyState");
const cats=["全部",...new Set(activities.map(x=>x.cat))],icon=window.siteIcon;
let currentCat="全部";
function renderFilters(){
  filters.innerHTML=cats.map(cat=>`<button type="button" class="filter-btn ${cat===currentCat?"active":""}" aria-pressed="${cat===currentCat}" data-cat="${cat}">${cat}</button>`).join("");
  filters.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{currentCat=btn.dataset.cat;renderFilters();renderActivities();}));
}
function renderActivities(){
  const q=search.value.trim().toLowerCase();
  const data=activities.filter(a=>(currentCat==="全部"||a.cat===currentCat)&&(!q||[a.title,a.cat,a.desc,a.partner,...a.tags].join(" ").toLowerCase().includes(q)));
  count.textContent=`${String(data.length).padStart(2,"0")} 個體驗方向 · ${data.filter(a=>a.status==="常駐活動").length} 個常駐活動`;
  empty.hidden=data.length!==0;
  grid.innerHTML=data.map(a=>`<article class="exp-card" data-id="${a.id}" data-category="${a.cat}" data-icon="${a.icon}">
    <div class="exp-art"><div class="exp-top"><span class="exp-status ${a.status==="常駐活動"?"is-available":""}">${a.status}</span><span>${a.cat}</span></div><div class="exp-icon">${icon(a.icon)}</div><span class="exp-number" aria-hidden="true">${String(activities.indexOf(a)+1).padStart(2,"0")}</span></div>
    <div class="exp-body"><div class="exp-cat">${a.cat} / EXPERIENCE</div><h3>${a.title}</h3><p class="exp-desc">${a.desc}</p><div class="exp-tags">${a.tags.map(t=>`<span>${t}</span>`).join("")}</div><p class="exp-partner">${a.partner}</p><div class="exp-bottom"><button type="button" class="exp-details" data-activity="${a.id}" aria-label="查看${a.title}詳情">體驗詳情 ${icon("arrow-up-right")}</button><a class="card-register" href="./register.html?activity=${a.id}">${a.status==="常駐活動"?"立即報名":"登記興趣"} ${icon("arrow-right")}</a></div></div></article>`).join("");
  grid.querySelectorAll(".exp-details").forEach(btn=>btn.addEventListener("click",()=>openActivity(btn.dataset.activity)));
}
const activityDialog=document.querySelector("#activityDialog"),activityContent=document.querySelector("#activityDialogContent");
function openActivity(id){
 const a=activities.find(x=>x.id===id);if(!a)return;
 activityContent.innerHTML=`<div class="detail-icon">${icon(a.icon)}</div><div class="detail-kicker">${a.status} · ${a.cat}</div><h3 id="activityDialogTitle">${a.title}</h3><p class="detail-desc">${a.desc}</p><div class="detail-grid">
 ${[["合作對象",a.partner],["地點",a.area],["建議年齡",a.age],["日期",a.date],["費用",a.price],["目前狀態",a.status],...(a.duration?[["時長",a.duration]]:[])].map(([k,v])=>`<div><small>${k}</small><b>${v}</b></div>`).join("")}</div>
 <div class="detail-task"><small>體驗內容</small><p>${a.task}</p></div>
 ${a.meaning?`<div class="detail-meaning"><small>這堂體驗想帶給孩子什麼</small><p>${a.meaning}</p></div>`:""}
 ${a.note?`<div class="detail-note"><small>家長提醒</small><p>${a.note}</p></div>`:""}
 <p class="detail-safety">${a.status==="常駐活動"?"此活動為固定據點常駐體驗，實際日期依報名後協調為準。":"正式活動只會在合作職人、場地、工具、適齡條件與必要安全事項確認後公開。這張卡目前是體驗提案，不是正式開課資訊。"}</p>
 <a class="btn primary wide" href="./register.html?activity=${a.id}">${a.status==="常駐活動"?"前往家長報名":"登記這個體驗的興趣"} ${icon("arrow-right")}</a>`;
 activityDialog.setAttribute("aria-labelledby","activityDialogTitle");activityDialog.showModal();
}
search.addEventListener("input",renderActivities);renderFilters();renderActivities();
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(d=>{
 let outsideDown=false;
 const outside=e=>{const r=d.getBoundingClientRect();return e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom};
 d.addEventListener("pointerdown",e=>outsideDown=e.target===d&&outside(e));
 d.addEventListener("click",e=>{if(outsideDown&&e.target===d&&outside(e))d.close();outsideDown=false});
});
const roleTabs=[...document.querySelectorAll(".role-tab")];
function selectRole(tab,focus=false){
 const role=tab.dataset.role;
 roleTabs.forEach(x=>{x.classList.toggle("active",x===tab);x.setAttribute("aria-selected",String(x===tab));x.tabIndex=x===tab?0:-1});
 document.querySelectorAll(".role-copy").forEach(x=>{const active=x.dataset.roleCopy===role;x.classList.toggle("active",active);x.hidden=!active});
 document.querySelectorAll(".join-form").forEach(x=>{const active=x.dataset.formRole===role;x.classList.toggle("active",active);x.hidden=!active});
 if(focus)tab.focus();
}
roleTabs.forEach((tab,index)=>{
 tab.id="role-tab-"+tab.dataset.role;tab.setAttribute("role","tab");tab.setAttribute("aria-controls",tab.dataset.role+"Form");
 const panel=document.querySelector('[data-form-role="'+tab.dataset.role+'"]');panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby",tab.id);
 tab.addEventListener("click",()=>selectRole(tab));tab.addEventListener("keydown",e=>{
  const next={ArrowRight:(index+1)%roleTabs.length,ArrowLeft:(index-1+roleTabs.length)%roleTabs.length,Home:0,End:roleTabs.length-1}[e.key];
  if(next!==undefined){e.preventDefault();selectRole(roleTabs[next],true)}
 });
});
selectRole(roleTabs.find(t=>t.classList.contains("active"))||roleTabs[0]);
const menuToggle=document.querySelector("#menuToggle"),siteNav=document.querySelector("#siteNav");
function setMenu(open){menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"關閉導覽選單":"開啟導覽選單");siteNav.classList.toggle("is-open",open)}
menuToggle.addEventListener("click",()=>setMenu(menuToggle.getAttribute("aria-expanded")!=="true"));
siteNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menuToggle.getAttribute("aria-expanded")==="true"){setMenu(false);menuToggle.focus()}});
document.addEventListener("click",e=>{if(!siteNav.contains(e.target)&&!menuToggle.contains(e.target))setMenu(false)});
const messageDialog=document.querySelector("#messageDialog"),generated=document.querySelector("#generatedMessage");
const messageCopyStatus=document.createElement("p");messageCopyStatus.id="messageCopyStatus";messageCopyStatus.setAttribute("role","status");messageCopyStatus.setAttribute("aria-live","polite");generated.insertAdjacentElement("afterend",messageCopyStatus);
async function copyText(text){
 try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);return true}}catch{}
 const previous=document.activeElement, fallback=document.createElement("textarea");fallback.value=text;fallback.readOnly=true;fallback.style.cssText="position:fixed;left:0;top:0;width:1px;height:1px;opacity:0";
 (document.querySelector("dialog[open]")||document.body).appendChild(fallback);let copied=false;
 try{fallback.focus();fallback.select();copied=document.execCommand("copy")}catch{}finally{fallback.remove();previous?.focus({preventScroll:true})}
 return copied;
}
async function showMessage(text){generated.value=text;messageCopyStatus.textContent="正在複製訊息…";messageDialog.showModal();const copied=await copyText(text);messageCopyStatus.textContent=copied?"訊息已複製，可貼到私訊中傳送。":"請選取上方文字手動複製，或按複製按鈕再試一次。"}
document.querySelector("#makerForm").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.currentTarget);
 showMessage(`嗨，我看到「小小職人體驗｜台中親子體驗實驗」的職人募集

我是 ${d.get("name").trim()}
我擅長：${d.get("skill").trim()}
地點／區域：${d.get("area").trim()||"台中"}

我覺得孩子可以體驗：
${d.get("idea").trim()||"想先聊聊有哪些適合孩子參與的方式"}

目前想先了解這個計畫，也願意一起討論適合年齡、場地、安全與活動方式。`);
});
document.querySelector("#parentForm").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.currentTarget);
 showMessage(`嗨，我看到「小小職人體驗｜台中親子體驗實驗」

我是 ${d.get("name").trim()}
孩子年齡：${d.get("age").trim()||"未填"}
最想體驗：${d.get("interest").trim()}

其他期待：
${d.get("note").trim()||"沒有其他補充"}

我知道目前還在第一階段媒合，想先收到未來正式場次的資訊。`);
});
let copyTimer;
document.querySelector("#copyAgain").addEventListener("click",async e=>{
 const b=e.currentTarget;b.disabled=true;const ok=await copyText(generated.value);b.disabled=false;b.innerHTML=(ok?"已複製":"再試一次")+" "+icon(ok?"check":"copy");
 messageCopyStatus.textContent=ok?"訊息已複製，可貼到私訊中傳送。":"請選取上方文字手動複製。";
 clearTimeout(copyTimer);copyTimer=setTimeout(()=>b.innerHTML="複製私訊文字 "+icon("copy"),1800);
});
let shareTimer;
document.querySelector("#shareBtn").addEventListener("click",async e=>{
 const b=e.currentTarget,payload={title:"小小職人體驗｜台中親子體驗實驗",text:"把台中真正會做事的人，介紹給下一代。",url:location.href};
 if(navigator.share){try{await navigator.share(payload);return}catch(err){if(err.name==="AbortError")return}}
 const ok=await copyText(location.href);b.setAttribute("aria-live","polite");b.innerHTML=ok?"網址已複製 "+icon("check"):"請複製瀏覽器網址 "+icon("copy");clearTimeout(shareTimer);shareTimer=setTimeout(()=>b.innerHTML="分享這個計畫 "+icon("arrow-up-right"),2200);
});
