import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Mr. Amit",
    role: "Founder & CEO of B-Tech Loanwala",
    img: "./src/assets/profile.jpeg",
    quote:
      "“As an insurance advisor, Andromeda has given a massive boost to my overall client base. Their extensive user database ensures that I get the right leads, and an easy-to-use digital platform makes converting them that much easier.”",
  },
  {
    name: "Mr. Amit",
    role: "Founder & CEO of B-Tech Loanwala",
    img: "./src/assets/profile.jpeg",
    quote:
      "“As an insurance advisor, Andromeda has given a massive boost to my overall client base. Their extensive user database ensures that I get the right leads, and an easy-to-use digital platform makes converting them that much easier.”",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBecomePartner = () => {
    navigate("/login");
  };

  return (
    <div data-aos="flip-left" className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-6xl mx-auto p-6 sm:p-10 bg-white rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2 text-center">
          Highest Standards. Happiest Partners
        </h2>
        <h3 className="text-gray-800 font-semibold text-lg sm:text-2xl text-center">
          Our Partners Are Our Strength
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6"
          >
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl object-cover shadow-lg"
            />
            <div className="text-center md:text-left max-w-xl">
              <p className="text-gray-600 text-base sm:text-lg italic px-2 sm:px-0">
                "{testimonials[index].quote}"
              </p>
              <div className="flex items-center mt-4 justify-center md:justify-start">
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 border-2 border-indigo-500"
                />
                <div>
                  <h5 className="font-bold text-gray-900 text-base sm:text-lg">
                    {testimonials[index].name}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-8">
          {/* <button
            onClick={handleBecomePartner}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-xl transition duration-300"
          >
            Become a Partner
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
