import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Gem, Sparkles } from 'lucide-react';

const Trust = () => {
  const features = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Purity Gold",
      desc: "BIS 916 Hallmarked",
      color: "from-amber-200 to-yellow-500",
      offset: "lg:mt-0"
    },
    {
      icon: <Gem size={36} />,
      title: "Gem Quality",
      desc: "GIA & IGI Certified",
      color: "from-emerald-200 to-green-500",
      offset: "lg:mt-12"
    },
    {
      icon: <Truck size={36} />,
      title: "Secure Care",
      desc: "Fully Insured Delivery",
      color: "from-blue-200 to-blue-500",
      offset: "lg:mt-0"
    },
    {
      icon: <RotateCcw size={36} />,
      title: "Fair Value",
      desc: "Transparent Buyback",
      color: "from-rose-200 to-rose-500",
      offset: "lg:mt-12"
    }
  ];

  return (
    <section className="py-24 bg-[#faf9f6] relative overflow-hidden">
      {/* Background Luxury Element */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Sparkles size={400} className="text-[#d3a12a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header - High Fashion Look */}
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20 border-b border-gray-100 pb-10">
          <span className="text-7xl font-serif text-[#0f2d2a] opacity-10">01</span>
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">Our Sacred <span className="italic text-[#d3a12a]">Promises</span></h3>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">The Pillars of JewelCraft Excellence</p>
          </div>
        </div>

        {/* --- INTERACTIVE ASYMMETRIC GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative ${item.offset} transition-all duration-1000`}
            >
              {/* The "Ghost" Card Behind */}
              <div className="absolute inset-0 bg-[#0f2d2a] rounded-[3rem] translate-x-3 translate-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"></div>

              {/* Main Card */}
              <div className="bg-white p-10 rounded-[3rem] h-full shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center group-hover:bg-[#0f2d2a] group-hover:border-transparent transition-all duration-700 overflow-hidden">
                
                {/* Floating Icon Sphere */}
                <div className="relative mb-10">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 scale-150`}></div>
                  
                  <div className="w-20 h-20 rounded-full bg-[#faf9f6] text-[#0f2d2a] flex items-center justify-center relative z-10 shadow-inner group-hover:scale-110 group-hover:bg-[#d3a12a] transition-all duration-700 transform group-hover:-translate-y-4">
                    {item.icon}
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <h4 className="text-2xl font-serif text-[#1a1a1a] group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-[#d3a12a] mx-auto group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-gray-400 group-hover:text-white/60 text-sm font-medium tracking-wide transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Animated Bottom Detail */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#d3a12a] animate-ping"></div>
                   <span className="text-[10px] text-[#f5d54e] font-bold tracking-widest uppercase">Verified Luxury</span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trust;