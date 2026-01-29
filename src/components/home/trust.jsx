import React from 'react';
import { motion } from 'framer-motion'; // Animation ke liye
import { ShieldCheck, Truck, RotateCcw, Gem, Sparkles } from 'lucide-react';

const Trust = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Purity Gold",
      desc: "BIS 916 Hallmarked",
      color: "from-amber-100 to-[#d3a12a]",
      glow: "shadow-amber-500/20"
    },
    {
      icon: <Gem size={32} />,
      title: "Gem Quality",
      desc: "GIA & IGI Certified",
      color: "from-emerald-100 to-emerald-600",
      glow: "shadow-emerald-500/20"
    },
    {
      icon: <Truck size={32} />,
      title: "Secure Care",
      desc: "Fully Insured Delivery",
      color: "from-blue-100 to-blue-600",
      glow: "shadow-blue-500/20"
    },
    {
      icon: <RotateCcw size={32} />,
      title: "Fair Value",
      desc: "Transparent Buyback",
      color: "from-rose-100 to-rose-600",
      glow: "shadow-rose-500/20"
    }
  ];

  return (
    <section className="py-20 bg-[#faf9f6] relative overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute -top-20 -right-20 opacity-5 pointer-events-none">
        <Sparkles size={300} className="text-[#d3a12a]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Fixed for Mobile Spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-[#d3a12a] pl-6"
        >
          <h3 className="text-4xl font-serif text-[#1a1a1a] leading-tight">
            Our Sacred <br/>
            <span className="italic text-[#d3a12a]">Promises</span>
          </h3>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] mt-3 font-bold">
            The Pillars of Excellence
          </p>
        </motion.div>

        {/* --- GRID: Optimized for Mobile & Laptop --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-white p-8 rounded-[2.5rem] h-full shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center relative overflow-hidden md:group-hover:bg-[#0f2d2a] md:group-hover:border-transparent transition-all duration-500">
                
                {/* Background Gradient Blob (Visible on Mobile) */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-3xl`}></div>

                {/* Icon Box */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-[#faf9f6] text-[#0f2d2a] flex items-center justify-center relative z-10 shadow-sm border border-gray-50 md:group-hover:bg-[#d3a12a] md:group-hover:text-[#0f2d2a] transition-all duration-500 shadow-inner`}>
                    {item.icon}
                  </div>
                  {/* Verified Badge - Always visible on Mobile */}
                  <div className="absolute -bottom-2 -right-2 bg-[#d3a12a] text-white p-1.5 rounded-full shadow-lg z-20">
                    <ShieldCheck size={12} strokeWidth={3} />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h4 className="text-xl font-serif text-[#1a1a1a] md:group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <div className="w-6 h-[1.5px] bg-[#d3a12a] mx-auto"></div>
                  <p className="text-gray-400 md:group-hover:text-white/60 text-xs font-medium tracking-wide">
                    {item.desc}
                  </p>
                </div>

                {/* Mobile Bottom Status - Dynamic Look */}
                <div className="mt-8 flex items-center gap-2 px-4 py-1.5 bg-[#faf9f6] rounded-full border border-gray-50 md:group-hover:bg-white/10 md:group-hover:border-transparent">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0b9c42] animate-pulse"></div>
                  <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase md:group-hover:text-[#f5d54e]">
                    Purity Verified
                  </span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trust;