import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBolt, faShieldAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectQuote: React.FC = () => {
  const steps = [
    {
      icon: faComments,
      title: '1. Tell Us What Your Home Needs',
      description: 'From routine maintenance and repairs to dream home renovations, we can help with any project—big or small.',
      buttonText: 'Learn More',
    },
    {
      icon: faBolt,
      title: '2. We\'ll Match You with Personalized Solutions',
      description: 'See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.',
      buttonText: 'Learn More',
    },
    {
      icon: faShieldAlt,
      title: '3. Start to Finish, We\'ve Got You Covered',
      description: 'When you book and pay with us, you’re covered by our Happiness Guarantee. We’ll cover your projects up to full purchase price, plus limited damage protection.',
      buttonText: 'Learn More',
    },
  ];

  return (
    <section className="bg-white py-20">
      <SignupSection />
      <HowItWorks steps={steps} />
    </section>
  );
};

const SignupSection: React.FC = () => (
  <div className="text-teal-900 py-16 bg-gradient-to-r from-blue-200 via-teal-100 to-blue-300">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800">
        Get Free Project Cost Information Delivered to Your Inbox
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <InputField
            type="email"
            placeholder="Email Address"
            icon={<FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />}
          />
        </div>
        <div className="relative w-full md:w-1/3">
          <InputField
            type="text"
            placeholder="ZIP Code (optional)"
            icon={<FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />}
          />
        </div>
        <SignupButton />
      </div>
    </div>
  </div>
);

const InputField: React.FC<{ type: string, placeholder: string, icon?: React.ReactNode }> = ({ type, placeholder, icon }) => (
  <div className="relative">
    {icon && (
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-10 py-3 rounded-full bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
    />
  </div>
);

const SignupButton: React.FC = () => (
  <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-purple-800 transition duration-200">
    Sign Up
  </button>
);

const HowItWorks: React.FC<{ steps: Array<{ icon: any, title: string, description: string, buttonText: string }> }> = ({ steps }) => (
  <div className="container mx-auto mt-12 px-4">
    <h3 className="text-2xl font-extrabold mb-8 text-center text-gray-800">How It Works</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <StepCard key={index} {...step} />
      ))}
    </div>
  </div>
);

const StepCard: React.FC<{ icon: any, title: string, description: string, buttonText: string }> = ({ icon, title, description, buttonText }) => (
  <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition duration-200">
    <FontAwesomeIcon icon={icon} className="text-4xl text-purple-700 mb-4" />
    <h4 className="text-xl font-bold mb-2 text-gray-700">{title}</h4>
    <p className="text-gray-600 mb-6">{description}</p>
    <button className="px-4 py-2 border border-teal-700 text-teal-700 rounded-lg hover:bg-purple-100 transition">
      {buttonText}
    </button>
  </div>
);

export default ProjectQuote;
