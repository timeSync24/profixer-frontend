import React from 'react';
import interiorPaintingImage from '../assets/images/house-painting.jpg';
import flooringImage from '../assets/images/flouring.jpg';
import kitchenRemodelingImage from '../assets/images/kitchen.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Interior: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Interior Painting',
      description: 'Refresh your home with our interior painting services. Choose from a wide range of colors to match your style.',
      rating: 4.9,
      reviews: '220K',
      averageCost: '$1,200 - $3,000',
      image: interiorPaintingImage,
    },
    {
      id: 2,
      title: 'Flooring Installation',
      description: 'Upgrade your floors with our expert installation services. We offer a variety of materials, including hardwood, laminate, and tile.',
      rating: 4.8,
      reviews: '190K',
      averageCost: '$5,000 - $15,000',
      image: flooringImage,
    },
    {
      id: 3,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space with our remodeling services. We handle everything from cabinets to countertops.',
      rating: 4.7,
      reviews: '175K',
      averageCost: '$15,000 - $50,000',
      image: kitchenRemodelingImage,
    },
    // Add more services as needed
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Interior Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-500 flex items-center">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <div className="text-lg font-bold text-purple-700 flex items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    {service.averageCost}
                  </div>
                </div>
                <button className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition">
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interior;
