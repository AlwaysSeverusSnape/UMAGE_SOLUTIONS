import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3zl97kb', 
        'template_o0uvwpl', 
        form.current, 
        'NplhPHc_Gp_-4asqi'
      )
      .then(
        () => {
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Contact Us</h2>

        {/* Pop-up notification */}
        {isSent && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
            Message has been sent successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="mb-4 text-gray-300">We are dedicated to helping you discover the best IT solutions and opportunities. Whether you’re a client seeking expert IT services or a consultant looking to join our network, we’re just a message away. Please fill out the form below, and our team will respond to you promptly.</p>
            
            <p className="mb-2 text-gray-300"><strong>Phone:</strong> +91 62602-68357</p>
            
            {/* LinkedIn link with icon */}
            <div className="flex items-center mb-4 text-gray-300">
              <FaLinkedin className="mr-2 text-blue-500" /> {/* LinkedIn icon with color */}
              <a href="https://www.linkedin.com/company/umage-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Send us a Message</h3>
            <p className="mb-4 text-gray-300">Please fill out the form, explaining whether you are a client or a consultant, and include all required information so that we can better assist you.</p>

            <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="from_name">Your Name</label>
                <input type="text" name="from_name" id="from_name" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="user_email">Your Email</label>
                <input type="email" name="user_email" id="user_email" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
