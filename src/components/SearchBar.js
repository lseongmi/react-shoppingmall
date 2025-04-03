import React, { useState } from "react";
import style from "./Search.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="상품 검색 해주세요"
          value={searchTerm}
          onChange={handleChange}
          className={style.input}
        />
        <button type="submit" className={style.button}> 
          <span>검색</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
