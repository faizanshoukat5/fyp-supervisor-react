import React, { useState } from "react";
import SupervisorCard from "../views/home/SupervisorCard";
import SectionContainer from "../layouts/SectionContainer";

const Supervisors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterExpertise, setFilterExpertise] = useState("All");

  const supervisors = [
    { 
      name: "Dr. Ayesha Khan", 
      expertise: "Artificial Intelligence", 
      location: "Karachi",
      department: "Computer Science",
      availability: "Available",
      projects: ["AI Healthcare", "Machine Learning"],
      contact: "ayesha.khan@university.edu.pk"
    },
    { 
      name: "Dr. Ahmed Ali", 
      expertise: "Cybersecurity", 
      location: "Lahore",
      department: "Information Security",
      availability: "Limited Slots",
      projects: ["Network Security", "Blockchain"],
      contact: "ahmed.ali@university.edu.pk"
    },
    { 
      name: "Dr. Fatima Malik", 
      expertise: "Software Engineering", 
      location: "Islamabad",
      department: "Software Engineering",
      availability: "Available",
      projects: ["DevOps", "Cloud Computing"],
      contact: "fatima.malik@university.edu.pk"
    },
    { 
      name: "Dr. Hassan Raza",
      expertise: "Data Science",
      location: "Lahore",
      department: "Computer Science",
      availability: "Available",
      projects: ["Big Data Analytics", "Data Mining"],
      contact: "hassan.raza@university.edu.pk"
    },
    { 
      name: "Dr. Sarah Ahmad",
      expertise: "IoT & Embedded Systems",
      location: "Karachi",
      department: "Electrical Engineering",
      availability: "Limited Slots",
      projects: ["Smart Home Systems", "Industrial IoT"],
      contact: "sarah.ahmad@university.edu.pk"
    },
    { 
      name: "Dr. Usman Khalid",
      expertise: "Web Technologies",
      location: "Islamabad",
      department: "Software Engineering",
      availability: "Available",
      projects: ["Full Stack Development", "Progressive Web Apps"],
      contact: "usman.khalid@university.edu.pk"
    },
    { 
      name: "Dr. Zainab Hassan",
      expertise: "Mobile Computing",
      location: "Lahore",
      department: "Computer Science",
      availability: "Available",
      projects: ["Mobile App Development", "Cross-platform Apps"],
      contact: "zainab.hassan@university.edu.pk"
    },
    { 
      name: "Dr. Omar Shah",
      expertise: "Game Development",
      location: "Karachi",
      department: "Media Sciences",
      availability: "Limited Slots",
      projects: ["3D Game Design", "AR/VR Applications"],
      contact: "omar.shah@university.edu.pk"
    },
    { 
      name: "Dr. Maryam Nawaz",
      expertise: "Computer Vision",
      location: "Islamabad",
      department: "Computer Science",
      availability: "Available",
      projects: ["Image Processing", "Pattern Recognition"],
      contact: "maryam.nawaz@university.edu.pk"
    }
  ];

  const expertiseAreas = ["All", ...new Set(supervisors.map(sup => sup.expertise))];
  const filteredSupervisors = supervisors.filter(supervisor => {
    const matchesSearch = supervisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supervisor.expertise.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supervisor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpertise = filterExpertise === "All" || supervisor.expertise === filterExpertise;
    return matchesSearch && matchesExpertise;
  });

  return (
    <SectionContainer>
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section with Animation */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect Supervisor
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with expert supervisors who can guide you through your final year project journey
          </p>
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search by name, expertise, or location..."
                className="w-full px-6 py-4 pl-12 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-4 top-5 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              className="w-full md:w-auto px-6 py-4 text-lg border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
              value={filterExpertise}
              onChange={(e) => setFilterExpertise(e.target.value)}
            >
              {expertiseAreas.map(expertise => (
                <option key={expertise} value={expertise}>
                  {expertise === "All" ? "All Expertise Areas" : expertise}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Supervisors", value: supervisors.length },
            { label: "Available Now", value: supervisors.filter(s => s.availability === "Available").length },
            { label: "Expertise Areas", value: expertiseAreas.length - 1 },
            { label: "Active Projects", value: supervisors.reduce((acc, curr) => acc + curr.projects.length, 0) }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Supervisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSupervisors.map((supervisor, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <SupervisorCard {...supervisor} />
            </div>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredSupervisors.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No matching supervisors found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search criteria or exploring different expertise areas</p>
            <button
              onClick={() => { setSearchTerm(""); setFilterExpertise("All"); }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Supervisors;
