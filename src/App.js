import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home page that includes Products and Services */}
        <Route path="/" element={<Home />} />

        {/* Separate routes for Contact Us and About Us pages */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
