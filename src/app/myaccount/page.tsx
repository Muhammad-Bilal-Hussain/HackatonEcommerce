"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Footer from '../components/Footer';
import Header from '../components/Header';
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import Link from 'next/link';

export default function page (){
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
        <h1 className="text-3xl lg:text-6xl font-medium">My Account</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; My Account
        </p>
      </div>
    </div>
  </div>
</div>
{/* Login or Register */}
<div className="max-w-full">
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
      
      {/* Login side */}
      <div className="space-y-10 px-6 sm:px-10 py-10 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Login</h1>
        <div className="space-y-5">
          <label htmlFor="user-or-email" className="text-lg font-medium block">
            User or Email Address
          </label>
          <input
            type="text"
            id="user-or-email"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="password" className="block text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-x-5 flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            className="border border-gray-400 w-[20px] h-[20px] rounded-xl"
          />
          <label htmlFor="checkbox" className="text-sm sm:text-base">
            Remember me
          </label>
        </div>
        <div className="space-x-5 flex items-center">
          <button className="border border-gray-500 w-full sm:w-[180px] h-[45px] rounded-xl text-lg font-medium">
            Log In
          </button>
          <p className="text-sm sm:text-base font-medium">Lost Your Password?</p>
        </div>
      </div>

      {/* Register side */}
      <div className="space-y-10 px-6 sm:px-10 py-10 lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Register</h1>
        <div className="space-y-5">
          <label htmlFor="email" className="block text-lg font-medium">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-400 w-full h-[60px] rounded-xl px-4"
          />
        </div>
        <div className="space-y-5">
          <p className="text-gray-400 text-sm sm:text-base">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <b className="text-black font-medium"> privacy policy.</b>
          </p>
        </div>
        <div className="space-x-5 flex items-center">
          <button className="border border-gray-500 w-full sm:w-[180px] h-[45px] rounded-xl text-lg font-medium">
            Register
          </button>
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
