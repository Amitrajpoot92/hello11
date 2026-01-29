import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Clock, Calculator, Info, Bell, ArrowRight } from 'lucide-react';

const Rates = () => {
  const [weight, setWeight] = useState(1);
  const [metalType, setMetalType] = useState(7250); // Default 24K price

  const metalData = [
    { name: "Gold (24K)", price: 7250, unit: "per gram", trend: "+0.5%", up: true },
    { name: "Gold (22K)", price: 6645, unit: "per gram", trend: "-0.2%", up: false },
    { name: "Silver", price: 92, unit: "per gram", trend: "+1.2%", up: true },
    { name: "Platinum", price: 3450, unit: "per gram", trend: "+0.1%", up: true },
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-32">
      
      {/* --- HEADER SECTION --- */}
      <section className="bg-[#0f2d2a] pt-24 pb-16 px-6 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d3a12a]/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[#f5d54e] text-[10px] font-bold tracking-[0.4em] uppercase">Market Live</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight">
                Metal <span className="italic text-[#f5d54e]">Indices</span>
              </h1>
            </div>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl text-white text-[10px] font-bold tracking-widest uppercase transition-all mx-auto md:mx-0">
              <Bell size={14} className="text-[#f5d54e]" /> Set Price Alert
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* --- LIVE PRICE CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metalData.map((item, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 group hover:border-[#0f2d2a] transition-all duration-500">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{item.name}</p>
              <div className="flex items-end gap-2 mb-4">
                <h3 className="text-3xl font-black text-[#1a1a1a]">₹{item.price.toLocaleString()}</h3>
                <span className={`text-[10px] font-bold mb-2 flex items-center gap-1 ${item.up ? 'text-green-600' : 'text-red-500'}`}>
                  {item.up ? <TrendingUp size={12}/> : <TrendingDown size={12}/>}
                  {item.trend}
                </span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[10px] text-gray-400 italic">{item.unit}</span>
                <Clock size={14} className="text-gray-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- SMART PRICE CALCULATOR --- */}
          <div className="lg:col-span-1 bg-[#0f2d2a] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d3a12a]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="text-[#f5d54e]" size={24} />
                <h4 className="text-xl font-serif">Quick Estimator</h4>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] block mb-3 font-bold">Select Metal</label>
                  <select 
                    onChange={(e) => setMetalType(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#d3a12a]/50"
                  >
                    <option value="7250" className="bg-[#0f2d2a]">Gold 24K</option>
                    <option value="6645" className="bg-[#0f2d2a]">Gold 22K</option>
                    <option value="92" className="bg-[#0f2d2a]">Silver</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] block mb-3 font-bold">Weight (Grams)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#d3a12a]/50"
                  />
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/40 text-[10px] uppercase mb-1 tracking-widest">Estimated Metal Value</p>
                  <h2 className="text-4xl font-black text-[#f5d54e]">₹{(weight * metalType).toLocaleString()}</h2>
                  <p className="text-[8px] text-white/20 mt-2 uppercase tracking-tighter">*Excluding making charges & GST</p>
                </div>

                <button className="w-full bg-[#d3a12a] text-[#0f2d2a] py-5 rounded-2xl font-bold text-xs tracking-widest uppercase hover:bg-[#f5d54e] transition-all flex items-center justify-center gap-2 group">
                  Plan Your Purchase <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* --- MARKET INSIGHTS / CHART AREA --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm h-full">
               <div className="flex justify-between items-center mb-8">
                  <h4 className="text-xl font-serif text-[#1a1a1a]">Price Analysis</h4>
                  <div className="flex gap-2">
                    {['1D', '1W', '1M', '1Y'].map(t => (
                      <button key={t} className="px-4 py-2 rounded-xl text-[10px] font-bold border border-gray-100 hover:bg-[#0f2d2a] hover:text-white transition-all">{t}</button>
                    ))}
                  </div>
               </div>
               
               {/* Placeholder for actual Chart (e.g. Chart.js or Recharts) */}
               <div className="h-[300px] w-full bg-[#faf9f6] rounded-[2rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-300">
                  <TrendingUp size={40} className="mb-4 opacity-20" />
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Price Trend Visualization</p>
               </div>

               <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                    <Info className="text-blue-500 shrink-0" size={20} />
                    <div>
                      <h5 className="text-[10px] font-bold text-blue-900 uppercase tracking-widest mb-1">Expert Note</h5>
                      <p className="text-xs text-blue-800/70 leading-relaxed">Gold prices are currently stable. Good time for long-term investments in 24K bullion.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-amber-50/50 rounded-3xl border border-amber-100">
                    <ShieldCheck className="text-amber-500 shrink-0" size={20} />
                    <div>
                      <h5 className="text-[10px] font-bold text-amber-900 uppercase tracking-widest mb-1">Our Purity Promise</h5>
                      <p className="text-xs text-amber-800/70 leading-relaxed">All rates reflect official market values. We offer 100% buyback at current rates.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </main>

      <style jsx>{`
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
      `}</style>
    </div>
  );
};

export default Rates;