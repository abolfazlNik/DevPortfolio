import { Header } from "@/app/shared/components"
import projects from "@/data/projects.json"
import Image from "next/image"

const Project = ({
  params: { title },
}: {
  params: {
    title: string
  }
}) => {
  const normalizedTitle = title.replaceAll("-", " ")
  const project = projects.find((p) => p.title == normalizedTitle)
  if (!project) {
    // redirect
  }
  return (
    <div>
      <Header />
      <div className="text-white flex-col flex items-center custom-container sm:space-y-20 space-y-10 sm:h-screen h-svh sm:my-20 my-10">
        <h1 className="sm:text-8xl text-6xl text-white">{project?.title}</h1>
        {/* <p className="leading-[2.5] text-2xl break-words text-white">
        {project?.description}
      </p> */}
        <Image
          src={project?.image || ""}
          alt={project?.title || ""}
          width={950}
          height={950}
        />
      </div>
    </div>
  )
}

export default Project
