// src/containers/ArticlesList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories]:any[] = useState([]);
  const [authors, setAuthors]:any[] = useState([]);

  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dummy-rest-api.specbee.site/api/v1/news');
        setArticles(response.data);
        setFilteredArticles(response.data);
        setLoading(false);

        // Extract categories and authors from articles
        const categories = Array.from(new Set(response.data.map((article: any) => article.category)));
        setCategories(categories);
        const authors = Array.from(new Set(response.data.map((article: any) => article.author)));
        setAuthors(authors);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    // Implement category filter logic
  };

  const handleAuthorChange = (author: string) => {
    // Implement author filter logic
  };

  const handleSortChange = (sort: string) => {
    // Implement sort logic
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="articles-list">
      <>
      <Filters 
        categories={categories}
        authors={authors}
        onCategoryChange={handleCategoryChange}
        onAuthorChange={handleAuthorChange}
        onSortChange={handleSortChange}
      />
      </>
      <>
      {loading ? (
        <Loader />
      ) : (
        <div className="articles">
          {currentArticles.map((article: any) => (
            <ArticleCard 
              key={article.id}
              title={article.title}
              date={article.date}
              author={article.author}
              category={article.category}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
      )}
      <Pagination 
        currentPage={currentPage}
        totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
        onPageChange={handlePageChange}
      />
      </>  
    </div>
  );
};

export default ArticlesList;