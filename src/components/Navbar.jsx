"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/components/AuthProvider';
import { useCart } from '@/context/CartContext';
import { 
  Menu, X, ChevronDown, Compass, BookOpen, Code, PenTool, TrendingUp, 
  LogOut, User, Bell, ShoppingCart, Settings, CreditCard, Heart, FileText 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to close mobile menu automatically
  const closeMenu = () => setIsOpen(false);

  const tracks = [
    { name: 'Development', icon: <Code size={18} />, href: '/tracks/development' },
    { name: 'Design', icon: <PenTool size={18} />, href: '/tracks/design' },
    { name: 'Marketing', icon: <TrendingUp size={18} />, href: '/tracks/marketing' },
    { name: 'Academics', icon: <BookOpen size={18} />, href: '/tracks/academics' },
  ];

  const mainLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 top-0 ${scrolled ? 'glass shadow-sm' : 'bg-transparent glass'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-extrabold tracking-tighter text-dark">
                USKILL<span className="text-primary">.NG</span>
              </span>
            </Link>

            {/* Desktop Tracks */}
            <div className="hidden md:block relative" 
                 onMouseEnter={() => setShowTracks(true)} 
                 onMouseLeave={() => setShowTracks(false)}>
              <button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors py-2">
                <Compass size={18} /> Tracks <ChevronDown size={14} className={`transition-transform ${showTracks ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showTracks && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    {tracks.map((track) => (
                      <Link key={track.name} href={track.href} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                        {track.icon} {track.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-4 text-slate-600">
               <button className="hover:text-primary transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
               </button>
               
               <Link href="/cart" className="hover:text-primary transition-colors relative">
                  <ShoppingCart size={20} />
                  {cart.length > 0 && (
                     <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                        {cart.length}
                     </span>
                  )}
               </Link>
            </div>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <Link href="/teach" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Teach
            </Link>

            {user ? (
              <div className="relative"
                   onMouseEnter={() => setShowProfileMenu(true)}
                   onMouseLeave={() => setShowProfileMenu(false)}>
                
                <button className="flex items-center gap-3 pl-2 focus:outline-none">
                  <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 overflow-hidden">
                    {user.photoURL ? (
                      <Image src={user.photoURL} alt="User" className="w-full h-full object-cover" width={36} height={36} />
                    ) : (
                      user.displayName?.[0] || 'U'
                    )}
                  </div>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden mt-2 z-50 origin-top-right"
                    >
                      <div className="px-4 py-4 border-b border-slate-50 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 overflow-hidden shrink-0">
                           {user.photoURL ? (
                              <Image src={user.photoURL} alt="User" className="w-full h-full object-cover" width={40} height={40} />
                           ) : (
                              user.displayName?.[0] || 'U'
                           )}
                        </div>
                        <div className="overflow-hidden">
                           <p className="text-sm font-bold text-dark truncate">{user.displayName || 'User'}</p>
                           <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                      </div>
                      
                      <div className="py-2">
                         <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Learning</div>
                         <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                           <BookOpen size={16} /> My Learning
                         </Link>
                         <Link href="/cart" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                           <ShoppingCart size={16} /> My Cart 
                           {cart.length > 0 && <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">{cart.length}</span>}
                         </Link>
                      </div>

                      <div className="border-t border-slate-50 py-2">
                         <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Instructor</div>
                         <Link href="/dashboard/teacher" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                           <PenTool size={16} /> Instructor Dashboard
                         </Link>
                      </div>

                      <div className="border-t border-slate-50 py-2">
                         <div className="px-4 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Account</div>
                         <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                           <Settings size={16} /> Settings
                         </Link>
                      </div>
                      
                      <div className="border-t border-slate-50 p-2">
                         <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors text-left">
                           <LogOut size={16} /> Log Out
                         </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4 pl-2">
                <Link href="/auth/login" className="text-sm font-semibold text-dark hover:text-primary transition-colors">Log In</Link>
                <Link href="/auth/signup">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-dark hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg transition-all">Get Started</motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <Link href="/cart" className="hover:text-primary transition-colors relative md:hidden">
                  <ShoppingCart size={20} className="text-slate-600"/>
                  {cart.length > 0 && <span className="absolute -top-2 -right-2 h-4 w-4 bg-primary text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">{cart.length}</span>}
             </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="py-2 border-b border-slate-100 mb-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Explore Tracks</p>
                {tracks.map((track) => (
                  <Link key={track.name} href={track.href} onClick={closeMenu} className="flex items-center gap-2 py-2 text-sm text-slate-600">
                    {track.icon} {track.name}
                  </Link>
                ))}
              </div>

              {mainLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeMenu} className="block py-2 text-base font-medium text-slate-700 hover:text-primary">
                  {link.name}
                </Link>
              ))}

              <Link href="/teach" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-700">Teach on USKILL</Link>
              
              {user ? (
                 <div className="pt-4 border-t border-slate-100 mt-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold overflow-hidden">
                           {user.photoURL ? <Image src={user.photoURL} alt="User" className="w-full h-full object-cover" width={40} height={40}/> : (user.displayName?.[0] || 'U')}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-dark">{user.displayName || 'User'}</p>
                            <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                    </div>
                    <Link href="/dashboard" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-600 hover:text-primary">Student Dashboard</Link>
                    <Link href="/dashboard/teacher" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-600 hover:text-primary">Instructor Dashboard</Link>
                    <Link href="/settings" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-600 hover:text-primary mb-1">Settings</Link>
                    <button onClick={() => {logout(); closeMenu();}} className="w-full py-2 text-base font-medium text-red-500 text-left">Log Out</button>
                 </div>
              ) : (
                <div className="mt-4 flex flex-col space-y-3">
                  <Link href="/auth/login" onClick={closeMenu} className="w-full block text-center py-3 font-semibold text-slate-700 border border-slate-200 rounded-xl">Log In</Link>
                  <Link href="/auth/signup" onClick={closeMenu} className="w-full block text-center py-3 bg-primary text-white font-bold rounded-xl">Get Started</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}