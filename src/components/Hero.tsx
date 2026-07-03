import React, { useState } from 'react';
import OperationalPreReqForm from './OperationalPreReqForm';

export default function Hero() {
  const [showPreReq, setShowPreReq] = useState(false);

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 pt-24 pb-20 text-center border-b border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto z-10 w-full flex flex-col items-center">
        <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-6 px-3 py-1 border border-zinc-900 rounded-full bg-zinc-950">
          invictusfaith.studio // WAT Core System
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent max-w-5xl">
          Your physical space demands your presence. Your digital infrastructure shouldn’t.
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light">
          We install unified, headless tech frameworks behind elite designs. We completely automate your customer interactions, cash registers, vendors, and team management all in one place.
        </p>

        {!showPreReq ? (
          <div className="space-y-6 w-full max-w-xl">
            <button 
              onClick={() => setShowPreReq(true)}
              className="w-full bg-white text-black hover:bg-zinc-200 font-bold px-8 py-5 rounded-none text-base font-mono uppercase tracking-wide transition-all shadow-2xl"
            >
              Analyze Your Operations [Begin Pre-Req]
            </button>
            <p className="text-zinc-600 text-xs font-mono">
              *All inquiring B2B entities must complete system diagnostics before architecture allocation.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-3xl animate-in fade-in zoom-in-95 duration-300">
            <OperationalPreReqForm />
          </div>
        )}
      </div>
    </section>
  );
}
