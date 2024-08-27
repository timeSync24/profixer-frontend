import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import becomeAProImage from '../../assets/images/logo.jpg';
import Button from '../../Component/Shared/Button';

const BecomeAProfixer: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-20">
      <section className="container mx-auto bg-gradient-to-r from-blue-100 via-blue-400 to-purple-500 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-700 font-bold gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 w-full mb-12 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 leading-tight">Become a ProFixer Today!</h2>
            <p className="text-lg mb-8">
              Join a network of skilled professionals and start earning more by connecting with customers who need your services. With ProFixer, you can set your own schedule, take on jobs that fit your skills, and get paid quickly.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-300 mr-3" />
                <span>Access to thousands of job opportunities</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHammer} className="text-yellow-300 mr-3" />
                <span>Work with the best tools and resources</span>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faDollarSign} className="text-blue-300 mr-3" />
                <span>Fast and secure payments</span>
              </div>
            </div>
            <Button to="/sign-up" variant="tertiary" size="small" width="oneThird">
              Get Started
            </Button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src={becomeAProImage}
              alt="Become a ProFixer"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeAProfixer;
