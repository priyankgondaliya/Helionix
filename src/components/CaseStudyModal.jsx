import React from 'react';
import { X, CheckCircle2, Building2, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ caseStudy, onClose, onOpenContact }) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-navy-950 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="space-y-2 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800">
                {caseStudy.industry}
              </span>
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {caseStudy.client}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {caseStudy.title}
            </h3>
          </div>

          {/* Impact Banner */}
          <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Quantified Business Impact</div>
              <div className="text-lg font-extrabold text-cyan-400">{caseStudy.impact}</div>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Business Challenge</h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-navy-900/50 p-4 rounded-xl border border-slate-800">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Helionix Technologies Engineering Solution</h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-navy-900/50 p-4 rounded-xl border border-slate-800">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverable Results */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Empirical Validation & Outcomes</h4>
            <div className="space-y-2">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-200 bg-navy-900/80 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white font-medium px-4 py-2"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all flex items-center gap-2"
            >
              <span>Build Similar Platform</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
