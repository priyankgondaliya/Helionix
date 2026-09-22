import React from 'react';
import { Bot, Cloud, Database, Layout, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { serviceCategories } from '../data/siteData';

const iconMap = {
  "ai-automation": Bot,
  "cloud-engineering": Cloud,
  "data-analytics": Database,
  "digital-experience": Layout,
};

export default function ServicesSection({ onOpenContact, activeTab, onSelectTab }) {
  const currentCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="py-24 bg-navy-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Enterprise Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Core Digital Engineering & AI Services
          </h2>
          <p className="text-slate-400 text-base">
            Structured solutions built to modernize your enterprise architecture, automate critical business operations, and drive sustainable digital growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.id] || Bot;
            const isActive = currentCategory.id === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectTab && onSelectTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-navy-950 border-cyan-400 shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-navy-900/80 text-slate-300 border-slate-800 hover:bg-navy-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-navy-950' : 'text-cyan-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        {currentCategory && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  {currentCategory.badge}
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="shrink-0 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:border-cyan-400"
            >
              <span>Consult an Architect</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        )}

        {/* Grid of Services under Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCategory?.services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl p-7 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h4>
                  <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center border border-slate-700/60 text-cyan-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium text-slate-400 bg-navy-950 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
