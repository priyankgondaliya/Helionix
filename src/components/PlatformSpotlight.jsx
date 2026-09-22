import React from 'react';
import { Sparkles, Shield, Cpu, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { platformSpotlight } from '../data/siteData';

export default function PlatformSpotlight({ onOpenContact }) {
  return (
    <section id="platform" className="py-24 bg-navy-900 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary Innovation Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {platformSpotlight.name}
            </h2>

            <p className="text-cyan-400 font-semibold text-lg">
              {platformSpotlight.tagline}
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              {platformSpotlight.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {platformSpotlight.highlights.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-normal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-sm hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Request Platform Demo</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </button>

              <a
                href="#case-studies"
                className="px-6 py-3.5 rounded-xl bg-navy-800 border border-slate-700 text-white font-semibold text-sm hover:bg-navy-700 transition-all flex items-center gap-2"
              >
                <span>View Platform ROI</span>
              </a>
            </div>

          </div>

          {/* Right Preview Showcase Graphic */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              
              {/* Top Window Bar Mockup */}
              <div className="bg-navy-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-400 font-mono">helionix-rise-orchestrator.v2.4</div>
                <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">Live System</div>
              </div>

              <img 
                src="/assets/platform_preview.png" 
                alt="HelionixRise Agentic AI Dashboard Preview" 
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
