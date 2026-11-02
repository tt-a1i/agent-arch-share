(function(){
  const slides=[...document.querySelectorAll('.slide')], N=slides.length;
  const stage=document.getElementById('stage'), num=document.getElementById('num'), bar=document.getElementById('bar'), toc=document.getElementById('toc');
  let cur=0;
  function fit(){const s=Math.min(innerWidth/1600,innerHeight/900);stage.style.transform='scale('+s+')';}
  addEventListener('resize',fit);fit();
  function go(i,push){
    i=Math.max(0,Math.min(N-1,i));
    slides[cur].classList.remove('active');
    cur=i; const el=slides[cur];
    // restart CSS animations
    el.classList.remove('active'); void el.offsetWidth; el.classList.add('active');
    num.textContent=(cur+1)+' / '+N; bar.style.width=((cur+1)/N*100)+'%';
    toc.textContent=el.dataset.title||'';
    if(location.hash!=='#/'+(cur+1)) history.replaceState(null,'','#/'+(cur+1));
    hooks.forEach(h=>h(cur+1,el));
  }
  const hooks=[];
  function fromHash(){const m=location.hash.match(/#\/(\d+)/);return m?parseInt(m[1],10)-1:0;}
  addEventListener('hashchange',()=>{const i=fromHash();if(i!==cur)go(i);});
  addEventListener('keydown',e=>{
    if(['ArrowRight','PageDown',' ','Enter','ArrowDown'].includes(e.key)){e.preventDefault();go(cur+1);}
    else if(['ArrowLeft','PageUp','Backspace','ArrowUp'].includes(e.key)){e.preventDefault();go(cur-1);}
    else if(e.key==='Home')go(0); else if(e.key==='End')go(N-1);
    else if(e.key==='f'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}
  });
  document.getElementById('prev').onclick=()=>go(cur-1);
  document.getElementById('next').onclick=()=>go(cur+1);
  // click on empty slide area advances (not on links/buttons/interactive)
  stage.addEventListener('click',e=>{if(e.target.closest('a,button,input,label,svg'))return; const r=stage.getBoundingClientRect(); (e.clientX-r.left)<r.width*0.25?go(cur-1):go(cur+1);});

  // slide 2: sessions multiplying
  const grid=document.getElementById('sessGrid');
  const names=['修 PR #70','调研 dots','写周报','排查 CI','审 issue','回邮件','改文档','跑评测','看新闻','对账单','做 PPT','发布 v1.5'];
  names.forEach((n,i)=>{const d=document.createElement('div');d.innerHTML=n+'<i></i>';if(i>=5)d.className='lost';d.style.animationDelay=(0.35+i*0.28)+'s';grid.appendChild(d);});

  // slide 8: Hive terminal typing
  const term=document.getElementById('term');
  const lines=[
    ['m','# Hive 工作台 · 127.0.0.1'],
    ['p','orchestrator$ team send coder "修复设置页搜索 bug"'],
    ['w','  coder      idle → working'],
    ['p','orchestrator$ team send reviewer "审查边界情况"'],
    ['w','  reviewer   idle → working'],
    ['m','  … 构建慢、思考久：Hive 不猜它卡没卡 …'],
    ['p','coder$ team report "已修复，测试通过"'],
    ['ok','  coder      working → idle'],
    ['p','reviewer$ team report "发现 1 处边界问题"'],
    ['ok','  reviewer   working → idle'],
    ['m','  .hive/tasks.md 已更新 · 等 Orchestrator 验收']
  ];
  let tt=[];
  function runTerm(){tt.forEach(clearTimeout);tt=[];term.innerHTML='';lines.forEach((l,i)=>tt.push(setTimeout(()=>{const d=document.createElement('div');d.className=l[0];d.textContent=l[1];term.appendChild(d);},400+i*650)));}

  // slide 9: bot ring
  const ring=document.getElementById('botRing');
  const bots=[['学习研究官','#a78bfa'],['架构观察员','#fb7185'],['OpenPi','#fbbf24'],['Archify','#fbbf24'],['Hive','#fbbf24'],['新闻搜集官','#a78bfa'],['创新侦察官','#a78bfa'],['人间观察员','#a78bfa'],['X 实践官','#a78bfa'],['邮件管家','#34d399']];
  const ns='http://www.w3.org/2000/svg';
  bots.forEach((b,i)=>{const a=-Math.PI/2+i*2*Math.PI/bots.length, x=320+225*Math.cos(a), y=300+225*Math.sin(a);
    const g=document.createElementNS(ns,'g');g.setAttribute('class','bot');g.style.animationDelay=(0.3+i*0.12)+'s';
    const l=document.createElementNS(ns,'line');l.setAttribute('x1',320);l.setAttribute('y1',300);l.setAttribute('x2',x);l.setAttribute('y2',y);l.setAttribute('stroke','rgba(255,255,255,.12)');l.setAttribute('stroke-dasharray','3 6');
    const r=document.createElementNS(ns,'rect');const w=b[0].length*17+30;r.setAttribute('x',x-w/2);r.setAttribute('y',y-22);r.setAttribute('width',w);r.setAttribute('height',44);r.setAttribute('rx',22);r.setAttribute('fill','#141b38');r.setAttribute('stroke',b[1]);r.setAttribute('stroke-width',2);
    const t=document.createElementNS(ns,'text');t.setAttribute('x',x);t.setAttribute('y',y+6);t.setAttribute('fill','#eef2ff');t.textContent=b[0];
    const p=document.createElementNS(ns,'circle');p.setAttribute('r',5);p.setAttribute('fill',b[1]);
    const am=document.createElementNS(ns,'animateMotion');am.setAttribute('dur','3.2s');am.setAttribute('begin',(i*0.33)+'s');am.setAttribute('repeatCount','indefinite');am.setAttribute('path',`M320,300 L${x},${y}`);p.appendChild(am);
    g.append(l,p,r,t);ring.appendChild(g);});
  const st=document.createElement('style');st.textContent='.slide.active .bot{animation:fadeUp .5s both}';document.head.appendChild(st);

  hooks.push((n)=>{if(n===8)runTerm();});
  go(fromHash());
})();
