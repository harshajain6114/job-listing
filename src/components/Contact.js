import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-700 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We’d love to hear from you! Whether you have questions, feedback, or just want to get in touch, feel free to drop us a message.
        </motion.p>

        <div className="mt-12 max-w-lg mx-auto">
          <motion.form
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                placeholder="Enter your message"
                rows="6"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
