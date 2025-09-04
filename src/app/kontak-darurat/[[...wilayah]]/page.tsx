import { Metadata } from 'next'

import EmergencyContacts from '@/components/page/demonstrasi/emergency-contacts'
import ButtonHero from '@/components/page/home/button-hero'
import KontakDarurat from '@/constants/kontak-darurat'

export const metadata: Metadata = {
  title: KontakDarurat.title,
  description: KontakDarurat.description,
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
    title: KontakDarurat.title,
    description: KontakDarurat.description,
    url: 'https://tuntutanrakyat.vercel.app/kontak-darurat',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: KontakDarurat.title,
    description: KontakDarurat.description
  },
  alternates: {
    canonical: 'https://tuntutanrakyat.vercel.app/kontak-darurat'
  }
}

const EmergencyContactPage = async ({
  params
}: {
  params: Promise<{ wilayah?: string }>
}) => {
  const { wilayah } = await params
  const wilayahToPass = wilayah?.[0] ? wilayah?.[0].toLowerCase() : 'nasional'

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
            {KontakDarurat.description}
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
