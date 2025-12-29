import Image from "next/image";
import { instructors } from "@/lib/instructors";
import Link from "next/link";
import { Star, Users } from "lucide-react";

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark mb-8">Find a Mentor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {instructors.map((mentor) => (
              <Link key={mentor.id} href={`/mentors/${mentor.id}`} className="group">
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-100 group-hover:border-primary transition-colors relative">
                       <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{mentor.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{mentor.role}</p>
                    <div className="flex justify-center gap-4 text-xs font-bold text-dark mt-4">
                       <span className="flex items-center gap-1 text-yellow-500"><Star size={14} fill="currentColor"/> {mentor.rating}</span>
                       <span className="flex items-center gap-1 text-slate-400"><Users size={14}/> {mentor.students}</span>
                    </div>
                 </div>
              </Link>
           ))}
        </div>
      </div>
    </div>
  );
}