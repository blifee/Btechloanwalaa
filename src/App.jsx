// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import ContactForm from "./components/Pages/ContactForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import './index.css'; // Bas itna
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<Login />} />  {/* Login Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
