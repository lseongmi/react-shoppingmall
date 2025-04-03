import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../reset.css"
import style from "./nav.module.css";

function Header(cartItemCount, onSearch) {
  return (
    <header style={style.header}>
      <nav style={style.nav}>
        <li>
          <Link to="/" className={style.item}>
            홈
          </Link>
        </li>
        <li>
          <Link to="/category/의류" className={style.item}>
            의류
          </Link>
        </li>
        <li>
          <Link to="/category/전자기기" className={style.item}>
            전자기기
          </Link>
        </li>
        <li>
          <Link to="/category/악세서리" className={style.item}>
            악세서리
          </Link>
        </li>
      </nav>

      <div>
        <Link to="/" style={{textDecoration:"none", color: "#000"}}>
          <h1 className={style.title}>리액트 쇼핑몰</h1>
        </Link>
      </div>

      <div className={style.search}>
        <SearchBar onSearch={onSearch} />

        <div>
          <Link to="/cart" className={style.item}>
            <span className={style.item}>shopping_cart </span>
            {cartItemCount > 0 && <span>{cartItemCount}</span>}
            {/* 조건부 (장바구니에 없으면 안 보여주겠다) */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
