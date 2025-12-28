"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Calculate Total Price dynamically
  // reduce() runs a loop to add up all prices starting from 0
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
          <ShoppingBag className="text-primary" /> Your Cart
        </h1>

        {cart.length === 0 ? (
          // --- EMPTY STATE ---
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
               <ShoppingBag size={40} />
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8">Looks like you haven&apos;t added any courses yet.</p>
            <Link href="/courses">
              <button className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                Browse Courses
              </button>
            </Link>
          </div>
        ) : (
          // --- CART LIST STATE ---
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden shrink-0 relative">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 mb-2">By {item.instructor}</p>
                      <div className="font-bold text-primary">₦{item.price.toLocaleString()}</div>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right Column: Checkout Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-dark mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (0%)</span>
                    <span>₦0</span>
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-lg text-dark">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>

                  <Link href="/checkout" className="text-white">
                    <button className="w-full bg-dark hover:bg-primary text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                        Checkout Now <ArrowRight size={18} />
                    </button>
                  </Link>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  Secure Checkout • 30-Day Money Back Guarantee
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}