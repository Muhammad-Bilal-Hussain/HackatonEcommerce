import React from 'react'
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

function page() {
  return (
    <div>
{/* Navbar */}
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
  <div className="max-w-7xl mx-auto py-10 px-10">
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-5 lg:space-y-0 lg:space-x-5">
      
      {/* Product Detail Grid */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 order-1 lg:order-1">
        {/* Product Details */}
        {/* 1st Row */}
        <div className="col-start-1 col-end-1 row-start-1 bg-[#fbf3f3] px-10 flex items-center m-0">
          <div className="flex">
            <div className="flex items-center">
              <p className="text-xl font-medium ml-5">Product</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-2 row-start-1 bg-[#fbf3f3] px-10 flex items-center">
          <div className="flex">
            <div className="flex items-center">
              <p className="text-xl font-medium">Subtotal</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-3 row-start-1 bg-[#fbf3f3] px-10 flex">
          <div className="flex items-center">
            <p className="text-xl font-medium flex justify-center items-center">Qty</p>
          </div>
        </div>
        <div className="col-start-4 col-end-4 row-start-1 bg-[#fbf3f3] px-10 flex">
          <div className="flex items-center">
            <p className="text-black font-semibold text-xl">Total</p>
          </div>
        </div>
        
        {/* 2nd Row */}
        <div className="col-start-1 col-end-1 row-start-2 px-10 flex items-center">
          <div className="flex">
            <div className="flex items-center">
              <Image src={sofa4} alt="product image" className="w-[80px] h-auto"></Image>
              <p className="text-gray-400 ml-5">Asgaard sofa</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-2 row-start-2 px-10 flex items-center">
          <div className="flex">
            <div className="flex items-center">
              <p className="text-gray-400">Rs. 250,000.00</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-3 row-start-2 px-10 flex">
          <div className="flex items-center">
            <p className="text-gray-800 text-2xl border border-gray-400 rounded-lg w-[50px] h-[50px] flex justify-center items-center">1</p>
          </div>
        </div>
        <div className="col-start-4 col-end-4 row-start-2 px-10 flex">
          <div className="flex items-center">
            <p className="text-black font-normal text-xl">Rs. 250,000.00</p>
          </div>
        </div>
      </div>

      {/* Cart Total */}
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-1 sm:grid-cols-1 bg-[#fbf3f3] order-2 lg:order-2">
        <div className="px-20 col-start-1 col-end-1 row-span-4 flex justify-center h-[400px]">
          <div className="text-center py-10">
            <h1 className="text-4xl font-semibold font-sans">Cart Total</h1>
            <div className="flex items-center py-10 space-x-10">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm text-gray-400">Rs.250,000.00</p>
            </div>
            <div className="flex space-x-10 items-center">
              <p className="text-sm">Total</p>
              <p className="text-yellow-500">Rs. 250,000.00</p>
            </div>
            <button className="mt-10 bg-[#fbf3f3] font-normal text-black border-2 border-gray-400 rounded-xl text-center w-[150px] h-[45px]">Check Out</button>
          </div>
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

export default page