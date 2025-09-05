import type { Metadata } from 'next'

import ButtonHero from '@/components/page/home/button-hero'
import { APP_URL } from '@/constants/app'
import { INFORMASI } from '@/constants/informasi'

import InternalLinks from './_components/internal-links'
import SimilarActions from './_components/similar-actions'

export const metadata: Metadata = {
  title: INFORMASI.title,
  description: INFORMASI.description,
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
    title: INFORMASI.title,
    description: INFORMASI.description,
    url: `${APP_URL}/informasi`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: INFORMASI.title,
    description: INFORMASI.description
  },
  alternates: {
    canonical: `${APP_URL}/informasi`
  }
}

const InformasiPage = () => (
  <div className="bg-gray-900">
    {/* Hero Section */}
    <div className="px-4 py-16 bg-[#037033] min-h-screen relative flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Untuk Tetap
          <br />
          <span className="text-[#EB8FBD]">Kuat & Terkoneksi</span>
        </h1>

        <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          {INFORMASI.description}
        </p>
      </div>

      <ButtonHero
        label="Lihat Informasi & Layanan"
        className="bg-pink-200"
        id="aksi-serupa"
      />
    </div>

    <InternalLinks />

    <SimilarActions />
  </div>
)

export default InformasiPage
