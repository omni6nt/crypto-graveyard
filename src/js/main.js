import { initNav } from './nav.js';
import { DataLoadError, loadCaseIndex } from './data-loader.js';

const sequence = [
  { label:'01 / THE ARRIVAL', line:'A quiet road ends here. Beyond these gates, forgotten fortunes have found their final resting place.', duration:3600, action:null },
  { label:'02 / THE SEAL', line:'The iron has not moved in years. Something old is about to wake.', duration:2600, action:'unlock' },
  { label:'03 / THE GATES OPEN', line:'The chains fall. The gates begin to part.', duration:4700, action:'open' },
  { label:'04 / BEYOND THE THRESHOLD', line:'Come closer. The grounds have stories to tell.', duration:3600, action:'advance' },
  { label:'05 / A DISTURBANCE', line:'Wait… did you hear that beneath the earth?', duration:2500, action:'grave' },
  { label:'06 / THE KEEPER', line:'Someone is climbing out of that grave.', duration:3200, action:'coroner' }
];

function initSceneNavigation() {
  const scenes = [...document.querySelectorAll('[data-scene]')];
  const links = [...document.querySelectorAll('[data-scene-target]')];
  function show(name) {
    const target = scenes.find(s => s.dataset.scene === name);
    if (!target) return;
    scenes.forEach(s => {
      const active = s === target;
      s.classList.toggle('app-scene--active', active);
      s.setAttribute('aria-hidden', String(!active));
      if (active) s.removeAttribute('inert'); else s.setAttribute('inert','');
    });
    links.forEach(a => {
      if (a.dataset.sceneTarget === name) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
    document.body.dataset.currentScene = name;
    history.replaceState(null,'',`#${target.id}`);
  }
  links.forEach(a => a.addEventListener('click',e => {
    e.preventDefault(); show(a.dataset.sceneTarget);
    document.querySelector('.site-nav')?.classList.remove('is-open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded','false');
  }));
  document.querySelectorAll('.scene-return').forEach(b => b.addEventListener('click',()=>show(b.dataset.sceneTarget)));
  window.addEventListener('keydown',e => { if(e.key==='Escape' && document.body.dataset.currentScene!=='cemetery') show('cemetery'); });
  const hashScene = scenes.find(s => s.id === location.hash.slice(1));
  show(hashScene?.dataset.scene || 'cemetery');
  return show;
}

function makeSound() {
  let ctx;
  return function play(kind) {
    try {
      ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const now=ctx.currentTime;
      const osc=ctx.createOscillator(), gain=ctx.createGain(), filter=ctx.createBiquadFilter();
      osc.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      filter.type='lowpass'; filter.frequency.value=kind==='clang'?900:260;
      osc.type=kind==='clang'?'triangle':'sawtooth';
      osc.frequency.setValueAtTime(kind==='clang'?420:75,now);
      osc.frequency.exponentialRampToValueAtTime(kind==='clang'?90:34,now+(kind==='clang'?.65:1.8));
      gain.gain.setValueAtTime(kind==='clang'?.0001:.0001,now);
      gain.gain.exponentialRampToValueAtTime(kind==='clang'?.12:.07,now+.04);
      gain.gain.exponentialRampToValueAtTime(.0001,now+(kind==='clang'?.75:2));
      osc.start(now); osc.stop(now+(kind==='clang'?.8:2.05));
    } catch(e) { console.info('Sound is unavailable in this browser.',e); }
  };
}

function initGateCinematic(showScene) {
  const root=document.querySelector('#cemetery');
  const start=document.querySelector('#begin-cinematic');
  const skip=document.querySelector('#skip-cinematic');
  const story=document.querySelector('#cinematic-story');
  const label=document.querySelector('#story-step');
  const line=document.querySelector('#story-line');
  const progress=[...document.querySelectorAll('[data-progress]')];
  const continueButton=document.querySelector('#coroner-continue');
  const soundButton=document.querySelector('#cinematic-sound');
  if(!root||!start||!skip||!story) return;

  let index=-1, timer=null, soundOn=false;
  const playSound=makeSound();
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  soundButton?.addEventListener('click',()=>{
    soundOn=!soundOn;
    soundButton.setAttribute('aria-pressed',String(soundOn));
    soundButton.textContent=`Sound: ${soundOn?'On':'Off'}`;
    if(soundOn) playSound('rumble');
  });
  function effect(name) {
    root.classList.remove('is-gate-unlocking','is-gate-opening','is-camera-advance','is-coroner-rising','is-coroner-speaking');
    if(name) root.classList.add(`is-${name}`);
    if(soundOn && name) playSound(name==='gate-unlocking'?'clang':'rumble');
  }
  function setCopy(i) {
    story.classList.add('is-changing');
    window.setTimeout(()=>{
      label.textContent=sequence[i].label;
      line.textContent=sequence[i].line;
      progress.forEach((p,n)=>{
        p.classList.toggle('is-current',n===i);
        p.classList.toggle('is-done',n<i);
      });
      story.classList.remove('is-changing');
    },reduced?0:360);
  }
  function run(i) {
    index=i;
    if(i>=sequence.length) {
      effect('coroner-speaking');
      label.textContent='07 / THE CORONER';
      line.textContent='The keeper of these grounds has a word for you.';
      progress.forEach((p,n)=>{p.classList.toggle('is-current',n===4);p.classList.toggle('is-done',n<4);});
      return;
    }
    setCopy(i);
    const action=sequence[i].action;
    if(action==='unlock') effect('gate-unlocking');
    if(action==='open') effect('gate-opening');
    if(action==='advance') effect('camera-advance');
    if(action==='grave') {
      effect(null);
      root.classList.add('is-grave-disturbed');
    }
    if(action==='coroner') {
      effect('coroner-rising');
      window.setTimeout(()=>effect('coroner-speaking'),reduced?80:2900);
    }
    timer=window.setTimeout(()=>run(i+1),reduced?100:sequence[i].duration);
  }
  start.addEventListener('click',()=>{
    if(index!==-1) return;
    start.disabled=true; start.hidden=true; skip.hidden=false;
    root.classList.add('is-playing');
    run(0);
  });
  skip.addEventListener('click',()=>{
    if(timer) clearTimeout(timer);
    root.classList.add('is-playing','is-gate-opening','is-camera-advance','is-coroner-rising','is-coroner-speaking');
    root.classList.remove('is-gate-unlocking');
    index=sequence.length;
    story.hidden=true; skip.hidden=true;
    progress.forEach((p,n)=>{p.classList.toggle('is-current',n===4);p.classList.toggle('is-done',n<4);});
  });
  continueButton?.addEventListener('click',()=>showScene('grounds'));
}

function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
async function renderCases(region){
  try{
    const cases=await loadCaseIndex();
    const list=node('ul','grave-list');
    cases.forEach((entry,i)=>{
      const li=node('li','grave'),a=node('a','grave__link');
      a.href=`#case-${entry.id}`;a.addEventListener('click',e=>e.preventDefault());
      const num=node('span','grave__number',String(i+1).padStart(2,'0'));
      const stone=node('span','grave__stone');
      stone.append(node('span','grave__sigil',['₿','M','◉','⌘','1','△','C','T'][i]||'✦'),node('span','grave__name',entry.name),node('span','grave__status','Case file'));
      a.append(num,stone);li.append(a);list.append(li);
    });
    region.replaceChildren(list);
  }catch(error){
    console.error(error);
    region.replaceChildren(node('p','error-state',error instanceof DataLoadError?'The case archive could not be opened. Refresh to try again.':'The archive encountered an error.'));
  }
}
function init(){
  initNav();
  const show=initSceneNavigation();
  initGateCinematic(show);
  const region=document.querySelector('#case-list-region');
  if(region)renderCases(region);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
