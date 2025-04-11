// // App.jsx
// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link,  } from "react-router-dom";
// import HomePage from "./components/Pages/HomePage";
// import ContactForm from "./components/Pages/ContactForm";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import './index.css'; // Bas itna
// import About from "./components/Pages/About";
// import Login from "./components/Pages/Login";
// import AOS from "aos";
// import "aos/dist/aos.css";
import React from "react";
import Header from "./components/HeaderAndFooter/Header";
import Footer from "./components/HeaderAndFooter/Footer";
import AppRoutes from "./components/Routing/AppRoutes";


const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
