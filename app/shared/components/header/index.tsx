"use client"
import React from "react"
import Image from "next/image"
import { logo } from "@/public/images"
import { useModalState } from "@/app/store/modal"
import Link from "next/link"
const Header = () => {
  const { toggleModal } = useModalState()
  return (
    <header className="lg:h-24 h-20 bg-custom-black bg-opacity-80 backdrop-blur-3xl sticky top-0 w-full left-0 ring-0">
      <div className="custom-container flex justify-between items-center h-full">
        <Link href="/">
          <Image className="lg:w-[40px] w-[34px]" src={logo} alt="logo" />
        </Link>
        <div
          className="text-custom-white text-base lg:text-lg cursor-pointer"
          onClick={() => toggleModal(true)}
        >
          Contact
        </div>
      </div>
    </header>
  )
}

export default Header
