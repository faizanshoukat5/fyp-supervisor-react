import React from "react";

const departments = [
  {
    name: "Computer Science",
    icon: "💻",
    description: "Focuses on computing, programming, and software systems.",
    website: "https://cs.uol.edu.pk/"
  },
  {
    name: "Software Engineering",
    icon: "🛠️",
    description: "Emphasizes software design, development, and project management.",
    website: "https://se.uol.edu.pk/"
  },
  {
    name: "Department of Intelligent Systems",
    icon: "🌐",
    description: "Covers IS infrastructure, networking, and systems administration.",
    website: "https://is.uol.edu.pk/"
  }
];

const UniversityPartners = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Our Departments
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-16">
        {departments.map((dept, index) => (
          <a
            key={index}
            href={dept.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 h-48 bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-5xl mb-4">{dept.icon}</div>
            <p className="text-xl font-semibold text-center text-blue-700">{dept.name}</p>
            <p className="mt-2 text-center text-gray-600 text-sm">{dept.description}</p>
            <span className="mt-2 text-blue-500 text-xs underline">Visit Website</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default UniversityPartners;