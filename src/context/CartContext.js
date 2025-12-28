"use client";

import { createContext, useContext, useState } from "react";

// 1. Create the Context (The "pipe" for data)
const CartContext = createContext();

// 2. Create the Provider (The "tank" that holds the data)
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (course) => {
    // Check if item already exists to avoid duplicates
    const exists = cart.find((item) => item.id === course.id);
    if (!exists) {
      setCart([...cart, course]);
    } else {
      // Optional: Logic for quantity could go here, but for courses, usually qty is 1
      alert("This course is already in your cart!");
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter((item) => item.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Create a Custom Hook (The "faucet" to access data easily)
export function useCart() {
  return useContext(CartContext);
}