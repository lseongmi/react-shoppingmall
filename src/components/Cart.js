import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import style from "../pages/CartPage.module.css";

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  };

  const handleCheckout = () => {
    alert("결제로 넘어갑니다. (구현되지 않음)");
  };

  return (
    <div>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <div className={style.emptyCart}>
          <p>장바구니가 비어있습니다.</p>
          <Link to="/" className={style.continueShopping}>
            쇼핑 계속하기
          </Link>
        </div>
      ) : (
        <>
          <div>
            <span>상품</span>
            <span>수량</span>
            <span>합계</span>
            <span></span>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div>
            <h3>총 합계: {formatPrice(calculateTotal())}</h3>
            <button onClick={handleCheckout}>결제하기</button>
            <button onClick={clearCart}>장바구니 비우기</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
