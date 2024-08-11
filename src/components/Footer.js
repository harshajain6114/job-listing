import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand or Logo */}
          <div className="text-lg font-semibold">
            JobHub
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-300 transition duration-300">Home</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Job Listings</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Post a Job</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">About</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-300 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">LinkedIn</a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} JobHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
