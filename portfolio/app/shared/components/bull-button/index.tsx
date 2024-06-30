"use client"
import React, { useEffect, useState } from "react"
import { gsap, Power4, Elastic } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

function BallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const activateMagneto = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const magneto = event.currentTarget as HTMLElement
    const magnetoText = magneto.querySelector(".text") as HTMLElement

    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 40
    const magnetoTextStrength = 80
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5

    gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: Power4.easeOut,
    })

    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: Power4.easeOut,
    })
  }

  const resetMagneto = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const magneto = event.currentTarget as HTMLElement
    const magnetoText = magneto.querySelector(".text") as HTMLElement

    gsap.to(magneto, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    })

    gsap.to(magnetoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    })
  }

  const scrollToTop = () => {
    gsap.to(window, { duration: 0.1, scrollTo: { y: 0 }, ease: Power4.easeOut })
  }

  return (
    <>
      {isVisible && (
        <div
          className="lg:w-[5rem] ball-button w-[4rem] lg:h-[5rem] h-[4rem] rounded-full z-20 bg-white mix-blend-difference backdrop-blur-xl text-black cursor-pointer flex justify-center items-center fixed bottom-10 right-5"
          onMouseMove={activateMagneto}
          onMouseLeave={resetMagneto}
          onClick={scrollToTop}
        >
          <span className="text lg:text-xl text-base">Top</span>
        </div>
      )}
    </>
  )
}

export default BallButton
