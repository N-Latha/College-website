import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Address */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 inline-block">
              <img src="/Srit.jpg" alt="SRIT Logo" className="w-14 h-14 object-contain bg-white rounded-lg p-1" />
              <span className="text-3xl font-black font-heading tracking-tighter text-white uppercase leading-none">
                SRIT
              </span>
            </Link>
            <div className="space-y-4 text-secondary-400 text-sm leading-relaxed mt-4">
              <p className="flex items-start gap-3 group">
                 <MapPin size={18} className="text-primary-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                 <span>123 Knowledge Avenue, Tech City, <br/>Innovation State 456001</span>
              </p>
              <p className="flex items-center gap-3 group">
                 <Phone size={18} className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" />
                 <span>+91 9876543210</span>
              </p>
              <p className="flex items-center gap-3 group">
                 <Mail size={18} className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" />
                 <span>info@srit.ac.in</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500 relative inline-block">
               Quick Links
               <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-4 text-secondary-300 text-sm font-bold tracking-wide mt-4">
              {['Home', 'Departments', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500 relative inline-block">
               Academics
               <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h4>
            <ul className="space-y-4 text-secondary-300 text-sm">
              {['Computer Science', 'Electronics & Comm', 'Mechanical Engg', 'Civil Engineering'].map((item) => (
                <li key={item}>
                  <Link to="/departments" className="hover:text-primary-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500 relative inline-block">
               Follow Us
               <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500"></span>
            </h4>
            <div className="flex gap-4 mt-4">
              {[
                { icon: Facebook, label: 'Facebook' }, 
                { icon: Instagram, label: 'Instagram' }, 
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-secondary-900 border border-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all shadow-lg hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-secondary-500 text-xs mt-6 leading-relaxed">
               Join our vibrant community online and stay updated with the latest campus news, events, and achievements.
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-xs font-bold tracking-wider">
            © 2026 SRIT. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-500 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;