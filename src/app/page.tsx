'use client';

import { useEffect, useState } from 'react';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="pt-20">
        <SubscriptionPlans />
      </div>
    </div>
  );
}
