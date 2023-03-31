import React from 'react';
import { Link } from 'react-router-dom';

function JobsMenu({ jobsData }) {
  const jobTitles = Object.keys(jobsData).sort();
  
  return (
    <div className="bg-skin-fill py-4">
      <div className="container mx-auto px-1 md:px-4">
        <h2 className="text-lg font-medium mb-2">Explore Occupations</h2>
        {jobTitles.map((job) => (
          <div key={job} className="flex justify-between items-center border-b py-0.5 md:py-2 text-xs sm:text-md">
            <Link to={`occupation/${job}`} className="flex-1 text-skin-link hover:text-blue-200">
              <div className="break-all">{job}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsMenu;
