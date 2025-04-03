import { Link } from "react-router-dom";

// 개별 상품을 표시하는 컴포넌트
function ProductItem({ product, addToCart }) {
  const { id, name, price, imageUrl, category } = product;

  const handleAddToCart = () => {
    addToCart(product);
  }; //현재상품 (product)를 장바구니에 추가

  const formatprice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"; //세자리 마다 쉼표를 삽입하고 원을 붙인다.
  };

  return (
    <div>
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt={name} />
        </Link>
      </div>

      <div className="product-info">
        <span>{category}</span>
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
          {/* 템플릿 리터럴을 이용한 동적 url 생성 */}
          {/* Link와 a 태그의 차이점 : Link는 새로고침을 하지 않는다. 간편하고 더 빠르다 */}
        </h3>
        <p>{formatprice(price)}</p>
      </div>

      <div className="product-actions">
        <button onClick={handleAddToCart}>장바구니 추가</button>
      </div>
    </div>
  );
}

export default ProductItem;
