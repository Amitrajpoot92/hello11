import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';

export default function ServiceOperations() {
  const services = ["Web Architecture", "ML Modeling", "UI Engineering", "Cloud Deployment"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4">
      {services.map((s, idx) => (
        <div key={idx} className="bg-white/[0.02] border border-white/10 p-8 rounded-[3rem] flex items-center justify-between group hover:border-[#05e823]/40 transition-all">
          <span className="text-white font-black italic uppercase text-lg">{s}</span>
          <CheckCircle className="text-[#05e823] shadow-[0_0_10px_#05e823]" size={20} />
        </div>
      ))}
    </div>
  );
}