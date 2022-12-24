import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Swal from "sweetalert2";

// API
const API_Products_URL = "http://localhost:3005/products";
// const API_Products_URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  product: {},
  relateProducts: [],
  isProductsLoading: false,
  error: null,
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(API_Products_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPostById = createAsyncThunk(
  "products/editPostById",
  async (DATA, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${API_Products_URL}/${DATA.id}`, {
        method: "PUT",
        body: JSON.stringify(DATA),
        headers: { "Content-Type": "application/json" },
      });
      return DATA;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Get product by id
    getProductById(state, action) {
      let product = state.products.find((el) => el.id == action.payload);
      state.product = product;
    },
    // Get Products by Category
    getAllProductsByCategory(state, action) {
      let productsCategory = state.products.filter(
        (el) => el.category === action.payload
      );
      state.relateProducts = productsCategory;
    },
    // Edit Post
    editPost: (state, action) => {
      let otherProducts = state.products.filter(
        (el) => el.id != action.payload.id
      );
      otherProducts.push(action.payload);
      state.products = otherProducts;
    },
  },
  extraReducers: {
    // get ALl Products
    [getAllProducts.pending]: (state, action) => {
      state.isProductsLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isProductsLoading = false;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isProductsLoading = false;
      state.error = action.payload;
    },
    // edit Product
    [editPostById.pending]: (state, action) => {
      state.isProductsLoading = true;
      state.error = null;
    },
    [editPostById.fulfilled]: (state) => {
      state.isProductsLoading = false;
    },
    [editPostById.rejected]: (state, action) => {
      state.isProductsLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductById, getAllProductsByCategory, editPost } =
  productsSlice.actions;
export default productsSlice.reducer;
