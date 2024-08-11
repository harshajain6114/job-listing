import React, { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ onPostJobClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-semibold text-indigo-600">
          JobHub
        </div>
        
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 transition duration-300">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block md:inline-block text-gray-600 hover:text-indigo-600 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="block md:inline-block text-gray-600 hover:text-indigo-600 transition duration-300">
            About
          </Link>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-indigo-600 transition duration-300"
            onClick={onPostJobClick}
          >
            Post a Job
          </a>
          <Link to="/contact" className="block md:inline-block text-gray-600 hover:text-indigo-600 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600 transition duration-300"
            placeholder="Search jobs..."
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Responsive Search Bar for Mobile */}
      <div className="md:hidden mt-4 px-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-600 transition duration-300 w-full"
            placeholder="Search jobs..."
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
