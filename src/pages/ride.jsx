import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Clock, Star, ShieldCheck, Zap } from 'lucide-react';

const rideCategories = [
  {
    id: 'local',
    title: "Local Ride",
    desc: "Within Khalilabad City",
    img: "/car1.webp", // Path to your car images
    price: "Starts @ ₹199",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 'outstation',
    title: "Outstation",
    desc: "Lucknow, GKP, Basti & More",
    img: "/car2.webp",
    price: "Starts @ ₹9/km",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 'hourly',
    title: "Hourly Rental",
    desc: "Book for 4, 8, or 12 hours",
    img: "/car3.webp",
    price: "Starts @ ₹899",
    color: "from-purple-500 to-pink-500"
  }
];

const Ride = () => {
  const [selected, setSelected] = useState('local');

  return (
    <div className="bg-black min-h-screen pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header - Minimal & Visual */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            SELECT <br /> <span className="text-yellow-400">YOUR RIDE</span>
          </h1>
          <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-xs border-l-2 border-yellow-400 pl-4">
            Elite Fleet • Verified Drivers • Instant Pickup
          </p>
        </div>

        {/* Visual Category Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {rideCategories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(cat.id)}
              className={`relative overflow-hidden rounded-[2.5rem] p-8 cursor-pointer transition-all duration-500 border-2 ${
                selected === cat.id ? 'border-yellow-400 bg-white/5' : 'border-white/5 bg-[#0c0c0c]'
              }`}
            >
              <div className="relative z-10">
                <h3 className={`text-2xl font-black italic uppercase tracking-tight ${selected === cat.id ? 'text-yellow-400' : 'text-white'}`}>
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">{cat.desc}</p>
                <div className="mt-6 text-white font-bold text-lg">{cat.price}</div>
              </div>

              {/* Background Car Image Animation */}
              <motion.img 
                src={cat.img} 
                alt={cat.title}
                className={`absolute bottom-0 -right-4 w-48 h-auto object-contain opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 ${selected === cat.id ? 'opacity-60 scale-110 grayscale-0' : ''}`}
              />
              
              {/* Active Indicator Glow */}
              {selected === cat.id && (
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5 blur-3xl`} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic Booking Interface */}
        <div className="bg-[#0c0c0c] rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Graphic Visual */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/10 blur-[80px] rounded-full" />
              <motion.img 
                key={selected}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                src={selected === 'local' ? '/car4.webp' : selected === 'outstation' ? '/car5.webp' : '/car6.webp'}
                className="w-full h-auto object-contain relative z-10"
              />
              <div className="mt-8 flex justify-center gap-8">
                <div className="text-center">
                  <ShieldCheck className="text-yellow-400 mx-auto mb-2" size={24} />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Safe Ride</p>
                </div>
                <div className="text-center">
                  <Zap className="text-yellow-400 mx-auto mb-2" size={24} />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Quick ETA</p>
                </div>
                <div className="text-center">
                  <Star className="text-yellow-400 mx-auto mb-2" size={24} />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Top Rated</p>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Form */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                   <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest mb-2">Selected Mode</p>
                   <h4 className="text-white text-3xl font-black italic uppercase tracking-tighter">
                     {selected} Service
                   </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                    <MapPin className="text-yellow-400" size={20} />
                    <span className="text-gray-400 text-sm font-medium italic">Enter Pickup Point...</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                    <Clock className="text-yellow-400" size={20} />
                    <span className="text-gray-400 text-sm font-medium italic">Select Date & Time...</span>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 py-6 rounded-2xl text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(250,204,21,0.2)]"
              >
                Confirm {selected} Booking <ArrowRight size={20} strokeWidth={3} />
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Ride;