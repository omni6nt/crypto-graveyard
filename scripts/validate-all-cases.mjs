#!/usr/bin/env node
/**
 * Cross-case structural validator for Crypto Graveyard.
 * Run from repository root: node scripts/validate-all-cases.mjs
 * This does NOT verify source truth, URL availability, or editorial readiness.
 */
import fs from 'node:fs';
import path from 'node:path';

const EXPECTED = [
  ['ftx', 'FTX'],
  ['mt-gox', 'Mt. Gox'],
  ['terra-luna', 'Terra / LUNA'],
  ['bitconnect', 'BitConnect'],
  ['onecoin', 'OneCoin'],
  ['three-arrows-capital', 'Three Arrows Capital'],
  ['celsius-network', 'Celsius Network'],
  ['thodex', 'Thodex']
];
const CLAIMS = new Set([
  'documented_fact', 'court_finding', 'official_statement',
  'reported_claim', 'allegation', 'analysis', 'community_reference'
]);
const VISIBILITY = new Set(['pre_incident', 'during_incident', 'hindsight']);
const DIFFICULTY = new Set(['low', 'medium', 'high']);
const SOURCE_TYPES = new Set(['primary', 'secondary', 'community']);
const root = process.cwd();
const errors = [];
const warnings = [];

function fail(where, message) { errors.push(`${where}: ${message}`); }
function checkArray(value, where, min = 0) {
  if (!Array.isArray(value) || value.length < min) {
    fail(where, `expected array with at least ${min} item(s)`);
    return false;
  }
  return true;
}
function collectSourceRefs(value, refs = []) {
  if (Array.isArray(value)) value.forEach(v => collectSourceRefs(v, refs));
  else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if (key === 'sourceIds' && Array.isArray(child)) child.forEach(id => refs.push(id));
      else collectSourceRefs(child, refs);
    }
  }
  return refs;
}

const indexPath = path.join(root, 'data/cases/index.json');
let index;
try { index = JSON.parse(fs.readFileSync(indexPath, 'utf8')); }
catch (e) { fail(indexPath, `cannot parse: ${e.message}`); }

if (Array.isArray(index)) {
  const actual = index.map(x => [x?.id, x?.name]);
  if (JSON.stringify(actual) !== JSON.stringify(EXPECTED)) {
    fail(indexPath, 'entries/order do not match the eight locked IDs and names');
  }
} else fail(indexPath, 'expected an array');

let totalQuestions = 0;
let totalSources = 0;
for (const [id, name] of EXPECTED) {
  const file = path.join(root, 'data/cases', `${id}.json`);
  let data;
  try { data = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { fail(file, `missing or invalid JSON: ${e.message}`); continue; }

  if (data.id !== id) fail(file, `id must be "${id}", found "${data.id}"`);
  if (data.name !== name) fail(file, `name must be "${name}", found "${data.name}"`);

  const required = [
    'id','name','shortDescription','classification','researchCutoff','identity',
    'background','incident','causeAnalysis','timeline','warningSigns','aftermath',
    'lessons','sources','intuitionReferences','examination'
  ];
  for (const key of required) if (!(key in data)) fail(file, `missing top-level field "${key}"`);
  if (data.researchCutoff !== '2026-11-19') warnings.push(`${id}: research cutoff should be refreshed before publication`);

  for (const section of ['identity','background','incident','causeAnalysis','aftermath']) {
    if (!data[section] || typeof data[section].description !== 'string') {
      fail(file, `${section}.description missing`);
    }
    if (!Array.isArray(data[section]?.sourceIds)) fail(file, `${section}.sourceIds must be an array`);
  }
  if (!CLAIMS.has(data.incident?.claimType)) fail(file, 'incident.claimType is not an approved claim type');

  checkArray(data.sources, `${id}.sources`, 1);
  checkArray(data.timeline, `${id}.timeline`, 1);
  checkArray(data.warningSigns, `${id}.warningSigns`, 1);
  checkArray(data.lessons, `${id}.lessons`, 1);
  checkArray(data.examination, `${id}.examination`, 6);
  checkArray(data.intuitionReferences, `${id}.intuitionReferences`, 0);

  const sourceIds = new Set();
  for (const s of data.sources ?? []) {
    if (!s.id || sourceIds.has(s.id)) fail(file, `missing or duplicate source id "${s.id}"`);
    sourceIds.add(s.id);
    totalSources++;
    if (!SOURCE_TYPES.has(s.sourceType)) fail(file, `source ${s.id} has invalid sourceType`);
    if (!/^https?:\/\//.test(s.url ?? '')) fail(file, `source ${s.id} has invalid URL`);
  }
  for (const ref of collectSourceRefs(data)) {
    if (!sourceIds.has(ref)) fail(file, `unresolved source reference "${ref}"`);
  }

  for (const [i, item] of (data.timeline ?? []).entries()) {
    if (!item.date || !item.event || !CLAIMS.has(item.claimType) || !Array.isArray(item.sourceIds) || item.sourceIds.length < 1) {
      fail(file, `timeline[${i}] is incomplete or invalid`);
    }
  }
  for (const [i, item] of (data.warningSigns ?? []).entries()) {
    if (!item.title || !item.description || !item.evidenceAvailable ||
        !VISIBILITY.has(item.visibility) || !CLAIMS.has(item.claimType) ||
        !Array.isArray(item.sourceIds) || item.sourceIds.length < 1) {
      fail(file, `warningSigns[${i}] is incomplete or invalid`);
    }
  }
  for (const [i, item] of (data.lessons ?? []).entries()) {
    if (!['users','builders'].includes(item.audience) || !item.lesson ||
        !Array.isArray(item.sourceIds) || item.sourceIds.length < 1) {
      fail(file, `lessons[${i}] is incomplete or invalid`);
    }
  }
  for (const [i, q] of (data.examination ?? []).entries()) {
    totalQuestions++;
    if (!q.id || !q.prompt || !Array.isArray(q.options) || q.options.length < 2 ||
        !Array.isArray(q.defensibleAnswers) || q.defensibleAnswers.length < 1 ||
        !q.defensibleAnswers.every(a => q.options.includes(a)) ||
        !q.explanation || !VISIBILITY.has(q.visibility) ||
        !DIFFICULTY.has(q.difficulty) || !q.learningObjective ||
        !Array.isArray(q.sourceIds) || q.sourceIds.length < 1) {
      fail(file, `examination[${i}] is incomplete or has answer text not present in options`);
    }
  }
  if ((data.examination ?? []).length > 8) fail(file, 'more than eight examination items');
  for (const ref of data.intuitionReferences ?? []) {
    if (ref.claimType !== 'community_reference') fail(file, 'Intuition references must use community_reference');
  }
}

if (errors.length) {
  console.error(`FAILED — ${errors.length} issue(s):`);
  errors.forEach(e => console.error(`- ${e}`));
  process.exitCode = 1;
} else {
  console.log('PASS — eight locked case files match the project index.');
  console.log(`PASS — ${totalSources} source records and ${totalQuestions} examination items structurally checked.`);
  console.log('PASS — source references, answer strings, required fields, and approved labels checked.');
  console.log('NOTE — structural validation is not source verification or publication approval.');
}
warnings.forEach(w => console.warn(`WARNING: ${w}`));
