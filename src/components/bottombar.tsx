'use client'

import { FileText, Phone, Megaphone, Scale } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'

const bottomBarItems = [
  {
    name: 'Tuntutan',
    href: '/tuntutan',
    icon: FileText
  },
  {
    name: 'Kontak Darurat',
    href: '/kontak-darurat',
    icon: Phone
  },
  {
    name: 'Panduan Demo',
    href: '/panduan-demo?category=persiapan',
    icon: Megaphone
  },
  {
    name: 'Hak Hukum',
    href: '/hak-hukum',
    icon: Scale
  }
]

const BottomBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isActive = (href: string) => {
    if (href.includes('category=')) {
      const category = href.split('category=')[1]
      const currentCategory = searchParams.get('category')
      return pathname === '/panduan-demo' && currentCategory === category
    }
    return pathname === href
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-200 border-t border-gray-200 shadow-lg z-50 md:hidden rounded-t-2xl">
      <div className="grid grid-cols-4 py-1">
        {bottomBarItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center py-2 px-3 min-w-0 transition-all duration-200',
                active ? 'text-pink-800' : 'text-[#037033] hover:text-gray-700'
              )}
            >
              <Icon className={cn('w-5 h-5 mb-1 transition-colors')} />
              <span
                className={cn(
                  'text-[10px] font-normal text-center leading-tight'
                )}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BottomBar
