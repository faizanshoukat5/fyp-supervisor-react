import React from "react";
import SupervisorCard from "./SupervisorCard";
import { Link } from "react-router-dom";

const SupervisorHighlights = () => {
  const supervisors = [
    { 
      name: "Dr. Ayesha Khan",
      expertise: "Artificial Intelligence",
      location: "UOL Lahore",
      projects: ["AI Healthcare", "Machine Learning"]
    },
    { 
      name: "Dr. Ahmed Ali",
      expertise: "Cybersecurity",
      location: "UOL Lahore",
      projects: ["Network Security", "Blockchain"]
    },
    { 
      name: "Dr. Fatima Malik",
      expertise: "Software Engineering",
      location: "UOL Lahore",
      projects: ["DevOps", "Cloud Computing"]
    },
    { 
      name: "Dr. Hassan Raza",
      expertise: "Data Science",
      location: "UOL Lahore",
      projects: ["Big Data Analytics", "Data Mining"]
    },
    { 
      name: "Dr. Sarah Ahmad",
      expertise: "IoT & Embedded Systems",
      location: "UOL Lahore",
      projects: ["Smart Home Systems", "Industrial IoT"]
    },
    { 
      name: "Dr. Usman Khalid",
      expertise: "Web Technologies",
      location: "UOL Lahore",
      projects: ["Full Stack Development", "Progressive Web Apps"]
    },
    { 
      name: "Dr. Zainab Hassan",
      expertise: "Mobile Computing",
      location: "UOL Lahore",
      projects: ["Mobile App Development", "Cross-platform Apps"]
    },
    { 
      name: "Dr. Omar Shah",
      expertise: "Game Development",
      location: "UOL Lahore",
      projects: ["3D Game Design", "AR/VR Applications"]
    },
    { 
      name: "Dr. Maryam Nawaz",
      expertise: "Computer Vision",
      location: "UOL Lahore",
      projects: ["Image Processing", "Pattern Recognition"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Supervisors
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with leading experts in your field of interest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supervisors.slice(0, 6).map((supervisor, index) => (
            <SupervisorCard key={index} {...supervisor} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/supervisors"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Supervisors
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupervisorHighlights;