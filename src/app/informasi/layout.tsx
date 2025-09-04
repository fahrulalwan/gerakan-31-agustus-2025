import type { Metadata } from 'next'

import { APP_URL } from '@/constants/app'

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
    url: `${APP_URL}/informasi`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informasi & Panduan | 17+8 Tuntutan Rakyat',
    description:
      'Kumpulan artikel dan panduan lengkap untuk mendukung demonstrasi yang aman, efektif, dan bermartabat. Informasi terkini seputar 17+8 Tuntutan Rakyat dan panduan partisipasi yang bertanggung jawab.'
  },
  alternates: {
    canonical: `${APP_URL}/informasi`
  }
}

const InformasiLayout = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export default InformasiLayout
