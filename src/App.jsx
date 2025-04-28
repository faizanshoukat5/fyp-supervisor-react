import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/views/home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here for other views */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
