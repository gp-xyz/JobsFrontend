import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jobsData from '../../jobs.json';
import articles from '../../articles.json';

import Nav from './Nav';
import ArticleMenu from './ArticleMenu';
import Home from './Home';
import JobsMenu from './JobsMenu';
import JobPage from './JobPage';
import ArticlePage from './ArticlePage';
import About from './About';

function Router() {
  return (
    <BrowserRouter>
      <Nav jobsData={jobsData} />
      <div className='grid grid-cols-5 md:grid-cols-7 w-full p-2'>
        <div className='col-span-1'><JobsMenu jobsData={jobsData} /></div>

        <div className='flex flex-col md:flex-row col-span-4 md:col-span-6 items-start'>
          <div className='w-full col-span-5 md:col-span-4'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/occupation/:job" element={<JobPage jobsData={jobsData} />} />
              <Route path="/articles/:articleID" element={<ArticlePage articles={articles.articles} />} />
            </Routes>
          </div>
          <div className='px-2 pt-2'><ArticleMenu articles={articles.articles} /></div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default Router;
