"use client";

import { courses } from "@/lib/courses";
import Link from "next/link";
import Image from "next/image";
import { Star, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  // Filter Logic
  const filteredCourses = courses.filter(course => {
     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesCategory = activeCategory === "All Courses" || course.category === activeCategory;
     return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
           <div>
              <h1 className="text-3xl font-bold text-dark mb-2">Explore All Courses</h1>
              <p className="text-slate-500">Master new skills with our top-rated curriculum.</p>
           </div>
           
           {/* Search Input (Section 2) */}
           <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                 type="text" 
                 placeholder="Search courses..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />
           </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-4 no-scrollbar">
          {['All Courses', 'Development', 'Design', 'Marketing', 'Data Science'].map((cat, i) => (
            <button 
               key={i} 
               onClick={() => setActiveCategory(cat)}
               className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-dark text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {filteredCourses.map((course) => (
               <Link key={course.id} href={`/courses/${course.id}`} className="group">
                 <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full flex flex-col">
                   <div className="relative h-48 overflow-hidden">
                      <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 25vw" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-dark shadow-sm">
                         {course.category}
                      </div>
                   </div>
                   <div className="p-5 flex flex-col flex-1">
                     <h3 className="text-lg font-bold text-dark leading-tight mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                     <p className="text-xs text-slate-500 mb-3">By {course.instructor}</p>
                     <div className="flex items-center gap-1 text-sm font-bold text-dark mb-4">
                       <span className="text-yellow-400 flex items-center gap-0.5">{course.rating} <Star size={14} fill="currentColor" /></span>
                       <span className="text-slate-400 font-normal">({course.students})</span>
                     </div>
                     <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                       <div className="flex flex-col">
                         <span className="text-lg font-bold text-dark">₦{course.price.toLocaleString()}</span>
                         <span className="text-xs text-slate-400 line-through">₦{course.oldPrice.toLocaleString()}</span>
                       </div>
                       <span className="text-sm font-semibold text-primary group-hover:underline">View Details</span>
                     </div>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        ) : (
           <div className="text-center py-20">
              <p className="text-slate-500 text-lg">{`No courses found matching "${searchTerm}"`}</p>
              <button onClick={() => {setSearchTerm(""); setActiveCategory("All Courses")}} className="mt-4 text-primary font-bold hover:underline">Clear Filters</button>
           </div>
        )}

      </div>
    </div>
  );
}