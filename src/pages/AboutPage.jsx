import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { siteConfig } from '../data/siteData';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Helionix Technologies';
  }, []);

  return (
    <main className="flex-grow">
      <section className="pt-32 pb-8 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {siteConfig.companyName}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Helionix Technologies is a leading AI, data, and digital engineering company helping
              enterprise leaders accelerate innovation, modernize legacy platforms, and achieve
              digital velocity.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
