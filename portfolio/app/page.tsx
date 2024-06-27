"use client"
import { useRef } from "react"
import Image from "next/image"
import { nikName } from "@/public/images"
import { BallButton, Header } from "./shared/components"
import {
  About,
  DynamicScrollTriggerComponent,
  Experience,
  MarqueeScroll,
  ProjectsScrollSection,
  Skills,
} from "./components"

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  return (
    <>
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
    </>
  )
}
