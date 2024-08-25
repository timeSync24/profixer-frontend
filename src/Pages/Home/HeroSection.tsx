import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faToolbox, faTree, faWrench, faBolt, faHammer, faHome } from '@fortawesome/free-solid-svg-icons';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-16 lg:py-12">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-6 lg:mb-10 w-full lg:w-2/3 mx-auto leading-snug lg:leading-tight">
          Discover Trusted Professionals Near You
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 w-full lg:w-2/3 mx-auto">
          Connect with the best local experts. We've got you covered.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row justify-center items-center max-w-lg lg:max-w-xl mx-auto mb-12 lg:mb-16">
          <input 
            type="text" 
            placeholder="What do you need help with?" 
            className="w-full lg:w-auto lg:flex-grow px-5 py-3 lg:py-4 rounded-t-full lg:rounded-l-full lg:rounded-t-none border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <div className="flex items-center border-2 border-t-0 lg:border-t-2 lg:border-l-0 border-gray-300 bg-white rounded-2xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 px-4" />
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="w-full lg:w-28 px-3 py-3 lg:py-4 border-none focus:outline-none"
            />
          </div>
          <button className="w-full lg:w-auto px-8 py-3 lg:py-4 bg-purple-500 text-white rounded-b-full lg:rounded-r-full focus:outline-none hover:bg-purple-700 transition-colors duration-200">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12">
          <div className="text-center">
            <FontAwesomeIcon icon={faToolbox} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Handyman Services</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faTree} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Landscaping</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faWrench} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Plumbing</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faBolt} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Electrical</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHammer} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Remodeling</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faHome} className="text-pink-500 text-4xl lg:text-5xl mb-2 lg:mb-3" />
            <p className="text-gray-700 text-sm lg:text-lg font-semibold">Roofing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
