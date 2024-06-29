import React from "react"
import Image from "next/image"
import { project } from "@/public/images"

const images = [{ src: project }, { src: project }, { src: project }]

const ProjectSection = () => {
  return (
    <div className="lg:w-[70%] w-full">
      {images.map((image, index) => {
        let rotationClass = "rotate-0"
        if (index % 3 === 1) {
          rotationClass = "-rotate-3"
        } else if (index % 3 === 2) {
          rotationClass = "rotate-3"
        }
        return (
          <div
            key={index}
            className="box h-svh flex items-center justify-center text-white sticky top-0"
          >
            <div
              className={`bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 lg:p-6 p-3 ${rotationClass}`}
            >
              <Image
                className="rounded-lg overflow-hidden w-full h-full lg:min-h-full min-h-[250px] object-cover"
                src={image.src}
                alt="project image"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectSection
