import React from "react";
import style from "./CartItem.module.css";

function CartItem({ item, updateQuantity, removeFromCart }) {
  const { product, quantity } = item;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  return (
    <div className={style.cartItem}>
      <div className={style.productImage}>
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className={style.productInfo}>
        <h3 className={style.productName}>{product.name}</h3>
        <p className={style.productPrice}>{formatPrice(product.price)}</p>
      </div>

      <div className={style.quantityControl}>
        <button
          onClick={handleDecrease}
          disabled={quantity <= 1}
          className={`${style.quantityButton} ${
            quantity <= 1 ? style.disabled : ""
          }`}
        >
          -
        </button>
        <span className={style.quantity}>{quantity}</span>
        <button onClick={handleIncrease} className={style.quantityButton}>
          +
        </button>
      </div>

      <div className={style.totalPrice}>
        {formatPrice(product.price * quantity)}
      </div>

      <button onClick={handleRemove} className={style.removeButton}>
        <span>삭제</span>
      </button>
    </div>
  );
}

export default CartItem;
