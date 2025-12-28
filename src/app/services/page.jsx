import Link from "next/link";
import { Briefcase, MonitorPlay, Users } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Beyond online courses, we partner with individuals and companies to build capacity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 border border-slate-100 rounded-3xl hover:border-primary transition-colors group">
            <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Corporate Training</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Upskill your entire workforce with custom curriculums designed for your company&apos;s specific stack and needs.
            </p>
            <Link href="#" className="text-blue-600 font-bold hover:underline">Contact Sales &rarr;</Link>
          </div>

          <div className="p-8 border border-slate-100 rounded-3xl hover:border-primary transition-colors group">
            <div className="h-14 w-14 bg-pink-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">1-on-1 Mentorship</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Get paired with a senior industry expert who will guide your career, review your code, and help you land jobs.
            </p>
            <Link href="#" className="text-primary font-bold hover:underline">Find a Mentor &rarr;</Link>
          </div>

          <div className="p-8 border border-slate-100 rounded-3xl hover:border-primary transition-colors group">
            <div className="h-14 w-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <MonitorPlay size={28} />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Curriculum Development</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We help schools and bootcamps design world-class tech curriculums that are up-to-date with industry standards.
            </p>
            <Link href="#" className="text-purple-600 font-bold hover:underline">Partner with Us &rarr;</Link>
          </div>

        </div>
      </div>
    </div>
  );
}