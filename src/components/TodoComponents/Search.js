import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ inputChange, text }) => {
  return (
    <div className="search-bar">
      <FaSearch />
      <form>
        <input 
          value={text}
          placeholder="Search Todo" 
          onChange={inputChange}/>
      </form>
    </div>
  );
};

export default Search;
