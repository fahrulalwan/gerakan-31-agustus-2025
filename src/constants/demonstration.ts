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
  type: 'legal' | 'medical' | 'emergency'
  region?: string
  isNational?: boolean
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
    'Informasi penting tentang hak asasi manusia saat berdemonstrasi',
  sections: [
    {
      title: 'Hak Dasar',
      items: [
        'Hak untuk menyampaikan pendapat di muka umum (UUD 1945 Pasal 28)',
        'Hak untuk berkumpul dan berserikat (UUD 1945 Pasal 28E)',
        'Hak untuk tidak disiksa atau diperlakukan tidak manusiawi',
        'Hak untuk mendapat perlindungan hukum yang adil'
      ]
    },
    {
      title: 'Jika Ditahan',
      items: [
        'Anda berhak mengetahui alasan penangkapan',
        'Anda berhak menghubungi keluarga atau pengacara',
        'Anda berhak mendapat bantuan hukum',
        'Penangkapan tanpa surat perintah hanya boleh dilakukan dalam flagrante delicto (tertangkap tangan)',
        'Penahanan maksimal 1x24 jam tanpa surat perintah'
      ]
    },
    {
      title: 'Yang Harus Dilakukan',
      items: [
        'Tetap tenang dan kooperatif',
        'Tanyakan identitas dan dasar hukum penangkapan',
        'Minta untuk menghubungi keluarga/pengacara',
        'Jangan menandatangani dokumen yang tidak Anda pahami',
        'Ingat nama, nomor identitas, dan ciri-ciri petugas'
      ]
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
  }
]

// Regional Emergency Contacts for Major Cities
export const REGIONAL_EMERGENCY_CONTACTS: EmergencyContact[] = [
  // Jakarta
  {
    name: 'LBH Jakarta',
    number: '021-719-2620',
    description: 'Lembaga Bantuan Hukum Jakarta',
    type: 'legal',
    region: 'Jakarta',
    address: 'Jl. Diponegoro No.74, Menteng, Jakarta Pusat 10320'
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
    number: '0411-872-045',
    description: 'Lembaga Bantuan Hukum Makassar',
    type: 'legal',
    region: 'Makassar',
    address: 'Jl. Urip Sumoharjo No.37, Karampuang, Panakkukang, Makassar 90231'
  },
  {
    name: 'RSUP Dr. Wahidin',
    number: '0411-584-677',
    description: 'Rumah Sakit Umum Pusat Dr. Wahidin Sudirohusodo',
    type: 'medical',
    region: 'Makassar',
    address:
      'Jl. Perintis Kemerdekaan Km.11, Tamalanrea Indah, Tamalanrea, Makassar 90245'
  },
  {
    name: 'Polda Sulawesi Selatan',
    number: '0411-441-270',
    description: 'Kepolisian Daerah Sulawesi Selatan',
    type: 'emergency',
    region: 'Makassar',
    address: 'Jl. Ahmad Yani No.9, Banta-Bantaeng, Rappocini, Makassar 90222'
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
    number: '0361-227-832',
    description: 'Lembaga Bantuan Hukum Bali',
    type: 'legal',
    region: 'Denpasar',
    address: 'Jl. Hayam Wuruk No.175, Taman, Denpasar Barat, Denpasar 80114'
  },
  {
    name: 'RSUP Sanglah',
    number: '0361-227-911',
    description: 'Rumah Sakit Umum Pusat Sanglah',
    type: 'medical',
    region: 'Denpasar',
    address: 'Jl. Diponegoro, Dauh Puri Klod, Denpasar Barat, Denpasar 80113'
  },
  {
    name: 'Polda Bali',
    number: '0361-424-346',
    description: 'Kepolisian Daerah Bali',
    type: 'emergency',
    region: 'Denpasar',
    address:
      'Jl. Gunung Sanghyang No.110, Padangsambian, Denpasar Barat, Denpasar 80117'
  },

  // Balikpapan
  {
    name: 'LBH Balikpapan',
    number: '0542-734-567',
    description: 'Lembaga Bantuan Hukum Balikpapan',
    type: 'legal',
    region: 'Balikpapan',
    address:
      'Jl. Jend. Sudirman No.1, Klandasan Ilir, Balikpapan Kota, Balikpapan 76111'
  },
  {
    name: 'RSUD Abdul Wahab Sjahranie',
    number: '0542-873-901',
    description: 'Rumah Sakit Umum Daerah Abdul Wahab Sjahranie',
    type: 'medical',
    region: 'Balikpapan',
    address:
      'Jl. Wahab Sjahranie No.1, Air Putih, Samarinda Ulu, Samarinda 75124'
  },
  {
    name: 'Polda Kalimantan Timur',
    number: '0542-421-110',
    description: 'Kepolisian Daerah Kalimantan Timur',
    type: 'emergency',
    region: 'Balikpapan',
    address:
      'Jl. Jend. Sudirman No.3, Pelabuhan, Balikpapan Kota, Balikpapan 76111'
  }
]

// Combined emergency contacts for backward compatibility
export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  ...NATIONAL_EMERGENCY_CONTACTS,
  ...REGIONAL_EMERGENCY_CONTACTS
]

// Available regions for selection
export const AVAILABLE_REGIONS = [
  'Jakarta',
  'Surabaya',
  'Bandung',
  'Medan',
  'Semarang',
  'Yogyakarta',
  'Makassar',
  'Palembang',
  'Denpasar',
  'Balikpapan'
]
