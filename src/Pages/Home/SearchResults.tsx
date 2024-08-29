import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MechanicImage from '../../assets/images/mechanics.jpg';
import HousePaintingImage from '../../assets/images/house-painting.jpg';
import RoofingImage from '../../assets/images/roofing.jpg';
import PlumbingImage from '../../assets/images/plumbing-services.jpg';
import LandscapingImage from '../../assets/images/lawn-aeration.jpg';
import Framing from '../../assets/images/framing.jpg';
import CarpentryImage from '../../assets/images/gutter-services.jpg';
import CertifiedProBadge from '../../Component/Shared/CertifiedProBadge';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service');
  const zipcode = queryParams.get('zipcode');
  const navigate = useNavigate();

  const mockProviders = [
    {
      id: 1,
      name: 'John’s Handyman Services',
      rating: 4.9,
      reviews: 120,
      address: '123 Main St, Anytown, USA',
      service: 'Handyman',
      workingHours: [
        { days: 'Mon-Fri', hours: '9 AM - 5 PM' },
        { days: 'Sat-Sun', hours: '9 AM - 1 PM' }
      ],
      serviceImages: [MechanicImage, HousePaintingImage],
      certifications: ['ISO 9001', 'ISO 14001'],
      certified: true,
    },
    {
      id: 2,
      name: 'All-Star Plumbing',
      rating: 4.8,
      reviews: 95,
      address: '456 Oak St, Anytown, USA',
      service: 'Plumbing',
      workingHours: [
        { days: 'Mon-Fri', hours: '8 AM - 6 PM' },
        { days: 'Sat', hours: '10 AM - 2 PM' }
      ],
      serviceImages: [PlumbingImage],
      certifications: ['ISO 14001', 'ISO 27001'],
      certified: true,
    },
    {
      id: 3,
      name: 'Reliable Roofing Co.',
      rating: 4.7,
      reviews: 210,
      address: '789 Maple Ave, Anytown, USA',
      service: 'Roofing',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 4 PM' },
        { days: 'Sat', hours: '8 AM - 1 PM' }
      ],
      serviceImages: [RoofingImage],
      certified: false,
    },
    {
      id: 4,
      name: 'Green Thumb Landscaping',
      rating: 4.6,
      reviews: 180,
      address: '321 Birch St, Anytown, USA',
      service: 'Landscaping',
      workingHours: [
        { days: 'Mon-Fri', hours: '8 AM - 6 PM' },
        { days: 'Sat', hours: '9 AM - 3 PM' }
      ],
      serviceImages: [LandscapingImage],
      certified: false,
    },
    {
      id: 5,
      name: 'Ace Framing & Carpentry',
      rating: 4.5,
      reviews: 150,
      address: '654 Elm St, Anytown, USA',
      service: 'Framing & Carpentry',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 5 PM' },
        { days: 'Sat', hours: '8 AM - 12 PM' }
      ],
      serviceImages: [Framing, CarpentryImage],
      certified: true,
    },
    {
      id: 6,
      name: 'Excellent Furniture Repair',
      rating: 4.4,
      reviews: 100,
      address: '987 Willow St, Anytown, USA',
      service: 'Furniture Repair',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 5 PM' },
        { days: 'Sat', hours: '8 AM - 12 PM' }
      ],
      serviceImages: [Framing, CarpentryImage],
      certified: false,
    }
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Search Results for "{service}" in {zipcode}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProviders.map(provider => (
          <div key={provider.id} className="relative border rounded-lg p-4 shadow-lg bg-white">
            {provider.certified && (
              <div className="absolute top-0 left-0 bg-yellow-500 mb-8 p-1 rounded-full">
                <CertifiedProBadge />
              </div>
            )}
            <div className="mb-4 mt-4">
              <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
              <p className="text-gray-700 mb-2">{provider.address}</p>
              <p className="text-yellow-500 mb-2">
                Rating: {provider.rating} ({provider.reviews} reviews)
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Working Hours:</h4>
              {provider.workingHours.map((hours, index) => (
                <p key={index} className="text-gray-600">{hours.days}: {hours.hours}</p>
              ))}
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {provider.serviceImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${provider.name} service`}
                  className="w-full h-32 object-cover rounded cursor-pointer"
                  onClick={() => navigate(`/provider/${provider.id}`)}
                />
              ))}
            </div>
            <button
              onClick={() => alert(`Booking service with ${provider.name}`)}
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
