import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebaseConfig";
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from "firebase/firestore";

export default function FacultyManagement() {
  const [facultyList, setFacultyList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    slots: "",
    officeHours: ""
  });
  const [editId, setEditId] = useState(null);

  const facultyRef = collection(db, "faculty");

  useEffect(() => {
    const unsub = onSnapshot(facultyRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFacultyList(data);
    });
    return () => unsub();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const docRef = doc(db, "faculty", editId);
      await updateDoc(docRef, formData);
      setEditId(null);
    } else {
      await addDoc(facultyRef, formData);
    }
    setFormData({ name: "", email: "", domain: "", slots: "", officeHours: "" });
  };

  const handleEdit = (faculty) => {
    setFormData(faculty);
    setEditId(faculty.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "faculty", id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Faculty Management</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
        {["name", "email", "domain", "slots", "officeHours"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field}
            className="border p-2 rounded"
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
          {editId ? "Update Faculty" : "Add Faculty"}
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-2">Current Faculty</h3>
        {facultyList.map((f) => (
          <div key={f.id} className="border p-4 mb-2 rounded bg-white shadow-sm">
            <p><strong>Name:</strong> {f.name}</p>
            <p><strong>Email:</strong> {f.email}</p>
            <p><strong>Domain:</strong> {f.domain}</p>
            <p><strong>Slots:</strong> {f.slots}</p>
            <p><strong>Office Hours:</strong> {f.officeHours}</p>
            <div className="mt-2">
              <button onClick={() => handleEdit(f)} className="mr-2 bg-yellow-400 px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(f.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
