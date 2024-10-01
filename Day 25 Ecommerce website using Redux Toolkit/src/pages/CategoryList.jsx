import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategory, fetchCategoryProducts, selectedCategory } from "../slices/categoryProductSlice";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CategoryList() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoryList
  );

  useEffect(() => {
    dispatch(fetchAsyncCategory());
  }, [dispatch]);

  // console.log(categories)
   
  function handleClick(e){
    const value = e.target.innerText;
    dispatch(selectedCategory(value));
    dispatch(fetchCategoryProducts(value)); 
    navigate('/category-products');
  }

  return <>
   <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Categories</h1>
      {categories && categories.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={handleClick}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
            >
              <span className="text-gray-800 font-medium">{category}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No categories found</div>
      )}
    </div>
  </>;
}

export default CategoryList;
