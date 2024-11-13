import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">About Us</h2>
        <p className="text-center mb-12 text-gray-300">
          At Umage Solutions, we specialize in data management, advanced analytics, and cloud platforms, aiming to drive intelligent transformation across various industries. Our expertise allows us to tailor our services to meet the unique needs of our clients, ensuring they can navigate the complexities of today’s technology landscape effectively.
        </p>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              Our mission is to empower businesses by enhancing decision-making, automating processes, and leveraging predictive analytics, all supported by scalable cloud services. We are dedicated to providing solutions that not only optimize operations but also contribute to the long-term success of our clients.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300">
              We envision a technology landscape where AI, machine learning, the Internet of Things, and advanced analytics come together seamlessly. Whether businesses are embarking on their digital transformation journey or seeking to refine their existing strategies, we offer a range of adaptable services designed to meet their evolving needs.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
            <p className="text-gray-300">
              Our team of experts is committed to developing tailored solutions that align with our clients' business goals. We strive to go beyond mere optimization, helping organizations evolve into smart, data-driven enterprises that can thrive in a competitive environment.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
            <p className="text-gray-300">
              We believe in achieving clearer insights into every aspect of an organization through a transparent, data-driven approach. Our commitment to integrity allows us to identify and address performance gaps while uncovering growth opportunities that lead to informed decision-making.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-4">Customer Focus</h3>
            <p className="text-gray-300">
            At Umage Solutions, we focus on guiding clients through transformation with essential support. Using Agile and DevOps methodologies, we provide timely solutions that drive success. Our diverse founding team is dedicated to leading the digital revolution in today’s fast-paced environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
