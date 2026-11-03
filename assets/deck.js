(()=>{const st=document.querySelector('.stage'),S=[...document.querySelectorAll('.slide')];let i=0;
if(/[?&]shot/.test(location.search))document.documentElement.classList.add('shot');
const pg=document.createElement('div');pg.className='prog';st.appendChild(pg);
const fit=()=>{const k=Math.min(innerWidth/1920,innerHeight/1080);st.style.transform=`translate(${(innerWidth-1920*k)/2}px,${(innerHeight-1080*k)/2}px) scale(${k})`};
const parse=()=>{const m=location.hash.match(/(\d+)/);return m?parseInt(m[1],10)-1:0};
const go=n=>{i=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>s.classList.toggle('on',k===i));pg.style.width=((i+1)/S.length*100)+'%';
 const h='#/'+(i+1);if(location.hash!==h)history.replaceState(null,'',location.pathname+location.search+h);document.title=(S[i].dataset.title||'')+' · 一个人，怎么带十个 Agent？'};
addEventListener('keydown',e=>{const k=e.key;if(e.metaKey||e.ctrlKey||e.altKey)return;
 if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(k)){e.preventDefault();go(i+1)}
 else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(k)){e.preventDefault();go(i-1)}
 else if(k==='Home')go(0);else if(k==='End')go(S.length-1);
 else if(k==='n'||k==='N')document.body.classList.toggle('show-notes');
 else if(k==='f'||k==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}});
addEventListener('click',e=>{if(e.target.closest('a,button,.notes'))return;go(e.clientX>innerWidth/2?i+1:i-1)});
addEventListener('resize',fit);addEventListener('hashchange',()=>go(parse()));
fit();go(parse());})();
