import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import SupervisorHighlights from "./SupervisorHighlights";
import StudentFeedback from "./StudentFeedback";
import InfoSection from "./InfoSection";
import CallToAction from "./CallToAction";
import Features from "./Features";
import Testimonials from "./Testimonials";
import SectionContainer from "../../layouts/SectionContainer";
import CardLayout from "../../layouts/CardLayout";
import TestimonialBox from "./TestimonialBox";
import SupervisorCard from "./SupervisorCard";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <SupervisorHighlights />
      <StudentFeedback />
      <InfoSection />
      <Features />
      <Testimonials />
      <TestimonialBox />
      <SupervisorCard />
      <CallToAction />
    </>
  );
};

export default Home;