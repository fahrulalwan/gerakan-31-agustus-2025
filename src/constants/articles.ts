export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  priority: 'high' | 'medium' | 'low'
  featured: boolean
}

export const ARTICLE_CATEGORIES = [
  {
    id: 'persiapan',
    name: 'Persiapan Demo',
    description: 'Panduan lengkap untuk mempersiapkan demonstrasi',
    color: 'green',
    icon: '🎯'
  },
  {
    id: 'keamanan',
    name: 'Keamanan & Keselamatan',
    description: 'Tips menjaga keamanan selama demonstrasi',
    color: 'red',
    icon: '🛡️'
  },
  {
    id: 'hukum',
    name: 'Hak & Hukum',
    description: 'Informasi hak asasi dan aspek hukum',
    color: 'blue',
    icon: '⚖️'
  },
  {
    id: 'komunikasi',
    name: 'Komunikasi & Media',
    description: 'Strategi komunikasi dan media sosial',
    color: 'purple',
    icon: '📢'
  },
  {
    id: 'pasca-demo',
    name: 'Pasca Demonstrasi',
    description: 'Langkah-langkah setelah demonstrasi',
    color: 'orange',
    icon: '🔄'
  }
]

export const DEMO_ARTICLES: Article[] = [
  {
    id: 'persiapan-mental-fisik',
    title: 'Persiapan Mental dan Fisik untuk Demonstrasi',
    excerpt:
      'Panduan lengkap mempersiapkan diri secara mental dan fisik sebelum mengikuti demonstrasi damai.',
    content: `
# Persiapan Mental dan Fisik untuk Demonstrasi

Demonstrasi adalah bentuk partisipasi politik yang memerlukan persiapan matang, baik secara mental maupun fisik.

## Persiapan Mental

### 1. Pahami Tujuan Demonstrasi
- Pelajari dengan baik tuntutan yang diperjuangkan
- Pahami latar belakang isu yang diangkat
- Yakinkan diri bahwa ini adalah cara yang tepat untuk menyuarakan aspirasi

### 2. Siapkan Mental untuk Berbagai Skenario
- Demonstrasi mungkin berlangsung lebih lama dari perkiraan
- Cuaca bisa tidak mendukung
- Kemungkinan adanya provokasi atau gangguan
- Siap menghadapi kelelahan fisik dan mental

### 3. Komunikasi dengan Keluarga
- Informasikan kepada keluarga tentang rencana Anda
- Berikan nomor kontak darurat
- Tentukan waktu untuk lapor kondisi

## Persiapan Fisik

### 1. Kondisi Tubuh
- Istirahat yang cukup sebelum hari H
- Makan makanan bergizi dan cukup minum
- Hindari begadang atau aktivitas berat sehari sebelumnya

### 2. Pakaian dan Perlengkapan
- Kenakan pakaian yang nyaman dan tertutup
- Sepatu yang nyaman untuk berjalan lama
- Topi atau payung untuk perlindungan
- Masker atau kain penutup wajah

### 3. Barang Bawaan
- Air minum yang cukup (minimal 1 liter)
- Makanan ringan untuk energi
- Obat-obatan pribadi yang diperlukan
- Uang tunai secukupnya
- Power bank untuk ponsel

## Tips Tambahan

- Datang bersama teman atau kelompok
- Tentukan titik kumpul jika terpisah
- Simpan nomor kontak penting di ponsel
- Buat rencana transportasi pulang
- Siapkan mental untuk kemungkinan hujan atau panas terik

Ingat, demonstrasi yang baik adalah demonstrasi yang terorganisir dan damai.
    `,
    category: 'persiapan',
    tags: ['persiapan', 'mental', 'fisik', 'panduan'],
    publishedAt: '2025-08-30',
    readTime: 5,
    priority: 'high',
    featured: true
  },
  {
    id: 'protokol-keamanan-demo',
    title: 'Protokol Keamanan Selama Demonstrasi',
    excerpt:
      'Panduan keamanan penting yang harus diikuti untuk menjaga keselamatan diri dan sesama demonstran.',
    content: `
# Protokol Keamanan Selama Demonstrasi

Keamanan adalah prioritas utama dalam setiap demonstrasi. Berikut protokol yang harus diikuti.

## Sebelum Demonstrasi Dimulai

### 1. Briefing Keamanan
- Ikuti briefing dari koordinator lapangan
- Pahami rute dan titik kumpul
- Kenali tanda-tanda bahaya
- Pelajari prosedur evakuasi darurat

### 2. Formasi Kelompok
- Bentuk kelompok kecil 5-10 orang
- Tentukan ketua kelompok
- Buat sistem buddy (saling menjaga)
- Pastikan semua anggota memiliki kontak satu sama lain

## Selama Demonstrasi

### 1. Jaga Jarak Aman
- Hindari terlalu dekat dengan aparat keamanan
- Jangan mendekati kendaraan taktis
- Hindari area yang terlihat tegang
- Selalu siapkan jalur keluar

### 2. Komunikasi
- Gunakan isyarat tangan yang telah disepakati
- Jangan berteriak atau membuat keributan
- Sampaikan informasi penting ke koordinator
- Gunakan aplikasi komunikasi yang aman

### 3. Dokumentasi
- Rekam dengan bijak dan aman
- Jangan merekam wajah demonstran tanpa izin
- Fokus pada dokumentasi pelanggaran jika ada
- Simpan file di cloud untuk keamanan

## Situasi Darurat

### 1. Jika Ada Gas Air Mata
- Tutup hidung dan mulut dengan kain basah
- Jangan menggosok mata
- Bergerak menjauh dari sumber dengan tenang
- Bantu sesama yang kesulitan

### 2. Jika Ada Kekerasan
- Jangan melawan atau membalas
- Segera menjauh dari area konflik
- Laporkan ke koordinator atau media
- Dokumentasikan jika memungkinkan

### 3. Jika Ditangkap
- Tetap tenang dan kooperatif
- Tanyakan alasan penangkapan
- Minta untuk menghubungi keluarga/pengacara
- Ingat nama dan nomor identitas petugas

## Setelah Demonstrasi

- Laporkan kondisi ke koordinator
- Dokumentasikan cedera atau pelanggaran
- Berikan pertolongan pertama jika diperlukan
- Evaluasi bersama kelompok

Keselamatan bersama adalah tanggung jawab kita semua.
    `,
    category: 'keamanan',
    tags: ['keamanan', 'protokol', 'keselamatan', 'darurat'],
    publishedAt: '2025-08-29',
    readTime: 7,
    priority: 'high',
    featured: true
  },
  {
    id: 'hak-demonstran-indonesia',
    title: 'Hak-Hak Demonstran di Indonesia',
    excerpt:
      'Penjelasan lengkap tentang hak-hak konstitusional demonstran berdasarkan UUD 1945 dan peraturan perundang-undangan.',
    content: `
# Hak-Hak Demonstran di Indonesia

Setiap warga negara Indonesia memiliki hak konstitusional untuk menyampaikan pendapat di muka umum.

## Dasar Hukum

### 1. UUD 1945
- Pasal 28: Kemerdekaan berserikat dan berkumpul
- Pasal 28E: Kebebasan menyampaikan pikiran dan sikap

### 2. UU No. 9 Tahun 1998
- Tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum
- Mengatur tata cara dan syarat demonstrasi

### 3. UU No. 39 Tahun 1999
- Tentang Hak Asasi Manusia
- Perlindungan terhadap kebebasan berekspresi

## Hak-Hak Demonstran

### 1. Hak Dasar
- Menyampaikan pendapat secara bebas
- Berkumpul dan berserikat
- Mendapat perlindungan keamanan
- Tidak disiksa atau diperlakukan tidak manusiawi

### 2. Hak Selama Demonstrasi
- Demonstrasi tanpa gangguan sepanjang damai
- Perlindungan dari tindakan sewenang-wenang
- Akses ke fasilitas umum yang diperlukan
- Dokumentasi kegiatan demonstrasi

### 3. Hak Jika Bermasalah dengan Aparat
- Mengetahui identitas petugas
- Mengetahui alasan tindakan aparat
- Mendapat perlakuan yang manusiawi
- Akses ke bantuan hukum

## Kewajiban Demonstran

### 1. Memberitahukan Rencana Demonstrasi
- Pemberitahuan ke Polda/Polres setempat
- Minimal 3x24 jam sebelum pelaksanaan
- Menyampaikan maksud, tujuan, dan rute

### 2. Menjaga Ketertiban
- Tidak merusak fasilitas umum
- Tidak menggunakan kekerasan
- Mematuhi rambu lalu lintas
- Tidak mengganggu kegiatan umum

### 3. Bertanggung Jawab
- Atas tindakan peserta demonstrasi
- Membersihkan lokasi setelah selesai
- Mematuhi batas waktu yang ditentukan

## Jika Hak Dilanggar

### 1. Dokumentasi
- Rekam pelanggaran yang terjadi
- Catat nama dan nomor identitas petugas
- Kumpulkan saksi-saksi

### 2. Pelaporan
- Laporkan ke Komnas HAM
- Hubungi LBH atau organisasi bantuan hukum
- Laporkan ke media massa

### 3. Tindak Lanjut Hukum
- Ajukan gugatan jika diperlukan
- Minta ganti rugi atas kerugian
- Tuntut pertanggungjawaban aparat

Demonstrasi adalah hak, bukan pemberian. Gunakan dengan bijak dan bertanggung jawab.
    `,
    category: 'hukum',
    tags: ['hak', 'hukum', 'konstitusi', 'UUD 1945'],
    publishedAt: '2025-08-28',
    readTime: 8,
    priority: 'high',
    featured: false
  },
  {
    id: 'strategi-komunikasi-media-sosial',
    title: 'Strategi Komunikasi dan Media Sosial untuk Demonstrasi',
    excerpt:
      'Panduan efektif menggunakan media sosial dan strategi komunikasi untuk memperkuat pesan demonstrasi.',
    content: `
# Strategi Komunikasi dan Media Sosial untuk Demonstrasi

Media sosial adalah alat powerful untuk menyebarkan pesan dan mengorganisir demonstrasi.

## Prinsip Komunikasi

### 1. Pesan yang Jelas
- Gunakan bahasa yang mudah dipahami
- Fokus pada 1-2 pesan utama
- Konsisten di semua platform
- Hindari pesan yang ambigu

### 2. Timing yang Tepat
- Post pada jam prime time
- Koordinasikan dengan momentum berita
- Manfaatkan trending topics
- Siapkan konten untuk berbagai waktu

### 3. Visual yang Menarik
- Gunakan infografis yang informatif
- Foto dan video berkualitas
- Warna dan design yang konsisten
- Logo atau hashtag yang mudah diingat

## Platform Media Sosial

### 1. Twitter/X
- Ideal untuk real-time updates
- Gunakan hashtag yang relevan
- Thread untuk penjelasan panjang
- Retweet konten pendukung

### 2. Instagram
- Visual storytelling yang kuat
- Instagram Stories untuk update cepat
- IGTV untuk video panjang
- Kolaborasi dengan influencer

### 3. TikTok
- Konten kreatif dan viral
- Edukasi dalam format pendek
- Musik dan trend yang relevan
- Hashtag challenge

### 4. Facebook
- Jangkauan demografis luas
- Event untuk mengorganisir
- Live streaming demonstrasi
- Grup diskusi tertutup

## Strategi Konten

### 1. Edukasi
- Infografis tentang isu yang diperjuangkan
- Video explainer singkat
- Fact-checking dan debunking hoax
- Testimoni dari ahli atau tokoh

### 2. Mobilisasi
- Call to action yang jelas
- Informasi waktu dan tempat
- Panduan persiapan
- Motivasi dan inspirasi

### 3. Dokumentasi
- Live tweet/posting saat demo
- Foto dan video kegiatan
- Quote dan momen penting
- Testimoni peserta

## Keamanan Digital

### 1. Privasi
- Gunakan VPN jika diperlukan
- Setting privasi yang ketat
- Hindari sharing lokasi real-time
- Backup data penting

### 2. Verifikasi Informasi
- Cross-check dari multiple sources
- Hindari menyebar hoax
- Fact-check sebelum share
- Koreksi jika ada kesalahan

### 3. Manajemen Krisis
- Tim respons cepat untuk isu negatif
- Prepared statement untuk berbagai skenario
- Monitoring mention dan hashtag
- Eskalasi ke tim hukum jika perlu

## Koordinasi Tim

### 1. Struktur Tim
- Content creator
- Social media manager
- Photographer/videographer
- Crisis communication specialist

### 2. Tools Koordinasi
- Slack atau Discord untuk komunikasi
- Trello atau Asana untuk task management
- Google Drive untuk sharing file
- Scheduling tools untuk posting

### 3. Monitoring dan Evaluasi
- Analytics untuk mengukur reach
- Sentiment analysis
- Engagement rate
- Conversion ke aksi nyata

Komunikasi yang efektif dapat mengubah persepsi publik dan memperkuat gerakan.
    `,
    category: 'komunikasi',
    tags: ['komunikasi', 'media sosial', 'strategi', 'digital'],
    publishedAt: '2025-08-27',
    readTime: 10,
    priority: 'medium',
    featured: false
  },
  {
    id: 'evaluasi-pasca-demonstrasi',
    title: 'Evaluasi dan Tindak Lanjut Pasca Demonstrasi',
    excerpt:
      'Panduan melakukan evaluasi menyeluruh dan merencanakan tindak lanjut setelah demonstrasi selesai.',
    content: `
# Evaluasi dan Tindak Lanjut Pasca Demonstrasi

Demonstrasi bukan akhir dari perjuangan, melainkan bagian dari proses yang lebih besar.

## Evaluasi Immediate (0-24 jam)

### 1. Safety Check
- Pastikan semua peserta dalam keadaan aman
- Hitung jumlah peserta yang hadir
- Dokumentasi cedera atau insiden
- Kontak keluarga jika ada yang hilang

### 2. Dokumentasi Cepat
- Kumpulkan foto dan video
- Catat timeline kejadian penting
- Rekam testimoni peserta
- Simpan bukti pelanggaran (jika ada)

### 3. Media Response
- Press release hasil demonstrasi
- Wawancara dengan media
- Update di media sosial
- Klarifikasi jika ada misinformasi

## Evaluasi Mendalam (1-7 hari)

### 1. Analisis Partisipasi
- Jumlah peserta vs target
- Demografi peserta
- Tingkat engagement
- Feedback dari peserta

### 2. Analisis Media Coverage
- Jumlah dan kualitas liputan media
- Sentiment analysis
- Reach dan impression
- Pesan yang tersampaikan vs intended

### 3. Analisis Dampak Politik
- Respons pemerintah
- Respons partai politik
- Perubahan kebijakan (jika ada)
- Momentum politik yang tercipta

## Tindak Lanjut Strategis

### 1. Advocacy Lanjutan
- Lobby ke pemerintah dan DPR
- Pertemuan dengan stakeholder
- Kampanye media berkelanjutan
- Mobilisasi dukungan publik

### 2. Legal Follow-up
- Laporan pelanggaran HAM
- Gugatan hukum jika diperlukan
- Pendampingan korban
- Monitoring implementasi tuntutan

### 3. Community Building
- Konsolidasi jaringan aktivis
- Pelatihan kapasitas
- Fundraising untuk kegiatan lanjutan
- Rekrutment volunteer baru

## Pembelajaran dan Perbaikan

### 1. What Went Well
- Aspek organisasi yang berhasil
- Strategi komunikasi yang efektif
- Kerjasama tim yang solid
- Inovasi yang berhasil

### 2. What Could Be Improved
- Kelemahan dalam koordinasi
- Pesan yang kurang jelas
- Logistik yang bermasalah
- Antisipasi yang kurang

### 3. Lessons Learned
- Best practices untuk demonstrasi berikutnya
- Red flags yang harus dihindari
- Strategi baru yang bisa dicoba
- Network yang perlu diperkuat

## Sustainability Planning

### 1. Momentum Maintenance
- Kampanye berkelanjutan
- Event follow-up
- Engagement dengan supporter
- Media presence yang konsisten

### 2. Resource Management
- Financial sustainability
- Volunteer retention
- Institutional support
- Technology infrastructure

### 3. Long-term Strategy
- Roadmap 6-12 bulan ke depan
- Milestone dan target
- Coalition building
- Succession planning

## Reporting dan Transparansi

### 1. Public Report
- Laporan hasil demonstrasi
- Financial report (jika ada donasi)
- Lessons learned
- Rencana tindak lanjut

### 2. Stakeholder Communication
- Update ke supporter
- Report ke donor
- Briefing ke media
- Koordinasi dengan organisasi lain

Evaluasi yang baik adalah kunci untuk gerakan yang berkelanjutan dan efektif.
    `,
    category: 'pasca-demo',
    tags: ['evaluasi', 'tindak lanjut', 'strategi', 'sustainability'],
    publishedAt: '2025-08-26',
    readTime: 12,
    priority: 'medium',
    featured: false
  }
]
