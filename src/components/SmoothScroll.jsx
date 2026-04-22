import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

function lerp(current, target, factor) {
  return current + (target - current) * factor
}

function isTouchLikeDevice() {
  if (typeof window === 'undefined') return true
  return (
    window.matchMedia?.('(hover: none), (pointer: coarse)')?.matches ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  )
}

export default function SmoothScroll({ children, lerpFactor = 0.09 }) {
  const [disabled, setDisabled] = useState(true)
  const viewportRef = useRef(null)
  const contentRef = useRef(null)
  const spacerRef = useRef(null)

  const stateRef = useRef({
    currentY: 0,
    targetY: 0,
    maxY: 0,
    raf: null,
    ro: null,
  })

  useEffect(() => {
    setDisabled(isTouchLikeDevice())
  }, [])

  useEffect(() => {
    if (!disabled) return
    document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [disabled])

  useLayoutEffect(() => {
    if (disabled) return
    const viewportEl = viewportRef.current
    const contentEl = contentRef.current
    const spacerEl = spacerRef.current
    if (!viewportEl || !contentEl || !spacerEl) return

    document.body.style.overflow = 'hidden'

    const clampTarget = (y) => Math.max(0, Math.min(y, stateRef.current.maxY))
    let isSyncingScrollTop = false

    const updateHeights = () => {
      const contentHeight = contentEl.getBoundingClientRect().height
      spacerEl.style.height = `${contentHeight}px`
      const maxY = Math.max(0, contentHeight - window.innerHeight)
      stateRef.current.maxY = maxY
      stateRef.current.targetY = clampTarget(stateRef.current.targetY)
      stateRef.current.currentY = clampTarget(stateRef.current.currentY)
      isSyncingScrollTop = true
      viewportEl.scrollTop = stateRef.current.targetY
      isSyncingScrollTop = false
    }

    updateHeights()

    const ro = new ResizeObserver(() => updateHeights())
    ro.observe(contentEl)
    stateRef.current.ro = ro

    const onResize = () => updateHeights()
    window.addEventListener('resize', onResize)

    const onWheel = (e) => {
      // Only handle wheel/trackpad on our viewport
      e.preventDefault()
      const delta = e.deltaY
      const nextTarget = clampTarget(stateRef.current.targetY + delta)
      stateRef.current.targetY = nextTarget
      // Keep scrollbar in sync with the intended destination
      isSyncingScrollTop = true
      viewportEl.scrollTop = stateRef.current.targetY
      isSyncingScrollTop = false
    }

    viewportEl.addEventListener('wheel', onWheel, { passive: false })

    const onScroll = () => {
      if (isSyncingScrollTop) return
      const clamped = clampTarget(viewportEl.scrollTop)
      if (clamped !== viewportEl.scrollTop) {
        isSyncingScrollTop = true
        viewportEl.scrollTop = clamped
        isSyncingScrollTop = false
      }
      stateRef.current.targetY = clamped
    }

    viewportEl.addEventListener('scroll', onScroll, { passive: true })

    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash || hash.length < 2) return
      const id = decodeURIComponent(hash.slice(1))
      const el = document.getElementById(id)
      if (!el) return
      // Convert current visual position to "content space" target
      const rect = el.getBoundingClientRect()
      const y = stateRef.current.currentY + rect.top
      stateRef.current.targetY = clampTarget(y)
      isSyncingScrollTop = true
      viewportEl.scrollTop = stateRef.current.targetY
      isSyncingScrollTop = false
    }

    const onHashChange = () => scrollToHash()
    window.addEventListener('hashchange', onHashChange)

    const onDocClick = (e) => {
      const a = e.target?.closest?.('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      const id = decodeURIComponent(href.slice(1))
      const el = document.getElementById(id)
      if (!el) return

      e.preventDefault()
      history.pushState(null, '', href)

      const rect = el.getBoundingClientRect()
      const y = stateRef.current.currentY + rect.top
      stateRef.current.targetY = clampTarget(y)
      isSyncingScrollTop = true
      viewportEl.scrollTop = stateRef.current.targetY
      isSyncingScrollTop = false
    }

    document.addEventListener('click', onDocClick, true)

    const animate = () => {
      stateRef.current.targetY = clampTarget(stateRef.current.targetY)
      stateRef.current.currentY = clampTarget(stateRef.current.currentY)

      const { currentY, targetY } = stateRef.current
      const next = clampTarget(lerp(currentY, targetY, lerpFactor))
      stateRef.current.currentY = next
      contentEl.style.transform = `translate3d(0, ${-next}px, 0)`
      isSyncingScrollTop = true
      viewportEl.scrollTop = next
      isSyncingScrollTop = false

      // Stop tiny micro-jitter when we’re extremely close
      if (Math.abs(targetY - next) < 0.1) {
        const clamped = clampTarget(targetY)
        stateRef.current.currentY = clamped
        stateRef.current.targetY = clamped
        contentEl.style.transform = `translate3d(0, ${-clamped}px, 0)`
        isSyncingScrollTop = true
        viewportEl.scrollTop = clamped
        isSyncingScrollTop = false
      }

      stateRef.current.raf = requestAnimationFrame(animate)
    }

    stateRef.current.raf = requestAnimationFrame(animate)

    // Respect initial hash on load
    scrollToHash()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onDocClick, true)
      viewportEl.removeEventListener('wheel', onWheel)
      viewportEl.removeEventListener('scroll', onScroll)
      if (stateRef.current.raf) cancelAnimationFrame(stateRef.current.raf)
      if (stateRef.current.ro) stateRef.current.ro.disconnect()
      contentEl.style.transform = ''
    }
  }, [disabled, lerpFactor])

  if (disabled) {
    return children
  }

  return (
    <div ref={viewportRef} className="smooth-scroll-viewport">
      <div ref={spacerRef} className="smooth-scroll-spacer" />
      <div ref={contentRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  )
}

