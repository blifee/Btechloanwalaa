import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage"; // Yeh sahi component hai
import Loan from "../HeaderAndFooter/Home";
import Partner from "../Pages/Partner";
import ContactUs from "../Pages/ContactForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
