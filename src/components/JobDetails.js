import React from 'react';
import { motion } from 'framer-motion';

const JobDetails = ({ job }) => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-gray-600">{job.companyName}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Salary:</span> {job.salary}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Job Description:</span> {job.description}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Requirements:</span> {job.requirements}
          </p>
        </div>
        
        <motion.button
          className="mt-6 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Apply Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default JobDetails;
