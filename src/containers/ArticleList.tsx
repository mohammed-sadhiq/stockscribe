import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import '../assets/styles/articlelist.scss';

interface Article {
  id: string;
  title: string;
  date: string;
  author: string;
  source: string;
  description: string;
  image: string;
  url:string;
}

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('date_desc');

  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>('https://dummy-rest-api.specbee.site/api/v1/news');
        setArticles(response.data);
        setFilteredArticles(response.data);
        setLoading(false);

        // Extract categories and authors from articles
        const categories = Array.from(new Set(response.data.map((article: Article) => article.source)));
        setCategories(categories);
        const authors = Array.from(new Set(response.data.map((article: Article) => article.author)));
        setAuthors(authors);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    filterAndSortArticles();
  }, [selectedCategories, selectedAuthors, articles, sortOption]);

  useEffect(() => {
    updateCurrentArticles();
  }, [filteredArticles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAuthorChange = (author: string) => {
    setSelectedAuthors(prev =>
      prev.includes(author)
        ? prev.filter(a => a !== author)
        : [...prev, author]
    );
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
  };

  const filterAndSortArticles = () => {
    let filtered = articles;
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(article =>
        selectedCategories.includes(article.source)
      );
    }
    if (selectedAuthors.length > 0) {
      filtered = filtered.filter(article =>
        selectedAuthors.includes(article.author)
      );
    }
    setFilteredArticles(filtered);
    console.log("sortOption",sortOption)
    switch (sortOption) {
      case 'date_asc':
        console.log("date_asc")
     //   filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
     setFilteredArticles(prevState=>[...prevState].sort((a,b)=>new Date(a.date).getTime() - new Date(b.date).getTime()))
        return;
      case 'date_desc':
        console.log("date_desc")
       // filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
       setFilteredArticles(prevState=>[...prevState].sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime()))
        return;
      case 'title_asc':
        console.log("title_asc")
        //filtered.sort((a, b) => a.title.localeCompare(b.title));
        setFilteredArticles(prevState=>[...prevState].sort((a,b)=>a.title.localeCompare(b.title)))
        return;
      case 'title_desc':
        console.log("title_desc")
      //  filtered.sort((a, b) => b.title.localeCompare(a.title));
      setFilteredArticles(prevState=>[...prevState].sort((a,b)=>a.title.localeCompare(a.title)))
        return;
      default:
        break;
    }
    
    setFilteredArticles(filtered);
  };

  const updateCurrentArticles = () => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle));
  };

  return (
    <div className="articles-list-layout">
      <div className="filters-sidebar">
        <Filters 
          categories={categories}
          authors={authors}
          onCategoryChange={handleCategoryChange}
          onAuthorChange={handleAuthorChange}
          onSortChange={handleSortChange}
        />
      </div>
      <div className="articles-main">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="articles">
              {currentArticles.map((article: Article) => (
                <ArticleCard 
                  url ={article.url}
                  key={article.id}
                  title={article.title}
                  date={article.date}
                  author={article.author}
                  category={article.source}
                  description={article.description}
                  image={article.image}
                />
              ))}
            </div>
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;