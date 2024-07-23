import React from 'react';

interface FiltersProps {
  categories: string[];
  authors: string[];
  onCategoryChange: (category: string) => void;
  onAuthorChange: (author: string) => void;
  onSortChange: (sort: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ categories, authors, onCategoryChange, onAuthorChange, onSortChange }) => {
  return (
    <div className="filters">
      <div className="filter-category">
        <h4>Category</h4>
        {categories.map(category => (
          <label key={category}>
            <input type="checkbox" value={category} onChange={() => onCategoryChange(category)} />
            {category}
          </label>
        ))}
      </div>
      <div className="filter-author">
        <h4>Author</h4>
        {authors.map(author => (
          <label key={author}>
            <input type="checkbox" value={author} onChange={() => onAuthorChange(author)} />
            {author}
          </label>
        ))}
      </div>
      <div className="filter-sort">
        <h4>Sort By</h4>
        <select onChange={e => onSortChange(e.target.value)}>
          <option value="date_desc">Date (Latest to Earliest)</option>
          <option value="date_asc">Date (Earliest to Latest)</option>
          <option value="title_asc">Title (A-Z)</option>
          <option value="title_desc">Title (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;