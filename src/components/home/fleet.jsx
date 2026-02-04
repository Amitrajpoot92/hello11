import React from 'react';
import { Users, Wind, ArrowUpRight, IndianRupee, ChevronRight, Fuel } from 'lucide-react';

// Path ko ../ se badal kar ../../ karein
import car1 from '../../assets/cars/car1.webp';
import car2 from '../../assets/cars/car2.webp';
import car3 from '../../assets/cars/car3.webp';
import car4 from '../../assets/cars/car4.webp';
import car5 from '../../assets/cars/car5.webp';
import car6 from '../../assets/cars/car6.webp';

const cars = [
  { id: 1, name: "Innova Crysta", type: "LUXURY MPV", img: car1, rate: "18", seats: "7+1", ac: "Dual Chill", fuel: "Diesel" },
  { id: 2, name: "Hyundai Aura", type: "PREMIUM SEDAN", img: car2, rate: "12", seats: "4+1", ac: "Climate", fuel: "CNG/Petrol" },
  { id: 3, name: "Maruti Swift", type: "ECONOMY HATCH", img: car3, rate: "10", seats: "4+1", ac: "Manual", fuel: "Petrol" },
  { id: 4, name: "Mahindra Scorpio", type: "POWER SUV", img: car4, rate: "16", seats: "6+1", ac: "Powerful", fuel: "Diesel" },
  { id: 5, name: "Hyundai i10", type: "CITY COMPACT", img: car5, rate: "9", seats: "4+1", ac: "Standard", fuel: "Petrol" },
  { id: 6, name: "Mahindra Bolero", type: "RUGGED MUV", img: car6, rate: "13", seats: "6+1", ac: "Powerful", fuel: "Diesel" },
];

const Fleet = () => {
  return (
    <section className="bg-black py-12 md:py-20 overflow-hidden">
      {/* Hidden Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Header */}
      <div className="container mx-auto px-6 mb-8 md:mb-12 flex justify-between items-end">
        <div className="relative">
          <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-2 block">Premium Fleet</span>
          <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            ELITE <span className="text-yellow-400">CARS</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 text-gray-500 font-bold uppercase text-[10px] tracking-widest">
          Scroll <ChevronRight size={14} className="text-yellow-400 animate-bounce-x" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-6 md:px-[10vw] pb-10 no-scrollbar">
        {cars.map((car) => (
          <div 
            key={car.id} 
            className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] h-auto snap-center relative mt-16 group"
          >
            {/* Card Background */}
            <div className="absolute inset-0 top-16 bg-[#0c0c0c] rounded-[3rem] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-yellow-400/20" />
            
            <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
              {/* Car Image: Updated to use imported variable */}
              <div className="relative h-40 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-yellow-400/5 blur-[80px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-700" />
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.9)] transform -translate-y-16 group-hover:-translate-y-20 transition-all duration-500 ease-out"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col -mt-4 md:mt-2">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-400 font-black text-[9px] md:text-[10px] tracking-widest uppercase bg-yellow-400/10 px-2.5 py-1 rounded border border-yellow-400/20">
                    {car.type}
                  </span>
                  <span className="text-white/10 font-black italic text-2xl">0{car.id}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase leading-none tracking-tighter mb-4">
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center gap-3 md:gap-5 py-3 border-y border-white/5 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-yellow-400" />
                    <span className="text-gray-300 text-[11px] md:text-sm font-bold uppercase">{car.seats}</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <Wind size={14} className="text-yellow-400" />
                    <span className="text-gray-300 text-[11px] md:text-sm font-bold uppercase">{car.ac}</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <Fuel size={14} className="text-yellow-400" />
                    <span className="text-gray-300 text-[11px] md:text-sm font-bold uppercase">{car.fuel}</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Starting Price</span>
                    <div className="flex items-center text-yellow-400 font-black text-3xl md:text-4xl italic tracking-tighter">
                      <IndianRupee size={22} strokeWidth={3} />
                      <span>{car.rate}/KM</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/91XXXXXXXXXX?text=Book ${car.name}`}
                    className="bg-yellow-400 hover:bg-white text-black p-4 md:p-5 rounded-[1.5rem] transition-all duration-300 shadow-xl hover:shadow-yellow-400/20 active:scale-90"
                  >
                    <ArrowUpRight size={24} strokeWidth={3} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fleet;