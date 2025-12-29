"use client";

import { courses } from "@/lib/courses";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Star, ArrowLeft } from "lucide-react";

export default function TrackPage() {
  const { category } = useParams();
  
  // Normalize category for comparison (e.g., 'development' matches 'Development')
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Filter courses based on the category
  const filteredCourses = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <Link href="/courses" className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to All Courses
          </Link>
          <h1 className="text-3xl font-bold text-dark mb-2">{categoryName} Track</h1>
          <p className="text-slate-500">Curated courses to help you master {categoryName}.</p>
        </div>

        {/* Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                     <Image
                       src={course.image}
                       alt={course.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       fill
                       priority
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-dark leading-tight mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">By {course.instructor}</p>
                    <div className="flex items-center gap-1 text-sm font-bold text-dark mb-4">
                      <span className="text-yellow-400 flex items-center gap-0.5">
                        {course.rating} <Star size={14} fill="currentColor" />
                      </span>
                      <span className="text-slate-400 font-normal">({course.students})</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-lg font-bold text-dark">₦{course.price.toLocaleString()}</span>
                      <span className="text-sm font-semibold text-primary group-hover:underline">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Empty State if no courses match
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
             <h2 className="text-xl font-bold text-dark mb-2">No courses found</h2>
             <p className="text-slate-500">We are currently updating our {categoryName} curriculum. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

