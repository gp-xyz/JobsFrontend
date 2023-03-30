import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Nav({ jobsData }) {
  const navlinkstyle = "text-yellow-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-xl font-bold">
                JSFYI
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className={navlinkstyle}><Link to="/" >Home</Link></div>
                <div className={navlinkstyle}><Link to="/" >About</Link></div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 pr-2">
            <SearchBar jobsData={jobsData} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
