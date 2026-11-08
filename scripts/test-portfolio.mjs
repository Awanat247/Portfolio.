import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import ts from 'typescript';
import {JSDOM} from 'jsdom';
import React,{act} from 'react';
const require=createRequire(import.meta.url);
const assetExists=p=>fs.existsSync(p.replace(/^public(?:\.\/)?/, 'public/')); 
const dom=new JSDOM('<!doctype html><html><body><div id="test-root"></div></body></html>',{url:'https://awanat247.github.io/Portfolio/'});
for(const k of ['window','document','HTMLElement','HTMLDialogElement','MouseEvent','KeyboardEvent','Event'])globalThis[k]=dom.window[k];
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
globalThis.IS_REACT_ACT_ENVIRONMENT=true;globalThis.requestAnimationFrame=fn=>fn();
const {createRoot,hydrateRoot}=await import('react-dom/client');
let clipboard='';Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{clipboard=t}},configurable:true});
// jsdom has no native modal implementation. Browser-native modal behavior needs browser QA.
HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');this.querySelector('[autofocus]')?.focus()};
const temp=path.resolve('.runtime/portfolio-component.cjs');fs.mkdirSync(path.dirname(temp),{recursive:true});
fs.writeFileSync(temp,ts.transpileModule(fs.readFileSync('src/Portfolio.tsx','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}}).outputText);
const Home=require(temp).default;const root=createRoot(document.querySelector('#test-root'));
const q=sel=>document.querySelector(sel);const qa=sel=>[...document.querySelectorAll(sel)];
const label=text=>q(`button[aria-label="${text}"]`);const find=text=>qa('button').find(b=>b.textContent.trim()===text);
const click=async element=>{assert.ok(element,'control exists');await act(async()=>element.click())};
const check=(name,fn)=>{fn();console.log('PASS',name)};
const selectedSample=()=>q('.case-dialog .source-image-wrap img').getAttribute('src');
const selectValue=async (element,value)=>{await act(async()=>{element.value=String(value);element.dispatchEvent(new Event('change',{bubbles:true}))})};
await act(async()=>root.render(React.createElement(Home)));
check('A clear introduction leads straight to the strongest project',()=>{assert.equal(qa('h1').length,1);assert.match(q('h1').textContent,/Your social media/);assert.equal(qa('.featured-project').length,2);assert.match(q('.featured-project').textContent,/PLANPADI/);const order=qa('main>section').map(e=>e.id);assert.ok(order.indexOf('work')<order.indexOf('about'));assert.ok(order.indexOf('work')<order.indexOf('services'));assert.match(q('.strategy-feature').textContent,/STRATEGY EXAMPLE/)});
await click(label('Next featured slide'));check('Featured carousel advances',()=>assert.match(q('.featured-slide-controls').textContent,/2 \/ 5/));
const cover=q('.featured-art-button img').getAttribute('src');const opener=label('Open Planpadi carousel');await click(opener);
check('Featured carousel opens at the selected slide',()=>{assert.equal(selectedSample(),cover);assert.match(q('.sample-controls').textContent,/2 \/ 9/)});await click(label('Close case study'));check('Featured carousel focus restores',()=>assert.equal(document.activeElement,opener));
await click(label('Previous featured slide'));await click(label('Previous featured slide'));check('Featured carousel wraps backwards',()=>assert.match(q('.featured-slide-controls').textContent,/5 \/ 5/));await click(label('Next featured slide'));check('Featured carousel wraps forwards',()=>assert.match(q('.featured-slide-controls').textContent,/1 \/ 5/));
await act(async()=>q('#preview-tab-carousel').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true})));
check('Featured tabs support keyboard navigation',()=>{assert.equal(q('#preview-tab-calendar').getAttribute('aria-selected'),'true');assert.ok(label('Open Planpadi content calendar'))});
await click(label('Open Planpadi content calendar'));check('Calendar opens at the workbook sample',()=>{assert.match(q('.sample-controls').textContent,/9 \/ 9/);assert.ok(q('.original-file-link').getAttribute('href').endsWith('two-week-calendar.xlsx'))});await click(label('Close case study'));
await click(q('#preview-tab-reel'));check('Featured reel has native controls and no autoplay',()=>{const video=q('.featured-video video');assert.ok(video);assert.equal(video.controls,true);assert.equal(video.hasAttribute('autoplay'),false);assert.ok(assetExists('public'+video.getAttribute('src')))});await click(q('#preview-tab-carousel'));
check('Three concrete engagement options are visible',()=>{assert.equal(qa('.engagement-card').length,3);for(const card of qa('.engagement-card'))assert.ok(card.querySelectorAll('li').length>=4)});
for(const [cta,value] of [['Discuss ongoing management','Ongoing social media management'],['Discuss content creation','Content creation support'],['Discuss a strategy project','Strategy & content planning']]){await click(q(`a[aria-label="${cta}"]`));check(`${value}: enquiry is preselected`,()=>{assert.equal(q('#support-choice').value,value);assert.match(decodeURIComponent(q('[aria-label="Email project brief"]').getAttribute('href')),new RegExp(value.replace('&','&')))});}
await selectValue(q('#support-choice'),'Content creation support');
const brief='My brand is Example & Co. I need a calendar, captions and Reels for Instagram.';
await act(async()=>{Object.getOwnPropertyDescriptor(dom.window.HTMLTextAreaElement.prototype,'value').set.call(q('#project-brief'),brief);q('#project-brief').dispatchEvent(new Event('input',{bubbles:true}))});
check('Project brief appears safely in the email draft',()=>{const href=q('[aria-label="Email project brief"]').getAttribute('href');const params=new URLSearchParams(href.slice(href.indexOf('?')+1));assert.equal(params.get('subject'),'Portfolio enquiry · Content creation support');assert.ok(params.get('body').includes(brief));assert.ok(href.includes('%26'));assert.ok(href.startsWith('mailto:shabiawanat47@gmail.com?'))});
check('WhatsApp receives the same unsent brief',()=>{const url=new URL(q('.brief-card .whatsapp-link').getAttribute('href'));assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/2348105189626');assert.ok(url.searchParams.get('text').includes(brief));assert.ok(url.searchParams.get('text').includes('Content creation support'));assert.match(q('.draft-note').textContent,/draft/)});
for(const [category,count] of [['Content',3],['Strategy',1],['Planning',1],['Analytics',1],['All samples',6]]){await click(find(category));check(`${category}: library filter`,()=>assert.equal(qa('.collection-card').length,count))}
for(const [name,count] of [['Planpadi content collection',9],['Marketing principles carousel',8],['Social graphic design collection',9],['The Glow Blueprint',14],['Content calendar workbooks',2],['Analytics snapshot comparison',2]]){
 const button=label(`Explore ${name} collection`);await click(button);assert.ok(q('dialog[open]'));assert.equal(document.body.style.overflow,'hidden');
 for(let i=0;i<count;i++){assert.ok(assetExists('public'+selectedSample()));assert.match(q('.sample-controls').textContent,new RegExp(`${i+1} / ${count}`));const source=q('.original-file-link');if(source)assert.ok(assetExists('public'+source.getAttribute('href')));if(i<count-1)await click(label('Next work sample'))}
 check(`${name}: all samples and source files resolve`,()=>assert.equal(q('.source-sample figcaption span:last-child').textContent,String(count).padStart(2,'0')));
 await click(label('Next work sample'));assert.match(q('.sample-controls').textContent,new RegExp(`1 / ${count}`));await click(label('Previous work sample'));assert.match(q('.sample-controls').textContent,new RegExp(`${count} / ${count}`));
 if(count>3){await selectValue(q('select[aria-label="Choose work sample"]'),0);assert.match(q('.sample-controls').textContent,new RegExp(`1 / ${count}`))}
 await click(label('Enlarge work sample'));assert.ok(q('.sample-explorer.enlarged'));await click(label('Fit work sample'));assert.equal(q('.sample-explorer.enlarged'),null);
 await click(find('Role & scope'));assert.ok(q('.capabilities'));await act(async()=>find('Role & scope').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true})));assert.equal(q('[role="tab"][aria-selected=true]#study-tab-2').textContent,'Strategy');assert.equal(qa('.strategy-step').length,3);await click(find('Deliverables'));assert.ok(q('.outcome-panel'));assert.doesNotMatch(q('.outcome-panel').textContent,/\d+\s*%/);
 await click(label('Close case study'));check(`${name}: navigation and focus restoration`,()=>{assert.equal(q('dialog'),null);assert.equal(document.body.style.overflow,'');assert.equal(document.activeElement,button)});
}
for(const [openerLabel,indices] of [['Explore Planpadi content collection case study',[0,5,8]],['Explore The Glow Blueprint case study',[1,2,9]]]){
 const opener=label(openerLabel);await click(opener);
 check(`${openerLabel}: opens the project story`,()=>{assert.ok(q('.project-story'));assert.equal(qa('.study-tabs [role="tab"]').length,5);assert.equal(q('#study-tab-4').getAttribute('aria-selected'),'true');assert.equal(qa('.story-choice').length,3);assert.match(q('.story-review').textContent,/would/i);assert.doesNotMatch(q('.story-context').textContent,/\d+\s*%/)});
 if(openerLabel.includes('Planpadi'))assert.match(q('.story-facts').textContent,/Live account management/);else assert.match(q('.story-context').textContent,/planning hypotheses/);
 for(let i=0;i<indices.length;i++){
  const storyButtons=qa('.story-choice button');await click(storyButtons[i]);
  check(`Story evidence link ${i+1}: correct source and focus`,()=>{assert.equal(q('#study-tab-0').getAttribute('aria-selected'),'true');assert.equal(document.activeElement,q('#study-panel-0'));assert.equal(q('select[aria-label="Choose work sample"]').value,String(indices[i]));assert.ok(assetExists('public'+selectedSample()))});
  await click(find('Project story'));
 }
 await act(async()=>q('#study-tab-4').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true})));assert.equal(q('#study-tab-0').getAttribute('aria-selected'),'true');
 await act(async()=>q('#study-tab-0').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true})));assert.equal(q('#study-tab-4').getAttribute('aria-selected'),'true');
 await act(async()=>q('#study-tab-4').dispatchEvent(new KeyboardEvent('keydown',{key:'Home',bubbles:true})));assert.equal(q('#study-tab-0').getAttribute('aria-selected'),'true');
 await act(async()=>q('#study-tab-0').dispatchEvent(new KeyboardEvent('keydown',{key:'End',bubbles:true})));assert.equal(q('#study-tab-4').getAttribute('aria-selected'),'true');
 await click(label('Close case study'));check('Story modal closes and restores its opener',()=>assert.equal(document.activeElement,opener));
}
await click(label('Explore Marketing principles carousel collection'));await act(async()=>q('#study-tab-0').dispatchEvent(new KeyboardEvent('keydown',{key:'End',bubbles:true})));check('Other studies keep their original four-tab keyboard navigation',()=>{assert.equal(qa('.study-tabs [role="tab"]').length,4);assert.equal(q('#study-tab-3').getAttribute('aria-selected'),'true')});await click(label('Close case study'));
await click(q('.supporting-library>summary'));check('Supporting work stays accessible behind a clear label',()=>{assert.equal(q('.supporting-library').open,true);assert.equal(qa('.reference-card').length,3);assert.equal(qa('.reference-card').filter(c=>c.textContent.includes('Tool demonstration')).length,2)});
for(const name of ['Homesbyolu','Content planning & publishing','Performance & reporting']){const button=label(`Explore ${name} case study`);await click(button);assert.ok(q('dialog[open]'));await click(find('Role & scope'));assert.ok(q('.role-panel'));await click(find('Deliverables'));assert.ok(q('.outcome-panel'));await click(label('Close case study'));assert.equal(document.activeElement,button)}
await click(label('Explore Planpadi content collection case study'));await act(async()=>q('dialog').dispatchEvent(new Event('cancel',{cancelable:true})));check('Escape cancellation restores the page',()=>{assert.equal(q('dialog'),null);assert.equal(document.body.style.overflow,'')});
await click(label('Open navigation'));assert.equal(label('Close navigation').getAttribute('aria-expanded'),'true');await act(async()=>q('#main-nav a').click());assert.equal(label('Open navigation').getAttribute('aria-expanded'),'false');await click(label('Open navigation'));await act(async()=>window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'})));check('Mobile navigation closes on selection and Escape',()=>assert.equal(label('Open navigation').getAttribute('aria-expanded'),'false'));
await click(label('Copy email address'));check('Copy contact email',()=>{assert.equal(clipboard,'shabiawanat47@gmail.com');assert.match(q('.copy-status').textContent,/copied/)});
check('Native reel and image assets are available',()=>{const clips=qa('.reel-card video');assert.equal(clips.length,2);for(const video of clips){assert.equal(video.controls,true);assert.equal(video.hasAttribute('autoplay'),false);assert.ok(video.hasAttribute('playsinline'));assert.equal(video.getAttribute('preload'),'metadata');assert.ok(assetExists('public'+video.getAttribute('src')));assert.ok(assetExists('public'+video.getAttribute('poster')))}for(const img of qa('img'))assert.ok(assetExists('public'+img.getAttribute('src')))});
check('Section anchors and local source links resolve',()=>{for(const a of qa('a[href^="#"]')){const id=a.getAttribute('href').slice(1);if(id)assert.ok(document.getElementById(id),id)}for(const a of qa('a[href^="./work/"]'))assert.ok(assetExists('public'+a.getAttribute('href')))});
check('Branding and responsive accessibility rules remain',()=>{const css=fs.readFileSync('src/styles.css','utf8');for(const value of ['#F5EFE6','#242424','#B44A25','DM Sans','Cormorant Garamond','max-width:600px','max-width:365px','prefers-reduced-motion'])assert.ok(css.includes(value),value);for(const match of css.matchAll(/url\(\/fonts\/([^\)]+)\)/g))assert.ok(assetExists('public/fonts/'+match[1]));assert.doesNotMatch(document.body.textContent,/Meta certified|HubSpot certified|ownership is not established/)});
check('Asset URLs stay within the GitHub Pages project path',()=>{for(const el of qa('img[src], video[src], video[poster], a[href^="./work/"]')){for(const attr of ['src','poster','href']){const value=el.getAttribute(attr);if(!value||!value.startsWith('./work/'))continue;const u=new URL(value,dom.window.location.href);assert.equal(u.origin,'https://awanat247.github.io');assert.ok(u.pathname.startsWith('/Portfolio/work/'));assert.ok(fs.existsSync(path.join('docs',u.pathname.slice('/Portfolio/'.length))))}}});
await act(async()=>root.unmount());
const staticDocument=new JSDOM(fs.readFileSync('docs/index.html','utf8'));
q('#test-root').innerHTML=staticDocument.window.document.querySelector('#root').innerHTML;
const hydrationErrors=[];let hydrated;
await act(async()=>{hydrated=hydrateRoot(q('#test-root'),React.createElement(React.StrictMode,null,React.createElement(Home)),{onRecoverableError:error=>hydrationErrors.push(error.message)})});
check('Static HTML hydrates without replacing or mismatching the content',()=>{assert.deepEqual(hydrationErrors,[]);assert.ok(q('h1'));assert.equal(qa('.collection-card').length,6);assert.ok(q('.preview-tabs'))});
await click(label('Explore Planpadi content collection case study'));assert.ok(q('.project-story'));await click(label('Close case study'));
await act(async()=>hydrated.unmount());staticDocument.window.close();dom.window.close();console.log('All interaction and enquiry-draft checks passed. Browser-native playback and mobile visual QA remain separate checks.');
