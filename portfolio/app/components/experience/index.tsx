import React, { useEffect, useRef } from "react"
import ExperienceDetails from "./components/experience-detail"
import experienceData from "@/data/experience.json"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  // const lastItem = experienceData.slice(-1)

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
    <div className="h-full my-20 w-full relative bg-custom-black text-white">
      {/* <div className="z-[5] experience-section w-full sticky top-0">
        <h2 className="z-10 text-[8vw] text-white text-center sticky pt-8">
          EXPERIENCE
        </h2>
      </div> */}
      <div className="h-full overflow-hidden ">
        <div
          className="panel z-[5] w-full h-screen bg-custom-white flex items-center justify-center"
          ref={sectionRef}
        >
          <h2
            className="z-10 text-[8vw] text-black text-center sticky top-0 pt-8"
            ref={textRef}
          >
            EXPERIENCE
          </h2>
        </div>
      </div>
      <div className="gap-28 flex flex-col mt-20 h-full custom-container">
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
  )
}

export default Experience
