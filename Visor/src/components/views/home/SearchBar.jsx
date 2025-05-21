import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full">
      <input 
        type="text" 
        placeholder="Search for supervisors..." 
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
