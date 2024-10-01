import { useEffect } from "react";
import Card from "../components/Card/Card";
import SearchField from "../components/SearchField/SearchField";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../slices/productsDetailsSlice";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  // console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAsync());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SearchField />
      <div className="w-full flex flex-wrap justify-between p-10">
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} id={product.id} path={`/product-detail/`}/>
          ))}
      </div>
    </>
  );
}

export default Home;
