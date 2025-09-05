import {
  FileText,
  Phone,
  Megaphone,
  Scale,
  Armchair,
  BadgeInfo,
  BookUser
} from 'lucide-react'

export const MAIN_MENU_ITEMS = [
  { name: 'Tuntutan', href: '/tuntutan', icon: FileText },
  { name: 'Kontak Darurat', href: '/kontak-darurat', icon: Phone },
  { name: 'Panduan Demo', href: '/panduan-demo', icon: Megaphone },
  { name: 'Hak Hukum', href: '/hak-hukum', icon: Scale }
]

export const OTHER_MENU_ITEMS = [
  {
    name: 'Layanan Psikologis',
    href: '/layanan-psikologis',
    icon: Armchair
  },
  {
    name: 'Informasi',
    href: '/informasi',
    icon: BadgeInfo
  },
  {
    name: 'Tentang',
    href: '/tentang',
    icon: BookUser
  }
]
