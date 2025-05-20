import React, { useState, useEffect } from "react";
import SectionContainer from "../layouts/SectionContainer";
import CardLayout from "../layouts/CardLayout";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    supervisor: "",
    domain: "",
    description: "",
    status: "Available",
    duration: "",
    team: "",
    requirements: [],
    tags: []
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (project) => {
    try {
      await addDoc(collection(db, "products"), project);
      alert("Product added successfully!");
      setShowAddForm(false);
      setNewProject({
        title: "",
        supervisor: "",
        domain: "",
        description: "",
        status: "Available",
        duration: "",
        team: "",
        requirements: [],
        tags: []
      });
      // Refresh products after adding
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      alert("Failed to add product.");
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully!");
      // Refresh products after deleting
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      alert("Failed to delete product.");
    }
  };

  const domains = ["All", ...new Set(products.map(project => project.domain))];

  const filteredProjects = products.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.supervisor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = filterDomain === "All" || project.domain === filterDomain;
    return matchesSearch && matchesDomain;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value.split(",").map(item => item.trim()).filter(Boolean)
    }));
  };

  const handleSubmitNewProject = (e) => {
    e.preventDefault();
    handleAddProduct(newProject);
  };

  return (
    <SectionContainer>
      <div className="py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Available FYP Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Explore innovative projects and find the perfect match for your final year
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? "Cancel" : "Add New Project"}
          </button>
        </div>

        {showAddForm && (
          <form
            className="mb-12 bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmitNewProject}
          >
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Supervisor</label>
              <input
                type="text"
                name="supervisor"
                value={newProject.supervisor}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Domain</label>
              <input
                type="text"
                name="domain"
                value={newProject.domain}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Status</label>
              <select
                name="status"
                value={newProject.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
              >
                <option value="Available">Available</option>
                <option value="Limited">Limited</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Duration</label>
              <input
                type="text"
                name="duration"
                value={newProject.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Team</label>
              <input
                type="text"
                name="team"
                value={newProject.team}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Requirements (comma separated)</label>
              <input
                type="text"
                name="requirements"
                value={newProject.requirements.join(", ")}
                onChange={handleArrayInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={newProject.tags.join(", ")}
                onChange={handleArrayInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Add Project
              </button>
            </div>
          </form>
        )}

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <CardLayout key={project.id || index}>
              <div className="p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    {project.title}
                  </h2>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteProduct(project.id)}
                    className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    title="Delete Project"
                  >
                    Delete
                  </button>
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