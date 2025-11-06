import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BenefitsTestimonials from './components/BenefitsTestimonials';
import CTAAndFooter from './components/CTAAndFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <HowItWorks />
      <BenefitsTestimonials />
      <CTAAndFooter />
    </div>
  );
}

export default App;
