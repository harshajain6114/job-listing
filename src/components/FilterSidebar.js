import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Job Type</h3>
        <ul>
          <li>
            <input type="checkbox" id="fullTime" className="mr-2" />
            <label htmlFor="fullTime">Full Time</label>
          </li>
          <li>
            <input type="checkbox" id="partTime" className="mr-2" />
            <label htmlFor="partTime">Part Time</label>
          </li>
          <li>
            <input type="checkbox" id="contract" className="mr-2" />
            <label htmlFor="contract">Contract</label>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          placeholder="Enter location"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Salary Range</h3>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 mb-2"
          placeholder="Min Salary"
        />
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          placeholder="Max Salary"
        />
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300 w-full">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
