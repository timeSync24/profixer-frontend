import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
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
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Main Header: Logo and Join Our Pro Network */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-pink-500 italic">Profixer</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 font-medium">Become a Profixer</a>

          <button className="flex items-center text-gray-700 border px-3 py-2 rounded">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
            Sign In
          </button>
          
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
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
        </div>
      </div>

      {/* Subheader: Navigation Links */}
      <div className="bg-purple-500 border-t">
        <div className="container mx-auto flex justify-center space-x-8 md:space-x-4 py-2 text-sm text-white">
          <a href="#" className="text-white font-medium border-r-2 border-white pr-4">Interior</a>
          <a href="#" className="text-white font-medium border-r-2 border-white pr-4">Exterior</a>
          <a href="#" className="text-white font-medium border-r-2 border-white pr-4">Lawn & Garden</a>
          <a href="#" className="text-white font-medium border-r-2 border-white pr-4">More</a>
          <a href="#" className="text-white font-medium pr-4">Articles & Advice</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
