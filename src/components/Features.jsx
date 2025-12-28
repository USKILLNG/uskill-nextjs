"use client";

import { motion } from 'framer-motion';
import { Laptop2, Layers, Users, BookOpen, Award } from 'lucide-react';

export default function FeaturesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Everything you need to grow</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide the ecosystem for your learning journey. From interactive lessons to real-world projects.</p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6"
        >
            
            {/* Large Card 1: Interactive Learning */}
            <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Laptop2 size={180} className="text-primary" />
                </div>
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary">
                    <Layers size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Interactive Courses</h3>
                <p className="text-slate-600 mb-6">Forget boring lectures. Engage with hands-on labs, quizzes, and live coding environments designed to build muscle memory.</p>
                <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-slate-100 mt-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                        <div className="h-2 bg-primary/20 rounded w-5/6"></div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Community */}
            <motion.div variants={item} className="md:col-span-2 bg-dark rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
                            <p className="text-slate-300 text-sm">Connect with 10k+ learners in Nigeria.</p>
                        </div>
                        <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Users size={20} className="text-primary" />
                        </div>
                    </div>
                 </div>
            </motion.div>

            {/* Card 3: Mentorship */}
            <motion.div variants={item} className="bg-pink-50 rounded-3xl p-8 border border-pink-100 hover:border-primary/30 transition-colors">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-primary">
                    <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">Expert Mentors</h3>
                <p className="text-sm text-slate-600">Weekly live sessions with industry pros.</p>
            </motion.div>

            {/* Card 4: Certificates */}
            <motion.div variants={item} className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <div className="h-10 w-10 bg-slate-50 rounded-xl flex items-center justify-center shadow-sm mb-4 text-primary">
                    <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">Certified</h3>
                <p className="text-sm text-slate-600">Earn recognized certificates upon completion.</p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}