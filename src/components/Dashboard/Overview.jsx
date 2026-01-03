import React from 'react';
import { Activity, Zap, TrendingUp, Box } from 'lucide-react';

const Overview = () => {
  const stats = [
    { label: 'Talent Pool', val: '20', desc: 'Active Interns', icon: Zap },
    { label: 'Academy', val: '50', desc: 'Trainees Enrolled', icon: Activity },
    { label: 'Net Liquidity', val: '₹55k', desc: 'Monthly Target', icon: TrendingUp },
    { label: 'Live Nodes', val: '05', desc: 'Active Projects', icon: Box }
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] group hover:border-[#05e823]/30 transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
              <stat.icon size={18} className="text-[#05e823] opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-5xl font-black text-white tracking-tighter group-hover:text-[#05e823] transition-colors">{stat.val}</h3>
            <p className="text-[9px] font-bold text-slate-600 uppercase mt-4 tracking-widest">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* SYSTEM CONSOLE / RECENT ACTIVITY */}
      <div className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Zap size={120} className="text-[#05e823]" />
        </div>
        <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 italic flex items-center gap-3">
          <span className="h-2 w-2 bg-[#05e823] rounded-full animate-ping"></span>
          System_Live_Telemetry
        </h4>
        <div className="space-y-4 font-mono text-[11px]">
          <div className="flex gap-4 text-slate-500 border-b border-white/5 pb-2">
            <span className="text-[#05e823]">[10:42:01]</span>
            <span>New Intern Onboarded: Aditya_Singh.exe</span>
          </div>
          <div className="flex gap-4 text-slate-500 border-b border-white/5 pb-2">
            <span className="text-[#05e823]">[09:15:22]</span>
            <span>Service_Operation: UI_Engineering_Module_Deployed</span>
          </div>
          <div className="flex gap-4 text-slate-500 border-b border-white/5 pb-2">
            <span className="text-[#05e823]">[08:00:00]</span>
            <span>Academic_Partner_Sync: LPU_University_Portal_Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;