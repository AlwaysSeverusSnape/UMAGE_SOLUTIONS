import React from 'react';
import Logo from '../Assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            {/* <p className="text-red-600 font-bold mb-4">Get connected with us on social networks:</p> */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i> {/* Replace with icons */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center text-center">
  {/* Company Information */}
  <div className="mb-8 md:mb-0">
    <img src={Logo} alt="Logo" className="h-12 mb-4 mx-auto" />
    <p className="text-gray-300">
      Umage Solution is a leading consulting and outsourcing company that specializes in procurement outsourcing and project implementation services.
    </p>
    <br />
    <p className="text-gray-300">Fuel your projects with exceptional IT talent. Choose Umage.</p>
  </div>
</div>



        {/* Bottom Row */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400">
          © 2024 Copyright
        </div>
        
      </div>
    </footer>
  );
};



export default Footer;
