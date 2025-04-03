import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../reset.css";
import style from "./nav.module.css";
import ProductItem from "./ProductItem";

function Header({ cartItemCount, onSearch }) {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <li>
          <Link to="/" className={style.item}>홈</Link>
        </li>
        <li>
          <Link to="/category/의류" className={style.item}>의류</Link>
        </li>
        <li>
          <Link to="/category/전자기기" className={style.item}>전자기기</Link>
        </li>
        <li>
          <Link to="/category/액세서리" className={style.item}>액세서리</Link>
        </li>
      </nav>
      <div>
        <Link to="/" className={style.title} style={{ textDecoration: "none", color: "#000" }}>
          <h1>리액트 쇼핑몰</h1>
        </Link>
      </div>
      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
        <div>
          <Link to="/cart" className={style.item}>
            <span>shopping_cart </span>
            {cartItemCount > 0 && <span>({cartItemCount})</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
