import React from 'react';
import Logo from '../../assets/images/logo.jpg';
import MobileApp from '../../assets/images/mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const ProFixers: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img
            src={MobileApp}
            alt="ProFixers App"
            className="w-full h-96 rounded-lg shadow-md"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img
              src={Logo}
              alt="ProFixers Logo"
              className="w-12 h-12 rounded-lg"
            />
          </div>
          <h3 className="text-4xl font-bold py-4 uppercase">Unlock the Full Power of ProFixers in Our App</h3>
            <p className="text-gray-700 mb-8">
            Manage your projects with ease, connect directly with professionals, make secure payments, and much more—all within the ProFixers app.
            </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#" 
              className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <FontAwesomeIcon icon={faApple} className="mr-2" />
              <span>Download on the App Store</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs text-yellow-500" />
            </a>
            <a 
              href="#" 
              className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
              <span>Get it on Google Play</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs text-yellow-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProFixers;
