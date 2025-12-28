"use client";

import { useState } from 'react';
import { courses } from "@/lib/courses";
import { PlayCircle, CheckCircle, FileText, Lock, ChevronLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function LearningPage({ params }) {
  // In a real app, verify user owns course here
  const course = courses.find(c => c.id === parseInt(params.id)) || courses[0];
  const [activeModule, setActiveModule] = useState(0);

  // Mock Lesson Data
  const modules = course.curriculum.map((title, i) => ({
    title,
    duration: "15:00",
    isLocked: i > 2, // Lock future lessons
    isCompleted: i < 2
  }));

  return (
    <div className="min-h-screen bg-dark flex flex-col md:flex-row">
      
      {/* 1. Sidebar (Lessons) */}
      <div className="w-full md:w-80 bg-slate-900 border-r border-slate-800 flex flex-col h-[50vh] md:h-screen overflow-hidden">
        <div className="p-4 border-b border-slate-800">
           <Link href="/dashboard" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm mb-4">
              <ChevronLeft size={16}/> Back to Dashboard
           </Link>
           <h2 className="text-white font-bold text-sm leading-tight">{course.title}</h2>
           <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[20%]"></div>
           </div>
           <div className="text-xs text-slate-500 mt-1">20% Completed</div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
           {modules.map((mod, i) => (
             <button 
               key={i} 
               disabled={mod.isLocked}
               onClick={() => setActiveModule(i)}
               className={`w-full text-left p-4 border-b border-slate-800/50 hover:bg-slate-800 transition-colors flex gap-3 ${activeModule === i ? 'bg-slate-800 border-l-2 border-l-primary' : ''} ${mod.isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
             >
                <div className="mt-1">
                   {mod.isCompleted ? <CheckCircle size={16} className="text-green-500"/> : mod.isLocked ? <Lock size={16} className="text-slate-600"/> : <PlayCircle size={16} className="text-white"/>}
                </div>
                <div>
                   <div className={`text-sm font-medium ${activeModule === i ? 'text-white' : 'text-slate-400'}`}>{mod.title}</div>
                   <div className="text-xs text-slate-600 mt-1 flex items-center gap-2">Video • {mod.duration}</div>
                </div>
             </button>
           ))}
        </div>
      </div>

      {/* 2. Main Content (Player) */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-900">
         {/* Video Player Area */}
         <div className="aspect-video bg-black relative flex items-center justify-center">
            {/* Mock Player UI */}
            <div className="text-center">
               <PlayCircle size={64} className="text-white/20 mx-auto mb-4"/>
               <p className="text-white/50">Video Player would load here</p>
               <p className="text-primary text-sm mt-2">Currently playing: {modules[activeModule].title}</p>
            </div>
         </div>

         {/* Content Tabs */}
         <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="flex gap-6 border-b border-slate-800 mb-6">
               <button className="pb-4 text-primary font-bold border-b-2 border-primary">Overview</button>
               <button className="pb-4 text-slate-400 hover:text-white">Resources</button>
               <button className="pb-4 text-slate-400 hover:text-white">Discussion</button>
            </div>

            <div className="text-slate-300 space-y-6">
               <h1 className="text-2xl font-bold text-white">{modules[activeModule].title}</h1>
               <p className="leading-relaxed">In this lesson, we will dive deep into the core concepts of {modules[activeModule].title}. Make sure to download the cheat sheet below.</p>
               
               <div className="bg-slate-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="h-10 w-10 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center"><FileText size={20}/></div>
                     <div>
                        <div className="text-white font-medium text-sm">Lesson Cheatsheet.pdf</div>
                        <div className="text-slate-500 text-xs">1.2 MB</div>
                     </div>
                  </div>
                  <button className="text-slate-400 hover:text-white"><Download size={20}/></button>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}