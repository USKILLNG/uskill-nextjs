"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronRight, Video, Users, MonitorPlay, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    experience: "",
    videoComfort: "",
    audience: ""
  });

  const totalSteps = 3;

  const handleSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Finish onboarding
      router.push("/dashboard/teacher");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      
      {/* Progress Header */}
      <div className="max-w-2xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between mb-4">
           <span className="text-sm font-bold text-slate-500">Step {step} of {totalSteps}</span>
           <span className="text-sm font-bold text-primary">{Math.round((step / totalSteps) * 100)}% Completed</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${(step / totalSteps) * 100}%` }}
             className="h-full bg-primary rounded-full"
           />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: EXPERIENCE */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-dark mb-4">Share your teaching knowledge</h1>
              <p className="text-slate-500 mb-10 text-lg">USKILL courses are video-based experiences that give students the chance to learn practical skills. What is your teaching experience?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  { id: 'informal', title: "In person, informally", desc: "I've taught colleagues or friends.", icon: <Users size={24}/> },
                  { id: 'formal', title: "In person, professionally", desc: "I've taught in a school or bootcamp.", icon: <MonitorPlay size={24}/> },
                  { id: 'online', title: "Online", desc: "I've posted tutorials or courses before.", icon: <Video size={24}/> },
                  { id: 'none', title: "No experience", desc: "I'm just getting started.", icon: <Check size={24}/> }
                ].map((opt) => (
                  <button 
                    key={opt.id}
                    onClick={() => handleSelection('experience', opt.id)}
                    className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg flex flex-col gap-4 ${selections.experience === opt.id ? 'border-primary bg-pink-50/50 ring-1 ring-primary' : 'border-slate-100 hover:border-primary/50'}`}
                  >
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${selections.experience === opt.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                       {opt.icon}
                    </div>
                    <div>
                       <h3 className="font-bold text-dark text-lg">{opt.title}</h3>
                       <p className="text-sm text-slate-500">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: VIDEO COMFORT */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-dark mb-4">Video Proficiency</h1>
              <p className="text-slate-500 mb-10 text-lg">How comfortable do you feel being on camera or recording your screen?</p>
              
              <div className="space-y-4 max-w-xl mx-auto text-left">
                {[
                  "I have videos ready to upload",
                  "I have made videos before",
                  "I'm knowledgeable but haven't filmed",
                  "I have no experience with video"
                ].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => handleSelection('videoComfort', opt)}
                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between group ${selections.videoComfort === opt ? 'border-primary bg-pink-50/50' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <span className="font-bold text-slate-700 group-hover:text-dark">{opt}</span>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${selections.videoComfort === opt ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                       {selections.videoComfort === opt && <Check size={14} className="text-white"/>}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: AUDIENCE */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-dark mb-4">Target Audience</h1>
              <p className="text-slate-500 mb-10 text-lg">Do you already have an audience or following?</p>
              
              <div className="space-y-4 max-w-xl mx-auto text-left">
                {[
                  "Not at the moment",
                  "I have a small following",
                  "I have a sizeable following"
                ].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => handleSelection('audience', opt)}
                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between group ${selections.audience === opt ? 'border-primary bg-pink-50/50' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <span className="font-bold text-slate-700 group-hover:text-dark">{opt}</span>
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${selections.audience === opt ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                       {selections.audience === opt && <Check size={14} className="text-white"/>}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-4 md:p-6">
           <div className="max-w-3xl mx-auto flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-3 font-bold text-slate-500 hover:text-dark disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
              >
                 <ArrowLeft size={20} /> Previous
              </button>
              
              <button 
                onClick={nextStep}
                disabled={
                   (step === 1 && !selections.experience) || 
                   (step === 2 && !selections.videoComfort) ||
                   (step === 3 && !selections.audience)
                }
                className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                 {step === totalSteps ? 'Finish Setup' : 'Continue'} <ChevronRight size={20} />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}