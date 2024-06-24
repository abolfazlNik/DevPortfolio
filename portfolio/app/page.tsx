"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Linear, gsap } from "gsap"
import nik from "@/public/nik-name.svg"
import Header from "@/components/Header"
import DynamicScrollTriggerComponent from "@/components/DynamicScrollTriggerComponent"
import ProjectsScrollSection from "@/components/ProjectsScrollSection"
import About from "@/components/About"
import { Observer } from "gsap/Observer"
import Marquee from "react-fast-marquee"

export default function Home() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("left")
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        console.log("Scrolling down")
        setDirection("left")
      } else {
        console.log("Scrolling up")
        setDirection("right")
      }
      setLastScrollTop(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  return (
    <>
      <div className="h-screen">
        <Header />
        <Image
          className="w-full max-h-[800px] select-none"
          src={nik}
          alt="nik"
        />
      </div>
      <DynamicScrollTriggerComponent
        elements={[
          <div
            key={"about"}
            ref={aboutRef}
            className="bg-custom-white select-none h-screen flex items-center"
          >
            <div className="custom-container">
              <h2 className="text-[10vw]">ABOUT.</h2>
            </div>
          </div>,
        ]}
      />
      <About />
      <DynamicScrollTriggerComponent
        elements={[
          <div
            key={"projects"}
            ref={projectRef}
            className="bg-custom-white select-none h-screen flex items-center"
          >
            <div className="custom-container">
              <h2 className="text-[10vw]">PROJECTS.</h2>
            </div>
          </div>,
        ]}
      />
      <ProjectsScrollSection />
      {/* <div className="bg-custom-black h-screen flex items-center">
        <div className="text-white text-9xl">asdf</div>
      </div> */}
      <Marquee autoFill speed={200} direction={direction}>
        <span className="text-white text-6xl">Scrolling Text 1</span>
        <span className="text-white text-6xl">Scrolling Text 2</span>
        <span className="text-white text-6xl">Scrolling Text 3</span>
      </Marquee>
      <Marquee autoFill speed={200} direction="left">
        <span className="text-white text-6xl">Scrolling Text 1</span>
        <span className="text-white text-6xl">Scrolling Text 2</span>
        <span className="text-white text-6xl">Scrolling Text 3</span>
      </Marquee>
    </>
  )
}
