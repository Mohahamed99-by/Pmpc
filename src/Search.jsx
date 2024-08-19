// Search.js
import React from 'react';

const Search = ({ search, handleSearch }) => {
    return (
        <input className='search mt-4 mb-4'
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products"
        />
    );
};

export default Search;
