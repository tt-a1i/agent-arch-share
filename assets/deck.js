(()=>{const st=document.querySelector('.stage'),S=[...document.querySelectorAll('.slide')];let i=0;
if(/[?&]shot/.test(location.search))document.documentElement.classList.add('shot');
const pg=document.createElement('div');pg.className='prog';st.appendChild(pg);
const ov=document.createElement('div');ov.className='ov';
ov.innerHTML='<div class="ov-hd"><h3>全部幻灯片目录（共 '+S.length+' 页）</h3><span>点击任一页跳转 · 按 O 或 Esc 关闭</span></div><div class="ov-grid"></div>';
const og=ov.querySelector('.ov-grid');
S.forEach((s,k)=>{const c=document.createElement('div');c.className='ov-item';
 const m=s.querySelector('.meta span');const cat=m?m.textContent.replace(/^\d+\s*/,''):'封面 / 尾页';
 c.innerHTML='<div class="oc"><b>'+String(k+1).padStart(2,'0')+'</b>'+cat+'</div><div class="ot">'+(s.dataset.title||('第 '+(k+1)+' 页'))+'</div>';
 c.onclick=e=>{e.stopPropagation();document.body.classList.remove('show-ov');go(k)};og.appendChild(c)});
document.body.appendChild(ov);
const fit=()=>{const k=Math.min(innerWidth/1920,innerHeight/1080);st.style.transform=`translate(${(innerWidth-1920*k)/2}px,${(innerHeight-1080*k)/2}px) scale(${k})`};
const parse=()=>{const m=location.hash.match(/(\d+)/);return m?parseInt(m[1],10)-1:0};
const go=n=>{i=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>s.classList.toggle('on',k===i));pg.style.width=((i+1)/S.length*100)+'%';
 [...og.children].forEach((c,k)=>c.classList.toggle('cur',k===i));
 const h='#/'+(i+1);if(location.hash!==h)history.replaceState(null,'',location.pathname+location.search+h);document.title=(S[i].dataset.title||'')+' · 当瓶颈从模型能力变成人的注意力';};
addEventListener('keydown',e=>{const k=e.key;if(e.metaKey||e.ctrlKey||e.altKey)return;
 if(k==='Escape'&&document.body.classList.contains('show-ov')){document.body.classList.remove('show-ov');return}
 if(k==='o'||k==='O'){document.body.classList.toggle('show-ov');return}
 if(document.body.classList.contains('show-ov'))return;
 if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(k)){e.preventDefault();go(i+1)}
 else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(k)){e.preventDefault();go(i-1)}
 else if(k==='Home')go(0);else if(k==='End')go(S.length-1);
 else if(k==='n'||k==='N')document.body.classList.toggle('show-notes');
 else if(k==='f'||k==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}});
addEventListener('click',e=>{if(e.target.closest('a,button,.notes,.ov'))return;go(e.clientX>innerWidth/2?i+1:i-1)});
addEventListener('resize',fit);addEventListener('hashchange',()=>go(parse()));
fit();go(parse());})();
