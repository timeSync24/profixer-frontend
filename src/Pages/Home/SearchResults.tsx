import React, { useState } from 'react';
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

  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const mockProviders = [
    {
      id: 1,
      name: 'John’s Handyman Services',
      rating: 4.9,
      reviews: 120,
      address: '123 Main St, Anytown, USA',
      service: 'Handyman',
      priceRange: '$120',
      hourlyRate: 50, // $50 per hour
      minimumCharge: 2, // Minimum 2 hours
      weekendRate: 75, // $75 per hour on weekends
      experience: '10 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '9 AM - 5 PM' },
        { days: 'Sat-Sun', hours: '9 AM - 1 PM' }
      ],
      serviceImages: [MechanicImage, HousePaintingImage],
      certifications: ['ISO 9001', 'ISO 14001'],
      certified: true,
      serviceDescription: 'General handyman services including repairs, installations, and home improvement projects.',
    },
    {
      id: 2,
      name: 'All-Star Plumbing',
      rating: 4.8,
      reviews: 95,
      address: '456 Oak St, Anytown, USA',
      service: 'Plumbing',
      priceRange: '$75',
      hourlyRate: 75, // $75 per hour
      minimumCharge: 1, // Minimum 1 hour
      weekendRate: 90, // $90 per hour on weekends
      experience: '15 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '8 AM - 6 PM' },
        { days: 'Sat', hours: '10 AM - 2 PM' }
      ],
      serviceImages: [PlumbingImage],
      certifications: ['ISO 14001', 'ISO 27001'],
      certified: true,
      serviceDescription: 'Comprehensive plumbing services including leak repairs, pipe installations, and emergency plumbing.',
    },
    {
      id: 3,
      name: 'Reliable Roofing Co.',
      rating: 4.7,
      reviews: 210,
      address: '789 Maple Ave, Anytown, USA',
      service: 'Roofing',
      priceRange: '$50',
      minimumCharge: 1, // Minimum 1 hour
      weekendRate: 'NA', // No per hour on weekends
      experience: '12 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 4 PM' },
        { days: 'Sat', hours: '8 AM - 1 PM' }
      ],
      serviceImages: [RoofingImage],
      certified: false,
      serviceDescription: 'Roofing services including repairs, new installations, and roof inspections.',
    },
    {
      id: 4,
      name: 'Green Thumb Landscaping',
      rating: 4.6,
      reviews: 180,
      address: '321 Birch St, Anytown, USA',
      service: 'Landscaping',
      priceRange: '$100',
      hourlyRate: 60, // $60 per hour
      minimumCharge: 1.5, // Minimum 1.5 hours
      weekendRate: 80, // $80 per hour on weekends
      experience: '8 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '8 AM - 6 PM' },
        { days: 'Sat', hours: '9 AM - 3 PM' }
      ],
      serviceImages: [LandscapingImage],
      certified: false,
      serviceDescription: 'Landscaping services including lawn care, garden design, and outdoor installations.',
    },
    {
      id: 5,
      name: 'Ace Framing & Carpentry',
      rating: 4.5,
      reviews: 150,
      address: '654 Elm St, Anytown, USA',
      service: 'Framing & Carpentry',
      priceRange: '$200 - $500',
      hourlyRate: 70, // $70 per hour
      minimumCharge: 2, // Minimum 2 hours
      weekendRate: 90, // $90 per hour on weekends
      experience: '20 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 5 PM' },
        { days: 'Sat', hours: '8 AM - 12 PM' }
      ],
      serviceImages: [Framing, CarpentryImage],
      certified: true,
      serviceDescription: 'Expert framing and carpentry services for residential and commercial projects.',
    },
    {
      id: 6,
      name: 'Excellent Furniture Repair',
      rating: 4.4,
      reviews: 100,
      address: '987 Willow St, Anytown, USA',
      service: 'Furniture Repair',
      priceRange: '$80 - $200',
      hourlyRate: 70, // $70 per hour
      minimumCharge: 1, // Minimum 1 hour
      weekendRate: 85, // $85 per hour on weekends
      experience: '5 years of experience',
      workingHours: [
        { days: 'Mon-Fri', hours: '7 AM - 5 PM' },
        { days: 'Sat', hours: '8 AM - 12 PM' }
      ],
      serviceImages: [Framing, CarpentryImage],
      certified: false,
      serviceDescription: 'High-quality furniture repair services including refinishing, reupholstering, and restoration.',
    }
  ];

  const priceRanges = [
    { label: 'All', value: null },
    { label: 'Under $100', value: 'under-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: '$200 - $500', value: '200-500' },
    { label: 'Above $500', value: 'above-500' },
  ];

  const filterProvidersByPrice = () => {
    if (!selectedPriceRange) return mockProviders;

    return mockProviders.filter(provider => {
      const price = parseInt(provider.priceRange.replace(/[^0-9]/g, ''), 10);

      switch (selectedPriceRange) {
        case 'under-100':
          return price < 100;
        case '100-200':
          return price >= 100 && price <= 200;
        case '200-500':
          return price >= 200 && price <= 500;
        case 'above-500':
          return price > 500;
        default:
          return true;
      }
    });
  };

  const sortProvidersByRating = (providers: typeof mockProviders) => {
    return providers.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
  };

  const filteredProviders = filterProvidersByPrice();
  const sortedProviders = sortProvidersByRating(filteredProviders);

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Search Results for "{service}" in {zipcode}</h2>
      
      <div className="mb-4 flex justify-between items-center">
        <div>
          <label htmlFor="price-filter" className="mr-2 font-semibold">Filter by Price:</label>
          <select
            id="price-filter"
            className="border border-gray-300 rounded-md p-2"
            value={selectedPriceRange || ''}
            onChange={e => setSelectedPriceRange(e.target.value)}
          >
            {priceRanges.map(range => (
              <option key={range.value || 'all'} value={range.value || ''}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort-order" className="mr-2 font-semibold">Sort by Rating:</label>
          <select
            id="sort-order"
            className="border border-gray-300 rounded-md p-2"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="desc">Highest to Lowest</option>
            <option value="asc">Lowest to Highest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProviders.map(provider => (
          <div key={provider.id} className="relative border rounded-lg p-4 shadow-lg bg-white flex flex-col justify-between">
            {provider.certified && (
              <div className="absolute top-0 left-0 bg-yellow-500 mb-8 p-1 rounded-full">
                <CertifiedProBadge />
              </div>
            )}
            <div>
              <div className="mb-4 mt-4">
                <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
                <p className="text-gray-700 mb-2">{provider.address}</p>
                <p className="text-yellow-500 mb-2">
                  Rating: {provider.rating} ({provider.reviews} reviews)
                </p>
                <p className="text-gray-700 mb-2">
                  Service: {provider.service}
                </p>
                <p className="text-gray-700 mb-2">
                  Price from: {provider.priceRange}
                </p>
                <p className="text-gray-700 mb-2">
                  Hourly Rate: ${provider.hourlyRate}/hr
                </p>
                {provider.minimumCharge !== undefined && (
                  <p className="text-gray-700 mb-2">
                    Minimum Charge: {provider.minimumCharge} hour{provider.minimumCharge > 1 ? 's' : ''}
                  </p>
                )}
                {provider.weekendRate !== undefined && (
                  <p className="text-gray-700 mb-2">
                    Weekend Rate: ${provider.weekendRate}/hr
                  </p>
                )}
                <p className="text-gray-700 mb-2">
                  Experience: {provider.experience}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Working Hours:</h4>
                {provider.workingHours.map((hours, index) => (
                  <p key={index} className="text-gray-600">{hours.days}: {hours.hours}</p>
                ))}
              </div>
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
            <div className="flex space-x-4 mt-auto">
              <button
                onClick={() => alert(`Booking service with ${provider.name}`)}
                className="w-1/2 bg-purple-500 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Book Now
              </button>
              <button
                onClick={() => alert(`Requesting a quote from ${provider.name}`)}
                className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;