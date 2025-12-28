"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPost() {
  // In a real app, use params.slug to fetch specific post
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4">
        
        <Link href="/blog" className="text-slate-500 hover:text-primary flex items-center gap-2 mb-8">
           <ArrowLeft size={16} /> Back to Blog
        </Link>

        <span className="bg-pink-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
           Career Growth
        </span>
        
        <h1 className="text-3xl md:text-5xl font-bold text-dark mt-4 mb-6 leading-tight">
           10 High-Income Skills to Learn in 2025
        </h1>

        <div className="flex items-center gap-6 text-slate-500 text-sm mb-10 border-b border-slate-100 pb-8">
           <span className="flex items-center gap-2"><User size={16} /> Uzo Admin</span>
           <span className="flex items-center gap-2"><Calendar size={16} /> Dec 15, 2024</span>
           <div className="flex-1"></div>
           <div className="flex gap-4">
              <Facebook size={18} className="hover:text-primary cursor-pointer"/>
              <Twitter size={18} className="hover:text-primary cursor-pointer"/>
              <Linkedin size={18} className="hover:text-primary cursor-pointer"/>
           </div>
        </div>

        <div className="prose prose-lg text-slate-600 max-w-none mb-16">
           <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" width={1000} height={600} className="w-full rounded-2xl mb-8" alt="Blog cover" />
           <p>The tech landscape is shifting rapidly. As we approach 2025, the demand for specialized skills is skyrocketing. Whether you are a beginner or a seasoned pro, these are the skills that will define the next decade.</p>
           <h3>1. Fullstack Development</h3>
           <p>Understanding both the frontend (what users see) and backend (server logic) makes you indispensable. Frameworks like Next.js are leading this charge.</p>
           <h3>2. Data Science</h3>
           <p>Data is the new oil. Companies need experts who can interpret data to drive business decisions.</p>
           <blockquote>&quot;The best investment you can make is in yourself.&quot; - Warren Buffett</blockquote>
           <p>Start learning today to secure your future.</p>
        </div>

        {/* Course Integration CTA (Section 7) */}
        <div className="bg-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to master these skills?</h3>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">Don&apos;t just read about it. Take action. Join USKILL today and get access to world-class curriculums.</p>
              <Link href="/courses">
                 <button className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                    Explore Courses
                 </button>
              </Link>
           </div>
        </div>

      </article>
    </div>
  );
}