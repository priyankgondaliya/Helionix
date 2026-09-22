import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Send, Layers, Globe, Database, Code2, Server, Cloud, Smartphone, Sparkles, CheckCircle2, HeartPulse, Landmark, Cpu, ShoppingBag, Car, Bot, Layout } from 'lucide-react';
import { serviceCategories, industrySolutions, technologyStack } from '../data/siteData';
import TechIcon from './TechIcon';

const serviceIcons = {
  'ai-automation': Bot,
  'cloud-engineering': Cloud,
  'data-analytics': Database,
  'digital-experience': Layout,
};

const industryIcons = {
  healthcare: HeartPulse,
  finance: Landmark,
  hitech: Cpu,
  consumer: ShoppingBag,
  automotive: Car,
};

export default function Navbar({ onOpenContact, onSelectService, onSelectIndustry, onSelectTechnology }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTop, setDropdownTop] = useState(0);

  const openDropdown = (name, event) => {
    setDropdownTop(event.currentTarget.getBoundingClientRect().bottom);
    setActiveDropdown(name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (catId) => {
    if (onSelectService) onSelectService(catId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndustryClick = (indId) => {
    if (onSelectIndustry) onSelectIndustry(indId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById('industries');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTechClick = (techCat) => {
    if (onSelectTechnology) onSelectTechnology(techCat);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById('technologies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#021716] ${
      scrolled ? 'shadow-2xl border-b border-slate-800 py-3.5' : 'py-5 border-b border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 xl:gap-5">
          
          {/* Brand Logo - Helonix Technologies */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#062826] flex items-center justify-center p-1 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform shrink-0">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-cyan-400">
                <rect width="64" height="64" rx="14" fill="var(--bg-deep)"/>
                <rect x="2" y="2" width="60" height="60" rx="12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeOpacity="0.9"/>
                <path d="M18 14v36M46 14v36M18 32h28" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 20l16 24M40 20l-16 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
                <circle cx="32" cy="32" r="6" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] min-[380px]:text-base sm:text-lg xl:text-lg 2xl:text-xl font-black tracking-tight text-white font-sans whitespace-nowrap">
                HELIONIX <span className="text-cyan-400 font-extrabold">TECHNOLOGIES</span>
              </span>
              <span className="hidden min-[420px]:block text-[8px] sm:text-[9px] tracking-widest text-slate-400 font-bold uppercase -mt-0.5 whitespace-nowrap">
                Next-Gen Enterprise Cloud & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-6 shrink-0">
            
            {/* Services Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={(event) => openDropdown('services', event)} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors py-2 whitespace-nowrap">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="fixed left-1/2 z-50 w-[min(1180px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                  style={{ top: dropdownTop }}
                >
                  <div 
                    style={{ backgroundColor: '#042f2e', opacity: 1, backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
                    className="rounded-2xl p-6 sm:p-8 shadow-[0_35px_100px_rgba(0,0,0,1)] border border-slate-700 text-slate-100 grid grid-cols-2 gap-5"
                  >
                    {serviceCategories.map((cat) => {
                      const ServiceIcon = serviceIcons[cat.id] || Bot;
                      return (
                      <button 
                        key={cat.id} 
                        onClick={() => handleServiceClick(cat.id)}
                        style={{ backgroundColor: '#134e4a' }}
                        className="h-full p-5 sm:p-6 rounded-xl hover:bg-[#0f766e] transition-all border border-slate-800 hover:border-cyan-500/60 group text-left flex flex-col"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <span className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                            <span className="p-1.5 rounded-lg bg-navy-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 transition-colors shrink-0">
                              <ServiceIcon className="w-5 h-5 text-cyan-400" />
                            </span>
                            <span>{cat.title}</span>
                          </span>
                          <span className="shrink-0 text-[11px] sm:text-xs uppercase font-bold text-cyan-400 bg-[#021716] px-2.5 py-1 rounded-full border border-cyan-800 text-center leading-tight">
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {cat.description}
                        </p>
                      </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={(event) => openDropdown('technologies', event)} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors py-2 whitespace-nowrap">
                <span>Technologies</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'technologies' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {activeDropdown === 'technologies' && (
                <div
                  className="fixed left-1/2 z-50 w-[min(1180px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                  style={{ top: dropdownTop }}
                >
                  <div 
                    style={{ backgroundColor: '#042f2e', opacity: 1, backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
                    className="rounded-2xl p-6 sm:p-8 shadow-[0_35px_100px_rgba(0,0,0,1)] border border-slate-700 text-slate-100 grid grid-cols-2 xl:grid-cols-3 gap-5"
                  >
                    {technologyStack.map((techGroup) => {
                      const CategoryHeaderIcon = techGroup.category === 'frontend' ? Code2 :
                                                 techGroup.category === 'backend' ? Server :
                                                 techGroup.category === 'database' ? Database :
                                                 techGroup.category === 'mobile' ? Smartphone : Cloud;
                      return (
                        <button 
                          key={techGroup.category} 
                          onClick={() => handleTechClick(techGroup.category)}
                          style={{ backgroundColor: '#134e4a' }}
                          className="p-5 sm:p-6 rounded-xl hover:bg-[#0f766e] transition-all border border-slate-800 hover:border-cyan-500/60 group text-left space-y-4 flex flex-col justify-between"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2.5">
                                <span className="p-1.5 rounded-lg bg-navy-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                                  <CategoryHeaderIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                                </span>
                                <span>{techGroup.title}</span>
                              </span>
                            </div>
                            <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                              {techGroup.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {techGroup.items.slice(0, 4).map((item, iIdx) => (
                              <span key={iIdx} className="text-xs font-semibold text-slate-200 bg-[#021716] px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1.5 group-hover:border-slate-700">
                                <TechIcon name={item.name} className="w-4 h-4 shrink-0" />
                                <span>{item.name}</span>
                              </span>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={(event) => openDropdown('industries', event)} 
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors py-2 whitespace-nowrap">
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {activeDropdown === 'industries' && (
                <div
                  className="fixed left-1/2 z-50 w-[min(1180px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                  style={{ top: dropdownTop }}
                >
                  <div 
                    style={{ backgroundColor: '#042f2e', opacity: 1, backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
                    className="rounded-2xl p-6 sm:p-8 shadow-[0_35px_100px_rgba(0,0,0,1)] border border-slate-700 text-slate-100 grid grid-cols-2 xl:grid-cols-3 gap-5"
                  >
                    {industrySolutions.map((ind) => {
                      const IndustryIcon = industryIcons[ind.id] || Globe;
                      return (
                      <button 
                        key={ind.id} 
                        onClick={() => handleIndustryClick(ind.id)}
                        style={{ backgroundColor: '#134e4a' }}
                        className="h-full p-5 sm:p-6 rounded-xl hover:bg-[#0f766e] transition-all border border-slate-800 hover:border-cyan-500/60 group text-left flex flex-col justify-between gap-4"
                      >
                        <div className="space-y-3">
                          <span className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                            <span className="p-1.5 rounded-lg bg-navy-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 transition-colors shrink-0">
                              <IndustryIcon className="w-5 h-5 text-cyan-400" />
                            </span>
                            <span>{ind.name}</span>
                          </span>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {ind.summary}
                          </p>
                        </div>
                        <span className="self-start text-xs font-semibold text-cyan-400 bg-[#021716] border border-cyan-800 px-2.5 py-1 rounded-full">
                          {ind.stats}
                        </span>
                      </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a href="#platform" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>HelionixRise™ AI</span>
            </a>

            <a href="#case-studies" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors whitespace-nowrap">
              Case Studies
            </a>

            <a href="#contact" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors whitespace-nowrap">
              About Us
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center shrink-0">
            <button 
              onClick={onOpenContact} 
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <span className="relative px-3.5 2xl:px-4 py-2.5 transition-all ease-in duration-75 bg-[#021716] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2 whitespace-nowrap">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-3 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-[#021716] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Services</div>
            {serviceCategories.map((cat) => {
              const ServiceIcon = serviceIcons[cat.id] || Bot;
              return (
              <button
                key={cat.id}
                onClick={() => handleServiceClick(cat.id)}
                className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
              >
                <ServiceIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{cat.title}</span>
              </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Technologies</div>
            {technologyStack.map((tech) => {
              const CategoryHeaderIcon = tech.category === 'frontend' ? Code2 :
                                         tech.category === 'backend' ? Server :
                                         tech.category === 'database' ? Database : Cloud;
              return (
                <button
                  key={tech.category}
                  onClick={() => handleTechClick(tech.category)}
                  className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
                >
                  <CategoryHeaderIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{tech.title}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Industries</div>
            {industrySolutions.map((ind) => {
              const IndustryIcon = industryIcons[ind.id] || Globe;
              return (
              <button
                key={ind.id}
                onClick={() => handleIndustryClick(ind.id)}
                className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
              >
                <IndustryIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{ind.name}</span>
              </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href="#platform"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-cyan-400 font-medium hover:bg-slate-800"
            >
              HelionixRise™ Agentic AI Platform
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
            >
              Success Stories & Case Studies
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 rounded-xl bg-cyan-500 text-navy-950 font-semibold text-sm hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Schedule Client Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
