import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informasi & Panduan',
  description:
    'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat. Informasi terkini seputar 17+8 Tuntutan Rakyat dan panduan partisipasi yang bertanggung jawab.',
  keywords: [
    'informasi 17+8 tuntutan rakyat',
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
    title: 'Informasi & Panduan | 17+8 Tuntutan Rakyat',
    description:
      'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat. Informasi terkini seputar 17+8 Tuntutan Rakyat dan panduan partisipasi yang bertanggung jawab.',
    url: 'https://tuntutan-rakyat.vercel.app/informasi',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Informasi & Panduan - 17+8 Tuntutan Rakyat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informasi & Panduan | 17+8 Tuntutan Rakyat',
    description:
      'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat. Informasi terkini seputar 17+8 Tuntutan Rakyat dan panduan partisipasi yang bertanggung jawab.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://tuntutan-rakyat.vercel.app/informasi'
  }
}

const InformasiLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export default InformasiLayout
