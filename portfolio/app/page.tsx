"use client"
import { useRef } from "react"
import Image from "next/image"
import { nikName } from "@/public/images"
import {
  BallButton,
  Header,
  DynamicScrollTrigger,
  Modal,
} from "./shared/components"
import {
  About,
  Experience,
  MarqueeScroll,
  ProjectsScrollSection,
  Skills,
} from "./components"
import SmoothScroll from "./shared/utils/smooth-scroll"
import TextAnimationSlideUp from "./shared/utils/text-animation-slide-up"
import Form from "./components/form"
import { Toaster } from "react-hot-toast"

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  SmoothScroll()
  TextAnimationSlideUp()
  
  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <div className="h-svh">
        <Header />
        <div className="lg:mx-[70px] mx-[22px] lg:h-[85%] h-full flex items-center justify-center">
          <Image
            className="w-full select-none lg:mb-0 h-full mb-40"
            src={nikName}
            alt="nik"
          />
        </div>
      </div>
      <Modal title="CONTACT ME">
        <Form />
      </Modal>

      <DynamicScrollTrigger
        elements={[
          <div
            key={"about"}
            ref={aboutRef}
            className="bg-custom-white select-none h-svh flex items-center justify-center"
          >
            <div className="custom-container">
              <span className="lg:text-[12vw] text-[20vw] font-semibold text-slide-up">
                ABOUT.
              </span>
            </div>
          </div>,
        ]}
      />
      <About />
      <DynamicScrollTrigger
        elements={[
          <div
            key={"projects"}
            ref={projectRef}
            className="bg-custom-white select-none h-svh flex items-center justify-center"
          >
            <div className="custom-container">
              <h2 className="lg:text-[12vw] text-[16vw] text-slide-up font-semibold">
                PROJECTS.
              </h2>
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
