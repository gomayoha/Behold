/* Checks the story data: every scene, book, painting and promise links up.
 * Run from anywhere:  node scarlet-thread/tools/check.js   (prints ALL GOOD, or the problems) */
global.window = {};
const d = require("path").join(__dirname, "..", "js") + "/";
for (const f of ["art.js", "threads.js", "books.js", "story-1.js", "story-2.js", "story-3.js"]) require(d + f);
const { ART, THREADS, BOOKS, AGES } = window;
const errs = [];
console.log("books", BOOKS.length, "ages", AGES.length);
const bookIds = new Set(BOOKS.map(b => b.id));
const used = new Set(), arts = new Set(), planted = {}, kept = {};
let scenes = 0, cast = 0, ids = new Set(), prevY = null;
for (const a of AGES) for (const s of a.scenes) {
  scenes++;
  if (ids.has(s.id)) errs.push("dup id " + s.id); ids.add(s.id);
  (s.b || []).forEach(b => { if (!bookIds.has(b)) errs.push("bad book " + b + " in " + s.id); used.add(b); });
  if (s.fx && s.fx.steps) s.fx.steps.forEach(st => [].concat(st.b || []).forEach(b => { if (!bookIds.has(b)) errs.push("bad book " + b + " in a step of " + s.id); used.add(b); }));
  const ak = [s.art, ...((s.fx && s.fx.items) || []).map(i => i[0])].filter(Boolean);
  ak.forEach(k => { if (!ART[k]) errs.push("missing art " + k + " in " + s.id); arts.add(k); });
  const th = [].concat(s.th || []).concat(((s.fx && s.fx.steps) || []).map(x => x.th).filter(Boolean));
  th.forEach(t => { if (!THREADS[t]) errs.push("bad thread " + t); planted[t] = s.id; });
  (s.kept || []).forEach(t => { if (!THREADS[t]) errs.push("bad kept " + t); kept[t] = s.id; });
  cast += (s.cast || []).length;
  if (typeof s.y === "number") { if (prevY !== null && s.y < prevY) errs.push(`year goes back at ${s.id}: ${prevY} -> ${s.y}`); prevY = s.y; }
  if (!s.lay && !s.fx) errs.push("no layout " + s.id);
  if (s.lay && s.lay !== "word" && !s.art) errs.push("layout without art " + s.id);
}
BOOKS.forEach(b => { if (!used.has(b.id)) errs.push("book never in story: " + b.id); });
Object.keys(THREADS).forEach(t => { if (!planted[t]) errs.push("thread not planted " + t); if (!kept[t]) errs.push("thread not kept " + t); });
Object.keys(ART).forEach(k => { if (!arts.has(k)) console.log("  (unused art: " + k + ")"); });
console.log("scenes", scenes, "cast", cast, "arts used", arts.size, "threads", Object.keys(THREADS).length);
const searched = Object.keys(ART).filter(k => !ART[k].s);
if (searched.length) console.log(`note: ${searched.length} paintings have no s URL yet and are found by a live Commons search: ${searched.join(", ")}`);
console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "ALL GOOD");
process.exitCode = errs.length ? 1 : 0;
