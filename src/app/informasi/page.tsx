import type { Metadata } from 'next'

import ButtonHero from '@/components/page/home/button-hero'
import { APP_URL } from '@/constants/app'
import { Informasi } from '@/constants/informasi'

import PsychologicalSupport from './_components/psychological-support'
import SimilarActions from './_components/similar-actions'

export const metadata: Metadata = {
  title: Informasi.title,
  description: Informasi.description,
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
    title: Informasi.title,
    description: Informasi.description,
    url: `${APP_URL}/informasi`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: Informasi.title,
    description: Informasi.description
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
          Untuk Tetap Kuat & Terkoneksi
        </h1>

        <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          {Informasi.description}
        </p>
      </div>

      <ButtonHero
        label="Lihat Informasi & Layanan"
        className="bg-pink-200"
        id="aksi-serupa"
      />
    </div>

    <SimilarActions />
    <PsychologicalSupport />
  </div>
)

export default InformasiPage
