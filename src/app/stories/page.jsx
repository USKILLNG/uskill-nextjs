import { successStories } from "@/lib/instructors";
import Image from 'next/image';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dark mb-12 text-center">Student Success Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {successStories.map((story) => (
              <div key={story.id} className="flex flex-col md:flex-row gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                 <div className="w-full md:w-32 h-32 shrink-0 rounded-2xl overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="text-lg text-slate-700 italic mb-4">&ldquo;{story.quote}&rdquo;</p>
                    <h3 className="font-bold text-dark">{story.name}</h3>
                    <p className="text-primary text-sm font-bold">{story.role}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}