
import * as React from "react"

const MOBILE_BREAKPOINT = 768 // Match with Tailwind's md breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => {
    // Initialize with current screen size if running in browser
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    // Default to false if SSR
    return false
  })

  React.useEffect(() => {
    // Use ResizeObserver instead of window resize for better performance
    if (!window.ResizeObserver) {
      // Fallback to matchMedia for browsers without ResizeObserver
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(mql.matches)
      }
      
      // Modern browsers
      if (mql.addEventListener) {
        mql.addEventListener("change", onChange)
        return () => mql.removeEventListener("change", onChange)
      } 
      // Legacy support
      else if (mql.addListener) {
        mql.addListener(onChange)
        return () => mql.removeListener(onChange)
      }
    } else {
      // Use more efficient ResizeObserver
      const updateSize = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }
      
      // Throttled resize handler
      let resizeTimer: ReturnType<typeof setTimeout>
      const handleResize = () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(updateSize, 100)
      }
      
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}
