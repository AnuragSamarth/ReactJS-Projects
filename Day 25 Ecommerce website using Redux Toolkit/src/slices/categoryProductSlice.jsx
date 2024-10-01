import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategorys,
  fetchCategoryProducts as fetchCategoryProductsApi,
} from "../api";

const initialState = {
  categories: [],
  selectedCategory: "",
  categoryProducts: [],
  loading: false,
  error: null,
};

export const fetchAsyncCategory = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategorys();
      // console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "category/fetchProducts",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetchCategoryProductsApi(category);
      // console.log(response);
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsyncCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAsyncCategory.rejected, (state, action) => {
        state.error = action.payload || "Faild to fetch categorys";
      })
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state) => {
        state.error = action.payload || "Faild to fetch categorys products";
      });
  },
});

export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
