import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Building2, Sparkles } from 'lucide-react';
import { caseStudies } from '../data/siteData';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies({ onOpenContact }) {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="case-studies" className="py-24 bg-navy-900 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Success Stories & Case Studies
            </h2>
            <p className="text-slate-400 text-base">
              Explore how we help Fortune 500 enterprises and high-growth digital leaders accelerate innovation with quantified ROI.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:border-cyan-400"
          >
            <span>Request Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div 
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className="glass-card rounded-2xl p-8 border border-slate-800/80 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 transition-all"
            >
              <div className="space-y-6">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                      {cs.industry}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors pt-2">
                      {cs.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center border border-slate-700 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-navy-950/80 p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Quantified ROI Result</div>
                    <div className="text-base font-extrabold text-cyan-400">{cs.impact}</div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                  {cs.challenge}
                </p>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400">
                <span>{cs.client}</span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal 
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
