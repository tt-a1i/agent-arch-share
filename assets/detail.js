/* detail pages: fit stage, back link (?from=N), shot mode */
(()=>{if(/[?&]shot/.test(location.search))document.documentElement.classList.add('shot');
const st=document.querySelector('.stage');
const fit=()=>{const k=Math.min(innerWidth/1920,innerHeight/1080);st.style.transform=`translate(${(innerWidth-1920*k)/2}px,${(innerHeight-1080*k)/2}px) scale(${k})`};
addEventListener('resize',fit);fit();
const a=document.querySelector('a.back');if(a){const m=location.search.match(/from=(\d+)/);const n=m?m[1]:a.dataset.def;a.href='../index.html#/'+n;a.querySelector('span').textContent='回到第 '+n+' 页';}
addEventListener('keydown',e=>{if(e.key==='Escape'&&a)location.href=a.href;if((e.key==='f'||e.key==='F')&&!e.target.closest('input')){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}});
})();
