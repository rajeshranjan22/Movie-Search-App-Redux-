import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (query.trim() !== '') {
            dispatch(fetchMovies(query));
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;