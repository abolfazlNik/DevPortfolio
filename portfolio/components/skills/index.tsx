import React from "react"
import SkillItems from "./components/skill-items"

const skillsData = [
  "HTML5",
  "SASS/SCSS",
  "Tailwind",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux",
  "Performance Optimization",
  "API Integration",
  "GraphQL",
  "GitHub",
  "Git",
  "Bitbucket",
  "Figma",
  "UI/UX",
]

const Skills = () => {
  return (
    <div className="h-screen bg-custom-black flex flex-col justify-center items-center">
      <h2 className="text-[8vw] text-white flex justify-center font-semibold">
        SKILLS
      </h2>
      <div className="p-8 flex flex-col space-y-8 items-center justify-center text-white">
        <div className="flex gap-8 items-center">
          {skillsData.slice(0, 3).map((item, index) => (
            <SkillItems key={index} skillName={item} />
          ))}
        </div>
        <div className="flex gap-12 items-center">
          {skillsData.slice(3, 8).map((item, index) => (
            <SkillItems key={index} skillName={item} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {skillsData.slice(8, 11).map((item, index) => (
            <SkillItems key={index} skillName={item} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {skillsData.slice(11, 14).map((item, index) => (
            <SkillItems key={index} skillName={item} />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {skillsData.slice(-2).map((item, index) => (
            <SkillItems key={index} skillName={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
