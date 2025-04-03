import ProductItme from "./ProductItem";

function ProductList({
  products,
  addToCart,
  categoryFilter = null,
  searchTerm = "",
}) {
  //카테고리 필터적용
  let filterProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products; //filter 메소드 : 주어진 조건을 만족하는 요소만 포함하는 new 배열을 반환

  //검색이 필터 적용 (대소문자 구분제거)
  if (searchTerm) {
    filterProducts = filterProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
    );
  }

  return (
    <div className="product-list-container">
      {filterProducts.length === 0 ? (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div>
          {filterProducts.map((product) => (
            <ProductItme
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
