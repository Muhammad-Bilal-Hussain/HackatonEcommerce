"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import herosofa from "../../../public/herosofa.png"
import sofa1 from "../../../public/sofa1.jpg"
import table from "../../../public/table.png"
import card1sofa from "../../../public/card1sofa.jpg"
import card2sofa from "../../../public/card2sofa.jpg"
import card3sofa from "../../../public/card3sofa.jpg"
import card4sofa from "../../../public/card4sofa.jpg"
import cardsofa1 from "../../../public/cardsofa1.jpg"
import cardsofa2 from "../../../public/cardsofa2.jpg"
import cardsofa3 from "../../../public/cardsofa3.jpg"
import newarrival from "../../../public/new arival sofa.jpg"
import watchicon from "../../../public/watchicon.jpg"
import calndericon from "../../../public/calendericon.jpg"
import bgpic from "../../../public/intagrambg pic.jpg"
import Footer from "../components/Footer"
import Link from 'next/link'



const Hero=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
{/* Hero Div */}
<div className="max-w-full bg-[#f6e6b8]">
  <div className="max-w-[1440px] flex flex-col items-center mx-auto px-4 md:px-10">
{/* Navbar */}
<nav className="w-full bg-[#f6e6b8] px-4 py-4">
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
          <a href="#" className="text-lg font-semibold hover:text-black">
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

    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-between md:mt-[100px] max-sm:mt-[228px] w-full px-4 space-y-6 md:space-y-0">
      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Rocket Single <br /> Seater
        </h1>
        <a
          href="#"
          className="inline-block text-xl md:text-2xl font-medium text-gray-800 underline hover:text-black"
        >
          Shop Now
        </a>
      </div>
      {/* Image */}
      <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
        <Image
          src={herosofa}
          alt="Rocket Single Seater"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
        />
      </div>
    </section>
  </div>
</div>
      {/* side table div  */}
      <div className='max-w-full bg-[#fbf3f3]'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
  {/* Two Item Section */}
  <section className="py-16 max-w-screen-xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Item 1 */}
      <div className="flex flex-col space-y-4">
        <Image
          src={table}
          alt="Side Table"
          className="w-full max-w-sm rounded-lg "
        />
        <h2 className="text-4xl font-semibold ">Side table</h2>
        <a
          href="#"
          className="text-2xl font-medium underline hover:text-black"
        >
          View More
        </a>
      </div>
      {/* Item 2 */}
      <div className="flex flex-col space-y-4">
      <Image
          src={sofa1}
          alt="Side Table"
          className="w-full max-w-sm rounded-lg "
        />
        <h2 className="text-4xl font-semibold ">Side table</h2>
        <a
          href="#"
          className="text-2xl font-medium underline hover:text-black"
        >
          View More
        </a>
      </div>
    </div>
  </section>

        </div>
      </div>
      {/* card div  */}
      <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <section className="">
        <div className="text-center mb-8">
        <h2 className="text-5xl font-semibold">Top Picks For You</h2>
        <p className="text-gray-400 text-lg mt-2">
      Find a bright idea to suit your taste with our great selection of
      suspension, floor, and table lights.
    </p>
  </div>
  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
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
  </div>
  {/* View More Button */}
  <div className="text-center mt-8">
    <a href="/shop" className="text-black underline text-lg font-medium">
      View More
    </a>
  </div>
</section>
        </div>
      </div>
      {/* new arrival  */}
      <div className="max-w-full bg-[#f9edd3]">
  <div className="max-w-7xl mx-auto py-10 px-5">
    {/* Main Flex Container */}
    <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image src={newarrival} alt="new arrival sofa" className="w-full max-w-md lg:max-w-full" />
      </div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-bold">New Arrivals</h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Asgaard Sofa</h1>
          <button className="bg-[#f9edd3] text-black border border-black text-center text-lg md:text-[25px] w-[150px] md:w-[200px] h-[40px] md:h-[50px] mt-6">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
      </div>
      {/* card div 2  */}
      <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <section className="">
        <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Our Blogs</h2>
        <p className="text-gray-500 mt-2 text-xl">
      Find a bright idea to suit your taste with our great selection.
    </p>
  </div>
  {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
    {/* Product Card 1 */}
    <div className="space-x-5">
      <Image
        src={cardsofa1}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-lg px-10 mr-10">Going all-in with millenial design</h3>
      <div className='underline text-center mt-2'>
        <a href="" className='text-2xl font-semibold'>Read More</a>
      </div>
      <div className='flex justify-center items-center mt-5'>
              <Image src={watchicon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">5 min</p>
              <Image src={calndericon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">12 <sup>th</sup> oct 2022</p>
      </div>
    </div>
    {/* Product Card 2 */}
    <div className="text-center">
    <Image
        src={cardsofa2}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-lg mb-2">
      Going all-in with millenial design
      </h3>
      <a href="" className='text-2xl font-semibold underline mt-10'>Read More</a>
      <div className='flex justify-center items-center mt-5'>
              <Image src={watchicon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">5 min</p>
              <Image src={calndericon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">12 <sup>th</sup> oct 2022</p>
      </div>
    </div>
    {/* Product Card 3 */}
    <div className="text-center">
    <Image
        src={cardsofa3}
        alt="Product 1"
        className="mx-auto mb-4"
      />
      <h3 className="text-lg mb-2">
      Going all-in with millenial design
      </h3>
      <a href="" className='text-2xl font-semibold underline mt-10'>Read More</a>
      <div className='flex justify-center items-center mt-5'>
              <Image src={watchicon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">5 min</p>
              <Image src={calndericon} alt='stopwatch' className='w-[30px]'></Image>
              <p className="text-gray-700 px-2">12 <sup>th</sup> oct 2022</p>
      </div>
    </div>
  </div>
  {/* View More Button */}
  <div className="text-center mt-8">
    <a href="#" className="text-black underline text-2xl font-medium">
      View More
    </a>
  </div>
</section>
        </div>
      </div>
      {/* intagram  */}
      <div className='max-w-full relative'>
        <Image src={bgpic} alt='bg pic instagram' className='w-full h-[700px] object-cover opacity-15'/>
        <div className='max-w-7xl mx-auto py-10 px-10'>
          <div className='flex justify-center items-center absolute inset-0'>
          <div className='text-center'>
            <h1 className='text-6xl font-black'>Our Instagram</h1>
            <p className='text-xl py-5'>Follow our store on Instangram</p>
            <button className='shadow-md bg-white text-black w-[200px] h-[50px] rounded-full text-2xl hover:bg-gray-100 hover:font-medium'>Follow Us</button>
          </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer/>
    </div>
  )
}

export default Hero