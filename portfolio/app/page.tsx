"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Linear, gsap } from "gsap"
import nik from "@/public/nik-name.svg"

import Header from "@/components/Header"
import DynamicScrollTriggerComponent from "@/components/DynamicScrollTriggerComponent"
import ProjectsScrollSection from "@/components/ProjectsScrollSection"
import About from "@/components/About"
import MarqueeScroll from "@/components/MarqueeScroll"

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

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
      <MarqueeScroll />
    </>
  )
}
