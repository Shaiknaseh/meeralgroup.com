const SITE_PROJECT = 'meeralgroup.com';
function siteBase(){ return window.location.hostname.endsWith('github.io') ? `/${SITE_PROJECT}/` : '/'; }
function siteUrl(path=''){ return siteBase() + String(path).replace(/^\/+/, ''); }

const courses = [
 {title:'IOSH Managing Safely',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'3 Days',fee:'PKR 35,000',image:'assets/images/safety.jpg'},
 {title:'IOSH Working Safely',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 20,000',image:'assets/images/safety.jpg'},
 {title:'OSHA 30-Hour General Industry',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'4 Days',fee:'PKR 32,500',image:'assets/images/safety.jpg'},
 {title:'HSE Fundamentals',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Risk Assessment / HIRA',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 18,000',image:'assets/images/safety.jpg'},
 {title:'JSA / JHA',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Incident Investigation & Root Cause Analysis',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 20,000',image:'assets/images/safety.jpg'},
 {title:'Fire Safety & Prevention',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Emergency Response & Evacuation',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 15,000',image:'assets/images/first-aid.webp'},
 {title:'First Aid & CPR',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 15,000',image:'assets/images/first-aid.webp'},
 {title:'Work at Height Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Confined Space Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 18,000',image:'assets/images/safety.jpg'},
 {title:'Excavation & Trenching Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Electrical Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 18,000',image:'assets/images/safety.jpg'},
 {title:'Lifting & Rigging Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 18,000',image:'assets/images/safety.jpg'},
 {title:'Permit to Work (PTW)',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Construction Safety',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 18,000',image:'assets/images/safety.jpg'},
 {title:'Defensive Driving',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'Behaviour-Based Safety (BBS)',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'HSE Supervisor / HSE Officer Program',category:'HSE & Safety',method:'Classroom / Online',language:'English / Urdu',duration:'5 Days',fee:'PKR 40,000',image:'assets/images/safety.jpg'},
 {title:'ISO 9001:2015 Quality Management – Awareness',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 9001:2015 Quality Management – Internal Auditor',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 35,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 9001:2015 Quality Management – Lead Auditor (IRCA Approved)',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'5 Days',fee:'PKR 95,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 14001:2015 Environmental Management – Awareness',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 14001:2015 Environmental Management – Internal Auditor',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 35,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 14001:2015 Environmental Management – Lead Auditor (IRCA Approved)',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'5 Days',fee:'PKR 97,000',image:'assets/images/corporate.jpg'},
 {title:'ISO 45001:2018 Occupational Health & Safety – Awareness',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'1 Day',fee:'PKR 15,000',image:'assets/images/safety.jpg'},
 {title:'ISO 45001:2018 Occupational Health & Safety – Internal Auditor',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 35,000',image:'assets/images/safety.jpg'},
 {title:'ISO 45001:2018 Occupational Health & Safety – Lead Auditor (IRCA Approved)',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'5 Days',fee:'PKR 98,000',image:'assets/images/safety.jpg'},
 {title:'Integrated ISO 9001 + ISO 14001 + ISO 45001 Awareness',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 25,000',image:'assets/images/corporate.jpg'},
 {title:'Integrated QHSE Internal Auditor',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'3 Days',fee:'PKR 55,000',image:'assets/images/corporate.jpg'},
 {title:'Integrated QHSE Management Systems',category:'Quality, Environment & OH&S',method:'Classroom / Online',language:'English / Urdu',duration:'3 Days',fee:'PKR 65,000',image:'assets/images/corporate.jpg'},
 {title:'NEBOSH International General Certificate (IGC)',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'PMP® Training & Exam Preparation',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'Risk Management',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'3 Days',fee:'PKR 45,000',image:'assets/images/corporate.jpg'},
 {title:'Project Risk Management',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 25,000',image:'assets/images/corporate.jpg'},
 {title:'Project Planning & Scheduling',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 25,000',image:'assets/images/corporate.jpg'},
 {title:'Primavera P6',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'4 Days',fee:'PKR 40,000',image:'assets/images/corporate.jpg'},
 {title:'Contract Management',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'3 Days',fee:'PKR 30,000',image:'assets/images/corporate.jpg'},
 {title:'Leadership & Supervisory Skills',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 20,000',image:'assets/images/corporate.jpg'},
 {title:'Communication & Professional Skills',category:'Project & Professional Management',method:'Classroom / Online',language:'English / Urdu',duration:'2 Days',fee:'PKR 15,000',image:'assets/images/corporate.jpg'},
 {title:'Power BI',category:'IT & Digital Skills',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'Advanced Power BI',category:'IT & Digital Skills',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'Data Analytics',category:'IT & Digital Skills',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'AI for Business / Professionals',category:'IT & Digital Skills',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'},
 {title:'Advanced Excel',category:'IT & Digital Skills',method:'Classroom / Online',language:'English / Urdu',duration:'Enquire',fee:'Customized Pricing – Enquire Now',image:'assets/images/corporate.jpg'}
];

function cardTemplate(c){
  const slug=((c.title || c.name || 'course')
    .toLowerCase()
    .replace(/&/g,' and ')
    .replace(/®/g,'')
    .replace(/[–—]/g,'-')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-|-$/g,''));
  const feeClass=String(c.fee||'').startsWith('PKR') ? 'course-fee fixed' : 'course-fee enquire';
  return `<article class="course-card" data-category="${c.category}">
    <div class="course-image" style="background-image:url('${siteUrl(c.image)}')"><span class="badge">${c.category}</span></div>
    <div class="course-body"><h3>${c.title}</h3>
      <div class="${feeClass}">${c.fee||''}</div>
      <div class="course-meta"><span>◷ ${c.duration}</span><span>◎ ${c.language}</span><span>▣ ${c.method}</span></div>
      <div class="course-footer"><a class="link-arrow" href="${siteUrl(`courses/${slug}/`)}">View Course →</a><a class="btn btn-primary" href="mailto:info@meeralgroup.com?subject=Course%20Registration%20Enquiry%20-%20${encodeURIComponent(c.title)}&body=${encodeURIComponent(`Hello Meeral Group,\n\nI would like to register/enquire for:\nCourse: ${c.title}\n\nName:\nPhone / WhatsApp:\nPreferred training mode:\nPreferred date:\n\nThank you.`)}" style="padding:9px 13px;font-size:12px">Register</a></div>
    </div></article>`
}
function renderCourses(list=courses){
  const grid=document.querySelector('#courseGrid'); if(!grid)return;
  grid.innerHTML=list.map(cardTemplate).join('');
  const count=document.querySelector('#courseCount'); if(count)count.textContent=`${list.length} courses found`;
  bindRegisterButtons();
}
function applyFilters(){
  const q=(document.querySelector('#courseSearch')?.value||'').toLowerCase();
  const cat=document.querySelector('#categorySelect')?.value||'All';
  const method=document.querySelector('#methodSelect')?.value||'All';
  const language=document.querySelector('#languageSelect')?.value||'All';
  const active=document.querySelector('.filter-list button.active')?.dataset.category||'All';
  const category = active!=='All' ? active : cat;
  const filtered=courses.filter(c=>c.title.toLowerCase().includes(q) && (category==='All'||c.category===category) && (method==='All'||c.method.includes(method)) && (language==='All'||c.language.includes(language)));
  renderCourses(filtered);
}
function bindRegisterButtons(){
 document.querySelectorAll('.register-trigger').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.course||'Selected Course')));
}
function openModal(course){const m=document.querySelector('#registrationModal');if(!m)return;m.classList.add('open');const s=m.querySelector('[name="course"]');if(s)s.value=course}
function closeModal(){document.querySelector('#registrationModal')?.classList.remove('open')}


function initHeroSlider(){
  const slides=[...document.querySelectorAll('.hero-slide')];
  const dots=[...document.querySelectorAll('.hero-dot')];
  if(slides.length<2)return;
  let current=0;
  let timer;
  const show=(index)=>{
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===current));
  };
  const start=()=>{
    clearInterval(timer);
    timer=setInterval(()=>show(current+1),5000);
  };
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);start()}));
  document.querySelector('.hero')?.addEventListener('mouseenter',()=>clearInterval(timer));
  document.querySelector('.hero')?.addEventListener('mouseleave',start);
  start();
}


function setActiveNavigation(){
  let raw=(window.location.pathname||'/').replace(/\/+/g,'/');
  const githubPrefix=`/${SITE_PROJECT}`;
  if(window.location.hostname.endsWith('github.io') && raw.startsWith(githubPrefix)){
    raw=raw.slice(githubPrefix.length) || '/';
  }
  const path=raw.endsWith('/')?raw:raw.substring(0,raw.lastIndexOf('/')+1);
  const nav=document.querySelector('.main-nav');
  if(!nav)return;
  nav.querySelectorAll('a.active').forEach(a=>a.classList.remove('active'));

  let section='home';
  if(path.startsWith('/about/')) section='about';
  else if(path.startsWith('/services/')) section='services';
  else if(path.startsWith('/courses/') || path.startsWith('/corporate-training/')) section='courses';
  else if(path.startsWith('/accreditations/')) section='accreditations';
  else if(path.startsWith('/gallery/')) section='gallery';
  else if(path.startsWith('/verification/')) section='verification';
  else if(path.startsWith('/profile/')) section='profile';
  else if(path.startsWith('/contact/')) section='contact';

  const active=nav.querySelector(`[data-nav="${section}"]`);
  if(active)active.classList.add('active');

  const contactBtn=document.querySelector('.reference-contact-btn');
  if(contactBtn)contactBtn.classList.toggle('active',section==='contact');
}


function applyCourseCategoryFromUrl(){
  const params=new URLSearchParams(window.location.search);
  const requested=params.get('category');
  if(!requested)return false;
  const categorySelect=document.querySelector('#categorySelect');
  if(categorySelect && [...categorySelect.options].some(o=>o.value===requested)){
    categorySelect.value=requested;
  }
  document.querySelectorAll('.filter-list button').forEach(btn=>{
    btn.classList.toggle('active',btn.dataset.category===requested);
  });
  applyFilters();
  return true;
}

document.addEventListener('DOMContentLoaded',()=>{
  setActiveNavigation();
  initHeroSlider();
  document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open')); document.querySelectorAll('.main-nav > a, .nav-dropdown-menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.remove('open')));
  if(!applyCourseCategoryFromUrl()) renderCourses();
  document.querySelectorAll('.filter-list button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-list button').forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilters()}));
  ['courseSearch','categorySelect','methodSelect','languageSelect'].forEach(id=>document.querySelector('#'+id)?.addEventListener('input',applyFilters));
  document.querySelector('#searchBtn')?.addEventListener('click',applyFilters);
  bindRegisterButtons();
  document.querySelectorAll('.modal-close,.modal-backdrop-close').forEach(x=>x.addEventListener('click',closeModal));
  document.querySelector('#registrationModal')?.addEventListener('click',e=>{if(e.target.id==='registrationModal')closeModal()});
  document.querySelector('#registrationForm')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('.notice').style.display='block';e.target.reset()});
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab-pane').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.querySelector('#'+t.dataset.tab)?.classList.add('active')}));
});
