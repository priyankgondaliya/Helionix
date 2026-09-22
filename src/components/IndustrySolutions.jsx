import React from 'react';
import { HeartPulse, Landmark, Cpu, ShoppingBag, Car, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { industrySolutions } from '../data/siteData';

const indIconMap = {
  healthcare: HeartPulse,
  finance: Landmark,
  hitech: Cpu,
  consumer: ShoppingBag,
  automotive: Car
};

export default function IndustrySolutions({ onOpenContact, activeTab, onSelectTab }) {
  const activeSolution = industrySolutions.find(i => i.id === activeTab) || industrySolutions[0];

  return (
    <section id="industries" className="py-24 bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Tailored Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry-Specific Enterprise Solutions
          </h2>
          <p className="text-slate-400 text-base">
            Combining deep vertical domain expertise with cloud-native engineering to solve complex regulatory and operational challenges.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {industrySolutions.map((ind) => {
            const Icon = indIconMap[ind.id] || Cpu;
            const isSelected = activeSolution.id === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => onSelectTab && onSelectTab(ind.id)}
                className={`p-4 rounded-xl font-semibold text-xs sm:text-sm text-center flex flex-col items-center gap-2.5 transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/80 text-white border-cyan-500/80 shadow-lg shadow-cyan-500/10 font-bold'
                    : 'bg-navy-900/60 text-slate-400 border-slate-800 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Detail Card */}
        {activeSolution && (
          <div className="glass-panel rounded-2xl p-8 border border-slate-700/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{activeSolution.name}</h3>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800">
                  {activeSolution.stats}
                </span>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {activeSolution.summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Transformation Outcomes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSolution.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-700 shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all flex items-center gap-2"
                >
                  <span>Explore Industry Solutions</span>
                  <ArrowUpRight className="w-4 h-4 text-navy-950" />
                </button>
              </div>
            </div>

            {/* Right Metric Highlight Box */}
            <div className="lg:col-span-4 bg-navy-950 p-6 rounded-xl border border-slate-800 text-center space-y-4">
              <ShieldCheck className="w-10 h-10 text-cyan-400 mx-auto" />
              <div className="text-3xl font-extrabold text-white tracking-tight">
                {activeSolution.stats}
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Measured average performance improvement across enterprise clients in {activeSolution.name}.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
