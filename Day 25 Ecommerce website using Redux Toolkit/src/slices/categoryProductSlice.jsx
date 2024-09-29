import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategorys } from "../api";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchAsyncCategory = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategorys();
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
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
      });
  },
});

export default categorySlice.reducer;