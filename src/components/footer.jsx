import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Identity */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-black italic tracking-tighter mb-6">
              HELLO<span className="text-yellow-400">11</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8 font-medium uppercase tracking-tight">
              Redefining premium travel across Uttar Pradesh & Bihar. 
              The gold standard of Khalilabad's elite taxi service.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, color: '#facc15' }}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Contact Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-yellow-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 group transition-colors">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-yellow-400 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-6">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <p className="text-gray-500 text-xs font-bold uppercase leading-relaxed">
                  Khalilabad, Sant Kabir Nagar<br />Uttar Pradesh - 272175
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <p className="text-gray-500 text-xs font-bold uppercase">support@hello11.in</p>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-yellow-400 font-black text-xs uppercase tracking-[0.2em] border-b border-yellow-400/30 pb-1 cursor-pointer"
              >
                Get Directions <ArrowUpRight size={14} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Hello11. Built for the Elite.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;