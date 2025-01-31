"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import shopbg from "../../../public/shopbg.jpeg";
import shopicon from "../../../public/shopicon.png";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />

      {/* Shop Hero Section */}
      <div className="max-w-full relative">
        <Image
          src={shopbg}
          alt="Shop Background"
          className="w-full h-[400px] lg:h-[700px] object-cover opacity-25"
        />
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-10">
          <div className="flex justify-center items-center absolute inset-0">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <Image src={shopicon} alt="Shop Icon" className="w-16 lg:w-[100px]" />
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
        {cart.map((item: any) => (
          <div key={item._id} className="max-w-7xl mx-auto py-10 px-10">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Product Detail */}
              <div className="w-full md:w-2/3 rounded-lg p-4">
                <table className="w-full border-collapse bg-[#fbf3f3]">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2">Product Name</th>
                      <th className="py-2 text-center">Qty</th>
                      <th className="py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="flex items-center gap-4 py-2">
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width="60"
                          height="60"
                          className="w-[60px] h-auto"
                        />
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="text-center py-2">
                        <p className="text-gray-800 text-base border border-gray-400 rounded-lg w-[40px] h-[40px] flex justify-center items-center sm:text-lg">
                          {item.quantity}
                        </p>
                      </td>
                      <td className="text-right py-2">Rs. {item.price * item.quantity}.00</td>
                      <td className="text-center py-2">
                        <button
                          className="px-4 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                          onClick={() => removeFromCart(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cart Summary */}
              <div className="w-full md:w-1/3 bg-[#fbf3f3] shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Cart Total</h2>
                <div className="flex justify-between items-center border-b py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">Rs. {item.price}.00</span>
                </div>
                <div className="flex justify-between items-center border-b py-2">
                  <span className="text-gray-600">Total</span>
                  <span className="text-yellow-600 font-bold">Rs. {subtotal}.00</span>
                </div>
                <button className="w-full text-black mt-4 px-4 py-2 border-2 border-black hover:font-bold font-medium rounded-3xl">
                  <Link href="/checkout">Check Out</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
