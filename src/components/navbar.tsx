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
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useCountdown } from '@/hooks/use-countdown'
import { cn } from '@/lib/utils'

const navigationItems = [
  // { name: 'Beranda', href: '/', icon: Home },
  { name: 'Tuntutan', href: '/tuntutan', icon: FileText },
  { name: 'Panduan Demo', href: '/panduan-demo', icon: Megaphone },
  // { name: 'Informasi', href: '/informasi', icon: Info },
  { name: 'Tentang', href: '/tentang', icon: HelpCircle }
]

const targetWeekDate = new Date('2025-09-06T00:00:00+07:00') // September 6, 2025 00:00 WIB
const targetYearDate = new Date('2026-08-31T00:00:00+07:00') // August 31, 2026 00:00 WIB

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isCountdownShow, setIsCountdownShow] = useState(false)
  const [isCountdownHide, setIsCountdownHide] = useState(true)

  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)
  const pathname = usePathname()
  const params = useSearchParams()
  const jangka = params.get('jangka') ?? '1-minggu'

  const isPageTuntutan = pathname.startsWith('/tuntutan')

  const targetDate = jangka === '1-minggu' ? targetWeekDate : targetYearDate
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

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

        const scrollY = window.scrollY || window.pageYOffset || 0
        const thresholdCountdownContent = (window.innerHeight || 0) + 320
        setIsCountdownShow(scrollY >= thresholdCountdownContent)

        setIsCountdownHide(currentY < thresholdCountdownContent * 0.2)

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
    <>
      <nav
        className={cn(
          'bg-pink-200 shadow-lg border-b border-gray-900 sticky top-0 z-50 transition-transform duration-300 will-change-transform hidden md:block',
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl text-green-800">17+8</span>
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

      {isPageTuntutan && !isCountdownHide && (
        <div
          className={cn(
            'bg-[#EB8FBD] sticky top-[200px] z-10 will-change-transform rounded-b-2xl border-pink-200 border-b border-l border-r transition-all duration-300 block md:hidden'
            // isHidden ? '-translate-y-[64px]' : 'translate-y-0'
          )}
          style={{
            top: isCountdownShow ? 0 : -200
          }}
        >
          <div className="flex items-center justify-center">
            <div className="text-sm text-gray-500 grid grid-cols-4">
              {[
                { label: 'Hari', value: days.toString().padStart(2, '0') },
                { label: 'Jam', value: hours.toString().padStart(2, '0') },
                {
                  label: 'Menit',
                  value: minutes.toString().padStart(2, '0')
                },
                {
                  label: 'Detik',
                  value: seconds.toString().padStart(2, '0')
                }
              ].map((item, index) => (
                <div key={index} className="rounded-xl p-1 text-center">
                  <div className="text-sm text-white font-mono">
                    {item.value}
                  </div>
                  <div className="font-medium text-[10px] text-white">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
