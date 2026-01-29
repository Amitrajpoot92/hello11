import React from 'react';
import { Home, Gem, User, Sparkles } from 'lucide-react';

const Header = () => {
  // Updated navLinks for the 4 specific pages
  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={22} strokeWidth={1.5} /> },
    { name: 'Signature', href: '/signature', icon: <Sparkles size={22} strokeWidth={1.5} /> },
    { name: 'Collection', href: '/collections', icon: <Gem size={22} strokeWidth={1.5} /> },
    { name: 'About', href: '/about', icon: <User size={22} strokeWidth={1.5} /> },
  ];

  return (
    <>
      {/* --- DESKTOP HEADER (Top Navigation) --- */}
      <nav className="hidden md:block bg-[#0f2d2a] text-white sticky top-0 z-[100] border-b border-[#d3a12a]/30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 group cursor-pointer" onClick={() => window.location.href = '/'}>
              <h1 className="text-2xl font-serif font-bold text-[#d3a12a] tracking-[0.3em] transition-all group-hover:tracking-[0.4em]">
                JEWEL<span className="text-white">CRAFT</span>
              </h1>
              <p className="text-[8px] text-white/40 tracking-[0.6em] uppercase text-center">Bespoke Jewelry</p>
            </div>

            {/* Desktop Nav Links */}
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#f5d54e] transition-all duration-300"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d3a12a] transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Account Icon */}
            <div className="w-10 h-10 rounded-full border border-[#d3a12a]/30 flex items-center justify-center hover:bg-[#d3a12a] hover:text-[#0f2d2a] transition-all cursor-pointer">
              <User size={18} />
            </div>

          </div>
        </div>
      </nav>

      {/* --- MOBILE TOP LOGO BAR --- */}
      <header className="md:hidden bg-[#0f2d2a] text-center py-5 border-b border-[#d3a12a]/20 sticky top-0 z-[100] backdrop-blur-xl bg-opacity-95">
        <h1 className="text-xl font-serif font-bold text-[#d3a12a] tracking-[0.3em]" onClick={() => window.location.href = '/'}>
          JEWEL<span className="text-white">CRAFT</span>
        </h1>
        <div className="flex justify-center items-center gap-1 mt-1">
          <div className="h-[1px] w-4 bg-[#d3a12a]/40"></div>
          <p className="text-[7px] text-white/40 tracking-[0.5em] uppercase">Artisan Heritage</p>
          <div className="h-[1px] w-4 bg-[#d3a12a]/40"></div>
        </div>
      </header>

      {/* --- MOBILE FLOATING BOTTOM NAV --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[100]">
        <div className="bg-[#0f2d2a]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] px-6 py-4">
          <div className="flex justify-between items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center justify-center relative group"
              >
                {/* Active Indicator Dot (Optional styling) */}
                <div className="w-1 h-1 bg-[#f5d54e] rounded-full mb-1 opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100"></div>
                
                <div className="text-white/60 group-hover:text-[#f5d54e] group-active:scale-90 transition-all duration-300">
                  {link.icon}
                </div>
                
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover:text-[#f5d54e] mt-1 transition-all">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;