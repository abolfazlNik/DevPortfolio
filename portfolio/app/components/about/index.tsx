"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import SplitType from "split-type"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DynamicScrollTrigger } from "@/app/shared/components"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
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
    <>
      <DynamicScrollTrigger
        elements={[
          <div
            key={"about"}
            ref={aboutRef}
            className="bg-custom-white select-none h-svh flex items-center justify-center"
          >
            <div className="custom-container">
              <span className="lg:text-[12vw] text-[20vw] font-semibold text-slide-up">
                ABOUT.
              </span>
            </div>
          </div>,
        ]}
      />

      <div className="h-svh bg-custom-black flex relative items-center justify-center">
        <p className="custom-container about-title text-center lg:text-[4vw] sm:text-[5vw] text-[7.5vw] text-custom-white">
          Creative Front-end Developer I have more than <br /> 5 years of
          experience using JavaScript and CSS <br /> to create responsive and
          adaptive websites.
          <br /> Having experience in ReactJS and NextJs.
        </p>
      </div>
    </>
  )
}

export default About
