import React from 'react';

function TransactionSearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <label>
        Search by Description:
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default TransactionSearchBar;

