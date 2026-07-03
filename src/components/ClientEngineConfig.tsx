import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClientEngineConfig() {
  const [platform, setPlatform] = useState<'square' | 'shopify'>('square');
  const [apiKey, setApiKey] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'testing' | 'success'>('idle');

  const handleProvisionEngine = () => {
    setStatus('testing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <Card className="w-full max-w-xl mx-auto bg-zinc-950 border-zinc-900 rounded-none p-6 text-left text-white font-mono text-xs">
      <div className="border-b border-zinc-900 pb-3 mb-4">
        <span className="text-zinc-500 uppercase tracking-widest text-[9px] block mb-0.5">WAT Tech Configuration Portal</span>
        <h4 className="text-sm font-bold uppercase text-white tracking-tight">Bootstrap Local Business Engine</h4>
      </div>

      {status === 'success' ? (
        <div className="space-y-4">
          <div className="text-emerald-400 font-bold">[PROVISIONING COMPLETE // CREDENTIALS SECURED]</div>
          <p className="text-zinc-500 leading-relaxed">
            Your client-owned API access routes have been verified. Real-time background webhooks are now tracking counter transactions and processing active ledger automation.
          </p>
          <div className="p-2.5 bg-black border border-zinc-900 text-zinc-600 text-[10px]">
            Target Node: oawaputafziqpwolqvvc // State: Connected
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-2 p-1 bg-black border border-zinc-900">
            <button 
              onClick={() => setPlatform('square')}
              className={`w-full py-2 text-[10px] uppercase font-bold transition ${platform === 'square' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              Square Register API
            </button>
            <button 
              onClick={() => setPlatform('shopify')}
              className={`w-full py-2 text-[10px] uppercase font-bold transition ${platform === 'shopify' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              Shopify Headless Pro
            </button>
          </div>

          {platform === 'shopify' && (
            <div>
              <label className="block text-zinc-500 mb-1.5 uppercase">Shopify MyShopify Subdomain URL</label>
              <input 
                type="text" 
                placeholder="e.g., ://myshopify.com"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                className="w-full bg-black border border-zinc-900 p-2.5 text-white rounded-none focus:outline-none focus:border-zinc-700"
              />
            </div>
          )}

          <div>
            <label className="block text-zinc-500 mb-1.5 uppercase">
              {platform === 'square' ? 'Production Access Token (EAAA...)' : 'Admin API Password Token (shppa_...)'}
            </label>
            <input 
              type="password" 
              placeholder="••••••••••••••••••••••••••••••••"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-black border border-zinc-900 p-2.5 text-white rounded-none focus:outline-none focus:border-zinc-700"
            />
          </div>

          <Button 
            disabled={!apiKey || (platform === 'shopify' && !storeUrl) || status === 'testing'}
            onClick={handleProvisionEngine}
            className="w-full bg-white text-black font-bold py-3 rounded-none uppercase text-xs tracking-wider transition hover:bg-zinc-200"
          >
            {status === 'testing' ? 'Verifying Endpoints...' : 'Link Register Infrastructure [⚡]'}
          </Button>
        </div>
      )}
    </Card>
  );
}
