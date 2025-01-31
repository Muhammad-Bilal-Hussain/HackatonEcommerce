"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import herosofa from "../../../public/herosofa.png";
import sofa1 from "../../../public/sofa1.jpg";
import cardsofa1 from "../../../public/cardsofa1.jpg";
import cardsofa2 from "../../../public/cardsofa2.jpg";
import cardsofa3 from "../../../public/cardsofa3.jpg";
import newarrival from "../../../public/new arival sofa.jpg";
import watchicon from "../../../public/watchicon.jpg";
import calndericon from "../../../public/calendericon.jpg";
import bgpic from "../../../public/intagrambg pic.jpg";
import Footer from "../components/Footer";
import Header from "./Header";
import { client } from "@/sanity/lib/client";
import ShopProduct from "../components/ShopProduct";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  imagePath: string; // Assume imagePath is a valid URL string
  description: string;
  price: number;
  rating: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

const Hero: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productImage, setImage] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(`*[_type == 'product'][4...8]`);
      const image: Product[] = await client.fetch(`*[_type == 'product']`);
      setProducts(data);
      setImage(image);

  };

    fetchProducts();
  }, []);




  return (
    <div>
      {/* Hero Div */}
      <div className="max-w-full bg-[#f6e6b8]">
        <div className="max-w-[1440px] flex flex-col items-center mx-auto px-4 md:px-10">
          {/* Navbar */}
          <Header />
          
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between md:mt-[100px] max-sm:mt-[228px] w-full px-4 space-y-6 md:space-y-0">
            {/* Text Content */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Rocket Single <br /> Seater
              </h1>
              <a
                href="/shop"
                className="inline-block text-xl md:text-2xl font-medium text-gray-800 underline hover:text-black"
              >
                Shop Now
              </a>
            </div>
            {/* Image */}
            <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
            <Link href={`/shops/${productImage.length > 0 ? productImage[15]._id : ''}`}>
            {productImage.length > 0 && (
            <Image
              src={productImage[15].imagePath} // Pehle product ki image
              alt="Hero Section Image"
              width={500} // Adjust width accordingly
              height={500} // Adjust height accordingly
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
            />
          )}
            </Link>            
            </div>
          </section>
        </div>
      </div>

      {/* Side Table Div */}
      <div className="max-w-full bg-[#fbf3f3]">
        <div className="max-w-7xl mx-auto py-10 px-10">
          <section className="py-16 max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Item 1 */}
              <div className="flex space-y-4 space-x-16 items-center justify-center transition-transform transform hover:scale-105">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
                <Link href={`/shops/${productImage.length > 0 ? productImage[19]._id : ''}`}>
            {productImage.length > 0 && (
            <Image
              src={productImage[19].imagePath} // Pehle product ki image
              alt="Hero Section Image"
              width={300} // Adjust width accordingly
              height={300} // Adjust height accordingly
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover bg-cover w-[500px] h-[300px]"
            />
          )}
          <h2 className="text-4xl font-semibold text-center mt-4">{productImage.length > 0 ? productImage[19].name : ''}</h2>
            </Link>
      <div className="flex items-center justify-center p-5 text-center ">
        <a href="/shop" className="text-[#ecbb51] text-2xl font-bold inline-flex items-center md:mb-2 lg:mb-0">
          View More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
              </div>
              {/* Item 2 */}
              <div className="flex space-y-4 space-x-16 items-center justify-center transition-transform transform hover:scale-105">
              <div className="h-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
                <Link href={`/shops/${productImage.length > 0 ? productImage[14]._id : ''}`}>
            {productImage.length > 0 && (
            <Image
              src={productImage[14].imagePath} // Pehle product ki image
              alt="Hero Section Image"
              width={300} // Adjust width accordingly
              height={300} // Adjust height accordingly
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover bg-cover w-[500px] h-[300px]"
            />
          )}
          <h2 className="text-4xl font-semibold text-center mt-4">{productImage.length > 0 ? productImage[14].name : ''}</h2>
            </Link>
      <div className="flex items-center justify-center p-5 text-center ">
        <a href="/shop" className="text-[#ecbb51] text-2xl font-bold inline-flex items-center md:mb-2 lg:mb-0">
          View More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Card Div */}
      <div className="max-w-full">
        <div className="max-w-7xl mx-auto py-10 px-10">
          <section>
            <div className="text-center mb-8">
              <h2 className="text-5xl font-semibold">Top Picks For You</h2>
              <p className="text-gray-400 text-lg mt-2">
                Find a bright idea to suit your taste with our great selection of
                suspension, floor, and table lights.
              </p>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {/* Product Card 1 */}
              {products.map((products) => (
              <ShopProduct data={products} key={products._id} />
                ))
                }
            </div>
            {/* View More Button */}
            <div className="text-center mt-8">
              <a href="/shop" className="text-black underline text-lg font-medium">
                View More
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* New Arrival */}
      <div className="max-w-full bg-[#f9edd3]">
        <div className="max-w-7xl mx-auto py-10 px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Link href={`/shops/${productImage.length > 0 ? productImage[8]._id : ''}`}>
            {productImage.length > 0 && (
            <Image
              src={productImage[8].imagePath} // Pehle product ki image
              alt="Hero Section Image"
              width={600} // Adjust width accordingly
              height={600} // Adjust height accordingly
              className="w-full max-w-md lg:max-w-full rounded-lg"
            />
          )}
            </Link>
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-bold ">New Arrivals</h2>
                <h1 className="text-3xl md:text-5xl font-bold mt-2">{productImage.length > 0 ? productImage[8].name : ''}</h1>
                <button className="bg-[#f9edd3] text-black border border-black text-center text-lg md:text-[25px] w-[150px] md:w-[200px] h-[40px] md:h-[50px] mt-6">
                  <a href={`/shops/${productImage.length > 0 ? productImage[8]._id : ''}`}>Order Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-full">
        <div className="max-w-7xl mx-auto py-10 px-10">
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold">Our Blogs</h2>
              <p className="text-gray-500 mt-2 text-xl">
                Find a bright idea to suit your taste with our great selection.
              </p>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              {/* Product Card 1 */}
              <div className="space-x-5">
                <Image src={cardsofa1} alt="Product 1" className="mx-auto mb-4" />
                <h3 className="text-lg px-10 mr-10">Going all-in with millennial design</h3>
                <div className="underline text-center mt-2">
                  <a href="" className="text-2xl font-semibold">Read More</a>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <Image src={watchicon} alt="Stopwatch" className="w-[30px]" />
                  <p className="text-gray-700 px-2">5 min</p>
                  <Image src={calndericon} alt="Calendar" className="w-[30px]" />
                  <p className="text-gray-700 px-2">12 <sup>th</sup> Oct 2022</p>
                </div>
              </div>
              {/* Product Card 2 */}
                            {/* Product Card 2 */}
              <div className="text-center">
                <Image
                  src={cardsofa2}
                  alt="Product 1"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg mb-2">
                  Going all-in with millenial design
                </h3>
                <a href="" className="text-2xl font-semibold underline mt-10">
                  Read More
                </a>
                <div className="flex justify-center items-center mt-5">
                  <Image src={watchicon} alt="stopwatch" className="w-[30px]" />
                  <p className="text-gray-700 px-2">5 min</p>
                  <Image src={calndericon} alt="calendar" className="w-[30px]" />
                  <p className="text-gray-700 px-2">
                    12 <sup>th</sup> Oct 2022
                  </p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="text-center">
                <Image
                  src={cardsofa3}
                  alt="Product 1"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg mb-2">
                  Going all-in with millenial design
                </h3>
                <a href="" className="text-2xl font-semibold underline mt-10">
                  Read More
                </a>
                <div className="flex justify-center items-center mt-5">
                  <Image src={watchicon} alt="stopwatch" className="w-[30px]" />
                  <p className="text-gray-700 px-2">5 min</p>
                  <Image src={calndericon} alt="calendar" className="w-[30px]" />
                  <p className="text-gray-700 px-2">
                    12 <sup>th</sup> Oct 2022
                  </p>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <a
                href="/blogs"
                className="text-black underline text-2xl font-medium"
              >
                View More
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="max-w-full relative">
        <Image
          src={bgpic}
          alt="Instagram Background"
          className="w-full h-[700px] object-cover opacity-15"
        />
        <div className="max-w-7xl mx-auto py-10 px-10">
          <div className="flex justify-center items-center absolute inset-0">
            <div className="text-center">
              <h1 className="text-6xl font-black">Our Instagram</h1>
              <p className="text-xl py-5">Follow our store on Instagram</p>
              <button
                className="shadow-md bg-white text-black w-[200px] h-[50px] rounded-full text-2xl hover:bg-gray-100 hover:font-medium"
              >
                <a href="#">Follow Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hero;