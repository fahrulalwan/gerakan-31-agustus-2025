'use client'

import {
  FileText,
  Phone,
  Megaphone,
  Scale,
  List,
  BadgeInfo,
  BookUser
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

import { cn } from '@/lib/utils'

const BOTTOM_MENU_ITEMS = [
  {
    name: 'Tuntutan',
    href: '/tuntutan',
    icon: FileText
  },
  {
    name: 'Panduan Demo',
    href: '/panduan-demo',
    icon: Megaphone
  },
  {
    name: 'Kontak Darurat',
    href: '/kontak-darurat',
    icon: Phone
  },
  {
    name: 'Hak Hukum',
    href: '/hak-hukum',
    icon: Scale
  }
]

const OTHER_MENU_ITEMS = [
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

const BottomBar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const checkActive = (href: string) => {
    if (href.includes('category=')) {
      const category = href.split('category=')[1]
      const currentCategory = searchParams.get('category')
      return pathname === '/panduan-demo' && currentCategory === category
    }
    return pathname === href
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-pink-200 border-t border-gray-200 shadow-lg z-50 md:hidden rounded-t-2xl">
        <div className="grid grid-cols-5 gap-1 py-1">
          {BOTTOM_MENU_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = checkActive(item.href ?? '')

            return (
              <Link
                key={item.name}
                href={item.href ?? ''}
                className={cn(
                  'flex flex-col items-center py-2 min-w-0 transition-all duration-200',
                  isActive && !isMenuOpen
                    ? 'text-pink-800'
                    : 'text-[#037033] hover:text-gray-700'
                )}
              >
                <Icon className={cn('w-5 h-5 mb-1 transition-colors')} />
                <p
                  className={cn(
                    'text-[10px] font-normal text-center leading-tight peer'
                  )}
                >
                  {item.name}
                </p>
              </Link>
            )
          })}
          <div className="relative w-full " ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'flex flex-col items-center justify-center py-2 min-w-0 transition-all duration-200 text-[#037033] mx-auto cursor-pointer',
                isMenuOpen
                  ? 'text-pink-800'
                  : 'text-[#037033] hover:text-gray-700'
              )}
            >
              <List className={cn('w-5 h-5 mb-1 transition-colors')} />
              <span className="text-[10px] font-normal text-center leading-tight">
                Lainnya
              </span>
            </button>
            {isMenuOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-pink-100 border border-gray-200 shadow-lg z-50 rounded-lg min-w-[12rem] py-2">
                {OTHER_MENU_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-3 py-2 hover:bg-green-50 transition-colors text-[#037033]'
                      )}
                    >
                      <Icon className={cn('w-4 h-4')} />
                      <span className="text-sm font-medium ">{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomBar
