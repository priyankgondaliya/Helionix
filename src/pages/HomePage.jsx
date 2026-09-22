import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import IndustrySolutions from '../components/IndustrySolutions';
import EcosystemPartners from '../components/EcosystemPartners';
import { serviceCategories, industrySolutions, technologyStack } from '../data/siteData';

export default function HomePage({
  onOpenContact,
  activeServiceTab,
  onSelectServiceTab,
  activeIndustryTab,
  onSelectIndustryTab,
  activeTechCategory,
  onSelectTechCategory,
}) {
  useEffect(() => {
    const getTitleForSection = (sectionId) => {
      switch (sectionId) {
        case 'hero':
          return 'Helionix Technologies - Enterprise AI, Data & Digital Engineering Solutions';
        case 'services': {
          const currentCat = serviceCategories.find((c) => c.id === activeServiceTab);
          return currentCat
            ? `${currentCat.title} | Helionix Technologies`
            : 'Services | Helionix Technologies';
        }
        case 'technologies': {
          const currentTech = technologyStack.find((t) => t.category === activeTechCategory);
          return currentTech
            ? `${currentTech.title} | Helionix Technologies`
            : 'Technologies & Tech Stack | Helionix Technologies';
        }
        case 'industries': {
          const currentInd = industrySolutions.find((i) => i.id === activeIndustryTab);
          return currentInd
            ? `${currentInd.name} Solutions | Helionix Technologies`
            : 'Industry Solutions | Helionix Technologies';
        }
        default:
          return 'Helionix Technologies - Enterprise AI, Data & Digital Engineering Solutions';
      }
    };

    const sectionIds = ['hero', 'services', 'technologies', 'industries'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

    document.title = getTitleForSection('hero');

    return () => observer.disconnect();
  }, [activeServiceTab, activeTechCategory, activeIndustryTab]);

  return (
    <main className="flex-grow">
      <Hero onOpenContact={onOpenContact} />

      <ServicesSection
        onOpenContact={onOpenContact}
        activeTab={activeServiceTab}
        onSelectTab={onSelectServiceTab}
      />

      <TechnologiesSection
        onOpenContact={onOpenContact}
        activeCategory={activeTechCategory}
        onSelectCategory={onSelectTechCategory}
      />

      <IndustrySolutions
        onOpenContact={onOpenContact}
        activeTab={activeIndustryTab}
        onSelectTab={onSelectIndustryTab}
      />

      <EcosystemPartners />
    </main>
  );
}
