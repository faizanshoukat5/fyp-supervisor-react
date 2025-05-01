import React from "react";
import SectionContainer from "../../layouts/SectionContainer";

const HowItWorks = () => {
  return (
    <SectionContainer className="bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-blue-500 font-bold text-lg">1.</span>
          <p>Sign up and create your student or supervisor profile.</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-blue-500 font-bold text-lg">2.</span>
          <p>Search for supervisors or students based on expertise and interests.</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-blue-500 font-bold text-lg">3.</span>
          <p>Connect, collaborate, and manage your FYP projects efficiently.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;