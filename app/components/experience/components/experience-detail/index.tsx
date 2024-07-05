import React, { FC, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { IDetails } from "@/app/shared/types"
import experienceData from "@/data/experience.json"
import Link from "next/link"

const ExperienceDetails: FC<IDetails> = ({
  date,
  headline,
  details,
  compony,
  colorCompony,
  id,
  url,
}) => {
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (lineRef.current) {
      const startX = 0
      const endX = window.innerWidth - 100
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

  const lastItemId =
    experienceData.length > 0
      ? experienceData[experienceData.length - 1].id
      : null

  return (
    <>
      <div className="grid lg:grid-cols-[250px_1fr] grid-cols-1 items-baseline lg:gap-36 gap-10">
        <div className="text-2xl font-medium text-custom-gray-light">
          {date}
        </div>
        <div className="flex-col flex">
          <h3 className="mb-3 text-3xl text-custom-white">{headline}</h3>
          <Link href={`${url}`}>
            <h4
              style={{
                background: `linear-gradient(to right, ${colorCompony} , #9EA2A4 40px)`,
                backgroundClip: "text",
              }}
              className={`mt-3 mb-6 text-xl to-50% text-transparent w-fit`}
            >
              {compony}
            </h4>
          </Link>
          <div className="text-white text-xl leading-9 w-[85%] font-light">
            {details}
          </div>
        </div>
      </div>
      {lastItemId !== id && (
        <div className="w-full h-[0.5px] bg-[#292342] first-of-type:bg-red-600 relative">
          <div
            ref={lineRef}
            className="w-[60px] absolute h-[1px] bg-[#3e3466a8] z-[2] shadow-[0_0_8px_2px_#3e3466a8] top-0 left-0"
          />
        </div>
      )}
    </>
  )
}

export default ExperienceDetails
