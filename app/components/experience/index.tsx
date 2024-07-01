"use client"
import React, { useEffect, useRef } from "react"
import ExperienceDetails from "./components/experience-detail"
import experienceData from "@/data/experience.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current

    if (section && text) {
      gsap.to(section, {
        backgroundColor: "#000",
        color: "#fff",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          onEnter: () => {
            gsap.to(text, {
              color: "#fff",
              mixBlendMode: "difference",
            })
          },
          onLeaveBack: () => {
            gsap.to(text, {
              color: "#000",
              mixBlendMode: "normal",
            })
          },
        },
      })
    }
  }, [])
  return (
    <>
      <div
        className="panel z-[5] w-full h-full min-h-screen bg-custom-white flex items-center justify-center"
        ref={sectionRef}
      >
        <h2
          className="z-10 md:text-[8vw] text-[10vw] text-black text-center text-slide-up"
          ref={textRef}
        >
          EXPERIENCE
        </h2>
      </div>
      <div className="flex flex-col w-full my-20 bg-custom-black text-white">
        <div className="lg:gap-28 gap-12 flex flex-col mt-20 h-full custom-container">
          {experienceData.map((item) => (
            <ExperienceDetails
              key={item.id}
              date={item.date}
              compony={item.company}
              headline={item.headline}
              colorCompony={item.colorCompony}
              details={item.details}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience
