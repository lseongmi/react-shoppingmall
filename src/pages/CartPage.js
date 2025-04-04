import React from "react";
import Cart from "../components/Cart";
import style from "./CartPage.module.css";

function CartPage({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  return (
    <div className={style.cartPageContainer}>
      <div className={style.cartHeader}>
        <h1 className={style.pageTitle}>장바구니</h1>
        {cartItems && cartItems.length > 0 && (
          <span className={style.itemCount}>({cartItems.length} 상품)</span>
        )}
      </div>

      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default CartPage;
