import { useEffect, useRef } from 'react'

/**
 * Adds the `animate` class to the observed element (and any `.reveal`
 * descendants) when it scrolls into view. Pairs with the `.reveal` CSS
 * rule in `styles.css` to drive scroll-triggered reveals.
 */
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12,
      ...options,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const target = entry.target
        target.classList.add('animate')
        target.querySelectorAll('.reveal').forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`
          child.classList.add('animate')
        })
        observer.unobserve(target)
      })
    }, observerOptions)

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return elementRef
}
