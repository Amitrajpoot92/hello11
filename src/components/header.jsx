import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Car, Key, User, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Ride', path: '/ride', icon: <Car size={20} /> },
    { name: 'Rent', path: '/rent', icon: <Key size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
  ];

  return (
    <>
      {/* --- TOP BAR: BRANDING --- */}
      <header className="fixed top-0 w-full z-[60] px-6 py-5 pointer-events-none">
        <div className="container mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/5 p-3 px-6 rounded-2xl shadow-2xl pointer-events-auto">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black tracking-[-0.1em] text-white italic cursor-pointer group"
            onClick={() => navigate('/')}
          >
            HELLO <span className="text-yellow-400 group-hover:text-white transition-colors duration-300">11</span>
          </motion.div>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91XXXXXXXXXX" 
            className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-xl text-black font-black text-[10px] uppercase tracking-tighter shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300"
          >
            <Phone size={14} fill="currentColor" /> Call Now
          </motion.a>
        </div>
      </header>

      {/* --- BOTTOM BAR: NAVIGATION --- */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-[400px]">
        <div className="relative bg-[#0c0c0c]/90 backdrop-blur-3xl rounded-[2.5rem] p-1.5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] border border-white/10 flex justify-between items-center px-1">
          
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center gap-1 py-3.5 px-1 flex-1 transition-all duration-500 rounded-2xl ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                {/* Active Pill (The Yellow Highlight) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-yellow-400 rounded-[1.8rem] shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Visual Content */}
                <span className="relative z-10">
                  {item.icon}
                </span>
                <span className={`relative z-10 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-110' : 'opacity-50 scale-100'
                }`}>
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* Top Decorative Glow Line */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_15px_#facc15]" />
        </div>
      </nav>

      {/* Desktop/Layout Spacer */}
      <div className="h-24 md:h-0" />
    </>
  );
};

export default Header;