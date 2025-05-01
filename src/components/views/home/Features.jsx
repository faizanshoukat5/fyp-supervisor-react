import React from "react";

const Features = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Key Features</h2>
      <ul className="mt-4 space-y-4 max-w-4xl mx-auto">
        <li className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold">✔</span>
          <p>Search for supervisors based on expertise and location.</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold">✔</span>
          <p>View detailed supervisor profiles with research areas.</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold">✔</span>
          <p>Connect with supervisors and manage project collaborations.</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold">✔</span>
          <p>Track project progress and milestones efficiently.</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold">✔</span>
          <p>Secure and user-friendly platform for students and supervisors.</p>
        </li>
      </ul>
    </section>
  );
};

export default Features;