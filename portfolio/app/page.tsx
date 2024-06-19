'use client'

import Image from 'next/image'
import { gsap } from 'gsap'
import nik from '@/public/nik-name.svg'
import Header from '@/components/Header'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectImage from '@/public/project-1.png'
import DynamicScrollTriggerComponent from '@/components/DynamicScrollTriggerComponent'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const aboutRef = useRef(null)
    const projectRef = useRef(null)
    // useEffect(() => {
    //     const elements = [aboutRef, projectRef]
    // }, [])

    const textRef = useRef(null)
    const text = `Creative Front-end Developer I have more than 5 years of experience using JavaScript and CSS to create responsive and adaptive websites. Having experience in ReactJS and NextJs.`
    const words = text.split(' ')

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-title span',
                scrub: true,
                start: 'top 80%',
                end: 'bottom 50%',
            },
        })
        gsap.utils.toArray('.about-title span').forEach((word) => {
            tl.to(word, {
                backgroundPosition: `0% 0px`,
            })
        })
    }, [])
    useEffect(() => {
        const contents = document.querySelectorAll('.content')

        contents.forEach((content, i) => {
            const number = content.querySelector('.secondary-number')

            // Define GSAP timeline for each content element
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: content,
                    start: 'top 0%',
                    pin: number,
                    pinSpacing: false,
                    markers: false, // Set to true for debugging markers
                    onUpdate: (self) => {
                        // Update text dynamically based on scroll position
                        const progress = self.progress.toFixed(2) // Limit to two decimal places
                        number.textContent =
                            progress >= 0.5 ? `0${i + 2}` : `0${i + 1}`
                    },
                    onEnterBack: () => {
                        // Actions when scrolling back into the element
                        const progress = tl.progress()
                        number.textContent =
                            progress >= 0.5 ? `0${i + 2}` : `0${i + 1}`
                    },
                },
            })

            // Animate the number initially
            tl.to(number, {
                duration: 0.2,
                ease: 'power1',
            })
        })
    }, [])

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
                        key={'about'}
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
                        key={'projects'}
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
                <div className="custom-container flex-col flex">
                    <div className="flex items-center h-screen justify-between sticky top-0 content">
                        <div className="text-[16rem] text-white w-80 secondary-number"></div>
                        <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 w-[calc(100%-23rem)] rotate-3">
                            <Image
                                className="rounded-lg overflow-hidden w-full h-full object-cover"
                                src={projectImage}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-center h-screen justify-between sticky top-0 content">
                        <div className="text-[16rem] text-white w-80 secondary-number"></div>
                        <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl bg-opacity-30 p-6 w-[calc(100%-23rem)] rotate-3">
                            <Image
                                className="rounded-lg overflow-hidden w-full h-full object-cover"
                                src={projectImage}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-center h-screen justify-between sticky top-0 content">
                        <div className="text-[16rem] text-white w-80 secondary-number"></div>
                        <div className="bg-custom-gray-dark backdrop-blur-xl rounded-2xl p-6 bg-opacity-30 w-[calc(100%-23rem)] -rotate-3">
                            <Image
                                className="rounded-lg overflow-hidden w-full h-full object-cover"
                                src={projectImage}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom-black h-screen">
                <div className="">asdf</div>
            </div>
        </>
    )
}
