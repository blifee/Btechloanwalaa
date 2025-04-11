// src/pages/HomePage.jsx
import React from "react";
import Hero from "../Hero/Hero";
import AndromedaStats from "../Pages/AndromedaStats";
import About from "../Pages/About";
import HexagonGrid from "../Pages/HexagonGrid";
import Subscribe from "../Pages/Partner";
import Banner2 from "../Pages/Banner2";
import CertificatesAwards from "../../Certificate/Certificate";
import ContactForm from "../Pages/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AndromedaStats />
      <About />
      <HexagonGrid />
      <Subscribe />
      <Banner2 />
      <CertificatesAwards />
      <ContactForm />
    </>
  );
};

export default HomePage;
