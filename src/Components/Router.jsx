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
function Router() {
    return (
        <BrowserRouter>
            <Nav jobsData={jobsData}/>
            <div className='grid grid-cols-6 w-full p-2'>
                <div className='col-span-1'><JobsMenu jobsData={jobsData}/></div>
                <div className='col-span-4'>
                <Routes>
                    
                <Route exact path="/" element={<Home />} />
                <Route path="/occupation/:job" element={<JobPage jobsData={jobsData} />} />
                <Route path="/articles/:articleID" element={<ArticlePage articles={articles.articles} />} />
                </Routes>
                </div>
                <div className='col-span-1'><ArticleMenu articles={articles.articles} /></div>
            </div>
        </BrowserRouter>
    )
}

export default Router