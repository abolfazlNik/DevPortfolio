import React from "react"

const ProjectHeader = ({
  title,
  workEnvironment,
}: {
  title: string
  workEnvironment: string
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="sm:text-[8vw] text-3xl font-semibold">{title}</h1>
      <span className="sm:text-2xl text-xl font-light">{workEnvironment}</span>
    </div>
  )
}

export default ProjectHeader
