"use client";

import { useState, useEffect, use } from "react";
import { courses } from "@/lib/courses";
import { 
  PlayCircle, CheckCircle, Lock, ChevronLeft, ChevronRight, 
  Menu, Download, FileText, MessageSquare, ChevronDown, ChevronUp 
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function LearningPage({ params }) {
  // 1. Safe Params Unwrap
  const unwrappedParams = use(params);
  const courseId = parseInt(unwrappedParams.id);
  const course = courses.find(c => c.id === courseId) || courses[0];

  // 2. TRANSFORM DATA: Convert flat curriculum into "Modules" with "Lessons"
  // This creates a realistic LMS structure even with simple mock data
  const generateCurriculum = () => {
    const raw = course.curriculum || [];
    const chunkSize = 3; // Group every 3 topics into a module
    const modules = [];
    
    for (let i = 0; i < raw.length; i += chunkSize) {
      const chunk = raw.slice(i, i + chunkSize);
      modules.push({
        id: `mod-${i}`,
        title: `Module ${Math.floor(i/chunkSize) + 1}: Core Concepts`,
        lessons: chunk.map((topic, idx) => ({
          id: i + idx,
          title: topic,
          duration: "12:30",
          type: "video",
          isCompleted: (i + idx) === 0, // First lesson done by default
          isLocked: (i + idx) > 1 // Lock everything after lesson 2
        }))
      });
    }
    return modules;
  };

  // State
  const [modules, setModules] = useState(generateCurriculum());
  const [currentLesson, setCurrentLesson] = useState({ modIndex: 0, lesIndex: 0 }); // Track exact location
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedModules, setExpandedModules] = useState([0]); // Only first module open initially

  // Derived State
  const activeModuleData = modules[currentLesson.modIndex];
  const activeLessonData = activeModuleData?.lessons[currentLesson.lesIndex];
  
  // Calculate Progress
  const totalLessons = modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedLessons = modules.reduce((acc, mod) => acc + mod.lessons.filter(l => l.isCompleted).length, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  // --- ACTIONS ---

  const toggleModule = (index) => {
    setExpandedModules(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleLessonSelect = (modIndex, lesIndex) => {
    const target = modules[modIndex].lessons[lesIndex];
    if (target.isLocked) return;
    setCurrentLesson({ modIndex, lesIndex });
    if (window.innerWidth < 768) setSidebarOpen(false); // Close sidebar on mobile
  };

  const handleMarkComplete = () => {
    // 1. Mark current as complete
    const newModules = [...modules];
    newModules[currentLesson.modIndex].lessons[currentLesson.lesIndex].isCompleted = true;
    
    // 2. Unlock next lesson (if exists)
    let nextMod = currentLesson.modIndex;
    let nextLes = currentLesson.lesIndex + 1;

    // If we reached end of module, go to next module
    if (nextLes >= newModules[nextMod].lessons.length) {
      nextMod++;
      nextLes = 0;
    }

    // If next lesson exists, unlock it
    if (nextMod < newModules.length && newModules[nextMod].lessons[nextLes]) {
      newModules[nextMod].lessons[nextLes].isLocked = false;
      // Auto-advance
      setCurrentLesson({ modIndex: nextMod, lesIndex: nextLes });
      // Ensure new module is expanded
      if (!expandedModules.includes(nextMod)) {
        setExpandedModules(prev => [...prev, nextMod]);
      }
    }

    setModules(newModules);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-slate-300 overflow-hidden">
      
      {/* HEADER */}
      <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 shrink-0 z-20">
        <div className="flex items-center gap-4">
           <Link href="/dashboard" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
              <ChevronLeft size={16}/> <span className="hidden md:inline">Dashboard</span>
           </Link>
           <div className="h-6 w-px bg-slate-800 hidden md:block"></div>
           <h1 className="text-sm font-bold text-slate-100 truncate max-w-50 md:max-w-md">{course.title}</h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-xs text-slate-500 font-medium">{progressPercent}% Completed</span>
              <div className="w-32 h-1.5 bg-slate-800 rounded-full mt-1">
                 <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
              </div>
           </div>
           <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-400 hover:text-white md:hidden">
             <Menu size={20} />
           </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
         
         {/* LEFT: MAIN CONTENT */}
         <div className="flex-1 flex flex-col overflow-y-auto scroll-smooth bg-gray-900">
            {/* Video Player Mock */}
            <div className="aspect-video bg-black flex items-center justify-center relative group w-full">
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-xl md:text-2xl font-bold mb-2">{activeLessonData?.title}</h2>
                  <p className="text-white/70 text-sm">Module {currentLesson.modIndex + 1} • Lesson {currentLesson.lesIndex + 1}</p>
               </div>
               <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PlayCircle size={40} className="text-white" fill="white"/>
               </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
               <button 
                  disabled={currentLesson.modIndex === 0 && currentLesson.lesIndex === 0}
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
               >
                  <ChevronLeft size={16} /> Previous
               </button>
               
               <button 
                  onClick={handleMarkComplete}
                  className="bg-primary hover:bg-primaryHover text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 active:scale-95"
               >
                  Mark Complete <ChevronRight size={16} />
               </button>
            </div>

            {/* Content Tabs */}
            <div className="p-6 md:p-8 max-w-5xl mx-auto w-full">
               <div className="flex gap-8 border-b border-slate-800 mb-8">
                  {['overview', 'resources', 'discussion'].map((tab) => (
                     <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
                     >
                        {tab}
                        {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>}
                     </button>
                  ))}
               </div>

               <div className="min-h-50">
                  {activeTab === 'overview' && (
                     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h3 className="text-lg font-bold text-white">About this lesson</h3>
                        <p className="leading-relaxed text-slate-400">
                           In this section covering <strong>{activeLessonData?.title}</strong>, we will explore the fundamental principles. 
                           Ensure you have your development environment ready.
                        </p>
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-500 text-sm">
                           <strong>Note:</strong> This is a key milestone in the curriculum. Please complete the quiz after watching.
                        </div>
                     </div>
                  )}

                  {activeTab === 'resources' && (
                     <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700/80 transition-colors cursor-pointer group">
                           <div className="flex items-center gap-4">
                              <div className="h-10 w-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors"><FileText size={20}/></div>
                              <div>
                                 <div className="text-slate-200 font-medium text-sm">Source_Code.zip</div>
                                 <div className="text-slate-500 text-xs">Project Files</div>
                              </div>
                           </div>
                           <Download size={18} className="text-slate-500 group-hover:text-white"/>
                        </div>
                     </div>
                  )}

                  {activeTab === 'discussion' && (
                     <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
                        <MessageSquare size={32} className="mx-auto text-slate-600 mb-3"/>
                        <p className="text-slate-500 font-medium">No discussions yet</p>
                        <button className="mt-3 text-primary text-sm font-bold hover:underline">Start a new thread</button>
                     </div>
                  )}
               </div>
            </div>
         </div>

         {/* RIGHT: ACCORDION SIDEBAR */}
         <aside className={`
            absolute md:relative z-10 right-0 top-0 h-full w-80 bg-slate-950 border-l border-slate-800 transition-transform duration-300 flex flex-col
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} md:block shadow-2xl md:shadow-none
         `}>
            <div className="p-4 border-b border-slate-800 bg-slate-950 sticky top-0 flex items-center justify-between">
               <div>
                  <h3 className="text-white font-bold text-sm">Course Content</h3>
                  <p className="text-xs text-slate-500 mt-1">{totalLessons} Lessons • {completedLessons}/{totalLessons} Done</p>
               </div>
               <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400"><ChevronRight/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
               {modules.map((mod, modIndex) => (
                  <div key={mod.id} className="border-b border-slate-800/50">
                     {/* Module Header */}
                     <button 
                        onClick={() => toggleModule(modIndex)}
                        className="w-full flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 transition-colors"
                     >
                        <span className="text-sm font-bold text-slate-300 text-left">{mod.title}</span>
                        {expandedModules.includes(modIndex) ? <ChevronUp size={16} className="text-slate-500"/> : <ChevronDown size={16} className="text-slate-500"/>}
                     </button>

                     {/* Module Lessons (Accordion Body) */}
                     {expandedModules.includes(modIndex) && (
                        <div className="bg-slate-950/50">
                           {mod.lessons.map((lesson, lesIndex) => {
                              const isActive = currentLesson.modIndex === modIndex && currentLesson.lesIndex === lesIndex;
                              
                              return (
                                 <button 
                                    key={lesson.id} 
                                    disabled={lesson.isLocked}
                                    onClick={() => handleLessonSelect(modIndex, lesIndex)}
                                    className={`w-full text-left p-3 pl-6 border-l-[3px] transition-all flex gap-3 group
                                       ${isActive ? 'border-primary bg-slate-900' : 'border-transparent hover:bg-slate-900/50'} 
                                       ${lesson.isLocked ? 'opacity-40' : ''}
                                    `}
                                 >
                                    <div className="mt-0.5 shrink-0">
                                       {lesson.isCompleted ? (
                                          <CheckCircle size={14} className="text-green-500"/>
                                       ) : lesson.isLocked ? (
                                          <Lock size={14} className="text-slate-600"/>
                                       ) : (
                                          <PlayCircle size={14} className={isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-300"}/>
                                       )}
                                    </div>
                                    <div className="min-w-0">
                                       <div className={`text-sm text-left truncate ${isActive ? 'text-white font-medium' : 'text-slate-400'}`}>
                                          {lesson.title}
                                       </div>
                                       <div className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                                          <span>{lesson.duration}</span>
                                       </div>
                                    </div>
                                 </button>
                              );
                           })}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </aside>

      </div>
    </div>
  );
}