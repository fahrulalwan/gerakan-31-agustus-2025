'use client'

import {
  Menu,
  X,
  // Home,
  FileText,
  HelpCircle,
  Megaphone
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const navigationItems = [
  // { name: 'Beranda', href: '/', icon: Home },
  { name: 'Tuntutan', href: '/tuntutan', icon: FileText },
  { name: 'Panduan Demo', href: '/panduan-demo', icon: Megaphone },
  // { name: 'Informasi', href: '/informasi', icon: Info },
  { name: 'Tentang', href: '/tentang', icon: HelpCircle }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0
        const lastY = lastScrollYRef.current

        // Always show when at the very top
        if (currentY <= 0) {
          setIsHidden(false)
        } else {
          const isScrollingDown = currentY > lastY
          // Don't hide if mobile menu is open
          setIsHidden(!isOpen && isScrollingDown)
        }

        lastScrollYRef.current = currentY
        tickingRef.current = false
      })
    }

    lastScrollYRef.current = window.scrollY || 0
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <nav
      className={cn(
        'bg-pink-200 shadow-lg border-b border-gray-900 sticky top-0 z-50 transition-transform duration-300 will-change-transform',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-green-800">
                17+8 Tuntutan Rakyat
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2',
                    isActive(item.href)
                      ? 'text-white shadow-md bg-[#037033]'
                      : 'text-[#037033] hover:bg-white/50 hover:shadow-md bg-transparent'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((state) => !state)}
              className="text-[#036033] hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-pink-200 border-t border-gray-900 shadow-lg absolute top-[65px] left-0 right-0">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3',
                    isActive(item.href)
                      ? 'text-white shadow-md bg-[#037033]'
                      : 'text-[#037033] hover:bg-white/50 hover:shadow-md bg-transparent'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
