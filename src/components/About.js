import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-2xl text-gray-700 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to JobHub! We are dedicated to helping you find your dream job and connect with top companies.
          Our mission is to simplify the job search process and make it more effective for job seekers and employers alike.
        </motion.p>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:space-x-6 justify-around">
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg mb-8">
              <motion.h2
                className="text-2xl font-semibold text-indigo-600 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Mission
              </motion.h2>
              <p className="text-gray-700">
                Our mission is to connect talented individuals with exceptional companies by providing a seamless job search experience.
              </p>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg mb-8">
              <motion.h2
                className="text-2xl font-semibold text-indigo-600 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Values
              </motion.h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
              </ul>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg mb-8">
              <motion.h2
                className="text-2xl font-semibold text-indigo-600 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Meet the Team
              </motion.h2>
              <p className="text-gray-700">
                Our team is composed of passionate individuals who are dedicated to making your job search easier and more effective. Learn more about each team member and their role.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.h3
            className="text-2xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h3>
          <p className="text-lg text-gray-700">
            Have questions or feedback? Reach out to us at <a href="mailto:info@jobhub.com" className="text-indigo-600">info@jobhub.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

