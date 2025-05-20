// src/App.jsx

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/views/home/Home";
import Supervisors from "./components/pages/Supervisors";
import Projects from "./components/pages/Projects";
import Login from "./components/pages/Login";
import Logo from "./components/layouts/Logo";
import Register from "./components/pages/Register";
import FacultyManagement from "./components/pages/admin/FacultyManagement";

<Route path="/admin/faculty" element={<FacultyManagement />} />


import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig"; // ✅ correct path and export

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center py-10">Checking auth status...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar user={user} />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supervisors" element={<Supervisors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/faculty" element={<FacultyManagement />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
