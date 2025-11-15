import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";
import { fetchProductsAPI } from "../api/api";
import { v4 as uuidv4 } from "uuid";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await fetchProductsAPI();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Omit<Product, "id" | "liked">>) {
      state.products.unshift({
        ...action.payload,
        id: uuidv4(),
        liked: false,
      });
    },
    toggleLike(state, action: PayloadAction<string>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product) product.liked = !product.liked;
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Ошибка загрузки новостей";
      });
  },
});

export const { addProduct, toggleLike, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
