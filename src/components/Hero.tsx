import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [activeSimulation, setActiveSimulation] = useState<'cafe' | 'boutique'>('cafe');

  return (
    <section className="relative min-h-[95vh] bg-black text-white flex flex-col justify-center items-center px-6 pt-20 pb-16 text-center border-b border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto z-10 w-full flex flex-col items-center">
        <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-6 px-3 py-1 border border-zinc-800 rounded-full bg-zinc-950">
          invictusfaith.studio // The WAT Manifesto
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent max-w-5xl">
          Your physical space demands your presence. Your digital infrastructure shouldn’t.
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light">
          We install unified, headless tech systems behind a beautiful frontend. Your web engine runs your cash registers, coordinates your suppliers, organizes internal management, and automates your customer interactions entirely in the background.
        </p>

        {/* Live First-Interaction Simulation Module */}
        <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-none p-6 md:p-8 text-left mb-12 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 mb-6 gap-4">
            <div>
              <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                Interactive Engine Simulator
              </h3>
              <p className="text-zinc-500 text-xs mt-0.5">See how WAT automates the first customer touchpoint instantly.</p>
            </div>
            <div className="flex bg-black p-1 border border-zinc-800 rounded-none">
              <button 
                onClick={() => setActiveSimulation('cafe')}
                className={`px-4 py-1.5 font-mono text-xs rounded-none transition-all ${activeSimulation === 'cafe' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                Cafe Flow (Square)
              </button>
              <button 
                onClick={() => setActiveSimulation('boutique')}
                className={`px-4 py-1.5 font-mono text-xs rounded-none transition-all ${activeSimulation === 'boutique' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                Boutique Flow (Shopify)
              </button>
            </div>
          </div>

          {activeSimulation === 'cafe' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-zinc-400">
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">1. The First Interaction</span>
                <p className="text-zinc-500 leading-relaxed">Customer calls or messages the business during peak rush hour to secure a table booking.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-emerald-400 animate-pulse text-[10px]">
                  [Vapi AI Receptionist Dispatched]
                </div>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">2. Autonomous Ledger Sync</span>
                <p className="text-zinc-500 leading-relaxed">AI answers, checks live table data tables in Supabase, records the booking, and texts the reservation ticket code.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-blue-400 text-[10px]">
                  [Supabase RLS Table Insert Confirmed]
                </div>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">3. Floor Automation</span>
                <p className="text-zinc-500 leading-relaxed">The physical counter tablet instantly registers the table allocation, updates the daily floor plan, and notifies the host.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-purple-400 text-[10px]">
                  [Square Hardware API Synced Successfully]
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-zinc-400">
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">1. The Matrix Trigger</span>
                <p className="text-zinc-500 leading-relaxed">Store owner drops 50 newly manufactured items onto the physical warehouse shelf space.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-orange-400 animate-pulse text-[10px]">
                  [Shopify POS Barcode Scanner Triggered]
                </div>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">2. Automated Media Core</span>
                <p className="text-zinc-500 leading-relaxed">WAT detects the SKU addition, calls OpenAI to generate localized captions, and queues structured social media drops.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-blue-400 text-[10px]">
                  [Marketing Generation Pipeline Fired]
                </div>
              </div>
              <div className="p-4 bg-zinc-900/40 border border-zinc-900 rounded-none">
                <span className="text-white font-bold block mb-2">3. Unified ERP Update</span>
                <p className="text-zinc-500 leading-relaxed">The backend platform logs vendor cost allocations, matches employee inventory hours, and files the ledger straight to accounting tabs.</p>
                <div className="mt-4 p-2 bg-black border border-zinc-800 text-emerald-400 text-[10px]">
                  [Accounting API Books Reconciled]
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 rounded-none tracking-tight text-base transition-all">
            Deploy Your Autonomous Engine
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-950 rounded-none px-8 py-6 text-base transition-all">
            Free Static Tier (Powered by Invictus)
          </Button>
        </div>
      </div>
    </section>
  );
}
