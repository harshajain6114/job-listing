import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const HeroSection = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto text-center">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find Your Dream Job
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-2xl">
          Explore thousands of job opportunities from top companies.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowSignUpModal(true)}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </motion.button>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}>
        <SignUpForm onClose={() => setShowSignUpModal(false)} />
      </Modal>

      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <LoginForm onClose={() => setShowLoginModal(false)} />
      </Modal>
    </div>
  );
};

export default HeroSection;
