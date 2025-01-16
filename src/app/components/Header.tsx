import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"

export default function Header() {
  return (
    <div>
                {/* navbar  */}
                <section>
  <div className="max-w-full bg-[#ffffff]">
    <div className="max-w-7xl mx-auto py-6 px-6 lg:px-10">
      <nav className="flex flex-wrap justify-between items-center px-4 py-3">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 lg:space-x-24 text-gray-700 text-sm lg:text-lg">
          <li>
            <Link href={"/"} className="hover:text-black font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className="hover:text-black font-bold">
              Shop
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-black font-bold">
              About
            </a>
          </li>
          <li>
            <Link href={"/contact"} className="hover:text-black font-bold">
              Contact
            </Link>
          </li>
        </ul>
        {/* Icons */}
        <div className="flex flex-wrap justify-center space-x-4 lg:space-x-10 text-gray-700 mt-4 lg:mt-0">
          <Image src={manicon} alt="icon" className="w-8 lg:w-[50px] cursor-pointer" />
          <Image src={manicon1} alt="icon" className="w-8 lg:w-[50px] cursor-pointer" />
          <Image src={manicon2} alt="icon" className="w-8 lg:w-[50px] cursor-pointer" />
          <Image src={manicon3} alt="icon" className="w-8 lg:w-[50px] cursor-pointer" />
        </div>
      </nav>
    </div>
  </div>
</section>
    </div>
  )
}
