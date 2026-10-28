import { useEffect, useRef } from 'react'

/**
 * Attach IntersectionObserver to add .visible class (triggers CSS fade-in).
 * Purpose: guides eye to sections as they enter viewport (R-19, MOTION 1).
 * Returns the ref to attach to the root container.
 */
export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>('.fade-in')
    if (!targets.length) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
