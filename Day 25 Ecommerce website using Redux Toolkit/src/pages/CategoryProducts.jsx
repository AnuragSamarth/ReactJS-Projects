import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

function CategoryProdycts() {
  const { categoryProducts, loading, error } = useSelector(
    (state) => state.categoryList
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

//   console.log(categoryProducts);
  return (
    <>
      <div className="w-full flex flex-wrap justify-between p-10">
        {categoryProducts &&
          categoryProducts.map((product) => (
            <Card key={product.id} product={product} id={product.id} path={`/category-product-detail/`} />
          ))}
      </div>
    </>
  );
}

export default CategoryProdycts;
