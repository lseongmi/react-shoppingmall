import React from "react";
import ProductList from "../components/ProductList";
import style from "./HomePage.module.css";

function HomePage({ products, addToCart, searchTerm }) {
  return (
    <div className={style.section}>
      <div>
        <div className={style.title}>
          <h1
            style={{
              fontSize: "25px",
              marginTop: "100px",
              paddingBottom: "10px",
              color: "#3cd6c9",
            }}
          >
            리액트로 만든 쇼핑몰에 오신 것을 환영합니다.
          </h1>
          <p>다양한 상품을 둘러보세요.</p>
        </div>
      </div>

      <div>
        <h2>{searchTerm ? `${searchTerm} 검색결과` : "모든 상품"}</h2>
        <ProductList
          products={products}
          addToCart={addToCart}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default HomePage;
