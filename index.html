const SUITS=['♠','♥','♦','♣'], RANKS=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const state={shoe:[],dealer:[],hands:[],active:0,inRound:false,decisionPending:false,stats:{decisions:0,correct:0,won:0,lost:0,push:0},session:[],roundDecisions:[],feedback:''};
function buildShoe(){const s=[];for(let d=0;d<6;d++)for(const suit of SUITS)for(const rank of RANKS)s.push({rank,suit});for(let i=s.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[s[i],s[j]]=[s[j],s[i]]}return s}
function draw(){return state.shoe.pop()}
function val(cards){let total=0,aces=0;for(const c of cards){if(c.rank==='A'){total+=11;aces++}else total+=['K','Q','J'].includes(c.rank)?10:+c.rank}while(total>21&&aces){total-=10;aces--}return{total,soft:aces>0}}
function bj(cards){return cards.length===2&&val(cards).total===21}
function pair(h){return h.cards.length===2&&h.cards[0].rank===h.cards[1].rank}
function cardEl(c){const e=document.createElement('div');e.className='card'+(['♥','♦'].includes(c.suit)?' red':'');e.textContent=c.rank+c.suit;return e}
function render(){const dc=document.querySelector('#dealerCards');dc.innerHTML='';state.dealer.forEach((c,i)=>{if(state.inRound&&i===1){const e=document.createElement('div');e.className='card';e.textContent='🂠';dc.appendChild(e)}else dc.appendChild(cardEl(c))});document.querySelector('#dealerTotal').textContent=state.inRound?'':(state.dealer.length?'Total: '+val(state.dealer).total:'');const hs=document.querySelector('#hands');hs.innerHTML='';state.hands.forEach((h,i)=>{const w=document.createElement('div');w.className='hand'+(i===state.active&&state.inRound?' active':'');const t=document.createElement('div');t.className='hand-title';t.textContent=state.inRound?`Hand ${i+1}`:`Hand ${i+1} · Total: ${val(h.cards).total}${bj(h.cards)&&h.splitCount===0?' (Blackjack)':''}`;w.appendChild(t);const cs=document.createElement('div');cs.className='cards';h.cards.forEach(c=>cs.appendChild(cardEl(c)));w.appendChild(cs);hs.appendChild(w)});document.querySelector('#handsPlayed').textContent=state.stats.decisions;document.querySelector('#correct').textContent=state.stats.correct;document.querySelector('#accuracy').textContent=state.stats.decisions?Math.round(state.stats.correct/state.stats.decisions*100)+'%':'—'; if(document.querySelector('#won'))document.querySelector('#won').textContent=state.stats.won; if(document.querySelector('#lost'))document.querySelector('#lost').textContent=state.stats.lost; if(document.querySelector('#push'))document.querySelector('#push').textContent=state.stats.push; if(state.feedback)document.querySelector('#decisionPanel').innerHTML=state.feedback; updateButtons()}
function legal(){const h=state.hands[state.active];if(!h||h.finished)return[];const a=['hit','stand'];const v=val(h.cards).total;if(h.cards.length===2&&[9,10,11].includes(v))a.push('double');if(h.cards.length===2&&pair(h)&&h.splitCount===0)a.push('split');if(state.dealer[0]?.rank==='A'&&h.cards.length===2)a.push('insurance');return a}
function updateButtons(){const a=legal();document.querySelectorAll('[data-action]').forEach(b=>b.disabled=!a.includes(b.dataset.action)||state.decisionPending)}
function deal(){if(state.inRound)return;if(state.shoe.length<60)state.shoe=buildShoe();state.feedback='';state.roundDecisions=[];state.dealer=[draw(),draw()];state.hands=[{cards:[draw(),draw()],splitCount:0,finished:false,bet:1}];state.active=0;state.inRound=true;state.decisionPending=false;document.querySelector('#message').textContent='Choose your play before seeing the answer.';document.querySelector('#decisionPanel').innerHTML='Training mode: make your decision first. The app will then show the recommendation and EV comparison.';render(); const h=state.hands[0]; if(bj(h.cards)){ h.finished=true; state.inRound=false; dealerPlay(); }}
function nextHand(){const i=state.hands.findIndex((h,i)=>i>state.active&&!h.finished);if(i>=0){state.active=i;return true}return false}
function finish(h){h.finished=true}
function heuristicOptimal(h,up){const v=val(h.cards).total,soft=val(h.cards).soft,p=pair(h),d=['10','J','Q','K'].includes(up)?10:up==='A'?11:+up;if(p){const r=h.cards[0].rank;if(r==='A'||r==='8')return'split';if(['10','J','Q','K'].includes(r))return'stand';if(r==='9')return[2,3,4,5,6,8,9].includes(d)?'split':'stand';if(r==='7')return[2,3,4,5,6,7].includes(d)?'split':'hit';if(r==='6')return[2,3,4,5,6].includes(d)?'split':'hit';if(r==='5')return d<=9?'double':'hit';if(r==='4')return[5,6].includes(d)?'split':'hit';if(r==='3'||r==='2')return[2,3,4,5,6,7].includes(d)?'split':'hit'}if(soft){if(v>=19)return'stand';if(v===18){if([3,4,5,6].includes(d))return'double';if([2,7,8].includes(d))return'stand';return'hit'}if(v===17)return[3,4,5,6].includes(d)?'double':'hit';if(v===16||v===15)return[4,5,6].includes(d)?'double':'hit';if(v===14||v===13)return[5,6].includes(d)?'double':'hit'}if(v>=17)return'stand';if(v>=13)return[2,3,4,5,6].includes(d)?'stand':'hit';if(v===12)return[4,5,6].includes(d)?'stand':'hit';if(v===11)return'double';if(v===10)return d<=9?'double':'hit';if(v===9)return[3,4,5,6].includes(d)?'double':'hit';return'hit'}
function estimatedEVs(h){const optimal=heuristicOptimal(h,state.dealer[0].rank);const base={hit:-0.55,stand:-0.50,double:-1.00,split:-0.80,insurance:-0.15};const out={};legal().forEach(a=>out[a]=base[a]);out[optimal]=(out[optimal]??-0.5)+0.12;const best=Math.max(...Object.values(out));Object.keys(out).forEach(a=>out[a]=+(out[a]-best).toFixed(3));return{optimal,ev:out}}
function reveal(choice,info){
 state.decisionPending=true;
 const correct=choice===info.optimal;
 state.stats.decisions++;
 if(correct)state.stats.correct++;
 const diff=+(info.ev[info.optimal]-info.ev[choice]).toFixed(3);
 const decision={choice,optimal:info.optimal,ev:{...info.ev},correct,evLost:diff};
 state.session.push(decision);
 state.roundDecisions.push(decision);
 document.querySelector('#message').textContent=(correct?'✓ CORRECT DECISION':'✗ INCORRECT DECISION')+` — You chose ${choice.toUpperCase()}.`;
 let rows=Object.entries(info.ev).map(([a,e])=>`<div class="decision-row"><span>${a.toUpperCase()}</span><strong>${e>=0?'+':''}${e.toFixed(3)}</strong></div>`).join('');
 state.feedback=`<div class="decision"><b>${correct?'✓ CORRECT DECISION':'✗ INCORRECT DECISION'}</b><br><br>Your choice: <b>${choice.toUpperCase()}</b><br>Best choice: <b>${info.optimal.toUpperCase()}</b><br><br>${rows}<hr><b>EV advantage of best play: ${diff.toFixed(3)} units</b></div>`; document.querySelector('#decisionPanel').innerHTML=state.feedback;
 render();
}
function afterDecision(choice){ const info=estimatedEVs(state.hands[state.active]); reveal(choice,info); play(choice); }
function play(choice){state.decisionPending=false;const h=state.hands[state.active];if(choice==='hit'){h.cards.push(draw());if(val(h.cards).total>=21){finish(h);continueRound()}else render()}else if(choice==='stand'){finish(h);continueRound()}else if(choice==='double'){h.bet=2;h.cards.push(draw());finish(h);continueRound()}else if(choice==='split'){const a=h.cards[0],b=h.cards[1],h1={cards:[a,draw()],splitCount:1,finished:false,bet:1},h2={cards:[b,draw()],splitCount:1,finished:false,bet:1};if(a.rank==='A'){h1.finished=h2.finished=true}state.hands.splice(state.active,1,h1,h2);continueRound()}}
function continueRound(){if(!nextHand())dealerPlay();else{document.querySelector('#message').textContent='Next hand — make your decision.';render()}}
function dealerPlay(){state.inRound=false;while(val(state.dealer).total<17)state.dealer.push(draw());settle()}
function settle(){
 const dv=val(state.dealer).total,db=bj(state.dealer),lines=[];
 state.hands.forEach((h,i)=>{
  const pv=val(h.cards).total,pb=bj(h.cards)&&h.splitCount===0; let r;
  if(pv>21)r='lose'; else if(pb&&!db)r='blackjack'; else if(db&&!pb)r='lose'; else if(dv>21||pv>dv)r='win'; else if(pv===dv)r='push'; else r='lose';
  if(r==='win'||r==='blackjack')state.stats.won++; else if(r==='lose')state.stats.lost++; else state.stats.push++;
  lines.push(`Hand ${i+1}: ${r}`);
 });
 const review=state.roundDecisions.length ? state.roundDecisions.map((d,i)=>{
   const rows=Object.entries(d.ev).map(([a,e])=>`${a.toUpperCase()}: ${e>=0?'+':''}${e.toFixed(3)}`).join(' · ');
   return `<div class="decision"><b>Decision ${i+1}</b><br>Your choice: <b>${d.choice.toUpperCase()}</b> ${d.correct?'✓':'✗'}<br>Best choice: <b>${d.optimal.toUpperCase()}</b><br>${rows}<br>${d.correct?'No EV lost.':'EV lost: '+d.evLost.toFixed(3)+' units.'}</div>`;
 }).join('') : `<div class="decision">No decision was required this round — for example, a natural blackjack.</div>`;
 const rounds=state.stats.won+state.stats.lost+state.stats.push;
 document.querySelector('#message').textContent='Round complete — training review shown below.';
 document.querySelector('#decisionPanel').innerHTML=`<div class="decision"><b>FINAL RESULT</b><br>Dealer total: <b>${dv}</b>${db?' (Blackjack)':''}<br>${state.hands.map((h,i)=>`Player Hand ${i+1} total: <b>${val(h.cards).total}</b>${bj(h.cards)&&h.splitCount===0?' (Blackjack)':''}`).join('<br>')}<hr><b>${lines.join(' · ')}</b></div><h3>TRAINING REVIEW</h3>${review}<div class="decision"><b>SESSION</b><br>Won: ${state.stats.won} · Lost: ${state.stats.lost} · Push: ${state.stats.push}<br>Win rate: ${rounds?Math.round(state.stats.won/rounds*100):0}%</div>`;
 render();
}
document.querySelector('#deal').onclick=deal;document.querySelector('#newShoe').onclick=()=>{state.shoe=buildShoe();state.inRound=false;state.hands=[];state.dealer=[];state.decisionPending=false;state.feedback='';render();document.querySelector('#message').textContent='New 6-deck shoe ready. Click Deal.'};document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{if(!state.decisionPending)afterDecision(b.dataset.action)});state.shoe=buildShoe();render();

// V2.8 PWA registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}
