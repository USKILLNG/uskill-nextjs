"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { useCart } from '@/context/CartContext';
import { useNotifications } from '@/context/NotificationContext'; 
import { 
  Menu, X, ChevronDown, Compass, BookOpen, Code, PenTool, TrendingUp, 
  LogOut, User, Bell, ShoppingCart, Settings, Trash2, LayoutDashboard, CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotifications } = useNotifications();
   
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTracks, setShowTracks] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
  // Hide Navbar on Teacher Dashboard (it has its own sidebar)
  if (pathname?.startsWith('/dashboard/teacher')) {
    return null;
  }

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
    <nav className={`fixed w-full z-50 transition-all duration-300 top-0 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO & TRACKS */}
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-extrabold tracking-tighter text-dark">
                USKILL<span className="text-primary">.NG</span>
              </span>
            </Link>
            
            {/* Desktop Tracks Dropdown */}
            <div className="hidden md:block relative" onMouseEnter={() => setShowTracks(true)} onMouseLeave={() => setShowTracks(false)}>
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

          {/* DESKTOP NAV LINKS & ACTIONS */}
          <div className="hidden md:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">{link.name}</Link>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            <div className="flex items-center gap-4 text-slate-600">
               
               {/* Notifications Dropdown */}
               <div className="relative" onMouseEnter={() => setShowNotifications(true)} onMouseLeave={() => setShowNotifications(false)}>
                  <button className="hover:text-primary transition-colors relative flex items-center pt-1">
                      <Bell size={20} />
                      {unreadCount > 0 && <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                  </button>
                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }} 
                        className="absolute top-full right-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden mt-2 z-50 origin-top-right"
                      >
                        <div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                           <span className="text-sm font-bold text-dark">Notifications</span>
                           {notifications.length > 0 && <button onClick={markAllAsRead} className="text-xs text-primary font-bold hover:underline">Mark all read</button>}
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                           {notifications.length === 0 ? <div className="p-8 text-center text-slate-400 text-sm">No new notifications</div> : notifications.map(n => (
                                 <div key={n.id} onClick={() => markAsRead(n.id)} className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-3 ${!n.read ? 'bg-blue-50/30' : ''}`}>
                                    <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${!n.read ? 'bg-primary' : 'bg-slate-300'}`}></div>
                                    <div>
                                       <h4 className={`text-sm ${!n.read ? 'font-bold text-dark' : 'font-medium text-slate-600'}`}>{n.title}</h4>
                                       <p className="text-xs text-slate-500 mt-1 line-clamp-2">{n.message}</p>
                                       <p className="text-[10px] text-slate-400 mt-2">{n.time}</p>
                                    </div>
                                 </div>
                              ))}
                        </div>
                        {notifications.length > 0 && (
                           <div className="p-2 border-t border-slate-50 bg-slate-50/50 text-center">
                              <button onClick={clearNotifications} className="text-xs text-slate-500 hover:text-red-500 flex items-center justify-center gap-1 w-full py-1 transition-colors"><Trash2 size={12} /> Clear All</button>
                           </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               {/* Cart Icon */}
               <Link href="/cart" className="hover:text-primary transition-colors relative">
                  <ShoppingCart size={20} />
                  {cart.length > 0 && <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">{cart.length}</span>}
               </Link>
            </div>
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            <Link href="/teach" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Teach</Link>
            
            {/* AUTH STATE & PROFILE DROPDOWN */}
            {user ? (
              <div className="relative" onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
                <button className="flex items-center gap-3 pl-2 focus:outline-none">
                  <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20 overflow-hidden">
                    {user.photoURL ? <Image src={user.photoURL} alt="User" className="w-full h-full object-cover" width={36} height={36} /> : user.displayName?.[0] || 'U'}
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
                      <div className="p-4 border-b border-slate-50">
                        <p className="text-sm font-bold text-dark">{user.displayName || "User"}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                      <div className="p-2 space-y-1">
                        <Link href={user.role === 'instructor' ? "/dashboard/teacher" : "/dashboard"} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                          <LayoutDashboard size={16} /> Dashboard
                        </Link>
                        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                          <Settings size={16} /> Settings
                        </Link>
                         <Link href="/billing" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                          <CreditCard size={16} /> Billing
                        </Link>
                      </div>
                      <div className="border-t border-slate-50 p-2">
                          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors text-left">
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
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-dark hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg transition-all">
                    Get Started
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Tracks */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tracks</p>
                {tracks.map((track) => (
                  <Link key={track.name} href={track.href} onClick={closeMenu} className="flex items-center gap-3 p-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
                    <span className="text-primary">{track.icon}</span> {track.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-slate-100 my-2"></div>
              
              {/* Mobile Main Links */}
              <div className="space-y-2">
                {mainLinks.map((link) => (
                  <Link key={link.name} href={link.href} onClick={closeMenu} className="block p-2 text-sm font-medium text-slate-700 hover:text-primary">
                    {link.name}
                  </Link>
                ))}
                <Link href="/teach" onClick={closeMenu} className="block p-2 text-sm font-medium text-slate-700 hover:text-primary">Teach on USKILL</Link>
              </div>

              <div className="h-px bg-slate-100 my-2"></div>

              {/* Mobile Auth */}
              {user ? (
                 <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
                       <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                          {user.displayName?.[0] || 'U'}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-dark">{user.displayName}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                       </div>
                    </div>
                    <Link href={user.role === 'instructor' ? "/dashboard/teacher" : "/dashboard"} onClick={closeMenu} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600">
                       <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <button onClick={() => { logout(); closeMenu(); }} className="flex items-center gap-3 px-3 py-2 text-sm text-red-500 w-full text-left">
                       <LogOut size={18} /> Log Out
                    </button>
                 </div>
              ) : (
                <div className="flex flex-col gap-3 pt-2">
                  <Link href="/auth/login" onClick={closeMenu} className="w-full py-3 text-center text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50">
                    Log In
                  </Link>
                  <Link href="/auth/signup" onClick={closeMenu} className="w-full py-3 text-center text-sm font-bold text-white bg-dark rounded-xl hover:bg-slate-800">
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}