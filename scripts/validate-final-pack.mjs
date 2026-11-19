#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const expected=[
 ['ftx','FTX'],['mt-gox','Mt. Gox'],['terra-luna','Terra / LUNA'],
 ['bitconnect','BitConnect'],['onecoin','OneCoin'],
 ['three-arrows-capital','Three Arrows Capital'],
 ['celsius-network','Celsius Network'],['thodex','Thodex']
];
const root=process.cwd(), errors=[];
let index;
try{index=JSON.parse(fs.readFileSync(path.join(root,'data/cases/index.json'),'utf8'));}
catch(e){console.error('Cannot read data/cases/index.json:',e.message);process.exit(1);}
if(JSON.stringify(index.map(x=>[x.id,x.name]))!==JSON.stringify(expected)) errors.push('Case index does not match the eight locked IDs/names.');
let qCount=0, sourceCount=0;
for(const [id,name] of expected){
 const file=path.join(root,'data/cases',`${id}.json`);
 let d; try{d=JSON.parse(fs.readFileSync(file,'utf8'));}catch(e){errors.push(`${id}: ${e.message}`);continue;}
 if(d.id!==id||d.name!==name) errors.push(`${id}: id/name mismatch`);
 const ids=new Set((d.sources||[]).map(s=>s.id)); sourceCount+=ids.size;
 function refs(x){if(Array.isArray(x))x.forEach(refs);else if(x&&typeof x==='object')for(const [k,v] of Object.entries(x)){if(k==='sourceIds'&&Array.isArray(v))for(const id of v)if(!ids.has(id))errors.push(`${file}: unresolved source ${id}`);else{} else refs(v);}}
 refs(d);
 for(const q of d.examination||[]){qCount++;if(!Array.isArray(q.defensibleAnswers)||!q.defensibleAnswers.every(a=>(q.options||[]).includes(a)))errors.push(`${file}: invalid answer key ${q.id}`);}
}
if(errors.length){console.error('FAIL');errors.forEach(e=>console.error('-',e));process.exit(1);}
console.log(`PASS: ${expected.length} locked case files; ${sourceCount} source records; ${qCount} examination items.`);
console.log('NOTE: structural validation is not evidence verification or publication approval.');
