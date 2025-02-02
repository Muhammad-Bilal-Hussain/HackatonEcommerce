"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define Cart Context
const CartContext = createContext<any>(null);

// Cart Provider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      console.log("save cart", savedCart);
      
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  // Save cart data to localStorage whenever the cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add to Cart Function
  const addToCart = (product: any, quantity: number) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item._id === product._id);

      if (existingProduct) {
        // Update quantity if product already exists in cart
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity  }
            : item
        );
      }

      // Add new product to cart
      return [...prev, { ...product, quantity }];
    });
  };

  // Remove From Cart Function
  const removeFromCart = (_id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== _id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => useContext(CartContext);
