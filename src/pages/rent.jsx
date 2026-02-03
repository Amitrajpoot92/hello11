import React from 'react';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, Zap, ChevronRight } from 'lucide-react';

const cars = [
  { id: 1, name: "Swift Dzire", price: "1800", img: "/car1.webp", seats: "5", fuel: "CNG/Pet", gear: "Manual" },
  { id: 2, name: "Toyota Innova", price: "3500", img: "/car2.webp", seats: "7", fuel: "Diesel", gear: "Manual" },
  { id: 3, name: "Ertiga ZXI", price: "2800", img: "/car3.webp", seats: "7", fuel: "CNG", gear: "Manual" },
  { id: 4, name: "Mahindra XUV", price: "4000", img: "/car4.webp", seats: "7", fuel: "Diesel", gear: "Auto" },
  { id: 5, name: "Honda City", price: "3000", img: "/car5.webp", seats: "5", fuel: "Petrol", gear: "Auto" },
  { id: 6, name: "Fortuner", price: "7500", img: "/car6.webp", seats: "7", fuel: "Diesel", gear: "Auto" },
];

const Rent = () => {
  return (
    <div className="bg-black min-h-screen pt-28 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
            Elite <span className="text-yellow-400">Fleet</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">Pick your beast for the road</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <motion.div 
              key={car.id}
              whileHover={{ y: -10 }}
              className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-6 group transition-all hover:border-yellow-400/20"
            >
              <div className="relative h-40 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={car.img} alt={car.name} className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{car.name}</h3>
                  <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mt-1">Starting ₹{car.price}/day</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6">
                <div className="flex flex-col items-center gap-1">
                  <Users size={14} className="text-gray-500" />
                  <span className="text-[9px] text-white font-black uppercase">{car.seats} Seats</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-white/5">
                  <Fuel size={14} className="text-gray-500" />
                  <span className="text-[9px] text-white font-black uppercase">{car.fuel}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Gauge size={14} className="text-gray-500" />
                  <span className="text-[9px] text-white font-black uppercase">{car.gear}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rent;