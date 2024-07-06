"use client"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { usePathname } from "next/navigation"

gsap.registerPlugin(ScrollToPlugin)

const ScrollToTop = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    const handleRouteChange = () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: "cubic-bezier(.29, 1.01, 1, -0.68);",
      })
    }

    handleRouteChange()
  }, [pathname])

  return null
}

export default ScrollToTop
