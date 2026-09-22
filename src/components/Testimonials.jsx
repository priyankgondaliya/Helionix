import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy-900 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What Enterprise Leaders Say About Apex Digital
          </h2>
          <p className="text-slate-400 text-base">
            Delivering high-velocity software engineering, enterprise reliability, and true partnership to technology executives worldwide.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />

              <div className="space-y-6">
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-1">
                <div className="font-bold text-white text-base">
                  {t.author}
                </div>
                <div className="text-xs text-cyan-400 font-medium">
                  {t.role}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1 pt-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
