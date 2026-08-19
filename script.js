const courses = [
 {title:'OSHA 30-Hour General Industry',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'4 Days',image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85'},
 {title:'IOSH Managing Safely',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85'},
 {title:'First Aid & CPR',category:'First Aid & Emergency',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85'},
 {title:'Fire Safety & Prevention',category:'Fire & Safety',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'https://images.unsplash.com/photo-1615777128710-9058fb5d8dbd?auto=format&fit=crop&w=900&q=85'},
 {title:'NEBOSH International General Certificate',category:'HSE & Safety',method:'Classroom / Online',language:'English',duration:'10 Days',image:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85'},
 {title:'Risk Assessment & Risk Management',category:'HSE & Safety',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85'},
 {title:'PMP® Exam Preparation',category:'Professional Certifications',method:'Classroom / Online',language:'Arabic / English',duration:'5 Days',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85'},
 {title:'Microsoft Power BI Data Analysis',category:'IT & Digital Skills',method:'Classroom / Online',language:'Arabic / English',duration:'4 Days',image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85'},
 {title:'Leadership & Team Management',category:'Management & Leadership',method:'Classroom / Online',language:'Arabic / English',duration:'3 Days',image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85'},
 {title:'Electrical Safety for Engineers',category:'Engineering & Technical',method:'Classroom',language:'English',duration:'3 Days',image:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85'},
 {title:'HR Essentials for Supervisors',category:'HR & Professional Development',method:'Classroom / Online',language:'Arabic / English',duration:'2 Days',image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85'},
 {title:'Emergency Response & Evacuation',category:'First Aid & Emergency',method:'Classroom',language:'Arabic / English',duration:'2 Days',image:'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=85'}
];

function cardTemplate(c){
  return `<article class="course-card" data-category="${c.category}">
    <div class="course-image" style="background-image:url('${c.image}')"><span class="badge">${c.category}</span></div>
    <div class="course-body"><h3>${c.title}</h3>
      <div class="course-meta"><span>◷ ${c.duration}</span><span>◎ ${c.language}</span><span>▣ ${c.method}</span></div>
      <div class="course-footer"><a class="link-arrow" href="course-detail.html">View Course →</a><button class="btn btn-primary register-trigger" data-course="${c.title}" style="padding:9px 13px;font-size:12px">Register</button></div>
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

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('nav')?.classList.toggle('open'));
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
