import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

// Mock Blog Data
const posts = [
  {
    id: 1, // We will use this ID for the URL
    title: "10 High-Income Skills to Learn in 2025",
    excerpt: "Discover the top skills that employers are looking for this year and how you can master them.",
    author: "Uzo Admin",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    category: "Career"
  },
  {
    id: 2,
    title: "Why React is Still King in Web Development",
    excerpt: "A deep dive into why React continues to dominate the frontend landscape despite new competitors.",
    author: "Sarah Tech",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    category: "Tech"
  },
  {
    id: 3,
    title: "Freelancing vs Full-Time: Which is Right for You?",
    excerpt: "Analyzing the pros and cons of the gig economy versus stability in the Nigerian tech market.",
    author: "Mike Jobs",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    category: "Lifestyle"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dark mb-2">USKILL Blog</h1>
        <p className="text-slate-500 mb-10">Insights, tutorials, and news from the tech world.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full">
              <Link href={`/blog/${post.id}`} className="block h-48 overflow-hidden relative group">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {post.category}
                </span>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <Link href={`/blog/${post.id}`}>
                   <h2 className="text-xl font-bold text-dark mb-3 leading-tight hover:text-primary transition-colors">{post.title}</h2>
                </Link>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                
                {/* UPDATED: This Link now points to the dynamic ID */}
                <Link href={`/blog/${post.id}`} className="text-primary font-bold text-sm hover:underline mt-auto inline-flex items-center">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}