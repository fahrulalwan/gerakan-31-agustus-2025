import { FileText, Megaphone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const quickLinks = [
    { name: 'Tuntutan Rakyat', href: '/tuntutan', icon: FileText },
    { name: 'Panduan Demonstrasi', href: '/panduan-demo', icon: Megaphone }
  ]

  const importantInfo = [
    { name: 'Tentang Tuntutan', href: '/tentang' },
    { name: 'Kontak Darurat', href: '/kontak-darurat' },
    { name: 'Hak Hukum', href: '/panduan-demo?category=hak-hukum' }
  ]

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 hidden md:block">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div>
                <h3 className="font-bold text-xl">17+8 Tuntutan Rakyat</h3>
                <p className="text-sm text-green-600 font-medium">
                  Transparansi. Reformasi. Empati.
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Tuntutan rakyat untuk perubahan menuju Indonesia yang lebih baik.
              Bersama kita wujudkan tuntutan rakyat untuk masa depan bangsa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 md:text-right">
              Aksi Utama
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name} className="md:text-right">
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 md:justify-end"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 text-[#EB8FBD]" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 md:text-right">
              Informasi Penting
            </h4>
            <ul className="space-y-3">
              {importantInfo.map((info) => (
                <li key={info.name} className="md:text-right">
                  <Link
                    href={info.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {info.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
