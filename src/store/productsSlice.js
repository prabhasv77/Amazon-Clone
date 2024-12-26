import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ productsPerPage, currentPage }) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
        (currentPage - 1) * productsPerPage
      }`
    );
    const data = await response.json();
    return {
      products: data.products,
      total: data.total,
    };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPages = Math.ceil(action.payload.total / 20);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
