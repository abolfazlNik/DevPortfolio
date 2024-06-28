"use client"
import { useEffect, useRef, useState } from "react"
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
import SmoothScroll from "./shared/utils/smooth-scroll"
import TextAnimationSlideUp from "./shared/utils/text-animation-slide-up"
import useContact from "./shared/hooks/contact"

export default function Home() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  SmoothScroll()
  TextAnimationSlideUp()
  const contact = useContact()
  const [error, setError] = useState({})

  const submitContact = () => {
    contact.submitForm({ fullName, email, message })
  }

  return (
    <>
      {/* <div className="h-svh">
        <Header />
        <div className="lg:mx-[70px] mx-[22px] lg:h-[85%] h-full flex items-center justify-center">
          <Image
            className="w-full select-none lg:mb-0 h-full mb-40"
            src={nikName}
            alt="nik"
          />
        </div>
      </div> */}

      <div className="flex p-20 items-center justify-center space-y-3 flex-col border border-red-200">
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="full name"
          className="h-20 w-[200px] bg-white"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="h-20 w-[200px] bg-white"
          type="text"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
          className="h-20 w-[200px] bg-white"
          type="text"
        />
        <button
          onClick={submitContact}
          className="bg-white w-[200px] h-20 text-black"
        >
          {contact.isLoading ? <>loading</> : <>submit</>}
        </button>
      </div>
      {/* <DynamicScrollTriggerComponent
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
      <DynamicScrollTriggerComponent
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
      <BallButton /> */}
    </>
  )
}
