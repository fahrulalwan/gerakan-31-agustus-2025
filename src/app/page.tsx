import { Metadata } from 'next'

import { APP_URL } from '@/constants/app'

import TuntutanPage from './tuntutan/page'

export const metadata: Metadata = {
  title: 'Transparansi. Reformasi. Empati.',
  description:
    '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
  keywords: [
    '17+8 Tuntutan Rakyat',
    'tuntutan rakyat indonesia',
    'demonstrasi aman',
    'reformasi indonesia',
    'transparansi pemerintah',
    'perubahan sosial indonesia',
    'aksi damai',
    'tuntutan masyarakat',
    'panduan demo aman',
    'indonesia baru'
  ],
  openGraph: {
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar 17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    url: APP_URL,
    images: [
      {
        url: `${APP_URL}/ogimage.png`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar 17+8 Tuntutan Rakyat untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah.',
    images: [
      {
        url: `${APP_URL}/twitter-card.png`,
        width: 1200,
        height: 630
      }
    ]
  },
  alternates: {
    canonical: APP_URL
  }
}

const Home = () => <TuntutanPage />

export default Home
