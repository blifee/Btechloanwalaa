import React, { useState, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import LOGO from "../../assets/LL.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Loans", path: "#" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Become a Partner", path: "/partner" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const loanDropdown = [
  "Personal Loans",
  "Business Loans",
  "Home Loans",
  "Education Loans",
  "Car Loans",
  "Working Capital",
  "MSME & Startup Finance",
];

const Navbar = () => {
  const [isLoanHovered, setIsLoanHovered] = useState(false);
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <nav className="w-full py-6 bg-purple-900 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-xl border border-purple-200">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 flex justify-between items-center"
      >
       <img
  src={LOGO}
  alt="Logo"
  className="h-11 object-contain scale-[3.3] -ml-4 mt-4 transition-transform duration-300"
/>





        <ul
          className="relative hidden md:flex items-center w-fit rounded-full border-2 border-black bg-white p-1"
          onMouseLeave={() => setCursor((pv) => ({ ...pv, opacity: 0 }))}
        >
          {NavbarMenu.map((menu) => (
            <Tab
              key={menu.id}
              menu={menu}
              setCursor={setCursor}
              setIsLoanHovered={setIsLoanHovered}
            />
          ))}
          <Cursor position={cursor} />
        </ul>

        <div className="md:hidden">
          <IoMdMenu className="text-3xl text-gray-800 cursor-pointer" />
        </div>
      </motion.div>

      {isLoanHovered && (
        <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-md z-50 w-60">
          {loanDropdown.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Tab = ({ menu, setCursor, setIsLoanHovered }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setCursor({ left: ref.current.offsetLeft, width, opacity: 1 });
    if (menu.title === "Loans") setIsLoanHovered(true);
  };

  const handleMouseLeave = () => {
    if (menu.title === "Loans") setIsLoanHovered(false);
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={menu.path} className="inline-flex items-center">
        {menu.title}
        {menu.title === "Loans" && (
          <span className="ml-1">
            <FaChevronDown size={12} className="transition-transform duration-200" />
          </span>
        )}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 md:h-12 rounded-full bg-black"
    />
  );
};

export default Navbar;
