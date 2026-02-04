import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Clock, ChevronRight } from 'lucide-react';

// --- IMAGES IMPORT ---
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
    img: car1, 
    price: "Starts @ ₹199",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 'outstation',
    title: "Outstation",
    desc: "Lucknow, GKP, Basti & More",
    img: car2,
    price: "Starts @ ₹9/km",
    color: "from-black to-gray-800"
  },
  {
    id: 'hourly',
    title: "Hourly Rental",
    desc: "Book for 4, 8, or 12 hours",
    img: car3,
    price: "Starts @ ₹899",
    color: "from-yellow-500 to-orange-500"
  }
];

const Ride = () => {
  const [selected, setSelected] = useState('local');

  const getHeroImage = () => {
    if (selected === 'local') return car4;
    if (selected === 'outstation') return car5;
    return car6;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-20 md:pt-32 pb-10 px-3 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 bg-yellow-500"></div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">
              Booking Engine
            </span>
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase">
            SELECT <br /> <span className="text-yellow-500">YOUR RIDE</span>
          </h1>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-16">
          {rideCategories.map((cat) => (
            <motion.div
              key={cat.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(cat.id)}
              className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 cursor-pointer transition-all duration-500 border-2 ${
                selected === cat.id 
                ? 'border-yellow-400 bg-white shadow-xl translate-y-[-5px]' 
                : 'border-gray-100 bg-white hover:border-yellow-200'
              }`}
            >
              <div className="relative z-10">
                <h3 className={`text-xl md:text-2xl font-black italic uppercase tracking-tight ${selected === cat.id ? 'text-black' : 'text-gray-400'}`}>
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">{cat.desc}</p>
                <div className={`mt-4 font-black text-lg ${selected === cat.id ? 'text-yellow-500' : 'text-gray-300'}`}>
                  {cat.price}
                </div>
              </div>

              {/* Background Car Image */}
              <motion.img 
                src={cat.img} 
                alt={cat.title}
                className={`absolute bottom-[-10px] md:bottom-0 -right-4 w-32 md:w-48 h-auto object-contain transition-all duration-700 pointer-events-none ${
                  selected === cat.id ? 'opacity-100 scale-110' : 'opacity-10 grayscale'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Booking Interface */}
        <div className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Left: Car Display */}
            <div className="relative h-48 md:h-80 flex items-center justify-center order-2 lg:order-1">
              <div className="absolute inset-0 bg-yellow-400/5 blur-[80px] rounded-full" />
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selected}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  src={getHeroImage()}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </AnimatePresence>
            </div>

            {/* Right: Action Form */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-yellow-400 text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase mb-2 block w-fit">
                    {selected} package
                  </span>
                  <h4 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
                    Quick Booking
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <MapPin className="text-yellow-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Pickup Point" 
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium"
                    />
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 focus-within:border-yellow-400 transition-all">
                    <Clock className="text-yellow-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Pickup Time" 
                      className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600 font-medium"
                    />
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 py-5 md:py-7 rounded-[1.5rem] md:rounded-2xl text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-white transition-all duration-300 group"
              >
                Confirm {selected} Ride 
                <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <div className="flex items-center justify-center gap-6 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                 <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400"/> Instant</span>
                 <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400"/> Secure</span>
                 <span className="flex items-center gap-1"><ChevronRight size={10} className="text-yellow-400"/> 24/7</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Ride;