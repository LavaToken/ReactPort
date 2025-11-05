import { useEffect, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return elementRef
}
