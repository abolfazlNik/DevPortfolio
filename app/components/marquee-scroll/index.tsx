import React, { FC } from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { ImageData } from "@/app/shared/types"
import marqueeData from "@/data/marqueeData.json"

const ImageItem: FC<ImageData> = ({ src, alt, width, height, icon }) => (
  <div className={`lg:mx-16 mx-8 ${!icon && "lg:w-[450px] w-[250px]"}`}>
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
    />
  </div>
)

const MarqueeImages = () => (
  <div className="flex items-center sm:h-20">
    {marqueeData.map((image, index) => (
      <ImageItem key={index} {...image} />
    ))}
  </div>
)

const MarqueeScroll = () => (
  <div className="h-svh flex items-center justify-center flex-col md:gap-16 gap-2">
    <Marquee autoFill speed={200} direction="right">
      <MarqueeImages />
    </Marquee>
    <Marquee autoFill speed={200} direction="left">
      <MarqueeImages />
    </Marquee>
  </div>
)
export default MarqueeScroll
