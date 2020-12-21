import React from 'react';
import './SearchBar.css';
function SearchBar(props) {
  return (
    <div className='searchBar'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={(e) => {
          props.changeFilter(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.searchCharacther();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
