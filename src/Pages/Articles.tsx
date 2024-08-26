import React from 'react';
import houseBuildingImage from '../assets/images/house-building.jpg';
import foundationImage from '../assets/images/house-foundation.jpg';
import framingImage from '../assets/images/framing.jpg';
import roofingImage from '../assets/images/roofing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faRulerCombined, faHardHat, faStar } from '@fortawesome/free-solid-svg-icons';

const Articles: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 pr-0 lg:pr-8 ">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24 min-h-96">
            <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <a href="#foundation" className="text-purple-600 hover:underline">
                  1. Laying the Foundation
                </a>
              </li>
              <li>
                <a href="#framing" className="text-purple-600 hover:underline">
                  2. Framing the Structure
                </a>
              </li>
              <li>
                <a href="#roofing" className="text-purple-600 hover:underline">
                  3. Installing the Roof
                </a>
              </li>
              <li>
                <a href="#related-articles" className="text-purple-600 hover:underline">
                  Related Articles
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6">The Complete Guide to House Building</h1>
            <img src={houseBuildingImage} alt="House Building" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
            
            <p className="text-lg text-gray-700 mb-4">
              Building a house is one of the most significant investments you can make. From laying the foundation to the final touches, every step requires meticulous planning and execution. In this guide, we'll walk you through the key stages of house building and provide insights into what you can expect at each stage.
            </p>
            
            {/* Section: Foundation */}
            <div id="foundation" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Laying the Foundation</h2>
              <img src={foundationImage} alt="Laying Foundation" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-gray-700 mb-4">
                The foundation is the most critical part of your house. It supports the entire structure and ensures its stability. This stage involves site preparation, pouring concrete, and curing the foundation. Proper foundation work is crucial to avoid future structural issues.
              </p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHammer} className="text-purple-500 mr-2" />
                <span className="text-sm font-medium">Expert Tip: Invest in high-quality materials for your foundation to ensure long-term durability.</span>
              </div>
            </div>

            {/* Section: Framing */}
            <div id="framing" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Framing the Structure</h2>
              <img src={framingImage} alt="Framing the Structure" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-gray-700 mb-4">
                Framing is the process of building the skeleton of your house. This includes constructing the walls, floors, and roof structure. The framing defines the shape and layout of your home. It's important to work with experienced professionals to ensure that the framing is precise and secure.
              </p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faRulerCombined} className="text-purple-500 mr-2" />
                <span className="text-sm font-medium">Did You Know? The framing process typically takes a few weeks, depending on the size and complexity of the house.</span>
              </div>
            </div>

            {/* Section: Roofing */}
            <div id="roofing" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Installing the Roof</h2>
              <img src={roofingImage} alt="Installing the Roof" className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
              <p className="text-gray-700 mb-4">
                The roof is your house's first line of defense against the elements. A well-installed roof protects your home from rain, snow, and wind. This stage involves laying roofing materials, installing insulation, and ensuring proper drainage. A good roof can significantly enhance your home's energy efficiency.
              </p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHardHat} className="text-purple-500 mr-2" />
                <span className="text-sm font-medium">Pro Tip: Choose a roofing material that suits your climate and budget for long-lasting protection.</span>
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
              <span className="text-lg font-medium">4.8/5 (320K Reviews)</span>
            </div>

            {/* Related Articles */}
            <div id="related-articles" className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <a href="#" className="text-purple-600 hover:underline">The Importance of Insulation in Home Construction</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-purple-600 hover:underline">Top 5 Roofing Materials for Different Climates</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-purple-600 hover:underline">Understanding the Costs of Building a Custom Home</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-purple-600 hover:underline">How to Choose the Right Contractor for Your Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
