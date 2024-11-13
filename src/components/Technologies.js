import React from 'react';

const Products = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      {/* Technologies We Cover Section */}
      <h2 className="text-3xl font-bold text-center text-red-500 mt-20">Technologies We Cover</h2>
        <div className="flex flex-wrap justify-center mt-10 space-x-6">
          {/* Technology Items */}
          {[
            { name: 'SAP', colorFrom: 'from-red-500', colorTo: 'to-red-300' },
            { name: 'Microsoft', colorFrom: 'from-blue-500', colorTo: 'to-blue-300' },
            { name: 'Cybersecurity', colorFrom: 'from-purple-500', colorTo: 'to-purple-300' },
            { name: 'Front-end', colorFrom: 'from-green-500', colorTo: 'to-green-300' },
            { name: 'Back end', colorFrom: 'from-yellow-500', colorTo: 'to-yellow-300' },
            { name: 'Full Stack', colorFrom: 'from-teal-500', colorTo: 'to-teal-300' },
            { name: 'Data (CRM)', colorFrom: 'from-indigo-500', colorTo: 'to-indigo-300' },
            { name: 'Infrastructure', colorFrom: 'from-pink-500', colorTo: 'to-pink-300' },
          ].map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center h-32 w-32 mb-6 rounded-full bg-gradient-to-r ${tech.colorFrom} ${tech.colorTo} text-black font-semibold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl`}
            >
              {tech.name}
            </div>
          ))}
        </div>
    </section>
  );
};

export default Products;
