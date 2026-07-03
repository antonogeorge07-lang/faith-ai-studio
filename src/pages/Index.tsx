import React from 'react';
import { Button } from "@/components/ui/button";

export default function WATLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased">
      {/* Premium Hero Frame */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center lg:text-left flex flex-col justify-center min-h-[70vh]">
        <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-4 block">
          invictusfaith.studio // Phase II
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Your physical space demands your presence. Your digital infrastructure shouldn’t.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          We build unyielding, headless web engines that seamlessly run your cash registers, track multi-location item matrix listings, automate accounting files, and schedule local marketing campaigns on complete autopilot. Turn off your screen. Step back onto the floor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button variant="default" className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 rounded-none tracking-tight">
            Deploy Your Store Engine
          </Button>
          <Button variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white rounded-none px-8 py-6">
            Review Systems Architecture
          </Button>
        </div>
      </header>

      {/* System Infrastructure Feature Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Active Infrastructure Node Connection</h2>
          <p className="text-zinc-500 text-sm">Demonstrating real-time edge menu synchronization tracking metrics via Square and Shopify POS pipelines.</p>
        </div>
        <div className="bg-zinc-950/50 p-6 border border-zinc-900 rounded-lg text-zinc-400 font-mono text-sm">
          [System Online] Ready to link real-time automation pipelines...
        </div>
      </section>
    </div>
  );
}
