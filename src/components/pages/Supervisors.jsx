import React, { useState, useEffect } from "react";
import SectionContainer from "../layouts/SectionContainer";
import CardLayout from "../layouts/CardLayout";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

const demoSupervisors = [
  { id: "demo-1", name: "Dr. Sarah Khan", department: "Computer Science", email: "sarah.khan@example.com" },
  { id: "demo-2", name: "Prof. Ahmed Ali", department: "Electrical Engineering", email: "ahmed.ali@example.com" },
  { id: "demo-3", name: "Ms. Fatima Noor", department: "Business Studies", email: "fatima.noor@example.com" },
];

const Supervisors = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSupervisor, setNewSupervisor] = useState({
    name: "",
    department: "",
    email: ""
  });
  const [isFirestoreEmpty, setIsFirestoreEmpty] = useState(false);

  const fetchSupervisors = async () => {
    const snapshot = await getDocs(collection(db, "supervisors"));
    if (snapshot.empty) {
      setIsFirestoreEmpty(true);
      setSupervisors(demoSupervisors);
    } else {
      setIsFirestoreEmpty(false);
      const supervisorsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSupervisors(supervisorsData);
    }
  };

  useEffect(() => {
    fetchSupervisors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupervisor(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSupervisor = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "supervisors"), newSupervisor);
      alert("Supervisor added successfully!");
      setShowAddForm(false);
      setNewSupervisor({ name: "", department: "", email: "" });
      fetchSupervisors();
    } catch (error) {
      alert("Failed to add supervisor.");
    }
  };

  const handleDeleteSupervisor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this supervisor?")) return;
    try {
      await deleteDoc(doc(db, "supervisors", id));
      alert("Supervisor deleted successfully!");
      fetchSupervisors();
    } catch (error) {
      alert("Failed to delete supervisor.");
    }
  };

  return (
    <SectionContainer>
      <div className="py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Supervisors
          </h1>
          <p className="text-gray-600 text-lg">
            List of project supervisors and their details.
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? "Cancel" : "Add Supervisor"}
          </button>
        </div>

        {showAddForm && (
          <form
            className="mb-12 bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
            onSubmit={handleAddSupervisor}
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={newSupervisor.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Department</label>
              <input
                type="text"
                name="department"
                value={newSupervisor.department}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={newSupervisor.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg mb-3"
                required
              />
            </div>
            <div className="md:col-span-3 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Add Supervisor
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supervisors.map((sup) => (
            <CardLayout key={sup.id}>
              <div className="p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-xl font-bold text-blue-700 mb-2">{sup.name}</h2>
                <p className="text-gray-700 mb-1"><strong>Department:</strong> {sup.department}</p>
                <p className="text-gray-700 mb-4"><strong>Email:</strong> {sup.email}</p>
                {!isFirestoreEmpty && (
                  <button
                    onClick={() => handleDeleteSupervisor(sup.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    title="Delete Supervisor"
                  >
                    Delete
                  </button>
                )}
              </div>
            </CardLayout>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Supervisors;
