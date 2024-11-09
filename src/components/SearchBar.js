import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    if (title) {
      onSearch(title);
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Wprowadź tytuł filmu..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 flex-grow"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded p-2 ml-2"
      >
        Szukaj
      </button>
    </div>
  );
}

export default SearchBar;