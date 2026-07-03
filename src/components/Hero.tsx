import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

export default function Hero() {
  const [viewState, setViewState] = useState<'manifesto' | 'prereq' | 'sandbox'>('manifesto');
  const [sandboxPlatform, setSandboxPlatform] = useState<'square' | 'shopify'>('square');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: '',
    ownerEmail: '',
    currentPos: 'square',
    staffCount: '1-5',
    frictionPoint: 'inventory'
  });

  const handleExecuteHandshake = async () => {
    setLoading(true);
    try {
      await supabase.from('client_stores').insert([{
        store_name: formData.businessName,
        owner_email: formData.ownerEmail,
        platform_type: formData.currentPos === 'square' ? 'square' : 'shopify'
      }]);
      setViewState('sandbox');
    } catch (err) {
      console.error("Handshake log bypass:", err);
      setViewState('sandbox');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 pt-24 pb-20 text-center border-b border-zinc-900 overflow-hidden font-sans antialiased">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto z-10 w-full flex flex-col items-center">
        <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-mono mb-6 px-3 py-1 border border-zinc-900 rounded-full bg-zinc-950">
          invictusfaith.studio // WAT Operating Model
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent max-w-5xl">
          Your physical space demands your presence. Your digital infrastructure shouldn’t.
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light">
          We break traditional agency lock-in. We deploy client-owned, headless technology stacks that automate customer interactions, registers, and bookkeeping. Complete data sovereignty—built to run without you.
        </p>

        {viewState === 'manifesto' && (
          <div className="space-y-6 w-full max-w-xl">
            <button 
              onClick={() => setViewState('prereq')}
              className="w-full bg-white text-black hover:bg-zinc-200 font-bold px-8 py-5 rounded-none text-sm font-mono uppercase tracking-wide transition-all shadow-2xl"
            >
              Analyze Your Operations [Begin Pre-Req]
            </button>
            <p className="text-zinc-600 text-[10px] font-mono tracking-tight">
              *All inquiring B2B entities must complete system diagnostics before architecture allocation.
            </p>
          </div>
        )}

        {viewState === 'prereq' && (
          <Card className="w-full max-w-2xl bg-zinc-950 border-zinc-900 rounded-none p-6 md:p-8 text-left shadow-2xl text-white font-mono text-xs">
            <div className="border-b border-zinc-900 pb-4 mb-6">
              <span className="text-[10px] text-zinc-500 uppercase block mb-1">Pre-Requisite Diagnostics Portal</span>
              <h3 className="text-base font-bold uppercase text-white">Operational Mapping Matrix</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-zinc-500 mb-1.5 uppercase">Business Entity Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Obsidian Roasters"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  className="w-full bg-black border border-zinc-900 p-3 text-white rounded-none focus:outline-none focus:border-zinc-700"
                />
              </div>
              <div>
                <label className="block text-zinc-500 mb-1.5 uppercase">Administrative Contact Email</label>
                <input 
                  type="email" 
                  placeholder="operator@domain.com"
                  value={formData.ownerEmail}
                  onChange={(e) => setFormData({...formData, ownerEmail: e.target.value})}
                  className="w-full bg-black border border-zinc-900 p-3 text-white rounded-none focus:outline-none focus:border-zinc-700"
                />
              </div>
              <div>
                <label className="block text-zinc-500 mb-1.5 uppercase">Current Point of Sale Infrastructure</label>
                <select 
                  value={formData.currentPos}
                  onChange={(e) => setFormData({...formData, currentPos: e.target.value})}
                  className="w-full bg-black border border-zinc-900 p-3 text-white rounded-none focus:outline-none focus:border-zinc-700"
                >
                  <option value="square">Square POS Core (Hospitality/Retail)</option>
                  <option value="shopify">Shopify POS Pro (Matrix Inventory)</option>
                  <option value="legacy">Disconnected Legacy / Cash Register</option>
                </select>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setViewState('manifesto')} className="border-zinc-900 text-zinc-500 rounded-none px-6">Cancel</Button>
                <Button 
                  disabled={!formData.businessName || !formData.ownerEmail || loading}
                  onClick={handleExecuteHandshake}
                  className="w-full bg-emerald-500 text-black hover:bg-emerald-400 font-bold rounded-none uppercase tracking-wider"
                >
                  {loading ? 'Compiling Blueprint...' : 'Execute Operational Handshake [⚡]'}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {viewState === 'sandbox' && (
          <Card className="w-full max-w-4xl bg-zinc-950 border-zinc-900 rounded-none p-6 md:p-8 text-left shadow-2xl text-white font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 mb-6 gap-4">
              <div>
                <div className="text-emerald-400 font-bold mb-0.5">[DIAGNOSTICS VERIFIED // ACTIVE REAL-TIME POC INSTANCE]</div>
                <p className="text-zinc-500 text-[10px]">Interact with the variables below to watch the live asynchronous automation engine process ledger states.</p>
              </div>
              <div className="flex bg-black p-1 border border-zinc-900">
                <button 
                  onClick={() => setSandboxPlatform('square')}
                  className={`px-4 py-1.5 text-[10px] transition-all ${sandboxPlatform === 'square' ? 'bg-white text-black font-bold' : 'text-zinc-500 hover:text-white'}`}
                >
                  Square Cafe Sandbox
                </button>
                <button 
                  onClick={() => setSandboxPlatform('shopify')}
                  className={`px-4 py-1.5 text-[10px] transition-all ${sandboxPlatform === 'shopify' ? 'bg-white text-black font-bold' : 'text-zinc-500 hover:text-white'}`}
                >
                  Shopify Retail Sandbox
                </button>
              </div>
            </div>

            {sandboxPlatform === 'square' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400">
                <div className="p-4 bg-zinc-900/30 border border-zinc-900">
                  <span className="text-white font-bold block mb-2">1. First Touch Interaction</span>
                  <p className="text-zinc-500 leading-relaxed mb-4">Customer triggers an inquiry or order loop via voice reception lines or headless link tables.</p>
                  <div className="p-2 bg-black border border-zinc-900 text-emerald-400 animate-pulse text-[10px]">
                    [Vapi Voice Channel Routing...]
                  </div>
                </div>
                <div className="p-4 bg-zinc-900/30 border border-zinc-900">
                  <span className="text-white font-bold block mb-2">2. Asynchronous Ledger Write</span>
                  <p className="text-zinc-500 leading-relaxed mb-4">The event writes transaction variables directly to your client-owned Supabase instance database.</p>
                  <div className="p-2 bg-black border border-zinc-900 text-blue-400 text-[10px]">
                    [Supabase Row Insert Instantiated]
                  </div>
                </div>
                <div className="p-4 bg-zinc-900/30 border border-zinc-900">
                  <span className="text-white font-bold block mb-2">3. Hardware Counter Sync</span>
                  <p className="text-zinc-500 leading-relaxed mb-4">Make.com listens, triggers the Square Catalog API, and mirrors the menu change straight to the in-store physical register terminal.</p>
                  <div className="p-2 bg-black border border-zinc-900 text-purple-400 text-[10px]">
                    [Square POS Webhook Complete]
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400">
                <div className="p-4 bg-zinc-900/30 border border-zinc-900">
                  <span className="text-white font-bold block mb-2">1. The Matrix SKUs Drop</span>

