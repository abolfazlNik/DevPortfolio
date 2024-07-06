import Lenis, { LenisOptions } from "@studio-freight/lenis"

interface CustomLenisOptions extends LenisOptions {
  direction: "vertical" | "horizontal"
}

const SmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 1.5,
    infinite: false,
  } as CustomLenisOptions)

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export default SmoothScroll
