import Image from "next/image"
import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ProjectsScrollSection = ({ sections }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const updateNumber = (number: number) => {
      gsap.to(".secondary-number", {
        text: number.toString().padStart(2, "0"),
        duration: 0.3,
      })
    }

    sections.forEach((section, index: number) => {
      ScrollTrigger.create({
        trigger: `#section-${index + 1}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateNumber(index + 1),
        onEnterBack: () => updateNumber(index + 1),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [sections])
  return (
    <div className="custom-container flex-col flex">
      {sections.map((section, index: number) => (
        <div
          key={index}
          id={`section-${index + 1}`}
          className="flex items-center h-screen justify-between sticky top-0 content"
        >
          <div className="text-[16rem] text-white w-80 secondary-number">
            {index === 0 ? "01" : ""}
          </div>
          <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 w-[calc(100%-23rem)] rotate-3">
            <Image
              className="rounded-lg overflow-hidden w-full h-full object-cover"
              src={section.image}
              alt={section.alt}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsScrollSection
