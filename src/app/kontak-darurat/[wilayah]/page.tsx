import { Metadata } from 'next'

import ButtonHero from '@/components/molecule/button-hero'
import { APP_URL } from '@/constants/app'
import { KONTAK_DARURAT } from '@/constants/kontak-darurat'

import EmergencyContacts from './_components/emergency-contacts'

export const metadata: Metadata = {
  title: KONTAK_DARURAT.title,
  description: KONTAK_DARURAT.description,
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
    title: KONTAK_DARURAT.title,
    description: KONTAK_DARURAT.description,
    url: `${APP_URL}/kontak-darurat`,
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: KONTAK_DARURAT.title,
    description: KONTAK_DARURAT.description
  },
  alternates: {
    canonical: `${APP_URL}/kontak-darurat`
  }
}

const EmergencyContactPage = async ({
  params
}: {
  params: Promise<{ wilayah?: string }>
}) => {
  const { wilayah } = await params
  const wilayahToPass = wilayah ? wilayah.toLowerCase() : 'nasional'

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="px-4 py-16 bg-[#037033] min-h-screen relative flex flex-col justify-center items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kontak Darurat,
            <br />
            <span className="text-[#EB8FBD]">Selalu Siaga untuk Anda</span>
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            {KONTAK_DARURAT.description}
          </p>
        </div>

        <ButtonHero
          label="Lihat Kontak Darurat"
          className="bg-pink-200"
          id="contacts"
        />
      </div>

      <EmergencyContacts wilayah={wilayahToPass} />
    </div>
  )
}
export default EmergencyContactPage
