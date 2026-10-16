# Demo Peta Gratis — Alternatif Google Maps untuk App Strava-like

Satu file HTML, tanpa API key, tanpa billing. Demo ini menunjukkan cara membuat tampilan
aplikasi kebugaran berbasis peta (mirip Strava) memakai tumpukan gratis:

- **Leaflet 1.9.4** (BSD-2) untuk render peta
- **Tile OpenStreetMap** jadi basemap default (tanpa API key). Layer "Gelap (OSM)" memakai tile OSM
  yang sama tapi dibalik warnanya lewat CSS filter, jadi tampilan gelap tetap bisa tanpa key
- Lapisan lain yang bisa dipilih: CARTO (kini **perlu API key**), CyclOSM, OpenTopoMap, Esri World Imagery
- Track GPS digambar sendiri dengan rumus **haversine**, diwarnai sesuai kecepatan
- **Animasi replay** seperti Strava (garis muka bergerak mengikuti track)
- **Tarik & lepas file .gpx / .tcx** untuk memakai track sendiri (parsing + hitung ulang semua statistik)
- Statistik: jarak, durasi, pace rata-rata, kecepatan maksimum, elevasi naik, split per km, grafik kecepatan
- Tabel perbandingan penyedia peta/rute yang gratis (kuota, perlu API key atau tidak, catatan)

## Isi

| Berkas | Keterangan |
|---|---|
| `index.html` | Demo lengkap (HTML + CSS + JS), bisa dibuka langsung dari file lokal |
| `track.json` | Data track contoh (simulasi, mengikuti jalan sekitar Teluk Pucung, Bekasi) |
| `_test.js` | Uji otomatis: jalankan skrip di Node dengan DOM/Leaflet tiruan, cek statistik |
| `_test2.js` | Uji jalur unggah file GPX (parser + perhitungan ulang) |

Track contoh adalah **data simulasi**, bukan aktivitas nyata siapa pun.

## Menjalankan uji

```bash
node _test.js     # cek perhitungan jarak/durasi/pace/split & render teks
node _test2.js    # cek parsing GPX dan statistik hasil unggahan
```

## Catatan

- Atribusi wajib: data OpenStreetMap harus menampilkan &copy; OpenStreetMap contributors.
- Server tile komunitas gratis bukan CDN tanpa batas — untuk produksi pindah ke provider berbayar murah (MapTiler/Stadia) atau self-host.
- Jangan simpan API key milik layanan berkuota di kode frontend.
