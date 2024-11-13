import React, { useContext } from 'react';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SAPTrainings from './SAPTrainings';
import SAPOutsourcing from './SAPOutsource';
import SAPRollout from './SAPRollout';
import SAPUpgrade from './SAPUpgrade';
import Footer from './Footer';
import Technologies from './Technologies';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <div id="top" className="pt-16">
        <HeroSection />
        <SAPTrainings />
        <SAPOutsourcing />
        <SAPRollout />
        <SAPUpgrade />
        
        <div id="product-section">
          <Technologies />
        </div>
        
        <div id="services-section">
          <OurServices />
        </div>
        
        <div id="about-section">
          <AboutUs />
        </div>
        
        <div id="contact-section">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
