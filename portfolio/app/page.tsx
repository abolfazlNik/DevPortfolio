"use client"
import { useRef } from "react"
import Image from "next/image"
import nik from "@/public/nik-name.svg"

import Header from "@/components/Header"
import DynamicScrollTriggerComponent from "@/components/DynamicScrollTriggerComponent"
import ProjectsScrollSection from "@/components/ProjectsScrollSection"
import About from "@/components/About"
import MarqueeScroll from "@/components/MarqueeScroll"
import Skills from "@/components/skills"
import Experience from "@/components/experience"

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  return (
    <>
      <div className="h-screen">
        <Header />
        <Image className="w-full h-[85%] select-none" src={nik} alt="nik" />
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
      <div className="h-screen w-full bg-[#8276B9]"></div>
    </>
  )
}
