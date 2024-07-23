// src/components/ArticleCard.tsx
import React from 'react';

interface ArticleCardProps {
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  image: string;
  url:string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, author, category, description, image,url }) => {

  const baseUrl = `https://dummy-rest-api.specbee.site`
  
  return (
    <div className="article-card">
      <img src={`${baseUrl}/${image}`} alt={title} className="article-image" />
      <div className="article-details">
      <a href={url} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{description}</p>
    </a>
      </div>
    </div>
  );
};

export default ArticleCard;