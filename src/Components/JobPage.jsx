import React from 'react'
import { useParams } from 'react-router-dom'

function JobPage({ jobsData }) {
  const { job } = useParams();
  const thisun = jobsData[job];
  
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-4">{thisun.Job}</h1>

      <div className="border border-red-500 rounded-md p-4 my-4">
        <p className="italic text-gray-600">{thisun.joke}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Description:</h2>
        <p className="text-gray-600 mb-6">{thisun.Description}</p>
        <p className="text-gray-600 mb-6">{thisun.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Tips:</h2>
        <ul className="list-disc list-inside mb-6">
          {thisun.tips.map((tip, index) => (
            <li key={index} className="text-gray-600">{tip}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Prompts:</h2>
        <ul className="list-disc list-inside mb-6">
          {thisun.prompts.map((prompt, index) => (
            <li key={index} className="text-gray-600">{prompt}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobPage;
