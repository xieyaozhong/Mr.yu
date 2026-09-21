const REGISTRATION_ENDPOINT = "";
const activities = [
  {id:"dingwei-cupping",icon:"☕",title:"咖啡杯測體驗課",cat:"飲食",desc:"在丁威咖啡進行 2 小時親子杯測體驗：杯測流程、聞香瓶、風味描述、杯測表，並附贈杯測專用湯匙。",area:"丁威咖啡｜固定據點",date:"常駐活動｜報名後協調日期",price:"一組 NT$1,000",age:"親子參與｜依現場安全安排",status:"常駐活動・開放報名",duration:"2 小時",noticeTitle:"杯測提醒",notice:"咖啡液入口感受後吐入杯中，不以吞飲為活動目的。"},
  {id:"dingwei-glass",icon:"🪟",title:"玻璃拼貼藝術課",cat:"手作",desc:"在丁威咖啡進行 3 小時玻璃拼貼藝術體驗，從配色、造型到作品組裝，完成一件能和光線互動的玻璃作品。",area:"丁威咖啡｜固定據點",date:"常駐活動｜報名後協調日期",price:"一組 NT$2,000",age:"親子參與｜依工具與安全條件安排",status:"常駐活動・開放報名",duration:"3 小時",noticeTitle:"安全提醒",notice:"活動包含玻璃剪裁與焊接等具風險步驟，將依年齡安排適合的工具與防護；高溫、尖銳或其他高風險操作由職人示範、協助或代為完成。"},
  {id:"wood",icon:"🪵",title:"小小木工職人體驗",cat:"手作",desc:"從木材、工具與打磨開始，讓孩子看見一件木作如何從材料變成作品。",area:"台中｜地點確認後通知",date:"第一批體驗｜日期確認後通知",price:"第一批體驗暫不收費",age:"依活動內容確認",status:"開放報名"},
  {id:"coffee",icon:"☕",title:"一杯咖啡怎麼來",cat:"飲食",desc:"從咖啡豆、香氣、研磨到沖煮，理解咖啡師每天如何做判斷。",area:"台中｜地點確認後通知",date:"第一批體驗｜日期確認後通知",price:"第一批體驗暫不收費",age:"建議親子陪同",status:"開放報名"},
  {id:"auto",icon:"🔧",title:"汽車裡面到底有什麼",cat:"技術",desc:"打開引擎室、看輪胎與基本零件，理解汽車如何工作。",area:"台中｜合作場地確認後通知",date:"第一批體驗｜日期確認後通知",price:"第一批體驗暫不收費",age:"依場地與安全條件確認",status:"開放報名"},
  {id:"pottery",icon:"🏺",title:"泥土變成一個器物",cat:"手作",desc:"摸土、塑形、修整，認識泥土如何變成可以留下來的器物。",area:"台中｜工作室確認後通知",date:"第一批體驗｜日期確認後通知",price:"材料成本確認後通知",age:"親子適齡",status:"開放報名"},
  {id:"baking",icon:"🍪",title:"把食材變成點心",cat:"飲食",desc:"秤重、混合、整形與烘烤，把食材變成可以分享的點心。",area:"台中｜合作店家確認後通知",date:"第一批體驗｜日期確認後通知",price:"材料成本確認後通知",age:"建議親子陪同",status:"開放報名"},
  {id:"photo",icon:"📷",title:"孩子的第一堂觀察課",cat:"創作",desc:"用構圖、光線與觀察練習怎麼看，完成一組自己的照片。",area:"台中｜室內外場地確認後通知",date:"第一批體驗｜日期確認後通知",price:"第一批體驗暫不收費",age:"親子適齡",status:"開放報名"},
  {id:"farm",icon:"🌱",title:"食物從哪裡來",cat:"自然",desc:"走進產地，看季節、土壤與作物，知道食物怎麼來。",area:"台中｜依合作農場安排",date:"依產季與農場確認",price:"依場地與材料確認",age:"親子適齡",status:"開放報名"},
  {id:"open",icon:"🔨",title:"你很會做的那件事",cat:"開放提案",desc:"不限領域的職人體驗提案。家長也可以先登記想參加的方向。",area:"台中",date:"媒合後通知",price:"媒合後通知",age:"共同評估",status:"需求登記"}
];

const params=new URLSearchParams(location.search);
let activity=activities.find(x=>x.id===params.get("activity"))||activities[0];
let state={step:1,activity:activity.id,session:activity.date};

const summary=document.querySelector("#registerSummary");
const app=document.querySelector("#registrationApp");
const steps=[...document.querySelectorAll(".register-step span")];

function setStep(n){state.step=n;steps.forEach((s,i)=>s.classList.toggle("active",i<n));render();}
function activityById(id){return activities.find(x=>x.id===id)||activities[0]}
function updateSummary(){
  const a=activityById(state.activity);
  summary.innerHTML=`
    <div class="section-kicker light">PARENT REGISTRATION</div>
    <div class="reg-icon">${a.icon}</div>
    <h1>${a.title}</h1>
    <p>${a.desc}</p>
    <div class="register-meta">
      <div><small>目前狀態</small><b>${a.status}</b></div>
      <div><small>場次</small><b>${state.session}</b></div>
      <div><small>地點</small><b>${a.area}</b></div>
      <div><small>費用</small><b>${a.price}</b></div>
      <div><small>建議年齡</small><b>${a.age}</b></div>
      ${a.duration?`<div><small>時長</small><b>${a.duration}</b></div>`:""}
    </div>
    ${a.notice?`<div class="registration-mode" style="margin-top:18px"><b>${a.noticeTitle||"活動提醒"}</b><br>${a.notice}</div>`:""}`;
}

function render(){
  updateSummary();
  if(state.step===1){
    app.innerHTML=`
      <div class="reg-title"><small>STEP 01</small><h2>選擇活動與場次</h2><p>先選想參加的活動。正式日期與地點確認後，主辦方再依你留下的聯絡方式通知。</p></div>
      <label>活動
        <select id="activitySelect">${activities.map(a=>`<option value="${a.id}" ${a.id===state.activity?"selected":""}>${a.icon} ${a.title}</option>`).join("")}</select>
      </label>
      <label>場次
        <select id="sessionSelect"><option>${activityById(state.activity).date}</option></select>
      </label>
      <div class="registration-mode"><b>${activityById(state.activity).status==="常駐活動・開放報名"?"固定據點常駐活動":"第一批體驗報名"}</b><br>${activityById(state.activity).id==="dingwei-cupping"?"此活動固定於丁威咖啡舉行，完成報名後再協調實際日期。費用為一組 NT$1,000，時長約 2 小時。":activityById(state.activity).id==="dingwei-glass"?"此活動固定於丁威咖啡舉行，完成報名後再協調實際日期。費用為一組 NT$2,000，時長約 3 小時。":"目前部分活動仍在確認合作職人、日期與場地。你可以先完成報名資料，正式資訊確認後再通知你是否成團與最終場次。"}</div>
      <div class="reg-actions"><a class="btn secondary" href="./index.html#activities">返回</a><button class="btn primary" id="next1">下一步 →</button></div>`;
    document.querySelector("#activitySelect").onchange=e=>{state.activity=e.target.value;state.session=activityById(state.activity).date;render()};
    document.querySelector("#next1").onclick=()=>setStep(2);
  } else if(state.step===2){
    app.innerHTML=`
      <div class="reg-title"><small>STEP 02</small><h2>填寫家長與孩子資料</h2><p>這些資料只用於活動聯絡、名額確認與必要的安全資訊。</p></div>
      <form id="registrationForm">
        <div class="reg-grid">
          <label>家長姓名<input name="parentName" required placeholder="王小明"></label>
          <label>手機<input name="phone" required inputmode="tel" placeholder="09xx-xxx-xxx"></label>
        </div>
        <label>Email<input name="email" type="email" placeholder="可選填，用於寄送活動資訊"></label>
        <div class="reg-grid">
          <label>孩子姓名<input name="childName" required placeholder="孩子姓名"></label>
          <label>孩子年齡<input name="childAge" required inputmode="numeric" placeholder="例如：8"></label>
        </div>
        <label>參加人數
          <select name="people"><option value="1位孩子＋1位家長">1位孩子＋1位家長</option><option value="1位孩子＋2位家長">1位孩子＋2位家長</option><option value="2位孩子＋1位家長">2位孩子＋1位家長</option><option value="其他">其他</option></select>
        </label>
        <label>需要主辦方注意的事項<textarea name="note" rows="4" placeholder="過敏、特殊需求、想詢問的事情，可留白"></textarea></label>
        <label class="reg-consent"><input name="consent" type="checkbox" required><span>我了解目前部分活動日期、地點與費用仍待合作確認；正式成團資訊會另外通知，我也同意主辦方使用以上資料進行本活動聯絡。</span></label>
        <div class="reg-actions"><button class="btn secondary" type="button" id="back2">上一步</button><button class="btn primary" type="submit">確認資料 →</button></div>
      </form>`;
    document.querySelector("#back2").onclick=()=>setStep(1);
    document.querySelector("#registrationForm").onsubmit=e=>{
      e.preventDefault();
      const d=new FormData(e.currentTarget);
      state.data=Object.fromEntries(d.entries());
      setStep(3);
    };
  } else if(state.step===3 && !state.done){
    const a=activityById(state.activity),d=state.data;
    app.innerHTML=`
      <div class="reg-title"><small>STEP 03</small><h2>確認報名資料</h2><p>送出前再檢查一次。報名成功後會產生一組報名編號。</p></div>
      <div class="reg-review">
        <div><small>活動</small><b>${a.title}</b></div>
        <div><small>場次</small><b>${state.session}</b></div>
        <div><small>家長</small><b>${d.parentName}｜${d.phone}</b></div>
        <div><small>孩子</small><b>${d.childName}｜${d.childAge} 歲</b></div>
        <div><small>人數</small><b>${d.people}</b></div>
        <div><small>備註</small><b>${d.note||"無"}</b></div>
      </div>
      <div class="reg-actions"><button class="btn secondary" id="back3">修改資料</button><button class="btn primary" id="submitRegistration">送出報名 ✓</button></div>
      <div class="reg-warning">目前網站使用 GitHub Pages。若主辦方尚未設定後端接收 API，送出後資料只會保存在這台裝置，主辦方不會自動收到。系統會明確顯示儲存狀態，不會假裝已傳送。</div>`;
    document.querySelector("#back3").onclick=()=>setStep(2);
    document.querySelector("#submitRegistration").onclick=submitRegistration;
  } else if(state.done){
    const a=activityById(state.activity);
    app.innerHTML=`
      <div class="reg-success">
        <div style="font-size:50px">✓</div>
        <div class="reg-title"><small>REGISTRATION CREATED</small><h2>${state.serverSaved?"報名已送出":"報名資料已建立"}</h2></div>
        <div class="ticket">${state.ticket}</div>
        <p>${state.serverSaved?"資料已成功送到主辦方後台，請保留報名編號。":"目前尚未串接主辦方後台，因此這筆資料只保存在此裝置。你可以先保留報名編號，正式後端完成後需重新送出或由主辦方另行收件。"}</p>
        <div class="reg-ticket"><small>活動</small><b>${a.title}</b><small>場次</small><b>${state.session}</b></div>
        <div class="reg-actions"><a class="btn secondary" href="./index.html#activities">看其他活動</a><button class="btn primary" id="copyReceipt">複製報名資料</button></div>
      </div>`;
    document.querySelector("#copyReceipt").onclick=copyReceipt;
  }
}

async function submitRegistration(){
  const payload={ticket:"TY-"+Date.now().toString(36).toUpperCase(),createdAt:new Date().toISOString(),activity:activityById(state.activity),session:state.session,...state.data};
  let serverSaved=false;
  if(REGISTRATION_ENDPOINT){
    try{
      const r=await fetch(REGISTRATION_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      if(!r.ok) throw new Error("submit failed");
      serverSaved=true;
    }catch(e){serverSaved=false}
  }
  const list=JSON.parse(localStorage.getItem("mrYuRegistrations")||"[]");
  list.push(payload);localStorage.setItem("mrYuRegistrations",JSON.stringify(list));
  state.ticket=payload.ticket;state.serverSaved=serverSaved;state.done=true;render();
}

async function copyReceipt(){
  const a=activityById(state.activity),d=state.data;
  const text=`小小職人體驗報名資料
報名編號：${state.ticket}
活動：${a.title}
場次：${state.session}
家長：${d.parentName}
手機：${d.phone}
孩子：${d.childName} / ${d.childAge}歲
人數：${d.people}
備註：${d.note||"無"}`;
  try{await navigator.clipboard.writeText(text);alert("報名資料已複製")}catch{prompt("請複製以下內容",text)}
}
render();