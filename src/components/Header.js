import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../reset.css";
import style from "./nav.module.css";

function Header({ cartItemCount, onSearch }) {
  return (
    <header>
      <nav className={style.nav}>
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
          <Link to="/category/액세서리" className={style.item}>
            액세서리
          </Link>
        </li>
      </nav>
      <div>
        <Link to="/" className={style.title}>
          <h1>리액트 쇼핑몰</h1>
        </Link>
      </div>
      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
        <div>
          <Link to="/cart" className={style.item}>
            <span className={style.cartIcon}>
              🛒
              {cartItemCount > 0 && (
                <span className={style.cartBadge}>{cartItemCount}</span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
