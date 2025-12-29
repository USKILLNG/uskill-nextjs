"use client";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              <h1 className="text-4xl font-bold text-dark mb-4">Get in touch</h1>
              <p className="text-slate-600 mb-8">Have questions about a course? Need help with your account? We&apos;re here to help.</p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm"><Mail className="text-primary"/></div>
                    <div><div className="font-bold text-dark">Email</div><div className="text-slate-500">support@uskill.ng</div></div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm"><Phone className="text-primary"/></div>
                    <div><div className="font-bold text-dark">Phone</div><div className="text-slate-500">+234 800 USKILL</div></div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm"><MapPin className="text-primary"/></div>
                    <div><div className="font-bold text-dark">Office</div><div className="text-slate-500">Lagos, Nigeria</div></div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <input placeholder="First Name" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-primary" />
                    <input placeholder="Last Name" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-primary" />
                 </div>
                 <input placeholder="Email Address" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-primary" />
                 <textarea rows="4" placeholder="How can we help?" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-primary"></textarea>
                 <button className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3 rounded-xl transition-colors">Send Message</button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}