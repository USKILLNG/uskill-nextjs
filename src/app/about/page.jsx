export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-dark mb-6">About USKILL</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          USKILL.NG is Nigeria&#39;s premier ed-tech platform, dedicated to bridging the skills gap in Africa. 
          We believe that quality education should be accessible, affordable, and practical. 
          Our mission is to empower the next generation of African talent with high-income digital skills 
          that are in demand globally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">Our Mission</h3>
              <p className="text-sm text-slate-500">To democratize access to high-quality tech education.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="text-sm text-slate-500">A continent where talent meets opportunity through skill mastery.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">Our Values</h3>
              <p className="text-sm text-slate-500">Excellence, Accessibility, and Community.</p>
           </div>
        </div>
      </div>
    </div>
  );
}