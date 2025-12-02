import { Routes, Route } from "react-router";

import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

export default function Sanmarina() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
