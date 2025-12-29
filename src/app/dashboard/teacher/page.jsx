"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Upload, MessageSquare, BarChart2, Video, Plus, Search, 
  Settings, Users, DollarSign, Star, MoreVertical, Edit2, Eye,
  LayoutDashboard, LogOut, HelpCircle 
} from "lucide-react";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("courses");

  // Navigation Items
  const navItems = [
    { id: 'courses', icon: <Video size={24} />, label: 'Courses' },
    { id: 'communication', icon: <MessageSquare size={24} />, label: 'Communication' },
    { id: 'performance', icon: <BarChart2 size={24} />, label: 'Performance' },
    { id: 'tools', icon: <Settings size={24} />, label: 'Tools' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* 1. Sidebar Navigation (The Rail) */}
      <aside className="fixed left-0 top-0 h-full bg-dark text-slate-400 z-50 transition-all duration-300 w-20 hover:w-64 group flex flex-col shadow-2xl overflow-hidden">
         
         {/* Branding Area */}
         <div className="h-20 flex items-center px-5 mb-6 border-b border-slate-800">
            <Link href="/" className="flex items-center gap-3">
               {/* Icon (Always Visible) */}
               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                  U
               </div>
               {/* Text (Visible on Hover) */}
               <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                  <span className="text-xl font-extrabold text-white tracking-tighter">
                     USKILL<span className="text-primary">.NG</span>
                  </span>
               </div>
            </Link>
         </div>

         {/* Navigation Links */}
         <div className="flex-1 px-3 space-y-2">
            {navItems.map((item) => (
               <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center h-12 px-3 rounded-xl transition-all relative overflow-hidden whitespace-nowrap ${
                     activeTab === item.id 
                     ? "bg-primary text-white" 
                     : "hover:bg-white/10 hover:text-white"
                  }`}
               >
                  {/* Icon Container */}
                  <div className="w-10 flex justify-center shrink-0">
                     {item.icon}
                  </div>
                  {/* Label (Slide Reveal) */}
                  <span className={`ml-3 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeTab === item.id ? "text-white" : ""}`}>
                     {item.label}
                  </span>
               </button>
            ))}
         </div>
         
         {/* Footer Actions */}
         <div className="p-3 border-t border-slate-800 space-y-2">
            <button className="w-full flex items-center h-12 px-3 rounded-xl transition-all hover:bg-white/10 hover:text-white whitespace-nowrap overflow-hidden">
               <div className="w-10 flex justify-center shrink-0">
                  <HelpCircle size={24} />
               </div>
               <span className="ml-3 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Help</span>
            </button>
            <Link href="/" className="w-full flex items-center h-12 px-3 rounded-xl transition-all hover:bg-red-500/10 hover:text-red-500 text-red-400 whitespace-nowrap overflow-hidden">
               <div className="w-10 flex justify-center shrink-0">
                  <LogOut size={24} />
               </div>
               <span className="ml-3 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Exit</span>
            </Link>
         </div>
      </aside>

      {/* 2. Main Content Area */}
      {/* Added ml-20 to offset the collapsed sidebar width */}
      <main className="flex-1 ml-20 p-6 md:p-10 transition-all duration-300">
         <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
               <div>
                  <h1 className="text-3xl font-bold text-dark">Instructor Dashboard</h1>
                  <p className="text-slate-500">Overview of your activity and performance.</p>
               </div>
               <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                  <Plus size={20}/> New Course
               </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-green-50 rounded-xl text-green-600"><DollarSign size={20}/></div>
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
                  </div>
                  <div className="text-2xl font-extrabold text-dark mb-1">₦125,000</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Total Revenue</div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Users size={20}/></div>
                     <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+5 new</span>
                  </div>
                  <div className="text-2xl font-extrabold text-dark mb-1">1,240</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Total Students</div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600"><Star size={20}/></div>
                  </div>
                  <div className="text-2xl font-extrabold text-dark mb-1">4.8</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Instructor Rating</div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-3 bg-purple-50 rounded-xl text-purple-600"><Video size={20}/></div>
                  </div>
                  <div className="text-2xl font-extrabold text-dark mb-1">3</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Active Courses</div>
               </div>
            </div>

            {/* TAB CONTENT: COURSES */}
            {activeTab === "courses" && (
               <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                     <h2 className="text-lg font-bold text-dark">Your Courses</h2>
                     <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16}/>
                        <input placeholder="Search courses..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary transition-colors"/>
                     </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                     <table className="w-full">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                           <tr>
                              <th className="px-6 py-4 text-left">Course</th>
                              <th className="px-6 py-4 text-left">Students</th>
                              <th className="px-6 py-4 text-left">Rating</th>
                              <th className="px-6 py-4 text-left">Status</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                           {/* Course Item 1 */}
                           <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-4">
                                    <div className="h-12 w-20 bg-slate-200 rounded-lg overflow-hidden shrink-0 relative">
                                       <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Course thumbnail" fill className="object-cover" />
                                    </div>
                                    <div className="font-bold text-dark text-sm">Complete Web Development Bootcamp</div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-600">1,205</td>
                              <td className="px-6 py-4 text-sm text-slate-600 flex items-center gap-1">4.8 <Star size={12} className="text-yellow-400 fill-current"/></td>
                              <td className="px-6 py-4">
                                 <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold border border-green-200">Published</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                 <div className="flex justify-end gap-2">
                                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-pink-50 rounded-lg transition-colors"><Edit2 size={16}/></button>
                                    <button className="p-2 text-slate-400 hover:text-dark hover:bg-slate-100 rounded-lg transition-colors"><Eye size={16}/></button>
                                 </div>
                              </td>
                           </tr>
                           
                           {/* Course Item 2 */}
                           <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4">
                                 <div className="flex items-center gap-4">
                                    <div className="h-12 w-20 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                                       <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400"><Video size={20}/></div>
                                    </div>
                                    <div className="font-bold text-dark text-sm">Advanced React Patterns (Draft)</div>
                                 </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-600">-</td>
                              <td className="px-6 py-4 text-sm text-slate-600">-</td>
                              <td className="px-6 py-4">
                                 <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-bold border border-slate-200">Draft</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                 <div className="flex justify-end gap-2">
                                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-pink-50 rounded-lg transition-colors"><Edit2 size={16}/></button>
                                    <button className="p-2 text-slate-400 hover:text-dark hover:bg-slate-100 rounded-lg transition-colors"><MoreVertical size={16}/></button>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            )}

            {/* TAB CONTENT: COMMUNICATION */}
            {activeTab === "communication" && (
               <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-dark mb-6">Recent Questions</h2>
                  <div className="space-y-4">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="p-4 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors cursor-pointer">
                           <div className="flex gap-3 mb-2">
                              <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">ST</div>
                              <div>
                                 <div className="font-bold text-sm text-dark">Sarah Thomas</div>
                                 <div className="text-xs text-slate-500">Lecture 4: Understanding React State</div>
                              </div>
                              <span className="ml-auto text-xs text-slate-400">2 hrs ago</span>
                           </div>
                           <p className="text-sm text-slate-600 mb-3 pl-11">Hi! Can you explain the difference between useEffect and useLayoutEffect again? I&apos;m a bit confused about when to use which.</p>
                           <div className="pl-11 flex gap-4">
                              <button className="text-primary text-sm font-bold hover:underline">Reply</button>
                              <button className="text-slate-400 text-sm hover:text-dark">Mark as Read</button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* TAB CONTENT: PERFORMANCE (Simple Mock) */}
            {activeTab === "performance" && (
               <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                     <h2 className="text-lg font-bold text-dark mb-6">Revenue Overview</h2>
                     {/* Mock Chart Area */}
                     <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90, 60, 95].map((h, i) => (
                           <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group hover:bg-primary/20 transition-colors">
                              <div 
                                 className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-500" 
                                 style={{ height: `${h}%` }}
                              ></div>
                              {/* Tooltip */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                 ₦{h}k
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="flex justify-between mt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                     </div>
                  </div>
               </div>
            )}

            {/* TAB CONTENT: TOOLS (New) */}
            {activeTab === "tools" && (
               <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
                     <div className="inline-flex h-16 w-16 bg-blue-50 text-blue-600 rounded-full items-center justify-center mb-4">
                        <Settings size={32}/>
                     </div>
                     <h2 className="text-xl font-bold text-dark mb-2">Instructor Tools</h2>
                     <p className="text-slate-500 mb-6">Resources to help you create better content.</p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-primary font-bold text-slate-600">Video Guidelines</button>
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-primary font-bold text-slate-600">Marketing Kit</button>
                        <button className="p-4 border border-slate-200 rounded-xl hover:border-primary font-bold text-slate-600">SEO Checklist</button>
                     </div>
                  </div>
               </div>
            )}

         </div>
      </main>

    </div>
  );
}