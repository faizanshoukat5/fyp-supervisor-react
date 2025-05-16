import React from 'react';

const Statistics = () => {
  const stats = [
    { number: '500+', label: 'Active Projects' },
    { number: '200+', label: 'Expert Supervisors' },
    { number: '1000+', label: 'Students Connected' },
    { number: '50+', label: 'Universities' }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;