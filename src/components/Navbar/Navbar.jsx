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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 bg-purple-900 shadow-lg border border-purple-200 relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <img
  src={LOGO}
  alt="Logo"
  className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain transition-transform duration-300"
/>


        {/* Desktop Menu */}
        <ul
          className="relative hidden lg:flex items-center w-fit rounded-full border-2 border-black bg-white p-1"
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

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-3xl text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Desktop Loans Dropdown */}
      {isLoanHovered && (
        <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-md w-60 hidden lg:block">
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

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-5 space-y-4 lg:hidden"
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-black text-xl font-bold mb-4"
        >
          ✕
        </button>

        {NavbarMenu.map((menu) => (
          <div key={menu.id}>
            <button
              className="text-left w-full py-2 text-gray-800 font-semibold"
              onClick={() => {
                if (menu.title === "Loans") {
                  setIsLoanHovered((prev) => !prev);
                } else {
                  setIsLoanHovered(false);
                  setMobileMenuOpen(false);
                }
              }}
            >
              {menu.title}
            </button>

            {/* Mobile dropdown for Loans */}
            {menu.title === "Loans" && isLoanHovered && (
              <div className="pl-4 pt-1 space-y-1">
                {loanDropdown.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block text-sm text-gray-600 hover:text-purple-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference lg:px-5 lg:py-3 lg:text-base"
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
      className="absolute z-0 h-7 lg:h-12 rounded-full bg-black"
    />
  );
};

export default Navbar;
