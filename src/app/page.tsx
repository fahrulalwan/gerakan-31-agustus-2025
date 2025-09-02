import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
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
    url: 'https://tuntutan-rakyat.vercel.app',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar 17+8 Tuntutan Rakyat untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah.'
  },
  alternates: {
    canonical: 'https://tuntutan-rakyat.vercel.app'
  }
}

const Home = () => {
  redirect('/tuntutan')
}

export default Home
