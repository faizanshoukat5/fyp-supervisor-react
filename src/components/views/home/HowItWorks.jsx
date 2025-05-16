import React from "react";

const steps = [
  {
    title: "1. Sign Up",
    desc: "Create your free account and set up your profile.",
    icon: (
      <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "2. Search & Match",
    desc: "Browse supervisors and projects, filter by expertise, and find your best match.",
    icon: (
      <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "3. Connect",
    desc: "Message supervisors, discuss your ideas, and finalize your project.",
    icon: (
      <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "4. Succeed",
    desc: "Work together and complete your FYP with expert guidance.",
    icon: (
      <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

const HowItWorks = () => (
  <div className="py-16 bg-gradient-to-b from-white to-blue-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-full md:w-1/4 flex flex-col items-center relative group hover:-translate-y-1"
          >
            {step.icon}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              {step.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <svg 
                  className="w-8 h-8 text-blue-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowItWorks;