import React, { useRef } from 'react';
import { Users, Wind, ArrowUpRight, IndianRupee, ChevronRight, ChevronLeft, Fuel } from 'lucide-react';

// Assets path
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-10 md:py-24 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .car-floating-shadow { filter: drop-shadow(0 35px 25px rgba(0,0,0,0.25)); }
      `}} />

      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-16 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-1 md:mb-2">
            <div className="h-[2px] w-8 md:w-12 bg-yellow-500"></div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-[10px] md:text-xs">Elite Fleet</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-black leading-none tracking-tighter uppercase">
            Modern <span className="text-gray-200 block md:inline">Garage</span>
          </h2>
        </div>
      </div>

      {/* Main Scroller */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-10 px-4 md:px-[8vw] pb-12 no-scrollbar"
      >
        {cars.map((car) => (
          <div 
            key={car.id} 
            className="flex-none w-[90vw] md:w-[45vw] lg:w-[30vw] snap-center relative mt-12 group"
          >
            {/* Card Background with Yellow Border */}
            <div className="absolute inset-0 top-8 bg-white rounded-[2rem] border-[1.5px] border-yellow-400 shadow-xl transition-all duration-500 group-hover:shadow-yellow-400/10 group-hover:-translate-y-1" />
            
            <div className="relative z-10 p-5 md:p-8 flex flex-col h-full">
              {/* Car Image Pop-out */}
              <div className="relative h-36 md:h-52 flex items-center justify-center -mt-16 mb-2">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-contain car-floating-shadow transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* ID & Type Tag */}
              <div className="flex justify-between items-center mb-4">
                <span className="bg-black text-yellow-400 text-[8px] md:text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                  {car.type}
                </span>
                <span className="text-gray-100 font-black text-4xl md:text-5xl leading-none">0{car.id}</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black text-black uppercase leading-tight tracking-tighter mb-4">
                {car.name}
              </h3>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-1 py-4 border-y border-gray-100 mb-6">
                <div className="flex flex-col items-center border-r border-gray-100">
                  <Users size={14} className="text-yellow-500 mb-1" />
                  <span className="text-black text-[10px] md:text-xs font-bold">{car.seats}</span>
                </div>
                <div className="flex flex-col items-center border-r border-gray-100">
                  <Wind size={14} className="text-yellow-500 mb-1" />
                  <span className="text-black text-[10px] md:text-xs font-bold">{car.ac}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Fuel size={14} className="text-yellow-500 mb-1" />
                  <span className="text-black text-[10px] md:text-xs font-bold uppercase">{car.fuel.split('/')[0]}</span>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Starts at</span>
                  <div className="flex items-baseline text-black font-black text-2xl md:text-4xl leading-none">
                    <span className="text-yellow-500 text-lg md:text-2xl font-bold mr-0.5">₹</span>
                    {car.rate}
                    <span className="text-[10px] text-gray-400 ml-1">/KM</span>
                  </div>
                </div>
                
                <a 
                  href={`https://wa.me/91XXXXXXXXXX?text=Book ${car.name}`}
                  className="bg-yellow-400 hover:bg-black text-black hover:text-white p-3 md:p-4 rounded-2xl transition-all duration-300 shadow-lg active:scale-95 group-hover:rotate-6"
                >
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls (Below the scroller) */}
      <div className="container mx-auto px-4 mt-8 flex justify-center items-center gap-6">
        {/* Buttons only visible on Desktop, Swipe dots on Mobile */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-4 border-2 border-black hover:bg-yellow-400 hover:border-yellow-400 transition-all rounded-full group"
          >
            <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-4 bg-black text-white hover:bg-yellow-400 hover:text-black transition-all rounded-full group"
          >
            <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="md:hidden flex justify-center gap-1.5">
          <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          <div className="h-1 w-2 bg-gray-200 rounded-full"></div>
          <div className="h-1 w-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;