#!/usr/bin/env node
/**
 * Dependency-free validator for researched case JSON.
 * Usage: node scripts/validate-case-data.mjs ftx mt-gox
 * Defaults to ftx and mt-gox.
 */
import fs from "node:fs";
import path from "node:path";

const ids = process.argv.slice(2).length ? process.argv.slice(2) : ["ftx", "mt-gox"];
const root = process.cwd();
const allowedClaim = new Set(["documented_fact", "court_finding", "official_statement", "reported_claim", "allegation", "analysis", "community_reference"]);
const allowedVisibility = new Set(["pre_incident", "during_incident", "hindsight"]);
const allowedDifficulty = new Set(["low", "medium", "high"]);
const requiredTop = ["id", "name", "shortDescription", "classification", "researchCutoff", "identity", "background", "incident", "causeAnalysis", "timeline", "warningSigns", "aftermath", "lessons", "sources", "intuitionReferences", "examination"];
let failed = false;
function assert(condition, message) {
  if (!condition) { console.error(`  FAIL: ${message}`); failed = true; }
}
function walk(value, sourceIds, where) {
  if (Array.isArray(value)) { value.forEach((v, i) => walk(v, sourceIds, `${where}[${i}]`)); return; }
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value.sourceIds)) for (const id of value.sourceIds) assert(sourceIds.has(id), `${where}: unknown sourceId "${id}"`);
  if ("claimType" in value) assert(allowedClaim.has(value.claimType), `${where}: invalid claimType`);
  if ("visibility" in value) assert(allowedVisibility.has(value.visibility), `${where}: invalid visibility`);
  if ("difficulty" in value) assert(allowedDifficulty.has(value.difficulty), `${where}: invalid difficulty`);
  for (const [key, child] of Object.entries(value)) walk(child, sourceIds, `${where}.${key}`);
}
for (const id of ids) {
  const file = path.join(root, "data", "cases", `${id}.json`);
  console.log(`\nChecking ${file}`);
  let data;
  try { data = JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (error) { console.error(`  FAIL: cannot parse JSON: ${error.message}`); failed = true; continue; }
  for (const key of requiredTop) assert(key in data, `missing top-level field "${key}"`);
  assert(data.id === id, `id must equal filename "${id}"`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(data.researchCutoff), "researchCutoff must be ISO date");
  for (const key of ["identity", "background", "incident", "causeAnalysis", "aftermath"]) {
    assert(data[key] && typeof data[key].description === "string" && Array.isArray(data[key].sourceIds), `${key} must contain description and sourceIds`);
  }
  assert(data.incident && allowedClaim.has(data.incident.claimType), "incident.claimType is invalid");
  assert(Array.isArray(data.sources) && data.sources.length >= 2, "at least two sources required");
  const sourceIds = new Set((data.sources || []).map(s => s.id));
  assert(sourceIds.size === (data.sources || []).length, "source IDs must be unique");
  walk(data, sourceIds, id);
  assert(Array.isArray(data.timeline) && data.timeline.length >= 6, "timeline needs at least six sourced events");
  assert(Array.isArray(data.warningSigns) && data.warningSigns.length >= 4, "warningSigns needs at least four entries");
  assert(Array.isArray(data.examination) && data.examination.length >= 6 && data.examination.length <= 8, "examination must contain 6–8 items");
  for (const [i, q] of (data.examination || []).entries()) {
    assert(Array.isArray(q.options) && q.options.length >= 2, `examination[${i}] needs options`);
    assert(Array.isArray(q.defensibleAnswers) && q.defensibleAnswers.length > 0, `examination[${i}] needs defensibleAnswers`);
    for (const answer of q.defensibleAnswers || []) assert(q.options.includes(answer), `examination[${i}] answer must exactly match an option`);
  }
  console.log("  Structure and source references checked.");
}
if (failed) process.exitCode = 1;
else console.log("\nAll requested case files passed structural validation.");
