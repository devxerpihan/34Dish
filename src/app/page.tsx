'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from '../components/Dashboard';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';

export default function Home() {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  // If user is authenticated, show the dashboard
  if (user) {
    return <Dashboard />;
  }

  // Otherwise, show the landing page
  return (
    <main className="min-h-screen">
      <Header onShowLogin={() => setShowLogin(true)} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </main>
  );
}
