import { Metadata } from 'next'

import ButtonHero from '@/components/molecule/button-hero'
import { APP_URL } from '@/constants/app'
import { CATEGORIZED_REGIONS } from '@/constants/demonstration'
import { KONTAK_DARURAT } from '@/constants/kontak-darurat'

import EmergencyContacts from './_components/emergency-contacts'

// Generate static params for all cities
export async function generateStaticParams() {
  const allCities = CATEGORIZED_REGIONS.flatMap((region) => region.cities)

  return [
    { wilayah: [] }, // For main /kontak-darurat page
    ...allCities.map((city) => ({ wilayah: [city.toLowerCase()] }))
  ]
}

// Dynamic metadata generation
export async function generateMetadata({
  params
}: {
  params: Promise<{ wilayah?: string[] }>
}): Promise<Metadata> {
  const { wilayah } = await params
  const city = wilayah?.[0]

  // Get all cities for validation
  const allCities = CATEGORIZED_REGIONS.flatMap((region) => region.cities)
  const isValidCity =
    city && allCities.some((c) => c.toLowerCase() === city.toLowerCase())

  if (city && isValidCity) {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1)
    const cityTitle = `Kontak Darurat Kota ${cityName} | Transparansi. Reformasi. Empati.`
    const cityDescription = `Temukan nomor penting dan layanan darurat di ${cityName} yang dapat dihubungi kapan saja. Pastikan Anda tahu ke mana harus menghubungi saat menghadapi keadaan genting di ${cityName}.`
    return {
      title: cityTitle,
      description: cityDescription,
      keywords: [
        `kontak darurat ${cityName}`,
        `layanan darurat ${cityName}`,
        `nomor penting ${cityName}`,
        `bantuan hukum ${cityName}`,
        `rumah sakit ${cityName}`,
        `polisi ${cityName}`,
        `emergency contact ${cityName}`,
        'panduan demonstrasi aman',
        'demonstrasi bertanggung jawab',
        'hak hukum demonstrasi',
        'protokol keamanan',
        'persiapan demonstrasi',
        'aksi damai'
      ],
      openGraph: {
        title: cityTitle,
        description: cityDescription,
        url: `${APP_URL}/kontak-darurat/${city}`,
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: cityTitle,
        description: cityDescription
      },
      alternates: {
        canonical: `${APP_URL}/kontak-darurat/${city}`
      }
    }
  }

  // Default metadata for main page
  return {
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
}

const EmergencyContactPage = async ({
  params
}: {
  params: Promise<{ wilayah?: string[] }>
}) => {
  const { wilayah } = await params
  const wilayahToPass = wilayah ? wilayah[0].toLowerCase() : 'nasional'

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
