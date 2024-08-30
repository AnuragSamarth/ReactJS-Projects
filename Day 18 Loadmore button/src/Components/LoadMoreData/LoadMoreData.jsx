import { useState } from "react";
import { useEffect } from "react";

function LoadMoreData() {
  const [products, setProudcts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result.products && result.products.length) {
        setProudcts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data !! Please Wait.</div>;
  }

  return (
    <>
      <div className=" flex flex-wrap mt-5">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className=" border-2 border-black mt-10 mb-5 w-40 ml-10"
              >
                <img src={item.images[0]} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          className="border-2 p-3 rounded-lg text-black border-black"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
      </div>
    </>
  );
}

export default LoadMoreData;
