import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


const testimonials = [
  {
    name: "Mr. Amit ",
    role: "Founder & CEO of B-Tech Loanwala",
    img: "./src/assets/profile.jpeg", 
    quote: "“As an insurance advisor, Andromeda has given a massive boost to my overall client base. Their extensive user database ensures that I get the right leads, and an easy-to-use digital platform makes converting them that much easier.”",
  },
  {
    name: "Mr. Amit ",
    role: "Founder & CEO of B-Tech Loanwala",
    img: "./src/assets/profile.jpeg", 
    quote: "“As an insurance advisor, Andromeda has given a massive boost to my overall client base. Their extensive user database ensures that I get the right leads, and an easy-to-use digital platform makes converting them that much easier.”",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // 👈 Navigation hook

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBecomePartner = () => {
    navigate("/login"); // 👈 Redirect to login page
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-5xl mx-auto p-10 bg-white rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 text-center">
          Highest Standards. Happiest Partners
        </h2>
        <h3 className="text-gray-800 font-semibold text-2xl text-center">
          Our Partners Are Our Strength
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center mt-6"
          >
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-80 h-80 rounded-xl object-cover"
            />
            <div className="ml-8 text-center md:text-left">
              <p className="text-gray-600 text-lg italic">"{testimonials[index].quote}"</p>
              <div className="flex items-center mt-4 justify-center md:justify-start">
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full mr-3 border-2 border-indigo-500"
                />
                <div>
                  <h5 className="font-bold text-gray-900 text-xl">{testimonials[index].name}</h5>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 👇 Become a Partner Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleBecomePartner}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
>
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
