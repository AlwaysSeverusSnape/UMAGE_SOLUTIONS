import React from 'react';

const OurServices = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Our Services Section */}
        <h2 className="text-3xl font-bold text-center text-red-500">Our Services</h2>
        <p className="mt-6 text-center text-gray-300">
          We provide a wide array of SAP digital supply chain services, covering development, integration, migration, and maintenance. Our services enhance your supply chain operations for optimal efficiency.
        </p>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {/* Service 1 */}
          <div className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="icon bg-gradient-to-r from-red-500 to-red-300 p-4 rounded-full transition-transform duration-300 transform hover:scale-110 bg-opacity-30">
              <span className="text-black text-4xl">🛠</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Integration</h3>
            <p className="mt-2 text-gray-300">Seamlessly integrate SAP solutions to streamline your operations.</p>
          </div>
          {/* Service 2 */}
          <div className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="icon bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-full transition-transform duration-300 transform hover:scale-110 bg-opacity-30">
              <span className="text-black text-4xl">🌐</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">BTP</h3>
            <p className="mt-2 text-gray-300">Unlock the power of SAP Business Technology Platform.</p>
          </div>
          {/* Service 3 */}
          <div className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="icon bg-gradient-to-r from-green-500 to-green-300 p-4 rounded-full transition-transform duration-300 transform hover:scale-110 bg-opacity-30">
              <span className="text-black text-4xl">⚙️</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Migration</h3>
            <p className="mt-2 text-gray-300">Ensure smooth migration with SAP S/4HANA migration services.</p>
          </div>
          {/* Service 4 */}
          <div className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="icon bg-gradient-to-r from-yellow-500 to-yellow-300 p-4 rounded-full transition-transform duration-300 transform hover:scale-110 bg-opacity-30">
              <span className="text-black text-4xl">🔧</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">Maintenance</h3>
            <p className="mt-2 text-gray-300">Keep your SAP systems running efficiently with our support services.</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default OurServices;
