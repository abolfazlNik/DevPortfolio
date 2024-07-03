import Image from "next/image"

const ProjectImages = ({
  images,
  index,
}: {
  images: string[]
  index: number
}) => {
  const image = images[index]

  return (
    <>
      <Image
        key={index}
        src={image}
        alt={`Project Image ${index + 1}`}
        sizes="100vw"
        className="w-full lg:h-[800px] h-auto object-contain"
        width={0}
        height={0}
      />
    </>
  )
}

export default ProjectImages
