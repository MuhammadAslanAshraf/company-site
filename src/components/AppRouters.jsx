import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/ZeroneAboutPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AIServices from "./service/AIServices";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/generative-ai" element={<AIServices/>} />  
    </Routes>
  );
};

export default AppRouters;