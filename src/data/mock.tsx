// /data/mock.tsx
import { faLightbulb, faToolbox, faBroom } from '@fortawesome/free-solid-svg-icons';

export const recommendedProjects = [
    {
      id: 1,
      status: 'INCOMPLETE PROJECT',
      title: "Don't wait! Schedules are filling up for Electrical Switches...",
      buttonText: 'Resume',
      highlight: 'Electrical Switches',
      statusColor: 'bg-purple-300 text-green-700',
      icon: faLightbulb,
    },
    {
      id: 2,
      status: 'PICKED FOR YOU',
      title: 'Handyman for Multiple Small Projects',
      buttonText: 'Get quotes',
      highlight: 'All home project',
      statusColor: 'bg-gray-100 text-gray-700',
      icon: faToolbox,
    },
    {
      id: 3,
      status: 'PICKED FOR YOU',
      title: 'One Time Interior House Cleaning',
      buttonText: 'Get quotes',
      highlight: 'Full Home Cleaning',
      statusColor: 'bg-gray-100 text-gray-700',
      icon: faBroom,
    },
  ];
  
  export const popularProjects = [
    {
      id: 1,
      title: 'Decks & Porches',
      rating: 3.7,
      reviews: '1k',
      price: '$1,890',
      icon: 'faHome',
    },
    {
      id: 2,
      title: 'Home Cleaning',
      rating: 4.5,
      reviews: '314k',
      price: 'from $85',
      icon: 'faBroom',
    },
    {
      id: 3,
      title: 'Appliance Repair',
      rating: 4.7,
      reviews: '274k',
      price: 'from $264',
      icon: 'faTools',
    },
    {
      id: 4,
      title: 'Pest Control',
      rating: 4.8,
      reviews: '317k',
      price: 'from $186',
      icon: 'faBug',
    },
    {
      id: 5,
      title: 'Roof Repair',
      rating: 4.7,
      reviews: '613k',
      price: 'from $594',
      icon: 'faHouseDamage',
    },
    {
      id: 6,
      title: 'Fence Repair',
      rating: 4.2,
      reviews: '4.8k',
      price: 'from $380',
      icon: 'faTools',
    },
    {
      id: 7,
      title: 'Gutter Services',
      rating: 4.0,
      reviews: '427',
      price: 'from $575',
      icon: 'faWater',
    },
    {
      id: 8,
      title: 'Plumbing Services',
      rating: 4.4,
      reviews: '26.7k',
      price: 'from $210',
      icon: 'faWrench',
    },
  ];

  export const popularHomeProjects = [
    {
      id: 1,
      title: 'Waste/Junk Removal',
      rating: 4.8,
      reviews: '192K',
      price: 'From $250',
      buttonText: 'Book now',
      image: '/src/assets/images/mechanics.jpg', // Update with the correct path
    },
    {
      id: 2,
      title: 'Handyperson for Small Projects',
      rating: 4.6,
      reviews: '599K',
      price: 'From $158',
      buttonText: 'Book now',
      image: '/src/assets/images/wood-work.jpg', // Update with the correct path
    },
    {
      id: 3,
      title: 'One-time Cleaning Service',
      rating: 4.5,
      reviews: '314K',
      price: 'From $102',
      buttonText: 'Book now',
      image: '/src/assets/images/cleaners.jpg', // Update with the correct path
    },
    {
        id: 4,
        title: 'Transitioning to a New Home',
        rating: 4.8,
        reviews: '192K',
        price: 'From $250',
        buttonText: 'Book now',
        image: '/src/assets/images/deck.jpg', // Update with the correct path
      },
      {
        id: 5,
        title: 'Kitchen Remodel',
        rating: 4.6,
        reviews: '599K',
        price: 'From $158',
        buttonText: 'Book now',
        image: '/src/assets/images/kitchen.jpg', // Update with the correct path
      },
      {
        id: 6,
        title: 'Bathroom Recovery',
        rating: 4.5,
        reviews: '314K',
        price: 'From $102',
        buttonText: 'Book now',
        image: '/src/assets/images/bathroom.jpg', // Update with the correct path
      },
  ];


  // /data/mock.tsx

export const remodelingProjects = [
    {
      id: 1,
      title: 'Bathroom Remodel',
      subtitle: 'Increase Home Value',
      image: '/src/assets/images/bathroom.jpg', // Update with the correct path
    },
    {
      id: 2,
      title: 'Kitchen Remodel',
      subtitle: '',
      image: '/src/assets/images/kitchen.jpg', // Update with the correct path
    },
    {
      id: 3,
      title: 'New Decks & Porches',
      subtitle: 'Popular Project',
      image: '/src/assets/images/deck.jpg', // Update with the correct path
    },
  ];
  
  