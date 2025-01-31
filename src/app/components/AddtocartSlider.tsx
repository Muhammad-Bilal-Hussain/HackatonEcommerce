"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function AddtocartSlider({ data, count }: { data: any; count: number }) {
  const [cartItems, setCartItems] = useState<any[]>([]); // State to hold cart items

  // Function to handle adding products to the cart
  const handleAddToCart = () => {
    setCartItems((prevCart) => {
      // Check if the product already exists in the cart
      const existingItemIndex = prevCart.findIndex((item) => item._id === data._id);

      if (existingItemIndex !== -1) {
        // If product exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += count;
        return updatedCart;
      } else {
        // If product doesn't exist, add it to the cart
        return [...prevCart, { ...data, quantity: count }];
      }
    });
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  return (
    <Sheet>
      {/* Trigger button */}
      <SheetTrigger
        className="w-full md:w-[215px] h-[64px] border-[1px] rounded-[10px] flex justify-center items-center hover:border-2 border-black"
        onClick={handleAddToCart}
      >
        Add to Cart
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <hr className="border-[1px] border-[#D9D9D9] my-4" />

          {/* Product Details */}
          {cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <SheetDescription key={item._id} className="flex justify-between items-center gap-4 mb-4">
                <Image
                  src={item.imagePath}
                  width={60}
                  height={60}
                  alt="Product Image"
                  className="rounded-lg"
                />
                <div className="flex flex-col gap-2 text-base text-black">
                  <h1>{item.name}</h1>
                  <div className="flex gap-3">
                    <span>{item.quantity} x</span>
                    <span className="text-[#B88E2F]">Rs. {item.price}</span>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  Delete
                </button>
              </SheetDescription>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}

          {/* Subtotal */}
          {cartItems.length > 0 && (
            <SheetDescription className="flex justify-between gap-10">
              <span>Subtotal</span>
              <span className="text-[#B88E2F]">
                Rs.{" "}
                {cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0)}
              </span>
            </SheetDescription>
          )}

          <hr className="border-[1px] border-[#D9D9D9] mt-4" />

          {/* Action buttons */}
          {cartItems.length > 0 && (
            <div className="flex gap-4 mt-4">
              <Link href="/cart/">
                <button className="w-[131px] h-[31px] border-[1px] border-black rounded-full">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="w-[131px] h-[31px] border-[1px] border-black rounded-full">
                  Checkout
                </button>
              </Link>
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
