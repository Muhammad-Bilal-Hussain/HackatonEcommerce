"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Header from "../components/Header";
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import sofa4 from "../../../public/sofa4.jpg"
import { client } from '@/sanity/lib/client';
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer"


export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="text-center">Your cart is empty.</div>;
  }

  const subtotal = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div>
    <div>
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
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
    {cart.map((item:any, index:number) => (
    <div key={index}>
  {/* Product Cart */}
<div className="max-w-full">
  <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-10">
      
      {/* Product Detail Section */}
      <div className="flex-1 p-4 lg:p-4">
        {/* Header Row */}
        <div className="grid grid-cols-4 gap-4 bg-[#fbf3f3] py-2 px-2 border-b">
          <p className="text-sm font-medium text-center col-span-2 sm:text-lg">Product Name</p>
          <p className="text-sm font-medium text-center sm:text-lg">Qty</p>
          <p className="text-sm font-medium text-center sm:text-lg">Total</p>
        </div>

        {/* Product Row */}
        <div className="grid grid-cols-4 gap-4 items-center py-4 px-2">
          <div className="col-span-2 flex items-center space-x-4">
          <img src={item.imagePath} alt='sofa 4' width="60" height="60" className="w-[60px] h-auto"></img>
            <p className="text-sm text-gray-400 sm:text-base">{item.name}</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-800 text-base border border-gray-400 rounded-lg w-[40px] h-[40px] flex justify-center items-center sm:text-lg">{item.quantity}</p>
          </div>
          <p className="text-sm text-black text-center sm:text-lg">Rs. {item.price * item.quantity}.00</p>
                          {/* Delete Button */}
                          <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 border border-red-500 px-4 py-1 rounded"
                >
                  Delete
                </button>
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="w-full lg:w-[30%] h-[400px] bg-[#fbf3f3] p-4 lg:p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">Cart Total</h1>
          <div className="flex justify-around items-center py-4 border-b">
            <p className="text-sm sm:text-base">Subtotal</p>
            <p className="text-sm text-gray-400 sm:text-base">Rs. {item.price}.00</p>
          </div>
          <div className="flex justify-around items-center py-4">
            <p className="text-sm sm:text-base">Total</p>
            <p className="text-yellow-500 text-sm sm:text-base">Rs. {subtotal}.00</p>
          </div>
          <button className="mt-4 bg-[#fbf3f3] font-normal text-black border-2 border-gray-400 rounded-xl w-full sm:w-[150px] h-[45px]">
            <Link href={"/checkout"} >Check Out</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  ))}
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
      <Footer/>
    </div>
    </div>
  )
}
