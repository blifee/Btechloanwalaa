// src/pages/HomePage.jsx
import React from "react";
import Hero from "../Hero/Hero";
import AndromedaStats from "./AndromedaStats";
import About from "./About";
import HexagonGrid from "./HexagonGrid";
import Subscribe from "./Partner";
import Banner2 from "./Banner2";
import CertificatesAwards from "../../Certificate/Certificate";
import ContactForm from "../Pages/ContactForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AndromedaStats />
      <HexagonGrid />
      <About />
      <Subscribe />
      <Banner2 />
      <CertificatesAwards />
      <ContactForm />
    </>
  );
};

export default HomePage;
