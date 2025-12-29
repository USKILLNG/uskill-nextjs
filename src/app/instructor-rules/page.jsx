import { CheckCircle2, XCircle } from 'lucide-react';

export default function InstructorRulesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-dark mb-8">Instructor Rules & Guidelines</h1>
        
        <div className="space-y-8">
           <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle2/> Do&apos;s</h2>
              <ul className="space-y-3 text-green-800/80">
                 <li>• Provide high-quality audio and video content.</li>
                 <li>• Engage with students in the Q&A section regularly.</li>
                 <li>• Keep course content updated with industry standards.</li>
                 <li>• Promote your course using honest marketing tactics.</li>
              </ul>
           </div>

           <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2"><XCircle/> Don&apos;ts</h2>
              <ul className="space-y-3 text-red-800/80">
                 <li>• Do not post misleading course titles or descriptions.</li>
                 <li>• Do not spam students with promotional emails.</li>
                 <li>• Do not plagiarize content from other instructors.</li>
                 <li>• Do not redirect students to external payment platforms.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}