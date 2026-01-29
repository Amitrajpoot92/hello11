import React from 'react';
import { ArrowRight, CirclePercent } from 'lucide-react';

const Hero = () => {
  const metalRates = [
    { metal: "Gold (24K)", price: "₹7,250", unit: "per gram", trend: "+0.5%" },
    { metal: "Gold (22K)", price: "₹6,645", unit: "per gram", trend: "-0.2%" },
    { metal: "Silver", price: "₹92,000", unit: "per kg", trend: "+1.2%" },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Jewelry Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block mb-6">
             <span className="px-6 py-2 border border-[#d3a12a] text-[#f5d54e] text-xs tracking-[0.5em] uppercase rounded-full bg-[#d3a12a]/10 backdrop-blur-sm">
               The Royal Legacy
             </span>
          </div>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-[1.1]">
            Unveiling <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d3a12a] via-[#f5d54e] to-[#d3a12a]">Eternal</span> <br/> Masterpieces
          </h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-[#d3a12a] shadow-[0_10px_30px_rgba(211,161,42,0.3)] text-[#1a1a1a] px-12 py-5 font-bold hover:bg-[#f5d54e] hover:-translate-y-1 transition-all duration-300 rounded-full tracking-wider">
              VIEW COLLECTIONS
            </button>
            <button className="group text-white py-2 flex items-center gap-3 text-lg font-light hover:text-[#f5d54e] transition-all">
              Our Craft Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
            </button>
          </div>
        </div>
      </section>

      {/* --- LIVE RATES CARD (Now with #0f2d2a) --- */}
      <section id="rates" className="relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border-b-4 border-[#d3a12a] rounded-[2rem] p-1 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              {/* Header Tile with New Green #0f2d2a */}
              <div className="p-8 text-center md:text-left bg-[#0f2d2a] flex flex-col justify-center">
                <h3 className="text-[#f5d54e] text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                  <CirclePercent size={20}/> Live Rates
                </h3>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Updated Just Now</p>
              </div>

              {/* Rate Tiles */}
              {metalRates.map((item, index) => (
                <div key={index} className="p-8 group hover:bg-[#faf9f6] transition-colors">
                  <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-2">{item.metal}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-black text-[#1a1a1a] group-hover:text-[#0f2d2a] transition-colors">{item.price}</p>
                    <span className={`text-xs font-bold mb-1 ${item.trend.startsWith('+') ? 'text-[#0b9c42]' : 'text-red-500'}`}>
                      {item.trend}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">{item.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;