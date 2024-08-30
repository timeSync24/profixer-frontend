import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

import bathroomImage from '../../assets/images/bathroom.jpg';
import kitchenImage from '../../assets/images/kitchen.jpg';
import deckImage from '../../assets/images/deck.jpg';
import houseBuildingImage from '../../assets/images/house-building.jpg';
import carMechanicImage from '../../assets/images/car-mecahnic.jpg';
import housePaintingImage from '../../assets/images/house-painting.jpg';
import mechanicImage from '../../assets/images/mechanics.jpg';
import roofing from '../../assets/images/roofing.jpg';
import roadConstruction from '../../assets/images/road-construction.jpg';

import QuoteFormModal from '../../Component/Modal/QuoteFormModal';
import CertifiedProBadge from '../../Component/Shared/CertifiedProBadge';

type Project = {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  reviews: string;
  frequency: string;
  averageCost: string;
  image: string;
  isCertified: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    category: 'Interior',
    title: 'Bathroom Remodel',
    subtitle: 'Increase Home Value',
    description: 'A bathroom remodel can enhance your home’s value and aesthetic appeal. This project focuses on modern fixtures, new tiles, and energy-efficient appliances.',
    rating: 4.8,
    reviews: '320K',
    frequency: 'High',
    averageCost: '$15,000 - $30,000',
    image: bathroomImage,
    isCertified: true,
  },
  {
    id: 2,
    category: 'Interior',
    title: 'Kitchen Remodel',
    subtitle: 'Modernize Your Kitchen',
    description: 'Revamp your kitchen with state-of-the-art appliances, new cabinets, and stylish countertops. This project is designed to make your kitchen the heart of your home.',
    rating: 4.7,
    reviews: '410K',
    frequency: 'Very High',
    averageCost: '$20,000 - $40,000',
    image: kitchenImage,
    isCertified: false,
  },
  {
    id: 3,
    category: 'Outdoor',
    title: 'New Decks & Porches',
    subtitle: 'Popular Project',
    description: 'Add outdoor living space with a new deck or porch. Perfect for entertaining guests or enjoying a quiet evening outside.',
    rating: 4.6,
    reviews: '150K',
    frequency: 'Medium',
    averageCost: '$5,000 - $15,000',
    image: deckImage,
    isCertified: true,
  },
  {
    id: 4,
    category: 'Exterior',
    title: 'House Building',
    subtitle: 'Complete Construction',
    description: 'From foundation to roof, get the perfect structure for your home with quality materials and experienced craftsmanship.',
    rating: 4.9,
    reviews: '500K',
    frequency: 'Very High',
    averageCost: '$200,000 - $500,000',
    image: houseBuildingImage,
    isCertified: false,
  },
  {
    id: 5,
    category: 'Automotive',
    title: 'Car Mechanic Services',
    subtitle: 'Vehicle Repair',
    description: 'Get professional car repair services for all types of vehicles, ensuring your safety and comfort on the road.',
    rating: 4.5,
    reviews: '250K',
    frequency: 'High',
    averageCost: '$500 - $5,000',
    image: carMechanicImage,
    isCertified: true,
  },
  {
    id: 6,
    category: 'Interior',
    title: 'House Painting',
    subtitle: 'Enhance Aesthetic',
    description: 'Repaint your entire house with modern colors and high-quality paints to improve your home’s aesthetic appeal.',
    rating: 4.7,
    reviews: '300K',
    frequency: 'Medium',
    averageCost: '$3,000 - $10,000',
    image: housePaintingImage,
    isCertified: false,
  },
  {
    id: 7,
    category: 'Automotive',
    title: 'General Mechanic Services',
    subtitle: 'All-purpose Mechanic',
    description: 'Get all your mechanical needs sorted with our all-purpose mechanic services, ensuring your machinery is always in top shape.',
    rating: 4.6,
    reviews: '200K',
    frequency: 'High',
    averageCost: '$1,000 - $8,000',
    image: mechanicImage,
    isCertified: false,
  },
  {
      id: 8,
      category: 'Outdoor',
      title: 'Roofing',
      subtitle: 'Popular Project',
      description: 'Get a new roof or repair your existing one with quality materials and expert craftsmanship. Protect your home from the elements with a sturdy roof.',
      rating: 4.6,
      reviews: '150K',
      frequency: 'Medium',
      averageCost: '$15,000 - $25,000',
      image: roofing,
      isCertified: true,
    },
      {
          id: 9,
          category: 'Complete Construction',
          title: 'Road Construction',
          subtitle: 'Infrastructure Project',
          description: 'Build new roads or repair existing ones with quality materials and expert engineering. Ensure smooth transportation for all.',
          rating: 4.8,
          reviews: '500K',
          frequency: 'Very High',
          averageCost: '$500,000 - $1,000,000',
          image: roadConstruction,
          isCertified: true,
          },
          {
              id: 10,
              category: 'Exterior',
              title: 'Road Construction',
              subtitle: 'Infrastructure Project',
              description: 'Build new roads or repair existing ones with quality materials and expert engineering. Ensure smooth transportation for all.',
              rating: 4.8,
              reviews: '500K',
              frequency: 'Very High',
              averageCost: '$500,000 - $1,000,000',
              image: roadConstruction,
              isCertified: true,
              },
];


const AllRemodelingProjects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('rating');

  // Calculate current projects for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const sortedProjects = filteredProjects.sort((a, b) => {
    if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    if (sortOption === 'cost') {
      const avgCostA = parseInt(a.averageCost.split('-')[0].replace(/\D/g, ''), 10);
      const avgCostB = parseInt(b.averageCost.split('-')[0].replace(/\D/g, ''), 10);
      return avgCostA - avgCostB;
    }
    return 0;
  });
 
  const categories = [...new Set(projects.map(project => project.category))];

  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-12 bg-gray-50 poppins-regular">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition flex items-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Back
          </button>
          <h2 className="text-3xl font-bold">All Remodeling Projects</h2>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="category-filter" className="mr-2 font-semibold"><FontAwesomeIcon icon={faFilter} /> Category:</label>
              <select
                id="category-filter"
                className="border border-gray-300 rounded-md p-2"
                value={selectedCategory || ''}
                onChange={e => setSelectedCategory(e.target.value || null)}
              >
                <option value="">All</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sort-option" className="mr-2 font-semibold"><FontAwesomeIcon icon={faSort} /> Sort by:</label>
              <select
                id="sort-option"
                className="border border-gray-300 rounded-md p-2"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value="rating">Rating</option>
                <option value="cost">Cost</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map(project => (
            <div key={project.id} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover" />
              {project.subtitle && (
                <span className="absolute top-4 left-4 bg-purple-700 text-white text-xs px-2 py-1 rounded">
                  {project.subtitle}
                </span>
              )}
              {project.isCertified && (
                <div className="absolute top-4 right-4">
                  <CertifiedProBadge />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center poppins-regular-italic">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                    <span className="text-sm">{project.rating} ({project.reviews} reviews)</span>
                  </div>
                  <span className="text-sm text-gray-500">Frequency: {project.frequency}</span>
                </div>
                <div className="text-lg font-bold text-purple-700 mb-4">Average Cost: {project.averageCost}</div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition"
                >
                  Get a Pro
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav>
            <ul className="flex space-x-2">
              {[...Array(Math.ceil(filteredProjects.length / projectsPerPage)).keys()].map(number => (
                <li key={number + 1}>
                  <button
                    onClick={() => paginate(number + 1)}
                    className={`px-4 py-2 border rounded-md ${currentPage === number + 1 ? 'bg-purple-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Modal for requesting a quote */}
        {selectedProject && (
          <QuoteFormModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default AllRemodelingProjects;