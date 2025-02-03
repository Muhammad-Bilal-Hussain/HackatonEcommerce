import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className=''>
        <Header/>
        <div className='max-w-full mt-28'>
            <div className='max-w-7xl mx-auto py-10 px-10'>
                <div className='flex justify-center items-center'>
                    <p className='text-red-600'>No Wish Product</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
