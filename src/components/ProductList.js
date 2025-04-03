import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductList({ products, addToCart, categoryFilter = null, searchTerm = "" }) {
  const { category } = useParams(); // URL에서 카테고리 정보를 가져옴

  let filteredProducts = category || categoryFilter
    ? products.filter((product) => product.category === (category || categoryFilter))
    : products;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="product-list-container">
      {filteredProducts.length === 0 ? (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
