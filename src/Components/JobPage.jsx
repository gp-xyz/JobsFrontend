import React from 'react'
import { useParams } from 'react-router-dom'

function JobPage({ jobsData }) {
  const { job } = useParams();
  const thisun = jobsData[job];
  
  return (
    <div className="flex flex-col  p-5 text-skin-base bg-skin-fill">
      <h1 className="text-3xl font-bold mb-4">{thisun.Job}</h1>

      <div className="border border-red-500 rounded-md p-4 my-4">
        <p className="italic ">{thisun.joke}</p>
      </div>

      <div className='jsbubble'>
        
        <p className="mb-6">{thisun.Description}</p>
        <p className="mb-6">{thisun.description}</p>
      </div>

      <div className='jsbubble'>
        <h2 className="text-lg font-semibold mb-2">Ideas for the {thisun.Job}, use ChatGPT to:</h2>
        <ul className="list-disc list-inside mb-6">
          {thisun.tips.map((tip, index) => (
            <li key={index} className="">{tip}</li>
          ))}
        </ul>
      </div>

      <div className='jsbubble'>
        <h2 className="text-lg font-semibold mb-2">Prompts:</h2>
        <ul className="list-disc list-inside mb-6">
          {thisun.prompts.map((prompt, index) => (
            <li key={index} className="">{prompt}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobPage;
