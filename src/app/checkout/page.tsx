"use client";
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
import { useCart } from '../context/CartContext';
import Header from '../components/Header';

function page() {
    const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="text-center">Your cart is empty.</div>;
  }

  const subtotal = cart.reduce((acc: number, item: { price: number; quantity: number; }) => acc + item.price * item.quantity, 0);
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
        <h1 className="text-3xl lg:text-6xl font-medium">CheckOut</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; CheckOut
        </p>
      </div>
    </div>
  </div>
</div>


    {cart.map((item:any, index:number)=> (
      <div key={index}>
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
                        <div className="absolute inset-y-0 left-[70%] flex items-center pr-4 pointer-events-none">
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
        <p className='text-lg'><span className='text-gray-400'>{item.title}</span> * {item.quantity}</p>
        <p className='text-lg'>Subtotal</p>
        <p className='text-lg'>Total</p>
      </div>
      <div className='text-left sm:text-right space-y-5 w-full sm:w-auto'>
        <p className='text-lg font-medium'>Subtotal</p>
        <p className='text-lg font-medium'>{item.price * item.quantity}.00</p>
        <p className='text-lg font-medium'>{item.price}.00</p>
        <p className='text-2xl font-medium text-yellow-600'>{item.price * item.quantity}.00</p>
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
      </div>
    ))}
    </div>
  )
}

export default page