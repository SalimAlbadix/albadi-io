// Fills the pre-rendered parts of index.html from products.js, so products
// show even before (or without) JavaScript. Run after editing products.js:
//   node build.mjs            (updates ./index.html in place)
//   node build.mjs path/to/dir
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const dir = path.resolve(process.argv[2] || path.dirname(new URL(import.meta.url).pathname));
const htmlPath = path.join(dir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const src = fs.readFileSync(path.join(dir, 'products.js'), 'utf8');
const box = { window: {} };
vm.runInNewContext(src, box);
const DATA = box.window.ALBADI;
if (!DATA || !Array.isArray(DATA.products)) throw new Error('products.js did not define window.ALBADI.products');

const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const L = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v.en != null ? v.en : '') : (v == null ? '' : v);
const products = DATA.products.slice().sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

// must match tileHTML() in index.html
const tile = (p, i) => {
  const img = (p.images || [])[0] || '';
  return '<a class="tile' + (p.featured ? ' is-featured' : '') + '" href="#' + esc(p.id) + '" data-id="' + esc(p.id) + '" data-cat="' + esc(p.category) + '" style="--i:' + i + '">' +
    '<div class="stage" data-initial="' + esc(((p.brand || p.name || '?').trim().charAt(0)).toUpperCase()) + '">' +
      (p.isNew ? '<span class="badge">New</span>' : '') +
      '<img src="' + esc(img) + '" alt="' + esc(p.name) + '" ' + (i < 5 ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" draggable="false">' +
    '</div>' +
    '<div class="meta"><span class="kicker">' + esc(p.brand || '') + '</span><h3 class="name">' + esc(p.name) + '</h3>' + (p.highlight ? '<span class="spec"><bdi>' + esc(L(p.highlight)) + '</bdi></span>' : '') + '</div>' +
  '</a>';
};
const counts = {};
products.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
const cats = [{ id: 'all', label: 'All', n: products.length }].concat((DATA.categories || []).filter(c => counts[c.id]).map(c => ({ id: c.id, label: L(c.name), n: counts[c.id] })));
const catsHTML = '<span class="cats-ind" id="catsInd" aria-hidden="true"></span>' + cats.map(c =>
  '<button type="button" class="cat" role="tab" data-cat="' + esc(c.id) + '" aria-selected="' + (c.id === 'all') + '"><span>' + esc(c.label) + '</span><span class="n">' + c.n + '</span></button>').join('');
const socialsHTML = (DATA.socials || []).map(s => '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a>').join('');
const dataHTML = '<!--email_off--><script>window.ALBADI_INLINE = ' + JSON.stringify(DATA).replace(/</g, '\\u003c').replace(/@/g, '\\u0040') + ';</script><!--/email_off-->';

function fill(name, content) {
  const re = new RegExp('(<!--' + name + ':START-->)[\\s\\S]*?(<!--' + name + ':END-->)');
  if (!re.test(html)) throw new Error('marker ' + name + ' missing in index.html');
  html = html.replace(re, (m, a, b) => a + content + b);
}
fill('CATS', catsHTML);
fill('GRID', products.map(tile).join(''));
fill('SOCIALS', socialsHTML);
fill('DATA', dataHTML);
fs.writeFileSync(htmlPath, html);
console.log('index.html: ' + products.length + ' products, ' + (cats.length - 1) + ' categories pre-rendered');
