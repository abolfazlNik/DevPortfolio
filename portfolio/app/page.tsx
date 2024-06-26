"use client"
import { useRef } from "react"
import Image from "next/image"
import DynamicScrollTriggerComponent from "@/app/components/DynamicScrollTriggerComponent"
import ProjectsScrollSection from "@/app/components/ProjectsScrollSection"
import About from "@/app/components/About"
import MarqueeScroll from "@/app/components/MarqueeScroll"
import Skills from "@/app/components/skills"
import Experience from "@/app/components/experience"
import { nikName } from "@/public/images"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./shared/components/header"
import BallButton from "./shared/components/bull-button"
import { Scrollbar } from "smooth-scrollbar-react"
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar"
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const scrollbar = useRef<BaseScrollbar | null>(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  return (
    <Scrollbar ref={scrollbar}>
      <div className="h-screen">
        <Header />
        <Image className="w-full h-[85%] select-none" src={nikName} alt="nik" />
      </div>
      <DynamicScrollTriggerComponent
        elements={[
          <div
            key={"about"}
            ref={aboutRef}
            className="bg-custom-white select-none h-screen flex items-center"
          >
            <div className="custom-container">
              <h2 className="text-[12vw] font-semibold">ABOUT.</h2>
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
              <h2 className="text-[12vw] font-semibold">PROJECTS.</h2>
            </div>
          </div>,
        ]}
      />
      <ProjectsScrollSection />
      <MarqueeScroll />
      <Skills />
      <Experience />

      <BallButton />
    </Scrollbar>
  )
}
