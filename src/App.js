import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Realisations from "./Pages/Realisations";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Up from "./components/Up";

import "./styles.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Up />
      <Footer />
    </div>
  );
}
