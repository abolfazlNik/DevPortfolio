import React, { ReactNode, useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DynamicScrollTriggerComponent = ({
    elements,
}: {
    elements: ReactNode[]
}) => {
    const containerRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        containerRefs.current.forEach((ref) => {
            if (ref) {
                ScrollTrigger.create({
                    trigger: ref,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [elements])

    return (
        <div>
            {elements.map((element, index) => (
                <div
                    key={index}
                    ref={(el) => (containerRefs.current[index] = el)}
                >
                    {element}
                </div>
            ))}
        </div>
    )
}

export default DynamicScrollTriggerComponent
