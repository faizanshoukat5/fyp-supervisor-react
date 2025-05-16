import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Statistics from './Statistics';
import SupervisorHighlights from './SupervisorHighlights';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import UniversityPartners from './UniversityPartners';
import CallToAction from './CallToAction';
import SectionContainer from '../../layouts/SectionContainer';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with full width */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Floating Stats Card */}
      <div className="relative z-10 -mt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <Statistics />
          </div>
        </div>
      </div>

      {/* Features with enhanced spacing */}
      <SectionContainer className="py-20">
        <Features />
      </SectionContainer>

      {/* How It Works with background pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50 opacity-50" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA3F4' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
        <SectionContainer className="py-20">
          <HowItWorks />
        </SectionContainer>
      </div>

      {/* Supervisor Highlights with gradient background */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <SectionContainer className="py-20">
          <SupervisorHighlights />
        </SectionContainer>
      </div>

      {/* Testimonials with curved sections */}
      <div className="relative">
        <div className="absolute top-0 w-full h-20 bg-gray-50"></div>
        <div className="absolute bottom-0 w-full h-20 bg-white"></div>
        <div className="relative z-10">
          <SectionContainer className="py-20">
            <Testimonials />
          </SectionContainer>
        </div>
      </div>

      {/* University Partners with card design */}
      <SectionContainer className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <UniversityPartners />
        </div>
      </SectionContainer>

      {/* Call to Action with enhanced design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
        <div className="relative z-10">
          <SectionContainer className="py-16">
            <CallToAction />
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;