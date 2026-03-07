import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/#campus-life" },
  { label: "Contact", href: "/#contact" }
];

const Header: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActive("Home");
    else if (path.startsWith('/department')) setActive("Departments");
    else if (path === '/admissions') setActive("Admissions");
    // Add logic for others based on hash if needed
  }, [location]);

  return (
    <>
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 shadow-sm`}>
        {/* 1️⃣ Top Bar (Information Bar) */}
        <div className="bg-secondary-900 text-white text-xs py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center relative">
          <div className="flex gap-6 items-center flex-wrap justify-center mb-2 md:mb-0">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary-500 transition-colors"><Phone size={14}/> +91 9876543210</a>
            <a href="mailto:info@srit.ac.in" className="flex items-center gap-2 hover:text-primary-500 transition-colors"><Mail size={14}/> info@srit.ac.in</a>
            <div className="flex gap-3 ml-2 border-l border-white/20 pl-4 hidden md:flex">
              <Facebook size={14} className="hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram size={14} className="hover:text-primary-500 cursor-pointer transition-colors" />
              <Linkedin size={14} className="hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="flex gap-4 font-bold tracking-wider">
            <Link to="#" className="hover:text-primary-500 transition-colors">Student Login</Link>
            <span className="text-white/30">|</span>
            <Link to="#" className="hover:text-primary-500 transition-colors">Staff Login</Link>
          </div>
        </div>

        {/* 2️⃣ Navigation Bar */}
        <div className={`w-full transition-all duration-300 px-4 md:px-12 py-3 md:py-4`}>
          <div className="flex justify-between items-center mx-auto container">
            
            {/* Left Side: Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/Srit.jpg" alt="SRIT Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform shadow-md bg-white rounded" />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-secondary-900 leading-none">
                  SRIT
                </span>
                <span className="text-[10px] uppercase font-bold text-secondary-500 tracking-widest hidden lg:block">
                  Srinivasa Ramanujan Institute of Technology
                </span>
              </div>
            </Link>
            
            {/* Right Side: Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-wide">
              {navItems.map((item) => {
                const isMegaMenu = item.label === "Departments";
                return (
                 <div
                   key={item.label}
                   className="relative"
                   onMouseEnter={() => isMegaMenu && setMegaMenuOpen(true)}
                   onMouseLeave={() => isMegaMenu && setMegaMenuOpen(false)}
                 >
                  <Link 
                     to={item.href}
                     className={`uppercase py-4 transition-all duration-300 hover:text-primary-500 relative group flex items-center gap-1 ${active === item.label ? 'text-primary-500' : 'text-secondary-600'}`}
                     onClick={() => setActive(item.label)}
                  >
                     {item.label}
                     {/* Hover Underline Animation */}
                     <span className={`absolute bottom-2 left-0 w-full h-0.5 bg-primary-500 transform origin-left transition-transform duration-300 ${active === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isMegaMenu && (
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-b-3xl border-t-0 border border-gray-100 p-8 overflow-hidden z-50 grid grid-cols-3 gap-8"
                        >
                          <div className="col-span-3 border-b border-gray-100 pb-2 mb-2 flex justify-between items-center">
                             <h4 className="font-bold text-secondary-900 uppercase tracking-widest text-sm flex items-center gap-2">
                                <ArrowRight size={16} className="text-primary-500" /> Explore Departments
                             </h4>
                             <Link to="/departments" className="text-xs font-bold uppercase tracking-wider text-primary-500 hover:text-primary-600 transition-colors">
                                View All Programs
                             </Link>
                          </div>
                          
                          <Link to="/department/cse" className="group flex flex-col gap-2 p-2 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">💻</div>
                                <span className="font-bold text-secondary-900 group-hover:text-primary-500 transition-colors">Computer Science</span>
                             </div>
                          </Link>

                          <Link to="/department/ece" className="group flex flex-col gap-2 p-2 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">🔌</div>
                                <span className="font-bold text-secondary-900 group-hover:text-primary-500 transition-colors">Electronics</span>
                             </div>
                          </Link>

                          <Link to="/department/mech" className="group flex flex-col gap-2 p-2 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-slate-600 group-hover:text-white transition-colors shadow-sm">⚙️</div>
                                <span className="font-bold text-secondary-900 group-hover:text-primary-500 transition-colors">Mechanical</span>
                             </div>
                          </Link>

                          <Link to="/department/civil" className="group flex flex-col gap-2 p-2 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">🏗️</div>
                                <span className="font-bold text-secondary-900 group-hover:text-primary-500 transition-colors">Civil</span>
                             </div>
                          </Link>

                          <Link to="/department/eee" className="group flex flex-col gap-2 p-2 transition-colors">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-colors shadow-sm">⚡</div>
                                <span className="font-bold text-secondary-900 group-hover:text-primary-500 transition-colors">Electrical</span>
                             </div>
                          </Link>
                          
                          <div className="col-span-3 bg-secondary-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between mt-6 shadow-md bg-[url('/College.jpg')] bg-cover bg-center relative overflow-hidden">
                             <div className="absolute inset-0 bg-secondary-900/90 mix-blend-multiply z-0"></div>
                             <div className="relative z-10 flex-1">
                               <h5 className="font-heading font-black text-2xl uppercase tracking-tighter mb-1">Admissions Open 2026-27</h5>
                               <span className="text-secondary-400 text-sm font-medium">Join the next generation of engineers. Explore our curriculum and eligibility.</span>
                             </div>
                             <Link to="/admissions" className="relative z-10 bg-primary-500 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-primary-900 transition-all shadow-lg mt-4 md:mt-0 whitespace-nowrap">
                                Apply Now
                             </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                 </div>
                )
              })}
              <div className="pl-4 border-l border-gray-200">
                <Link to="/admissions" className="bg-secondary-900 text-white px-6 py-2.5 rounded-full hover:bg-primary-500 transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-lg">
                  Apply <ArrowRight size={14} />
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Trigger */}
            <button onClick={() => setMenuOpen(true)} className="lg:hidden text-secondary-900 hover:text-primary-500 transition-colors p-2">
               <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary-950 z-[100] flex flex-col justify-center items-center p-8 overflow-hidden"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 p-4 text-white hover:text-primary-500 transition-colors z-10">
              <X size={32} strokeWidth={2} />
            </button>

            <ul className="space-y-6 text-center relative z-10 w-full max-w-lg">
              {navItems.map((item, i) => (
                <li key={item.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className="block text-3xl md:text-5xl font-black font-heading text-white hover:text-primary-500 transition-colors uppercase tracking-widest"
                      onClick={() => {
                        setActive(item.label);
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-white/10">
                 <Link to="/admissions" onClick={() => setMenuOpen(false)} className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-colors">
                    Apply Now
                 </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;