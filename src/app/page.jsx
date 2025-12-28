import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[{ label: 'Courses', val: '50+' }, { label: 'Students', val: '15k+', color: 'text-primary' }, { label: 'Mentors', val: '120+' }, { label: 'Rating', val: '4.9', color: 'text-primary' }].map((stat, i) => (
                   <div key={i} className="p-6">
                       <div className={`text-4xl font-extrabold mb-2 ${stat.color || 'text-dark'}`}>{stat.val}</div>
                       <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
                   </div>
               ))}
           </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dark rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your life?</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Start your free trial today. No credit card required. Just pure learning.</p>
                    <button className="bg-primary hover:bg-primaryHover text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/50 transition-all hover:scale-105">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </div>
      </section>

      
    </main>
  );
}