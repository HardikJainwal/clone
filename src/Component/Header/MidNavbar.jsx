import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import g20 from '../../assets/g20.png';

const MidNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (window.innerWidth < 768) {
      setIsSearchVisible(!isSearchVisible);
    }
    setSearchQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Search for:', searchQuery);
      setSearchQuery('');
      if (window.innerWidth < 768) {
        setIsSearchVisible(false);
      }
    }
  };

  return (
    <nav className="py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-28 w-auto object-contain"
            />
          </Link>
          <img 
            src={g20} 
            alt="G20" 
            className="h-13 w-auto object-contain hidden sm:block"
          />
        </div>

        <div className="flex items-center">
          <div className={`${isSearchVisible ? 'flex' : 'hidden md:flex'} absolute md:static top-full left-0 right-0 md:right-auto bg-white md:bg-transparent p-4 md:p-0`}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Search..."
              className="w-40 lg:w-64 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSearchClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-r-md transition-colors"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
          
          <button
            onClick={handleSearchClick}
            className="md:hidden ml-4"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MidNavbar;

