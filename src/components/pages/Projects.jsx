import React, { useState, useEffect } from "react";
import SectionContainer from "../layouts/SectionContainer";
import CardLayout from "../layouts/CardLayout";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    try {
      await addDoc(collection(db, "products"), product);
      alert("Product added successfully!");
    } catch (error) {
      alert("Failed to add product.");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully!");
      // Optionally refresh list or navigate away
    } catch (error) {
      alert("Failed to delete product.");
    }
  };

  const projects = [
    {
      title: "AI-Powered Healthcare System",
      supervisor: "Dr. Ayesha Khan",
      domain: "Artificial Intelligence",
      description: "Developing an intelligent healthcare system for early disease detection using machine learning algorithms.",
      status: "Available",
      duration: "8 months",
      team: "2-3 students",
      requirements: ["Python", "TensorFlow", "Healthcare Domain Knowledge"],
      tags: ["AI", "Healthcare", "Machine Learning"]
    },
    {
      title: "Blockchain-based Supply Chain",
      supervisor: "Dr. Ahmed Ali",
      domain: "Blockchain",
      description: "Implementing a secure and transparent supply chain management system using blockchain technology.",
      status: "Available",
      duration: "6 months",
      team: "2-4 students",
      requirements: ["Solidity", "Web3.js", "Smart Contracts"],
      tags: ["Blockchain", "Supply Chain", "Web3"]
    },
    {
      title: "Smart Home Automation",
      supervisor: "Dr. Fatima Malik",
      domain: "IoT",
      description: "Creating an IoT-based home automation system with voice control and energy monitoring.",
      status: "Available",
      duration: "7 months",
      team: "2-3 students",
      requirements: ["Arduino", "Raspberry Pi", "IoT Protocols"],
      tags: ["IoT", "Automation", "Embedded Systems"]
    },
    {
      title: "Cybersecurity Risk Assessment Tool",
      supervisor: "Dr. Usman Khan",
      domain: "Cybersecurity",
      description: "Developing a tool for automated security risk assessment in enterprise networks.",
      status: "Available",
      duration: "8 months",
      team: "2-3 students",
      requirements: ["Network Security", "Python", "Risk Analysis"],
      tags: ["Security", "Network", "Analysis"]
    },
    {
      title: "Data Analytics Platform",
      supervisor: "Dr. Hassan Raza",
      domain: "Data Science",
      description: "Building a comprehensive data analytics platform with real-time visualization and predictive modeling capabilities.",
      status: "Available",
      duration: "8 months",
      team: "2-3 students",
      requirements: ["Python", "Machine Learning", "Data Visualization"],
      tags: ["Data Science", "Analytics", "ML"]
    },
    {
      title: "Smart Industrial IoT System",
      supervisor: "Dr. Sarah Ahmad",
      domain: "IoT",
      description: "Developing an industrial IoT system for manufacturing process optimization and predictive maintenance.",
      status: "Limited",
      duration: "9 months",
      team: "3-4 students",
      requirements: ["IoT Protocols", "Embedded Systems", "Industrial Automation"],
      tags: ["IoT", "Industry 4.0", "Automation"]
    },
    {
      title: "Progressive Web Application Framework",
      supervisor: "Dr. Usman Khalid",
      domain: "Web Technologies",
      description: "Creating a modern PWA framework with advanced caching strategies and offline capabilities.",
      status: "Available",
      duration: "7 months",
      team: "2-3 students",
      requirements: ["JavaScript", "React", "Service Workers"],
      tags: ["Web Dev", "PWA", "Frontend"]
    },
    {
      title: "Cross-Platform Mobile Solution",
      supervisor: "Dr. Zainab Hassan",
      domain: "Mobile Computing",
      description: "Developing a cross-platform mobile application framework with native performance capabilities.",
      status: "Available",
      duration: "8 months",
      team: "2-3 students",
      requirements: ["React Native", "Mobile Development", "API Integration"],
      tags: ["Mobile", "Cross-platform", "Apps"]
    },
    {
      title: "Virtual Reality Game Engine",
      supervisor: "Dr. Omar Shah",
      domain: "Game Development",
      description: "Building a VR game engine with advanced physics simulation and multiplayer capabilities.",
      status: "Limited",
      duration: "10 months",
      team: "3-4 students",
      requirements: ["Unity3D", "C#", "VR Development"],
      tags: ["VR", "Gaming", "3D"]
    },
    {
      title: "Computer Vision AI System",
      supervisor: "Dr. Maryam Nawaz",
      domain: "Computer Vision",
      description: "Implementing an advanced computer vision system for real-time object detection and tracking.",
      status: "Available",
      duration: "8 months",
      team: "2-3 students",
      requirements: ["Python", "OpenCV", "Deep Learning"],
      tags: ["CV", "AI", "Deep Learning"]
    }
  ];

  const domains = ["All", ...new Set(projects.map(project => project.domain))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.supervisor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = filterDomain === "All" || project.domain === filterDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <SectionContainer>
      <div className="py-12 max-w-7xl mx-auto">
        {/* Header Section with Gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Available FYP Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Explore innovative projects and find the perfect match for your final year
          </p>
        </div>
        
        {/* Enhanced Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-center items-center bg-gray-50 p-6 rounded-xl shadow-sm">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select
            className="px-4 py-3 border rounded-lg bg-white w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
          >
            {domains.map(domain => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <CardLayout key={index}>
              <div className="p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    {project.title}
                  </h2>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <img
                    className="h-8 w-8 rounded-full bg-gray-200"
                    src={`https://ui-avatars.com/api/?name=${project.supervisor.replace(/Dr\.\s/, '')}&background=random`}
                    alt={project.supervisor}
                  />
                  <div>
                    <p className="text-gray-900 font-medium">{project.supervisor}</p>
                    <p className="text-gray-600 text-sm">{project.domain}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    {project.status}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.duration}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {project.team}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Requirements:</h3>
                  <ul className="space-y-2">
                    {project.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardLayout>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Projects;