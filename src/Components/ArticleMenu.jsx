import React from 'react';
import { Link } from 'react-router-dom';

function ArticleMenu({ articles }) {
  if (!articles) return null; // add null/undefined check

  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg mb-4">Articles</div>
      <ul className="space-y-2">
        {Object.keys(articles).map((id) => (
          <div className='border-b'>
            <Link to={`/articles/${id}`} className="text-skin-link text-xs md:text-sm underline hover:no-underline ">
              {articles[id].headline} 
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ArticleMenu;
