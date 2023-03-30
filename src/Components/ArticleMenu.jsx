import React from 'react';
import { Link } from 'react-router-dom';

function ArticleMenu({ articles }) {
  if (!articles) return null; // add null/undefined check

  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg mb-4">Articles</div>
      <ul className="space-y-2">
        {Object.keys(articles).map((id) => (
          <li key={id}>
            <Link to={`/articles/${id}`} className="text-blue-600 hover:underline">
              {articles[id].headline} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleMenu;
