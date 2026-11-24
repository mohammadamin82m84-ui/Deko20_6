(function(){
var P=[["مطبخ سبز و چوب","modern","آشپزخانه L شکل، MDF مات، ۱۴ متر","mdf"],["آشپزخانه سفید مینیمال","modern","هایگلاس بدون دستگیره، اصفهان","modern"],["قاب‌بندی گردو","classic","کابینت کلاسیک با جزئیات دست‌ساز","classic"],["آشپزخانه ساتن","neo","نئوکلاسیک با قاب ظریف و یراق برنجی","neo"],["کمد دیواری اتاق خواب","wardrobe","ریل کشویی با چیدمان داخلی اختصاصی","wardrobe"],["جزیره مدرن","modern","جزیره مرکزی با سطح کار ضدلک","modern"]];
var g=document.getElementById("pfs"),dg=document.getElementById("dg");
P.forEach(function(x,i){var b=document.createElement("button");b.className="pf rv";b.dataset.s=x[1];b.style.setProperty("--d",(i%3)*.08+"s");b.setAttribute("aria-label","مشاهده پروژه "+x[0]);b.innerHTML='<div class="sw '+x[3]+'"></div><div class="ov"><b>'+x[0]+'</b><u>مشاهده پروژه</u></div>';b.onclick=function(){document.getElementById("dsw").className="sw "+x[3];document.getElementById("dt").textContent=x[0];document.getElementById("dd").textContent=x[2];dg.showModal()};g.appendChild(b)});
document.getElementById("dx").onclick=function(){dg.close()};
document.getElementById("dc").onclick=function(){dg.close()};
dg.addEventListener("click",function(e){if(e.target===dg)dg.close()});
function filt(f){document.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-pressed",t.dataset.f===f)});document.querySelectorAll(".pf").forEach(function(p){p.classList.toggle("h",f!=="all"&&p.dataset.s!==f)})}
document.querySelectorAll(".tab").forEach(function(t){t.onclick=function(){filt(t.dataset.f)}});
document.querySelectorAll("[data-f]:not(.tab)").forEach(function(a){a.addEventListener("click",function(){filt(a.dataset.f)})});
var bg=document.getElementById("bg"),nv=document.getElementById("nav");
function tg(o){nv.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"بستن منو":"باز کردن منو")}
bg.onclick=function(){tg(!nv.classList.contains("open"))};
nv.addEventListener("click",function(e){if(e.target.tagName==="A")tg(false)});
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.12}):null;
document.querySelectorAll(".rv").forEach(function(el){io?io.observe(el):el.classList.add("on")});
document.querySelectorAll(".eta").forEach(function(a){a.addEventListener("click",function(e){var t=document.getElementById("toast"),mob=/Android|iPhone|iPad/i.test(navigator.userAgent);try{navigator.clipboard.writeText("09132377303")}catch(x){}
t.textContent="شماره کپی شد. اگر چت باز نشد، شماره را در ایتا جستجو کنید.";t.classList.add("on");setTimeout(function(){t.classList.remove("on")},4000);
if(mob){e.preventDefault();location.href="eitaa://resolve?phone=989132377303";setTimeout(function(){if(!document.hidden)location.href="https://web.eitaa.com/"},1600)}})});
var fm=document.getElementById("fm");
function fa(s){return s.replace(/[۰-۹]/g,function(d){return"۰۱۲۳۴۵۶۷۸۹".indexOf(d)})}
fm.addEventListener("submit",function(e){e.preventDefault();var ok=true;
[["n",function(v){return v.trim().length>=3}],["p",function(v){return/^(\+98|0098|0)?9\d{9}$/.test(fa(v).replace(/[\s-]/g,""))||/^0\d{10}$/.test(fa(v).replace(/[\s-]/g,""))}],["s",function(v){return!!v}]].forEach(function(r){var el=document.getElementById(r[0]),b=!r[1](el.value);el.parentNode.classList.toggle("bad",b);el.setAttribute("aria-invalid",b);if(b&&ok){el.focus();ok=false}});
if(!ok)return;
/* TODO: اتصال به سرور یا سرویس ایمیل */
fm.classList.add("sent");setTimeout(function(){fm.reset();fm.classList.remove("sent")},6000)});
fm.addEventListener("input",function(e){var f=e.target.closest(".f");if(f)f.classList.remove("bad")});
})();
