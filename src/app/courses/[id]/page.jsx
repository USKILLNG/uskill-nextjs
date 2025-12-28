"use client";

import { courses } from "@/lib/courses";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import { Star, Play, CheckCircle2, Clock, Users, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CourseDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Find the course based on ID from URL
  const course = courses.find((c) => c.id === parseInt(id));

  // Handle Loading/Error state
  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(course);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset button visual after 2s
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* 1. Header / Breadcrumb Section */}
      <div className="bg-dark text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex gap-2 text-sm text-slate-400 mb-4">
             <Link href="/courses" className="hover:text-white">Courses</Link> / <span>{course.category}</span>
           </div>
           <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl">{course.title}</h1>
           <div className="flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-1 text-yellow-400 font-bold">
                 {course.rating} <Star size={16} fill="currentColor" />
              </span>
              <span className="flex items-center gap-2">
                 <Users size={16} /> {course.students} students
              </span>
              <span className="flex items-center gap-2">
                 Created by <span className="underline">{course.instructor}</span>
              </span>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* 2. Left Column: Content */}
          <div className="lg:col-span-2">
            
            {/* Video Placeholder */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video relative shadow-xl mb-10 group cursor-pointer border-4 border-white">
               <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                     <Play size={32} className="text-primary ml-1 fill-current" />
                  </div>
               </div>
               <div className="absolute bottom-4 left-4 text-white font-bold">Preview this course</div>
            </div>

            {/* About Course */}
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm mb-8">
               <h2 className="text-2xl font-bold text-dark mb-4">About this course</h2>
               <p className="text-slate-600 leading-relaxed mb-6">{course.description}</p>
               
               <h3 className="text-lg font-bold text-dark mb-4">What you&apos;ll learn</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                       <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {item}
                    </div>
                  ))}
               </div>
            </div>

            {/* Instructor (Simple view) */}
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
               <h2 className="text-xl font-bold text-dark mb-4">Instructor</h2>
               <div className="flex gap-4">
                  <div className="h-16 w-16 bg-slate-200 rounded-full"></div>
                  <div>
                     <div className="font-bold text-primary text-lg">{course.instructor}</div>
                     <p className="text-sm text-slate-500">Senior Developer & Instructor</p>
                  </div>
               </div>
            </div>

          </div>

          {/* 3. Right Column: Sticky Purchase Card */}
          <div className="lg:col-span-1">
             <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                   <div className="p-8">
                      <div className="flex items-end gap-3 mb-6">
                         <span className="text-4xl font-extrabold text-dark">₦{course.price.toLocaleString()}</span>
                         <span className="text-lg text-slate-400 line-through mb-1">₦{course.oldPrice.toLocaleString()}</span>
                      </div>
                      
                      <button 
                        onClick={handleAddToCart}
                        className={`w-full py-4 rounded-xl font-bold text-lg mb-4 transition-all shadow-lg ${isAdded ? 'bg-green-600 text-white shadow-green-200' : 'bg-primary hover:bg-primaryHover text-white shadow-primary/30'}`}
                      >
                         {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                      </button>
                      
                      <button className="w-full py-4 rounded-xl font-bold text-lg border border-dark text-dark hover:bg-slate-50 transition-colors">
                         Buy Now
                      </button>

                      <div className="mt-6 text-sm text-slate-500 space-y-3">
                         <div className="flex items-center justify-center gap-2">
                            <ShieldCheck size={16} /> 30-Day Money-Back Guarantee
                         </div>
                         <div className="flex items-center justify-center gap-2">
                            <Award size={16} /> Certificate of Completion
                         </div>
                         <div className="flex items-center justify-center gap-2">
                            <Clock size={16} /> Full Lifetime Access
                         </div>
                      </div>
                   </div>
                   <div className="bg-slate-50 p-4 text-center text-xs text-slate-500 border-t border-slate-100">
                      Training 5 or more people? <a href="#" className="text-primary font-bold underline">Get your team access</a>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}