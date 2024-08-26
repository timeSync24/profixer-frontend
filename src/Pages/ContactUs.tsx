import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../assets/images/contact-us.jpg';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Image Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-96 rounded-lg shadow-lg object-cover"
            />
            <h2 className="text-lg font-semibold mt-4">Get in Touch</h2>
            <p className="text-sm text-gray-600 mt-2">
              We’re here to help you with any questions or concerns you may have. Whether it’s a quick question or a detailed inquiry, don’t hesitate to reach out. 
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You can contact us via the form, email, or phone. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="flex items-center justify-between mt-6">
              <a href="tel:123-456-7890" className="text-sm text-gray-600 hover:text-gray-800">
                Call Us: (615) 554-3592
              </a>
              <a href="mailto:info@example.com" className="text-sm text-blue-600 hover:text-gray-800">
                Email Us: info@profixers.com
              </a>
              </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-2" />
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              
              <div className="mb-4 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 mr-2" />
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              <div className="mb-4 flex items-center">
                <FontAwesomeIcon icon={faPen} className="text-purple-500 mr-2" />
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={6}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
