import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from'react-router-dom';



const Header: React.FC = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (languageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownOpen]);

  return (
    <header className="bg-purple-50 border-b">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Main Header: Logo and Join Our Pro Network */}
        <div className="flex items-center">
          <Link to="/" className="profixer text-xl sm:text-2xl font-bold text-pink-500 italic">Profixers</Link>
        </div>
        
        <div className="flex items-center space-x-4">
        <a 
                href="#" 
                className="bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-l transition duration-300 ease-in-out text-lg hidden sm:block"
                >
                Become a Profixer
                </a>

          <div className="hidden md:flex space-x-4">
            <button className="flex items-center text-gray-700 border px-3 py-2 rounded">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              Sign In
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="relative hidden md:flex" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 border px-3 py-2 rounded"
            >
              <span>{selectedLanguage}</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>

            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <ul>
                  <li
                    onClick={() => selectLanguage('English')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-green-400 font-bold"
                  >
                    English
                  </li>
                  <li
                    onClick={() => selectLanguage('Spanish')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-pink-600 font-bold"
                  >
                    Spanish
                  </li>
                  <li
                    onClick={() => selectLanguage('French')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-purple-400 font-bold"
                  >
                    French
                  </li>
                  <li
                    onClick={() => selectLanguage('German')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-400 font-bold"
                  >
                    German
                  </li>
                  <li
                    onClick={() => selectLanguage('Chinese')}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-yellow-600 font-bold"
                  >
                    Chinese
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <div className="md:hidden bg-purple-500 text-white">
          <div className="container mx-auto flex flex-col space-y-2 py-4 px-4">
            <a href="#" className="text-white font-medium">Become a Profixer</a>
            <button className="flex items-center text-white border px-3 py-2 rounded">
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              Sign In
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white border px-3 py-2 rounded"
              >
                <span>{selectedLanguage}</span>
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                  <ul>
                    <li
                      onClick={() => selectLanguage('English')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-green-400 font-bold"
                    >
                      English
                    </li>
                    <li
                      onClick={() => selectLanguage('Spanish')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-pink-600 font-bold"
                    >
                      Spanish
                    </li>
                    <li
                      onClick={() => selectLanguage('French')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-purple-400 font-bold"
                    >
                      French
                    </li>
                    <li
                      onClick={() => selectLanguage('German')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-400 font-bold"
                    >
                      German
                    </li>
                    <li
                      onClick={() => selectLanguage('Chinese')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-yellow-600 font-bold"
                    >
                      Chinese
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

     {/* Subheader: Navigation Links */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="container mx-auto">
            <div className="flex items-center ml-4 space-x-6 overflow-x-auto py-2 text-sm  font-semibold text-white">
            <Link to="/interior" className="flex-shrink-0 px-2 py-1 bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-lg">
                Interior
            </Link>
            <Link to="/exterior" className="flex-shrink-0 px-2 py-1 bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-lg">
                Exterior
            </Link>
            <Link to="lawn" className="flex-shrink-0 px-2 py-1 bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-lg">
                Lawn
            </Link>
            <Link to="/contact-us" className="flex-shrink-0 px-2 py-1 bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-lg">
                ContactUs
            </Link>
            <Link to="/articles" className="flex-shrink-0 px-2 py-1 bg-white bg-opacity-20 hover:bg-opacity-40 transition rounded-lg hidden sm:inline-block">
                Articles
            </Link>
            </div>
        </div>
        </div>

    </header>
  );
};

export default Header;
