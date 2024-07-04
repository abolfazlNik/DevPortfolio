import projects from "@/data/projects.json"
import { ListDetails, ProjectHeader, ProjectImages } from "./components"

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
    return <>NOT FOUND</>
  }
  return (
    <div className="bg-custom-white text-custom-black h-full">
      <div className="flex-col flex items-start sm:space-y-20 custom-container space-y-10 sm:my-20 my-10">
        <ProjectHeader
          title={project?.title}
          workEnvironment={project?.work_environment}
        />
        <div className="sm:text-3xl text-2xl space-y-4 font-thin">
          <p className="leading-10">{project?.project_details?.platform}</p>
          <p className="leading-10">{project?.project_details?.role}</p>
        </div>
        <ProjectImages images={project.images} index={0} />
        <p className="leading-10 sm:text-2xl text-xl font-thin">
          {project?.project_details?.challenges}
        </p>
        {project.images.length >= 2 && (
          <ProjectImages images={project.images} index={1} />
        )}
        <ListDetails content={project.project_details.goals} />
        {project.images.length >= 3 && (
          <ProjectImages images={project.images} index={2} />
        )}
        <ListDetails content={project.project_details.result} />
      </div>
    </div>
  )
}

export default Project
