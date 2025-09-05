import type { Metadata } from 'next'

import ButtonHero from '@/components/page/home/button-hero'
import { APP_URL } from '@/constants/app'
import { LayananPsikologis } from '@/constants/layanan-psikologis'

import PsychologicalSupport from './_components/psychological-support'

export const metadata: Metadata = {
  title: LayananPsikologis.title,
  description: LayananPsikologis.description,
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
    title: LayananPsikologis.title,
    description: LayananPsikologis.description,
    url: `${APP_URL}/informasi`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: LayananPsikologis.title,
    description: LayananPsikologis.description
  },
  alternates: {
    canonical: `${APP_URL}/informasi`
  }
}

const PsychologicalSupportPage = () => (
  <div className="bg-gray-900">
    {/* Hero Section */}
    <div className="px-4 py-16 bg-[#037033] min-h-screen relative flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Pulihkan Diri,{' '}
          <span className="text-[#EB8FBD]">Jaga Kesehatan Mental</span>
        </h1>

        <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          {LayananPsikologis.description}
        </p>
      </div>

      <ButtonHero
        label="Lihat Layanan"
        className="bg-pink-200"
        id="layanan-psikologis"
      />
    </div>

    <PsychologicalSupport />
  </div>
)

export default PsychologicalSupportPage
