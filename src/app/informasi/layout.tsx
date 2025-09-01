import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informasi & Panduan',
  description:
    'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat. Informasi terkini seputar Gerakan 31 Agustus 2025 dan panduan partisipasi yang bertanggung jawab.',
  keywords: [
    'informasi gerakan 31 agustus 2025',
    'panduan demonstrasi',
    'artikel gerakan',
    'informasi terkini',
    'panduan keamanan',
    'berita gerakan',
    'update demonstrasi',
    'panduan partisipasi',
    'informasi aksi',
    'artikel demo aman'
  ],
  openGraph: {
    title: 'Informasi & Panduan | Gerakan 31 Agustus 2025',
    description:
      'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat.',
    url: 'https://gerakan-31-agustus-2025.vercel.app/informasi',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Informasi & Panduan - Gerakan 31 Agustus 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informasi & Panduan | Gerakan 31 Agustus 2025',
    description:
      'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app/informasi'
  }
}

const InformasiLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export default InformasiLayout
