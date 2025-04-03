import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import products from "./data";
import "./App.css";

// 카테고리 페이지 컴포넌트 (카테고리 필터링 처리)
function CategoryPage({ addToCart, searchTerm }) {
  const { categoryName } = useParams();
  const filteredProducts = products.filter((p) => p.category === categoryName);

  return <HomePage products={filteredProducts} addToCart={addToCart} searchTerm={searchTerm} />;
}

// App의 내부 컴포넌트 - CartProvider 내부에서 useCart 훅을 사용하기 위함
function AppContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartItemCount,
  } = useCart();

  // 검색 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Header cartItemCount={getCartItemCount()} onSearch={handleSearch} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart} searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
          <Route path="/category/:categoryName" element={<CategoryPage addToCart={addToCart} searchTerm={searchTerm} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// 메인 App 컴포넌트
function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
