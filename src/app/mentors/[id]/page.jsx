import { instructors } from "@/lib/instructors";
import { courses } from "@/lib/courses";
import Link from "next/link";
import Image from "next/image";
import { Star, Users, BookOpen, ArrowLeft } from "lucide-react";

export default async function MentorDetailPage({ params }) {
  // 1. Resolve Params (Fix for Next.js 15+)
  const resolvedParams = await params;
  const mentorId = parseInt(resolvedParams.id);
  
  // 2. Find the mentor
  const mentor = instructors.find(i => i.id === mentorId);

  // 3. Robust Error State
  if (!mentor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center max-w-md">
            <h2 className="text-2xl font-bold text-dark mb-2">Mentor Not Found</h2>
            <p className="text-slate-500 mb-6">We couldn&apos;t find the instructor you were looking for. They may have moved or the ID is incorrect.</p>
            <Link href="/mentors" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primaryHover transition-all">
                <ArrowLeft size={20} /> Back to Instructors
            </Link>
        </div>
      </div>
    );
  }

  // 4. Find courses related to this mentor
  const mentorCourses = courses.filter(c => mentor.courses && mentor.courses.includes(c.id));

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Back Link */}
         <Link href="/mentors" className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to Instructors
         </Link>

         {/* Header Profile Section */}
         <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg shrink-0 relative">
               <Image 
                 src={mentor.image} 
                 alt={mentor.name} 
                 width={160} 
                 height={160}
                 className="w-full h-full object-cover" 
               />
            </div>
            <div className="text-center md:text-left flex-1">
               <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{mentor.specialization}</span>
               <h1 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-2">{mentor.name}</h1>
               <p className="text-lg text-slate-600 mb-6">{mentor.role}</p>
               
               <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-dark mb-6">
                  <span className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg"><Star className="text-yellow-500" size={18} fill="currentColor"/> {mentor.rating} Rating</span>
                  <span className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg"><Users className="text-slate-400" size={18}/> {mentor.students} Students</span>
                  <span className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg"><BookOpen className="text-slate-400" size={18}/> {mentorCourses.length} Courses</span>
               </div>

               <div className="text-slate-500 leading-relaxed text-base md:text-lg">
                  {mentor.bio}
               </div>
            </div>
         </div>

         {/* Courses Grid */}
         <div className="border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold text-dark mb-8">Courses by {mentor.name}</h2>
            
            {mentorCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mentorCourses.map(course => (
                        <Link key={course.id} href={`/courses/${course.id}`} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <Image 
                                      src={course.image} 
                                      alt={course.title} 
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <span className="text-lg font-bold text-dark">₦{course.price.toLocaleString()}</span>
                                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">View Course</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                    <p className="text-slate-500">No active courses found for this instructor.</p>
                </div>
            )}
         </div>

      </div>
    </div>
  );
}