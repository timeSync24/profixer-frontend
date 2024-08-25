import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { popularHomeProjects } from '../../data/mock';

const PopularHomeProject: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular home projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {popularHomeProjects.map((project) => (
            <div key={project.id} className="border w-3/4 rounded-lg shadow-sm overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-red-500 mr-1" />
                      <span className="text-sm">{project.rating} ({project.reviews})</span>
                    </div>
                  </div>
                  <p className="text-red-500 font-bold mt-2">{project.price}</p>
                </div>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
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
