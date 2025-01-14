import { client } from '@/sanity/lib/client';
// import React, { useState } from 'react';
import ShopProduct from '../components/ShopProduct';
import Image from 'next/image';
import manicon from "../../../public/manicon.png"
import manicon1 from "../../../public/searchicon.png"
import manicon2 from "../../../public/heart icon.png"
import manicon3 from "../../../public/carticon.png"
import shopbg from "../../../public/shopbg.jpeg"
import shopicon from "../../../public/shopicon.png"
import filtericon from "../../../public/filtericon.jpg"
import cateicon from "../../../public/cateicon.jpg"
import cateicon1 from "../../../public/cateicon1.jpg"
import Link from 'next/link';
import Header from '../components/Header';

export const revalidate = 1;
export default async function page() {
        // api fetch data 
        const query = `*[_type=='products'] | order(_createAt asc) {
         title ,image, price,
        "slug":slug.current,
          }`;
            const data:productData[] = await client.fetch(query);
            return (
            <div>
              {/* navbar  */}
              <Header />
              {/* Shop Hero Section */}
            <div className="max-w-full relative">
              <Image
                src={shopbg}
                alt="bg pic instagram"
                className="w-full h-[400px] lg:h-[500px] object-cover opacity-25"
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
            {/* Shop Filter Section */}
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
                    className='text-center text-xl sm:text-xl w-[80px] sm:w-[100px] h-[40px] sm:h-[50px]'
                    placeholder='16'
                  />
                  <p className='text-xl sm:text-2xl font-normal'>Sort by</p>
                  <input
                    type="text"
                    className='text-center text-xl sm:text-xl w-[120px] sm:w-[180px] h-[40px] sm:h-[50px]'
                    placeholder='Default'
                  />
                </div>
              </div>
            </div>
          </div>
            {/* Shop Products Section */}
            <div className='max-w-full'>
              <div className='max-w-7xl mx-auto py-10 px-4 sm:px-8'>
              <main className="flex py-10 flex-col">
            <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-700 sm:text-3xl lg:text-5xl">
            
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((products: productData) => (
                <ShopProduct data={products} key={products.slug} />
            ))}
            </section>
        </main>
              </div>
          </div>
    </div>
  );
}