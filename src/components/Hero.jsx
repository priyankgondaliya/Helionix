import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';
import { siteConfig } from '../data/siteData';

function parseStatValue(value) {
  const match = String(value).match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: '', number: 0, decimals: 0, suffix: '' };
  const numeric = match[2].replace(/,/g, '');
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0;
  return {
    prefix: match[1],
    number: Number(numeric),
    decimals,
    suffix: match[3],
  };
}

function formatStatNumber(value, decimals) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function CountUpStat({ value, delay = 0 }) {
  const { prefix, number, decimals, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(() => formatStatNumber(0, decimals));
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let started = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (started) return;
      started = true;
      if (reduced) {
        setDisplay(formatStatNumber(number, decimals));
        return;
      }

      const duration = 1700;
      const begin = performance.now() + delay;
      const tick = (now) => {
        const elapsed = now - begin;
        if (elapsed < 0) {
          frame = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = progress === 1 ? number : number * eased;
        setDisplay(formatStatNumber(current, decimals));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [number, decimals, delay]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Hero({ onOpenContact }) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-navy-950">
      
      {/* Background Graphic Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img 
          src="/assets/hero_bg.png" 
          alt="Enterprise Technology Network" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
              Enterprise Digital Engineering & Agentic AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering Intelligent Enterprises with <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">AI, Data & Cloud Platforms</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {siteConfig.heroSubtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 text-navy-950 font-bold text-base hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20 hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span>Explore Enterprise Solutions</span>
              <ArrowRight className="w-5 h-5 text-navy-950" />
            </button>

            <a
              href="#platform"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-800/80 border border-slate-700 text-white font-semibold text-base hover:bg-navy-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Watch Platform Demo</span>
            </a>
          </div>

          {/* Trust Compliance Markers */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>SOC2 Type II & ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>99.99% Enterprise SLA Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>AWS & Azure Premier Certified</span>
            </div>
          </div>

        </div>

        {/* Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 tabular-nums group-hover:text-cyan-400 transition-colors">
                <CountUpStat value={stat.value} delay={idx * 160} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
