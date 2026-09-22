import React from 'react';
import { Award, ArrowUpRight, Cloud, Database, Layers } from 'lucide-react';
import { partnerEcosystem } from '../data/siteData';

export default function EcosystemPartners() {
  return (
    <section id="partners" className="py-24 bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Global Technology Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Strategic Partner Ecosystem
          </h2>
          <p className="text-slate-400 text-base">
            We hold highest-tier certifications across world-leading cloud hyperscalers, data platforms, and enterprise software ecosystems.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerEcosystem.map((partner, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                    {partner.category}
                  </span>
                  <Award className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Premier Certified Engineering Teams</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
