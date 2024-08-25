import React from 'react';
import { remodelingProjects } from '../../data/mock';

const PopularRemodelingProjects: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Popular remodeling projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remodelingProjects.map((project) => (
            <div key={project.id} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
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
        <a href="#" className="inline-block mt-8 text-teal-700 font-semibold hover:underline">
          Explore all projects
        </a>
      </div>
    </section>
  );
};

export default PopularRemodelingProjects;
