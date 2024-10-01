import { useState } from "react";
import { Link } from "react-router-dom";

function Card({product,id, path}) {
  const [isBtnClick, setIsBtnClick] = useState(false);
// console.log(key)
  function handleClick() {
    setIsBtnClick(!isBtnClick);
  }
//   console.log(isBtnClick);
  return (
    <>
    <div className="w-full max-w-sm mx-auto my-6 overflow-hidden bg-white rounded-lg shadow-lg">
      <Link to={`${path}${id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-gray-800 truncate">
              {product.title}
            </h2>
            <span className="text-xl font-semibold text-blue-600">
              ${product.price}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
        <button
          className={`px-4 py-2 text-sm font-medium text-white transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isBtnClick
              ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          }`}
          onClick={handleClick}
        >
          {isBtnClick ? "Go to Cart" : "Add to Cart"}
        </button>
        <Link
          to={`/product-detail/${id}`}
          className="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Details
        </Link>
      </div>
    </div>
    </>
  );
}

export default Card;
