import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  FileText,
  Megaphone
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Tuntutan Rakyat', href: '/tuntutan', icon: FileText },
    { name: 'Panduan Demonstrasi', href: '/demonstrasi', icon: Megaphone },
    { name: 'Panduan Demo', href: '/panduan-demo', icon: Users },
    { name: 'Informasi', href: '/informasi', icon: Calendar }
  ]

  const importantInfo = [
    { name: 'Tentang Gerakan', href: '/tentang' },
    { name: 'Kontak Darurat', href: '/demonstrasi' },
    { name: 'Hak Hukum', href: '/demonstrasi' },
    { name: 'Keamanan Demo', href: '/panduan-demo' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#037033' }}
              >
                <span className="text-white font-bold text-lg">31</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Gerakan 31 Agustus</h3>
                <p className="text-sm" style={{ color: '#037033' }}>
                  Indonesia Baru 2025
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Gerakan rakyat untuk perubahan menuju Indonesia yang lebih baik.
              Bersama kita wujudkan tuntutan rakyat untuk masa depan bangsa.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Target: 31 Agustus 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Aksi Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon
                        className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                        style={{ color: '#037033' }}
                      />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi Penting</h4>
            <ul className="space-y-3">
              {importantInfo.map((info) => (
                <li key={info.name}>
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

          {/* Contact & Emergency */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak Darurat</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" style={{ color: '#037033' }} />
                <span className="text-sm">Hotline: 021-XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" style={{ color: '#037033' }} />
                <span className="text-sm">info@gerakan31agustus.id</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin
                  className="w-4 h-4 mt-0.5"
                  style={{ color: '#037033' }}
                />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="mt-6 p-3 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
              <p className="text-yellow-200 text-xs">
                <strong>Keamanan Utama:</strong> Selalu ikuti protokol keamanan
                saat berdemonstrasi. Hubungi kontak darurat jika diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Gerakan 31 Agustus 2025.</span>
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>untuk Indonesia.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                href="/tentang"
                className="hover:text-white transition-colors duration-200"
              >
                Tentang
              </Link>
              <Link
                href="/informasi"
                className="hover:text-white transition-colors duration-200"
              >
                Informasi
              </Link>
              <span className="text-xs">Gerakan Rakyat untuk Perubahan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
