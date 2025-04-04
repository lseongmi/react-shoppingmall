import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";

// 개별 상품을 표시하는 컴포넌트
function ProductItem({ product, addToCart }) {
  const { id, name, price, imageUrl, category } = product;

  const handleAddToCart = () => {
    addToCart(product); // 현재상품 (product)를 장바구니에 추가
  };

  const formatprice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"; // 세자리 마다 쉼표를 삽입하고 원을 붙인다.
  };

  return (
    <div className={style.section}>
      <div className={style.productImage}>
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt={name} className={style.img} />
        </Link>
      </div>

      <div className={style.info}>
        <span className={style.category}>{category}</span>
        <h3>
          <Link to={`/product/${id}`} className={style.productLink}>
            {name}
          </Link>
        </h3>
        <p className={style.price}>{formatprice(price)}</p>
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
