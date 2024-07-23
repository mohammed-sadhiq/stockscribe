import React from 'react';
import './assets/styles/main.scss';
import ArticlesList from './containers/ArticleList';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>$tocksScribe</h1>
      </header>
      <main>
        <ArticlesList />
      </main>
    </div>
  );
};

export default App;