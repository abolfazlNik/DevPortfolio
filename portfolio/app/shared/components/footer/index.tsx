import Image from "next/image"
import React, { FC } from "react"
import { arrow } from "@/public/images"
import Link from "next/link"
import media from "@/data/media.json"
import { ILinks } from "../../types"

const Links: FC<ILinks> = ({ link, name }) => (
  <Link href={link} className="flex items-center space-x-5">
    <div className="lg:text-[2vw] text-2xl">{name}</div>
    <Image src={arrow} alt="arrow icon" />
  </Link>
)

const Footer = () => {
  return (
    <footer className="relative bottom-0 h-dvh w-full bg-[#8276B9] flex items-center justify-between font-open-sans px-[30px] sm:px-[60px] lg:pl-[70px] before:bg-[url('./../public/images/extensive-nik.svg')] before:bg-no-repeat before:absolute before:top-0 before:right-0 before:content-[''] lg:before:mix-blend-normal before:mix-blend-difference before:w-full lg:before:w-[730px] xl:before:w-[850px] before:h-full before:bg-cover">
      <div className="lg:w-1/2 w-full mb-10 pt-20 lg:pt-36 h-full flex justify-between flex-col z-[2]">
        <div className="lg:text-[6vw] text-7xl font-bold text-custom-black">
          Contact
        </div>
        <div className="lg:space-x-8 lg:space-y-0 flex lg:items-center lg:flex-row flex-col space-y-5">
          <span className="lg:text-[2vw] text-xl text-custom-black font-normal lg:font-light">
            Got a question
          </span>
          <span className="lg:text-[2.5vw] text-3xl font-semibold text-white cursor-pointer">
            Contact Us
          </span>
        </div>

        <div className="flex flex-col space-y-10">
          {media.map((item) => (
            <Links key={item.id} name={item.name} link={item.href} />
          ))}
        </div>
        <div className="text-custom-black text-xl">© 2024 nik</div>
      </div>
    </footer>
  )
}

export default Footer
