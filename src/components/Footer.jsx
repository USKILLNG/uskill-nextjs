"use client";

import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-dark mb-4 block">
              USKILL<span className="text-primary">.NG</span>
            </Link>
            <p className="text-slate-500 text-sm">
              Connecting ambitious learners with expert tutors. Master a skill today, or share your knowledge with the world.
            </p>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="font-bold text-dark mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/courses" className="hover:text-primary">Browse Categories</Link></li>
              <li><Link href="/mentors" className="hover:text-primary">Find a Mentor</Link></li>
              <li><Link href="/stories" className="hover:text-primary">Student Success Stories</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          {/* Teach Column (Cleanup: Removed Academy) */}
          <div>
            <h4 className="font-bold text-dark mb-4">Teach</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/teach" className="hover:text-primary">Become an Instructor</Link></li>
              <li><Link href="/instructor-rules" className="hover:text-primary">Instructor Rules</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-dark mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; 2024 USKILL.NG. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <Link href="#" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}