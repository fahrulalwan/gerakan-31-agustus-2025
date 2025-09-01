import { Heart, Scale, Shield, Target, Users } from 'lucide-react'
import type { Metadata } from 'next'

const visiMisi = [
  {
    title: 'Visi',
    icon: Target,
    content:
      'Mewujudkan Indonesia yang demokratis, adil, dan sejahtera melalui partisipasi aktif rakyat dalam proses politik dan pengambilan keputusan.',
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'Misi',
    icon: Users,
    content:
      'Mengorganisir gerakan rakyat yang damai, terstruktur, dan berkelanjutan untuk memperjuangkan tuntutan reformasi yang menyeluruh.',
    color: 'bg-pink-100 text-pink-800'
  }
]

const nilaiNilai = [
  {
    title: 'Demokrasi',
    icon: Scale,
    description:
      'Menghormati proses demokratis dan hak-hak konstitusional setiap warga negara'
  },
  {
    title: 'Kedamaian',
    icon: Heart,
    description:
      'Menjunjung tinggi demonstrasi damai tanpa kekerasan dalam bentuk apapun'
  },
  {
    title: 'Transparansi',
    icon: Shield,
    description:
      'Keterbukaan dalam setiap proses dan pengambilan keputusan gerakan'
  },
  {
    title: 'Persatuan',
    icon: Users,
    description:
      'Mengedepankan persatuan di atas perbedaan untuk kepentingan bangsa'
  }
]

export const metadata: Metadata = {
  title: 'Tentang Gerakan',
  description:
    'Tentang Gerakan 31 Agustus 2025 - Latar belakang, visi, misi, dan nilai-nilai gerakan rakyat Indonesia untuk mewujudkan perubahan menyeluruh menuju Indonesia yang lebih demokratis, adil, dan sejahtera.',
  keywords: [
    'tentang gerakan 31 agustus 2025',
    'latar belakang gerakan',
    'visi misi gerakan',
    'nilai-nilai gerakan',
    'gerakan rakyat indonesia',
    'reformasi indonesia',
    'demokrasi indonesia',
    'perubahan sosial',
    'gerakan damai',
    'aspirasi rakyat'
  ],
  openGraph: {
    title: 'Tentang Gerakan 31 Agustus 2025 | Latar Belakang & Visi Misi',
    description:
      'Pelajari latar belakang, visi, misi, dan nilai-nilai Gerakan 31 Agustus 2025 untuk mewujudkan Indonesia yang lebih demokratis, adil, dan sejahtera.',
    url: 'https://gerakan-31-agustus-2025.vercel.app/tentang',
    type: 'article',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Tentang Gerakan 31 Agustus 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Gerakan 31 Agustus 2025 | Latar Belakang & Visi Misi',
    description:
      'Pelajari latar belakang, visi, misi, dan nilai-nilai Gerakan 31 Agustus 2025.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app/tentang'
  }
}

const TentangPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang Gerakan 31 Agustus 2025',
    description:
      'Latar belakang, visi, misi, dan nilai-nilai Gerakan 31 Agustus 2025 dalam memperjuangkan reformasi menyeluruh untuk Indonesia yang lebih baik.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Gerakan 31 Agustus 2025',
      description:
        'Gerakan rakyat untuk reformasi menyeluruh Indonesia melalui 25 tuntutan yang mencakup aspek politik, ekonomi, sosial, dan hukum.',
      foundingDate: '2025-08-31',
      mission:
        'Mewujudkan Indonesia yang lebih adil, demokratis, dan sejahtera melalui reformasi menyeluruh yang melibatkan partisipasi aktif masyarakat.',
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia'
      },
      knowsAbout: [
        'Reformasi Politik',
        'Transparansi Pemerintahan',
        'Keadilan Sosial',
        'Demokrasi Partisipatif',
        'Hak Asasi Manusia'
      ]
    },
    author: {
      '@type': 'Organization',
      name: 'Gerakan 31 Agustus 2025'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gerakan 31 Agustus 2025',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gerakan-31-agustus-2025.vercel.app/android-chrome-512x512.png'
      }
    },
    datePublished: '2025-08-31',
    dateModified: '2025-09-01'
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="py-20 bg-[#037033]">
          <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tentang <span className="text-white">Gerakan</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-green-100">
              Mengenal lebih dalam latar belakang, visi, misi, dan nilai-nilai
              yang menjadi fondasi Gerakan 31 Agustus 2025
            </p>
          </div>
        </div>

        {/* Visi Misi Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Visi & Misi
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Fondasi Gerakan
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Visi dan misi yang menjadi panduan dalam setiap langkah
                perjuangan untuk Indonesia yang lebih baik
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {visiMisi.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {item.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{item.content}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        {/* Nilai-Nilai Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Nilai-Nilai
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Prinsip Gerakan
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nilai-nilai fundamental yang menjadi pedoman dalam setiap
                aktivitas dan perjuangan gerakan
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {nilaiNilai.map((nilai, index) => (
                  <div key={index} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                        <nilai.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {nilai.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {nilai.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TentangPage
