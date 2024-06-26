import React from "react"

const SkillItems = ({ skillName }: { skillName: string }) => {
  return (
    <div className="bg-[linear-gradient(279.25deg,#454756_53.02%,#979BBC_95.43%)] p-[1px] rounded-3xl">
      <div className="w-auto text-4xl px-8 font-thin rounded-3xl h-[4.5rem] items-center flex justify-center bg-black">
        {skillName}
      </div>
    </div>
  )
}

export default SkillItems
