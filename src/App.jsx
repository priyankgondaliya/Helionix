import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import PlatformSpotlight from './components/PlatformSpotlight';
import IndustrySolutions from './components/IndustrySolutions';
import CaseStudies from './components/CaseStudies';
import EcosystemPartners from './components/EcosystemPartners';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { serviceCategories, industrySolutions, technologyStack } from './data/siteData';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(serviceCategories[0].id);
  const [activeIndustryTab, setActiveIndustryTab] = useState(industrySolutions[0].id);
  const [activeTechCategory, setActiveTechCategory] = useState('all');

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  // Dynamic Document Title based on visible section and selected category
  useEffect(() => {
    const getTitleForSection = (sectionId) => {
      switch (sectionId) {
        case 'hero':
          return 'Helionix Technologies - Enterprise AI, Data & Digital Engineering Solutions';
        case 'services': {
          const currentCat = serviceCategories.find(c => c.id === activeServiceTab);
          return currentCat 
            ? `${currentCat.title} | Helionix Technologies` 
            : 'Services | Helionix Technologies';
        }
        case 'technologies': {
          const currentTech = technologyStack.find(t => t.category === activeTechCategory);
          return currentTech 
            ? `${currentTech.title} | Helionix Technologies` 
            : 'Technologies & Tech Stack | Helionix Technologies';
        }
        case 'platform':
          return 'HelionixRise™ AI Platform | Helionix Technologies';
        case 'industries': {
          const currentInd = industrySolutions.find(i => i.id === activeIndustryTab);
          return currentInd 
            ? `${currentInd.name} Solutions | Helionix Technologies` 
            : 'Industry Solutions | Helionix Technologies';
        }
        case 'case-studies':
          return 'Enterprise Case Studies | Helionix Technologies';
        case 'contact':
          return 'Contact & About Us | Helionix Technologies';
        default:
          return 'Helionix Technologies - Enterprise AI, Data & Digital Engineering Solutions';
      }
    };

    const sectionIds = ['hero', 'services', 'technologies', 'platform', 'industries', 'case-studies', 'contact'];
    let currentIntersectedId = 'hero';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentIntersectedId = entry.target.id;
            document.title = getTitleForSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Initial title update
    document.title = getTitleForSection('hero');

    return () => observer.disconnect();
  }, [activeServiceTab, activeTechCategory, activeIndustryTab]);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-navy-950">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#042f2e',
            color: '#FFFFFF',
            border: '1px solid #115e59',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          },
          success: {
            iconTheme: {
              primary: '#00E5FF',
              secondary: '#021716',
            },
          },
        }}
      />
      
      {/* Navigation Header */}
      <Navbar 
        onOpenContact={handleOpenContact}
        onSelectService={(id) => setActiveServiceTab(id)}
        onSelectIndustry={(id) => setActiveIndustryTab(id)}
        onSelectTechnology={(cat) => setActiveTechCategory(cat)}
      />

      {/* Main Section Content */}
      <main className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        
        <ServicesSection 
          onOpenContact={handleOpenContact} 
          activeTab={activeServiceTab}
          onSelectTab={(id) => setActiveServiceTab(id)}
        />
        
        <TechnologiesSection 
          onOpenContact={handleOpenContact}
          activeCategory={activeTechCategory}
          onSelectCategory={(cat) => setActiveTechCategory(cat)}
        />
        
        <PlatformSpotlight onOpenContact={handleOpenContact} />
        
        <IndustrySolutions 
          onOpenContact={handleOpenContact}
          activeTab={activeIndustryTab}
          onSelectTab={(id) => setActiveIndustryTab(id)}
        />
        
        <CaseStudies onOpenContact={handleOpenContact} />
        <EcosystemPartners />
        
        {/* Testimonials & Ratings Section (Commented out as requested) */}
        {/* <Testimonials /> */}
        
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenContact={handleOpenContact} 
        onSelectService={(id) => setActiveServiceTab(id)}
        onSelectIndustry={(id) => setActiveIndustryTab(id)}
        onSelectTechnology={(cat) => setActiveTechCategory(cat)}
      />

      {/* Global Contact / Consultation Popup Modal */}
      {isContactModalOpen && (
        <ContactSection 
          isOpenModal={true} 
          onCloseModal={handleCloseContact} 
        />
      )}

    </div>
  );
}
