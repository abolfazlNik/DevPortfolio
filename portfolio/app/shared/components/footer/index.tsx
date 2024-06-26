import Image from "next/image"
import React, { FC } from "react"
import { exNik, arrow } from "@/public/images"
import Link from "next/link"
import media from "@/data/media.json"
import { ILinks } from "../../types"

const Links: FC<ILinks> = ({ link, name }) => (
  <Link href={link} className="flex items-center space-x-5">
    <div className="text-[1.5vw]">{name}</div>
    <Image src={arrow} alt="arrow icon" />
  </Link>
)

const Footer = () => {
  return (
    <div className="h-screen w-full bg-[#8276B9] flex items-center justify-between font-open-sans pl-[70px]">
      <div className="w-1/2 mb-10 pt-36 h-full flex justify-between flex-col">
        <div className="text-[6vw] font-bold text-custom-black">Contact</div>
        <div className="space-x-8 flex items-center">
          <span className="text-[1.5vw] text-custom-black font-light">
            Got a question
          </span>
          <span className="text-[1.8vw] font-semibold text-white cursor-pointer">
            Contact Us
          </span>
        </div>

        <div className="flex flex-col space-y-10">
          {media.map((item) => (
            <Links key={item.id} name={item.name} link={item.href} />
          ))}
        </div>
        <div className="text-custom-black text-1xl">© 2024 nik</div>
      </div>
      <Image
        src={exNik}
        alt="nikfarjam"
        className="h-full w-full max-w-[800px]"
      />
    </div>
  )
}

export default Footer
