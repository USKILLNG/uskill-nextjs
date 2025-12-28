"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { User, Lock, Bell, Camera, Save } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-dark mb-8">Account Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
           
           {/* Sidebar */}
           <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
                 <button 
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition-colors ${activeTab === "profile" ? "bg-primary/5 text-primary border-l-4 border-primary" : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"}`}
                 >
                    <User size={18} /> Edit Profile
                 </button>
                 <button 
                    onClick={() => setActiveTab("password")}
                    className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition-colors ${activeTab === "password" ? "bg-primary/5 text-primary border-l-4 border-primary" : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"}`}
                 >
                    <Lock size={18} /> Password
                 </button>
                 <button 
                    onClick={() => setActiveTab("notifications")}
                    className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition-colors ${activeTab === "notifications" ? "bg-primary/5 text-primary border-l-4 border-primary" : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"}`}
                 >
                    <Bell size={18} /> Notifications
                 </button>
              </div>
           </div>

           {/* Content Area */}
           <div className="flex-1">
              
              {/* PROFILE TAB */}
              {activeTab === "profile" && (
                 <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                    <h2 className="text-xl font-bold text-dark mb-6">Public Profile</h2>
                    
                    <div className="flex items-center gap-6 mb-8">
                       <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                          {user?.photoURL ? (
                             <Image src={user.photoURL} className="w-full h-full object-cover" alt="Profile" />
                          ) : (
                             <span className="text-3xl font-bold text-slate-300">{user?.displayName?.[0] || "U"}</span>
                          )}
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <Camera className="text-white" size={24} />
                          </div>
                       </div>
                       <div>
                          <button className="text-sm font-bold text-slate-700 border border-slate-200 px-4 py-2 rounded-lg hover:border-slate-300 bg-white">Change Photo</button>
                          <p className="text-xs text-slate-400 mt-2">Max file size: 1MB. JPG or PNG.</p>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                             <input type="text" defaultValue={user?.displayName?.split(' ')[0] || "Uzo"} className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                             <input type="text" defaultValue={user?.displayName?.split(' ')[1] || "Developer"} className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                          </div>
                       </div>
                       
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Headline</label>
                          <input type="text" placeholder="Frontend Developer & UI Designer" className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                       </div>

                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                          <textarea rows="4" placeholder="Tell us a little about yourself..." className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none"></textarea>
                       </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                       <button className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                          <Save size={18} /> Save Profile
                       </button>
                    </div>
                 </div>
              )}

              {/* PASSWORD TAB */}
              {activeTab === "password" && (
                 <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                    <h2 className="text-xl font-bold text-dark mb-6">Change Password</h2>
                    <div className="space-y-4 max-w-md">
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                          <input type="password" className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                          <input type="password" className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                          <input type="password" className="w-full p-3 border border-slate-200 rounded-xl focus:border-primary focus:outline-none" />
                       </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                       <button className="bg-dark hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all">
                          Update Password
                       </button>
                    </div>
                 </div>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "notifications" && (
                 <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                    <h2 className="text-xl font-bold text-dark mb-6">Email Notifications</h2>
                    <div className="space-y-4">
                       {[
                          "Notify me when a new course is released in my track",
                          "Email me about special promotions and discounts",
                          "Send me a weekly summary of my learning progress",
                          "Notify me when an instructor replies to my question"
                       ].map((item, i) => (
                          <label key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                             <input type="checkbox" defaultChecked className="w-5 h-5 text-primary rounded focus:ring-primary" />
                             <span className="text-slate-600 font-medium">{item}</span>
                          </label>
                       ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                       <button className="bg-slate-200 text-slate-600 hover:bg-slate-300 font-bold py-3 px-8 rounded-xl transition-all">
                          Save Preferences
                       </button>
                    </div>
                 </div>
              )}

           </div>
        </div>

      </div>
    </div>
  );
}