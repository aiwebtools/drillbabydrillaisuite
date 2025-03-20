
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
    const updateSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Call once on mount to ensure correct initial state
    updateSize()
    
    // Use more efficient ResizeObserver if available
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        // Use requestAnimationFrame to throttle updates
        window.requestAnimationFrame(updateSize)
      })
      
      observer.observe(document.documentElement)
      return () => observer.disconnect()
    } 
    else {
      // Fallback to matchMedia for better performance than resize event
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      
      // Set initial value
      setIsMobile(mql.matches)
      
      const onChange = () => setIsMobile(mql.matches)
      
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
      // Last resort fallback to resize event with throttling
      else {
        let resizeTimer: ReturnType<typeof setTimeout>
        const handleResize = () => {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(updateSize, 100)
        }
        
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return isMobile
}
