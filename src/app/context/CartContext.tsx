"use client";

import { createContext, useContext, useState } from "react";

// Define Cart Context
const CartContext = createContext<any>(null);

// Cart Provider Component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  // Add to Cart Function
  const addToCart = (product: any, quantity: number) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.slug === product.slug);
      if (existingProduct) {
        // Update Quantity if Product Exists
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Add New Product
      return [...prev, { ...product, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => useContext(CartContext);
