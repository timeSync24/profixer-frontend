import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHome, faBroom, faTools, faBug, faHouseDamage, faWater, faWrench } from '@fortawesome/free-solid-svg-icons';

// Image imports
import decksPorchesImage from '../../assets/images/deck.jpg';
import homeCleaningImage from '../../assets/images/cleaners.jpg';
import applianceRepairImage from '../../assets/images/mobile.jpg';
import pestControlImage from '../../assets/images/pest-control.jpg';
import roofRepairImage from '../../assets/images/roof-repair.jpg';
import fenceRepairImage from '../../assets/images/fence-repair.jpg';
import gutterServicesImage from '../../assets/images/gutter-services.jpg';
import plumbingServicesImage from '../../assets/images/plumbing-services.jpg';

// Mock Data
const popularProjects = [
  {
    id: 1,
    title: 'Decks & Porches',
    rating: 3.7,
    reviews: '1k',
    price: '$1,890',
    icon: faHome,
    description: 'Build or repair decks and porches to enhance your outdoor space.',
    image: decksPorchesImage,
  },
  {
    id: 2,
    title: 'Home Cleaning',
    rating: 4.5,
    reviews: '314k',
    price: 'from $85',
    icon: faBroom,
    description: 'Professional cleaning services for your entire home.',
    image: homeCleaningImage,
  },
  {
    id: 3,
    title: 'Appliance Repair',
    rating: 4.7,
    reviews: '274k',
    price: 'from $264',
    icon: faTools,
    description: 'Repair services for all types of household appliances.',
    image: applianceRepairImage,
  },
  {
    id: 4,
    title: 'Pest Control',
    rating: 4.8,
    reviews: '317k',
    price: 'from $186',
    icon: faBug,
    description: 'Keep your home pest-free with expert pest control services.',
    image: pestControlImage,
  },
  {
    id: 5,
    title: 'Roof Repair',
    rating: 4.7,
    reviews: '613k',
    price: 'from $594',
    icon: faHouseDamage,
    description: 'Professional roof repair services to protect your home.',
    image: roofRepairImage,
  },
  {
    id: 6,
    title: 'Fence Repair',
    rating: 4.2,
    reviews: '4.8k',
    price: 'from $380',
    icon: faTools,
    description: 'Repair or install fences for added privacy and security.',
    image: fenceRepairImage,
  },
  {
    id: 7,
    title: 'Gutter Services',
    rating: 4.0,
    reviews: '427',
    price: 'from $575',
    icon: faWater,
    description: 'Maintain and repair gutters to prevent water damage.',
    image: gutterServicesImage,
  },
  {
    id: 8,
    title: 'Plumbing Services',
    rating: 4.4,
    reviews: '26.7k',
    price: 'from $210',
    icon: faWrench,
    description: 'Expert plumbing services for all your home needs.',
    image: plumbingServicesImage,
  },
];

const Popular: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Popular Projects Near You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularProjects.map((project) => (
            <div
              key={project.id}
              className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <FontAwesomeIcon icon={project.icon} className="text-purple-500 text-xl" />
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center text-yellow-500">
                  {Array.from({ length: Math.floor(project.rating) }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
                <span className="text-gray-600">({project.reviews})</span>
              </div>
              <div className="text-lg font-bold text-red-500 mb-4">{project.price}</div>
              <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
