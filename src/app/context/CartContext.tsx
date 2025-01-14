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
        // Update quantity if product already exists in cart
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity }
            : item
        );
      }

      // Add new product to cart
      return [...prev, { ...product, quantity }];
    });
  };

  // Remove From Cart Function
  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => useContext(CartContext);
