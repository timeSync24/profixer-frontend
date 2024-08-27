import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { recommendedProjects } from '../../data/mock';
import Button from '../../Component/Shared/Button';

const Recommended: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 text-center md:text-left text-gray-800">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recommendedProjects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
            >
              <div>
                <span
                  className={`inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase rounded ${project.statusColor}`}
                >
                  {project.status}
                </span>
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon icon={project.icon} className="text-red-500 text-3xl mr-4" />
                  <p className="text-lg font-medium text-gray-800 leading-tight">
                    {project.highlight ? (
                      <>
                        {project.title.split(project.highlight)[0]}
                        <span className="text-red-500">{project.highlight}</span>
                        {project.title.split(project.highlight)[1]}
                      </>
                    ) : (
                      project.title
                    )}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  variant={project.buttonText === 'Resume' ? 'primary' : 'secondary'}
                  size="medium"
                  className="w-full max-w-xs"
                >
                  {project.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
