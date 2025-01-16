"use client"
import React, { useState } from 'react'
// import React from 'react'
import Image from "next/image";
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import filtericon from "../../../public/filtericon.jpg"
import card1sofa from "../../../public/card1sofa.jpg"
import card2sofa from "../../../public/card2sofa.jpg"
import card3sofa from "../../../public/card3sofa.jpg"
import card4sofa from "../../../public/card4sofa.jpg"
import cardsofa1 from "../../../public/cardsofa1.jpg"
import cardsofa2 from "../../../public/cardsofa2.jpg"
import cardsofa3 from "../../../public/cardsofa3.jpg"
import cateicon from "../../../public/cateicon.jpg"
import cateicon1 from "../../../public/cateicon1.jpg"
import sofa1 from "../../../public/sofa1.jpg"
import sofa2 from "../../../public/sofa2.png"
import sofa3 from "../../../public/sofa3.png"
import sofa4 from "../../../public/sofa4.jpg"
import sofa5 from "../../../public/sofa5.jpg"
import sofa6 from "../../../public/sofa6.jpg"
import sofa7 from "../../../public/sofa7.jpg"
import sofa8 from "../../../public/sofa8.jpg"
import sofa9 from "../../../public/sofa9.jpg"
import sofa10 from "../../../public/sofa10.jpg"
import sofa11 from "../../../public/sofa11.jpg"
import sofa12 from "../../../public/sofa12.jpg"
import sofa13 from "../../../public/sofa13.jpg"
import Link from 'next/link'

const Shop=()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Function to toggle the menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
      {/* navbar  */}
  <nav className="w-full bg-[#ffff] px-4 py-4">
  <div className="max-w-[1440px] mx-auto flex justify-between items-center px-10">
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
        } absolute md:static top-16 left-0 w-full md:w-auto md:flex md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left px-4 py-6 md:py-0`}
      >
        <li>
          <a href="/" className="text-lg font-semibold hover:text-black">
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

{/* Shop Hero Section */}
<div className="max-w-full relative">
  <Image
    src={shopbg}
    alt="bg pic instagram"
    className="w-full h-[400px] lg:h-[500px] object-cover opacity-25"
  />
  <div className="max-w-7xl mx-auto py-6 px-6 lg:px-10">
    <div className="flex justify-center items-center absolute inset-0">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <Image src={shopicon} alt="shop icon" className="w-16 lg:w-[100px]" />
        </div>
        <h1 className="text-3xl lg:text-6xl font-medium">Shop</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; Shop
        </p>
      </div>
    </div>
  </div>
</div>
{/* Sofe ki filter bar */}
<div className='max-w-full bg-[#fbf3f3]'>
  <div className='max-w-[120rem] mx-auto py-10 px-4 sm:px-8'>
    <div className='flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-14'>
      {/* Left side */}
      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
        <div className='flex items-center space-x-2'>
          <Image src={filtericon} alt='filter icon' className='w-8 h-8' />
          <p className='text-2xl sm:text-3xl font-medium'>Filter</p>
        </div>
        <div className='flex space-x-4'>
          <Image src={cateicon} alt='category icon' className='w-8 h-8' />
          <Image src={cateicon1} alt='category icon' className='w-8 h-8' />
        </div>
        <div className='border-l-[3px] border-black pl-4'>
          <p className='text-sm sm:text-lg font-normal'>
            Showing 1-16 of 32 results
          </p>
        </div>
      </div>
      {/* Right side */}
      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
        <p className='text-xl sm:text-2xl font-normal'>Show</p>
        <input
          type="text"
          className='text-center text-xl sm:text-3xl w-[80px] sm:w-[100px] h-[40px] sm:h-[50px]'
          placeholder='16'
        />
        <p className='text-xl sm:text-2xl font-normal'>Sort by</p>
        <input
          type="text"
          className='text-center text-xl sm:text-3xl w-[120px] sm:w-[180px] h-[40px] sm:h-[50px]'
          placeholder='Default'
        />
      </div>
    </div>
  </div>
</div>
      {/* shop cards all  */}
      <div className='max-w-full'>
      <div className='max-w-7xl mx-auto py-10'>
        <div className='flex justify-center items-center'>
    {/* Product Grid */}
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
    {/* Product Card 1 */}
    <div className="">
      <Image
        src={card1sofa}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Trenton modular sofa_3</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 2 */}
    <div className="">
    <Image
        src={card2sofa}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">
        Granite dining table with dining chair
      </h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 3 */}
    <div className="">
    <Image
        src={card3sofa}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">Outdoor bar table and stool</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2 ">Rs. 25,000.00</p>
    </div>
    {/* Product Card 4 */}
    <div className="">
    <Image
        src={card4sofa}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Plain console with teak mirror</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>

    {/* 2nd row  */}
    {/* Product Card 1 */}
    <div className="">
      <Image
        src={sofa1}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Trenton modular sofa_3</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 2 */}
    <div className="">
    <Image
        src={sofa2}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">
        Granite dining table with dining chair
      </h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 3 */}
    <div className="">
    <Image
        src={sofa3}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">Outdoor bar table and stool</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2 ">Rs. 25,000.00</p>
    </div>
    {/* Product Card 4 */}
    <div className="">
    <Image
        src={sofa4}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Plain console with teak mirror</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>

    {/* 3 row  */}
    {/* Product card 1 */}
    <div className="">
      <Image
        src={sofa5}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Trenton modular sofa_3</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 2 */}
    <div className="">
    <Image
        src={sofa6}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">
        Granite dining table with dining chair
      </h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 3 */}
    <div className="">
    <Image
        src={sofa7}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">Outdoor bar table and stool</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2 ">Rs. 25,000.00</p>
    </div>
    {/* Product Card 4 */}
    <div className="">
    <Image
        src={sofa8}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Plain console with teak mirror</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* 4th row */}
        {/* Product card 1 */}
    <div className="">
      <Image
        src={sofa9}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Trenton modular sofa_3</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 2 */}
    <div className="">
    <Image
        src={sofa10}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">
        Granite dining table with dining chair
      </h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    {/* Product Card 3 */}
    <div className="">
    <Image
        src={sofa11}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10">Outdoor bar table and stool</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2 ">Rs. 25,000.00</p>
    </div>
    {/* Product Card 4 */}
    <div className="">
    <Image
        src={sofa13}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-light px-10 ">Plain console with teak mirror</h3>
      <p className="text-gray-600 text-2xl font-bold px-10 mr-10 mt-2">Rs. 25,000.00</p>
    </div>
    </div>
        </div>
        <div className='flex justify-center items-center space-x-10 '>
        <p className='bg-[#fde6a7] rounded-xl w-[75px] h-[75px] justify-center items-center flex text-3xl'>1</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[70px] h-[70px] justify-center items-center flex text-3xl'>2</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[70px] h-[70px] justify-center items-center flex text-3xl'>3</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[150px] h-[70px] justify-center items-center flex text-3xl'>NEXT</p>
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

export default Shop