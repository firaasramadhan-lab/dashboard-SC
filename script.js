// ===================================
// CAKRAWALA STUDENT SUCCESS DASHBOARD
// app.js — Core Logic
// ===================================

// ---- DATA STORE ----
let absensiData = [
  { id: 1, nama: "Rafi Ananda", nim: "2021050123", prodi: "Teknik Informatika", matkul: "Basis Data", tanggal: "2025-06-10", status: "Alpha", alasan: "", wa: "081234567890" },
  { id: 2, nama: "Sinta Dewi Pratiwi", nim: "2021050087", prodi: "Sistem Informasi", matkul: "Kalkulus II", tanggal: "2025-06-10", status: "Izin", alasan: "Sakit, surat menyusul dalam 2 hari", wa: "082345678901" },
  { id: 3, nama: "Dimas Prayogo", nim: "2022030045", prodi: "Teknik Informatika", matkul: "Pemrograman Web", tanggal: "2025-06-11", status: "Alpha", alasan: "", wa: "083456789012" },
  { id: 4, nama: "Lestari Novitasari", nim: "2022030091", prodi: "Manajemen", matkul: "Statistika Bisnis", tanggal: "2025-06-11", status: "Izin", alasan: "Anggota keluarga sakit, perlu menemani ke RS", wa: "084567890123" },
  { id: 5, nama: "Budi Ardiansyah", nim: "2020040066", prodi: "Sistem Informasi", matkul: "Jaringan Komputer", tanggal: "2025-06-12", status: "Alpha", alasan: "", wa: "085678901234" },
  { id: 6, nama: "Nadia Ramadhani", nim: "2023010032", prodi: "Teknik Informatika", matkul: "Algoritma & Pemrograman", tanggal: "2025-06-12", status: "Izin", alasan: "Menghadiri kompetisi nasional mewakili kampus", wa: "086789012345" },
  { id: 7, nama: "Gilang Permana", nim: "2022050118", prodi: "Manajemen", matkul: "Manajemen Pemasaran", tanggal: "2025-06-13", status: "Alpha", alasan: "", wa: "087890123456" },
  { id: 8, nama: "Rizky Fadhillah", nim: "2021030077", prodi: "Sistem Informasi", matkul: "Sistem Operasi", tanggal: "2025-06-13", status: "Izin", alasan: "Wawancara kerja magang di perusahaan teknologi", wa: "088901234567" },
];

let pengumumanData = [
  { id: 1, judul: "Jadwal UAS Semester Genap 2024/2025", kategori: "Akademik", tanggal: "2025-06-01", isi: "Ujian Akhir Semester (UAS) akan dilaksanakan mulai 23 Juni hingga 4 Juli 2025. Mahasiswa wajib membawa kartu ujian dan kartu tanda mahasiswa. Pastikan semua kewajiban akademik telah terpenuhi sebelum ujian.", target: "Semua Mahasiswa", warna: "blue", wa: "6281234567890" },
  { id: 2, judul: "Pendaftaran Program Magang Industri", kategori: "Kegiatan", tanggal: "2025-06-05", isi: "Biro Karir membuka pendaftaran program magang industri semester ganjil 2025/2026. Tersedia lebih dari 50 perusahaan mitra. Daftar segera di portal karir sebelum 30 Juni 2025.", target: "Mahasiswa Semester 5+", warna: "green", wa: "6282345678901" },
  { id: 3, judul: "Pengumuman Beasiswa Prestasi Akademik", kategori: "Administrasi", tanggal: "2025-06-08", isi: "Pendaftaran beasiswa prestasi akademik periode 2025 telah dibuka. Syarat IPK minimum 3.50 dan aktif dalam kegiatan kemahasiswaan. Dokumen dikumpulkan ke Bagian Kemahasiswaan paling lambat 15 Juli 2025.", target: "Semua Mahasiswa", warna: "purple", wa: "6283456789012" },
];

let keluhanData = [
  { id: 1, nama: "Budi Santoso", nim: "2021050044", kategori: "Nilai & Ujian", isi: "Nilai UTS mata kuliah Basis Data tidak muncul di portal akademik padahal ujian sudah lebih dari 2 minggu lalu. Saya sudah konfirmasi ke dosen namun belum ada respons.", tanggal: "2025-06-14", prioritas: "Urgent", status: "Belum Ditangani", wa: "081122334455" },
  { id: 2, nama: "Ayu Rahmawati", nim: "2022030055", kategori: "Sistem & Teknologi", isi: "Tidak bisa login ke portal e-learning sejak kemarin. Pesan error yang muncul: 'Session expired, please contact admin'. Sudah coba reset password tapi tetap tidak bisa masuk.", tanggal: "2025-06-14", prioritas: "Normal", status: "Dalam Proses", wa: "082233445566" },
  { id: 3, nama: "Hendra Wijaya", nim: "2020040088", kategori: "Akademik", isi: "Jadwal kuliah Etika Profesi dan Hukum TI bertabrakan di hari Selasa jam 09.00-11.00. Saya tidak bisa menghadiri keduanya. Mohon bantuan solusinya.", tanggal: "2025-06-13", prioritas: "Normal", status: "Belum Ditangani", wa: "083344556677" },
  { id: 4, nama: "Maya Sari", nim: "2023010019", kategori: "Keuangan", isi: "Pembayaran UKT semester ini sudah dilakukan tanggal 1 Juni, namun status pembayaran di portal masih menunjukkan 'Belum Lunas'. Saya khawatir akan berpengaruh ke jadwal ujian.", tanggal: "2025-06-12", prioritas: "Urgent", status: "Selesai", wa: "084455667788" },
  { id: 5, nama: "Andri Kusuma", nim: "2021060033", kategori: "Fasilitas", isi: "AC di ruang kuliah C-302 sudah tidak berfungsi selama seminggu. Kondisi ruangan sangat panas dan mengganggu proses pembelajaran.", tanggal: "2025-06-11", prioritas: "Normal", status: "Dalam Proses", wa: "085566778899" },
];

let nextAbsensiId = 9;
let nextPengumumanId = 4;
let nextKeluhanId = 6;

// ---- PAGE NAVIGATION ----
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');

  const pageNames = { dashboard: 'Dashboard', absensi: 'Database Absensi', pengumuman: 'Poster Pengumuman', keluhan: 'Keluhan Mahasiswa' };
  document.getElementById('page-title').textContent = pageNames[page] || page;

  const navMap = { dashboard: 0, absensi: 1, pengumuman: 2, keluhan: 3 };
  const navItems = document.querySelectorAll('.nav-item');
  if (navMap[page] !== undefined) navItems[navMap[page]].classList.add('active');

  if (page === 'absensi') renderAbsensi();
  if (page === 'pengumuman') renderPengumuman();
  if (page === 'keluhan') renderKeluhan();

  // close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.sidebar-overlay')?.classList.remove('open');
}

// ---- TOPBAR DATE ----
function updateDate() {
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = now.toLocaleDateString('id-ID', opts);
}
updateDate();

// ---- MOBILE SIDEBAR ----
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.onclick = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };
    document.body.appendChild(overlay);
  }
  overlay.classList.toggle('open');
}

// ---- MODALS ----
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });
});

// ---- TOAST ----
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ---- FORMAT DATE ----
function fmtDate(d) {
  if (!d) return '-';
  const dt = new Date(d);
  return dt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ---- FORMAT WA NUMBER ----
function fmtWA(num) {
  if (!num) return '';
  num = num.replace(/\D/g, '');
  if (num.startsWith('0')) num = '62' + num.slice(1);
  return num;
}

// =============================
//   ABSENSI
// =============================
function renderAbsensi(data) {
  const rows = data || absensiData;
  const tbody = document.getElementById('body-absensi');
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg><p>Tidak ada data absensi ditemukan</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = rows.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><b>${r.nama}</b><small>${r.nim}</small></td>
      <td>${r.prodi}</td>
      <td>${r.matkul}</td>
      <td>${fmtDate(r.tanggal)}</td>
      <td><span class="badge ${r.status === 'Alpha' ? 'red' : 'yellow'}">${r.status}</span></td>
      <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.alasan || '-'}">${r.alasan || '<span style="color:var(--muted)">—</span>'}</td>
      <td>
        <div class="action-group">
          <button class="btn-icon" title="Lihat Detail" onclick="detailAbsensi(${r.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="btn-icon wa" title="Kirim WA" onclick="waAbsensiLangsung(${r.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          <button class="btn-icon del" title="Hapus" onclick="hapusAbsensi(${r.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function filterAbsensi() {
  const q = document.getElementById('search-absensi').value.toLowerCase();
  const st = document.getElementById('filter-status').value;
  const pr = document.getElementById('filter-prodi').value;
  const filtered = absensiData.filter(r =>
    (r.nama.toLowerCase().includes(q) || r.nim.includes(q) || r.matkul.toLowerCase().includes(q)) &&
    (!st || r.status === st) &&
    (!pr || r.prodi === pr)
  );
  renderAbsensi(filtered);
}

function simpanAbsensi() {
  const nama = document.getElementById('in-nama').value.trim();
  const nim = document.getElementById('in-nim').value.trim();
  if (!nama || !nim) { showToast('⚠️ Nama dan NIM wajib diisi!'); return; }
  const obj = {
    id: nextAbsensiId++,
    nama, nim,
    prodi: document.getElementById('in-prodi').value,
    matkul: document.getElementById('in-matkul').value,
    tanggal: document.getElementById('in-tanggal').value || new Date().toISOString().slice(0,10),
    status: document.getElementById('in-status').value,
    alasan: document.getElementById('in-alasan').value.trim(),
    wa: document.getElementById('in-wa').value.trim(),
  };
  absensiData.unshift(obj);
  updateBadge('badge-absensi', absensiData.filter(r => r.status === 'Alpha').length);
  renderAbsensi();
  closeModal('modal-tambah-absensi');
  resetForm(['in-nama','in-nim','in-matkul','in-tanggal','in-alasan','in-wa']);
  showToast('✅ Data absensi berhasil disimpan!', 'success');
}

function kirimWaAbsensi() {
  const nama = document.getElementById('in-nama').value.trim();
  const nim = document.getElementById('in-nim').value.trim();
  const status = document.getElementById('in-status').value;
  const matkul = document.getElementById('in-matkul').value.trim();
  const alasan = document.getElementById('in-alasan').value.trim();
  const wa = fmtWA(document.getElementById('in-wa').value.trim());
  if (!nama || !wa) { showToast('⚠️ Lengkapi nama dan nomor WA terlebih dahulu!'); return; }
  simpanAbsensi();
  const pesan = buildPesanAbsensi(nama, nim, matkul, status, alasan);
  bukaWA(wa, pesan);
  showToast('📲 Membuka WhatsApp...', 'wa');
}

function waAbsensiLangsung(id) {
  const r = absensiData.find(x => x.id === id);
  if (!r) return;
  const wa = fmtWA(r.wa);
  if (!wa) { showToast('⚠️ Nomor WA mahasiswa tidak tersedia!'); return; }
  const pesan = buildPesanAbsensi(r.nama, r.nim, r.matkul, r.status, r.alasan);
  bukaWA(wa, pesan);
  showToast('📲 Membuka WhatsApp untuk ' + r.nama, 'wa');
}

function buildPesanAbsensi(nama, nim, matkul, status, alasan) {
  const tgl = new Date().toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  let pesan = `🎓 *NOTIFIKASI KEHADIRAN*\n*Cakrawala University — Student Success Center*\n\n`;
  pesan += `Halo, *${nama}*\n\n`;
  pesan += `Kami mencatat ketidakhadiran Anda dalam catatan akademik:\n\n`;
  pesan += `📋 *Detail Ketidakhadiran:*\n`;
  pesan += `• Nama : ${nama}\n`;
  pesan += `• NIM  : ${nim}\n`;
  pesan += `• Matkul: ${matkul}\n`;
  pesan += `• Status: *${status}*\n`;
  pesan += `• Tanggal: ${tgl}\n`;
  if (alasan) pesan += `• Keterangan: ${alasan}\n`;
  pesan += `\n`;
  if (status === 'Alpha') {
    pesan += `⚠️ Ketidakhadiran *tanpa keterangan* dapat mempengaruhi nilai kehadiran Anda. Segera hubungi dosen atau bagian akademik untuk memberikan keterangan.\n\n`;
  } else {
    pesan += `✅ Izin Anda telah kami catat. Pastikan kelengkapan dokumen pendukung segera diserahkan ke bagian akademik.\n\n`;
  }
  pesan += `Jika ada pertanyaan, silakan balas pesan ini atau kunjungi Student Success Center.\n\n`;
  pesan += `_Tim Student Success Cakrawala University_ 🏫`;
  return pesan;
}

function detailAbsensi(id) {
  const r = absensiData.find(x => x.id === id);
  if (!r) return;
  document.getElementById('detail-absensi-content').innerHTML = `
    <div class="detail-grid">
      <div class="detail-item"><label>Nama</label><span>${r.nama}</span></div>
      <div class="detail-item"><label>NIM</label><span>${r.nim}</span></div>
      <div class="detail-item"><label>Program Studi</label><span>${r.prodi}</span></div>
      <div class="detail-item"><label>Mata Kuliah</label><span>${r.matkul}</span></div>
      <div class="detail-item"><label>Tanggal</label><span>${fmtDate(r.tanggal)}</span></div>
      <div class="detail-item"><label>Status</label><span class="badge ${r.status === 'Alpha' ? 'red' : 'yellow'}">${r.status}</span></div>
      <div class="detail-item full"><label>Alasan / Keterangan</label><span>${r.alasan || 'Tidak ada keterangan (Alpha)'}</span></div>
      <div class="detail-item full"><label>No. WhatsApp</label><span>${r.wa || 'Tidak tersedia'}</span></div>
    </div>
  `;
  const btnWa = document.getElementById('btn-wa-detail-absensi');
  btnWa.onclick = () => {
    const wa = fmtWA(r.wa);
    if (!wa) { showToast('⚠️ Nomor WA tidak tersedia!'); return; }
    const pesan = buildPesanAbsensi(r.nama, r.nim, r.matkul, r.status, r.alasan);
    bukaWA(wa, pesan);
    showToast('📲 Membuka WhatsApp...', 'wa');
  };
  openModal('modal-detail-absensi');
}

function hapusAbsensi(id) {
  if (!confirm('Hapus data absensi ini?')) return;
  absensiData = absensiData.filter(x => x.id !== id);
  renderAbsensi();
  showToast('🗑️ Data absensi dihapus');
}

// =============================
//   PENGUMUMAN
// =============================
function renderPengumuman() {
  const grid = document.getElementById('poster-grid');
  if (pengumumanData.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><p>Belum ada pengumuman. Buat pengumuman baru!</p></div>`;
    return;
  }
  grid.innerHTML = pengumumanData.map(p => `
    <div class="poster-card">
      <div class="poster-banner ${p.warna}">
        ${p.judul.length > 40 ? p.judul.slice(0,38) + '…' : p.judul}
      </div>
      <div class="poster-body">
        <div class="poster-kategori">${p.kategori}</div>
        <div class="poster-judul">${p.judul}</div>
        <div class="poster-isi">${p.isi}</div>
        <div class="poster-footer">
          <span class="poster-meta">${fmtDate(p.tanggal)} · ${p.target}</span>
          <div style="display:flex;gap:6px">
            <button class="btn-wa-sm" onclick="kirimWaPengumumanById(${p.id})">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Kirim WA
            </button>
            <button class="btn-icon del" title="Hapus" onclick="hapusPengumuman(${p.id})" style="border:1px solid var(--border);border-radius:6px">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function simpanPengumuman() {
  const judul = document.getElementById('peng-judul').value.trim();
  const isi = document.getElementById('peng-isi').value.trim();
  if (!judul || !isi) { showToast('⚠️ Judul dan isi pengumuman wajib diisi!'); return; }
  const obj = {
    id: nextPengumumanId++,
    judul,
    kategori: document.getElementById('peng-kategori').value,
    tanggal: document.getElementById('peng-tanggal').value || new Date().toISOString().slice(0,10),
    isi,
    target: document.getElementById('peng-target').value,
    warna: document.getElementById('peng-warna').value,
    wa: document.getElementById('peng-wa').value.trim(),
  };
  pengumumanData.unshift(obj);
  renderPengumuman();
  closeModal('modal-tambah-pengumuman');
  resetForm(['peng-judul','peng-isi','peng-tanggal','peng-wa']);
  showToast('✅ Poster pengumuman berhasil disimpan!', 'success');
}

function kirimWaPengumuman() {
  const judul = document.getElementById('peng-judul').value.trim();
  const isi = document.getElementById('peng-isi').value.trim();
  const wa = fmtWA(document.getElementById('peng-wa').value.trim());
  if (!judul || !isi) { showToast('⚠️ Lengkapi judul dan isi terlebih dahulu!'); return; }
  if (!wa) { showToast('⚠️ Nomor WA tujuan wajib diisi!'); return; }
  simpanPengumuman();
  const kategori = document.getElementById('peng-kategori').value;
  const target = document.getElementById('peng-target').value;
  const pesan = buildPesanPengumuman(judul, isi, kategori, target);
  bukaWA(wa, pesan);
  showToast('📲 Membuka WhatsApp...', 'wa');
}

function kirimWaPengumumanById(id) {
  const p = pengumumanData.find(x => x.id === id);
  if (!p) return;
  const wa = fmtWA(p.wa);
  if (!wa) { showToast('⚠️ Nomor WA tujuan tidak tersedia!'); return; }
  const pesan = buildPesanPengumuman(p.judul, p.isi, p.kategori, p.target);
  bukaWA(wa, pesan);
  showToast('📲 Mengirim pengumuman via WhatsApp...', 'wa');
}

function buildPesanPengumuman(judul, isi, kategori, target) {
  const tgl = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  let pesan = `📢 *PENGUMUMAN RESMI*\n*Cakrawala University — Student Success Center*\n\n`;
  pesan += `📌 *${judul}*\n`;
  pesan += `🏷️ Kategori: ${kategori}\n`;
  pesan += `👥 Target: ${target}\n`;
  pesan += `📅 Tanggal: ${tgl}\n\n`;
  pesan += `━━━━━━━━━━━━━━━\n`;
  pesan += `${isi}\n`;
  pesan += `━━━━━━━━━━━━━━━\n\n`;
  pesan += `Untuk informasi lebih lanjut, hubungi Student Success Center Cakrawala University.\n\n`;
  pesan += `_Tim Student Success Cakrawala University_ 🎓`;
  return pesan;
}

function hapusPengumuman(id) {
  if (!confirm('Hapus pengumuman ini?')) return;
  pengumumanData = pengumumanData.filter(x => x.id !== id);
  renderPengumuman();
  showToast('🗑️ Pengumuman dihapus');
}

// =============================
//   KELUHAN
// =============================
function renderKeluhan(data) {
  const rows = data || keluhanData;
  const tbody = document.getElementById('body-keluhan');
  const belumDitangani = keluhanData.filter(r => r.status === 'Belum Ditangani').length;
  updateBadge('badge-keluhan', belumDitangani);
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><p>Tidak ada keluhan ditemukan</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = rows.map((r, i) => {
    const statusColor = r.status === 'Selesai' ? 'green' : r.status === 'Dalam Proses' ? 'blue' : 'red';
    return `
    <tr>
      <td>${i + 1}</td>
      <td><b>${r.nama}</b><small>${r.nim}</small></td>
      <td>${r.kategori}</td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.isi}">${r.isi}</td>
      <td>${fmtDate(r.tanggal)}</td>
      <td><span class="badge ${r.prioritas === 'Urgent' ? 'red' : 'blue'}">${r.prioritas}</span></td>
      <td>
        <select class="status-select" onchange="ubahStatusKeluhan(${r.id}, this.value)" style="font-size:12px;padding:4px 8px;border-radius:6px;border:1.5px solid var(--border);color:var(--text);font-family:inherit;cursor:pointer">
          <option ${r.status==='Belum Ditangani'?'selected':''}>Belum Ditangani</option>
          <option ${r.status==='Dalam Proses'?'selected':''}>Dalam Proses</option>
          <option ${r.status==='Selesai'?'selected':''}>Selesai</option>
        </select>
      </td>
      <td>
        <div class="action-group">
          <button class="btn-icon wa" title="Balas via WA" onclick="waKeluhanLangsung(${r.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          <button class="btn-icon del" title="Hapus" onclick="hapusKeluhan(${r.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `}).join('');
}

function filterKeluhan() {
  const q = document.getElementById('search-keluhan').value.toLowerCase();
  const pr = document.getElementById('filter-prioritas').value;
  const st = document.getElementById('filter-keluhan-status').value;
  const filtered = keluhanData.filter(r =>
    (r.nama.toLowerCase().includes(q) || r.isi.toLowerCase().includes(q) || r.nim.includes(q)) &&
    (!pr || r.prioritas === pr) &&
    (!st || r.status === st)
  );
  renderKeluhan(filtered);
}

function simpanKeluhan() {
  const nama = document.getElementById('kel-nama').value.trim();
  const isi = document.getElementById('kel-isi').value.trim();
  if (!nama || !isi) { showToast('⚠️ Nama dan isi keluhan wajib diisi!'); return; }
  const obj = {
    id: nextKeluhanId++,
    nama,
    nim: document.getElementById('kel-nim').value.trim(),
    kategori: document.getElementById('kel-kategori').value,
    isi,
    tanggal: document.getElementById('kel-tanggal').value || new Date().toISOString().slice(0,10),
    prioritas: document.getElementById('kel-prioritas').value,
    status: 'Belum Ditangani',
    wa: document.getElementById('kel-wa').value.trim(),
  };
  keluhanData.unshift(obj);
  renderKeluhan();
  closeModal('modal-tambah-keluhan');
  resetForm(['kel-nama','kel-nim','kel-isi','kel-tanggal','kel-wa']);
  showToast('✅ Keluhan berhasil diinput!', 'success');
}

function kirimWaKeluhan() {
  const nama = document.getElementById('kel-nama').value.trim();
  const isi = document.getElementById('kel-isi').value.trim();
  const wa = fmtWA(document.getElementById('kel-wa').value.trim());
  if (!nama || !isi) { showToast('⚠️ Lengkapi data keluhan terlebih dahulu!'); return; }
  if (!wa) { showToast('⚠️ Nomor WA mahasiswa wajib diisi!'); return; }
  simpanKeluhan();
  const pesan = buildPesanKeluhan(nama, document.getElementById('kel-nim').value, isi, document.getElementById('kel-kategori').value);
  bukaWA(wa, pesan);
  showToast('📲 Membuka WhatsApp...', 'wa');
}

function waKeluhanLangsung(id) {
  const r = keluhanData.find(x => x.id === id);
  if (!r) return;
  const wa = fmtWA(r.wa);
  if (!wa) { showToast('⚠️ Nomor WA mahasiswa tidak tersedia!'); return; }
  const pesan = buildPesanKeluhan(r.nama, r.nim, r.isi, r.kategori);
  bukaWA(wa, pesan);
  showToast('📲 Membalas keluhan via WhatsApp...', 'wa');
}

function buildPesanKeluhan(nama, nim, isi, kategori) {
  const tgl = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  let pesan = `💬 *TINDAK LANJUT KELUHAN*\n*Cakrawala University — Student Success Center*\n\n`;
  pesan += `Halo, *${nama}* (NIM: ${nim})\n\n`;
  pesan += `Kami telah menerima keluhan Anda:\n`;
  pesan += `🏷️ *Kategori:* ${kategori}\n`;
  pesan += `📝 *Keluhan:* ${isi}\n\n`;
  pesan += `━━━━━━━━━━━━━━━\n`;
  pesan += `Tim kami sedang menindaklanjuti keluhan Anda. Kami akan memberikan respons dan solusi dalam waktu 1×24 jam pada hari kerja.\n\n`;
  pesan += `Terima kasih sudah menghubungi kami. Jangan ragu untuk bertanya lebih lanjut.\n\n`;
  pesan += `_Tim Student Success Cakrawala University_ 🏫\n`;
  pesan += `📅 ${tgl}`;
  return pesan;
}

function ubahStatusKeluhan(id, newStatus) {
  const r = keluhanData.find(x => x.id === id);
  if (r) {
    r.status = newStatus;
    const belumDitangani = keluhanData.filter(r => r.status === 'Belum Ditangani').length;
    updateBadge('badge-keluhan', belumDitangani);
    showToast(`✅ Status keluhan diubah: ${newStatus}`, 'success');
  }
}

function hapusKeluhan(id) {
  if (!confirm('Hapus keluhan ini?')) return;
  keluhanData = keluhanData.filter(x => x.id !== id);
  renderKeluhan();
  showToast('🗑️ Keluhan dihapus');
}

// =============================
//   UTILITIES
// =============================
function bukaWA(nomor, pesan) {
  const encoded = encodeURIComponent(pesan);
  window.open(`https://wa.me/${nomor}?text=${encoded}`, '_blank');
}

function resetForm(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function updateBadge(badgeId, count) {
  const el = document.getElementById(badgeId);
  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Set default today dates in forms
  const today = new Date().toISOString().slice(0, 10);
  ['in-tanggal', 'peng-tanggal', 'kel-tanggal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = today;
  });
  updateBadge('badge-absensi', absensiData.filter(r => r.status === 'Alpha').length);
  updateBadge('badge-keluhan', keluhanData.filter(r => r.status === 'Belum Ditangani').length);
});
