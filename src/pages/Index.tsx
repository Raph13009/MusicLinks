
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-ml-white">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
