"use client"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { project } from "@/public/images"
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
      <div className="custom-container flex justify-between h-full">
        <div
          ref={numberRef}
          className="flex text-white text-[18vw] w-[25%] items-center h-screen justify-end sticky top-0"
        >
          01
        </div>
        <div className="w-[70%]">
          <div className="box h-screen flex items-center justify-center text-white sticky top-0">
            <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 rotate-0">
              <Image
                className="rounded-lg overflow-hidden w-full h-full object-cover"
                src={project}
                alt="project image"
              />
            </div>
          </div>
          <div className="box h-screen flex items-center justify-center text-white sticky top-0">
            <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 -rotate-3">
              <Image
                className="rounded-lg overflow-hidden w-full h-full object-cover"
                src={project}
                alt="project image"
              />
            </div>
          </div>
          <div className="box h-screen flex items-center justify-center text-white sticky top-0">
            <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 rotate-3">
              <Image
                className="rounded-lg overflow-hidden w-full h-full object-cover"
                src={project}
                alt="project image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsScrollSection