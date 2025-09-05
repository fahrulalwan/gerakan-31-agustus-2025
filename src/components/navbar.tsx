'use client'

import { List } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { MAIN_MENU_ITEMS, OTHER_MENU_ITEMS } from '@/constants/menu'
import { useCountdown } from '@/hooks/use-countdown'
import { cn } from '@/lib/utils'

const targetWeekDate = new Date('2025-09-06T00:00:00+07:00') // September 6, 2025 00:00 WIB
const targetYearDate = new Date('2026-08-31T00:00:00+07:00') // August 31, 2026 00:00 WIB

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isCountdownShow, setIsCountdownShow] = useState(false)
  const [isCountdownHide, setIsCountdownHide] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const params = useSearchParams()
  const jangka = params.get('jangka') ?? '1-minggu'

  const isPageTuntutan = pathname.startsWith('/tuntutan')

  const targetDate = jangka === '1-minggu' ? targetWeekDate : targetYearDate
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const checkActive = (href: string) => {
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
          setIsHidden(isScrollingDown)
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
  }, [])

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
              {MAIN_MENU_ITEMS.map((item) => {
                const Icon = item.icon
                const isActive = checkActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2',
                      isActive && !isMenuOpen
                        ? 'text-white shadow-md bg-[#037033]'
                        : 'text-[#037033] hover:bg-white/50 hover:shadow-md bg-transparent'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}

              {/* Lainnya Dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer',
                    isMenuOpen
                      ? 'text-white shadow-md bg-[#037033]'
                      : 'text-[#037033] hover:bg-white/50 hover:shadow-md bg-transparent'
                  )}
                >
                  <List className="w-4 h-4" />
                  <span>Lainnya</span>
                </button>

                {isMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg z-50 rounded-lg min-w-[12rem] py-2">
                    {OTHER_MENU_ITEMS.map((item) => {
                      const Icon = item.icon
                      const isActive = checkActive(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            'flex items-center gap-3 px-4 py-2 hover:bg-green-50 transition-colors text-[#037033]',
                            isActive && !isMenuOpen ? 'bg-green-50' : ''
                          )}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isPageTuntutan && !isCountdownHide && (
        <div
          className={cn(
            'bg-[#EB8FBD] sticky top-[200px] z-10 will-change-transform rounded-b-2xl border-pink-200 border-b border-l border-r transition-all duration-300 block md:hidden'
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
