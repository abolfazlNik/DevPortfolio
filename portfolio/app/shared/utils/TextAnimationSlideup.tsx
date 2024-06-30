import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import SplitType from "split-type"

const TextAnimationSlideUp = () => {
  const splitType = document.querySelectorAll(".text-slide-up")
  splitType.forEach((char) => {
    const text = new SplitType(char as HTMLElement, { types: "chars" })
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        scrub: false,
        markers: false,
        start: "top 70%",
        end: "top center",
        toggleActions: "play play reverse reverse",
      },
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 100,
      stagger: 0.05,
      ease: "back.inOut(1.7)",
    })
  })
}

export default TextAnimationSlideUp
