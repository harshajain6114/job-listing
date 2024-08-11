import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ job }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center space-x-4">
        <img
          src={job.companyLogo}
          alt={job.companyName}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600">{job.companyName}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{job.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-800 font-semibold">{job.location}</p>
        <p className="text-indigo-600 font-semibold">{job.salary}</p>
      </div>
    </motion.div>
  );
};

export default JobCard;
