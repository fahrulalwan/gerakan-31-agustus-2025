import { Metadata } from 'next'

import LegalRights from '@/components/page/demonstrasi/legal-rights'
import ButtonHero from '@/components/page/home/button-hero'
import HakHukum from '@/constants/hak-hukum'

export const metadata: Metadata = {
  title: HakHukum.title,
  description: HakHukum.description,
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
    title: HakHukum.title,
    description: HakHukum.description,
    url: 'https://tuntutanrakyat.vercel.app/hak-hukum',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: HakHukum.title,
    description: HakHukum.description
  },
  alternates: {
    canonical: 'https://tuntutanrakyat.vercel.app/hak-hukum'
  }
}

const EmergencyContactPage = () => (
  <div className="bg-gray-900">
    {/* Hero Section */}
    <div className="px-4 py-16 bg-[#037033] min-h-screen relative flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Demonstrasi Yang aman,
          <br />
          <span className="text-[#EB8FBD]">Aspirasi yang terdengar</span>
        </h1>

        <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          {HakHukum.description}
        </p>
      </div>

      <ButtonHero label="Lihat Detail" className="bg-pink-200" id="legals" />
    </div>

    <LegalRights />
  </div>
)
export default EmergencyContactPage
