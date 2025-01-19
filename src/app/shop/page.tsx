"use client"
import React from 'react'
import Image from "next/image";
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import filtericon from "../../../public/filtericon.jpg"
import cateicon from "../../../public/cateicon.jpg"
import cateicon1 from "../../../public/cateicon1.jpg"
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import ShopProduct from '../components/ShopProduct';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
  _id: string;
  name: string;
  imagePath: string; // Assume imagePath is a valid URL string
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

export default async function Shop() {
  const products: Product[] = await client.fetch(`*[_type == 'product']`);
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
        <h1 className="text-3xl lg:text-6xl font-medium">Shop</h1>
        <p className="text-sm lg:text-xl font-semibold py-3 lg:py-5">
          <span className="font-bold">Home</span> &gt; Shop
        </p>
      </div>
    </div>
  </div>
</div>
{/* Sofe ki filter bar */}
<div className='max-w-full bg-[#fbf3f3]'>
  <div className='max-w-[120rem] mx-auto py-10 px-4 sm:px-8'>
    <div className='flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-14'>
      {/* Left side */}
      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
        <div className='flex items-center space-x-2'>
          <Image src={filtericon} alt='filter icon' className='w-8 h-8' />
          <p className='text-2xl sm:text-3xl font-medium'>Filter</p>
        </div>
        <div className='flex space-x-4'>
          <Image src={cateicon} alt='category icon' className='w-8 h-8' />
          <Image src={cateicon1} alt='category icon' className='w-8 h-8' />
        </div>
        <div className='border-l-[3px] border-black pl-4'>
          <p className='text-sm sm:text-lg font-normal'>
            Showing 1-16 of 32 results
          </p>
        </div>
      </div>
      {/* Right side */}
      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
        <p className='text-xl sm:text-2xl font-normal'>Show</p>
        <input
          type="text"
          className='text-center text-xl sm:text-3xl w-[80px] sm:w-[100px] h-[40px] sm:h-[50px]'
          placeholder='16'
        />
        <p className='text-xl sm:text-2xl font-normal'>Sort by</p>
        <input
          type="text"
          className='text-center text-xl sm:text-3xl w-[120px] sm:w-[180px] h-[40px] sm:h-[50px]'
          placeholder='Default'
        />
      </div>
    </div>
  </div>
</div>


      {/* shop cards all  */}
      <div className='max-w-full'>
      <div className='max-w-7xl mx-auto py-10'>
        <div className='flex justify-center items-center'>
    {/* Product Grid */}
    <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
    {/* Product Card 1 */}

    {products.map((products:productData) => (
        <ShopProduct data={products} key={products._id} />
      ))
    }
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
      <Footer/>
    </div>
  )
}
