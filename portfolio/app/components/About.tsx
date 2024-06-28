import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const About = () => {
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

  return (
    <div className="h-svh bg-custom-black flex relative items-center justify-center">
      <div
        ref={textRef}
        className="custom-container about-title lg:text-[3.5vw] sm:text-[5vw] text-[7.5vw]"
      >
        {words.map((word, index) => (
          <span className="pr-4" key={index}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export default About
