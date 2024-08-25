import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBolt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectQuote: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className=" text-teal-900 py-16 bg-violet-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-pink-600">Get free project cost information delivered to your inbox</h2>
          <div className="flex justify-center space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-1/3 px-4 py-2 rounded border border-gray-300 text-gray-800"
            />
            <input
              type="text"
              placeholder="ZIP Code (optional)"
              className="w-1/3 px-4 py-2 rounded border border-gray-300 text-gray-800"
            />
            <button className="px-6 py-2 bg-white text-teal-700 font-semibold rounded hover:bg-gray-100 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <h3 className="text-2xl font-bold mb-8 text-center">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FontAwesomeIcon icon={faComments} className="text-4xl text-purple-700 mb-4" />
            <h4 className="text-xl font-bold mb-2">1. Tell us what your home needs</h4>
            <p className="text-gray-600 mb-4">
              From routine maintenance and repairs to dream home renovations, we can help with any project—big or small.
            </p>
            <button className="px-4 py-2 border border-teal-700 text-teal-700 rounded hover:bg-teal-100 transition">
              Learn more
            </button>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faBolt} className="text-4xl text-purple-700 mb-4" />
            <h4 className="text-xl font-bold mb-2">2. We'll match you with personalized solutions</h4>
            <p className="text-gray-600 mb-4">
              See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-purple-700 mb-4" />
            <h4 className="text-xl font-bold mb-2">3. Start to finish, we've got you covered</h4>
            <p className="text-gray-600 mb-4">
              When you book and pay with us, you’re covered by our Happiness Guarantee. We’ll cover your projects up to full purchase price, plus limited damage protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectQuote;
