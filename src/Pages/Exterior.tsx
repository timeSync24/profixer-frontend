import React from 'react';
import exteriorPaintingImage from '../assets/images/exterior-painting.jpg';
import landscapingImage from '../assets/images/lawn-aeration.jpg';
import roofingImage from '../assets/images/roofing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Exterior: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Exterior Painting',
      description: 'Give your home a fresh look with our professional exterior painting services. We use high-quality paints that withstand the elements.',
      rating: 4.9,
      reviews: '200K',
      averageCost: '$2,500 - $5,000',
      image: exteriorPaintingImage,
    },
    {
      id: 2,
      title: 'Landscaping',
      description: 'Transform your outdoor space with our landscaping services. From garden design to hardscaping, we do it all.',
      rating: 4.8,
      reviews: '180K',
      averageCost: '$1,000 - $15,000',
      image: landscapingImage,
    },
    {
      id: 3,
      title: 'Roofing',
      description: 'Protect your home with our reliable roofing services. We offer roof installation, repair, and maintenance using the best materials.',
      rating: 4.7,
      reviews: '150K',
      averageCost: '$8,000 - $20,000',
      image: roofingImage,
    },
    // Add more services as needed
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-100 to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exterior Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="rounded-lg shadow-lg overflow-hidden bg-white">
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-500 flex items-center">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <div className="text-lg font-bold text-green-700 flex items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    {service.averageCost}
                  </div>
                </div>
                <button className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
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

export default Exterior;
