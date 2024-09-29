import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCategory } from "../slices/categoryProductSlice";
import { useEffect } from "react";

function CategoryList() {
    const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoryList
  );

  useEffect(() => {
    dispatch(fetchAsyncCategory());
  }, [dispatch]);

  console.log(categories)
  return <></>;
}

export default CategoryList;
