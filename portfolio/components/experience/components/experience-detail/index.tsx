import React, { FC, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface IDetails {
  date: string
  headline: string
  compony: string
  details: string
  colorCompony: string
}

const ExperienceDetails: FC<IDetails> = ({
  date,
  headline,
  details,
  compony,
  colorCompony,
}) => {
  // const textSize = (compony: string) => {
  //   const textLength = 3
  //   let name = ""
  //   let full = ""
  //   if (compony.length > textLength) {
  //     name = compony.slice(0, 4)
  //     full = compony.slice(4, -2)
  //   } else {
  //     name = compony.slice(0, 2)
  //     full = compony.slice(2, -2)
  //   }
  //   return name + full
  // }
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (lineRef.current) {
      const startX = 0
      const endX = window.innerWidth - 200
      gsap.fromTo(
        lineRef.current,
        { x: startX },
        {
          x: endX,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "linear",
        }
      )
    }
  }, [])

  return (
    <>
      <div className="grid grid-cols-[250px_1fr] items-baseline gap-36">
        <div className="text-2xl font-medium text-custom-gray-light">
          {date}
        </div>
        <div className="flex-col flex">
          <h3 className="mb-3 text-3xl text-custom-white">{headline}</h3>
          <h4
            style={{
              background: `linear-gradient(to right, ${colorCompony} , #9EA2A4 40px)`,
              backgroundClip: "text",
            }}
            className={`mt-3 mb-6 text-xl to-50% text-transparent w-fit`}
          >
            {compony}
          </h4>
          <div className="text-white text-xl leading-9 w-[85%] font-light">
            Development and implementation of an advanced store platform
            Designing new features and modifying the project structure for
            better performance to customers Improved user interface and display
            on all devices Responsible for fixing bugs and designing new
            features, improving SEO
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[#292342] relative">
        <div
          ref={lineRef}
          className="w-[60px] absolute h-[1px] bg-[#3e3466a8] z-[2] shadow-[0_0_8px_2px_#3e3466a8] top-0 left-0"
        />
      </div>
    </>
  )
}

export default ExperienceDetails
