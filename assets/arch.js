/* native D-style architecture diagrams: window.ARCH = {nodes:[], edges:[], labels:[], intro:''} */
(()=>{const A=window.ARCH,st=document.querySelector('.stage'),NS='http://www.w3.org/2000/svg';
const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 1920 1080');svg.setAttribute('class','archsvg');
svg.innerHTML='<defs><marker id="aa" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="13" markerHeight="13" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L12 6L0 12z" fill="context-stroke"/></marker></defs>';
st.appendChild(svg);
(A.frames||[]).forEach(f=>{const r=document.createElement('div');r.className='frame';Object.assign(r.style,{left:f.x+'px',top:f.y+'px',width:f.w+'px',height:f.h+'px'});r.innerHTML='<span>'+f.t+'</span>';st.appendChild(r)});
A.edges.forEach((e,i)=>{const p=document.createElementNS(NS,'path');p.setAttribute('d',e.d);p.setAttribute('class','ae '+(e.c||''));if(!e.noarrow)p.setAttribute('marker-end','url(#aa)');if(e.both)p.setAttribute('marker-start','url(#aa)');p.style.setProperty('--d',i);svg.appendChild(p)});
(A.labels||[]).forEach(l=>{const t=document.createElementNS(NS,'text');t.setAttribute('x',l.x);t.setAttribute('y',l.y);t.setAttribute('class','al '+(l.c||''));if(l.a)t.setAttribute('text-anchor',l.a);t.textContent=l.t;svg.appendChild(t)});
const bar=document.getElementById('note');const intro=bar.innerHTML;let sel=null;
A.nodes.forEach((n,i)=>{const el=document.createElement('button');el.className='an '+(n.c||'');Object.assign(el.style,{left:n.x+'px',top:n.y+'px',width:n.w+'px',height:n.h+'px'});el.style.setProperty('--d',i);
 el.innerHTML=(n.k?'<span class="k">'+n.k+'</span>':'')+'<span class="t">'+n.t+'</span>'+(n.s?'<span class="s">'+n.s+'</span>':'');
 el.onclick=e=>{e.stopPropagation();if(sel===el){el.classList.remove('sel');sel=null;bar.innerHTML=intro;return}if(sel)sel.classList.remove('sel');sel=el;el.classList.add('sel');bar.innerHTML='<b>'+n.t+'</b>'+(n.note||n.s||'')};st.appendChild(el)});
st.addEventListener('click',()=>{if(sel){sel.classList.remove('sel');sel=null;bar.innerHTML=intro}});
})();
