#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const ids=["terra-luna","bitconnect","onecoin","three-arrows-capital","celsius","thodex"];
const claims=new Set(["documented_fact","court_finding","official_statement","reported_claim","allegation","analysis","community_reference"]);
const visibility=new Set(["pre_incident","during_incident","hindsight"]);
const difficulty=new Set(["low","medium","high"]);
const sourceTypes=new Set(["primary","secondary","community"]);
const required=["id","name","shortDescription","classification","researchCutoff","identity","background","incident","causeAnalysis","timeline","warningSigns","aftermath","lessons","sources","intuitionReferences","examination"];
let failed=false;
function check(ok,msg){if(!ok){console.error("FAIL:",msg);failed=true;}}
function walk(v,known,where){
 if(Array.isArray(v)){v.forEach((x,i)=>walk(x,known,`${where}[${i}]`));return;}
 if(!v||typeof v!=="object")return;
 if("sourceIds" in v){check(Array.isArray(v.sourceIds)&&v.sourceIds.length>0,`${where}: sourceIds empty or invalid`);for(const id of v.sourceIds||[])check(known.has(id),`${where}: unknown source ${id}`);}
 if("claimType" in v)check(claims.has(v.claimType),`${where}: invalid claimType ${v.claimType}`);
 if("visibility" in v)check(visibility.has(v.visibility),`${where}: invalid visibility`);
 if("difficulty" in v)check(difficulty.has(v.difficulty),`${where}: invalid difficulty`);
 for(const [k,x] of Object.entries(v))walk(x,known,`${where}.${k}`);
}
for(const id of ids){
 const file=path.join(process.cwd(),"data","cases",`${id}.json`);
 let d;try{d=JSON.parse(fs.readFileSync(file,"utf8"));}catch(e){check(false,`${file}: ${e.message}`);continue;}
 for(const k of required)check(k in d,`${id}: missing ${k}`);
 check(d.id===id,`${id}: id does not match filename`);
 const sourceIds=new Set((d.sources||[]).map(s=>s.id));
 check(sourceIds.size===(d.sources||[]).length,`${id}: duplicate source IDs`);
 for(const s of d.sources||[]){check(sourceTypes.has(s.sourceType),`${id}: invalid sourceType ${s.sourceType}`);check(/^https:\/\//.test(s.url),`${id}: non-https source URL`);}
 walk(d,sourceIds,id);
 check(d.timeline?.length>=6,`${id}: fewer than six timeline events`);
 check(d.warningSigns?.length>=4,`${id}: fewer than four warning signs`);
 check(d.examination?.length>=6&&d.examination?.length<=8,`${id}: examination count outside 6–8`);
 for(const [i,q] of (d.examination||[]).entries()){
  check(q.options?.length>=3,`${id} exam ${i}: too few options`);
  check(q.defensibleAnswers?.length>0,`${id} exam ${i}: no answer`);
  for(const a of q.defensibleAnswers||[])check(q.options.includes(a),`${id} exam ${i}: answer not an exact option`);
 }
 console.log(`Checked ${id}: ${d.sources.length} sources, ${d.timeline.length} timeline entries, ${d.warningSigns.length} warning signs, ${d.examination.length} questions`);
}
if(failed)process.exit(1);
console.log("All six files passed structural validation. This is not editorial or source-link approval.");
