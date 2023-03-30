import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ jobsData }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        const newQuery = event.target.value.toLowerCase();
        setQuery(newQuery);
        const newResults = newQuery.length >= 1 && jobsData
          ? Object.keys(jobsData)
              .filter((job) => job.toLowerCase().includes(newQuery))
          : [];
        setResults(newResults);
      };
      


    return (
        <div className="relative mx-auto text-gray-600">
            <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search for skills"
                value={query}
                onChange={handleInputChange}
            />
            {results.length > 0 && (
                <div className="absolute top-10 left-0 right-0 z-10">
                    <ul className="bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg max-h-56 overflow-y-auto">
                        {results.map((result) => (
                            <li key={result} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link to={`/occupation/${result}`}>{result}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
