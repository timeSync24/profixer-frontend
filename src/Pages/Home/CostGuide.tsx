import React from 'react';
import phoneImage from '../../assets/images/calculate.jpg'; // Replace with the actual image path

const CostGuide: React.FC = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-300 via-white to-pink-300">
      <section className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text Section */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <div className="bg-pink-100 text-pink-700 rounded-full inline-block px-3 py-1 text-sm font-semibold mb-4">
              NEW COST GUIDES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800 leading-tight">
              Know the costs before you start your project
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Don’t get caught off guard. Our comprehensive cost guides provide detailed information on what you can expect to pay for your project, so you can budget with confidence.
            </p>
            <button className="px-4 sm:px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition">
              Explore Cost Guides
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <img
              src={phoneImage}
              alt="Cost Guide on Mobile"
              className="w-full h-96 max-w-md rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostGuide;
