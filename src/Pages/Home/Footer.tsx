import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Newsletter Signup */}
          <div className="md:w-1/3 w-full mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">Sign up for our newsletter to get the latest news and updates.</p>
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-gray-800 w-full sm:w-2/3"
              />
              <button type="submit" className="bg-white text-pink-700 font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="md:w-2/3 w-full flex justify-around">
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Resources</h4>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social</h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-600 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ProFixers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
