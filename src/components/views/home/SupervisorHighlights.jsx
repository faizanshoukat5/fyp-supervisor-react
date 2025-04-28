import React from "react";

const SupervisorHighlights = () => {
  const supervisors = [
    { name: "Dr. John Smith", expertise: "Artificial Intelligence" },
    { name: "Dr. Jane Doe", expertise: "Cybersecurity" },
    { name: "Dr. Sam Wilson", expertise: "Software Engineering" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Supervisors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supervisors.map((supervisor, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white text-center"
          >
            <h3 className="font-bold text-lg">{supervisor.name}</h3>
            <p className="text-gray-600">{supervisor.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupervisorHighlights;