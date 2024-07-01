import React from "react"

const SkillItems = ({ skillName }: { skillName: string }) => {
  return (
    <div className="bg-[linear-gradient(279.25deg,#454756_53.02%,#979BBC_95.43%)] p-[1px] lg:mx-4 mx-2 lg:rounded-3xl rounded-xl min-w-[115px]">
      <div className="w-auto lg:text-4xl whitespace-nowrap text-xl lg:px-8 px-4 font-thin lg:h-[4.5rem] h-[2.5rem] items-center flex justify-center lg:rounded-3xl rounded-xl bg-black">
        {skillName}
      </div>
    </div>
  )
}

export default SkillItems
