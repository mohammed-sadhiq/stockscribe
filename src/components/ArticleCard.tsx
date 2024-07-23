// src/components/ArticleCard.tsx
import React from 'react';

interface ArticleCardProps {
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, author, category, description, image }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-details">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;