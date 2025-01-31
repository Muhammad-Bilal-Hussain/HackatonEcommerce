"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import shopbg from "../../../public/shopbg.jpeg";
import shopicon from "../../../public/shopicon.png";
import filtericon from "../../../public/filtericon.jpg";
import cateicon from "../../../public/cateicon.jpg";
import cateicon1 from "../../../public/cateicon1.jpg";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import ShopProduct from "../components/ShopProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 9;

  // Fetch products based on the current page
  useEffect(() => {
    const fetchProducts = async () => {
      const startIndex = (currentPage - 1) * productsPerPage;
      // Fetch paginated products
      const productsData: Product[] = await client.fetch(
        `*[_type == 'product'] | order(_createdAt desc) [${startIndex}...${startIndex + productsPerPage}]`
      );
      setProducts(productsData);

      // Fetch total product count and calculate total pages
      const totalProducts: number = await client.fetch(`count(*[_type == 'product'])`);
      setTotalPages(Math.ceil(totalProducts / productsPerPage));
    };

    fetchProducts();
  }, [currentPage]); // Fetch data whenever the current page changes

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navbar */}
      <Header />

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

      {/* Filter Bar */}
      <div className="max-w-full bg-[#fbf3f3]">
        <div className="max-w-[120rem] mx-auto py-10 px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-14">
            {/* Left side */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Image src={filtericon} alt="filter icon" className="w-8 h-8" />
                <p className="text-2xl sm:text-3xl font-medium">Filter</p>
              </div>
              <div className="flex space-x-4">
                <Image src={cateicon} alt="category icon" className="w-8 h-8" />
                <Image src={cateicon1} alt="category icon" className="w-8 h-8" />
              </div>
              <div className="border-l-[3px] border-black pl-4">
                <p className="text-sm sm:text-lg font-normal">
                  Showing {(currentPage - 1) * productsPerPage + 1}-
                  {Math.min(currentPage * productsPerPage, products.length)} of {totalPages * productsPerPage} results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Cards */}
      <div className="max-w-full">
        <div className="max-w-7xl mx-auto py-10">
          <div className="flex justify-center items-center">
            {/* Product Grid */}
            <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 
            mt-20 mb-10 ">
              {products.map((product) => (
                <ShopProduct data={product} key={product._id} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${
                  page === currentPage
                    ? "bg-[#fde6a7] text-black"
                    : "bg-[#fbf5e3] text-gray-500"
                } rounded-xl w-[50px] h-[50px] flex justify-center items-center text-xl font-medium`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-[#fbf5e3] rounded-xl w-[100px] h-[50px] flex justify-center items-center text-xl font-medium"
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
