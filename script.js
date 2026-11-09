const creators = [
["lHamza","حمزة","158","!RESPECT | 120 | الملازم يعقوب","live"],
["ESO0_1","ايسو مارتن","10","ايسو القاضيه | الطريق الى البارتنر | Respect!","live"],
["iAymanAhmed","عواد فهد","9","Respect | L.S.P.D نباشر الحالات | المستجد عواد فهد","live"],
["Zyad_Awny","أحمد منسي","5","Respect! | العودة للرول | الطريق الى التوثيق","live"],
["iGHALB","يوسف الغالب","3","!RESPECT | المحامي يوسف الغالب | وزارة العدل","live"],
["Drb7h","كافح المكافح","—","@drb7h","offline"],
["Waakd","واكد الفيصل","—","@waakd","offline"],
["w1pey","مايكي برادلي","—","@w1pey","offline"],
["Al_Hashidi","سعيد الحاشدي | ذباح الحاشدي","—","@al_hashidi","offline"],
["ALRND","جلال العز","—","@alrnd","offline"],
["F1aisal","عقاب المخلوط","—","@f1aisal","offline"],
["sam_722","تميم التميم","—","@sam-722","offline"],
["Fhlwy","زين العطار","—","@fhlwy","offline"],
["Graficsaw","Respect RP","—","@graficsaw","offline"],
["qucs","سعود مساعد","—","@qucs","offline"],
["Hook","سيف عبيد","—","@hook","offline"],
["7_moode","شاهين محمد","—","@7-moode","offline"],
["iC4C","سيف الانصاري","—","@ic4c","offline"],
["ID7O","سايكو دام","—","@id7o","offline"],
["iiMaD","Respect RP","—","@iimad","offline"],
["iMonkey_D","Respect RP","—","@imonkey_d","offline"],
["lHAJAR","Respect RP","—","@lhajar","offline"],
["Mohsen_18","Respect RP","—","@mohsen_18","offline"],
["moustache","Respect RP","—","@moustache","offline"],
["Musab","مصعب الحارثي","—","@musab","offline"],
["NEFOXD","مفرح محمد","—","@nefoxd","offline"],
["OGxHusni","Respect RP","—","@ogxhusni","offline"],
["HOUSSAMSKAY","يوسف اليوسفي","—","@houssamskay","offline"],
["OKB8","عيسى عبيد","—","@okb8","offline"],
["omar_enjoy","شجاع القيصر","—","@omar_enjoy","offline"],
["RAYAN_A3","ريان مبارك","—","@rayan_a3","offline"],
["RAYN","موسى عبيد","—","@rayn","offline"],
["S5B","ماثيو ستانلي","—","@s5b","offline"],
["Seagull","ستيف روجرز","—","@seagull","offline"],
["TAF86","تركي المخلوط","—","@taf86","offline"],
["Vilwo","Respect RP","—","@vilwo","offline"],
["wef0","Respect RP","—","@wef0","offline"],
["wolf","ثابر المثابر","—","@wolf","offline"],
["xKnDrx","Respect RP","—","@xkndrx","offline"]
];

const kick = h => `https://kick.com/${h}`;

function initials(s){ return s.replace(/[^A-Za-z0-9]/g,'').slice(0,2).toUpperCase() || "R"; }

function liveCard(c){
  const [h,n,v,t,status]=c;
  return `<article class="card">
    <div class="thumb"><span class="live">مباشر</span><span class="viewers">◉ ${v}</span></div>
    <div class="info"><div class="name">${n}</div><div class="handle">@${h}</div>
    <div class="title">${t}</div><a class="watch" target="_blank" rel="noopener" href="${kick(h)}">شاهد البث ▶</a></div>
  </article>`;
}
function creatorCard(c){
  const [h,n]=c;
  return `<a class="creator" target="_blank" rel="noopener" href="${kick(h)}">
    <div class="avatar">${initials(h)}</div><div class="name">${n}</div><div class="handle">@${h}</div>
  </a>`;
}
const live = creators.filter(x=>x[4]==="live");
document.getElementById("liveGrid").innerHTML = live.map(liveCard).join("");
document.getElementById("liveCount").textContent = `${live.length} بثوث`;
document.getElementById("creatorGrid").innerHTML = creators.map(creatorCard).join("");

document.querySelectorAll(".cat").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    const filtered = filter==="all" ? live : live.filter(x=>filter==="KICK" || x[3].includes(filter));
    document.getElementById("liveGrid").innerHTML = filtered.map(liveCard).join("");
  });
});
document.getElementById("search").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase().trim();
  const filtered=creators.filter(x=>x.join(" ").toLowerCase().includes(q));
  document.getElementById("creatorGrid").innerHTML=filtered.map(creatorCard).join("");
});
