"use client";

import { motion } from 'framer-motion';
import { Play, Hexagon, Component, Zap, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Platform For Digital Skills in Nigeria
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-8 leading-tight">
            Master a Skill or <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Share Your Passion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            USKILL is the ecosystem where knowledge flows. Learn high-income skills from experts, or sign up as a tutor to earn while you teach.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Student CTA */}
            <Link href="/auth/signup" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-primary hover:bg-primaryHover text-white text-lg font-bold rounded-full shadow-xl shadow-primary/40 transition-all flex items-center justify-center gap-2"
              >
                Start Learning <ArrowRight size={20} />
              </motion.button>
            </Link>

            {/* Tutor CTA */}
            <Link href="/teach" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-dark hover:bg-slate-800 text-white border border-transparent text-lg font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Become a Tutor
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col items-center">
            <p className="text-sm text-slate-500 font-medium mb-4">JOIN A COMMUNITY OF LEARNERS AND EXPERTS</p>
            <div className="flex justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-slate-600">
               <Hexagon size={32} />
               <Component size={32} />
               <Zap size={32} />
               <Activity size={32} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}