"use client"
import React, { useState } from 'react'
// import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Header from '../components/Header';
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

export default function page() {
  return (
    <div>
  {/* Navbar */}
    <Header/>

      {/* Hero Section */}
      <div className="">
      <div className="max-w-full relative">
        <Image
          src={shopbg}
          alt="bg pic instagram"
          className="w-full h-[300px] md:h-[500px] object-cover opacity-25"
        />
        <div className="flex justify-center items-center absolute inset-0">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <Image src={shopicon} alt="shop icon" className="w-10 md:w-16" />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium">Contact</h1>
            <p className="text-sm md:text-base lg:text-xl font-semibold py-2 md:py-5">
              <span className="font-bold">Home</span> &gt; Contact
            </p>
          </div>
        </div>
      </div>
      </div>
    

      {/* Contact Section */}
      <div className='max-w-full'>
      <div className="max-w-7xl mx-auto p-4 md:p-10 ">
        <div className="text-center mb-10 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Get In Touch With Us</h1>
          <p className="text-base md:text-2xl text-gray-400">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Section */}
          <div className="space-y-8">
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3" /> Address
              </p>
              <p className="text-sm md:text-lg text-gray-600 ml-6">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                <FontAwesomeIcon icon={faPhone} className="mr-3" /> Phone
              </p>
              <p className="text-sm md:text-lg text-gray-600 ml-6">Mobile: +(84) 546-6789</p>
              <p className="text-sm md:text-lg text-gray-600 ml-6">Hotline: +(84) 546-6789</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                <FontAwesomeIcon icon={faClock} className="mr-3" /> Working Time
              </p>
              <p className="text-sm md:text-lg text-gray-600 ml-6">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-sm md:text-lg text-gray-600 ml-6">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base md:text-lg font-semibold">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 px-4 mt-2 border rounded-lg focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base md:text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full h-12 px-4 mt-2 border rounded-lg focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-base md:text-lg font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full h-12 px-4 mt-2 border rounded-lg focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base md:text-lg font-semibold">
                Message
              </label>
              <textarea
                placeholder="Type your message"
                className="w-full h-32 px-4 mt-2 border rounded-lg focus:ring-2 focus:ring-black"
              />
            </div>
            <button className="w-[237px] h-12 text-black border-2 border-black text-[16] rounded-[15px]">
              Submit
            </button>
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
              <h1 className='text-[36px] font-semibold'>Free Delivery</h1>
              <p className='text-xl text-gray-400'>For all orders over $50, consectetur adipim scing elit</p>
              </div>
              {/* 2nd card cols  */}
              <div className='space-y-6'>
              <h1 className='text-[36px] font-semibold'>90 Days Return</h1>
              <p className='text-xl text-gray-400'>if good have problems, consectetur adipim scing elit</p>
              </div>
              {/* 3rd card cols  */}
              <div className='space-y-6'>
              <h1 className='text-[36px] font-semibold'>Secure Payment</h1>
              <p className='text-xl text-gray-400'>100% secure payment, consectetur adipim scing elit</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
