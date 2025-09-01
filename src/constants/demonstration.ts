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

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: 'Polisi',
    number: '110',
    description: 'Layanan darurat kepolisian',
    type: 'emergency'
  },
  {
    name: 'Ambulans',
    number: '118',
    description: 'Layanan ambulans dan gawat darurat',
    type: 'medical'
  },
  {
    name: 'Pemadam Kebakaran',
    number: '113',
    description: 'Layanan pemadam kebakaran',
    type: 'emergency'
  },
  {
    name: 'SAR',
    number: '115',
    description: 'Search and Rescue (Pencarian dan Pertolongan)',
    type: 'emergency'
  },
  {
    name: 'LBH Jakarta',
    number: '021-719-2620',
    description: 'Lembaga Bantuan Hukum Jakarta',
    type: 'legal'
  },
  {
    name: 'Komnas HAM',
    number: '021-392-5230',
    description: 'Komisi Nasional Hak Asasi Manusia',
    type: 'legal'
  },
  {
    name: 'YLBHI',
    number: '021-315-6013',
    description: 'Yayasan Lembaga Bantuan Hukum Indonesia',
    type: 'legal'
  },
  {
    name: 'Kontras',
    number: '021-794-7089',
    description: 'Komisi untuk Orang Hilang dan Korban Tindak Kekerasan',
    type: 'legal'
  }
]
