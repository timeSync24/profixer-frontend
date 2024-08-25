import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { recommendedProjects } from '../../data/mock';

const Recommended: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedProjects.map((project) => (
            <div key={project.id} className="border-l-8 border-t border-r border-purple-400 p-6 rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <span
                  className={`block mb-2 px-2 py-1 text-xs font-semibold uppercase rounded ${project.statusColor}`}
                >
                  {project.status}
                </span>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={project.icon} className="text-red-500 text-2xl mr-3" />
                  <p className="text-lg font-medium">
                    {project.highlight
                      ? <>
                          {project.title.split(project.highlight)[0]}
                          <p className="text-red-500 ml-3">{project.highlight}</p>
                          {project.title.split(project.highlight)[1]}
                        </>
                      : project.title}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {project.buttonText === 'Resume' ? (
                  <button className="bg-red-500 text-white w-full max-w-xs px-4 py-2 rounded hover:bg-red-600 transition">
                    {project.buttonText}
                  </button>
                ) : (
                  <button className="border-2 border-red-500 text-red-500 w-full max-w-xs px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                    {project.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
