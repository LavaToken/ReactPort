import { useEffect } from 'react'

/**
 * Drives subtle background parallax for ghost elements (`.ghost-number`).
 * A single rAF-throttled scroll/resize listener updates every matching
 * element by translating it opposite to its distance from viewport center,
 * so the numbers appear to drift slower than the foreground content.
 *
 * Each element reads its own `data-speed` (0 = moves with page, 1 = fixed).
 * Skips entirely under `prefers-reduced-motion` or on small screens.
 */
export function useParallax(selector = '.ghost-number') {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const smallScreen = window.matchMedia('(max-width: 720px)')
    if (reduceMotion.matches || smallScreen.matches) return undefined

    const elements = Array.from(document.querySelectorAll(selector))
    if (!elements.length) return undefined

    let ticking = false

    const update = () => {
      ticking = false
      const viewportCenter = window.innerHeight / 2
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.22
        // Subtract the transform we last applied so the measurement reflects
        // the element's natural position (avoids self-referential drift).
        const prev = parseFloat(el.dataset.ty) || 0
        const rect = el.getBoundingClientRect()
        const naturalTop = rect.top - prev
        const delta = naturalTop + rect.height / 2 - viewportCenter
        const ty = -delta * speed
        el.dataset.ty = String(ty)
        el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0)`
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [selector])
}
