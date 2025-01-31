import React from 'react'

function footer() {
  return (
    <div>
            {/* Free Delivery Section */}
            <div className="max-w-full bg-[#fbf3f3] py-10 mt-10">
        <div className="max-w-[120rem] mx-auto py-10 px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Free Delivery</h1>
              <p className="text-xl text-gray-400">
                For all orders over $50, consectetur adipiscing elit
              </p>
            </div>
            {/* Second Card */}
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">90 Days Return</h1>
              <p className="text-xl text-gray-400">
                If goods have problems, consectetur adipiscing elit
              </p>
            </div>
            {/* Third Card */}
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">Secure Payment</h1>
              <p className="text-xl text-gray-400">
                100% secure payment, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    <div>
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
            <a href='/' className="text-black text-2xl">Home</a>
          </li>
          <li>
            <a href='/shop' className="text-black text-2xl">Shop</a>
          </li>
          <li>
            <a href='/blogs' className="text-black text-2xl">About</a>
          </li>
          <li>
            <a href='/contact' className="text-black text-2xl">Contact</a>
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
            <a href='#' className="text-black text-2xl">Payment Options</a>
          </li>
          <li>
            <a href='#' className="text-black text-2xl">Returns</a>
          </li>
          <li>
            <a href='#' className="text-black text-2xl">Privacy Policies</a>
          </li>
        </nav>
      </div>
      {/* 4 row  */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  <h2 className="title-font font-medium text-gray-400 tracking-widest text-2xl mb-3">
    NewsLetter
  </h2>
  <nav className="list-none mb-10 space-y-5">
    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-start md:items-end md:justify-start space-y-4 xl:space-y-0 lg:space-y-0 md:space-y-0">
      {/* Input Field */}
      <div className="relative w-full sm:w-auto xl:mr-4 lg:mr-4 sm:mr-4 mr-0">
        <input
          type="text"
          id="footer-field"
          name="footer-field"
          className="w-full sm:w-[200px] rounded border-b-2 border-black text-base py-2 leading-8 focus:outline-none"
          placeholder="Enter Your Email Address"
        />
      </div>
      {/* Button */}
      <button className="w-full sm:w-auto flex-shrink-0 inline-flex border-b-2 border-black py-2 px-6 focus:outline-none rounded text-[20px]">
        Button
      </button>
    </div>
  </nav>
</div>

    </div>
  </div>
  <div className="">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-center text-gray-900">
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
    </div>
  )
}

export default footer