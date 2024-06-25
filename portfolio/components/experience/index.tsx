import React, { useEffect, useRef } from "react"
import ExperienceDetails from "./components/experience-detail"

const experienceData = [
  {
    id: 1,
    date: "Jan 2022 - May 2022",
    headline: "Front-End Developer",
    company: "Foodbell",
    details:
      "Development and implementation of an advanced store platform. Designing new features and modifying the project structure for better performance to customers. Improved user interface and display on all devices. Responsible for fixing bugs and designing new features, improving SEO.",
    colorCompony: "#F46A16",
  },
  {
    id: 2,
    date: "Jan 2022 - May 2022",
    headline: "Front-End Developer",
    company: "Zown",
    details:
      "Development and implementation of an advanced store platform. Designing new features and modifying the project structure for better performance to customers. Improved user interface and display on all devices. Responsible for fixing bugs and designing new features, improving SEO.",
    colorCompony: "#FECE05",
  },
  {
    id: 3,
    date: "Jan 2022 - May 2022",
    headline: "Front-End Developer",
    company: "Digi Dentall",
    details:
      "Development and implementation of an advanced store platform. Designing new features and modifying the project structure for better performance to customers. Improved user interface and display on all devices. Responsible for fixing bugs and designing new features, improving SEO.",
    colorCompony: "#005BEA",
  },
  {
    id: 4,
    date: "Jan 2022 - May 2022",
    headline: "Front-End Developer",
    company: "Vira Process",
    details:
      "Development and implementation of an advanced store platform. Designing new features and modifying the project structure for better performance to customers. Improved user interface and display on all devices. Responsible for fixing bugs and designing new features, improving SEO.",
    colorCompony: "#05AAFF",
  },
]

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
