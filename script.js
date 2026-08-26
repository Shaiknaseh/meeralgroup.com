const SITE_PROJECT = 'meeralgroup.com';
function siteBase(){ return window.location.hostname.endsWith('github.io') ? `/${SITE_PROJECT}/` : '/'; }
function siteUrl(path=''){ return siteBase() + String(path).replace(/^\/+/, ''); }

const courses = [
 {title:'OSHA 30-Hour General Industry',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'4 Days',image:'assets/images/safety.jpg'},
 {title:'IOSH Managing Safely',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'assets/images/safety.jpg'},
 {title:'First Aid & CPR',category:'First Aid & Emergency',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'assets/images/first-aid.webp'},
 {title:'Fire Safety & Prevention',category:'Fire & Safety',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'assets/images/safety.jpg'},
 {title:'NEBOSH International General Certificate',category:'HSE & Safety',method:'Classroom / Online',language:'English',duration:'10 Days',image:'assets/images/safety.jpg'},
 {title:'Risk Assessment & Risk Management',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'assets/images/safety.jpg'},
 {title:'PMP® Exam Preparation',category:'Professional Certifications',method:'Classroom / Online',language:'Arabic / English',duration:'5 Days',image:'assets/images/corporate.jpg'},
 {title:'Microsoft Power BI Data Analysis',category:'IT & Digital Skills',method:'Classroom / Online',language:'Arabic / English',duration:'4 Days',image:'assets/images/corporate.jpg'},
 {title:'Leadership & Team Management',category:'Management & Leadership',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'assets/images/corporate.jpg'},
 {title:'Electrical Safety for Engineers',category:'Engineering & Technical',method:'Classroom',language:'English',duration:'3 Days',image:'assets/images/safety.jpg'},
 {title:'HR Essentials for Supervisors',category:'HR & Professional Development',method:'Classroom / Online',language:'Arabic / English',duration:'2 Days',image:'assets/images/corporate.jpg'},
 {title:'Emergency Response & Evacuation',category:'First Aid & Emergency',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'assets/images/first-aid.webp'}
];

function cardTemplate(c){
  const slug=((c.title || c.name || 'course')
    .toLowerCase()
    .replace(/&/g,' and ')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-|-$/g,''));
  return `<article class="course-card" data-category="${c.category}">
    <div class="course-image" style="background-image:url('${siteUrl(c.image)}')"><span class="badge">${c.category}</span></div>
    <div class="course-body"><h3>${c.title}</h3>
      <div class="course-meta"><span>◷ ${c.duration}</span><span>◎ ${c.language}</span><span>▣ ${c.method}</span></div>
      <div class="course-footer"><a class="link-arrow" href="${siteUrl(`courses/${slug}/`)}">View Course →</a><button class="btn btn-primary register-trigger" data-course="${c.title}" style="padding:9px 13px;font-size:12px">Register</button></div>
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

document.addEventListener('DOMContentLoaded',()=>{
  setActiveNavigation();
  initHeroSlider();
  document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.toggle('open')); document.querySelectorAll('.main-nav > a, .nav-dropdown-menu a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav')?.classList.remove('open')));
  renderCourses();
  document.querySelectorAll('.filter-list button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-list button').forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilters()}));
  ['courseSearch','categorySelect','methodSelect','languageSelect'].forEach(id=>document.querySelector('#'+id)?.addEventListener('input',applyFilters));
  document.querySelector('#searchBtn')?.addEventListener('click',applyFilters);
  bindRegisterButtons();
  document.querySelectorAll('.modal-close,.modal-backdrop-close').forEach(x=>x.addEventListener('click',closeModal));
  document.querySelector('#registrationModal')?.addEventListener('click',e=>{if(e.target.id==='registrationModal')closeModal()});
  document.querySelector('#registrationForm')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('.notice').style.display='block';e.target.reset()});
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab-pane').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.querySelector('#'+t.dataset.tab)?.classList.add('active')}));
});
