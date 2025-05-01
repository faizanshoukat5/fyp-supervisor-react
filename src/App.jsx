import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/views/home/Home";
import SectionContainer from "./components/layouts/SectionContainer";
import CardLayout from "./components/layouts/CardLayout";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="mt-16">
        <SectionContainer className="bg-gray-100">
          <CardLayout>
            <Routes>
              {/* Route for the Home page */}
              <Route path="/" element={<Home />} />
              {/* Add more routes here for other views */}
            </Routes>
          </CardLayout>
        </SectionContainer>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
