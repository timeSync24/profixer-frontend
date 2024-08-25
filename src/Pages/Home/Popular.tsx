// Popular.tsx

import React from 'react';
import { popularProjects } from '../../data/mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Popular: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular projects near you</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularProjects.map((project) => (
            <div key={project.id} className="border p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-red-500 mr-2"
                />
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-500">
                  {project.rating} <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="text-gray-600">({project.reviews})</span>
              </div>
              <div className="text-red-500 font-bold">{project.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
