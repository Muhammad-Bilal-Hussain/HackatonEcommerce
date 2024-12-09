import React from 'react'
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
import Link from 'next/link';

function Shop() {
  return (
    <div>
        {/* navbar  */}
        <section id='Shop'>
        <div className='max-w-full bg-[#ffffff]'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
  <nav className="flex justify-between items-center px-8 py-4 ">
    {/* Left Menu */}
    {/* Navigation Links */}
    <ul className="flex space-x-24 text-gray-700">
      <li>
      <Link href={"#"} className="hover:text-black text-lg font-bold">
      Home</Link>
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
        <a href="/contact" className="hover:text-black text-lg font-bold">
          Contact
        </a>
      </li>
    </ul>
    {/* Icons */}
    <div className="flex space-x-10 text-gray-700">
      <span className="material-icons"><Image src={manicon} alt='icon' className='w-[50px] cursor-pointer'></Image></span>
      <span className="material-icons "><Image src={manicon1} alt='icon' className='w-[50px] cursor-pointer'></Image></span>
      <span className="material-icons"><Image src={manicon2} alt='icon' className='w-[50px] cursor-pointer'></Image></span>
      <span className="material-icons"><Image src={manicon3} alt='icon' className='w-[50px] cursor-pointer'></Image></span>
    </div>
  </nav>
    </div>
    </div>
        </section>
        {/* shop  hero div*/}
        <div className='max-w-full relative'>
        <Image src={shopbg} alt='bg pic instagram' className='w-full h-[700px] object-cover opacity-25'/>
        <div className='max-w-7xl mx-auto py-10 px-10'>
          <div className='flex justify-center items-center absolute inset-0'>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
            <Image src={shopicon} alt='shop icon' className='w-[100px]'></Image>
            </div>
            <h1 className='text-6xl font-medium'>Shop</h1>
            <p className='text-xl font-semibold py-5'><span className='font-bold'>Home</span> &gt; Shop </p>
          </div>
          </div>
        </div>
      </div>
      {/* sofe ki filter bar  */}
      <div className='max-w-full bg-[#fbf3f3]'>
        <div className='max-w-[120rem] mx-auto py-10 px-10'>
            <div className='flex justify-between items-center space-x-14'>
                {/* left side  */}
            <div className='flex space-x-10'>
                <Image src={filtericon} alt='filter icon'></Image>
                <p className='text-3xl font-medium'>Filter</p>
                <Image src={cateicon} alt='filter icon'></Image>
                <Image src={cateicon1} alt='filter icon' className=''></Image>
                <div className='border-l-[3px] border-black'>
                <p className='text-3xl ml-5 font-normal'>Showing 1-16 of 32 results</p>
                </div>

            </div>
            {/* right side  */}
            <div className='flex space-x-10 items-center'>
                <p className='text-3xl font-normal'>Show</p>
                <input type="text" className='text-center text-4xl w-[80px] h-[80px]' placeholder='16' />
                <p className='text-3xl font-normal'>Short by</p>
                <input type="text" className='text-center text-4xl w-[240px] h-[80px]' placeholder='Default' />
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

export default Shop