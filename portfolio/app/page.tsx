"use client"

import Image from "next/image"
import { gsap } from "gsap"
import nik from "@/public/nik-name.svg"
import Header from "@/components/Header"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import projectImage from "../public/project-1.png"
import DynamicScrollTriggerComponent from "@/components/DynamicScrollTriggerComponent"
import ProjectsScrollSection from "@/components/ProjectsScrollSection"

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { image: "", alt: "Project Image 1" },
  { image: "", alt: "Project Image 2" },
  { image: "", alt: "Project Image 3" },
]

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const textRef = useRef(null)
  const text = `Creative Front-end Developer I have more than 5 years of experience using JavaScript and CSS to create responsive and adaptive websites. Having experience in ReactJS and NextJs.`
  const words = text.split(" ")

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-title span",
        scrub: true,
        start: "top 80%",
        end: "bottom 50%",
      },
    })
    gsap.utils.toArray(".about-title span").forEach((word) => {
      tl.to(word, {
        backgroundPosition: `0% 0px`,
      })
    })
  }, [])

  //   useEffect(() => {
  //     const contents = document.querySelectorAll(".content")

  //     contents.forEach((content, i) => {
  //       const number = content.querySelector(".secondary-number")

  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: content,
  //           start: "top 0%",
  //           pin: number,
  //           markers: true,
  //           onUpdate: (self) => {
  //             number.textContent = progress >= 0.5 ? `0${i + 2}` : `0${i + 1}`
  //           },
  //           onEnterBack: () => {
  //             const progress = tl.progress()
  //             number.textContent = progress >= 0.5 ? `0${i + 2}` : `0${i + 1}`
  //           },
  //         },
  //       })

  //       tl.to(number, {
  //         duration: 0.2,
  //         ease: "power1",
  //       })
  //     })
  //   }, [])

  return (
    <>
      <div className=" h-screen">
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
      <div className="h-screen bg-custom-black flex relative items-center justify-center">
        <div ref={textRef} className="custom-container about-title">
          {words.map((word, index) => (
            <span className="pr-4" key={index}>
              {word}
            </span>
          ))}
        </div>
      </div>
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
      <div className="bg-custom-black relative h-screen">
        <ProjectsScrollSection sections={sections} />
      </div>
      <div className="bg-custom-black h-screen">
        <div className="">asdf</div>
      </div>
    </>
  )
}
