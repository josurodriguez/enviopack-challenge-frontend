import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productos",
  initialState: {
    Products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.Products = action.payload.map(
        (item) => (item = { ...item, isAdd: false })
      );
    },
    resetProducts: (state, action) => {
      state.Products = state.Products.map(
        (item) => (item = { ...item, isAdd: false })
      );
    },
    productAdd: (state, action) => {
      state.Products = state.Products.map((item) =>
        action.payload.id === item.id ? { ...item, isAdd: true } : item
      );
    },
    productRemove: (state, action) => {
      state.Products = state.Products.map((item) =>
        item.id !== action.payload.id ? item : { ...item, isAdd: false }
      );
    },
  },
});
export const { loadProducts, productAdd, productRemove, resetProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
