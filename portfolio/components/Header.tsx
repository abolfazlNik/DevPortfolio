import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="h-24 bg-custom-black bg-opacity-80 backdrop-blur-3xl sticky top-0 w-full left-0 ring-0">
            <div className="custom-container flex justify-between items-center h-full">
                <Image src={logo} alt="logo" />
                <div className="text-custom-white text-lg">Contact</div>
            </div>
        </header>
    )
}

export default Header
