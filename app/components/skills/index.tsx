import React, { FC } from "react"
import SkillItems from "./components/skill-items"
import skillsData from "@/data/skills.json"
import { IRenderSkills } from "@/app/shared/types"

const RenderSkills: FC<IRenderSkills> = ({ start, end, gap }) => (
  <div
    className={`flex gap-${gap} items-center flex-wrap justify-center gap-y-3`}
  >
    {skillsData.slice(start, end).map((item, index) => (
      <SkillItems key={index} skillName={item} />
    ))}
  </div>
)

const Skills = () => {
  return (
    <div className="md:h-screen h-full bg-custom-black flex flex-col justify-center items-center">
      <h2 className="text-[8vw] text-white flex justify-center font-semibold text-slide-up">
        SKILLS
      </h2>
      <div className="p-8 flex flex-col space-y-8 items-center justify-center text-white">
        <RenderSkills start={0} end={3} gap={8} />

        <RenderSkills start={3} end={8} gap={8} />

        <RenderSkills start={8} end={11} gap={4} />

        <RenderSkills start={11} end={14} gap={4} />

        <RenderSkills start={-2} gap={4} />
      </div>
    </div>
  )
}

export default Skills
