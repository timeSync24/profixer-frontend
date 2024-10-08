import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import mechanicsImage from '../../assets/images/mechanics.jpg';
import woodWorkImage from '../../assets/images/wood-work.jpg';
import cleanersImage from '../../assets/images/cleaners.jpg';
import deckImage from '../../assets/images/deck.jpg';
import kitchenImage from '../../assets/images/kitchen.jpg';
import bathroomImage from '../../assets/images/bathroom.jpg';

const PopularHomeProject: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Waste/Junk Removal',
      rating: 4.8,
      reviews: '192K',
      price: 'From $250',
      buttonText: 'Book now',
      image: mechanicsImage,
    },
    {
      id: 2,
      title: 'Handyperson for Small Projects',
      rating: 4.6,
      reviews: '599K',
      price: 'From $158',
      buttonText: 'Book now',
      image: woodWorkImage,
    },
    {
      id: 3,
      title: 'One-time Cleaning Service',
      rating: 4.5,
      reviews: '314K',
      price: 'From $102',
      buttonText: 'Book now',
      image: cleanersImage,
    },
    {
      id: 4,
      title: 'Transitioning to a New Home',
      rating: 4.8,
      reviews: '192K',
      price: 'From $250',
      buttonText: 'Book now',
      image: deckImage,
    },
    {
      id: 5,
      title: 'Kitchen Remodel',
      rating: 4.6,
      reviews: '599K',
      price: 'From $158',
      buttonText: 'Book now',
      image: kitchenImage,
    },
    {
      id: 6,
      title: 'Bathroom Recovery',
      rating: 4.5,
      reviews: '314K',
      price: 'From $102',
      buttonText: 'Book now',
      image: bathroomImage,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Popular Home Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{project.rating} ({project.reviews})</span>
                    </div>
                  </div>
                  <p className="text-red-500 font-bold">{project.price}</p>
                </div>
                <button className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHomeProject;
