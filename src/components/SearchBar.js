import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <from onSumit={handleSumit}>
        <input
          type="text"
          placeholder="상품 검색 해주세요"
          value={searchTerm}
          onChange={handleChanges}
        />
        <button type="sumit">
          <span>검색</span>
        </button>
      </from>
    </div>
  );
}

export default SearchBar;
