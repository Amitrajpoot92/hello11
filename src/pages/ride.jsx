import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Clock, Star, ShieldCheck, Zap } from 'lucide-react';

// --- IMAGES IMPORT (Correct Way) ---
import car1 from '../assets/cars/car1.webp';
import car2 from '../assets/cars/car2.webp';
import car3 from '../assets/cars/car3.webp';
import car4 from '../assets/cars/car4.webp';
import car5 from '../assets/cars/car5.webp';
import car6 from '../assets/cars/car6.webp';

const rideCategories = [
  {
    id: 'local',
    title: "Local Ride",
    desc: "Within Khalilabad City",
    img: car1, // Imported variable use kiya
    price: "Starts @ ₹199",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 'outstation',
    title: "Outstation",
    desc: "Lucknow, GKP, Basti & More",
    img: car2,
    price: "Starts @ ₹9/km",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 'hourly',
    title: "Hourly Rental",
    desc: "Book for 4, 8, or 12 hours",
    img: car3,
    price: "Starts @ ₹899",
    color: "from-purple-500 to-pink-500"
  }
];

const Ride = () => {
  const [selected, setSelected] = useState('local');

  // Function to get the large car image based on selection
  const getHeroImage = () => {
    if (selected === 'local') return car4;
    if (selected === 'outstation') return car5;
    return car6;
  };

  return (
    <div className="bg-black min-h-screen pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
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
                selected === cat.id ? 'border-yellow-400 bg-white/5 shadow-[0_0_30px_rgba(250,204,21,0.1)]' : 'border-white/5 bg-[#0c0c0c]'
              }`}
            >
              <div className="relative z-10">
                <h3 className={`text-2xl font-black italic uppercase tracking-tight ${selected === cat.id ? 'text-yellow-400' : 'text-white'}`}>
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">{cat.desc}</p>
                <div className="mt-6 text-white font-bold text-lg">{cat.price}</div>
              </div>

              {/* Background Car Image */}
              <motion.img 
                src={cat.img} 
                alt={cat.title}
                className={`absolute bottom-0 -right-4 w-48 h-auto object-contain transition-all duration-700 pointer-events-none ${
                  selected === cat.id ? 'opacity-70 scale-110 grayscale-0' : 'opacity-20 grayscale'
                }`}
              />
              
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
            <div className="relative h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-yellow-400/5 blur-[100px] rounded-full" />
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selected}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={getHeroImage()}
                  className="w-full h-full object-contain relative z-10"
                />
              </AnimatePresence>
            </div>

            {/* Right: Quick Action Form */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                   <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest mb-2">Service Type</p>
                   <h4 className="text-white text-3xl font-black italic uppercase tracking-tighter">
                     {selected} package
                   </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 group hover:border-yellow-400/30 transition-all">
                    <MapPin className="text-yellow-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Pickup Point (e.g. KLD Station)" 
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600 italic"
                    />
                  </div>
                  <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/5 group hover:border-yellow-400/30 transition-all">
                    <Clock className="text-yellow-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Pickup Time" 
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600 italic"
                    />
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 py-6 rounded-2xl text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(250,204,21,0.2)] transition-all duration-300"
              >
                Book {selected} Now <ArrowRight size={20} strokeWidth={3} />
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Ride;