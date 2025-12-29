import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-dark mb-4">Simple, Transparent Pricing</h1>
        <p className="text-slate-500 mb-12">Choose how you want to learn. No hidden fees.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {/* Card 1 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-500 mb-2">Pay Per Course</h3>
              <div className="text-3xl font-extrabold text-dark mb-6">₦5,000<span className="text-sm font-normal text-slate-400">/avg</span></div>
              <ul className="space-y-4 text-left mb-8">
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> Lifetime access</li>
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> Certificate of completion</li>
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> Instructor Q&A</li>
              </ul>
              <button className="w-full py-3 border-2 border-dark text-dark font-bold rounded-xl hover:bg-slate-50">Browse Courses</button>
           </div>

           {/* Card 2 (Featured) */}
           <div className="bg-dark p-8 rounded-3xl shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
              <h3 className="font-bold text-lg text-slate-300 mb-2">Pro Membership</h3>
              <div className="text-3xl font-extrabold mb-6">₦15,000<span className="text-sm font-normal text-slate-400">/month</span></div>
              <ul className="space-y-4 text-left mb-8">
                 <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-primary"/> Access to ALL courses</li>
                 <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-primary"/> Priority Support</li>
                 <li className="flex gap-3 text-sm text-slate-300"><Check size={18} className="text-primary"/> Exclusive Webinars</li>
              </ul>
              <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primaryHover shadow-lg">Get Started</button>
           </div>

           {/* Card 3 */}
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-500 mb-2">Team Plan</h3>
              <div className="text-3xl font-extrabold text-dark mb-6">Custom</div>
              <ul className="space-y-4 text-left mb-8">
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> 5+ Team Members</li>
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> Progress Dashboard</li>
                 <li className="flex gap-3 text-sm text-slate-600"><Check size={18} className="text-primary"/> Dedicated Account Manager</li>
              </ul>
              <button className="w-full py-3 border-2 border-dark text-dark font-bold rounded-xl hover:bg-slate-50">Contact Sales</button>
           </div>
        </div>
      </div>
    </div>
  );
}