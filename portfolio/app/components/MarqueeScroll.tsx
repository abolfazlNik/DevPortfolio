import React from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { bolt, boltFill, dev, front } from "@/public/images"

const MarqueeScroll = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-16">
      <Marquee autoFill speed={200} direction="right">
        <div className="flex items-center">
          <Image className="mx-16" src={dev} alt="dev" />
          <Image className="mx-16" src={bolt} alt="dev" />
          <Image className="mx-16" src={front} alt="dev" />
          <Image className="mx-16" src={boltFill} alt="dev" />
        </div>
      </Marquee>
      <Marquee autoFill speed={200} direction="left">
        <div className="flex items-center">
          <Image className="mx-16" src={dev} alt="dev" />
          <Image className="mx-16" src={bolt} alt="dev" />
          <Image className="mx-16" src={front} alt="dev" />
          <Image className="mx-16" src={boltFill} alt="dev" />
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeScroll
