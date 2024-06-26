import React from "react"
import ExperienceDetails from "./components/experience-detail"
import experienceData from "@/data/experience.json"

const Experience = () => {
  return (
    <div className="h-full my-20 w-full bg-custom-black text-white relative">
      <div className="z-[5] experience-section w-full sticky top-0">
        <h2 className="z-10 text-[8vw] text-white text-center sticky pt-8">
          EXPERIENCE
        </h2>
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
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
