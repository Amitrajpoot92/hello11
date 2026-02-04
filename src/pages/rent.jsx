import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, ChevronRight } from 'lucide-react';

// --- IMAGES IMPORT (Correct Path Fix) ---
// Yahan ../ use karein kyunki rent.jsx "src/pages" mein hai 
// aur assets "src/assets" mein. Toh sirf ek level piche jaana hai.
import car1 from '../assets/cars/car1.webp';
import car2 from '../assets/cars/car2.webp';
import car3 from '../assets/cars/car3.webp';
import car4 from '../assets/cars/car4.webp';
import car5 from '../assets/cars/car5.webp';
import car6 from '../assets/cars/car6.webp';

const cars = [
  { id: 1, name: "Swift Dzire", price: "1800", img: car1, seats: "5", fuel: "CNG/Pet", gear: "Manual" },
  { id: 2, name: "Toyota Innova", price: "3500", img: car2, seats: "7", fuel: "Diesel", gear: "Manual" },
  { id: 3, name: "Ertiga ZXI", price: "2800", img: car3, seats: "7", fuel: "CNG", gear: "Manual" },
  { id: 4, name: "Mahindra XUV", price: "4000", img: car4, seats: "7", fuel: "Diesel", gear: "Auto" },
  { id: 5, name: "Honda City", price: "3000", img: car5, seats: "5", fuel: "Petrol", gear: "Auto" },
  { id: 6, name: "Fortuner", price: "7500", img: car6, seats: "7", fuel: "Diesel", gear: "Auto" },
];

const Rent = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            Elite <span className="text-yellow-400">Fleet</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2 border-l-2 border-yellow-400 pl-4">
            Pick your beast for the road
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-6 group transition-all duration-500 hover:border-yellow-400/20 shadow-2xl"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative h-48 mb-6 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                />
              </div>

              {/* Title and Action */}
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mt-1">
                    Starting ₹{car.price}/day
                  </p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300"
                >
                  <ChevronRight size={20} strokeWidth={3} />
                </motion.button>
              </div>

              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6">
                <div className="flex flex-col items-center gap-1.5">
                  <Users size={16} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-[9px] text-white font-black uppercase tracking-tighter">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 border-x border-white/5">
                  <Fuel size={16} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-[9px] text-white font-black uppercase tracking-tighter">{car.fuel}</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Gauge size={16} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-[9px] text-white font-black uppercase tracking-tighter">{car.gear}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-16 text-center">
            <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">
                *Terms & Conditions Apply • Fuel charges not included • ID Proof Required
            </p>
        </div>
      </div>
    </div>
  );
};

export default Rent;