"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service (e.g., Sentry)
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} />
        </div>
        
        <h2 className="text-3xl font-extrabold text-dark mb-3">Something went wrong!</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          We encountered an unexpected error. Our team has been notified. 
          Please try refreshing the page or return home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="flex items-center justify-center gap-2 bg-dark text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          <Link 
            href="/"
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl hover:bg-slate-50 hover:text-primary transition-all"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        {/* Dev Mode Only: Show Error Details */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-slate-100 rounded-lg text-left overflow-x-auto">
            <p className="text-xs font-mono text-red-600 whitespace-pre-wrap">
              {error.message || "Unknown Error"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}