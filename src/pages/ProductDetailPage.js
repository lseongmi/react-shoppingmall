import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./ProductDetailPage.module.css";

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <h2>상품을 찾을 수 없습니다.</h2>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    );
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원";
  };

  return (
    <div className={style.section}>
      <div>
        <div>
          <img src={product.imageUrl} alt={product.name} />
        </div>

        <div className={style.info}>
          <span style={{ fontSize: "20px" }}>{product.category}</span>
          <h1 style={{ fontSize: "20px" }}>{product.name}</h1>
          <p style={{ color: "#3cd6c9" }}>{formatPrice(product.price)}</p>
        </div>

        <div>
          <h3 style={{ paddingTop: "20px" }}>상품 설명</h3>
          <p>{product.description}</p>
        </div>

        <div>
          <div>
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              style={{
                backgroundColor: "#d6413c",
                border: "none",
                borderRadius: "5px",
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              style={{
                backgroundColor: "#3cd6c9",
                border: "none",
                borderRadius: "5px",
              }}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "40px",
              backgroundColor: "#3cd6c9",
              border: "none",
              borderRadius: "5px",
              height: "30px",
              marginBottom: "10px",
            }}
          >
            장바구니에 추가!!
          </button>
        </div>

        <div>
          <Link to="/">← 계속 쇼핑하기</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
