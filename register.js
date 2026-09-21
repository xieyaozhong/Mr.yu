const REGISTRATION_ENDPOINT = "";
const activities = [
  {
    "id": "dingwei-cupping",
    "icon": "coffee",
    "title": "咖啡杯測體驗課",
    "cat": "飲食",
    "desc": "在丁威咖啡完成一套完整、適合親子參與的杯測體驗：認識杯測流程、聞香瓶、風味描述與杯測表，並附贈一支杯測專用湯匙。",
    "area": "丁威咖啡",
    "date": "常駐活動｜報名後協調日期",
    "price": "一組 NT$1,000",
    "age": "親子參與｜依現場安全安排",
    "status": "常駐活動",
    "duration": "2 小時",
    "notice": "杯測時不以吞飲咖啡為目的，咖啡液入口感受後會吐入杯中；家長如對咖啡因、過敏或其他健康因素有疑慮，可在報名前先與主辦方確認。"
  },
  {
    "id": "dingwei-glass",
    "icon": "glass",
    "title": "玻璃拼貼藝術課",
    "cat": "手作",
    "desc": "在丁威咖啡進行 3 小時的玻璃拼貼藝術體驗，從色彩配置、造型安排到作品組裝，完成一件能和光線互動的玻璃作品。",
    "area": "丁威咖啡",
    "date": "常駐活動｜報名後協調日期",
    "price": "一組 NT$2,000",
    "age": "親子參與｜依工具與安全條件安排",
    "status": "常駐活動",
    "duration": "3 小時",
    "notice": "活動包含玻璃剪裁與焊接等具風險步驟，現場會依年齡使用適合的工具與防護裝備；高溫、尖銳或其他高風險操作由職人示範、協助或代為完成，不安排兒童自行進行危險操作。"
  },
  {
    "id": "wood",
    "icon": "wood",
    "title": "小小木工職人體驗",
    "cat": "手作",
    "desc": "從木材、工具與打磨開始，讓孩子看見一件木作如何從材料變成可以使用的作品。",
    "area": "台中｜合作地點待確認",
    "date": "媒合後公告",
    "price": "合作確認後公告",
    "age": "年齡依內容調整",
    "status": "興趣登記"
  },
  {
    "id": "coffee",
    "icon": "coffee",
    "title": "一杯咖啡怎麼來",
    "cat": "飲食",
    "desc": "從咖啡豆、香氣、研磨到沖煮，理解咖啡師每天其實在做哪些判斷。",
    "area": "台中｜合作地點待確認",
    "date": "媒合後公告",
    "price": "合作確認後公告",
    "age": "親子陪同較適合",
    "status": "興趣登記"
  },
  {
    "id": "auto",
    "icon": "wrench",
    "title": "汽車裡面到底有什麼",
    "cat": "技術",
    "desc": "打開引擎室、看輪胎與基本零件，讓孩子第一次理解每天坐的車怎麼工作。",
    "area": "台中｜合作地點待確認",
    "date": "媒合後公告",
    "price": "合作確認後公告",
    "age": "年齡依場地調整",
    "status": "興趣登記"
  },
  {
    "id": "pottery",
    "icon": "pottery",
    "title": "泥土變成一個器物",
    "cat": "手作",
    "desc": "摸土、塑形、修整，認識一團泥如何透過手感、時間與火成為可以留下來的器物。",
    "area": "台中｜合作地點待確認",
    "date": "媒合後公告",
    "price": "材料與燒製費待確認",
    "age": "親子適齡",
    "status": "興趣登記"
  },
  {
    "id": "baking",
    "icon": "baking",
    "title": "把食材變成點心",
    "cat": "飲食",
    "desc": "秤重、混合、整形與烘烤，讓孩子理解烘焙不是魔法，而是一連串精準又有趣的變化。",
    "area": "台中｜合作地點待確認",
    "date": "媒合後公告",
    "price": "材料費待確認",
    "age": "親子陪同較適合",
    "status": "興趣登記"
  },
  {
    "id": "photo",
    "icon": "camera",
    "title": "孩子的第一堂觀察課",
    "cat": "創作",
    "desc": "攝影不只是按快門，而是學會找光、選畫面、決定什麼值得留下來。",
    "area": "台中｜室內外皆可規劃",
    "date": "媒合後公告",
    "price": "合作確認後公告",
    "age": "親子適齡",
    "status": "興趣登記"
  },
  {
    "id": "farm",
    "icon": "sprout",
    "title": "食物從哪裡來",
    "cat": "自然",
    "desc": "走進產地，看季節、土壤與作物，知道一份食物在出現在餐桌以前發生了什麼。",
    "area": "台中｜產地待媒合",
    "date": "依產季安排",
    "price": "依場地與材料確認",
    "age": "親子適齡",
    "status": "興趣登記"
  },
  {
    "id": "open",
    "icon": "tools",
    "title": "你很會做的那件事",
    "cat": "開放提案",
    "desc": "修鞋、花藝、金工、樂器、印刷、縫紉、植栽、電器、設計……只要是真實技能，都可能成為一場好體驗。",
    "area": "台中",
    "date": "提案後討論",
    "price": "提案後討論",
    "age": "共同評估",
    "status": "興趣登記"
  }
];
const icon=window.siteIcon;
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const selected=activities.find(a=>a.id===new URLSearchParams(location.search).get("activity"))||activities[0];
const state={step:1,activity:selected.id,session:selected.date,data:{},done:false};
const app=document.querySelector("#registrationApp"),summary=document.querySelector("#registerSummary");
const activityById=id=>activities.find(a=>a.id===id)||activities[0];
const row=(label,value)=>`<div><small>${label}</small><b>${escapeHTML(value)}</b></div>`;
function saveDraft(){const form=document.querySelector("#registrationForm");if(form){state.data=Object.fromEntries(new FormData(form).entries())}}
function setStep(n){saveDraft();state.step=n;render();document.querySelector(".reg-title h2")?.focus({preventScroll:true});document.querySelector(".register-card").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"})}
function updateSummary(){
 const a=activityById(state.activity);
 summary.innerHTML=`<div class="section-kicker light">YOUR NEXT LITTLE ADVENTURE</div><div class="reg-icon">${icon(a.icon)}</div><div class="summary-status">${a.status}</div><h1>${a.title}</h1><p>${a.desc}</p><div class="register-meta">${row("體驗地點",a.area)}${row("場次安排",state.session)}${row("體驗費用",a.price)}${row("參與年齡",a.age)}${a.duration?row("活動時間",a.duration):""}</div>${a.notice?`<div class="summary-notice">${icon("shield")}<p>${a.notice}</p></div>`:""}`;
}
function title(step,text,desc){return `<div class="reg-title"><small>STEP ${String(step).padStart(2,"0")}</small><h2 tabindex="-1">${text}</h2><p>${desc}</p></div>`}
function render(){
 updateSummary();
 document.querySelectorAll(".register-step li").forEach((el,i)=>{el.classList.toggle("active",i<state.step);el.classList.toggle("current",i===state.step-1);if(i===state.step-1)el.setAttribute("aria-current","step");else el.removeAttribute("aria-current")});
 const a=activityById(state.activity),isResident=a.status==="常駐活動";
 if(state.done){
 app.innerHTML=`<div class="reg-success"><div class="success-icon">${icon(state.serverSaved?"check":"copy")}</div>${title(3,state.serverSaved?"報名已送出":state.localSaved?"資料已儲存在此裝置":"請先複製並保留資料",state.serverSaved?"請保留編號，等候主辦方確認。":"主辦方尚未收到這筆資料。")}<div class="ticket">${state.ticket}</div><p>${state.serverSaved?"資料已送至主辦方，實際場次與參與安排仍需確認。":state.localSaved?"目前尚未啟用線上收件，資料已保存在這台裝置。請複製報名資料，透過主辦方提供的聯絡管道另行傳送。":"此瀏覽器無法儲存資料，主辦方也尚未收到。請立即複製下方資料保存，再透過主辦方提供的聯絡管道傳送。"}</p><div class="reg-review">${row("活動",a.title)}${row("場次",state.session)}</div><div class="reg-actions"><a class="btn secondary" href="./index.html#activities">探索其他體驗</a><button class="btn primary" id="copyReceipt">複製資料 ${icon("copy")}</button></div><p id="receiptStatus" role="status"></p><textarea id="receiptText" aria-label="報名資料文字" rows="9" readonly hidden></textarea></div>`;
 document.querySelector("#copyReceipt").onclick=copyReceipt;return;
 }
 if(state.step===1){
 app.innerHTML=title(1,"為好奇，選一個起點。","先選擇感興趣的體驗，再填寫參與資料。")+`
 <label for="activitySelect">想參與的體驗<select id="activitySelect">${activities.map(x=>`<option value="${x.id}" ${x.id===state.activity?"selected":""}>${x.title}</option>`).join("")}</select></label>
 <label for="sessionSelect">場次安排<select id="sessionSelect"><option>${a.date}</option></select></label>
 <div class="registration-mode">${icon("clock")}<div><b>${isResident?"固定據點常駐體驗":"體驗興趣登記"}</b><p>${isResident?"活動於丁威咖啡舉行，實際日期需與主辦方協調。":"此方向仍在媒合職人、場地與場次。登記興趣不代表活動已成團；日期與費用以正式公告為準。"}</p></div></div>
 <div class="reg-actions"><a class="btn secondary" href="./index.html#activities">返回活動總覽</a><button class="btn primary" id="next1">填寫參與資料 ${icon("arrow-right")}</button></div>
 <p class="reg-footnote">目前尚未啟用線上收件，完成後可複製資料另行聯絡主辦方。</p>`;
 document.querySelector("#activitySelect").onchange=e=>{state.activity=e.target.value;state.session=activityById(state.activity).date;render()};
 document.querySelector("#next1").onclick=()=>setStep(2);
 }else if(state.step===2){
 app.innerHTML=title(2,"認識你與孩子。","留下活動聯絡所需資料。標示 * 的欄位為必填。")+`
 <form id="registrationForm"><div class="reg-grid"><label>家長姓名 *<input name="parentName" autocomplete="name" required placeholder="怎麼稱呼你"></label><label>聯絡手機 *<input name="phone" type="tel" autocomplete="tel" required placeholder="09xx-xxx-xxx"></label></div><label>Email（選填）<input name="email" type="email" autocomplete="email" placeholder="用於接收活動資訊"></label><div class="reg-grid"><label>孩子姓名 *<input name="childName" required placeholder="孩子的名字"></label><label>孩子年齡 *<input name="childAge" type="number" min="0" required placeholder="例如：8"></label></div><label>參加人數<select name="people"><option>1位孩子＋1位家長</option><option>1位孩子＋2位家長</option><option>2位孩子＋1位家長</option><option>其他</option></select></label><label>想讓主辦方知道的事<textarea name="note" rows="3" placeholder="過敏、特殊需求或想詢問的事，可留白"></textarea></label><label class="reg-consent"><input name="consent" type="checkbox" required><span>我了解實際日期、參與條件與費用需由主辦方確認，並同意提供以上資料作為本活動聯絡用途。</span></label><div class="reg-actions"><button class="btn secondary" type="button" id="back2">${icon("arrow-left")} 上一步</button><button class="btn primary" type="submit">確認資料 ${icon("arrow-right")}</button></div></form>`;
 const form=document.querySelector("#registrationForm");
 Object.entries(state.data).forEach(([k,v])=>{const el=form.elements.namedItem(k);if(el){if(el.type==="checkbox")el.checked=Boolean(v);else el.value=v}});
 form.addEventListener("input",saveDraft);form.addEventListener("change",saveDraft);
 document.querySelector("#back2").onclick=()=>setStep(1);form.onsubmit=e=>{e.preventDefault();saveDraft();setStep(3)};
 }else{
 const d=state.data;
 app.innerHTML=title(3,"再確認一次，就準備好了。","確認活動與參與資料，完成後可複製並保留。")+`<div class="reg-review">${row("體驗活動",a.title)}${row("場次安排",state.session)}${row("家長與聯絡方式",d.parentName+"｜"+d.phone)}${row("Email",d.email||"未填寫")}${row("孩子",d.childName+"｜"+d.childAge+" 歲")}${row("參與人數",d.people)}${row("其他事項",d.note||"無")}</div><div class="reg-warning">${icon("shield")}<p>${REGISTRATION_ENDPOINT?"按下送出後，資料將傳送給主辦方。":"目前尚未啟用線上收件。完成後資料只會儲存在此裝置，主辦方不會自動收到；請複製資料另行聯絡主辦方。"}</p></div><div class="reg-actions"><button class="btn secondary" id="back3">修改資料</button><button class="btn primary" id="submitRegistration">${REGISTRATION_ENDPOINT?"送出報名":"建立並保留資料"} ${icon("check")}</button></div>`;
 document.querySelector("#back3").onclick=()=>setStep(2);document.querySelector("#submitRegistration").onclick=submitRegistration;
 }
}
async function submitRegistration(){
 const button=document.querySelector("#submitRegistration");button.disabled=true;button.textContent="正在處理…";
 const payload={ticket:"TY-"+Date.now().toString(36).toUpperCase(),createdAt:new Date().toISOString(),activity:activityById(state.activity),session:state.session,...state.data};
 let serverSaved=false,localSaved=false;
 if(REGISTRATION_ENDPOINT){try{const r=await fetch(REGISTRATION_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});if(!r.ok)throw Error("Submit failed");serverSaved=true}catch{}}
 try{const stored=JSON.parse(localStorage.getItem("mrYuRegistrations")||"[]");if(!Array.isArray(stored))throw Error("Invalid storage");stored.push(payload);localStorage.setItem("mrYuRegistrations",JSON.stringify(stored));localSaved=true}catch{}
 Object.assign(state,{ticket:payload.ticket,serverSaved,localSaved,done:true});render();document.querySelector(".reg-title h2")?.focus();
}
async function copyReceipt(){
 const a=activityById(state.activity),d=state.data,text=`小小職人體驗參與資料
編號：${state.ticket}
活動：${a.title}
場次：${state.session}
家長：${d.parentName}
手機：${d.phone}
Email：${d.email||"未填寫"}
孩子：${d.childName} / ${d.childAge} 歲
人數：${d.people}
備註：${d.note||"無"}
收件狀態：${state.serverSaved?"已送至主辦方":"尚未送至主辦方"}`;
 const field=document.querySelector("#receiptText"),status=document.querySelector("#receiptStatus");field.value=text;
 try{await navigator.clipboard.writeText(text);status.textContent="資料已複製，可貼到私訊中傳送。"}catch{field.hidden=false;field.focus();field.select();status.textContent="請選取並複製下方文字。"}
}
render();
