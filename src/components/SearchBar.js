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
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="상품을 검색해주세요"
          value={searchTerm}
          onChange={handleChange}
          className={style.input}
        />
        <button type="submit" className={style.button}>
          검색
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
