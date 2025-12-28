"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Award, Star, BookOpen, ChevronRight, Zap, ShoppingCart, Check, Users, DollarSign, Copy, Settings, CreditCard, Bell } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { courses } from "@/lib/courses";
import { useCart } from "@/context/CartContext";

const USER_PROFILE = {
  name: "Uzo",
  track: "Frontend Engineering",
  referralCode: "UZO-2025-DEV"
};

const ACTIVE_COURSE = {
  ...courses[0], 
  progress: 65, 
  completedModules: 7,
  totalModules: 12,
  lastAccessed: "2 hours ago"
};

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { addToCart, cart } = useCart();
  const [addedIds, setAddedIds] = useState([]);

  const recommendedCourses = courses.filter(c => c.id !== ACTIVE_COURSE.id).slice(0, 3);

  const handleAddToCart = (course) => {
    addToCart(course);
    setAddedIds(prev => [...prev, course.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== course.id)), 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-10 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
            <p className="text-slate-500">Welcome back, {USER_PROFILE.name}</p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex bg-white p-1 rounded-xl border border-slate-100 shadow-sm overflow-x-auto">
            {['overview', 'referrals', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold capitalize transition-all whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-dark text-white shadow-md' 
                  : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* --- TAB: OVERVIEW --- */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Active Course Hero */}
            <div className="bg-white rounded-4xl p-6 md:p-10 shadow-sm border border-slate-100 relative overflow-hidden group mb-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden relative shadow-md">
                   <Image src={ACTIVE_COURSE.image} alt="Course" fill unoptimized className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-lg">
                        <Play size={24} className="text-primary fill-current" />
                      </div>
                   </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">In Progress</span>
                    <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14} /> Last accessed {ACTIVE_COURSE.lastAccessed}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">{ACTIVE_COURSE.title}</h2>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-700">{ACTIVE_COURSE.progress}% Completed</span>
                      <span className="text-slate-400">{ACTIVE_COURSE.completedModules}/{ACTIVE_COURSE.totalModules} Modules</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${ACTIVE_COURSE.progress}%` }} className="h-full bg-primary rounded-full" />
                    </div>
                  </div>

                  <Link href={`/learning/${ACTIVE_COURSE.id}`}>
                    <button className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2">
                        Resume Learning <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recommendations Grid */}
            <h3 className="text-xl font-bold text-dark mb-6">Recommended for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => {
                const isInCart = cart.some(item => item.id === course.id);
                return (
                  <div key={course.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col">
                    <Link href={`/courses/${course.id}`} className="block relative h-40 rounded-xl overflow-hidden mb-4">
                      <Image src={course.image} alt={course.title} fill unoptimized className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold">{course.category}</div>
                    </Link>
                    <h4 className="font-bold text-dark mb-2 line-clamp-2">{course.title}</h4>
                    <div className="mt-auto flex gap-2">
                      <Link href={`/courses/${course.id}`} className="flex-1">
                        <button className="w-full py-2 rounded-xl border border-slate-200 text-slate-600 hover:border-primary hover:text-primary text-sm font-bold">Details</button>
                      </Link>
                      <button onClick={() => handleAddToCart(course)} disabled={isInCart} className={`px-4 rounded-xl text-white ${isInCart ? 'bg-green-500' : 'bg-primary'}`}>
                        {isInCart ? <Check size={18} /> : <ShoppingCart size={18} />}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* --- TAB: REFERRALS (Section 6) --- */}
        {activeTab === 'referrals' && (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                     <Users className="absolute top-4 right-4 opacity-20" size={48} />
                     <div className="text-3xl font-extrabold mb-1">12</div>
                     <div className="text-purple-100 text-sm font-medium">Total Referrals</div>
                  </div>
                  <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                     <DollarSign className="absolute top-4 right-4 opacity-20" size={48} />
                     <div className="text-3xl font-extrabold mb-1">₦45,000</div>
                     <div className="text-green-100 text-sm font-medium">Earned Commission</div>
                  </div>
                  <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm relative">
                     <div className="text-slate-500 text-sm font-bold uppercase mb-2">My Unique Link</div>
                     <div className="flex bg-slate-50 rounded-lg p-2 border border-slate-200">
                        <input readOnly value={`uskill.ng/ref/${USER_PROFILE.referralCode}`} className="bg-transparent flex-1 text-sm text-slate-700 outline-none" />
                        <button onClick={() => copyToClipboard(`uskill.ng/ref/${USER_PROFILE.referralCode}`)} className="text-primary hover:bg-white p-1 rounded-md transition-colors"><Copy size={16}/></button>
                     </div>
                  </div>
              </div>

              {/* Referral Table */}
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-50 font-bold text-dark">Recent Activity</div>
                 <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500">
                       <tr>
                          <th className="px-6 py-3 font-medium">User</th>
                          <th className="px-6 py-3 font-medium">Date</th>
                          <th className="px-6 py-3 font-medium">Status</th>
                          <th className="px-6 py-3 font-medium text-right">Commission</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {[1,2,3].map((i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                             <td className="px-6 py-4 font-medium text-dark">Student #{100+i}</td>
                             <td className="px-6 py-4 text-slate-500">Dec {20+i}, 2024</td>
                             <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Converted</span></td>
                             <td className="px-6 py-4 text-right font-bold text-dark">₦1,500</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </motion.div>
        )}

        {/* --- TAB: SETTINGS (Section 1) --- */}
        {activeTab === 'settings' && (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl border border-slate-100 p-8 max-w-2xl">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2"><Settings size={20}/> Account Settings</h3>
              
              <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" defaultValue={USER_PROFILE.name} className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-primary" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" defaultValue="uzo@uskill.ng" disabled className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-500" />
                 </div>
                 
                 <div className="pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-dark mb-4 flex items-center gap-2"><CreditCard size={18}/> Payout Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Bank Name</label>
                          <select className="w-full p-3 border border-slate-200 rounded-xl bg-white"><option>GTBank</option><option>Access Bank</option></select>
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Account Number</label>
                          <input type="text" placeholder="0123456789" className="w-full p-3 border border-slate-200 rounded-xl" />
                       </div>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-dark mb-4 flex items-center gap-2"><Bell size={18}/> Notifications</h4>
                    <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                       <input type="checkbox" defaultChecked className="h-4 w-4 text-primary rounded" />
                       Email me about new courses
                    </label>
                 </div>

                 <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primaryHover transition-colors">Save Changes</button>
              </div>
           </motion.div>
        )}

      </div>
    </div>
  );
}