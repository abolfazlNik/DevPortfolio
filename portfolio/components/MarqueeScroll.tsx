import React, { useEffect, useRef, useState } from "react"
import bolt from "@/public/bolt.svg"
import boltFill from "@/public/boltFill.svg"
import dev from "@/public/dev.svg"
import front from "@/public/front.svg"
import Image from "next/image"
import Marquee from "react-fast-marquee"

// const debounce = (func: any, wait) => {
//   let timeout
//   return function (...args: args[]) {
//     const context = this
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(context, args), wait)
//   }
// }
const MarqueeScroll = () => {
  // const lastScrollTop = useRef(0)
  // const [direction, setDirection] = useState<"left" | "right">("right")
  // const [directionSecond, setDirectionSecond] = useState<"left" | "right">(
  //   "left"
  // )

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  //     if (scrollTop > lastScrollTop.current) {
  //       if (direction !== "left") {
  //         setDirection("left")
  //         setDirectionSecond("right")
  //       }
  //     } else if (scrollTop < lastScrollTop.current) {
  //       if (direction !== "right") {
  //         setDirection("right")
  //         setDirectionSecond("left")
  //       }
  //     }
  //     lastScrollTop.current = scrollTop
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [direction, directionSecond])
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
