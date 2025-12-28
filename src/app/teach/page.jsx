"use client";

import Link from "next/link";
import { CheckCircle2, Users, DollarSign, Calendar } from "lucide-react";

export default function TeachPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Come Teach with Us</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Become an instructor and change lives — including your own. Share your knowledge with thousands of students in Nigeria and beyond.
          </p>
          <Link href="/auth/signup">
            <button className="bg-primary hover:bg-primaryHover text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-16">So many reasons to start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={32} />, title: "Inspire Learners", desc: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers." },
              { icon: <DollarSign size={32} />, title: "Get Rewarded", desc: "Expand your professional network, build your expertise, and earn money on each paid enrollment." },
              { icon: <Calendar size={32} />, title: "Flexible Schedule", desc: "Publish the course you want, in the way you want, and always have control of your own content." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-slate-50 text-primary rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}