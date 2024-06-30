import projects from "@/data/projects.json"
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
  return <div className="text-white">project {project?.description}</div>
}

export default Project
