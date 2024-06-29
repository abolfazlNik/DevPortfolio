import React from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { bolt, boltFill, dev, front } from "@/public/images"

const images = [
  { src: dev, alt: "dev", width: 250, height: 140 },
  { src: bolt, alt: "bolt", width: 50, height: 50, icon: true },
  { src: front, alt: "front", width: 250, height: 140 },
  { src: boltFill, alt: "boltFill", width: 50, height: 50, icon: true },
]

const MarqueeScroll = () => {
  const renderImages = () => (
    <div className="flex items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`lg:mx-16 mx-8 ${!image.icon && "lg:w-[450px] w-[250px]"}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className="h-svh flex items-center justify-center flex-col gap-16">
      <Marquee autoFill speed={200} direction="right">
        {renderImages()}
      </Marquee>
      <Marquee autoFill speed={200} direction="left">
        {renderImages()}
      </Marquee>
    </div>
  )
}

export default MarqueeScroll
