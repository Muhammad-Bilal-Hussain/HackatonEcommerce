import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import blog1 from "../../../public/blog1.jpeg"
import blog2 from "../../../public/blog2.jpeg"
import blog3 from "../../../public/blog3.jpeg"
import blog4 from "../../../public/blog4.jpeg"
import blog5 from "../../../public/blog5.jpeg"
import blog6 from "../../../public/blog6.jpeg"
import blog7 from "../../../public/blog7.jpeg"
import blog8 from "../../../public/blog8.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Header from '../components/Header';
import Footer from '../components/Footer';

function page() {
  return (
    <div>
        {/* navbar  */}
        <Header/>
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
        <h1 className="text-3xl lg:text-5xl font-medium">Blogs</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; Blogs
        </p>
      </div>
    </div>
  </div>
        </div>
        {/* blogs area  */}
        <div className='max-w-full'>
        <div className='max-w-7xl mx-auto py-10 px-10'>
        <div className="max-w-7xl mx-auto p-5">
  {/* Main Section */}
  <div className="lg:flex lg:space-x-8">
    {/* Blog Posts */}
    <div className="flex-1 space-y-10">
      {/* Blog Post 1 */}
      <div className="bg-white rounded-lg overflow-hidden">
        <Image
          src={blog1}
          alt="Blog Post Image"
          className="w-full h-auto object-cover"
        ></Image>
        <div className="p-6">
          <div className="flex space-x-4 text-sm text-gray-500 mb-3">
            <FontAwesomeIcon icon={faUser}/>
            <p>Admin</p>
            <FontAwesomeIcon icon={faCalendar}/>
            <p>14 Oct 2022</p>
            <FontAwesomeIcon icon={faTag}/>
            <p>Wood</p>
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Going all-in with millennial design
          </h2>
          <p className="text-gray-600 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facilis accusantium nam, vel voluptate quidem harum commodi nisi dolorem culpa corporis placeat eum possimus dolorum animi esse sapiente itaque quod.
          </p>
          <div className='w-[80px] border-b-2 border-black'>
          <a href="#" className="text-black font-semibold">
            Read more
          </a>
          </div>
        </div>
      </div>
      {/* Blog Post 2 */}
      <div className="bg-white rounded-lg overflow-hidden">
      <Image
          src={blog8}
          alt="Blog Post Image"
          className="w-full h-[50vh] object-cover"
        ></Image>
        <div className="p-6">
          <div className="flex space-x-4 text-sm text-gray-500 mb-3">
          <FontAwesomeIcon icon={faUser}/>
            <p>Admin</p>
            <FontAwesomeIcon icon={faCalendar}/>
            <p>14 Oct 2022</p>
            <FontAwesomeIcon icon={faTag}/>
            <p>Handmade</p>
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Exploring new ways of decorating
          </h2>
          <p className="text-gray-600 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facilis accusantium nam, vel voluptate quidem harum commodi nisi dolorem culpa corporis placeat eum possimus dolorum animi esse sapiente itaque quod.
          </p>
          <div className='w-[80px] border-b-2 border-black'>
          <a href="#" className="text-black font-semibold">
            Read more
          </a>
          </div>
        </div>
      </div>
      {/* blog 3  */}
      <div className="bg-white rounded-lg overflow-hidden">
      <Image
          src={blog7}
          alt="Blog Post Image"
          className="w-full h-[50vh] object-cover"
        ></Image>
        <div className="p-6">
          <div className="flex space-x-4 text-sm text-gray-500 mb-3">
          <FontAwesomeIcon icon={faUser}/>
            <p>Admin</p>
            <FontAwesomeIcon icon={faCalendar}/>
            <p>14 Oct 2022</p>
            <FontAwesomeIcon icon={faTag}/>
            <p>Wood</p>
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Handmade pieces that took time to make
          </h2>
          <p className="text-gray-600 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facilis accusantium nam, vel voluptate quidem harum commodi nisi dolorem culpa corporis placeat eum possimus dolorum animi esse sapiente itaque quod.
          </p>
          <div className='w-[80px] border-b-2 border-black'>
          <a href="#" className="text-black font-semibold">
            Read more
          </a>
          </div>
        </div>
      </div>
      {/* pagination  */}
      <div className='flex justify-center items-center space-x-10 '>
        <p className='bg-[#fde6a7] rounded-xl w-[55px] h-[55px] justify-center items-center flex text-xl'>1</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[50px] h-[50px] justify-center items-center flex text-xl'>2</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[50px] h-[50px] justify-center items-center flex text-xl'>3</p>
        <p className='bg-[#fbf5e3] rounded-xl w-[100px] h-[60px] justify-center items-center flex text-xl'>NEXT</p>
        </div>
    </div>
    {/* Sidebar */}
    <div className="w-full lg:w-1/3 space-y-10 mt-10 lg:mt-0">
      {/* Categories */}
      <div className="bg-white rounded-lg p-6 px-10">
    {/* search bar  */}
    <div className="w-[full] max-w-md mb-5">
  <div className="relative">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Search..."
      className="w-full pl-4 pr-12 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    {/* Icon Placeholder */}
    <div className="absolute inset-y-0 right-3 flex items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      {/* Replace this div with your icon */}
    </div>
  </div>
</div>
        <h3 className="text-xl font-bold mb-5">Categories</h3>
        <ul className="space-y-3 w-[50%]">
          <li className="flex justify-between text-gray-600">
            <span>Crafts</span>
            <span>2</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Design</span>
            <span>8</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Handmade</span>
            <span>7</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Interior</span>
            <span>1</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Wood</span>
            <span>6</span>
          </li>
        </ul>
      </div>
      {/* Recent Posts */}
      <div className="bg-white rounded-lg  p-6">
        <h3 className="text-xl font-bold mb-5">Recent Posts</h3>
        <ul className="space-y-5 w-[70%]">
          <li className="flex items-center space-x-4">
            <Image
              src={blog6}
              alt="Post Image"
              className="w-16 h-16 object-cover rounded-lg"
            ></Image>
            <div>
              <h4 className="text-gray-800 font-semibold">
                Going all-in with millennial design
              </h4>
              <p className="text-sm text-gray-500">13 Aug 2022</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
          <Image
              src={blog5}
              alt="Post Image"
              className="w-16 h-16 object-cover rounded-lg"
            ></Image>
            <div>
              <h4 className="text-gray-800 font-semibold">
                Exploring new ways of decorating
              </h4>
              <p className="text-sm text-gray-500">08 Aug 2022</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
          <Image
              src={blog4}
              alt="Post Image"
              className="w-16 h-16 object-cover rounded-lg"
            ></Image>
            <div>
              <h4 className="text-gray-800 font-semibold">
                Handmade pieces that take time
              </h4>
              <p className="text-sm text-gray-500">05 Aug 2022</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
          <Image
              src={blog2}
              alt="Post Image"
              className="w-16 h-16 object-cover rounded-lg"
            ></Image>
            <div>
              <h4 className="text-gray-800 font-semibold">
                Modern home in Milan
              </h4>
              <p className="text-sm text-gray-500">05 Aug 2022</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
          <Image
              src={blog3}
              alt="Post Image"
              className="w-16 h-16 object-cover rounded-lg"
            ></Image>
            <div>
              <h4 className="text-gray-800 font-semibold">
                Colorful office redeign
              </h4>
              <p className="text-sm text-gray-500">05 Aug 2022</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
        {/* Footer  */}
      <Footer/>
    </div>
  )
}

export default page