import React from "react"
import Image from "next/image"
import projects from "@/data/projects.json"
import Link from "next/link"

const ProjectSection = () => {
  return (
    <div className="lg:w-[70%] w-full">
      {projects.map(({ title, images }, index) => {
        let rotationClass = "rotate-0"
        if (index % 3 === 1) {
          rotationClass = "-rotate-3"
        } else if (index % 3 === 2) {
          rotationClass = "rotate-3"
        }
        const link = `/project/${title}`.replaceAll(" ", "-")
        return (
          <Link href={link} key={index}>
            <div className="box h-svh flex items-center w-full justify-center text-white sticky top-0">
              <div
                className={`bg-custom-gray-dark w-full backdrop-blur-xl rounded-2xl bg-opacity-30 lg:p-6 p-3 ${rotationClass}`}
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg overflow-hidden w-full h-full lg:min-h-full md:min-h-[250px] object-cover"
                  src={images[0]}
                  alt="project image"
                />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectSection
