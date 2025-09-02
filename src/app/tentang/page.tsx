// import { Heart, Scale, Shield, Target, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

// const visiMisi = [
//   {
//     title: 'Visi',
//     icon: Target,
//     content:
//       'Mewujudkan Indonesia yang demokratis, adil, dan sejahtera melalui partisipasi aktif rakyat dalam proses politik dan pengambilan keputusan.',
//     color: 'bg-green-100 text-green-800'
//   },
//   {
//     title: 'Misi',
//     icon: Users,
//     content:
//       'Mengorganisir gerakan rakyat yang damai, terstruktur, dan berkelanjutan untuk memperjuangkan tuntutan reformasi yang menyeluruh.',
//     color: 'bg-pink-100 text-pink-800'
//   }
// ]

// const nilaiNilai = [
//   {
//     title: 'Demokrasi',
//     icon: Scale,
//     description:
//       'Menghormati proses demokratis dan hak-hak konstitusional setiap warga negara'
//   },
//   {
//     title: 'Kedamaian',
//     icon: Heart,
//     description:
//       'Menjunjung tinggi demonstrasi damai tanpa kekerasan dalam bentuk apapun'
//   },
//   {
//     title: 'Transparansi',
//     icon: Shield,
//     description:
//       'Keterbukaan dalam setiap proses dan pengambilan keputusan gerakan'
//   },
//   {
//     title: 'Persatuan',
//     icon: Users,
//     description:
//       'Mengedepankan persatuan di atas perbedaan untuk kepentingan bangsa'
//   }
// ]

export const metadata: Metadata = {
  title: 'Tentang 17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
  description:
    '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
  keywords: [
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
    title: 'Tentang 17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    url: 'https://tuntutan-rakyat.vercel.app/tentang',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang 17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.'
  },
  alternates: {
    canonical: 'https://tuntutan-rakyat.vercel.app/tentang'
  }
}

const TentangPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang 17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    mainEntity: {
      '@type': 'Organization',
      name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
      description:
        '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
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
      name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.'
    },
    publisher: {
      '@type': 'Organization',
      name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tuntutan-rakyat.vercel.app/android-chrome-512x512.png'
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
      <div className="bg-gray-900">
        {/* Hero Section */}
        <div className="py-20">
          <div className="mx-auto max-w-2xl text-center px-6 lg:px-8 mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tentang <span className="text-white">Tuntutan</span>
            </h1>
            <p className="mt-6 text-lg leading-6 text-green-100">
              17+8 tuntutan ini adalah rangkuman atas berbagai tuntutan dan
              desakan yang beredar di media sosial dalam beberapa hari terakhir
            </p>
          </div>
          <p className="text-4xl md:text-6xl lg:text-8xl text-pink-200 font-semibold text-center">
            #ResetIndonesia
          </p>
        </div>

        {/* Sumber Tuntutan Section */}
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-gray-300">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-300">
                Sumber Tuntutan
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Dirangkum Dari Berbagai Suara
              </p>
            </div>
            <div className="mt-10 text-lg text-gray-300 space-y-6">
              <p>
                17+8 tuntutan ini adalah rangkuman
                <Link
                  href="#footnote-1"
                  id="footnote-ref-1"
                  className="text-pink-300 no-underline"
                >
                  <sup>*</sup>
                </Link>{' '}
                atas berbagai tuntutan dan desakan yang beredar di media sosial
                dalam beberapa hari terakhir, di antaranya:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Tuntutan 7 hari{' '}
                  <a
                    href="https://www.instagram.com/salsaer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @salsaer
                  </a>{' '}
                  <a
                    href="https://www.instagram.com/jeromepolin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @jeromepolin
                  </a>{' '}
                  <a
                    href="https://www.instagram.com/cherylmarella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @cherylmarella
                  </a>{' '}
                  hasil rembukan jutaan suara rakyat di kolom komentar &
                  Instagram Story.
                </li>
                <li>
                  Desakan 211 organisasi masyarakat sipil yang dipublikasi
                  melalui website YLBHI
                </li>
                <li>
                  Siaran Pers Pusat Studi Hukum dan Kebijakan Indonesia (PSHK)
                </li>
                <li>
                  Pernyataan Sikap Ikatan Mahasiswa Magister Kenotariatan Ul
                </li>
                <li>
                  Pernyataan Sikap Center for Environmental Law & Climate
                  Justice Universitas Indonesia
                </li>
                <li>Tuntutan Demo Buruh 28 Agustus 2025</li>
                <li>
                  12 Tuntutan Rakyat Menuju Reformasi Transparansi & Keadilan
                  oleh Reformasi Indonesia di Change.org yang sudah menerima
                  lebih dari 40.000 dukungan
                </li>
              </ul>
              <p id="footnote-1" className="text-base text-gray-400 italic">
                <sup>*</sup>Rangkuman ini berupaya menangkap esensi dari
                berbagai sumber referensi di atas dan mungkin tidak
                mengikutsertakan seluruh detil secara utuh. Rangkuman ini juga
                tidak bermaksud mengesampingkan tuntutan-tuntutan lain yang
                mungkin juga beredar di waktu yang sama.
              </p>
            </div>
          </div>
        </div>

        {/* Visi Misi Section */}
        {/* <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Visi & Misi
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                Fondasi Gerakan
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Visi dan misi yang menjadi panduan dalam setiap langkah
                perjuangan untuk Indonesia yang lebih baik
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {visiMisi.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-200">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {item.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-200">
                      <p className="flex-auto">{item.content}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div> */}
        {/* Nilai-Nilai Section */}
        {/* <div className="bg-pink-200 py-24 sm:py-32">
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
        </div> */}
      </div>
    </>
  )
}

export default TentangPage
