import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Home, Car, Key, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={12} /> },
    { name: 'Ride', path: '/ride', icon: <Car size={12} /> },
    { name: 'Rent', path: '/rent', icon: <Key size={12} /> },
    { name: 'About', path: '/about', icon: <User size={12} /> },
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-24 md:pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] md:w-[500px] h-[100px] bg-yellow-400/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* 1. Company Name - Center aligned for all views */}
        <div className="text-center mb-8 md:mb-12">
          <h3 
            className="text-3xl md:text-5xl font-black italic tracking-tighter cursor-pointer inline-block group" 
            onClick={() => navigate('/')}
          >
            HELLO<span className="text-yellow-400 group-hover:text-white transition-colors duration-300">11</span>
          </h3>
          <p className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1">
            The Gold Standard of Khalilabad
          </p>
        </div>

        {/* 2. Main Content Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          
          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full text-center md:text-left">
              Navigation
            </h4>
            <ul className="space-y-3 w-full">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => navigate(link.path)}
                    className="text-gray-500 hover:text-yellow-400 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center md:justify-start gap-2 group transition-all w-full"
                  >
                    <span className="text-yellow-400/30 group-hover:text-yellow-400 transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full text-center md:text-left">
              Reach Us
            </h4>
            <div className="space-y-4 w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 group">
                <MapPin size={14} className="text-yellow-400 shrink-0" />
                <span className="text-gray-500 text-[9px] font-bold uppercase text-center md:text-left">Khalilabad, UP</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 group">
                <Mail size={14} className="text-yellow-400 shrink-0" />
                <span className="text-gray-500 text-[9px] font-bold uppercase text-center md:text-left">support@hello11.in</span>
              </div>
            </div>
          </div>

          {/* Socials - Desktop only visible in grid, Mobile moves below */}
          <div className="hidden md:flex flex-col items-start">
            <h4 className="text-white font-black uppercase italic tracking-widest text-[9px] mb-4 border-b border-yellow-400/30 pb-1 w-full">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, color: '#facc15' }}
                  href="#" 
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Mobile Socials & Copyright - Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-6">
          {/* Socials for Mobile */}
          <div className="flex md:hidden gap-6">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <p className="text-gray-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">
              © 2026 HELLO11. Built for the Elite.
            </p>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-600 text-[8px] font-black uppercase tracking-[0.1em]">All Systems Live</span>
            </div>
          </div>
        </div>

      </div>

      {/* Spacer for Floating Mobile Nav */}
      <div className="h-8 md:hidden" />
    </footer>
  );
};

export default Footer;