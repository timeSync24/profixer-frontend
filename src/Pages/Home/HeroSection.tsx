import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faToolbox, faTree, faWrench, faBolt, faHammer, faHome } from '@fortawesome/free-solid-svg-icons';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-24">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-10 w-1/2 mx-auto leading-tight">
          Discover Trusted Professionals Near You
        </h1>
        <p className="text-lg text-gray-600 mb-10 w-2/3 mx-auto">
          Connect with the best local experts. we've got you covered.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center items-center max-w-xl mx-auto mb-16 shadow-lg">
          <input 
            type="text" 
            placeholder="What do you need help with?" 
            className="w-full px-5 py-4 rounded-l-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <div className="flex items-center border-2 border-l-0 border-gray-300 bg-white">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 px-4" />
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="w-28 px-3 py-4 border-none focus:outline-none"
            />
          </div>
          <button className="px-8 py-4 bg-purple-500 text-white rounded-r-full focus:outline-none hover:bg-purple-700 transition-colors duration-200">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Service Icons */}
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <FontAwesomeIcon icon={faToolbox} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Handyman Services</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faTree} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Landscaping</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faWrench} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Plumbing</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faBolt} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Electrical</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHammer} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Remodeling</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHome} className="text-pink-500 text-5xl mb-3" />
            <p className="text-gray-700 text-lg font-semibold">Roofing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
