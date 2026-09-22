import React, { useState } from 'react';
import { Cpu, Code2, Server, Database, Cloud, Terminal, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { technologyStack } from '../data/siteData';
import TechIcon from './TechIcon';

export default function TechnologiesSection({ onOpenContact, activeCategory = "all", onSelectCategory }) {
  const [selectedCat, setSelectedCat] = useState(activeCategory);

  const currentCat = activeCategory !== "all" ? activeCategory : selectedCat;

  const filteredCategories = currentCat === "all" 
    ? technologyStack 
    : technologyStack.filter(cat => cat.category === currentCat);

  return (
    <section id="technologies" className="py-24 bg-navy-950 relative border-t border-slate-800/80">
      
      {/* Glow background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Enterprise Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proven Engineering Technologies
          </h2>
          <p className="text-slate-400 text-base">
            From React and Next.js on the frontend to Node.js, Express, PHP & Laravel, PostgreSQL, Docker, and AWS Kubernetes DevSecOps.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={() => {
              setSelectedCat("all");
              if (onSelectCategory) onSelectCategory("all");
            }}
            className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all border flex items-center gap-2 ${
              currentCat === "all"
                ? 'bg-cyan-500 text-navy-950 border-cyan-400 shadow-lg shadow-cyan-500/20 font-bold'
                : 'bg-navy-900/80 text-slate-300 border-slate-800 hover:bg-navy-800 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>All Technologies</span>
          </button>

          {technologyStack.map((cat) => {
            const isSelected = currentCat === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  setSelectedCat(cat.category);
                  if (onSelectCategory) onSelectCategory(cat.category);
                }}
                className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500 text-navy-950 border-cyan-400 shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-navy-900/80 text-slate-300 border-slate-800 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Sections */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{group.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{group.description}</p>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded border border-cyan-800 shrink-0">
                  {group.items.length} Production Technologies
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group hover:border-cyan-500/50 transition-all"
                  >
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xl bg-[#021716] border border-slate-700/80 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform shadow-inner shrink-0">
                            <TechIcon name={tech.name} className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {tech.name}
                            </h4>
                            <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 inline-block mt-0.5">
                              {tech.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {tech.desc}
                      </p>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 glass-panel rounded-2xl p-8 border border-slate-700/80 text-center space-y-4 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white">Need a Custom Enterprise Tech Architecture?</h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Our Principal Architects design bespoke multi-cloud, microservice, and AI platform architectures tailored to your legacy data systems and compliance standards.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
            >
              <span>Consult Principal Architect</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
