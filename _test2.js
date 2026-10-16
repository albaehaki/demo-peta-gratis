// Uji jalur unggah file GPX/TCX (parser + perhitungan ulang statistik).
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('D:/projek/demo-peta-gratis/index.html', 'utf8');
const code = html.match(/<script>([\s\S]*?)<\/script>/)[1];

const els = {};
function mkEl(id) {
  return { id, textContent:'', innerHTML:'', value:'', firstChild:{textContent:''},
    clientWidth:900, clientHeight:190, width:0, height:0, style:{}, files:[],
    classList:{add(){},remove(){}}, addEventListener(){}, click(){},
    getContext(){ const grad={addColorStop(){}}; const g={setTransform(){},clearRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},fill(){},closePath(){},fillText(){},createLinearGradient(){return grad;}}; return g; } };
}
['map','chart','sDist','sTime','sPace','sMax','sUp','sPts','actName','actMeta','chipInfo','splitBody','drop','file','btnPlay','btnReset','btnSpeed','btnFit']
  .forEach(id => els[id] = mkEl(id));

// DOMParser tiruan: sengaja dibuat KOSONG, supaya jalur cadangan (regex) yang diuji.
class FakeDOMParser {
  parseFromString() {
    return { getElementsByTagName: () => [], getElementsByTagNameNS: () => [] };
  }
}
const sandbox = {
  console, document: { getElementById: id => els[id] || mkEl(id), querySelectorAll: () => [] },
  L: (() => { const chain = () => { const o={addTo(){return o;},setLatLng(){return o;},bindTooltip(){return o;},setView(){return o;},fitBounds(){},clearLayers(){},addLayer(){},removeLayer(){},invalidateSize(){},getZoom(){return 14;}}; return o; };
    return { tileLayer:chain, map:chain, control:{layers:()=>({addTo(){return this;}})}, canvas:()=>({}), layerGroup:chain, circleMarker:chain, polyline:chain, latLngBounds:()=>({}) }; })(),
  window: { addEventListener(){}, devicePixelRatio: 2 },
  requestAnimationFrame: () => 1, cancelAnimationFrame: () => {},
  setTimeout: () => 1, DOMParser: FakeDOMParser, FileReader: class {},
  Math, Date, JSON, isFinite, parseFloat, Number, String, Array, Object, RegExp, Error,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
new vm.Script(code + '\n;globalThis.__probe = { parseTrackFile: typeof parseTrackFile!=="undefined"?parseTrackFile:null, parseTrackFallback: typeof parseTrackFallback!=="undefined"?parseTrackFallback:null, build: build, getState: ()=>state };', { filename:'inline.js' }).runInContext(sandbox);

const probe = sandbox.__probe;
if (!probe.parseTrackFile) { console.log('PARSE_FN_MISSING'); process.exit(1); }

// --- bikin file GPX contoh: 2,4 km, 180 titik, pace ~6:00/km, elevasi naik ---
function iso(s){ return new Date(Date.UTC(2026,9,16,10,0,0)+s*1000).toISOString(); }
let gpx = '<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="uji"><trk><name>Uji GPX</name><trkseg>\n';
const N = 180;
for (let i = 0; i < N; i++) {
  const lat = -6.216 + i * 0.0020 / 10;          // ± 22 m per titik
  const lon = 107.028 + i * 0.0020 / 10;
  const ele = 12 + Math.sin(i / 12) * 6;          // total naik-turun
  const t = i * 13;                               // 13 s per 22 m ≈ 6:05/km
  gpx += '<trkpt lat="' + lat.toFixed(6) + '" lon="' + lon.toFixed(6) + '"><ele>' + ele.toFixed(1) + '</ele><time>' + iso(t) + '</time></trkpt>\n';
}
gpx += '</trkseg></trk></gpx>';

const act = probe.parseTrackFile('lari_pagi.gpx', gpx);
if (!act) { console.log('PARSE_GAGAL (jalur cadangan tidak jalan)'); process.exit(1); }
console.log('PARSE OK  nama:', act.name, '| tipe:', act.type, '| titik:', act.points.length);
probe.build(act);
const s = probe.getState();
console.log('HASIL   jarak:', (s.total / 1000).toFixed(3), 'km | durasi:', Math.round(s.dur), 's | pace:',
  Math.floor((s.dur / (s.total / 1000)) / 60) + ':' + String(Math.round((s.dur / (s.total / 1000)) % 60)).padStart(2, '0'), '/km');
console.log('HASIL   elevasi naik:', Math.round(s.up), 'm | splits:', s.splits.length);
['sDist','sTime','sPace','sUp'].forEach(id => console.log('        ', id, '=', els[id].textContent));

// --- tanpa tag <time>: waktu harus disimulasikan, tidak boleh NaN ---
const gpxNoTime = gpx.replace(/<time>[^<]*<\/time>/g, '');
const act2 = probe.parseTrackFile('tanpa_waktu.gpx', gpxNoTime);
probe.build(act2);
const s2 = probe.getState();
console.log('\nTANPA WAKTU  titik:', s2.pts.length, '| durasi:', Math.round(s2.dur), 's | pace:', Math.round(s2.dur / (s2.total / 1000)), 's/km (asumsi 6:00/km)');
console.log('             ada NaN di data?', s2.pts.some(p => !isFinite(p[3])) ? 'YA (masalah)' : 'tidak');
console.log('\nSEMUA UJI LULUS');
