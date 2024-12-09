import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import card1sofa from "../../../public/card1sofa.jpg"
import card2sofa from "../../../public/card2sofa.jpg"
import card3sofa from "../../../public/card3sofa.jpg"
import card4sofa from "../../../public/card4sofa.jpg"
import cardsofa1 from "../../../public/cardsofa1.jpg"
import cardsofa2 from "../../../public/cardsofa2.jpg"
import cardsofa3 from "../../../public/cardsofa3.jpg"
import sofa4 from "../../../public/sofa4.jpg"
import sofa1 from "../../../public/sofa1.jpg"
import sofa2 from "../../../public/sofa2.png"
import sofa3 from "../../../public/sofa3.png"
import sofa5 from "../../../public/sofa5.jpg"
import sofa6 from "../../../public/sofa6.jpg"
import sofapear from "../../../public/sofapare.png"
import sofapear1 from "../../../public/sofapare1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

function page() {
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
      <Link href={"/"} className="hover:text-black text-lg font-bold">
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
      <Link href={"/contact"} className="hover:text-black text-lg font-bold">
      Contact</Link>
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
        {/* click asgaard sofa  */}
        <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
            <div className='flex items-center'>
            <span className='mr-5 text-[15px] text-gray-400'>Home &gt; Shop &gt;</span>
            <div className='border-l-2 border-gray-400'>
            <p className='ml-5'>Asgaard</p>
            </div>
            </div>
            <div className="flex justify-between items-center py-10 px-10">
        {/* Image Grid */}
            <div className='flex px-10'>
        <div>
                <Image src={sofa4} alt='sofa 4' className='w-[250px]'></Image>
                <Image src={sofa4} alt='sofa 4' className='w-[250px]'></Image>
                <Image src={sofa4} alt='sofa 4' className='w-[250px]'></Image>
                <Image src={sofa4} alt='sofa 4' className='w-[250px]'></Image>
            </div>
            <div>
            <Image src={sofa4} alt='sofa 4' className='w-[70rem]'></Image>
            </div>
            </div>
            {/* details product  */}
            <div className="col-span-1 space-y-6">
      <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
      <p className="text-2xl font-semibold text-gray-700">Rs. 250,000.00</p>
      <div className="flex items-center space-x-2">
        {/* <!-- Stars --> */}
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <div className='border-l-2 border-gray-400'>
        <p className="text-gray-500 ml-5">5 Customer Review</p>
        </div>
      </div>
      <p className="text-gray-600">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
      
      {/* <!-- Size Options --> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg bg-yellow-100 text-yellow-700">L</button>
          <button className="px-4 py-2 border rounded-lg">XL</button>
          <button className="px-4 py-2 border rounded-lg">XS</button>
        </div>
      </div>

      {/* <!-- Color Options --> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        <div className="flex space-x-3">
          <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></div>
        </div>
      </div>

      {/* <!-- Quantity and Add to Cart --> */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="px-3 py-2 text-gray-500">-</button>
          <span className="px-4 py-2">1</span>
          <button className="px-3 py-2 text-gray-500">+</button>
        </div>
        <button className="px-6 py-3 rounded-lg border border-gray-500">
          Add To Cart
        </button>
      </div>
      <div className='border-t-2 border-gray-400'>
        <div className='flex justify-between items-start mt-5 '>
            <div className='space-y-3'>
                <p className='text-gray-400'>SKU : SS001</p>
                <p className='text-gray-400'>Category : Sofas</p>
                <p className='text-gray-400'>Tags : Sofa, Chair, Home, Shop</p>
                <p className='text-gray-400 flex space-x-5 items-center'>Share : <FontAwesomeIcon icon={faFacebook} className='ml-2 text-black'/> <FontAwesomeIcon icon={faLinkedin} className='text-black'/>
                <FontAwesomeIcon icon={faTwitter} className='text-black'/></p>
            </div>
        </div>
      </div>
        </div>
        </div>
        <div className='border-t-2 border-gray-400'>
        <div className='flex mt-5'>
            <div className='space-y-5'>
                <div className='space-x-5 flex text-xl justify-center items-center'>
                <p className='text-gray-800'>Description </p>
                <p className='text-gray-400'>Additional Information </p>
                <p className='text-gray-400'>Reviews [5]</p>
                </div>
                {/* discription line  */}
                <div className='space-y-5'>
                <p className='text-gray-400 '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='text-gray-400 '>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
        {/* sofapear  */}
        <div className='max-w-full'>
            <div className='max-w-7xl mx-auto px-10 '>
            <div className='flex justify-center items-center'>
                <div className='flex space-x-5 mt-0 p-0'>
                <Image src={sofapear} alt='sofapear' className='w-[600px] bg-[#fbf3f3]'></Image>
                <Image src={sofapear1} alt='sofapear' className='w-[600px] bg-[#fbf3f3]'></Image>
                </div>
            </div>
         </div>
    </div>
          {/* card div  */}
          <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <section className="">
        <div className="text-center mb-8">
        <h2 className="text-5xl font-semibold mt-10">Top Picks For You</h2>
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