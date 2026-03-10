import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import AppRouters from "./components/AppRouters.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouters />
      <Footer />
    </BrowserRouter>
  );
};

export default App;