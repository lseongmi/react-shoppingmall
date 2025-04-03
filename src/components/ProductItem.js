import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";

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
    <div className={style.section}>
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt={name} className={style.img} />
        </Link>
      </div>

      <div className={style.info}>
        <span className={style.category}>{category}</span>
        <h3>
          <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
            {name}
          </Link>
          {/* 템플릿 리터럴을 이용한 동적 url 생성 */}
          {/* Link와 a 태그의 차이점 : Link는 새로고침을 하지 않는다. 간편하고 더 빠르다 */}
        </h3>
        <p style={{ color: "#3cd6c9", marginBottom: "10px" }}>
          {formatprice(price)}
        </p>
      </div>

      <div>
        <button onClick={handleAddToCart} className={style.action}>
          장바구니 추가
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
