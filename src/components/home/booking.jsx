import React from 'react';
import { MapPin, Navigation, ArrowRight, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking = () => {
  // WhatsApp par message bhejne ke liye function
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const pickup = e.target.pickup.value;
    const drop = e.target.drop.value;
    const date = e.target.date.value;
    
    const message = `Hello Hello11, I want to book a ride.%0A%0A*Pickup:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section className="bg-black py-16 px-6 relative overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block"
          >
            Instant Reservation
          </motion.span>
          <h3 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            READY TO <span className="text-yellow-400">ROLL?</span>
          </h3>
        </div>

        {/* Main Booking Form Card */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-4 md:p-6 shadow-2xl relative z-10">
          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Pickup Input */}
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400">
                <MapPin size={18} />
              </div>
              <input 
                name="pickup"
                type="text" 
                required
                placeholder="Pickup Point"
                className="w-full bg-white/[0.03] border border-white/10 py-5 pl-12 pr-4 rounded-2xl text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-all font-medium placeholder:text-gray-600"
              />
            </div>

            {/* Drop Input */}
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-yellow-400">
                <Navigation size={18} />
              </div>
              <input 
                name="drop"
                type="text" 
                required
                placeholder="Drop Point"
                className="w-full bg-white/[0.03] border border-white/10 py-5 pl-12 pr-4 rounded-2xl text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-all font-medium placeholder:text-gray-600"
              />
            </div>

            {/* Date Input */}
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-yellow-400">
                <Calendar size={18} />
              </div>
              <input 
                name="date"
                type="date" 
                required
                className="w-full bg-white/[0.03] border border-white/10 py-5 pl-12 pr-4 rounded-2xl text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-all font-medium appearance-none"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-yellow-400 hover:bg-white text-black font-black uppercase tracking-widest text-xs py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
            >
              Book Now <ArrowRight size={16} strokeWidth={3} />
            </motion.button>
          </form>

          {/* Quick Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 border-t border-white/5 pt-6">
             <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-yellow-400" /> Fixed Prices
             </div>
             <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-yellow-400" /> Clean Cars
             </div>
             <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-yellow-400" /> 24/7 Support
             </div>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
           <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.3em]">Direct Support</p>
           <a 
             href="tel:+9191XXXXXXXXXX" 
             className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full group hover:border-yellow-400/30 transition-all"
           >
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                 <Phone size={18} fill="currentColor" />
              </div>
              <div>
                 <h4 className="text-white font-black text-xl md:text-2xl tracking-tighter">+91 91XXXXXXXXXX</h4>
              </div>
           </a>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Booking;