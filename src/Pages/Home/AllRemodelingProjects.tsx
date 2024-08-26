import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bathroomImage from '../../assets/images/bathroom.jpg';
import kitchenImage from '../../assets/images/kitchen.jpg';
import deckImage from '../../assets/images/deck.jpg';
import houseBuildingImage from '../../assets/images/house-building.jpg';
import carMechanicImage from '../../assets/images/car-mecahnic.jpg';
import housePaintingImage from '../../assets/images/house-painting.jpg';
import mechanicImage from '../../assets/images/mechanics.jpg';
import roofing from '../../assets/images/roofing.jpg';
import roadConstruction from '../../assets/images/road-construction.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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

const AllRemodelingProjects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);  // Updated type

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

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section className="py-12 bg-gray-50 poppins-regular">
      <div className="container mx-auto text-center px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold mb-12">All Remodeling Projects</h2>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">{category} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => project.category === category).map(project => (
  <div key={project.id} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
    <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover" />
    {project.subtitle && (
      <span className="absolute top-4 left-4 bg-purple-700 text-white text-xs px-2 py-1 rounded">
        {project.subtitle}
      </span>
    )}

    {/* Place the CertifiedProBadge in a corner of the card */}
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
             </div>
         ))}
        {/* Modal for requesting a quote */}
        {selectedProject && (
          <QuoteFormModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default AllRemodelingProjects;
