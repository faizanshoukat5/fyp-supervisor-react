import React from "react";
import SupervisorCard from "./SupervisorCard";

const SupervisorHighlights = () => {
  const supervisors = [
    { name: "Dr. Ayesha Khan", expertise: "Artificial Intelligence", location: "Karachi" },
    { name: "Dr. Ahmed Ali", expertise: "Cybersecurity", location: "Lahore" },
    { name: "Dr. Fatima Malik", expertise: "Software Engineering", location: "Islamabad" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Supervisors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supervisors.map((supervisor, index) => (
          <SupervisorCard
            key={index}
            name={supervisor.name}
            expertise={supervisor.expertise}
            location={supervisor.location}
          />
        ))}
      </div>
    </section>
  );
};

export default SupervisorHighlights;