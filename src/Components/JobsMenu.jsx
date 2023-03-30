import React from 'react';
import { Link } from 'react-router-dom';

function JobsMenu({ jobsData }) {
const jobTitles = Object.keys(jobsData).sort();
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-medium mb-2">Explore Occupations</h2>
        {jobTitles.map((job) => (
          <div key={job} className="flex justify-between items-center border-b py-2">
            <Link to={`occupation/${job}`}>{job}</Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsMenu;
