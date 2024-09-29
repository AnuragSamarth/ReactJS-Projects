import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api";

const initialState = {
  products: [],
  loading: false,
  error: null,
};


export const fetchAsync = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts();
    //   console.log(response.data.products)
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Faild to fetch products";
      });
  },
});


export default productsSlice.reducer;
