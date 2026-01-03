import React from 'react';
import { Box, Code } from 'lucide-react';

export default function ProductEcosystem() {
  return (
    <div className="bg-black/40 border border-white/5 p-12 rounded-[4rem] text-center">
      <Code className="mx-auto text-[#05e823] mb-8" size={64} />
      <h3 className="text-3xl font-black text-white italic uppercase">Proprietary_Tech_Vault</h3>
      <p className="text-slate-600 mt-4 font-mono text-sm tracking-tighter max-w-md mx-auto">
        Managing CodeWebX Intellectual Property: Instant_Pay_V2, AI_Pathfinder, and 3 more modules active.
      </p>
    </div>
  );
}