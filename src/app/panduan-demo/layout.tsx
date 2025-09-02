import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panduan Demonstrasi | Transparansi. Reformasi. Empati.',
  description:
    'Panduan lengkap demonstrasi aman dan bertanggung jawab. Checklist persiapan, protokol keamanan saat demo, hak hukum, dan kontak darurat untuk partisipasi yang efektif dalam 17+8 Tuntutan Rakyat.',
  keywords: [
    'panduan demonstrasi aman',
    'demonstrasi bertanggung jawab',
    'checklist demo',
    'hak hukum demonstrasi',
    'kontak darurat demo',
    'protokol keamanan',
    'persiapan demonstrasi',
    'aksi damai',
    'panduan demo indonesia',
    'keamanan demonstrasi'
  ],
  openGraph: {
    title: 'Panduan Demonstrasi Aman | Transparansi. Reformasi. Empati.',
    description:
      'Panduan lengkap untuk berpartisipasi dalam demonstrasi dengan aman dan bertanggung jawab. Checklist, protokol keamanan, dan hak hukum.',
    url: 'https://gerakan-31-agustus-2025.vercel.app/panduan-demo',
    type: 'article',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Panduan Demonstrasi Aman - Transparansi. Reformasi. Empati.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panduan Demonstrasi Aman | Transparansi. Reformasi. Empati.',
    description:
      'Panduan lengkap untuk berpartisipasi dalam demonstrasi dengan aman dan bertanggung jawab.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app/panduan-demo'
  }
}

const PanduanDemoLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export default PanduanDemoLayout
