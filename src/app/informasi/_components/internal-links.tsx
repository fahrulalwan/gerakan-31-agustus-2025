import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type TInternalLink = {
  title: string
  desc: string
  href: string
}
const links: TInternalLink[] = [
  {
    title: 'Tuntutan',
    href: '/tuntutan',
    desc: '17+8 Tuntutan Rakyat #ResetIndonesia'
  },
  {
    title: 'Panduan Demo',
    href: '/panduan-demo',
    desc: 'Demonstrasi Yang aman, Aspirasi yang terdengar'
  },
  {
    title: 'Hak Hukum',
    href: '/hak-hukum',
    desc: 'Kenali Hak Hukum Anda, Lindungi Diri dengan Pengetahuan'
  },
  {
    title: 'Kontak Darurat',
    href: '/kontak-darurat',
    desc: 'Kontak Darurat, Selalu Siaga untuk Anda'
  },
  {
    title: 'Layanan Psikologis',
    href: '/layanan-psikologis',
    desc: 'Pulihkan Diri, Jaga Kesehatan Mental'
  }
]

const InternalLinks = () => (
  <div className="bg-gray-900 py-16" id="aksi-serupa">
    <h2 className="lg:text-center mx-auto max-w-2xl px-6 lg:px-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Jelajahi lebih banyak
    </h2>
    <div className="mx-auto max-w-4xl px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-r-3xl rounded-bl-2xl bg-pink-50 overflow-hidden pb-9 relative"
        >
          <h3 className="p-4 pb-1 font-bold text-lg">{link.title}</h3>

          <p className="p-4 pt-0 text-green-800 text-base font-semibold">
            {link.desc}
          </p>
          <span className="absolute right-0 bottom-0 px-3 py-1 bg-green-800 text-white font-semibold text-sm border-t-8 border-l-8 border-gray-900 inline-flex items-center gap-1 rounded-tl-3xl">
            Baca lebih lanjut <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      ))}
    </div>
  </div>
)

export default InternalLinks
