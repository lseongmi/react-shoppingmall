import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./ProductDetailPage.module.css";

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={style.notFound}>
        <h2>상품을 찾을 수 없습니다.</h2>
        <Link to="/" className={style.homeLink}>
          홈으로 돌아가기
        </Link>
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
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  return (
    <div className={style.section}>
      <div className={style.productContainer}>
        <div className={style.imageContainer}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={style.productImage}
          />
        </div>

        <div className={style.info}>
          <span className={style.category}>{product.category}</span>
          <h1 className={style.productName}>{product.name}</h1>
          <p className={style.price}>{formatPrice(product.price)}</p>
        </div>

        <div className={style.description}>
          <h3 className={style.descriptionTitle}>상품 설명</h3>
          <p>{product.description}</p>
        </div>

        <div className={style.actions}>
          <div className={style.quantityControl}>
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className={`${style.quantityButton} ${style.decreaseButton}`}
            >
              -
            </button>
            <span className={style.quantityDisplay}>{quantity}</span>
            <button
              onClick={handleIncrease}
              className={`${style.quantityButton} ${style.increaseButton}`}
            >
              +
            </button>
          </div>

          <button onClick={handleAddToCart} className={style.addToCartButton}>
            장바구니에 추가
          </button>
        </div>

        <div className={style.navigation}>
          <Link to="/" className={style.continueShoppingLink}>
            ← 계속 쇼핑하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
