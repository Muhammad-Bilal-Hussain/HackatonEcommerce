"use client"
import React, { useState } from 'react'
// import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import sofa4 from "../../../public/sofa4.jpg"
// import shopicon from "../../../public/shopicon.png"

const page=() =>{
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      // Function to toggle the menu
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <div>
{/* Navbar */}
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
        <h1 className="text-3xl lg:text-6xl font-medium">Cart</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; Cart
        </p>
      </div>
    </div>
  </div>
</div>

{/* Product Cart */}
<div className="max-w-full">
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
      
      {/* Product Detail Section */}
      <div className="flex-1 p-4 lg:p-4">
        {/* Header Row */}
        <div className="grid grid-cols-4 gap-4 bg-[#fbf3f3] py-2 px-2 border-b">
          <p className="text-sm font-medium text-center col-span-2 sm:text-lg">Product</p>
          <p className="text-sm font-medium text-center sm:text-lg">Qty</p>
          <p className="text-sm font-medium text-center sm:text-lg">Total</p>
        </div>

        {/* Product Row */}
        <div className="grid grid-cols-4 gap-4 items-center py-4 px-2">
          <div className="col-span-2 flex items-center space-x-4">
            <Image src={sofa4} alt="product image" className="w-[60px] h-auto" />
            <p className="text-sm text-gray-400 sm:text-base">Asgaard sofa</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-800 text-base border border-gray-400 rounded-lg w-[40px] h-[40px] flex justify-center items-center sm:text-lg">1</p>
          </div>
          <p className="text-sm text-black text-center sm:text-lg">Rs. 250,000.00</p>
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="w-full lg:w-[30%] h-[400px] bg-[#fbf3f3] p-4 lg:p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">Cart Total</h1>
          <div className="flex justify-around items-center py-4 border-b">
            <p className="text-sm sm:text-base">Subtotal</p>
            <p className="text-sm text-gray-400 sm:text-base">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-around items-center py-4">
            <p className="text-sm sm:text-base">Total</p>
            <p className="text-yellow-500 text-sm sm:text-base">Rs. 250,000.00</p>
          </div>
          <button className="mt-4 bg-[#fbf3f3] font-normal text-black border-2 border-gray-400 rounded-xl w-full sm:w-[150px] h-[45px]">
            Check Out
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