import React, { useEffect } from 'react';
import PlatformSpotlight from '../components/PlatformSpotlight';

export default function PlatformPage({ onOpenContact }) {
  useEffect(() => {
    document.title = 'HelionixRise™ AI Platform | Helionix Technologies';
  }, []);

  return (
    <main className="flex-grow">
      <PlatformSpotlight onOpenContact={onOpenContact} />
    </main>
  );
}
