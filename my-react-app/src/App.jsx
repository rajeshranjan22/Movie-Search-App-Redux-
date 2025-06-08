import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Movie Search App</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;