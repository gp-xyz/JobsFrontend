import React from 'react';
import { useParams } from 'react-router-dom';

function ArticlePage({ articles }) {
  const { articleID } = useParams();

  // Get the article content based on the articleID
  const articleContent = articles[articleID];

  if (!articleContent) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 p-10">{articleContent.headline}</h1>
      <p className="text-gray-600 m-4">{articleContent.date}</p>
      <div className="prose p-10" dangerouslySetInnerHTML={{ __html: articleContent.content }} />
    </div>
  );
}

export default ArticlePage;
