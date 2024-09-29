import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsDetailsSlice";
import categoryReducer from './slices/categoryProductSlice';

const store = configureStore({
  reducer: {
    product: productsReducer,
    categoryList: categoryReducer
  },
});

export default store;
