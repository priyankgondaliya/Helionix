import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import { serviceCategories, industrySolutions } from './data/siteData';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    let cancelled = false;
    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const frame = requestAnimationFrame(() => {
      setTimeout(tryScroll, 60);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [location.pathname, location.key]);

  return null;
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(serviceCategories[0].id);
  const [activeIndustryTab, setActiveIndustryTab] = useState(industrySolutions[0].id);
  const [activeTechCategory, setActiveTechCategory] = useState('all');

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

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

      <ScrollManager />

      <Navbar
        onOpenContact={handleOpenContact}
        onSelectService={(id) => setActiveServiceTab(id)}
        onSelectIndustry={(id) => setActiveIndustryTab(id)}
        onSelectTechnology={(cat) => setActiveTechCategory(cat)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenContact={handleOpenContact}
              activeServiceTab={activeServiceTab}
              onSelectServiceTab={(id) => setActiveServiceTab(id)}
              activeIndustryTab={activeIndustryTab}
              onSelectIndustryTab={(id) => setActiveIndustryTab(id)}
              activeTechCategory={activeTechCategory}
              onSelectTechCategory={(cat) => setActiveTechCategory(cat)}
            />
          }
        />
        <Route
          path="/platform"
          element={<PlatformPage onOpenContact={handleOpenContact} />}
        />
        <Route
          path="/case-studies"
          element={<CaseStudiesPage onOpenContact={handleOpenContact} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer
        onOpenContact={handleOpenContact}
        onSelectService={(id) => setActiveServiceTab(id)}
        onSelectIndustry={(id) => setActiveIndustryTab(id)}
        onSelectTechnology={(cat) => setActiveTechCategory(cat)}
      />

      {isContactModalOpen && (
        <ContactSection
          isOpenModal={true}
          onCloseModal={handleCloseContact}
        />
      )}
    </div>
  );
}
