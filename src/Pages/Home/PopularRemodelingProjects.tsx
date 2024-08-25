import React from 'react';
import { Link } from 'react-router-dom';
import bathroomImage from '../../assets/images/bathroom.jpg';
import kitchenImage from '../../assets/images/kitchen.jpg';
import deckImage from '../../assets/images/deck.jpg';

const PopularRemodelingProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Bathroom Remodel',
      subtitle: 'Increase Home Value',
      image: bathroomImage,
    },
    {
      id: 2,
      title: 'Kitchen Remodel',
      subtitle: '',
      image: kitchenImage,
    },
    {
      id: 3,
      title: 'New Decks & Porches',
      subtitle: 'Popular Project',
      image: deckImage,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-8">Popular Remodeling Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
              {project.subtitle && (
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {project.subtitle}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link to="/all-remodeling-projects" className="inline-block mt-8 text-teal-700 font-semibold hover:underline">
          Explore all projects
        </Link>
      </div>
    </section>
  );
};

export default PopularRemodelingProjects;
