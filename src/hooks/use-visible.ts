import { RefObject, useEffect, useState } from 'react'

const useVisible = <T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    if (!ref.current) return
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      options || { root: null, threshold: 0 }
    )

    const element = ref.current
    observer.observe(element as Element)
    return () => observer.unobserve(element as Element)
  }, [ref, options])

  return isVisible
}

export default useVisible
