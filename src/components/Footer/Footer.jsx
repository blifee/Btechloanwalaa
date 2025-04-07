import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1 , y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">B-Tech Loanwala</h1>
            <p className="text-dark2">
              158, Dani Corporate Park, C.S.T Road Kalina, Santacruz (E), Mumbai - 400098
Mail Us: contact@b-techloanwala.in
Call Us: 1800 123 3001
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Company</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Careers
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  About Us
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Contact Us
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Lending Partners
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Grievance Redressal
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  RBI Sachet Portal
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Financial Tools</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  EMI Calculator
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                  Balance Transfer Calculator
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* Social Icons */}
<div className="flex space-x-6 py-3">
  <a href="">
    <FaWhatsapp className="text-4xl text-green-500 cursor-pointer hover:scale-125 duration-200" />
  </a>
  <a href="https://www.instagram.com/btechloanwala/">
    <FaInstagram className="text-4xl text-pink-500 cursor-pointer hover:scale-125 duration-200" />
  </a>
  <a href="https://www.linkedin.com/company/btechloanwala?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in">
    <TbWorldWww className="text-4xl text-blue-500 cursor-pointer hover:scale-125 duration-200" />
  </a>
  <a href="https://www.youtube.com/@TheCodingJourney">
    <FaYoutube className="text-4xl text-red-500 cursor-pointer hover:scale-125 duration-200" />
  </a>
</div>

          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
