import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import SupervisorHighlights from "./SupervisorHighlights";
import StudentFeedback from "./StudentFeedback";
import CallToAction from "./CallToAction";
import InfoSection from "./InfoSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <SupervisorHighlights />
      <StudentFeedback />
      <InfoSection />
      <CallToAction />
    </>
  );
};

export default Home;