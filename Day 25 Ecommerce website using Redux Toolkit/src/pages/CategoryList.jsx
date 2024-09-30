import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategory, fetchCategoryProducts, selectedCategory } from "../slices/categoryProductSlice";
import { useEffect } from "react";

function CategoryList() {
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
  }

  return <>
     <div>
      <h1>Category List</h1>
      {categories && categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={handleClick} className=" cursor-pointer">{category}</li>
          ))}
        </ul>
      ) : (
        <div>No categories found</div>
      )}
    </div>
  </>;
}

export default CategoryList;
