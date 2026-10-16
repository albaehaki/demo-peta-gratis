// Harness uji: jalankan skrip index.html di Node dengan DOM/Leaflet tiruan,
// lalu verifikasi perhitungan jarak, durasi, pace, split, dan render teks.
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('D:/projek/demo-peta-gratis/index.html', 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('NO_SCRIPT'); process.exit(1); }
const code = m[1];

// --- DOM tiruan ---
const els = {};
function mkEl(id) {
  return {
    id, textContent: '', innerHTML: '', value: '',
    firstChild: { textContent: '' },
    clientWidth: 900, clientHeight: 190, width: 0, height: 0,
    style: {}, files: [],
    classList: { add() {}, remove() {} },
    addEventListener() {}, click() {},
    getContext() {
      const grad = { addColorStop() {} };
      const g = { setTransform(){}, clearRect(){}, beginPath(){}, moveTo(){}, lineTo(){}, stroke(){}, fill(){}, closePath(){}, fillText(){}, createLinearGradient(){ return grad; } };
      g.strokeStyle = ''; g.fillStyle = ''; g.font = ''; g.lineWidth = 1;
      return g;
    }
  };
}
['map','chart','sDist','sTime','sPace','sMax','sUp','sPts','actName','actMeta','chipInfo','splitBody','drop','file','btnPlay','btnReset','btnSpeed','btnFit']
  .forEach(id => els[id] = mkEl(id));

const document = {
  getElementById: id => els[id] || mkEl(id),
  querySelectorAll: () => [],
};

// --- Leaflet tiruan ---
const chain = () => { const o = { addTo(){ return o; }, setLatLng(){ return o; }, bindTooltip(){ return o; }, setView(){ return o; }, fitBounds(){}, clearLayers(){}, addLayer(){}, removeLayer(){}, invalidateSize(){}, getZoom(){ return 14; } }; return o; };
const L = {
  tileLayer: () => chain(),
  map: () => chain(),
  control: { layers: () => ({ addTo(){ return this; } }) },
  canvas: () => ({}),
  layerGroup: () => chain(),
  circleMarker: () => chain(),
  polyline: () => chain(),
  latLngBounds: () => ({}),
};

const sandbox = {
  console, document, L,
  window: { addEventListener(){}, devicePixelRatio: 2 },
  requestAnimationFrame: () => 1, cancelAnimationFrame: () => {},
  setTimeout: () => 1, DOMParser: class { parseFromString(){ return { getElementsByTagName: () => [], getElementsByTagNameNS: () => [] }; } },
  FileReader: class {},
  Math, Date, JSON, isFinite, parseFloat, Number, String, Array, Object,
};
sandbox.globalThis = sandbox;

try {
  vm.createContext(sandbox);
  new vm.Script(code + '\n;globalThis.__probe = { state: state };', { filename: 'inline.js' }).runInContext(sandbox);
} catch (e) {
  console.log('RUNTIME_ERR:', e.message);
  process.exit(1);
}

const s = sandbox.__probe && sandbox.__probe.state;
if (!s) { console.log('STATE_UNDEFINED'); process.exit(1); }

console.log('OK  jarak_m       :', Math.round(s.total));
console.log('OK  durasi_s      :', Math.round(s.dur));
console.log('OK  titik_gps     :', s.pts.length);
console.log('OK  max_kmh       :', s.maxSpd.toFixed(2));
console.log('OK  splits        :', s.splits.length, s.splits.map(x => Math.round(x.sec)).join(','));
console.log('--- teks yang tampil di kartu ---');
['sDist','sTime','sPace','sMax','sUp','sPts'].forEach(id => console.log('   ', id, '=', els[id].textContent));
console.log('    actName     =', els.actName.firstChild.textContent);
console.log('    chipInfo    =', els.chipInfo.textContent);
console.log('    splitRows   =', (els.splitBody.innerHTML.match(/<tr>/g) || []).length);
console.log('    chartPx     =', els.chart.width + 'x' + els.chart.height);
console.log('    polySegmen  =', s.pts.length); // 1 segmen per titik
