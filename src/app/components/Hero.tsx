import React from 'react'
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
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import Link from 'next/link'

function Hero() {
  return (
    <div>
      {/* hero div  */}
      <div className='max-w-full bg-[#f6e6b8]'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <>
  <nav className="flex justify-between items-center px-8 py-4 ">
    {/* Left Menu */}
    <div>
      {/* <h1 className="text-xl font-bold text-gray-800">Brand</h1> */}
    </div>
    {/* Navigation Links */}
    <ul className="flex space-x-6 text-gray-700">
      <li>
        <a href="#" className="text-lg font-bold hover:text-black">
          Home
        </a>
      </li>
      <li>
        <Link href={"/shop"} className="hover:text-black text-lg font-bold">
          Shop</Link>
      </li>
      <li>
        <a href="#" className="hover:text-black text-lg font-bold">
          About
        </a>
      </li>
      <li>
        <a href="/contct" className="hover:text-black text-lg font-bold">
          Contact
        </a>
      </li>
    </ul>
    {/* Icons */}
    <div className="flex space-x-10 text-gray-700">
      <span className="material-icons"><Image src={manicon} alt='icon' className='w-[55px] cursor-pointer'></Image></span>
      <span className="material-icons "><Image src={manicon1} alt='icon' className='w-[55px] cursor-pointer'></Image></span>
      <span className="material-icons"><Image src={manicon2} alt='icon' className='w-[55px] cursor-pointer'></Image></span>
      <span className="material-icons"><Image src={manicon3} alt='icon' className='w-[55px] cursor-pointer'></Image></span>
    </div>
  </nav>
  {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-screen-xl mx-auto">
    {/* Text Content */}
    <div className="space-y-4">
      <h1 className="text-7xl font-bold text-gray-800 leading-tight">
        Rocket single <br /> seater
      </h1>
      <a
        href="#"
        className="inline-block text-2xl font-medium text-gray-800 underline hover:text-black">
        Shop Now
      </a>
    </div>
    {/* Image */}
    <div className="mt-10 md:mt-0">
      <Image
        src={herosofa}
        alt="Rocket single seater"
        className="w-full max-w-md rounded-lg"
      ></Image>
    </div>
  </section>
</>

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
    <a href="#" className="text-black underline text-lg font-medium">
      View More
    </a>
  </div>
</section>
        </div>
      </div>
      {/* new arrival  */}
      <div className='max-w-full bg-[#f9edd3]'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <div className='flex justify-between items-center'>
          <div>
            <Image src={newarrival} alt='new arrival sofa'></Image>
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
            <h2 className='text-2xl font-bold'>New Arrivals</h2>
            <h1 className='text-5xl font-bold '>Asgaard sofa</h1>
            <button className='bg-[#f9edd3] text-black border border-black text-center text-[25px] w-[200px] h-[50px] mt-10'>Order Now</button>
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
        <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      {/* 1st row  */}
      <div className="lg:w-[25%] md:w-1/2 w-full px-4 flex justify-center items-center space-x-5">
        <h2 className="font-medium text-gray-400 tracking-widest text-xl mb-3">
          400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
        </h2>
      </div>
      {/* 2 row  */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-10">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-2xl mb-3">
          Links
        </h2>
        <nav className="list-none mb-10 space-y-5">
          <li>
            <a className="text-black text-2xl">Home</a>
          </li>
          <li>
            <a className="text-black text-2xl">Shop</a>
          </li>
          <li>
            <a className="text-black text-2xl">About</a>
          </li>
          <li>
            <a className="text-black text-2xl">Contact</a>
          </li>
        </nav>
      </div>
      {/* 3 row  */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-2xl mb-3">
          Help
        </h2>
        <nav className="list-none mb-10 space-y-5">
          <li>
            <a className="text-black text-2xl">Payment Options</a>
          </li>
          <li>
            <a className="text-black text-2xl">Returns</a>
          </li>
          <li>
            <a className="text-black text-2xl">Privacy Policies</a>
          </li>
        </nav>
      </div>
      {/* 4 row  */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-2xl mb-3">
          NewsLetter
        </h2>
        <nav className="list-none mb-10 space-y-5">
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-[100px] sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-[200px] rounded border-b-2 border-black  text-base py-1 leading-8 focus:outline-none "
              placeholder='Enter Your Email Address'
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex border-b-2 border-black py-2 px-6 focus:outline-none rounded text-[25px]">
            Button
          </button>
        </div>
        </nav>
      </div>
    </div>
  </div>
  <div className="">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <span className="ml-3 text-xl">Tailblocks</span> */}
      </a>
      <p className="text-xl text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        2022 Meubel House. All rights reserved
      </p>
    </div>
  </div>
</footer>

        </div>
      </div>
    </div>
  )
}

export default Hero