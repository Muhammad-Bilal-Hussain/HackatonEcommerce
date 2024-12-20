import React from 'react'
import Image from "next/image";
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function page() {
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

      {/* Blings details left side  */}
      <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-5 sm:px-8 md:px-10'>
            <div className='flex flex-col lg:flex-row justify-between items-start'>
            {/* Billing side  */}
            <div className='space-y-10 w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-10'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-5'>Blings Details</h1>
                <div className='space-x-0 sm:space-x-5 flex flex-col sm:flex-row'>
                    <div className='space-y-5 w-full sm:w-1/2'>
                        <label htmlFor="" className='text-lg font-medium block'>First Name</label>
                        <input type="text" name="" id="user or email" className='border border-gray-400 w-full h-[50px] md:h-[60px] rounded-xl' />
                    </div>
                    <div className='space-y-5 w-full sm:w-1/2'>
                        <label htmlFor="" className='text-lg font-medium block'>Last Name</label>
                        <input type="text" name="" id="user or email" className='border border-gray-400 w-full h-[50px] md:h-[60px] rounded-xl' />
                    </div>
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Company Name (Optional)</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Country / Region</label>
                    <div className="relative">
                        <select
                        id="country"
                        name="country"
                        className="block w-full md:w-[400px] h-[50px] md:h-[60px] px-4 py-3 text-gray-700 bg-white border border-gray-400 rounded-xl shadow-sm focus:outline-none focus:ring-2 appearance-none"
                        >
                            <option value="sri-lanka">Sri Lanka </option>
                            <option value="pakistan">Pakistan</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pr-4 pointer-events-none">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Street Address</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Town / City</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Province</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>ZIP Code</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Phone</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
                <div className='space-y-5'>
                    <label htmlFor="" className='block text-lg font-medium'>Email Address</label>
                    <input type="text" name="" id="password" className='border border-gray-400 w-full md:w-[400px] h-[50px] md:h-[60px] rounded-xl' />
                </div>
            </div>
{/* Register side */}
<div className='space-y-10 w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-10'>
  <div className='flex justify-center items-center'>
    <div className='space-x-0 sm:space-x-20 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full'>
      <div className='space-y-5'>
        <h1 className='text-lg font-medium'>Product</h1>
        <p className='text-lg'><span className='text-gray-400'>Asgaard sofa</span> x 1</p>
        <p className='text-lg'>Subtotal</p>
        <p className='text-lg'>Total</p>
      </div>
      <div className='text-left sm:text-right space-y-5 w-full sm:w-auto'>
        <p className='text-lg font-medium'>Subtotal</p>
        <p className='text-lg font-medium'>250,000.00</p>
        <p className='text-lg font-medium'>250,000.00</p>
        <p className='text-2xl font-medium text-yellow-600'>Rs.250,000.00</p>
      </div>
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