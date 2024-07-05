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
      duration: 0.5,
      opacity: 0.2,
      stagger: 0.5,
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
        <p className="custom-container about-title text-center font-thin lg:text-[4vw] sm:text-[5vw] text-[7.5vw] text-custom-white inline-div">
          Hi I'm <strong>Abolf</strong>azl! a <strong>fro</strong>ntend
          developer and <strong>JavaS</strong>cript enthusiast with a bachelor's{" "}
          <strong>degre</strong>e and over <strong>4 yea</strong>rs of
          <strong>expe</strong>rience. I've <strong>succes</strong>sfully
          delivered <strong>hig</strong>h-quality user <strong>int</strong>
          erface <strong>soluti</strong>ons for <strong>star</strong>tups and{" "}
          <strong>enterp</strong>rise companies, <strong>gain</strong>ing
          valuable <strong>experie</strong>nce along the way.
        </p>
      </div>
    </>
  )
}

export default About
