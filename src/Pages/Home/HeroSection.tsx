import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faToolbox, faTree, faWrench, faBolt, faHammer, faHome } from '@fortawesome/free-solid-svg-icons';


// Mock data for services and their associated images
const services = [
  { label: 'Hire a Handyman' },
  { label: 'Clean House Interior (Maid Service)' },
  { label: 'Install, Repair or Replace Plumbing or Fixtures'},
  { label: 'Install or Replace an Asphalt Shingle Roof'},
  { label: 'Mow Grass and Maintain Landscaping'},
];

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      setSuggestions(services.filter(service => service.label.toLowerCase().includes(value.toLowerCase())).map(service => service.label));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search?service=${encodeURIComponent(searchTerm)}&zipcode=${zipCode}`);
  };

  return (
    <section className="bg-gradient-to-r from-blue-300 via-teal-100 to-blue-300 py-16 lg:py-24">
      <div className="container mx-auto text-center px-4 lg:px-8 max-w-screen-lg">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 lg:mb-10 w-full lg:w-4/5 mx-auto leading-snug lg:leading-tight">
          Discover Trusted Professionals Near You
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 w-full lg:w-2/3 mx-auto">
          Connect with the best local experts. We've got you covered.
        </p>

        {/* Search Bar */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-lg lg:max-w-lg mx-auto mb-12 lg:mb-16">
          <div className="w-full lg:w-auto lg:flex-grow relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="What do you need help with?"
              className="w-full px-5 py-3 lg:py-4 rounded-t-full lg:rounded-l-full lg:rounded-t-none border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
                  >
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center border-2 border-t-0 lg:border-t-2 lg:border-l-0 border-gray-300 bg-white rounded">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 px-4" />
            <input
              type="text"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="Enter Zip Code"
              className="w-full lg:w-28 px-3 py-3 lg:py-4 border-none focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full lg:w-auto px-8 py-3 lg:py-4 bg-purple-500 text-white rounded-b-full lg:rounded-r-full focus:outline-none hover:bg-purple-700 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:grid-cols-6 lg:gap-8 max-w-full lg:max-w-2/3 mx-auto">
          {[
            { icon: faWrench, label: 'Plumbing' },
            { icon: faBolt, label: 'Electrical' },
            { icon: faHammer, label: 'Carpentry' },
            { icon: faTree, label: 'Landscaping' },
            { icon: faHome, label: 'Contracting' },
            { icon: faToolbox, label: 'Improvement' },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl h-20 lg:h-20"
            >
              <FontAwesomeIcon icon={service.icon} className="text-pink-500 text-3xl mb-2" />
              <span className="text-base font-semibold text-gray-800">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
