"use client"
import { useEffect } from "react"
import SmoothScroll from "../../utils/SmoothScroll"
import TextAnimationSlideUp from "../../utils/TextAnimationSlideup"

const GlobalInitializer = () => {
  useEffect(() => {
    SmoothScroll()
    TextAnimationSlideUp()
  }, [])

  return null
}

export default GlobalInitializer
