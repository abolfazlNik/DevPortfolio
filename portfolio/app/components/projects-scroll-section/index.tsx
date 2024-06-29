"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectSection from "./components/project-section"
gsap.registerPlugin(ScrollTrigger)
const ProjectsScrollSection = () => {
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const sections = document.querySelectorAll(".box")

      sections.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: false,
            onUpdate: (self) => {
              if (self.isActive) {
                if (numberRef.current) {
                  numberRef.current.textContent = `0${index + 1}.`
                }
              }
            },
          },
        })
      })
    }
  }, [])

  return (
    <div className="bg-custom-black relative h-[300vh]">
      <div className="custom-container flex justify-between h-full lg:flex-row flex-col">
        <div
          ref={numberRef}
          className="flex text-white lg:text-[18vw] text-[24vw] lg:w-[25%] w-full items-center h-svh justify-center lg:justify-end sticky mt-5 top-7"
        >
          01.
        </div>
        <ProjectSection />
      </div>
    </div>
  )
}

export default ProjectsScrollSection
