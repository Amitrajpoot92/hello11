import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, ChevronRight } from 'lucide-react';

// --- IMAGES IMPORT ---
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
    <div className="bg-[#f8f9fa] min-h-screen pt-20 md:pt-32 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 md:w-12 bg-yellow-500"></div>
            <span className="text-yellow-600 font-bold tracking-[0.3em] text-[10px] uppercase">
              Self Drive
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-black leading-none tracking-tighter uppercase italic">
            ELITE <span className="text-yellow-500">FLEET</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] md:text-xs mt-3">
            Premium selection for your next journey
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-yellow-400 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-7 group transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-40 md:h-52 mb-4 overflow-hidden flex items-center justify-center">
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none drop-shadow-2xl" 
                />
              </div>

              {/* Title and Price */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-black italic uppercase tracking-tight leading-tight group-hover:text-yellow-600 transition-colors">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-yellow-500 font-black text-xl italic">₹{car.price}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">/ Day</span>
                  </div>
                </div>
                
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="bg-black text-white p-3.5 md:p-4 rounded-2xl group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 shadow-md"
                >
                  <ChevronRight size={18} strokeWidth={3} />
                </motion.button>
              </div>

              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-1 py-4 border-t border-yellow-100 bg-yellow-50/30 rounded-2xl px-2">
                <div className="flex flex-col items-center gap-1 border-r border-yellow-100">
                  <Users size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-r border-yellow-100">
                  <Fuel size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.fuel}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Gauge size={14} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[9px] text-black font-black uppercase tracking-tighter">{car.gear}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 md:mt-16 text-center">
            <div className="inline-block px-6 py-2 bg-white border-2 border-yellow-400 rounded-full shadow-md">
                <p className="text-black text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
                   *Conditions Apply • No Fuel Included • ID Proof Required
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;