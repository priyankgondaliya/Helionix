import React, { useState } from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { serviceCategories, industrySolutions } from '../data/siteData';

export default function Footer({ onOpenContact, onSelectService, onSelectIndustry, onSelectTechnology }) {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) setSubscribed(true);
  };

  const handleServiceClick = (catId) => {
    if (onSelectService) onSelectService(catId);
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndustryClick = (indId) => {
    if (onSelectIndustry) onSelectIndustry(indId);
    const el = document.getElementById('industries');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTechClick = (cat = 'all') => {
    if (onSelectTechnology) onSelectTechnology(cat);
    const el = document.getElementById('technologies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040814] text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Newsletter Bar (Commented out as requested)
      <div className="border-b border-slate-800/80 py-12 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Subscribe to Enterprise AI & Tech Insights</h4>
            <p className="text-xs text-slate-400">Monthly breakdown of cloud modernization trends, Agentic AI benchmarks, and security compliance.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2">
            {subscribed ? (
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 px-4 py-2.5 rounded-xl border border-cyan-800 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed Successfully!</span>
              </span>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter executive email..."
                  className="bg-navy-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-64"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      */}

      {/* Main Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column - Helonix Technologies */}
        <div className="space-y-4 pr-4">
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#060C1B] flex items-center justify-center p-1 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 shrink-0">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <rect width="64" height="64" rx="14" fill="#060C1B"/>
                <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="#00E5FF" strokeWidth="3.5" strokeOpacity="0.9"/>
                <path d="M18 14v36M46 14v36M18 32h28" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 20l16 24M40 20l-16 24" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                <circle cx="32" cy="32" r="6" fill="#00E5FF"/>
              </svg>
            </div>
            <span className="text-lg font-black tracking-tight text-white font-sans whitespace-nowrap">
              HELIONIX <span className="text-cyan-400 font-extrabold">TECHNOLOGIES</span>
            </span>
          </a>

          <p className="text-xs text-slate-400 leading-relaxed">
            Helionix Technologies is a leading AI, data, and digital engineering company helping enterprise leaders accelerate innovation, modernize legacy platforms, and achieve digital velocity.
          </p>
        </div>

        {/* Core Services Links */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">Services</div>
          <ul className="space-y-2">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => handleServiceClick(cat.id)} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  {cat.title}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => handleNavClick('platform')} className="text-cyan-400 hover:underline text-left">
                HelionixRise™ Agentic AI
              </button>
            </li>
          </ul>
        </div>

        {/* Industry Solutions Links */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">Industries</div>
          <ul className="space-y-2">
            {industrySolutions.map((ind) => (
              <li key={ind.id}>
                <button 
                  onClick={() => handleIndustryClick(ind.id)} 
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  {ind.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Core Section Links */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">Company & Navigation</div>
          <ul className="space-y-2.5">
            <li>
              <button onClick={() => handleTechClick('all')} className="hover:text-cyan-400 transition-colors text-left font-medium">
                Technologies & Stack
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('case-studies')} className="hover:text-cyan-400 transition-colors text-left">
                Success Stories & Case Studies
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('platform')} className="hover:text-cyan-400 transition-colors text-left">
                HelionixRise™ AI Platform
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('partners')} className="hover:text-cyan-400 transition-colors text-left">
                Partner Ecosystem
              </button>
            </li>
            <li>
              <button onClick={onOpenContact} className="text-cyan-400 font-semibold hover:underline text-left flex items-center gap-1">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 py-6 bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Helionix Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Designed for Enterprise Reliability & Client Presentation</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
