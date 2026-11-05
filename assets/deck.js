(()=>{const st=document.querySelector('.stage'),S=[...document.querySelectorAll('.slide')];let i=0;
const SHOT=/[?&]shot/.test(location.search);if(SHOT)document.documentElement.classList.add('shot');
const pg=document.createElement('div');pg.className='prog';st.appendChild(pg);
const MODS=['两层','事件','双工','分离','值守'];
S.forEach((s,k)=>{const n=s.querySelector('.meta .no');if(n)n.textContent=String(k+1).padStart(2,'0');
 s.querySelectorAll('a.go').forEach(a=>a.href=a.getAttribute('href').replace(/from=\d+/,'from='+(k+1)));
 const m=+s.dataset.mod,meta=s.querySelector('.meta');if(m&&meta){const d=document.createElement('div');d.className='mm';
  d.innerHTML=MODS.map((t,j)=>`<span class="${j+1===m?'on':''}"><i>${j+1}</i>${t}</span>`).join('');meta.appendChild(d)}});
const fit=()=>{const k=Math.min(innerWidth/1920,innerHeight/1080),x=(innerWidth-1920*k)/2,y=(innerHeight-1080*k)/2;
 st.style.transform=`translate(${x}px,${y}px) scale(${k})`};
const parse=()=>{const m=location.hash.match(/(\d+)/);return m?parseInt(m[1],10)-1:0};
const frags=s=>[...s.querySelectorAll('.f')];
const count=s=>s.querySelectorAll('[data-count]').forEach(el=>{const to=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,pre=el.dataset.pre||'',suf=el.dataset.suf||'';
 if(SHOT){el.textContent=pre+to.toFixed(dec)+suf;return}const t0=performance.now(),dl=+(el.dataset.delay||300);
 (function f(t){const k=Math.max(0,Math.min(1,(t-t0-dl)/1100)),e=1-Math.pow(1-k,3);el.textContent=pre+(to*e).toFixed(dec)+suf;if(k<1)requestAnimationFrame(f)})(t0)});
const groups=s=>{const g=[],by={};frags(s).forEach(f=>{const k=f.dataset.f;if(k&&by[k])by[k].els.push(f);else{const x={k,els:[f]};g.push(x);if(k)by[k]=x}});return g};
const shown=()=>groups(S[i]).filter(g=>g.els[0].classList.contains('in')).length;
const go=(n,full)=>{const prev=i;i=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>s.classList.toggle('on',k===i));pg.style.width=((i+1)/S.length*100)+'%';
 frags(S[i]).forEach(f=>f.classList.toggle('in',!!full||SHOT));if(prev!==i||!S[i].dataset.seen){S[i].dataset.seen=1;count(S[i])}
 const h='#/'+(i+1);if(location.hash!==h)history.replaceState(null,'',location.pathname+location.search+h);document.title=(S[i].dataset.title||'')+' · 从单会话到 Super-agent';};
const reveal=()=>{const g=groups(S[i]).find(g=>!g.els[0].classList.contains('in'));if(!g)return false;g.els.forEach(x=>x.classList.add('in'));return true};
const next=()=>{if(!reveal())go(i+1)};
const prev=()=>{if(i>0)go(i-1,true)};
addEventListener('keydown',e=>{const k=e.key;if(e.metaKey||e.ctrlKey||e.altKey)return;
 if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(k)){e.preventDefault();next()}
 else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(k)){e.preventDefault();prev()}
 else if(k==='Home')go(0);else if(k==='End')go(S.length-1);
 else if(k==='f'||k==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}});
addEventListener('click',e=>{if(e.target.closest('a,button'))return;e.clientX>innerWidth/2?next():prev()});
addEventListener('resize',fit);addEventListener('hashchange',()=>{const n=parse();if(n!==i)go(n)});
fit();go(parse());})();
