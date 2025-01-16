"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import Link from 'next/link';

const page =()=> {
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
{/* Navbar */}
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
          <a href="\" className="text-lg font-semibold hover:text-black">
            Home
          </a>
        </li>
        <li>
          <Link
            href={"/shop"}
            className="hover:text-black text-lg font-semibold"
          >
            Shop
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-black text-lg font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-black text-lg font-semibold">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-4 md:space-x-10">
      <a href="/myaccount">
      <Image
        src={manicon}
        alt="icon"
        className="w-8 md:w-10 h-8 md:h-10 cursor-pointer"
      />
      </a>
      <Image
        src={manicon1}
        alt="icon"
        className="w-8 md:w-10 h-8 md:h-10 cursor-pointer"
      />
      <Image
        src={manicon2}
        alt="icon"
        className="w-8 md:w-10 h-8 md:h-10 cursor-pointer"
      />
      <a href="/cart">
      <Image
        src={manicon3}
        alt="icon"
        className="w-8 md:w-10 h-8 md:h-10 cursor-pointer"
      />
      </a>
    </div>
  </div>
</nav>
    </div>
  </div>
</section>
{/* Shop Hero Section */}
<div className="max-w-full relative">
  <Image
    src={shopbg}
    alt="bg pic instagram"
    className="w-full h-[400px] lg:h-[700px] object-cover opacity-25"
  />
  <div className="max-w-7xl mx-auto py-6 px-6 lg:px-10">
    <div className="flex justify-center items-center absolute inset-0">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <Image src={shopicon} alt="shop icon" className="w-16 lg:w-[100px]" />
        </div>
        <h1 className="text-3xl lg:text-6xl font-medium">My Account</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; My Account
        </p>
      </div>
    </div>
  </div>
</div>
{/* Login or Register */}
<div className="max-w-full">
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
      
      {/* Login side */}
      <div className="space-y-10 px-6 sm:px-10 py-10 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Login</h1>
        <div className="space-y-5">
          <label htmlFor="user-or-email" className="text-lg font-medium block">
            User or Email Address
          </label>
          <input
            type="text"
            id="user-or-email"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="password" className="block text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-x-5 flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            className="border border-gray-400 w-[20px] h-[20px] rounded-xl"
          />
          <label htmlFor="checkbox" className="text-sm sm:text-base">
            Remember me
          </label>
        </div>
        <div className="space-x-5 flex items-center">
          <button className="border border-gray-500 w-full sm:w-[180px] h-[45px] rounded-xl text-lg font-medium">
            Log In
          </button>
          <p className="text-sm sm:text-base font-medium">Lost Your Password?</p>
        </div>
      </div>

      {/* Register side */}
      <div className="space-y-10 px-6 sm:px-10 py-10 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Register</h1>
        <div className="space-y-5">
          <label htmlFor="email" className="block text-lg font-medium">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-y-5">
          <p className="text-gray-400 text-sm sm:text-base">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <b className="text-black font-medium"> privacy policy.</b>
          </p>
        </div>
        <div className="space-x-5 flex items-center">
          <button className="border border-gray-500 w-full sm:w-[180px] h-[45px] rounded-xl text-lg font-medium">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* free delivery line  */}
      <div className='max-w-full bg-[#fbf3f3] py-10 mt-10'> 
        <div className='max-w-[120rem] mx-auto py-10 px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* 1st card cols */}
          <div className='space-y-6'>
              <h1 className='text-5xl font-semibold'>Free Delivery</h1>
              <p className='text-3xl text-gray-400'>For all orders over $50, consectetur adipim scing elit</p>
              </div>
              {/* 2nd card cols  */}
              <div className='space-y-6'>
              <h1 className='text-5xl font-semibold'>90 Days Return</h1>
              <p className='text-3xl text-gray-400'>if good have problems, consectetur adipim scing elit</p>
              </div>
              {/* 3rd card cols  */}
              <div className='space-y-6'>
              <h1 className='text-5xl font-semibold'>Secure Payment</h1>
              <p className='text-3xl text-gray-400'>100% secure payment, consectetur adipim scing elit</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page