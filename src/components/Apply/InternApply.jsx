import React, { useState } from 'react';
import { db } from "../../firebase"; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, Phone, BookOpen, School, Target, Zap } from 'lucide-react';

export default function InternApply() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', course: '', 
    year: '', college: '', whyJoin: '', domain: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "interns"), {
        ...formData,
        status: 'Applied', 
        joinedAt: serverTimestamp(),
        isDeployed: false
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
    }
    setLoading(false);
  };

  if (submitted) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-center font-sans">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white/[0.02] border border-[#05e823]/30 p-12 rounded-[3rem] max-w-md shadow-2xl backdrop-blur-xl">
        <div className="h-20 w-20 bg-[#05e823]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-[#05e823]" />
        </div>
        <h2 className="text-2xl font-black text-white italic uppercase mb-4 tracking-tighter">Transmission_Complete</h2>
        <p className="text-slate-400 text-sm font-medium leading-relaxed">Aapka data CodeWebX mainframe mein successfully inject kar diya gaya hai. HR team jald hi pipeline update karegi.</p>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6 font-sans overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter underline underline-offset-[12px] decoration-[#05e823] decoration-4 leading-none">Join_The_Fleet</h1>
          <p className="text-slate-500 mt-8 text-[10px] font-black uppercase tracking-[0.5em] opacity-70">Internship_Application_Portal_v2.1 // No_File_Required</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[4rem] shadow-2xl backdrop-blur-sm relative z-10">
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><User size={12}/> Full Name</label>
            <input required placeholder="ENTER_IDENTITY..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 focus:bg-white/10 transition-all font-bold placeholder:text-slate-800" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><Mail size={12}/> Email</label>
            <input type="email" required placeholder="COMM_LINK_ADDR..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><Phone size={12}/> Phone No</label>
            <input required placeholder="UHF_CONTACT..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><BookOpen size={12}/> Course</label>
            <input required placeholder="B.TECH / BCA..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setFormData({...formData, course: e.target.value})}/>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2">Year Of Study</label>
            <select required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none appearance-none font-bold cursor-pointer" onChange={(e) => setFormData({...formData, year: e.target.value})}>
              <option value="" className="bg-black text-slate-500">SELECT_PHASE</option>
              <option value="1st Year" className="bg-black text-white">1st Year</option>
              <option value="2nd Year" className="bg-black text-white">2nd Year</option>
              <option value="3rd Year" className="bg-black text-white">3rd Year</option>
              <option value="4th Year" className="bg-black text-white">4th Year</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><School size={12}/> College Name</label>
            <input required placeholder="INSTITUTION_BASE..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none focus:border-[#05e823]/50 transition-all font-bold" onChange={(e) => setFormData({...formData, college: e.target.value})}/>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><Target size={12}/> Domain Specialization</label>
            <select required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none appearance-none font-bold cursor-pointer" onChange={(e) => setFormData({...formData, domain: e.target.value})}>
              <option value="" className="bg-black text-slate-500">SELECT_DOMAIN</option>
              <option value="MERN Developer" className="bg-black text-white">MERN Developer</option>
              <option value="Sales Executive" className="bg-black text-white">Sales Executive</option>
              <option value="Marketing Executive" className="bg-black text-white">Marketing Executive</option>
              <option value="Video Editor" className="bg-black text-white">Video Editor</option>
              <option value="Designer" className="bg-black text-white">Designer</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest flex items-center gap-2"><Zap size={12}/> Intent_Of_Joining</label>
            <select required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#05e823] outline-none appearance-none font-bold cursor-pointer" onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}>
              <option value="" className="bg-black text-slate-500">SELECT_REASON</option>
              <option value="Skill Development" className="bg-black text-white">Skill Enhancement / Technical Growth</option>
              <option value="Real World Experience" className="bg-black text-white">Real-time Project Deployment</option>
              <option value="Career Growth" className="bg-black text-white">Networking & Professional Ecosystem</option>
              <option value="Industry Exposure" className="bg-black text-white">Agency Workflow Exposure</option>
            </select>
          </div>

          <button 
            disabled={loading} 
            className="md:col-span-2 bg-white text-black font-black py-6 rounded-3xl mt-8 uppercase tracking-[0.5em] text-xs shadow-2xl hover:bg-[#05e823] hover:shadow-[0_0_30px_rgba(5,232,35,0.3)] transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "INITIALIZING_UPLOAD..." : <><Send size={16}/> Initialize_Protocol</>}
          </button>
        </form>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(5, 232, 35, 0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}