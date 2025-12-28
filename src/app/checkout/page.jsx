"use client";

import { useCart } from "@/context/CartContext";
import { CreditCard, Wallet, Lock, Check } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [coupon, setCoupon] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
         <h1 className="text-3xl font-bold text-dark mb-8">Secure Checkout</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="md:col-span-2 space-y-6">
               
               {/* 1. User Info */}
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2"><Check className="bg-green-500 text-white rounded-full p-0.5" size={16}/> Personal Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="First Name" className="p-3 border rounded-xl w-full" />
                     <input type="text" placeholder="Last Name" className="p-3 border rounded-xl w-full" />
                     <input type="email" placeholder="Email Address" className="p-3 border rounded-xl w-full col-span-2" />
                  </div>
               </div>

               {/* 2. Payment Method */}
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h2 className="font-bold text-lg mb-4">Payment Method</h2>
                  <div className="flex gap-4 mb-6">
                     <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-pink-50 text-primary' : 'border-slate-100 text-slate-500 hover:border-slate-300'}`}
                     >
                        <CreditCard size={24} />
                        <span className="font-bold text-sm">Credit Card</span>
                     </button>
                     <button 
                        onClick={() => setPaymentMethod('transfer')}
                        className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${paymentMethod === 'transfer' ? 'border-primary bg-pink-50 text-primary' : 'border-slate-100 text-slate-500 hover:border-slate-300'}`}
                     >
                        <Wallet size={24} />
                        <span className="font-bold text-sm">Bank Transfer</span>
                     </button>
                  </div>

                  {paymentMethod === 'card' ? (
                     <div className="space-y-4">
                        <input type="text" placeholder="Card Number" className="w-full p-3 border border-slate-200 rounded-xl" />
                        <div className="grid grid-cols-2 gap-4">
                           <input type="text" placeholder="MM/YY" className="w-full p-3 border border-slate-200 rounded-xl" />
                           <input type="text" placeholder="CVC" className="w-full p-3 border border-slate-200 rounded-xl" />
                        </div>
                     </div>
                  ) : (
                     <div className="bg-yellow-50 text-yellow-800 p-4 rounded-xl text-sm">
                        Bank details will be displayed after you click &quot;Pay Now&quot;.
                     </div>
                  )}
               </div>

            </div>

            {/* Summary Sidebar */}
            <div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
                  <h3 className="font-bold text-dark mb-4">Order Summary</h3>
                  <div className="space-y-3 text-sm text-slate-600 mb-6">
                     {cart.map(item => (
                        <div key={item.id} className="flex justify-between">
                           <span className="truncate w-40">{item.title}</span>
                           <span>₦{item.price.toLocaleString()}</span>
                        </div>
                     ))}
                  </div>

                  {/* Coupon Input - FIXED SPACING */}
                  <div className="flex gap-2 mb-6">
                      <input 
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Coupon Code" 
                        className="flex-1 min-w-0 h-11 px-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary transition-colors"
                      />
                      <button 
                        className="h-11 bg-slate-800 hover:bg-slate-700 text-white px-4 rounded-xl text-sm font-bold shrink-0 transition-colors"
                      >
                        Apply
                      </button>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mb-6">
                     <div className="flex justify-between font-bold text-lg text-dark">
                        <span>Total</span>
                        <span>₦{total.toLocaleString()}</span>
                     </div>
                  </div>

                  <button className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                     <Lock size={16} /> Pay ₦{total.toLocaleString()}
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}