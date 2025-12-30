"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageSquare, BarChart2, Video, Plus, Search, 
  Settings, Users, DollarSign, Star, Edit2, Eye,
  LogOut, HelpCircle, Menu, X, ArrowLeft, MoreVertical 
} from "lucide-react";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("courses");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { id: 'courses', icon: <Video size={24} />, label: 'Courses' },
    { id: 'communication', icon: <MessageSquare size={24} />, label: 'Communication' },
    { id: 'performance', icon: <BarChart2 size={24} />, label: 'Performance' },
    { id: 'tools', icon: <Settings size={24} />, label: 'Tools' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* --- MOBILE OVERLAY --- */}
      {/* Clicking this closes the sidebar on mobile */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden glass"
        />
      )}

      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className={`
        fixed left-0 top-0 h-full bg-dark text-slate-400 z-50 transition-all duration-300 flex flex-col shadow-2xl overflow-hidden
        
        /* Mobile: Slide in/out, fixed width */
        ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
        
        /* Desktop: Always visible, Rail effect (collapsed 20, expanded 64) */
        md:translate-x-0 md:w-20 md:hover:w-64
        
        /* Group allows us to target children when hovering the sidebar */
        group
      `}>
         
         {/* Branding Area */}
         <div className="h-20 flex items-center px-5 mb-6 border-b border-slate-800 justify-between">
            <Link href="/" className="flex items-center gap-3">
               {/* Icon (Always Visible) */}
               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                  U
               </div>
               {/* Text (Visible on Mobile OR Desktop Hover) */}
               <div className={`transition-opacity duration-300 whitespace-nowrap overflow-hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <span className="text-xl font-extrabold text-white tracking-tighter">
                     USKILL<span className="text-primary">.NG</span>
                  </span>
               </div>
            </Link>
            {/* Close Button (Mobile Only) */}
            <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
              <X size={24} />
            </button>
         </div>

         {/* Navigation Links */}
         <div className="flex-1 px-3 space-y-2">
            {navItems.map((item) => (
               <button 
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center h-12 px-3 rounded-xl transition-all relative overflow-hidden whitespace-nowrap ${
                     activeTab === item.id 
                     ? "bg-primary text-white" 
                     : "hover:bg-white/10 hover:text-white"
                  }`}
               >
                  <div className="w-10 flex justify-center shrink-0">
                     {item.icon}
                  </div>
                  <span className={`ml-3 font-bold transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${activeTab === item.id ? "text-white" : ""}`}>
                     {item.label}
                  </span>
               </button>
            ))}
         </div>
         
         {/* Footer Actions */}
         <div className="p-3 border-t border-slate-800 space-y-2">
            {/* Switch to Student View */}
            <Link href="/dashboard" className="w-full flex items-center h-12 px-3 rounded-xl transition-all hover:bg-white/10 hover:text-white whitespace-nowrap overflow-hidden bg-slate-800/50 text-slate-300">
               <div className="w-10 flex justify-center shrink-0">
                  <ArrowLeft size={24} />
               </div>
               <span className={`ml-3 font-bold transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>Student View</span>
            </Link>

            <button className="w-full flex items-center h-12 px-3 rounded-xl transition-all hover:bg-white/10 hover:text-white whitespace-nowrap overflow-hidden">
               <div className="w-10 flex justify-center shrink-0">
                  <HelpCircle size={24} />
               </div>
               <span className={`ml-3 font-bold transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>Help</span>
            </button>
            
            <Link href="/" className="w-full flex items-center h-12 px-3 rounded-xl transition-all hover:bg-red-500/10 hover:text-red-500 text-red-400 whitespace-nowrap overflow-hidden">
               <div className="w-10 flex justify-center shrink-0">
                  <LogOut size={24} />
               </div>
               <span className={`ml-3 font-bold transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>Exit</span>
            </Link>
         </div>
      </aside>

      {/* 2. Main Content Area */}
      {/* Added md:ml-20 to offset the desktop rail sidebar */}
      <main className="flex-1 md:ml-20 p-4 md:p-10 transition-all duration-300 w-full">
         <div className="max-w-7xl mx-auto">
            
            {/* Header with Hamburger */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pt-20 md:pt-0">
               <div className="flex items-center gap-4">
                  {/* Hamburger Button (Mobile Only) */}
                  <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden p-2 bg-white rounded-lg shadow-sm border border-slate-200 text-slate-700"
                  >
                    <Menu size={24} />
                  </button>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-dark">Instructor Dashboard</h1>
                    <p className="text-slate-500 text-sm md:text-base">Overview of your activity and performance.</p>
                  </div>
               </div>
               <button className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all w-full md:w-auto justify-center">
                  <Plus size={20}/> New Course
               </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-10">
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
                  
                  {/* Responsive Table Wrapper */}
                  <div className="overflow-x-auto">
                     <table className="w-full min-w-150">
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
                                       <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Course cover" fill className="object-cover" unoptimized />
                                    </div>
                                    <div className="font-bold text-dark text-sm line-clamp-1">Complete Web Development Bootcamp</div>
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
                                    <div className="font-bold text-dark text-sm line-clamp-1">Advanced React Patterns (Draft)</div>
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