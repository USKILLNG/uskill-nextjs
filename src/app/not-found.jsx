import Link from "next/link";
import { MoveLeft, Search, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-20 pb-10">
      <div className="text-center max-w-xl">
        
        {/* Visual Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
          <div className="relative z-10 w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center shadow-lg border border-primary/10">
            <FileQuestion size={40} />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-dark tracking-tighter mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8 text-lg">
          Sorry, we couldn&#39;t find the page you&#39;re looking for. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-primaryHover transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
          >
            <MoveLeft size={18} />
            Back to Home
          </Link>
          <Link 
            href="/courses"
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 hover:text-primary transition-all"
          >
            <Search size={18} />
            Browse Courses
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="border-t border-slate-200 pt-8 flex justify-center gap-6 text-sm text-slate-400 font-medium">
          <Link href="/help" className="hover:text-primary transition-colors">Help Center</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}