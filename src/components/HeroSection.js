import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-transparent h-full"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">Expert Consultancy</h1>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-center space-x-8 mr-8">
          <div></div>
          {/* First box */}
          <div className="relative group  md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg transition duration-300 ease-in-out">
            <p className="text-lg text-center  transition-transform duration-300 transform group-hover:scale-105">
              Transform your business with data-driven intelligence: Unlock smarter decision-making and process automation with advanced analytics, AI, and scalable cloud platforms tailored to your specific industry needs.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 rounded-lg"></div>
          </div>
          {/* Second box */}
          <div className="relative group  md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 mr-40 shadow-lg transition duration-300 ease-in-out">
            <p className="text-lg text-center  transition-transform duration-300 transform group-hover:scale-105">
             Partner with our team of experts to drive growth, optimize performance, and seamlessly integrate SAP, Data & Analytics, and Cloud technologies for sustainable success.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 rounded-lg"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
