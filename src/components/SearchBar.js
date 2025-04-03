import React, { useState } from "react";
import style from "./Search.module.css"

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
      <from onSumit={handleSumit} className={style.form}>
        <input
          type="text"
          placeholder="상품 검색 해주세요"
          value={searchTerm}
          onChange={handleChanges}
          className={style.input}
        />
        <button type="sumit" className={style.button}>
          <span>검색</span>
        </button>
      </from>
    </div>
  );
}

export default SearchBar;
