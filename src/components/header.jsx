import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Car, Key, User, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Ride', path: '/ride', icon: <Car size={20} /> },
    { name: 'Rent', path: '/rent', icon: <Key size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
  ];

  return (
    <>
      {/* --- ELITE TOP LOGO BAR --- */}
      <header className="fixed top-0 w-full z-[60] px-6 py-5 pointer-events-none">
        <div className="container mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/5 p-3 px-6 rounded-2xl shadow-2xl pointer-events-auto">
          {/* Logo click par home navigate karega */}
          <div 
            className="text-2xl font-black tracking-[-0.1em] text-white italic cursor-pointer group"
            onClick={() => navigate('/')}
          >
            HELLO<span className="text-yellow-400 group-hover:text-white transition-colors">11</span>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91XXXXXXXXXX" 
            className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-xl text-black font-black text-[10px] uppercase tracking-tighter shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:bg-white transition-colors"
          >
            <Phone size={14} fill="black" /> Call Now
          </motion.a>
        </div>
      </header>

      {/* --- FUTURISTIC BOTTOM NAVBAR --- */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[380px]">
        <div className="relative bg-[#0c0c0c]/90 backdrop-blur-2xl rounded-[2.5rem] p-2 shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-white/10 flex justify-between items-center px-2">
          
          {navItems.map((item) => {
            // Match logic for active state
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center gap-1.5 px-5 py-3 transition-all duration-500 rounded-2xl ${
                  isActive ? 'text-black' : 'text-gray-500 hover:text-white'
                }`}
              >
                {/* Active Pill Background Animation */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-yellow-400 rounded-2xl shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Icon & Label */}
                <span className="relative z-10">
                  {item.icon}
                </span>
                <span className={`relative z-10 text-[9px] font-black uppercase tracking-[0.15em] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* Top Yellow Detail Line */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-yellow-400 shadow-[0_0_15px_#facc15] rounded-full" />
        </div>
      </nav>

      {/* Header spacer for desktop */}
      <div className="h-20 md:h-0" />
    </>
  );
};

export default Header;