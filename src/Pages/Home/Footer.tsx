import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="profixer text-4xl font-bold mb-4 italic text-yellow-300">ProFixers</h3>
            <p className="mb-4">Sign up for our newsletter to get the latest news, updates, and special offers delivered directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-gray-800 w-full sm:flex-1"
              />
              <button type="submit" className="bg-pink-500 text-white font-bold px-6 py-2 rounded hover:bg-pink-600 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
            <p className="mb-4">Follow us on social media to stay updated with our latest news and updates.</p>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-600 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProFixers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
