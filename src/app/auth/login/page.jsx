"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { Loader2, Github, Facebook, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Define Validation Schema
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  
  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Handler for Social Login (No validation needed)
  const handleSocialLogin = async () => {
    setIsLoading(true);
    await login();
  };

  // Handler for Email Form (Only fires if validation passes)
  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("Form Validated:", data); // For debugging
    await login(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-dark p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold text-white tracking-tighter mb-2">
              USKILL<span className="text-primary">.NG</span>
            </h1>
            <p className="text-slate-300 text-sm">Welcome back to your learning journey.</p>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-dark">Log in or Sign up</h2>
            <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-1">Dev Mode: Validation Active</p>
          </div>

          <div className="space-y-3">
            {/* Google Button */}
            <button
              onClick={handleSocialLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95 disabled:opacity-70"
            >
              {isLoading ? (
                 <Loader2 className="animate-spin text-primary" size={20} /> 
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            {/* GitHub Button */}
            <button
              onClick={handleSocialLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-[#24292e] text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-all shadow-sm active:scale-95 disabled:opacity-70"
            >
              <Github size={20} />
              Continue with GitHub
            </button>

            {/* Facebook Button */}
            <button
              onClick={handleSocialLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-all shadow-sm active:scale-95 disabled:opacity-70"
            >
              <Facebook size={20} />
              Continue with Facebook
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400">Or continue with email</span>
            </div>
          </div>

          {/* Validated Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <input 
                    {...register("email")}
                    type="email" 
                    disabled={isLoading}
                    placeholder="you@example.com" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-primary'} focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`} 
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-3 text-red-500">
                      <AlertCircle size={20} />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-medium ml-1">{errors.email.message}</p>
                )}
             </div>
             <button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-dark text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-dark/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Logging in..." : "Log In"}
             </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            By clicking continue, you agree to our <Link href="#" className="underline hover:text-dark">Terms</Link> and <Link href="#" className="underline hover:text-dark">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}