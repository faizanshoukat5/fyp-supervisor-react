import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/views/home/Home";
import Supervisors from "./components/pages/Supervisors";
import Projects from "./components/pages/Projects";
import Login from "./components/pages/Login";
import Logo from "./components/layouts/Logo";  

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supervisors" element={<Supervisors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
