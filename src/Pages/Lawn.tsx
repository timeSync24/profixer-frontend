import React from 'react';
import lawnMowingImage from '../assets/images/lawn-mowing.jpg';
import lawnFertilizationImage from '../assets/images/lawn-fertilization.jpg';
import lawnAerationImage from '../assets/images/lawn-aeration.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLeaf, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Lawn: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Lawn Mowing',
      description: 'Regular lawn mowing services to keep your yard looking neat and tidy. We offer both weekly and bi-weekly schedules.',
      rating: 4.8,
      reviews: '120K',
      averageCost: '$30 - $50 per session',
      image: lawnMowingImage,
      duration: '1 hour',
    },
    {
      id: 2,
      title: 'Lawn Fertilization',
      description: 'Enhance the health and color of your lawn with our professional fertilization services. Customized plans to meet your lawn’s specific needs.',
      rating: 4.7,
      reviews: '85K',
      averageCost: '$50 - $100 per treatment',
      image: lawnFertilizationImage,
      duration: '30 minutes',
    },
    {
      id: 3,
      title: 'Lawn Aeration',
      description: 'Improve the quality of your soil and promote healthier grass growth with our lawn aeration services. Essential for every lawn.',
      rating: 4.6,
      reviews: '60K',
      averageCost: '$100 - $150 per session',
      image: lawnAerationImage,
      duration: '1.5 hours',
    },
    {
        id: 4,
        title: 'Lawn Mowing',
        description: 'Regular lawn mowing services to keep your yard looking neat and tidy. We offer both weekly and bi-weekly schedules.',
        rating: 4.8,
        reviews: '120K',
        averageCost: '$30 - $50 per session',
        image: lawnMowingImage,
        duration: '1 hour',
      },
      {
        id: 5,
        title: 'Lawn Fertilization',
        description: 'Enhance the health and color of your lawn with our professional fertilization services. Customized plans to meet your lawn’s specific needs.',
        rating: 4.7,
        reviews: '85K',
        averageCost: '$50 - $100 per treatment',
        image: lawnFertilizationImage,
        duration: '30 minutes',
      },
      {
        id: 6,
        title: 'Lawn Aeration',
        description: 'Improve the quality of your soil and promote healthier grass growth with our lawn aeration services. Essential for every lawn.',
        rating: 4.6,
        reviews: '60K',
        averageCost: '$100 - $150 per session',
        image: lawnAerationImage,
        duration: '1.5 hours',
      },
    // Add more services as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Lawn Care Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <span className="text-sm text-gray-600">Duration: {service.duration}</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-purple-700 flex items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    {service.averageCost}
                  </div>
                  <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700 transition">
                    Book Now
                  </button>
                </div>
                <div className="text-center">
                  <FontAwesomeIcon icon={faLeaf} className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-500">Eco-friendly Options Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lawn;
