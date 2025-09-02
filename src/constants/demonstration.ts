export interface ChecklistItem {
  id: string
  content: string
  priority?: 'high' | 'medium' | 'low'
}

export interface ChecklistSection {
  title: string
  description: string
  items: ChecklistItem[]
}

export interface EmergencyContact {
  name: string
  number: string
  description: string
  type: 'legal' | 'medical' | 'emergency' | 'other'
  region?: string
  isNational?: boolean
  isWhatsappAvailable?: boolean
  address?: string
}

export const PRE_DEMONSTRATION_CHECKLIST: ChecklistSection = {
  title: 'Persiapan Sebelum Demonstrasi',
  description: 'Hal-hal yang perlu disiapkan sebelum mengikuti demonstrasi',
  items: [
    {
      id: 'pre-1',
      content:
        'Kenakan pakaian yang nyaman dan tertutup (celana panjang, sepatu tertutup)',
      priority: 'high'
    },
    {
      id: 'pre-2',
      content: 'Bawa air minum yang cukup (minimal 1 liter)',
      priority: 'high'
    },
    {
      id: 'pre-3',
      content: 'Siapkan masker atau kain penutup wajah',
      priority: 'high'
    },
    {
      id: 'pre-4',
      content: 'Bawa obat-obatan pribadi yang diperlukan',
      priority: 'medium'
    },
    {
      id: 'pre-5',
      content: 'Informasikan keluarga/teman tentang keberadaan Anda',
      priority: 'high'
    },
    {
      id: 'pre-6',
      content: 'Simpan nomor kontak darurat di ponsel',
      priority: 'high'
    },
    {
      id: 'pre-7',
      content: 'Bawa uang tunai secukupnya (hindari membawa barang berharga)',
      priority: 'medium'
    },
    {
      id: 'pre-8',
      content: 'Pastikan ponsel terisi penuh dan bawa power bank',
      priority: 'medium'
    },
    {
      id: 'pre-9',
      content: 'Pelajari rute dan titik kumpul demonstrasi',
      priority: 'high'
    },
    {
      id: 'pre-10',
      content: 'Siapkan kartu identitas (KTP/SIM) yang masih berlaku',
      priority: 'high'
    }
  ]
}

export const DURING_DEMONSTRATION_CHECKLIST: ChecklistSection = {
  title: 'Selama Demonstrasi Berlangsung',
  description: 'Panduan perilaku dan keamanan saat mengikuti demonstrasi',
  items: [
    {
      id: 'during-1',
      content: 'Tetap tenang dan jaga ketertiban',
      priority: 'high'
    },
    {
      id: 'during-2',
      content: 'Ikuti instruksi koordinator lapangan',
      priority: 'high'
    },
    {
      id: 'during-3',
      content: 'Jaga jarak aman dari aparat keamanan',
      priority: 'high'
    },
    {
      id: 'during-4',
      content: 'Hindari tindakan provokatif atau kekerasan',
      priority: 'high'
    },
    {
      id: 'during-5',
      content: 'Minum air secara teratur untuk mencegah dehidrasi',
      priority: 'medium'
    },
    {
      id: 'during-6',
      content: 'Tetap bersama kelompok, jangan terpisah',
      priority: 'high'
    },
    {
      id: 'during-7',
      content: 'Dokumentasikan dengan bijak (foto/video)',
      priority: 'medium'
    },
    {
      id: 'during-8',
      content: 'Jika merasa tidak aman, segera tinggalkan lokasi',
      priority: 'high'
    },
    {
      id: 'during-9',
      content: 'Bantu sesama demonstran yang membutuhkan',
      priority: 'medium'
    },
    {
      id: 'during-10',
      content: 'Patuhi batas waktu demonstrasi yang telah ditentukan',
      priority: 'medium'
    }
  ]
}

export const POST_DEMONSTRATION_CHECKLIST: ChecklistSection = {
  title: 'Setelah Demonstrasi Selesai',
  description:
    'Langkah-langkah yang perlu dilakukan setelah demonstrasi berakhir',
  items: [
    {
      id: 'post-1',
      content: 'Pastikan semua anggota kelompok dalam keadaan aman',
      priority: 'high'
    },
    {
      id: 'post-2',
      content: 'Laporkan kondisi kepada keluarga/teman',
      priority: 'high'
    },
    {
      id: 'post-3',
      content: 'Jika ada yang terluka, segera cari bantuan medis',
      priority: 'high'
    },
    {
      id: 'post-4',
      content: 'Dokumentasikan kejadian penting (jika ada)',
      priority: 'medium'
    },
    {
      id: 'post-5',
      content: 'Bersihkan diri dan ganti pakaian',
      priority: 'low'
    },
    {
      id: 'post-6',
      content: 'Evaluasi jalannya demonstrasi dengan kelompok',
      priority: 'medium'
    },
    {
      id: 'post-7',
      content: 'Laporkan pelanggaran HAM (jika ada) ke LBH',
      priority: 'high'
    },
    {
      id: 'post-8',
      content: 'Istirahat yang cukup setelah aktivitas',
      priority: 'low'
    }
  ]
}

export const LEGAL_RIGHTS_INFO = {
  title: 'Hak-Hak Warga Negara dalam Demonstrasi',
  description:
    'Informasi penting mengenai hak dan kewajiban hukum Anda saat berdemonstrasi, didasarkan pada peraturan perundang-undangan yang berlaku di Indonesia. Informasi ini bertujuan untuk memastikan Anda dapat menyuarakan pendapat dengan aman dan terlindungi.',
  sections: [
    {
      title: 'Hak Fundamental Demonstran',
      items: [
        '**Kebebasan Berpendapat:** Dijamin oleh UUD 1945 Pasal 28E ayat (3) dan UU No. 9/1998. Anda berhak mengeluarkan pikiran secara bebas, baik lisan maupun tulisan.',
        '**Perlindungan Hukum:** Aparat keamanan wajib memberikan perlindungan dan tidak boleh menggunakan kekerasan terhadap massa aksi (Pasal 7 UU No. 9/1998).',
        '**Tidak Perlu Izin, Cukup Pemberitahuan:** Demonstrasi tidak memerlukan "izin", melainkan "surat pemberitahuan" kepada kepolisian selambat-lambatnya 3x24 jam sebelum aksi (Pasal 10 UU No. 9/1998).',
        '**Hak Atas Bantuan Hukum:** Setiap orang yang ditangkap atau ditahan berhak mendapatkan bantuan hukum dari pengacara pilihannya (Pasal 54 KUHAP).'
      ]
    },
    {
      title: 'Prosedur Penangkapan & Penahanan',
      items: [
        '**Surat Tugas & Alasan Penangkapan:** Petugas wajib menunjukkan surat tugas dan memberikan alasan penangkapan, kecuali dalam kasus tertangkap tangan (Pasal 18 KUHAP).',
        '**Durasi Penangkapan Awal:** Penangkapan awal hanya dapat dilakukan untuk maksimal 1x24 jam (Pasal 19 KUHAP).',
        '**Hak Menghubungi Keluarga/Pengacara:** Setelah ditangkap, Anda berhak segera menghubungi dan didampingi oleh keluarga atau penasihat hukum (Pasal 57 KUHAP).',
        '**Penolakan Tanda Tangan BAP:** Anda berhak menolak menandatangani Berita Acara Pemeriksaan (BAP) jika isinya tidak sesuai dengan keterangan Anda, dengan mencatatkan alasan penolakan (Pasal 118 KUHAP).'
      ]
    },
    {
      title: 'Eskalasi & Penggunaan Kekuatan oleh Polisi',
      description:
        'Jika situasi memanas, polisi akan bertindak sesuai tahapan penggunaan kekuatan berdasarkan Perkapolri No. 1/2009. Memahami ini dapat membantu Anda mengidentifikasi tindakan yang tidak proporsional.',
      items: [
        '**Tahap 1: Kekuatan Peringatan (Suara):** Perintah lisan seperti "Berhenti!" atau "Bubar!".',
        '**Tahap 2: Kendali Tangan Kosong Lunak:** Tindakan membimbing, menahan, atau mengunci untuk mengarahkan subjek.',
        '**Tahap 3: Kendali Tangan Kosong Keras:** Pukulan atau tendangan ke area yang tidak vital untuk melumpuhkan perlawanan.',
        '**Tahap 4: Kendali Senjata Tumpul:** Penggunaan tongkat polisi (tonfa) atau tameng untuk menahan atau memukul.',
        '**Tahap 5: Kendali dengan Gas Air Mata/Water Cannon:** Digunakan untuk membubarkan massa yang eskalatif dan tidak terkendali.',
        '**Tahap 6: Penggunaan Senjata Api:** Hanya sebagai upaya terakhir jika nyawa petugas atau orang lain terancam bahaya serius. Dilarang keras digunakan untuk membubarkan massa.'
      ]
    },
    {
      title: 'Melaporkan Pelanggaran oleh Aparat',
      description:
        'Jika Anda menyaksikan atau mengalami tindakan aparat yang melanggar hukum (kekerasan, intimidasi, pungli), Anda berhak melaporkannya. Berikut langkah dan saluran yang bisa ditempuh:',
      items: [
        '**1. Dokumentasikan Insiden:** Catat nama, pangkat, dan satuan aparat (jika terlihat), waktu, lokasi, dan kronologi kejadian. Ambil foto atau video sebagai bukti jika situasi memungkinkan dan aman.',
        '**2. Laporkan ke Propam Polri:** Propam adalah divisi internal Polri yang menangani pelanggaran disiplin dan etik. Laporan dapat dilakukan melalui aplikasi Propam Presisi atau mendatangi kantor Propam terdekat.',
        '**3. Adukan ke Komnas HAM:** Jika pelanggaran bersifat hak asasi manusia (penyiksaan, perlakuan tidak manusiawi), adukan ke Komisi Nasional Hak Asasi Manusia melalui situs pengaduan online mereka.',
        '**4. Lapor ke Kompolnas:** Sebagai lembaga pengawas eksternal, Komisi Kepolisian Nasional menerima keluhan masyarakat terkait kinerja kepolisian dan dapat memberikan rekomendasi kepada Presiden.'
      ]
    }
  ],
  footnotes: [
    {
      id: 'uud-1945',
      text: 'UUD 1945 Pasal 28E ayat (3): "Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat."'
    },
    {
      id: 'uu-9-1998',
      text: 'UU No. 9 Tahun 1998 tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum.',
      link: 'https://peraturan.bpk.go.id/Details/45478/uu-no-9-tahun-1998'
    },
    {
      id: 'kuhap',
      text: 'Kitab Undang-Undang Hukum Acara Pidana (UU No. 8 Tahun 1981).',
      link: 'https://jdih.mahkamahagung.go.id/legal-product/kitab-undang-undang-hukum-acara-pidana/download'
    },
    {
      id: 'perkap-1-2009',
      text: 'Peraturan Kapolri No. 1 Tahun 2009 tentang Penggunaan Kekuatan dalam Tindakan Kepolisian.',
      link: 'https://paralegal.id/peraturan/peraturan-kepala-kepolisian-negara-nomor-1-tahun-2009/'
    },
    {
      id: 'propam',
      text: 'Pengaduan Divisi Profesi dan Pengamanan (Propam) Polri dapat dilakukan via aplikasi Propam Presisi.',
      link: 'https://www.kompas.com/tren/read/2022/08/23/113000165/cara-melaporkan-polisi-lewat-aplikasi-propam-presisi-polri'
    },
    {
      id: 'komnas-ham',
      text: 'Pengaduan online Komisi Nasional Hak Asasi Manusia (Komnas HAM).',
      link: 'https://pengaduan.komnasham.go.id/'
    },
    {
      id: 'kompolnas',
      text: 'Pengaduan Komisi Kepolisian Nasional (Kompolnas) RI.',
      link: 'https://www.kompolnas.go.id/'
    }
  ]
}

// National Emergency Numbers (Available across Indonesia)
export const NATIONAL_EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: 'Polisi',
    number: '110',
    description: 'Layanan darurat kepolisian nasional',
    type: 'emergency',
    isNational: true,
    address: 'Tersedia di seluruh Indonesia - hubungi dari telepon manapun'
  },
  {
    name: 'Ambulans',
    number: '118',
    description: 'Layanan ambulans dan gawat darurat nasional',
    type: 'medical',
    isNational: true,
    address: 'Tersedia di seluruh Indonesia - hubungi dari telepon manapun'
  },
  {
    name: 'Pemadam Kebakaran',
    number: '113',
    description: 'Layanan pemadam kebakaran nasional',
    type: 'emergency',
    isNational: true,
    address: 'Tersedia di seluruh Indonesia - hubungi dari telepon manapun'
  },
  {
    name: 'SAR Nasional',
    number: '115',
    description: 'Search and Rescue (Pencarian dan Pertolongan)',
    type: 'emergency',
    isNational: true,
    address: 'Tersedia di seluruh Indonesia - hubungi dari telepon manapun'
  },
  {
    name: 'Kompolnas RI',
    number: '021-739-2315',
    description: 'Komisi Kepolisian Nasional (Pengawas Eksternal Polri)',
    type: 'legal',
    isNational: true,
    address: 'Jl. Tirtayasa VII No.20, Kebayoran Baru, Jakarta Selatan'
  },
  {
    name: 'Komnas HAM',
    number: '021-392-5230',
    description: 'Komisi Nasional Hak Asasi Manusia',
    type: 'legal',
    isNational: true,
    address: 'Jl. Latuharhary No.4B, Menteng, Jakarta Pusat 10310'
  },
  {
    name: 'YLBHI Pusat',
    number: '021-315-6013',
    description: 'Yayasan Lembaga Bantuan Hukum Indonesia',
    type: 'legal',
    isNational: true,
    address: 'Jl. Diponegoro No.74, Menteng, Jakarta Pusat 10320'
  },
  {
    name: 'Dompet Dhuafa',
    number: '0811-161-7101',
    description: 'Crisis Center Dompet Dhuafa',
    type: 'other',
    isNational: true,
    isWhatsappAvailable: true,
    address:
      'Philanthropy Building Jl. Warung Jati Barat No.14, Jakarta Selatan 12540'
  }
]

// Regional Emergency Contacts for Major Cities
export const REGIONAL_EMERGENCY_CONTACTS: EmergencyContact[] = [
  // Jakarta
  {
    name: 'Legal Aid Institute (LBH) Jakarta',
    number: '021-314-5518',
    description: 'Lembaga Bantuan Hukum Jakarta',
    type: 'legal',
    region: 'Jakarta',
    address:
      'Jl. Pangeran Diponegoro No.74, Pegangsaan, Menteng, Jakarta Pusat 10320'
  },
  {
    name: 'Kontras Jakarta',
    number: '021-794-7089',
    description: 'Komisi untuk Orang Hilang dan Korban Tindak Kekerasan',
    type: 'legal',
    region: 'Jakarta',
    address: 'Jl. Borobudur No.14, Menteng, Jakarta Pusat 10320'
  },
  {
    name: 'RS Cipto Mangunkusumo',
    number: '021-314-0608',
    description: 'Rumah Sakit Pusat Nasional',
    type: 'medical',
    region: 'Jakarta',
    address: 'Jl. Diponegoro No.71, Kenari, Senen, Jakarta Pusat 10430'
  },
  {
    name: 'Polda Metro Jaya',
    number: '021-523-4001',
    description: 'Kepolisian Daerah Metro Jaya',
    type: 'emergency',
    region: 'Jakarta',
    address: 'Jl. Jend. Sudirman No.55, Senayan, Jakarta Selatan 12190'
  },

  // Surabaya
  {
    name: 'LBH Surabaya',
    number: '031-502-4736',
    description: 'Lembaga Bantuan Hukum Surabaya',
    type: 'legal',
    region: 'Surabaya',
    address:
      'Jl. Raya Jemursari No.244, Jemur Wonosari, Wonocolo, Surabaya 60237'
  },
  {
    name: 'RSUD Dr. Soetomo',
    number: '031-550-1001',
    description: 'Rumah Sakit Umum Daerah Dr. Soetomo',
    type: 'medical',
    region: 'Surabaya',
    address:
      'Jl. Mayjen Prof. Dr. Moestopo No.6-8, Airlangga, Gubeng, Surabaya 60286'
  },
  {
    name: 'Polda Jawa Timur',
    number: '031-828-1234',
    description: 'Kepolisian Daerah Jawa Timur',
    type: 'emergency',
    region: 'Surabaya',
    address: 'Jl. Ahmad Yani No.116, Ketintang, Gayungan, Surabaya 60231'
  },

  // Bandung
  {
    name: 'LBH Bandung',
    number: '022-423-5871',
    description: 'Lembaga Bantuan Hukum Bandung',
    type: 'legal',
    region: 'Bandung',
    address:
      'Jl. Wastukencana No.5, Babakan Ciamis, Sumur Bandung, Bandung 40117'
  },
  {
    name: 'RS Hasan Sadikin',
    number: '022-203-4953',
    description: 'Rumah Sakit Hasan Sadikin',
    type: 'medical',
    region: 'Bandung',
    address: 'Jl. Pasteur No.38, Pasteur, Sukajadi, Bandung 40161'
  },
  {
    name: 'Polda Jawa Barat',
    number: '022-420-3012',
    description: 'Kepolisian Daerah Jawa Barat',
    type: 'emergency',
    region: 'Bandung',
    address: 'Jl. Soekarno-Hatta No.748, Dayeuhkolot, Bandung 40258'
  },

  // Medan
  {
    name: 'LBH Medan',
    number: '061-455-2080',
    description: 'Lembaga Bantuan Hukum Medan',
    type: 'legal',
    region: 'Medan',
    address: 'Jl. Sei Serayu No.9, Babura, Medan Baru, Medan 20153'
  },
  {
    name: 'RSUP H. Adam Malik',
    number: '061-836-0143',
    description: 'Rumah Sakit Umum Pusat H. Adam Malik',
    type: 'medical',
    region: 'Medan',
    address:
      'Jl. Bunga Lau No.17, Kemenangan Tani, Medan Tuntungan, Medan 20136'
  },
  {
    name: 'Polda Sumatra Utara',
    number: '061-451-2046',
    description: 'Kepolisian Daerah Sumatra Utara',
    type: 'emergency',
    region: 'Medan',
    address:
      'Jl. Jend. Ahmad Yani No.7, Petisah Tengah, Medan Petisah, Medan 20112'
  },

  // Semarang
  {
    name: 'LBH Semarang',
    number: '024-831-2094',
    description: 'Lembaga Bantuan Hukum Semarang',
    type: 'legal',
    region: 'Semarang',
    address: 'Jl. Pandanaran No.126, Pekunden, Semarang Tengah, Semarang 50241'
  },
  {
    name: 'RSUP Dr. Kariadi',
    number: '024-841-3476',
    description: 'Rumah Sakit Umum Pusat Dr. Kariadi',
    type: 'medical',
    region: 'Semarang',
    address: 'Jl. Dr. Sutomo No.16, Randusari, Semarang Selatan, Semarang 50244'
  },
  {
    name: 'Polda Jawa Tengah',
    number: '024-841-2500',
    description: 'Kepolisian Daerah Jawa Tengah',
    type: 'emergency',
    region: 'Semarang',
    address: 'Jl. Pahlawan No.1, Mugassari, Semarang Selatan, Semarang 50249'
  },

  // Yogyakarta
  {
    name: 'LBH Yogyakarta',
    number: '0274-512-781',
    description: 'Lembaga Bantuan Hukum Yogyakarta',
    type: 'legal',
    region: 'Yogyakarta',
    address: 'Jl. Kapas No.20, Semaki, Umbulharjo, Yogyakarta 55166'
  },
  {
    name: 'RSUP Dr. Sardjito',
    number: '0274-587-333',
    description: 'Rumah Sakit Umum Pusat Dr. Sardjito',
    type: 'medical',
    region: 'Yogyakarta',
    address: 'Jl. Kesehatan No.1, Sekip, Sinduadi, Mlati, Sleman 55284'
  },
  {
    name: 'Polda DIY',
    number: '0274-512-070',
    description: 'Kepolisian Daerah Istimewa Yogyakarta',
    type: 'emergency',
    region: 'Yogyakarta',
    address: 'Jl. Ringroad Utara, Condongcatur, Depok, Sleman 55283'
  },

  // Makassar
  {
    name: 'LBH Makassar',
    number: '(0411) 4677699',
    description: 'Lembaga Bantuan Hukum Makassar',
    type: 'legal',
    region: 'Makassar',
    address: 'Jl. Nikel 1 Blok A22 No.18, Kota Makassar, Sulawesi Selatan 90222'
  },
  {
    name: 'RSUP Dr. Wahidin Sudirohusodo',
    number: '(0411) 582888',
    description: 'Rumah Sakit Umum Pusat Dr. Wahidin Sudirohusodo',
    type: 'medical',
    region: 'Makassar',
    address:
      'Jl. Perintis Kemerdekaan Km.11, Tamalanrea, Makassar, Sulawesi Selatan'
  },
  {
    name: 'Polda Sulawesi Selatan',
    number: '(0411) 515201',
    description: 'Kepolisian Daerah Sulawesi Selatan',
    type: 'emergency',
    region: 'Makassar',
    address:
      'Jl. Perintis Kemerdekaan km 16 Makassar, Kota Makassar, Sulawesi Selatan'
  },

  // Palembang
  {
    name: 'LBH Palembang',
    number: '0711-351-234',
    description: 'Lembaga Bantuan Hukum Palembang',
    type: 'legal',
    region: 'Palembang',
    address:
      'Jl. Kapten A. Rivai No.1404, 9/10 Ulu, Seberang Ulu I, Palembang 30116'
  },
  {
    name: 'RSUP Mohammad Hoesin',
    number: '0711-354-088',
    description: 'Rumah Sakit Umum Pusat Mohammad Hoesin',
    type: 'medical',
    region: 'Palembang',
    address: 'Jl. Jend. Sudirman Km.3.5, Kemas Rindo, Kemuning, Palembang 30126'
  },
  {
    name: 'Polda Sumatra Selatan',
    number: '0711-442-061',
    description: 'Kepolisian Daerah Sumatra Selatan',
    type: 'emergency',
    region: 'Palembang',
    address:
      'Jl. Jend. Sudirman No.1435, Siring Agung, Ilir Barat I, Palembang 30138'
  },

  // Denpasar
  {
    name: 'LBH Bali',
    number: '(0361) 3616134',
    description: 'Lembaga Bantuan Hukum Bali',
    type: 'legal',
    region: 'Denpasar',
    address:
      'Jalan Intan LC II Gg. VIII No. 1, Desa Tonja Kecamatan Denpasar Utara, Kota Denpasar, Bali 80239'
  },
  {
    name: 'RSUP Prof. Dr. I.G.N.G. Ngoerah',
    number: '(0361) 226363',
    description: 'Rumah Sakit Umum Pusat Prof. Dr. I.G.N.G. Ngoerah',
    type: 'medical',
    region: 'Denpasar',
    address:
      'Jl. Diponegoro, Dauh Puri Klod, Kec. Denpasar Bar., Kota Denpasar, Bali'
  },
  {
    name: 'Polda Bali',
    number: '(0361) 222200',
    description: 'Kepolisian Daerah Bali',
    type: 'emergency',
    region: 'Denpasar',
    address: 'Jl. WR. Supratman No. 7, Kota Denpasar, Bali'
  },

  // Balikpapan
  {
    name: 'PERADI Balikpapan',
    number: '+62 812-5489-9699',
    description: 'Perhimpunan Advokat Indonesia Balikpapan',
    type: 'legal',
    region: 'Balikpapan',
    address:
      'Jl. M.T Haryono Rt. 001 No. 43 Kelurahan Damai. Balikpapan Kota, Balikpapan. Kaltim.'
  },
  {
    name: 'RSUD Beriman Balikpapan',
    number: '(0542) 792022',
    description: 'Rumah Sakit Umum Daerah Beriman Balikpapan',
    type: 'medical',
    region: 'Balikpapan',
    address:
      'Jalan Mayor Jendral Sutoyo No. 30 RT. 01 Kel. Gunung Sari Ulu, Kec. Balikpapan Tengah, Kota Balikpapan.'
  },
  {
    name: 'Polresta Balikpapan',
    number: '110',
    description: 'Kepolisian Resor Kota Balikpapan',
    type: 'emergency',
    region: 'Balikpapan',
    address: 'Jl. Jenderal Sudirman No. 69, Balikpapan, Kaltim'
  },

  // Samarinda
  {
    name: 'LBH Samarinda',
    number: '+62 821-5133-1553',
    description: 'Lembaga Bantuan Hukum Samarinda',
    type: 'legal',
    region: 'Samarinda',
    address: 'Jl Wijaya Kusuma II No 50, Air Putih, Samarinda Ulu Samarinda'
  },
  {
    name: 'RSUD Abdoel Wahab Sjahranie',
    number: '(0541) 738118',
    description: 'Rumah Sakit Umum Daerah Abdoel Wahab Sjahranie',
    type: 'medical',
    region: 'Samarinda',
    address: 'Jl. Palang Merah Indonesia No. 1 Samarinda, Kaltim 75123'
  },
  {
    name: 'Polresta Samarinda',
    number: '(0541) 742434',
    description: 'Kepolisian Resor Kota Samarinda',
    type: 'emergency',
    region: 'Samarinda',
    address: 'Jl. Slamet Riyadi No. 1 Kota Samrinda'
  },

  // Manado
  {
    name: 'LBH APIK Manado',
    number: '(0431) 824132',
    description:
      'Lembaga Bantuan Hukum Asosiasi Perempuan Indonesia untuk Keadilan Manado',
    type: 'legal',
    region: 'Manado',
    address: 'Jalan Bethesda 6 No. 77, Ranotana ling II, Manado - 95116'
  },
  {
    name: 'RSUP Prof. Dr. R.D. Kandou',
    number: '(0431) 838203',
    description: 'Rumah Sakit Umum Pusat Prof. Dr. R.D. Kandou',
    type: 'medical',
    region: 'Manado',
    address: 'Jl. Raya Tanawangko No.56 Manado'
  },
  {
    name: 'Polresta Manado',
    number: '(0431) 840690',
    description: 'Kepolisian Resor Kota Manado',
    type: 'emergency',
    region: 'Manado',
    address:
      'Jl. Piere Tendean, Wenang Utara, Wenang, Kota Manado, Sulawesi Utara'
  },

  // Ambon
  {
    name: 'YLBHI Pusat',
    number: '021-315-6013',
    description: 'Yayasan Lembaga Bantuan Hukum Indonesia (Nasional)',
    type: 'legal',
    region: 'Ambon',
    address: 'Jl. Diponegoro No.74, Menteng, Jakarta Pusat 10320'
  },
  {
    name: 'RS Umum Dr. M. Haulussy Ambon',
    number: '0911-344871',
    description: 'Rumah Sakit Umum Dr. M. Haulussy Ambon',
    type: 'medical',
    region: 'Ambon',
    address:
      'Jl. dr. Kayadoe, Kelurahan Benteng, Kecamatan Nusaniwe. Ambon 97117.'
  },
  {
    name: 'Polresta P.Ambon dan P.P. Lease',
    number: '(0911)-352912',
    description: 'Kepolisian Resor Kota P.Ambon dan P.P. Lease',
    type: 'emergency',
    region: 'Ambon',
    address: 'Jl. Rijali No 1 Ambon'
  },

  // Jayapura
  {
    name: 'LBH Papua',
    number: '021-315-6013', // Fallback to YLBHI Pusat
    description: 'Lembaga Bantuan Hukum Papua (YLBHI)',
    type: 'legal',
    region: 'Jayapura',
    address:
      'Jl. Gerilyawan No. 46, Yobe, Kec. Abepura, Kota Jayapura, Papua 99351'
  },
  {
    name: 'RS Umum Jayapura',
    number: '0813-4204-4648',
    description: 'Rumah Sakit Umum Jayapura',
    type: 'medical',
    region: 'Jayapura',
    address:
      'Jl. Kesehatan I No. 01 Dok II Jayapura, Kel. Bhayangkara Kec. Jayapura Utara'
  },
  {
    name: 'Polresta Jayapura Kota',
    number: '(0967) 564161',
    description: 'Kepolisian Resor Kota Jayapura Kota',
    type: 'emergency',
    region: 'Jayapura',
    address:
      'Jl. Ahmad Yani No.11, Gurabesi, Kec. Jayapura Utara, Kota Jayapura'
  },

  // Solo (Surakarta)
  {
    name: 'Polresta Surakarta',
    number: '0271712332',
    description: 'Kepolisian Resor Kota Surakarta',
    type: 'emergency',
    region: 'Solo',
    address:
      'Jl. Slamet Riyadi No.328, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57142'
  },
  {
    name: 'RS PKU Muhammadiyah Surakarta',
    number: '0271-714578',
    description: 'Rumah Sakit PKU Muhammadiyah Surakarta',
    type: 'medical',
    region: 'Solo',
    address: 'Jl. Ronggowarsito No.130, Timuran, Banjarsari, Surakarta 57131'
  },

  // Kendari
  {
    name: 'Polda Sulawesi Tenggara',
    number: '(0401) 395040',
    description: 'Kepolisian Daerah Sulawesi Tenggara',
    type: 'emergency',
    region: 'Kendari',
    address:
      'Jl. Haluoleo No. 1, Mokoau, Kec. Kambu, Kota Kendari, Sulawesi Tenggara'
  },
  {
    name: 'Rumah Sakit Bhayangkara Tk. III Kendari',
    number: '0811-6127-998',
    description: 'Rumah Sakit Bhayangkara Tk. III Kendari',
    type: 'medical',
    region: 'Kendari',
    address:
      'Jl. Gn. Meluhu No.7, Mandonga, Kota Kendari, Sulawesi Tenggara 93117'
  },

  // Jambi
  {
    name: 'Polresta Jambi',
    number: '(0741) 23025',
    description: 'Kepolisian Resor Kota Jambi',
    type: 'emergency',
    region: 'Jambi',
    address: 'Jl. Bhayangkara No. 1, Kota Jambi, Jambi'
  },
  {
    name: 'RSUD Raden Mattaher Jambi',
    number: '(0741) 61692',
    description: 'Rumah Sakit Umum Daerah Raden Mattaher Jambi',
    type: 'medical',
    region: 'Jambi',
    address:
      'Jl. Letjen Suprapto No.31, Telanaipura, Kec. Telanaipura, Kota Jambi, Jambi 36361'
  },
  {
    name: 'Pusat Advokasi Hukum dan HAM (PAHAM) Indonesia',
    number: '(021) 8408232',
    description: 'Organisasi Bantuan Hukum (Kontak Nasional)',
    type: 'legal',
    region: 'Jambi',
    address:
      'Komplek Depsos RI No. 19. Jalan TB. Simatupang, Pasar Rebo, Jakarta 13761'
  }
]

// Combined emergency contacts for backward compatibility
export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  ...NATIONAL_EMERGENCY_CONTACTS,
  ...REGIONAL_EMERGENCY_CONTACTS
]

// Available regions for selection, categorized by island
export const CATEGORIZED_REGIONS = [
  {
    island: 'Sumatera',
    cities: ['Medan', 'Palembang', 'Jambi']
  },
  {
    island: 'Jawa',
    cities: ['Jakarta', 'Surabaya', 'Bandung', 'Semarang', 'Yogyakarta', 'Solo']
  },
  {
    island: 'Kalimantan',
    cities: ['Balikpapan', 'Samarinda']
  },
  {
    island: 'Sulawesi',
    cities: ['Makassar', 'Manado', 'Kendari']
  },
  {
    island: 'Bali & Nusa Tenggara',
    cities: ['Denpasar']
  },
  {
    island: 'Maluku & Papua',
    cities: ['Ambon', 'Jayapura']
  }
]

// Flattened list of all available regions for compatibility
export const AVAILABLE_REGIONS = CATEGORIZED_REGIONS.flatMap(
  (group) => group.cities
).sort()
