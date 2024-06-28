import React, { useEffect } from "react"
import { gsap } from "gsap"
import SplitType from "split-type"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useEffect(() => {
    const splitType = document.querySelector(".about-title")
    const text = new SplitType(splitType as HTMLElement, { types: "chars" })
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: splitType,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    })
  }, [])

  return (
    <div className="h-svh bg-custom-black flex relative items-center justify-center">
      <div className="custom-container about-title lg:text-[4vw] sm:text-[5vw] text-[7.5vw] text-custom-white">
        Creative Front-end Developer I have more than <br /> 5 years of
        experience using JavaScript and CSS <br /> to create responsive and
        adaptive websites.<br /> Having experience in ReactJS and NextJs.
      </div>
    </div>
  )
}

export default About
