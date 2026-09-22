import React, { useEffect } from 'react';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage({ onOpenContact }) {
  useEffect(() => {
    document.title = 'Enterprise Case Studies | Helionix Technologies';
  }, []);

  return (
    <main className="flex-grow">
      <CaseStudies onOpenContact={onOpenContact} />
    </main>
  );
}
