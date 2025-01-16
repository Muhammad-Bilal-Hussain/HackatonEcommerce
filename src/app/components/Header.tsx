import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"

const Header=()=>{
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        // Function to toggle the menu
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };
  return (
    <div>
                {/* navbar  */}
              <section>
                <div className="max-w-full bg-[#ffffff]">
                  <div className="max-w-7xl mx-auto px-4 lg:px-10">
                    <nav className="w-full px-4 py-4">
                      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                        {/* Navigation Links */}
                        <div className="flex items-center">
                          <button
                            className="block md:hidden text-gray-700 text-2xl font-bold focus:outline-none"
                            onClick={toggleMenu}
                          >
                            ☰
                          </button>
                          <ul
                            className={`${
                              isMenuOpen ? "block" : "hidden"
                            } absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-[#f6e6b8] md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left px-4 py-6 md:py-0`}
                          >
                            <li>
                              <a href="\" className="text-base md:text-lg font-semibold hover:text-black">
                                Home
                              </a>
                            </li>
                            <li>
                              <Link href={"/shop"} className="hover:text-black text-base md:text-lg font-semibold">
                                Shop
                              </Link>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black text-base md:text-lg font-semibold">
                                About
                              </a>
                            </li>
                            <li>
                              <a href="/contact" className="hover:text-black text-base md:text-lg font-semibold">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Icons */}
                        <div className="flex items-center space-x-3 md:space-x-10">
                          <a href="/myaccount">
                            <Image
                              src={manicon}
                              alt="icon"
                              className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                            />
                          </a>
                          <Image
                            src={manicon1}
                            alt="icon"
                            className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                          />
                          <Image
                            src={manicon2}
                            alt="icon"
                            className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                          />
                          <a href="/cart">
                            <Image
                              src={manicon3}
                              alt="icon"
                              className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
                            />
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </section>
    </div>
  )
}
export default Header
