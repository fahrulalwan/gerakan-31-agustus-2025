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
    url: 'https://tuntutanrakyat.vercel.app/panduan-demo',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panduan Demonstrasi Aman | Transparansi. Reformasi. Empati.',
    description:
      'Panduan lengkap untuk berpartisipasi dalam demonstrasi dengan aman dan bertanggung jawab.'
  },
  alternates: {
    canonical: 'https://tuntutanrakyat.vercel.app/panduan-demo'
  }
}

const PanduanDemoLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export default PanduanDemoLayout
