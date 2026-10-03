
(()=>{
'use strict';

const SUPABASE_URL='https://djnpsgtlzgebmjtxfpei.supabase.co';
const SUPABASE_KEY='sb_publishable_97Gyvl_3GC_4irWpbIg0uA_SXDXeWb6';
const LOGO="data:image/webp;base64,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";
const LANG_KEY='oneness-retailer-language';
const page=document.body?.dataset?.page||'home';
const locales={en:'en-IN',hi:'hi-IN',mr:'mr-IN'};
let lang=localStorage.getItem(LANG_KEY)||'';

const DICT={
 hi:{
  'Home':'होम','Shop':'शॉप','Orders':'ऑर्डर','Cart':'कार्ट','Account':'अकाउंट','Earnings':'कमाई',
  'Products':'प्रोडक्ट','Product details':'प्रोडक्ट विवरण','My Cart':'मेरा कार्ट','Delivery address':'डिलीवरी पता',
  'Payment':'भुगतान','Retailer home':'रिटेलर होम','Browse wholesale products and potential margins.':'होलसेल प्रोडक्ट और संभावित मार्जिन देखें।',
  'Potential retail profit · this month':'संभावित रिटेल लाभ · इस महीने','Wholesale':'होलसेल','MRP value':'MRP वैल्यू',
  'Potential margin':'संभावित मार्जिन','Potential profit from this cart':'इस कार्ट का संभावित लाभ','You pay':'आपका भुगतान',
  'Potential retail profit':'संभावित रिटेल लाभ','Your products':'आपके प्रोडक्ट','Coupon':'कूपन','Order summary':'ऑर्डर सारांश',
  'Final payable':'अंतिम भुगतान','Continue to address →':'पते पर आगे बढ़ें →','Where should we deliver?':'डिलीवरी कहाँ करनी है?',
  'Saved addresses':'सेव किए पते','+ Add address':'+ पता जोड़ें','3 · Payment':'3 · भुगतान','2 · Address':'2 · पता','1 · Cart':'1 · कार्ट',
  'Select quantity':'मात्रा चुनें','Stock':'स्टॉक','Minimum qty':'न्यूनतम मात्रा','Quantity step':'मात्रा स्टेप',
  'Current unit price':'वर्तमान प्रति यूनिट कीमत','Order total':'ऑर्डर कुल','Quantity pricing':'मात्रा के अनुसार कीमत',
  'Product information':'प्रोडक्ट जानकारी','Similar products':'समान प्रोडक्ट','Add to cart':'कार्ट में जोड़ें','Buy now':'अभी खरीदें',
  'Security':'सुरक्षा','My account':'मेरा अकाउंट','My orders':'मेरे ऑर्डर','Saved addresses':'सेव किए पते',
  'Edit profile':'प्रोफ़ाइल बदलें','Shop products':'प्रोडक्ट खरीदें','Change password':'पासवर्ड बदलें',
  'Login':'लॉगिन','Create account':'अकाउंट बनाएँ','Email address':'ईमेल पता','Password':'पासवर्ड',
  'Welcome back':'वापसी पर स्वागत है','Full name':'पूरा नाम','Mobile number':'मोबाइल नंबर','Business / shop name':'बिज़नेस / दुकान का नाम',
  'Browse products':'प्रोडक्ट देखें','Potential':'संभावित','margin':'मार्जिन','Currently unavailable':'अभी उपलब्ध नहीं',
  'Apply':'लागू करें','Optional':'वैकल्पिक','Retry':'फिर कोशिश करें','Back':'वापस','Continue':'आगे बढ़ें'
 },
 mr:{
  'Home':'होम','Shop':'शॉप','Orders':'ऑर्डर्स','Cart':'कार्ट','Account':'अकाउंट','Earnings':'कमाई',
  'Products':'उत्पादने','Product details':'उत्पादन तपशील','My Cart':'माझे कार्ट','Delivery address':'डिलिव्हरी पत्ता',
  'Payment':'पेमेंट','Retailer home':'रिटेलर होम','Browse wholesale products and potential margins.':'होलसेल उत्पादने आणि संभाव्य मार्जिन पहा.',
  'Potential retail profit · this month':'संभाव्य रिटेल नफा · या महिन्यात','Wholesale':'होलसेल','MRP value':'MRP मूल्य',
  'Potential margin':'संभाव्य मार्जिन','Potential profit from this cart':'या कार्टचा संभाव्य नफा','You pay':'तुमचे पेमेंट',
  'Potential retail profit':'संभाव्य रिटेल नफा','Your products':'तुमची उत्पादने','Coupon':'कूपन','Order summary':'ऑर्डर सारांश',
  'Final payable':'अंतिम देय','Continue to address →':'पत्त्याकडे पुढे जा →','Where should we deliver?':'डिलिव्हरी कुठे करायची?',
  'Saved addresses':'जतन केलेले पत्ते','+ Add address':'+ पत्ता जोडा','3 · Payment':'3 · पेमेंट','2 · Address':'2 · पत्ता','1 · Cart':'1 · कार्ट',
  'Select quantity':'प्रमाण निवडा','Stock':'स्टॉक','Minimum qty':'किमान प्रमाण','Quantity step':'प्रमाण स्टेप',
  'Current unit price':'सध्याची प्रति युनिट किंमत','Order total':'ऑर्डर एकूण','Quantity pricing':'प्रमाणानुसार किंमत',
  'Product information':'उत्पादन माहिती','Similar products':'समान उत्पादने','Add to cart':'कार्टमध्ये जोडा','Buy now':'आता खरेदी करा',
  'Security':'सुरक्षा','My account':'माझे अकाउंट','My orders':'माझे ऑर्डर्स','Edit profile':'प्रोफाइल बदला',
  'Shop products':'उत्पादने खरेदी करा','Change password':'पासवर्ड बदला',
  'Login':'लॉगिन','Create account':'अकाउंट तयार करा','Email address':'ईमेल पत्ता','Password':'पासवर्ड',
  'Welcome back':'पुन्हा स्वागत आहे','Full name':'पूर्ण नाव','Mobile number':'मोबाइल नंबर','Business / shop name':'व्यवसाय / दुकानाचे नाव',
  'Browse products':'उत्पादने पहा','Potential':'संभाव्य','margin':'मार्जिन','Currently unavailable':'सध्या उपलब्ध नाही',
  'Apply':'लागू करा','Optional':'ऐच्छिक','Retry':'पुन्हा प्रयत्न करा','Back':'मागे','Continue':'पुढे जा'
 }
};

const originals=new WeakMap();
function trText(s){
  if(!lang||lang==='en')return s;
  const d=DICT[lang]||{};
  const trimmed=s.trim();
  if(d[trimmed])return s.replace(trimmed,d[trimmed]);
  let m;
  if((m=trimmed.match(/^Good morning,\s*(.+)$/i)))return s.replace(trimmed,(lang==='hi'?'सुप्रभात, ':'शुभ सकाळ, ')+m[1]);
  if((m=trimmed.match(/^Good afternoon,\s*(.+)$/i)))return s.replace(trimmed,(lang==='hi'?'नमस्कार, ':'नमस्कार, ')+m[1]);
  if((m=trimmed.match(/^Good evening,\s*(.+)$/i)))return s.replace(trimmed,(lang==='hi'?'शुभ संध्या, ':'शुभ संध्याकाळ, ')+m[1]);
  if((m=trimmed.match(/^(\d+) products?$/i)))return s.replace(trimmed,`${m[1]} ${lang==='hi'?'प्रोडक्ट':'उत्पादने'}`);
  if((m=trimmed.match(/^Potential \+(.+)$/i)))return s.replace(trimmed,`${lang==='hi'?'संभावित':'संभाव्य'} +${m[1]}`);
  return s;
}
function translateNode(node){
  if(node.nodeType===Node.TEXT_NODE){
    if(!originals.has(node))originals.set(node,node.nodeValue);
    node.nodeValue=trText(originals.get(node));
    return;
  }
  if(node.nodeType!==Node.ELEMENT_NODE)return;
  if(node.matches('script,style,noscript'))return;
  if(!originals.has(node)){
    originals.set(node,{
      placeholder:node.getAttribute('placeholder'),
      title:node.getAttribute('title')
    });
  }
  const o=originals.get(node);
  if(o?.placeholder){
    const p=o.placeholder;
    const map={
      'Search products or categories':lang==='hi'?'प्रोडक्ट या कैटेगरी खोजें':lang==='mr'?'उत्पादन किंवा कॅटेगरी शोधा':p,
      'Enter code':lang==='hi'?'कोड दर्ज करें':lang==='mr'?'कोड टाका':p
    };
    node.setAttribute('placeholder',map[p]||p);
  }
  for(const child of [...node.childNodes])translateNode(child);
}
let translating=false;
function applyLanguage(){
  document.documentElement.lang=lang||'en';
  translating=true;
  translateNode(document.body);
  document.querySelectorAll('.or-lang-chip').forEach(b=>b.textContent=languageName());
  document.querySelectorAll('[data-or-language]').forEach(b=>b.classList.toggle('active',b.dataset.orLanguage===lang));
  translating=false;
}
function languageName(){
  return lang==='hi'?'हिन्दी':lang==='mr'?'मराठी':'English';
}
function setLanguage(code){
  lang=['en','hi','mr'].includes(code)?code:'en';
  localStorage.setItem(LANG_KEY,lang);
  applyLanguage();
  window.dispatchEvent(new CustomEvent('oneness:language',{detail:{language:lang}}));
}
const observer=new MutationObserver(muts=>{
  if(translating)return;
  for(const m of muts){
    for(const n of m.addedNodes){
      if(n.nodeType===1||n.nodeType===3){
        translating=true;translateNode(n);translating=false;
      }
    }
  }
});
observer.observe(document.documentElement,{childList:true,subtree:true});

function ensureBranding(){
  document.body.classList.add('retail-suite');
  document.querySelectorAll('.logo').forEach(el=>{
    if(!el.querySelector('img'))el.innerHTML=`<img class="or-brand-logo" src="${LOGO}" alt="ONeness Group">`;
  });
  document.querySelectorAll('.brand-mark').forEach(el=>{
    el.innerHTML=`<img class="or-brand-logo" src="${LOGO}" alt="ONeness Group">`;
  });
  const brand=document.querySelector('.brand');
  if(brand && !brand.querySelector('.or-inline-brand-copy') && page!=='account'){
    const copy=brand.querySelector('.brand-copy');
    if(copy){
      copy.innerHTML='<strong>ONeness Group</strong><span>Lakhpati Didi Program</span>';
    }
  }
}

function injectDesktopNav(){
  if(page==='account')return;
  const bar=document.querySelector('.topbar-inner');
  if(!bar||bar.querySelector('.or-desktop-nav'))return;
  const right=bar.lastElementChild;
  if(!right)return;
  const nav=document.createElement('nav');
  nav.className='or-desktop-nav';
  const active=page;
  nav.innerHTML=`
    <a class="${active==='home'?'active':''}" href="retailer-dashboard.html">Home</a>
    <a class="${active==='product'?'active':''}" href="retailer-dashboard.html#products">Shop</a>
    <a class="${active==='earnings'?'active':''}" href="earnings.html">Earnings</a>
    <a class="${active==='cart'?'active':''}" href="cart.html">Cart</a>
    <a href="index.html">Account</a>`;
  const chip=document.createElement('button');
  chip.type='button';chip.className='or-lang-chip';chip.textContent=languageName();
  chip.onclick=openLanguageDialog;
  right.prepend(chip);
  right.prepend(nav);
}

function addAccountLanguageControl(){
  if(page!=='account')return;
  const target=document.querySelector('#accountView .section .card');
  if(target && !document.getElementById('orAccountLanguage')){
    const row=document.createElement('button');
    row.id='orAccountLanguage';
    row.className='menu-row';
    row.style.cssText='width:100%;border-left:0;border-right:0;background:white;text-align:left';
    row.innerHTML=`<div class="menu-icon">文</div><div class="menu-copy"><strong>Language</strong><span>${languageName()} · Change app language</span></div><div class="chev">›</div>`;
    row.onclick=openLanguageDialog;
    target.append(row);
  }
  const authCard=document.querySelector('.auth-card');
  if(authCard && !document.getElementById('orAuthLanguage')){
    const b=document.createElement('button');
    b.id='orAuthLanguage';b.type='button';b.className='or-lang-chip';
    b.style.cssText='margin:0 0 14px auto;display:flex';
    b.textContent=languageName();b.onclick=openLanguageDialog;
    authCard.insertBefore(b,authCard.querySelector('#authContent'));
  }
}

function injectStoreIntro(){
  if(page!=='home'||document.querySelector('.or-store-intro'))return;
  const business=document.querySelector('.business-card');
  if(!business)return;
  const hero=document.createElement('section');
  hero.className='or-store-intro';
  hero.innerHTML=`<div class="or-store-intro-copy"><small>ONeness retailer store</small><h2>Wholesale shopping built around clarity.</h2><p>Compare wholesale price, MRP and potential retail margin before adding products to your order.</p></div><a href="#products">Browse products →</a>`;
  business.parentNode.insertBefore(hero,business);
  const productSection=document.querySelector('.products')?.closest('section');
  if(productSection&&!productSection.id)productSection.id='products';
}

function languageDialog(){
  let d=document.getElementById('orLanguageDialog');
  if(d)return d;
  d=document.createElement('dialog');
  d.id='orLanguageDialog';d.className='or-language-dialog';
  d.innerHTML=`<div class="or-language-head"><div><h2>Choose your language</h2><p>Language can be changed anytime from your account.</p></div><button class="or-language-close" type="button">×</button></div>
  <div class="or-language-options">
    <button class="or-language-option" data-or-language="en"><b>English</b><span>English</span></button>
    <button class="or-language-option" data-or-language="hi"><b>हिन्दी</b><span>Hindi</span></button>
    <button class="or-language-option" data-or-language="mr"><b>मराठी</b><span>Marathi</span></button>
  </div>`;
  document.body.append(d);
  d.querySelector('.or-language-close').onclick=()=>d.close();
  d.querySelectorAll('[data-or-language]').forEach(b=>b.onclick=()=>{setLanguage(b.dataset.orLanguage);d.close();});
  return d;
}
function openLanguageDialog(){
  const d=languageDialog();applyLanguage();d.showModal();
}

function showFirstLanguageGate(){
  if(page!=='account'||lang)return;
  const gate=document.createElement('section');
  gate.className='or-language-gate';
  gate.innerHTML=`<div class="or-language-gate-card">
    <aside class="or-language-gate-brand"><img src="${LOGO}" alt="ONeness Group"><div><h2>Start in your language.</h2><p>Choose the language that feels most comfortable. You can change it later from Account.</p></div></aside>
    <div class="or-language-gate-main"><small>Before login</small><h1>Choose your language</h1><p>English, हिन्दी or मराठी — your account and orders remain the same.</p>
      <div class="or-language-options">
        <button class="or-language-option" data-gate-language="en"><b>English</b><span>English</span></button>
        <button class="or-language-option" data-gate-language="hi"><b>हिन्दी</b><span>Hindi</span></button>
        <button class="or-language-option" data-gate-language="mr"><b>मराठी</b><span>Marathi</span></button>
      </div>
      <div class="or-language-gate-actions"><button class="or-language-continue" type="button" disabled>Continue</button></div>
    </div>
  </div>`;
  document.body.append(gate);
  let chosen='';
  const cont=gate.querySelector('.or-language-continue');
  gate.querySelectorAll('[data-gate-language]').forEach(b=>b.onclick=()=>{
    chosen=b.dataset.gateLanguage;
    gate.querySelectorAll('[data-gate-language]').forEach(x=>x.classList.toggle('active',x===b));
    cont.disabled=false;
  });
  cont.onclick=async()=>{
    setLanguage(chosen);gate.remove();
    setTimeout(()=>maybeSplash(),180);
  };
}

function splashSeenKey(poster){
  return `oneness-splash:${poster.id}`;
}
function isSplashSeen(poster){
  const freq=poster.display_frequency||'once_per_session';
  const key=splashSeenKey(poster);
  if(freq==='always')return false;
  if(freq==='once_per_session')return sessionStorage.getItem(key)==='1';
  const val=localStorage.getItem(key);
  if(freq==='once_per_account')return val==='1';
  if(freq==='once_per_day')return val===new Date().toISOString().slice(0,10);
  return false;
}
function markSplashSeen(poster){
  const freq=poster.display_frequency||'once_per_session';
  const key=splashSeenKey(poster);
  if(freq==='once_per_session')sessionStorage.setItem(key,'1');
  else if(freq==='once_per_day')localStorage.setItem(key,new Date().toISOString().slice(0,10));
  else if(freq==='once_per_account')localStorage.setItem(key,'1');
}

async function splashClient(){
  if(!window.supabase?.createClient)return null;
  if(!window.__onenessSplashClient)window.__onenessSplashClient=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{
    auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false,storageKey:'oneness-retailer'}
  });
  return window.__onenessSplashClient;
}
async function maybeSplash(){
  if(page==='account'&&!lang)return;
  try{
    const client=await splashClient();if(!client)return;
    const {data,error}=await client.rpc('retailer_splash_feed',{p_page:page});
    if(error)return; // migration may not be installed yet; do not break customer UI.
    const rows=(Array.isArray(data)?data:Array.isArray(data?.items)?data.items:[])
      .filter(x=>x?.image_url&&!isSplashSeen(x));
    if(!rows.length)return;
    showSplash(rows);
  }catch{}
}
function showSplash(rows){
  let i=0;
  const overlay=document.createElement('section');
  overlay.className='or-splash';
  overlay.innerHTML=`<div class="or-splash-shell">
    <div class="or-splash-media"><img alt=""><div class="or-splash-gradient"></div></div>
    <div class="or-splash-bar"><div class="or-splash-copy"><b></b><span></span></div><div class="or-splash-actions"></div></div>
    <div class="or-splash-dots"></div>
  </div>`;
  document.body.append(overlay);
  const img=overlay.querySelector('img'),title=overlay.querySelector('.or-splash-copy b'),
        sub=overlay.querySelector('.or-splash-copy span'),actions=overlay.querySelector('.or-splash-actions'),
        dots=overlay.querySelector('.or-splash-dots');
  const close=()=>{rows.forEach(markSplashSeen);overlay.remove();};
  const draw=()=>{
    const p=rows[i];
    img.src=p.image_url;img.alt=p.alt_text||p.title||'ONeness';
    title.textContent=p.title||'ONeness';
    sub.textContent=p.caption||'';
    actions.innerHTML='';
    if(p.dismissible!==false){
      const skip=document.createElement('button');skip.textContent='Skip';skip.onclick=close;actions.append(skip);
    }
    if(p.button_url){
      const a=document.createElement('a');a.href=p.button_url;a.textContent=p.button_label||'Open';actions.append(a);
    }
    const next=document.createElement('button');next.className='primary-splash';
    next.textContent=i===rows.length-1?'Continue':'Next';
    next.onclick=()=>{markSplashSeen(p);if(i<rows.length-1){i++;draw()}else close()};
    actions.append(next);
    dots.innerHTML=rows.map((_,n)=>`<span class="or-splash-dot ${n===i?'active':''}"></span>`).join('');
  };
  draw();
}

function install(){
  ensureBranding();
  injectDesktopNav();
  injectStoreIntro();
  addAccountLanguageControl();
  languageDialog();
  showFirstLanguageGate();
  if(!lang && page!=='account')setLanguage('en');
  else applyLanguage();
  setTimeout(()=>maybeSplash(),900);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
else install();
})();
