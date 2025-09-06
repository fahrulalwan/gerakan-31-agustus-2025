import { User } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ButtonHero from '@/components/molecule/button-hero'
import { APP_URL } from '@/constants/app'
import { TENTANG, DECEASED_LIST } from '@/constants/tentang'

export const metadata: Metadata = {
  title: TENTANG.title,
  description: TENTANG.description,
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
    title: TENTANG.title,
    description: TENTANG.description,
    url: `${APP_URL}/tentang`,
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: TENTANG.title,
    description: TENTANG.description
  },
  alternates: {
    canonical: `${APP_URL}/tentang`
  }
}

const TentangPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: TENTANG.title,
    description: TENTANG.description,
    mainEntity: {
      '@type': 'Organization',
      name: TENTANG.title,
      description: TENTANG.description,
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
      name: TENTANG.title
    },
    publisher: {
      '@type': 'Organization',
      name: TENTANG.title,
      logo: {
        '@type': 'ImageObject',
        url: `${APP_URL}/android-chrome-512x512.png`
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
      <div className="bg-[#037033]">
        {/* Hero Section */}
        <div className="py-20 min-h-screen relative flex flex-col justify-center items-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Suara Rakyat
              <br />
              <span className="text-[#EB8FBD]">Untuk Indonesia Adil</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              {TENTANG.description}
            </p>
          </div>

          <ButtonHero label="Lihat Selengkapnya" className="bg-pink-200" />
        </div>

        {/* Sumber Tuntutan Section */}
        <div className="py-16 sm:py-16 bg-gray-900" id="content">
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

        {/* Memorial Section */}
        <div className="py-16 sm:py-24 bg-gray-800" id="memorial">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-[#EB8FBD]">
                In Memoriam
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Mereka yang Gugur dalam Perjuangan
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Mengenang saudara-saudara kita yang telah berpulang dalam
                demonstrasi 28 Agustus - 2 September 2025. Pengorbanan mereka
                tidak akan terlupakan dalam perjuangan menuju Indonesia yang
                lebih adil.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              role="region"
              aria-label="Daftar korban demonstrasi"
            >
              {DECEASED_LIST.map((korban, index) => (
                <article
                  key={index}
                  className="bg-gray-700 border border-gray-600 rounded-lg p-6 hover:bg-gray-650 transition-colors duration-200"
                  role="article"
                  aria-labelledby={`victim-${index}-name`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                        {korban.photo ? (
                          <Image
                            src={korban.photo}
                            alt={korban.name}
                            loading="lazy"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <User className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        id={`victim-${index}-name`}
                        className="text-lg font-semibold text-white mb-2"
                      >
                        {korban.name}
                        {korban.age && (
                          <span className="text-gray-300 font-normal ml-2">
                            ({korban.age} tahun)
                          </span>
                        )}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex text-gray-300">
                          <span className="font-medium text-[#EB8FBD] mr-2">
                            Profesi:
                          </span>
                          <span>{korban.occupation}</span>
                        </div>
                        <div className="flex text-gray-300">
                          <span className="font-medium text-[#EB8FBD] mr-2">
                            Tanggal:
                          </span>
                          <time
                            dateTime={korban.tanggal.toISOString().slice(0, 10)}
                          >
                            {new Intl.DateTimeFormat('id', {
                              dateStyle: 'long'
                            }).format(korban.tanggal)}
                          </time>
                        </div>
                        <div className="flex text-gray-300">
                          <span className="font-medium text-[#EB8FBD] mr-2">
                            Lokasi:
                          </span>
                          <span>{korban.location}</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-600">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="font-medium text-[#EB8FBD]">
                              Penyebab:{' '}
                            </span>
                            {korban.cause}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
                <em>
                  Informasi berdasarkan laporan media terpercaya per tanggal 2
                  September 2025. Kami menghormati keluarga yang berduka dan
                  berharap keadilan dapat ditegakkan untuk setiap kasus yang
                  terjadi.
                </em>
              </p>
              <div className="mt-6 flex justify-center space-x-4 text-xs text-gray-400">
                <span>Sumber:</span>
                <a
                  href="https://www.kompas.com/tren/read/2025/09/02/174500565/update-10-korban-tewas-dalam-demonstrasi-28-agustus-2-september-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB8FBD] hover:underline"
                >
                  Kompas.com
                </a>
                <span>•</span>
                <a
                  href="https://tirto.id/daftar-korban-tewas-saat-demo-25-agt-1-sept-2025-hgXb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB8FBD] hover:underline"
                >
                  Tirto.id
                </a>
              </div>
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
